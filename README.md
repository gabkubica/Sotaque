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

## Dois modos com o mesmo código

- **Sotaque real** · `aulas/` → https://gabkubica.github.io/Sotaque/aulas/
  Começa sem alunos e sem dados de exemplo, com todas as atividades, provas, flashcards e aulas prontas.
  A professora cria a própria conta ("Criar minha conta"); os alunos recebem uma senha provisória gerada na hora.
  Dados na nuvem (Supabase, projeto "Sotaque", São Paulo): `app/cloud.js` faz o login e salva só o que mudou.
  - Professora: "Criar minha conta" (o e-mail precisa estar em `sq_teacher_allow`) e confirma pelo e-mail.
  - Aluno: a professora cadastra o e-mail; o aluno toca em "Primeiro acesso de aluno" e cria a senha.
  - Banco: `supabase/schema.sql` (tabelas sq_members, sq_invites, sq_records e regras de acesso) e
    `supabase/02-professores.sql` (lista de professores autorizados). Para autorizar alguém:
    `insert into public.sq_teacher_allow (email) values ('email@exemplo.com') on conflict do nothing;`
  - Os PDFs ainda ficam no aparelho onde foram importados.
- **Modo adm / demonstração** · `app/` → https://gabkubica.github.io/Sotaque/app/
  Com professores e alunos de exemplo (senha `sotaque123`), para testar tudo sem mexer no real (chave `sotaque:v2`).

`aulas/index.html` é a mesma página de `app/index.html`, com `window.SOTAQUE_MODE='real'` e os arquivos em `../app/`.
O estilo fica em `app/app.css` e o código principal em `app/main.js`.

### Desempenho (para abrir rápido no celular e no iPad)
- **Kids sob demanda**: figuras, atividades, livrinhos, Aulas Kids e caderno digital (~1 MB de código) não entram na
  abertura do app. Baixam quando alguém abre uma tela Kids; para quem tem aluno Kids, baixam sozinhos logo depois que o
  app abriu, quando o aparelho está parado (`KIDS_JS`, `kidsLoad()` e `needKids()` em `main.js`).
- **Service worker** (`app/sw.js`; o real usa `aulas/sw.js`, que importa o mesmo): código e estilo com `?v=` saem do
  aparelho sem esperar a rede; a página busca a versão nova primeiro (com internet lenta, após 4 s usa a guardada).
  Áudios, livrinhos e imagens ficam num cache à parte, que não é apagado a cada publicação.
- **Áudio Kids**: um mp3 pequeno por fala (`audio/k/`), baixado só quando tocado (antes: 15 MB de uma vez).
- **Listas de atividades e aulas**: só as miniaturas que aparecem na tela são desenhadas, e as folhas prontas ficam
  guardadas na memória (abrir de novo é instantâneo).
- **Nuvem** (`cloud.js`): a atualização a cada minuto pergunta só “id + data” de cada registro e baixa de novo apenas o
  que mudou (antes baixava todos os dados da professora a cada minuto).
- **Demonstração**: várias mudanças seguidas viram uma gravação só no navegador.

## app/ · Sotaque

**Professor ou professora** (Hoje · Agenda · Alunos · Tarefas · Desenvolvimento)
- Cada professor ensina um idioma (inglês ou francês) e só vê os próprios alunos, aulas, pedidos e tarefas.
- Horários livres e chave PIX são de cada professor.
- Agenda da semana gerada a partir do horário fixo de cada aluno (aulas de 1 h).
- Caderno de cada aluno: próxima aula, histórico com o resumo de cada aula, pacote e pagamento (PIX).
  A professora ajusta à mão o número de aulas restantes ("Ajustar", guardado como `adj` no pacote atual, sem mexer no
  histórico) e registra aulas dadas fora da agenda ("+ Aula dada": data, horário, realizada/falta e resumo; contam no pacote).
  Cada aula do histórico pode ficar ligada à apresentação de slides usada (`deckId`/`deckTitle` na aula): escolhida
  ao registrar, sugerida quando a professora apresentou para aquele aluno, e ligada sozinha se a aula está acontecendo.
  Embaixo de cada aula do histórico aparecem as tarefas enviadas depois dela (até a aula seguinte), com o status de cada uma.
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
- Conteúdo extra (`conteudo.js`): 30 atividades novas (A1–C1, inglês e francês, 12 com áudio), 12 tarefas completas
  (tema "Completa", com áudio), 71 baralhos novos ao todo (55 no total, 540 cartões) de flashcards e 12 aulas montadas. Prova de cada marco da
  trilha (70: 38 em inglês e 32 em francês), montada com as questões das tarefas do marco, até 3 com áudio e uma escrita;
  ficam em Biblioteca · Provas e nivelamento. Cinco cenas novas nas ilustrações: cozinha, esporte, bicicleta,
  presente e carrinho de bebê.
