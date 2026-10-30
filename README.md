# Sotaque

Dois projetos de aulas de idiomas, no estilo visual **Quadros Winer**
(formas chapadas, uma paleta por imagem, granulado de papel).

| Pasta | O que é |
| --- | --- |
| [`app/`](app/) | **Sotaque**: plataforma de aulas particulares de inglês e de francês (professor e aluno) |
| [`site/`](site/) | **Teacher Lexi**: site de divulgação das aulas de inglês da Alexia |

Os dois são sites estáticos, sem etapa de build: basta abrir o `index.html` de cada pasta num navegador.

### No ar (GitHub Pages)

Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`, e salve.
Em um ou dois minutos ficam no ar:
- página de entrada: https://gabkubica.github.io/sotaque/
- Sotaque: https://gabkubica.github.io/sotaque/app/
- Teacher Lexi: https://gabkubica.github.io/sotaque/site/

O Sotaque é instalável no celular: no Chrome (Android), menu → *Instalar app*;
no Safari (iPhone), Compartilhar → *Adicionar à Tela de Início*. Ele abre em tela cheia,
com ícone próprio, e funciona sem internet com o que já foi aberto (`sw.js`, `manifest.webmanifest`).

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
- Banco também com escutas (o navegador lê o áudio em voz alta; linhas `A:` e `B:` viram duas vozes)
  e leituras novas (`provas.js`). Qualquer tarefa pode ter um "áudio para escuta".
- Trilha (opcional, aluno por aluno), com base no Quadro Europeu (CEFR, volume complementar de 2020):
  - 70 marcos (38 em inglês, 32 em francês). Cada nível tem duas metades: o nível "cheio" e o "plus"
    (A2+, B1+, B2+), como no CEFR (`trilhas.js`);
  - cada marco traz frases "Eu consigo…" separadas por habilidade (ler, ouvir, escrever, falar),
    no estilo do Portfólio Europeu de Línguas: o aluno marca o que acha que consegue
    e o professor confirma;
  - perfil por habilidade numa régua de A1 a C1, com horas de aula e a referência de horas da Cambridge;
  - provinha do marco: 10 questões das tarefas do marco (até 3 viram escuta) mais uma escrita curta;
  - prova de nível no formato DELF/Cambridge: leitura, escuta, escrita e fala (na aula ao vivo),
    25 pontos cada. Escrita e fala usam critérios de 0 a 5. Sugestão de aprovação: 50/100
    e pelo menos 5/25 em cada parte. Quem decide é o professor;
  - certificado com o resultado de cada parte e linha do tempo das conquistas.

**Aluno** (Meu caderno · Trilha · Tarefas)
- "Sua trilha no inglês/francês": perfil por habilidade, mapa dos marcos com as listas "Eu consigo", provinhas, prova de nível e certificados.
- Próxima aula, "Entrar na aula" e "Não posso ir"; histórico, pacote, tarefas e resultados.

Contas de teste (senha `sotaque123`):
- inglês: `professora@sotaque.app` · alunos `marina@`, `theo@`, `lucas@`, `julia@sotaque.app`;
- francês: `professor@sotaque.app` · alunos `beatriz@`, `rafael@`, `sofia@sotaque.app`.

Arquivos: `index.html` (o app), `banco.js` e `banco-fr.js` (bancos de tarefas), `trilhas.js` (marcos de cada nível), `provas.js` (escutas, leituras e provas de nível), `quadros.js` (ilustrações).

**Estado atual:** modo demonstração, com os dados no `localStorage` do navegador.
Cada navegador guarda os próprios dados: o que a professora faz não chega ao aluno em outro aparelho.
Próximo passo para uso real: login e banco de dados na nuvem (ex.: Supabase).

## site/ · Teacher Lexi

Página única: apresentação, formação (Letras Inglês-Português · PUCPR, 1 ano e meio nos EUA,
certificações em educação infantil bilíngue), para quem são as aulas, como funcionam,
depoimentos, dúvidas e botão de WhatsApp.

Para completar, edite o bloco `CONFIG` no começo do script de `site/index.html`:
- `whatsapp`: número com DDI e DDD, só os dígitos (ex.: `5541999998888`);
- `DEPOIMENTOS`: a lista de depoimentos reais dos alunos.
