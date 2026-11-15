-- =========================================================
-- Sotaque · só e-mails autorizados criam conta de professor(a)
-- Antes de rodar: troque os dois e-mails no INSERT abaixo.
-- Para autorizar outra pessoa depois, rode só:
--   insert into public.sq_teacher_allow (email) values ('email@exemplo.com') on conflict do nothing;
-- =========================================================
create table if not exists public.sq_teacher_allow (
  email      text primary key,
  created_at timestamptz not null default now()
);
-- sem regras de acesso: ninguém lê nem altera pela internet, só por aqui (SQL Editor / Table Editor)
alter table public.sq_teacher_allow enable row level security;

insert into public.sq_teacher_allow (email) values
  (lower('EMAIL_DA_ALEXIA')),
  (lower('EMAIL_DO_GABRIEL'))
on conflict do nothing;

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
    if not exists (select 1 from public.sq_teacher_allow where email = lower(new.email)) then
      raise exception 'SOTAQUE_PROF_NAO_AUTORIZADO';
    end if;
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