- Gramática nova (`gramatica.js`): 46 tarefas de 7 questões com tipos variados (34 de inglês, A1–C1, e 12 de francês),
  em temas que ainda faltavam (would like, past continuous, present perfect com ever/never, prepositions after adjectives,
  third conditional, modals of deduction in the past, reporting verbs, hedging, faire + infinitif, temps du récit…).
- Tudo no banco serve como homework. "Juntar": no banco, o + de cada atividade junta várias numa homework só
  (os áudios vão junto, na primeira questão de cada atividade). As 23 tarefas de inglês A1–B1 com 5 questões ou menos
  ganharam 3 exercícios cada (EXTRA_Q em `conteudo.js`).
- Inspirado no Ellii: imagens nas questões (cenas dos quadros; a professora escolhe no editor), 10 atividades com
  imagem (`imagens.js`) e dicionários ilustrados de flashcards; "Imprimir / PDF" de qualquer atividade (folha do aluno
  com nome, data, linhas e gabarito em página separada, rota `#imprimir-id`); planejador de curso na aba Aula
  (modelos → próximas aulas do aluno, com a data de cada aula → dadas; arrastar no computador, botões no celular).
- Mais ideias do Ellii (`extras.js`): leitura e escuta do dia no caderno do aluno (alterna texto e áudio do nível
  dele, 3 perguntas, sequência de dias; a professora vê os últimos 14 dias); pacotes de estudo (8 prontos ou montados
  com o +, liberados um por semana, a cada 3 dias, por dia ou todos de uma vez); comentário em cada questão na correção.
- Tipos novos de questão (`tipos.js`, um lugar só para tudo de cada tipo: resposta, correção, editor, impressão
  e gabarito): ditado (nota pelas palavras certas, na ordem), texto com lacunas e banco de palavras (`[resposta]`),
  encontre e corrija o erro (`{errada|certa}`), separar em grupos, reescrever com a palavra dada (estilo Cambridge),
  qual não combina (cartas com imagem), caça-palavras e palavras cruzadas (montados sozinhos; dica com imagem via
  `| img:cena`). 22 atividades prontas com eles (`atividades-tipos.js`, 154 questões, inglês e francês, A1–C1,
  jogos com imagens para crianças) e 23 imagens novas de vocabulário (`quadros-mais.js`: animais, comida,
  transporte, roupas, objetos da casa), também no seletor de imagem do editor.
- Mais 4 tipos (`tipos.js`): escolha no texto (`[*certa/errada]`), ordenar o diálogo ou o texto, ligar palavras às
  imagens e escreva o nome da imagem (`palavra | img:cena`). São 12 tipos novos ao todo.
- Revisão do banco (`revisao.js`): cada tarefa foi avaliada e ganhou uma questão de tipo novo onde fazia sentido
  (514 tarefas; ficam de fora as provas, o Au Pair e as 2 tarefas de imagem que já são visuais). Gramática e
  conjugação ganharam escolha no texto, encontre o erro, separar em grupos ou reescrever; vocabulário e crianças, imagens
  (ligar, nomear, qual não combina); leituras, "ordene as frases como no texto"; escutas, "ordene o diálogo" ou
  ditado de uma frase do áudio (montados do próprio texto, então o gabarito é sempre o do texto).
- Flashcards com mais imagens: 36 cenas novas (comida, roupas, clima, sentimentos, animais, casa, hobbies), imagem
  automática quando a palavra do cartão tem desenho (`AUTO_IMG` em `imagens.js`), capa do baralho com três cartões
  e 9 baralhos ilustrados novos (236 cartões com imagem, antes eram 35).
- Pacotes de estudo: dá para ver as atividades de cada pacote antes de mandar (com a data em que cada uma libera,
  "Ver" como o aluno vê, tirar e mudar a ordem).
- Slides são aulas completas, como uma mini apostila: explicação (com exemplos em áudio), tabela, "cuidado" (✗/✓),
  exercícios interativos com todos os tipos de questão (prefixos `escolha:`, `erro:`, `lacunas:`, `grupos:`,
  `reescreva:`, `ditado:` e o formato de "Colar várias questões"), resumo e conversa. 4 aulas prontas: Present
  perfect (B1, 17 slides), Past simple (A2), Au Pair: the interview (B1) e Le passé composé (A2). "Apostila (PDF)"
  imprime um slide por página.
