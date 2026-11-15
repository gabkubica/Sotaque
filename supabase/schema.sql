-- =========================================================
-- Sotaque · estrutura do banco no Supabase
-- Rodar uma vez em: SQL Editor → New query → colar tudo → Run.
-- Pode rodar de novo sem problema: não apaga dados.
--
-- sq_members  quem é quem: cada login (auth.users) vira professora ou aluno de uma professora
-- sq_invites  e-mails que a professora cadastrou; só esses alunos conseguem criar conta
-- sq_records  os dados do Sotaque (alunos, aulas, homework, respostas, flashcards…), um registro por item
-- =========================================================

create table if not exists public.sq_members (
  uid        uuid primary key references auth.users(id) on delete cascade,
  role       text not null check (role in ('teacher','student')),
  teacher_id uuid not null,
  app_id     text not null,
  email      text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.sq_invites (
  email      text primary key,
  teacher_id uuid not null references auth.users(id) on delete cascade,
  app_id     text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.sq_records (
  teacher_id uuid not null references auth.users(id) on delete cascade,
  id         text not null,
  kind       text not null,
  student_id text,
  data       jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (teacher_id, id)
);
create index if not exists sq_records_student on public.sq_records (teacher_id, student_id);

alter table public.sq_members enable row level security;
alter table public.sq_invites enable row level security;
alter table public.sq_records enable row level security;

-- quem está logado: professora dele, id dele no Sotaque e papel
create or replace function public.sq_my_teacher() returns uuid
  language sql stable security definer set search_path = public as
  $$ select teacher_id from public.sq_members where uid = auth.uid() $$;
create or replace function public.sq_my_app_id() returns text
  language sql stable security definer set search_path = public as
  $$ select app_id from public.sq_members where uid = auth.uid() $$;
create or replace function public.sq_my_role() returns text
  language sql stable security definer set search_path = public as
  $$ select role from public.sq_members where uid = auth.uid() $$;

-- sq_members: cada um vê a si mesmo; a professora vê os alunos dela
drop policy if exists "membros: ver" on public.sq_members;
create policy "membros: ver" on public.sq_members for select to authenticated
  using (uid = auth.uid() or teacher_id = auth.uid());

-- sq_invites: só a professora dona mexe nos convites dela
drop policy if exists "convites: professora" on public.sq_invites;
create policy "convites: professora" on public.sq_invites for all to authenticated
  using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());

-- sq_records: a professora mexe em tudo o que é dela
drop policy if exists "registros: professora" on public.sq_records;
create policy "registros: professora" on public.sq_records for all to authenticated
  using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());

-- o aluno lê o que é dele e o que é geral da professora (nome dela, horários, baralhos…), nunca de outro aluno
drop policy if exists "registros: aluno lê" on public.sq_records;
create policy "registros: aluno lê" on public.sq_records for select to authenticated
  using (public.sq_my_role() = 'student' and teacher_id = public.sq_my_teacher()
         and (student_id = public.sq_my_app_id() or student_id is null));

-- o aluno grava só as próprias respostas, pedidos de remarcação, flashcards e autoavaliação
drop policy if exists "registros: aluno cria" on public.sq_records;
create policy "registros: aluno cria" on public.sq_records for insert to authenticated
  with check (public.sq_my_role() = 'student' and teacher_id = public.sq_my_teacher()
              and student_id = public.sq_my_app_id() and kind in ('task','request','flashp','cando','user'));
drop policy if exists "registros: aluno altera" on public.sq_records;
create policy "registros: aluno altera" on public.sq_records for update to authenticated
  using (public.sq_my_role() = 'student' and teacher_id = public.sq_my_teacher()
         and student_id = public.sq_my_app_id() and kind in ('task','request','flashp','cando','user'))
  with check (public.sq_my_role() = 'student' and teacher_id = public.sq_my_teacher()
              and student_id = public.sq_my_app_id() and kind in ('task','request','flashp','cando','user'));
drop policy if exists "registros: aluno apaga pedido" on public.sq_records;
create policy "registros: aluno apaga pedido" on public.sq_records for delete to authenticated
  using (public.sq_my_role() = 'student' and teacher_id = public.sq_my_teacher()
         and student_id = public.sq_my_app_id() and kind = 'request');

-- ao criar uma conta pelo Sotaque: professora entra direto; aluno só se a professora cadastrou o e-mail
create or replace function public.sq_on_signup() returns trigger
  language plpgsql security definer set search_path = public as $$
declare
  meta jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  inv  public.sq_invites%rowtype;
begin
  if coalesce(meta->>'app','') <> 'sotaque' then
    return new;  -- conta de outro sistema: não mexe
  end if;
  if meta->>'role' = 'teacher' then
    insert into public.sq_members (uid, role, teacher_id, app_id, email)
    values (new.id, 'teacher', new.id, new.id::text, lower(new.email))
    on conflict (uid) do nothing;
  else
    select * into inv from public.sq_invites where email = lower(new.email);
    if not found then
      raise exception 'SOTAQUE_SEM_CONVITE';
    end if;
    insert into public.sq_members (uid, role, teacher_id, app_id, email)
    values (new.id, 'student', inv.teacher_id, inv.app_id, lower(new.email))
    on conflict (uid) do nothing;
  end if;
  return new;
end $$;

drop trigger if exists sq_on_signup on auth.users;
create trigger sq_on_signup after insert on auth.users
  for each row execute function public.sq_on_signup();

-- acesso pela API (o projeto não expõe tabelas novas sozinho)
grant usage on schema public to anon, authenticated;
grant select on public.sq_members to authenticated;
grant select, insert, update, delete on public.sq_invites to authenticated;
grant select, insert, update, delete on public.sq_records to authenticated;
grant execute on function public.sq_my_teacher(), public.sq_my_app_id(), public.sq_my_role() to authenticated;
