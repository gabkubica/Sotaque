# Sotaque

Dois projetos de aulas de idiomas, no estilo visual **Quadros Winer**
(formas chapadas, uma paleta por imagem, granulado de papel).

| Pasta | O que é |
| --- | --- |
| [`app/`](app/) | **Sotaque**: plataforma de aulas particulares (professora e aluno) |
| [`site/`](site/) | **Teacher Lexi**: site de divulgação das aulas de inglês da Alexia |

Os dois são sites estáticos, sem etapa de build: basta abrir o `index.html` de cada pasta num navegador.

## app/ · Sotaque

**Professora** (Hoje · Agenda · Alunos · Tarefas)
- Agenda da semana gerada a partir do horário fixo de cada aluno (aulas de 1 h).
- Caderno de cada aluno: próxima aula, histórico com o resumo de cada aula, pacote e pagamento (PIX).
- Remarcação: o aluno sugere até 3 horários (até 24 h antes) e a professora confirma.
- Tarefas com 6 tipos de questão: múltipla escolha, verdadeiro ou falso, completar a lacuna,
  ligar colunas, ordenar a frase e resposta escrita. As objetivas se corrigem sozinhas.
- Banco de tarefas de inglês: 159 tarefas e 972 questões, do A1 ao C1, com filtros por nível, tema e tipo.
- "Colar várias questões": importa questões coladas do Word ou de um PDF.

**Aluno** (Meu caderno · Tarefas)
- Próxima aula, "Entrar na aula" e "Não posso ir"; histórico, pacote, tarefas e resultados.

Contas de teste (senha `sotaque123`): `professora@sotaque.app`, `marina@sotaque.app`, `theo@sotaque.app`.

Arquivos: `index.html` (o app), `banco.js` (conteúdo do banco de tarefas), `quadros.js` (ilustrações).

**Estado atual:** modo demonstração, com os dados no `localStorage` do navegador.
Próximo passo para uso real: login e banco de dados (ex.: Supabase).

## site/ · Teacher Lexi

Página única: apresentação, formação (Letras Inglês-Português · PUCPR, 1 ano e meio nos EUA,
certificações em educação infantil bilíngue), para quem são as aulas, como funcionam,
depoimentos, dúvidas e botão de WhatsApp.

Para completar, edite o bloco `CONFIG` no começo do script de `site/index.html`:
- `whatsapp`: número com DDI e DDD, só os dígitos (ex.: `5541999998888`);
- `DEPOIMENTOS`: a lista de depoimentos reais dos alunos.