- A aba Aula agora são as apresentações de slides (filtro por nível). Cada aula começa com um warm-up
  (música, cena de filme com link de busca no YouTube, jogo e pergunta), tem linha do tempo para a gramática e
  termina com atividades recomendadas do banco, que a professora manda como pacote. Desenho por cima do slide
  (botão **Anotar** abre uma barra só: caneta, marca-texto e texto, 5 cores, desfazer, limpar e pronto; no texto, clique no slide e digite, clique num texto para editar).
  **Lousa**: página em branco pautada para escrever e desenhar no meio da aula (fica salva por aula).
  **Áudios gravados**: as aulas prontas em inglês têm as falas em mp3 com voz neural (Kokoro-82M, Apache-2.0) em
  `app/audio/<id>.json`, que tocam dentro da página e entram no Meet quando a professora compartilha a guia com
  "Compartilhar áudio da guia". Aulas novas: `node scripts/audios-lista.js` e
  `python scripts/audios.py` (instruções no próprio script). Sem o áudio gravado, a voz do navegador lê como antes, salvo à parte por aula e slide, fora da apostila; na aula ao vivo o aluno vê o desenho.
  Tela cheia da página inteira (trocar de slide não sai mais dela).
- O tema "Completa" saiu do filtro (as homeworks completas foram para Vocabulário). Prévia e gabarito das provas
  mostram o player de áudio.
- Link fixo do Google Meet nas Configurações da professora (vale para os alunos sem link próprio).
- Slides de aula (`slides.js`, Biblioteca · Slides): capa, vocabulário com imagens e áudio, frases, diálogo, tirinha,
  pergunta, conversa, imagem e texto, com notas só para a professora; 6 aulas prontas (`slides-aulas.js`), editor
  com prévia e tela cheia (setas do teclado). Aula ao vivo: a professora liga e o aluno acompanha no aparelho dele
  (os slides mudam junto, o áudio toca lá e as respostas das perguntas chegam para a professora). Na nuvem usa o
  Realtime do Supabase (broadcast, sem tabela nova); no demo, entre abas do mesmo navegador.
- Tirinhas (`tirinhas.js`): 6 personagens desenhados no estilo dos quadros, com expressões e balões
  (`Nome (feliz): fala`, `---` separa os quadrinhos, `[cena]` dá o fundo). Tipo de questão "Complete a tirinha" e
  2 atividades prontas (inglês e francês).
- Atualizações: `python3 scripts/versao.py` marca os arquivos com a versão antes de publicar, e o `sw.js` busca sempre
  a versão nova quando há internet.
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

### Kids
- **Aluno Kids** (cadastro): criança com aula presencial; o e-mail é dos pais, que entram, veem as aulas, o resumo,
  os materiais e o caderno digital (só leitura). Campos: idade, responsável, WhatsApp, local e observações.
- **Caderno digital** (`caderno.js`, rota `#caderno-<aluno>`): caneta com pressão da Apple Pencil (contorno pelo
  perfect-freehand, MIT, em `vendor/`), marca-texto, borracha, texto (fonte Andika), figurinhas com as ilustrações,
  prêmios (Good job!, Super!…), foto, atividades coladas, páginas pautada/caligrafia/quadriculada/pontilhada/branca,
  capa com cor, padrão e título. Com caneta, a palma e o dedo não riscam (o dedo move e dá zoom); sem caneta, o dedo
  escreve e dois dedos movem/dão zoom. Fica fora do `#app` (os re-renders não apagam nada). Dados: `DB.cad` e
  `DB.cadp` (registros `cad` e `cadp` na nuvem, com `student_id` da criança).
- **Materiais para imprimir** (`kids.js`, aba **Kids** dentro da Biblioteca): 42 tipos × 22 temas, separados por idade
  (3–4 anos sem leitura, 5–6 letras, 7–8 palavras, 9–10 frases), gerados em SVG A4 com as ilustrações do **Fluent Emoji**
  (Microsoft, licença MIT; subconjunto de 296 figuras em `vendor/emoji-kids.js`) em versão colorida, contorno (colorir) e
  sombra. Inclui: ligue à sombra, encontre o igual, pré-escrita, big and small, quebra-cabeça, máscaras, primeira letra,
  pinte pela bolinha, cruzadinha, desembaralhe, monte a frase, leitura com V/F, pesquisa “Do you like…?”, cartões e mais.
  “Ligar à aula” e “Colar no caderno” guardam o material em `lesson.mats` (histórico e próxima aula).
