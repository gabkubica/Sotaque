# Sotaque

Dois projetos de aulas de idiomas, no estilo visual **Quadros Winer**
(formas chapadas, uma paleta por imagem, granulado de papel).

| Pasta | O que é |
| --- | --- |
| [`app/`](app/) | **Sotaque**: plataforma de aulas particulares de inglês e de francês (professor e aluno) |
| [`site/`](site/) | **Teacher Lexi**: site de divulgação das aulas de inglês da Alexia |

Os dois são sites estáticos, sem etapa de build: basta abrir o `index.html` de cada pasta num navegador.

## app/ · Sotaque

**Professor ou professora** (Hoje · Agenda · Alunos · Tarefas)
- Cada professor ensina um idioma (inglês ou francês) e só vê os próprios alunos, aulas, pedidos e tarefas.
- Horários livres e chave PIX são de cada professor.
- Agenda da semana gerada a partir do horário fixo de cada aluno (aulas de 1 h).
- Caderno de cada aluno: próxima aula, histórico com o resumo de cada aula, pacote e pagamento (PIX).
- Remarcação: o aluno sugere até 3 horários (até 24 h antes) e o professor confirma.
- Tarefas com 6 tipos de questão: múltipla escolha, verdadeiro ou falso, completar a lacuna,
  ligar colunas, ordenar a frase e resposta escrita. As objetivas se corrigem sozinhas.
- Banco de tarefas, separado por idioma, do A1 ao C1, com filtros por nível, tema e tipo:
  - inglês: 159 tarefas e 972 questões (`banco.js`);
  - francês: 72 tarefas e 432 questões (`banco-fr.js`).
- "Colar várias questões": importa questões coladas do Word ou de um PDF.
- Trilha (opcional, aluno por aluno): cada nível dividido em marcos do tipo "consigo…" (`trilhas.js`).
  O professor libera a provinha de cada marco (10 questões sorteadas das tarefas do marco),
  avalia o resultado e decide a conquista; também pode marcar um marco direto, sem provinha,
  e emitir o certificado do nível quando achar justo.

**Aluno** (Meu caderno · Trilha · Tarefas)
- "Sua trilha no inglês/francês": mapa dos marcos, provinhas liberadas e certificados.
- Próxima aula, "Entrar na aula" e "Não posso ir"; histórico, pacote, tarefas e resultados.

Contas de teste (senha `sotaque123`):
- inglês: `professora@sotaque.app` · alunos `marina@`, `theo@`, `lucas@`, `julia@sotaque.app`;
- francês: `professor@sotaque.app` · alunos `beatriz@`, `rafael@`, `sofia@sotaque.app`.

Arquivos: `index.html` (o app), `banco.js` e `banco-fr.js` (bancos de tarefas), `trilhas.js` (marcos de cada nível), `quadros.js` (ilustrações).

**Estado atual:** modo demonstração, com os dados no `localStorage` do navegador.
Próximo passo para uso real: login e banco de dados (ex.: Supabase).

## site/ · Teacher Lexi

Página única: apresentação, formação (Letras Inglês-Português · PUCPR, 1 ano e meio nos EUA,
certificações em educação infantil bilíngue), para quem são as aulas, como funcionam,
depoimentos, dúvidas e botão de WhatsApp.

Para completar, edite o bloco `CONFIG` no começo do script de `site/index.html`:
- `whatsapp`: número com DDI e DDD, só os dígitos (ex.: `5541999998888`);
- `DEPOIMENTOS`: a lista de depoimentos reais dos alunos.
