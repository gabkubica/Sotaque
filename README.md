# Sotaque

Dois projetos de aulas de idiomas, no estilo visual **Quadros Winer**
(formas chapadas, uma paleta por imagem, granulado de papel).

| Pasta | O que é |
| --- | --- |
| [`app/`](app/) | **Sotaque**: plataforma de aulas particulares de inglês e de francês (professor e aluno) |
| [`site/`](site/) | **Teacher Lexi**: site de divulgação das aulas de inglês da Alexia |
| [`frances/`](frances/) | **Prof. Gabriel**: modelo de site para as futuras aulas de francês (dados de exemplo, editáveis no bloco `CONFIG`) |

Os dois são sites estáticos, sem etapa de build: basta abrir o `index.html` de cada pasta num navegador.

### No ar (GitHub Pages)

Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`, e salve.
Em um ou dois minutos ficam no ar:
- página de entrada: https://gabkubica.github.io/Sotaque/
- Sotaque: https://gabkubica.github.io/Sotaque/app/
- Teacher Lexi: https://gabkubica.github.io/Sotaque/site/
- Prof. Gabriel (modelo): https://gabkubica.github.io/Sotaque/frances/

O Sotaque é instalável no celular: no Chrome (Android), menu → *Instalar app*;
no Safari (iPhone), Compartilhar → *Adicionar à Tela de Início*. Ele abre em tela cheia,
com ícone próprio, e funciona sem internet com o que já foi aberto (`sw.js`, `manifest.webmanifest`).

## app/ · Sotaque

**Professor ou professora** (Hoje · Agenda · Alunos · Tarefas · Desenvolvimento)
- Cada professor ensina um idioma (inglês ou francês) e só vê os próprios alunos, aulas, pedidos e tarefas.
- Horários livres e chave PIX são de cada professor.
- Agenda da semana gerada a partir do horário fixo de cada aluno (aulas de 1 h).
- Caderno de cada aluno: próxima aula, histórico com o resumo de cada aula, pacote e pagamento (PIX).
- Remarcação: o aluno sugere até 3 horários (até 24 h antes) e o professor confirma.
- Tarefas com 6 tipos de questão: múltipla escolha, verdadeiro ou falso, completar a lacuna,
  ligar colunas, ordenar a frase e resposta escrita. As objetivas se corrigem sozinhas.
- Banco de tarefas, separado por idioma, do A1 ao C1, com filtros por nível, tema e tipo:
  363 tarefas e cerca de 2.100 questões (inglês 222, francês 141), sendo 40 escutas com áudio
  (`banco.js`, `banco-fr.js`, `provas.js` e a ampliação em `banco-extra.js`).
- "Colar várias questões": importa questões coladas do Word ou de um PDF.
- Banco também com escutas (o navegador lê o áudio em voz alta; linhas `A:` e `B:` viram duas vozes)
  e leituras novas (`provas.js`). Qualquer tarefa pode ter um "áudio para escuta".
  Velocidade do áudio em 0,75×, 1× ou 1,5×: dá para trocar a qualquer momento, até no meio da fala
  (ela recomeça da frase em que estava). A escolha fica guardada no aparelho.
- Navegação da professora: Hoje · Alunos · Aula · Homework · Biblioteca (Agenda e "Meu estudo" no menu do perfil).
  Aluno: Hoje · Homework · Flashcards · Trilha.
- Biblioteca com sub-abas: Atividades (o banco), Flashcards, Provas e nivelamento, PDFs.
- Flashcards (`flashcards.js`): baralhos com áudio e repetição espaçada (caixas de Leitner: 1, 2, 4, 8 e 16 dias);
  6 baralhos prontos (inglês e francês); a professora monta, estuda junto no modo aluno e manda para os alunos.
- PDFs (`pdfs.js`): importados e guardados no aparelho (IndexedDB), mostrados na aula com caneta e marca-texto;
  o texto de uma página vira uma atividade nova. Leitor: pdf.js 3.11.174 (Mozilla, Apache 2.0) em `vendor/pdfjs`.
- Aula (`aula.js`): sequência de blocos (texto, atividade, flashcards, página de PDF) para passar com a tela
  compartilhada; no fim, manda as atividades e baralhos como homework.
- Idioma do sistema (`i18n.js`): português ou inglês, escolhido pela professora em Configurações; vale para ela
  e para os alunos dela. Traduz a interface; o conteúdo das atividades fica como foi escrito.
- Au Pair (`aupair.js`, tema "Au Pair" no banco): preparação para a entrevista de inglês que a agência faz
  no Brasil (vida pessoal, inglês, experiência com crianças, "What would you do if…?", expectativas sobre os EUA).
  7 tarefas com áudio (A2–B1), incluindo uma simulação de speaking e as duas lições de casa. Páginas avulsas em
  `/aupair/`: lições de casa 1 e 2 (com correção na hora e link de respostas para a professora), roteiro de
  speaking com 42 perguntas e modo entrevista, e a aba escondida de respostas.
- Nivelamento (aba em Tarefas, ao lado do Banco; `nivelamento.js`), em inglês e francês, no formato dos
  testes de colocação (Oxford, Cambridge, Alliance Française), do A1 ao C1. Só para quem precisa:
  a professora escolhe o aluno e a versão, e o teste vai para as tarefas dele.
  - Rápido (uns 15 min): gramática (3 questões por nível, sorteadas), escuta (3 áudios), 1 escrita livre
    e fala opcional.
  - Completo (40 a 60 min): gramática e vocabulário (30), leitura (5 textos), escuta (5 áudios),
    3 escritas em degraus (a última opcional) e fala na aula, com roteiro em degraus.
  - As objetivas têm a opção "Não sei" e se corrigem sozinhas: um nível conta com 60% de acerto nele e nos
    de baixo, e 40% no seguinte vira "plus". A correção é própria: o professor vê os acertos nível por
    nível, classifica a escrita e a fala, recebe a sugestão final e define o nível, que atualiza o cadastro
    do aluno e pode ativar ou ajustar a trilha. O aluno vê o nível de partida com uma explicação.
  - Cada versão tem uma página com todas as questões e o gabarito. A conta de teste da Júlia já tem um
    teste completo entregue para avaliar.
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

- Desenvolvimento (aba só do professor): roteiro de estudo do próprio idioma, do A1 ao C2, mais a formação de
  professor (`desenvolvimento.js`). Francês: 351 itens e 38 missões (DELF/DALF, FLE). Inglês: 282 itens e 24 missões
  (exames Cambridge, TKT, CELTA, aulas para crianças). Cada item é marcado como "não comecei", "estudando" ou "domino";
  o botão "Já domino este nível" pula o que o professor já sabe. As missões têm passo a passo, campo de entrega e
  critérios de sucesso.

**Aluno** (Meu caderno · Trilha · Tarefas)
- "Sua trilha no inglês/francês": perfil por habilidade, mapa dos marcos com as listas "Eu consigo", provinhas, prova de nível e certificados.
- Próxima aula, "Entrar na aula" e "Não posso ir"; histórico, pacote, tarefas e resultados.

Contas de teste (senha `sotaque123`):
- inglês: `professora@sotaque.app` · alunos `marina@`, `theo@`, `lucas@`, `julia@sotaque.app`;
- francês: `professor@sotaque.app` · alunos `beatriz@`, `rafael@`, `sofia@sotaque.app`.

Arquivos: `index.html` (o app), `banco.js` e `banco-fr.js` (bancos de tarefas), `trilhas.js` (marcos de cada nível), `provas.js` (escutas, leituras e provas de nível), `banco-extra.js` (ampliação do banco), `quadros.js` (ilustrações).

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