- **Livrinhos** (`kids-arquivos.js`, `kids-livros.js`, `livros/<id>.json`): 46 histórias ilustradas em inglês do African
  Storybook (africanstorybook.org, licença **CC BY 4.0**, fonte: Global African Storybook Project no GitHub), separadas
  por idade, com narração gerada pelo Sotaque (Kokoro) em cada página. Leitor com “ler o livro todo”, tela cheia,
  impressão, colar a página no caderno, ligar à aula e atividades do livro (ordem da história, parte favorita).
  Os créditos (texto, ilustração, licença) aparecem no leitor, na impressão e nas atividades. Os pais também leem.
- **Meus materiais**: a professora envia PDFs e imagens (até 25 MB). A lista vai em `DB.kfiles` (registro `kfile`);
  o arquivo fica no aparelho (IndexedDB) e, no Sotaque com login, na nuvem em pedaços (`kblob`, fora do carregamento
  inicial e baixados só quando abertos). Imprimir, ligar à aula e colar qualquer página no caderno.
- **Áudio nas atividades**: o 🔈 nas folhas toca a palavra/frase (1.300 falas com voz neural, inclusive nas Aulas Kids: cada fala é um mp3 pequeno em `audio/k/`, baixado só quando tocada; índice em `audio/kids-idx.json`);
  funciona na tela, no caderno digital (a criança toca e ouve) e some na impressão. Atividades de escuta:
  Listen and circle, Listen and colour, Listen and number (com o roteiro da professora no rodapé).
- **Atividades mais completas** (`kids-mais.js`): Look and answer (Is it…? Yes, it is), cena da sala com perguntas
  (where/how many), jogo dos erros, ficha do animal com leitura e perguntas (16 animais), charadas, Can or can’t,
  rotina com relógios, compras com preços, tempo da semana, leia e desenhe o monstro, história em sequência,
  quiz com figuras, All about me, árvore da família, descreva a figura, a/an/some.
- **Mais 30 atividades** (`kids-aulas.js`): rimas, som inicial, padrões, gráfico de figuras, formas e cores das formas,
  opostos, sentimentos, Simon says (comandos), comida saudável, onde vive o animal, roupa e tempo, letrinhas, números por
  extenso, monte o rosto, jogo da velha, roleta, fantoches de dedo, marcador de página, plural, preposições (in/on/under),
  que horas são, dias da semana, estações, alfabeto, leia e desenhe, entrevista, diário, o que está errado, adjetivos.
  91 tipos no total.
- **Filtros da aba Kids**: abas Atividades · Aulas Kids · Livrinhos · Meus materiais, idade, busca (rimas, relógio,
  bingo…), tipo (vocabulário, escrever e traçar, jogos, músicas, arte e prêmios, ler e entender), “Só com áudio” e tema.
- **Aulas Kids** (slides de apresentação, rota `#kaula-<id>`): 69 aulas prontas (cada tema em 3 idades + Hello,
  cores, números, formas e ABC), com capa, vocabulário com áudio, “point to…”, sombra, frase modelo, música, jogo,
  atividade e tchau. Apresentar em tela cheia, imprimir, ligar à aula e **colar a aula toda (ou só uma página) no
  caderno digital** (no caderno: Inserir → Aulas Kids).
- **Capa do caderno**: botão “Capa” na barra; 16 cores, 18 fundos (espaço, fundo do mar, dinossauros, unicórnio, arco-íris,
  confete…), 6 etiquetas, 3 letras, título com sugestões, linha de baixo, lombada, nome e personagem principal.
- **Apresentação → aula**: ao escolher o aluno em “Aula para”, a apresentação vai para a aula marcada perto de agora,
  ou uma aula de agora é criada no histórico (dá para desfazer).

## site/ · Teacher Lexi

Página única: apresentação, formação (Letras Inglês-Português · PUCPR, 1 ano e meio nos EUA,
certificações em educação infantil bilíngue), para quem são as aulas, como funcionam,
depoimentos, dúvidas e botão de WhatsApp.

Para completar, edite o bloco `CONFIG` no começo do script de `site/index.html`:
- `whatsapp`: número com DDI e DDD, só os dígitos (ex.: `5541999998888`);
- `DEPOIMENTOS`: a lista de depoimentos reais dos alunos.
