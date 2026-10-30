/* =========================================================
   Sotaque · trilhas por nível (inglês e francês)
   Base: descritores do Quadro Europeu (CEFR, Companion Volume 2020),
   níveis "plus" (A2+, B1+, B2+), Portfólio Europeu de Línguas (listas "Eu consigo")
   e o perfil de gramática por nível (English Grammar Profile / référentiels FLE).
   Cada marco: [tema, gramática e vocabulário, títulos de tarefas do banco, escrita curta, frases "Eu consigo"]
   Frase "Eu consigo": 'H|texto', onde H é a habilidade: L ler · O ouvir · E escrever · F falar e conversar.
   A primeira metade dos marcos é o nível "cheio"; a segunda é o nível "plus" (A2+, B1+, B2+).
   ========================================================= */
const SKILLS={L:'Ler',O:'Ouvir',E:'Escrever',F:'Falar'};
const SKILL_KEYS=['L','O','E','F'];
const TRILHAS={
  EN:{
    A1:[
      ['Primeiros contatos','Verb to be, cumprimentos, a/an',['Greetings and introductions','Verb to be','A or an?'],'Write 3 or 4 sentences about you: your name, where you are from and what you do.',
        ['F|Consigo cumprimentar, me despedir e me apresentar','F|Consigo perguntar o nome e de onde a pessoa é, e responder','O|Entendo quando me perguntam nome, idade e país, se falam devagar','L|Entendo uma ficha simples com nome, idade e nacionalidade','E|Consigo preencher um formulário com meus dados pessoais']],
      ['Família e números','Família, possessivos, números e idade',['Family members','Possessive adjectives','Numbers and age','Reading · Anna’s family'],'Write about your family: who they are and how old they are.',
        ['F|Consigo apresentar as pessoas da minha família','O|Entendo números, idades e preços em frases curtas','L|Entendo um texto curto sobre uma família','E|Escrevo frases simples sobre a minha família']],
      ['Perguntas do dia a dia','Question words, this/that, plurais',['Question words','This, that, these, those','Plurals'],'Write 4 questions you can ask a new classmate.',
        ['F|Consigo fazer e responder perguntas simples: quem, onde, quando, o quê','F|Consigo pedir para repetirem ou falarem mais devagar','O|Entendo perguntas curtas e diretas feitas com calma','E|Consigo escrever perguntas simples para conhecer alguém']],
      ['Descrever pessoas e coisas','Cores, roupas, corpo, have got',['Colours and clothes','Have got and has got','My body','Animals'],'Describe a person you like: what he or she looks like and wears.',
        ['F|Consigo descrever uma pessoa com palavras simples','L|Entendo descrições curtas de pessoas e animais','O|Reconheço cores, roupas e partes do corpo quando ouço','E|Escrevo frases curtas descrevendo alguém']],
      ['Minha casa','Cômodos, there is/are, preposições de lugar',['House and rooms','There is and there are','Prepositions of place'],'Describe your bedroom or your favourite room in your house.',
        ['F|Consigo descrever onde moro e como é a minha casa','O|Entendo onde as coisas estão quando alguém me explica','L|Entendo um anúncio simples de casa ou apartamento','E|Escrevo frases sobre a minha casa']],
      ['Minha rotina','Present simple, horas, dias e meses',['Present simple · I, you, we, they','Telling the time','Days, months and seasons','Reading · Tom’s day'],'Write about a normal day in your life: what time you get up, work or study and relax.',
        ['F|Consigo contar a minha rotina e dizer as horas','O|Entendo horários, dias e datas em frases simples','L|Entendo um texto curto sobre o dia de alguém','E|Escrevo um parágrafo curto sobre o meu dia']],
      ['Instruções e sala de aula','Imperativo, objetos da sala, frutas',['In the classroom','Imperatives','Fruits'],'Write 4 simple instructions for a new student in your class.',
        ['O|Entendo instruções simples dirigidas a mim','L|Entendo avisos e instruções curtas escritas','F|Consigo pedir objetos e ajuda na aula com frases prontas','E|Escrevo bilhetes curtos com instruções simples']],
      ['Tempo e datas especiais','Clima, feriados, sons do inglês',['The weather','Holidays','Sounds and rhymes','Colours and shapes'],'Write a short birthday or holiday card to a friend.',
        ['F|Consigo falar do tempo e das estações','O|Entendo uma previsão do tempo bem simples','L|Entendo convites e cartões curtos','E|Escrevo um cartão ou uma mensagem curta de parabéns']],
    ],
    A2:[
      ['Hábitos e gostos','Present simple, frequência, like + -ing',['Present simple · daily routine','Adverbs of frequency','Like, love, hate + -ing','Hobbies and free time'],'Write about what you usually do in your free time and what you love or hate doing.',
        ['F|Consigo falar dos meus hábitos e do que gosto de fazer','O|Entendo alguém falando da própria rotina, se a fala for clara','L|Entendo um perfil ou uma mensagem pessoal sobre gostos','E|Escrevo um texto curto sobre meus hobbies']],
      ['O que está acontecendo','Present continuous, sentimentos',['Present continuous','Present simple or continuous?','Feelings'],'Look around you and write what people are doing right now and how you feel.',
        ['F|Consigo descrever o que está acontecendo agora','F|Consigo dizer como estou me sentindo e perguntar ao outro','O|Entendo mensagens curtas sobre o que alguém está fazendo','E|Escrevo uma mensagem dizendo o que estou fazendo']],
      ['Contar o que aconteceu','Was/were e past simple',['Was and were','Past simple · regular verbs','Past simple · questions and negatives','Reading · A weekend in Rio'],'Write about your last weekend: where you went and what you did.',
        ['F|Consigo contar o que fiz no fim de semana ou nas férias','F|Consigo perguntar sobre o passado de outra pessoa','L|Entendo um relato simples de viagem ou de fim de semana','E|Escrevo um relato curto sobre algo que aconteceu']],
      ['Planos, regras e habilidades','Going to, in/on/at, can, must',['Going to · plans','In, on, at · time','Can and can’t','Must and mustn’t · rules'],'Write about your plans for next month and one rule you must follow at work or school.',
        ['F|Consigo falar dos meus planos e combinar um encontro','F|Consigo dizer o que sei e o que não sei fazer','L|Entendo regras e avisos simples','O|Entendo combinados de dia, hora e lugar']],
      ['Na cidade e nos transportes','Transporte, direções, preposições',['Transport','Directions in the city','Prepositions of place II'],'Explain to a visitor how to get from your house to a café or shop nearby.',
        ['F|Consigo pedir e dar informações de como chegar a um lugar','O|Entendo direções simples e avisos de transporte','L|Entendo horários e informações de transporte','E|Escrevo instruções curtas de como chegar a um lugar']],
      ['Compras e comida','Compras, quantidades, restaurante',['Shopping','Some, any, much, many','At the restaurant','In the kitchen'],'Write a short conversation between you and a waiter at a restaurant.',
        ['F|Consigo fazer compras, perguntar preços e pedir num restaurante','O|Entendo preços, quantidades e ofertas','L|Entendo cardápios, rótulos e anúncios simples','E|Escrevo uma lista de compras ou uma receita simples']],
      ['Falar com as pessoas','Small talk, telefone, pronomes, ’s',['Small talk','On the phone','Object pronouns','Possessive ’s','Reading · An email from Jake','Writing · A postcard'],'Write a postcard or an email to a friend telling them about a place you are visiting.',
        ['F|Consigo manter uma conversa curta e educada sobre assuntos do dia a dia','F|Consigo fazer e atender uma ligação simples','L|Entendo e-mails e cartões pessoais curtos','E|Escrevo um cartão-postal ou e-mail curto para um amigo']],
      ['Trabalho e cultura','Profissões, apresentação no trabalho, variantes do inglês',['Jobs and workplaces','Introducing yourself at work','British or American English?','Writing · My best friend'],'Introduce yourself to a new team: your name, your job and what you do every day.',
        ['F|Consigo me apresentar no trabalho e dizer o que faço','O|Entendo quando um colega explica a função dele','L|Entendo um texto curto sobre profissões e lugares de trabalho','E|Escrevo um parágrafo descrevendo uma pessoa importante para mim']],
    ],
    B1:[
      ['Histórias do passado','Past simple, past continuous, past perfect, used to',['Past simple · irregular verbs','Past continuous or past simple?','Past perfect','Used to'],'Tell a story about something surprising that happened to you.',
        ['F|Consigo contar uma história com começo, meio e fim','F|Consigo falar de como as coisas eram antes','O|Entendo uma história contada com clareza e o que aconteceu primeiro','E|Escrevo uma narrativa simples ligando os fatos']],
      ['Experiências de vida','Present perfect, for/since, present perfect continuous',['Present perfect or past simple?','Present perfect · for and since','Present perfect continuous','Reading · A week without social media'],'Write about an experience that changed you or something you have never done but want to do.',
        ['F|Consigo falar das minhas experiências e do que já fiz','L|Entendo relatos pessoais em blogs e revistas','O|Entendo pessoas contando experiências em conversas do dia a dia','E|Escrevo sobre experiências e sentimentos']],
      ['Futuro e possibilidades','Will, going to, zero e first conditional',['Will or going to?','Zero conditional','First conditional'],'Write about your plans and predictions for the next five years.',
        ['F|Consigo falar de planos, previsões e possibilidades','F|Consigo fazer promessas e ofertas','O|Entendo previsões e planos em programas de rádio simples','E|Escrevo sobre meus planos e o que vai acontecer se…']],
      ['Comparar e aconselhar','Comparativos, should/must/have to, too/enough, so/such',['Comparatives and superlatives','Should, must, have to','Too and enough','So and such'],'A friend wants to learn English. Give advice and compare two ways of studying.',
        ['F|Consigo comparar opções e dar conselhos','F|Consigo explicar por que prefiro uma coisa a outra','L|Entendo textos que comparam produtos, lugares ou opções','E|Escrevo uma mensagem dando conselhos a um amigo']],
      ['Conversar com naturalidade','Question tags, opinião, sugestões, chunks, sons',['Question tags','Agreeing and disagreeing','Making suggestions','Everyday chunks','Phrasal verbs with get','-ed endings'],'Write a short dialogue where two friends disagree about a film and make a suggestion.',
        ['F|Consigo dar minha opinião, concordar e discordar com educação','F|Consigo entrar numa conversa sobre um assunto conhecido sem me preparar','O|Entendo os pontos principais de uma conversa entre nativos sobre temas do dia a dia','E|Escrevo comentários curtos dando minha opinião']],
      ['Viagens, saúde e dinheiro','Aeroporto, corpo e saúde, dinheiro, look',['Travel and airports','Health and the body','Money','Phrasal verbs with look','Silent letters'],'Write an email to a hotel asking about prices, rooms and how to get there from the airport.',
        ['F|Consigo resolver a maioria das situações de uma viagem','F|Consigo explicar um problema de saúde ou uma reclamação','O|Entendo avisos e anúncios em aeroportos e estações','L|Entendo informações práticas de hotéis, passagens e serviços']],
      ['O mundo ao meu redor','Tecnologia, meio ambiente, educação, personalidade',['Technology','The environment','School and education','Personality','-ed or -ing adjectives?','Articles · a, an, the or nothing'],'Write a short article about a problem in your city and how to solve it.',
        ['L|Entendo artigos simples sobre temas atuais','O|Entendo as ideias principais de notícias de rádio e TV sobre temas conhecidos','F|Consigo descrever pessoas e opinar sobre temas atuais','E|Escrevo um texto curto e organizado sobre um tema atual']],
      ['Trabalho e e-mails','Entrevista, e-mails, take/put, falsos cognatos',['Job interviews','Writing work emails','Writing · An informal email','Phrasal verbs with take and put','False friends'],'Write an email to a colleague asking for help with a project and suggesting a meeting time.',
        ['F|Consigo participar de uma entrevista de emprego simples','E|Escrevo e-mails de trabalho claros e educados','L|Entendo e-mails e mensagens de trabalho do dia a dia','O|Entendo instruções e informações de trabalho detalhadas']],
    ],
    B2:[
      ['Relatar o que disseram','Reported speech, perguntas indiretas, tempos narrativos',['Reported speech','Indirect questions','Narrative tenses'],'Report a conversation you had recently: who said what and what you answered.',
        ['F|Consigo relatar o que outras pessoas disseram','F|Consigo fazer perguntas de forma indireta e educada','O|Entendo entrevistas e relatos com detalhes','E|Escrevo uma narrativa usando vários tempos verbais']],
      ['Voz passiva','Passiva, passiva com modais, have something done',['Passive voice','Passive with modals','Have something done'],'Describe how something is made or a process at your work.',
        ['L|Entendo textos informativos e técnicos sobre temas conhecidos','E|Consigo descrever processos e fatos em tom impessoal','F|Consigo explicar como algo funciona ou é feito','O|Entendo explicações e documentários sobre temas conhecidos']],
      ['Deduções e hipóteses','Modais de dedução, second conditional, futuros',['Modals of deduction','Second conditional','Future continuous and future perfect'],'What would you do if you could change one thing in the world? Explain your reasons.',
        ['F|Consigo especular sobre causas e consequências','F|Consigo falar de situações imaginárias','O|Entendo opiniões e hipóteses em discussões','E|Escrevo sobre situações hipotéticas e consequências']],
      ['Frases mais complexas','Orações relativas, gerúndio/infinitivo, conectores',['Relative clauses','Gerund or infinitive?','Linking words','Used to, be used to, get used to'],'Write about a change in your life you had to get used to.',
        ['E|Escrevo textos claros e detalhados com conectores variados','F|Consigo explicar ideias com frases mais longas e ligadas','L|Entendo artigos em que o autor defende um ponto de vista','O|Entendo falas longas se o tema for conhecido']],
      ['Argumentar e opinar','Opinião, reclamação formal, leitura de artigos',['Writing · An opinion paragraph','Writing · A formal complaint','Reading · Working from home','Reading · The cost of fast fashion','Reading · Maya in London'],'Is working from home better than working in an office? Write your opinion with reasons.',
        ['E|Escrevo um texto argumentativo com vantagens e desvantagens','E|Escrevo uma reclamação formal com clareza','L|Entendo artigos sobre problemas atuais e a posição do autor','F|Consigo defender meu ponto de vista com argumentos e exemplos']],
      ['Formação de palavras e temas da atualidade','Prefixos, sufixos, acento, notícias, crime, saúde',['Prefixes','Suffixes','Word stress','News and media','Crime and the law','Health and lifestyle','Make or do?'],'Summarise a piece of news you read or heard this week and give your opinion.',
        ['L|Entendo notícias e reportagens com vocabulário variado','O|Entendo a maior parte de notícias e programas de atualidades','F|Consigo resumir uma notícia e comentar','E|Escrevo um resumo com as ideias principais de um texto']],
      ['Phrasal verbs e expressões','Phrasal verbs do dia a dia e de relações, idioms',['Phrasal verbs do dia a dia','Phrasal verbs for relationships','Phrasal verbs with come and go','Idioms with body parts'],'Write about a friendship: how you met, got on and maybe fell out.',
        ['F|Uso phrasal verbs e expressões comuns com naturalidade','O|Entendo conversas informais entre nativos com expressões do dia a dia','L|Entendo textos informais, como posts e mensagens, com gírias comuns','E|Escrevo mensagens informais com naturalidade']],
      ['Reuniões e negociação','Reuniões, negociação, polidez',['Meetings','Negotiating','Phrasal verbs at work','Politeness in English'],'Write an email to a client proposing a solution to a problem and asking for a meeting.',
        ['F|Consigo participar de reuniões, dar opinião e interromper com educação','F|Consigo negociar e chegar a um acordo','O|Entendo discussões de trabalho na minha área','E|Escrevo e-mails formais adequados à situação']],
    ],
    C1:[
      ['Hipóteses complexas','Condicionais mistas, wish, if only, futuro no passado',['Conditionals · review','Third and mixed conditionals','Wish and if only','Future in the past'],'Write about a decision in your life: what would be different if you had decided otherwise?',
        ['F|Consigo falar de arrependimentos e hipóteses no passado com precisão','E|Escrevo textos com nuances de hipótese e condição','O|Entendo falas longas mesmo quando a estrutura não é clara','L|Entendo textos longos e complexos, percebendo nuances']],
      ['Ênfase e estrutura','Inversão, cleft sentences, do/did, orações com particípio',['Inversion','Cleft sentences','Emphasis with do and did','Participle clauses'],'Write a paragraph for a presentation, emphasising the most important point.',
        ['F|Consigo dar ênfase e variar a estrutura das frases ao falar','E|Escrevo textos bem estruturados, com estilo e variação','L|Percebo o efeito de estruturas de ênfase em textos','O|Entendo apresentações e palestras com estrutura complexa']],
      ['Registro formal','Passiva avançada, subjuntivo, formal x informal',['Advanced passive','The subjunctive','Formal or informal?','Formal business writing'],'Rewrite an informal message as a formal email to a director.',
        ['E|Adapto o registro do texto: formal, neutro ou informal','L|Entendo documentos formais, contratos e relatórios','F|Consigo mudar o tom da fala conforme a situação','O|Percebo diferenças de tom e de registro em quem fala']],
      ['Vocabulário preciso','Collocations, vocabulário acadêmico, binomials',['Collocations','Collocations II','Academic vocabulary','Binomials'],'Write a short academic-style paragraph about a topic you know well.',
        ['F|Escolho palavras precisas e uso collocations naturais','E|Escrevo com vocabulário amplo e preciso','L|Entendo textos acadêmicos e especializados da minha área','O|Entendo palestras e aulas sobre temas complexos']],
      ['Idiomaticidade','Idioms, provérbios, phrasal verbs avançados',['Everyday idioms','Business idioms','Idioms with colours','Proverbs','Advanced phrasal verbs'],'Write a short story or anecdote using at least three idioms naturally.',
        ['O|Entendo filmes, séries e conversas rápidas com expressões idiomáticas','F|Uso expressões idiomáticas de forma natural e adequada','L|Entendo ironia, humor e sentidos implícitos','E|Escrevo textos informais com naturalidade e expressões idiomáticas']],
      ['Textos longos e apresentações','Leitura de artigos, conectores de ensaio, apresentações',['Reading · The four-day week','Reading · The attention economy','Reading · Why we sleep','Writing · Essay connectors','Presentations'],'Write an essay introduction and conclusion on: “Technology makes us less patient.”',
        ['F|Consigo fazer uma apresentação clara e bem estruturada sobre um tema complexo','E|Escrevo ensaios claros e bem organizados sobre temas complexos','L|Entendo artigos longos de opinião e identifico argumentos e atitudes','O|Entendo debates longos e acompanho a argumentação']],
    ],
  },
  FR:{
    A1:[
      ['Premiers contacts','Cumprimentos e se présenter',['Les salutations','Se présenter'],'Écrivez 3 ou 4 phrases pour vous présenter : nom, nationalité, ville.',
        ['F|Consigo cumprimentar, me despedir e me apresentar','F|Consigo perguntar o nome e de onde a pessoa é, e responder','O|Entendo quando me perguntam nome, idade e país, se falam devagar','E|Consigo preencher uma ficha com meus dados pessoais']],
      ['Être et avoir','Être, avoir e artigos',['Être et avoir','Les articles'],'Écrivez 4 phrases sur vous avec être et avoir (âge, profession, caractère).',
        ['F|Consigo dizer minha idade, profissão e como sou','L|Entendo frases simples de apresentação','O|Reconheço être e avoir em frases curtas','E|Escrevo frases simples sobre mim']],
      ['La famille et les nombres','Família e números',['La famille','Les nombres'],'Présentez votre famille : qui sont les personnes et quel âge elles ont.',
        ['F|Consigo apresentar as pessoas da minha família','O|Entendo números, idades e preços em frases curtas','L|Entendo um texto curto sobre uma família','E|Escrevo frases simples sobre a minha família']],
      ['Décrire','Cores, corpo e animais',['Les couleurs','Le corps','Les animaux'],'Décrivez votre animal préféré ou une personne de votre famille.',
        ['F|Consigo descrever pessoas e animais com palavras simples','O|Reconheço cores e partes do corpo quando ouço','L|Entendo descrições curtas','E|Escrevo frases curtas descrevendo alguém']],
      ['Ma journée','Verbos em -er, dias e meses',['Les verbes en -er','Les jours et les mois','Lecture · Je m’appelle Léa'],'Racontez une journée normale : à quelle heure vous travaillez, mangez, regardez la télé.',
        ['F|Consigo contar a minha rotina com verbos simples','O|Entendo dias, datas e horários em frases simples','L|Entendo um texto curto sobre o dia de alguém','E|Escrevo um parágrafo curto sobre o meu dia']],
      ['Questions et réponses','Perguntas e negação',['Poser des questions','La négation'],'Écrivez 4 questions pour connaître un nouveau collègue, puis répondez avec une phrase négative.',
        ['F|Consigo fazer e responder perguntas simples','F|Consigo dizer que não gosto ou não tenho algo','O|Entendo perguntas curtas e diretas feitas com calma','E|Escrevo perguntas simples para conhecer alguém']],
      ['Saveurs, fêtes et sons','Frutas e legumes, festas, sons do francês',['Les fruits et les légumes','Les fêtes en France','Les sons du français'],'Écrivez une petite carte pour souhaiter une bonne fête à un ami.',
        ['F|Consigo pronunciar os sons básicos do francês de forma compreensível','O|Diferencio sons próprios do francês, como u e ou','L|Entendo convites e cartões curtos','E|Escrevo um cartão ou uma mensagem curta de parabéns']],
    ],
    A2:[
      ['Raconter le passé','Passé composé com avoir',['Passé composé avec avoir','Lecture · Un week-end à Lyon'],'Racontez votre dernier week-end : où vous êtes allé et ce que vous avez fait.',
        ['F|Consigo contar o que fiz no fim de semana ou nas férias','L|Entendo um relato simples de viagem ou de fim de semana','O|Entendo alguém contando o que fez, se a fala for clara','E|Escrevo um relato curto sobre algo que aconteceu']],
      ['Le passé avec être','Passé composé com être, verbos pronominais',['Passé composé avec être','Les verbes pronominaux'],'Racontez votre matinée d’hier avec des verbes pronominaux : se lever, se préparer…',
        ['F|Consigo contar a minha rotina e o meu dia de ontem','O|Entendo relatos curtos com verbos do dia a dia','L|Entendo mensagens pessoais que contam o dia de alguém','E|Escrevo sobre o meu dia com os verbos certos']],
      ['Projets et loisirs','Futur proche e lazer',['Le futur proche','Les loisirs'],'Écrivez vos projets pour les prochaines vacances.',
        ['F|Consigo falar dos meus planos e combinar um encontro','F|Consigo falar dos meus hobbies e do que gosto','O|Entendo combinados de dia, hora e lugar','E|Escrevo um convite ou uma resposta a um convite']],
      ['Parler de soi','Possessivos e expressões com avoir',['Les adjectifs possessifs','Les expressions avec avoir'],'Décrivez votre meilleur ami : qui il est, ses goûts, ses qualités.',
        ['F|Consigo falar de mim, das minhas coisas e das minhas necessidades','F|Consigo dizer que estou com fome, sede, frio ou medo','L|Entendo um perfil pessoal simples','E|Escrevo um parágrafo descrevendo uma pessoa importante para mim']],
      ['Restaurant et courses','Restaurante, partitivos, roupas e compras',['Au restaurant','Les articles partitifs','Les vêtements et les courses'],'Écrivez un dialogue au restaurant entre vous et le serveur.',
        ['F|Consigo fazer compras, perguntar preços e pedir num restaurante','O|Entendo preços, quantidades e ofertas','L|Entendo cardápios, rótulos e anúncios simples','E|Escrevo uma lista de compras ou uma receita simples']],
      ['En ville et en voyage','Cidade, direções, preposições com países',['En ville','À, en, au, aux'],'Expliquez à un touriste comment aller de chez vous à la boulangerie.',
        ['F|Consigo pedir e dar informações de como chegar a um lugar','O|Entendo direções simples e avisos de transporte','L|Entendo horários e informações de transporte','E|Escrevo instruções curtas de como chegar a um lugar']],
      ['Travail et francophonie','Trabalho, cartão-postal, francofonia',['Se présenter au travail','Écrire une carte postale','La francophonie'],'Écrivez une carte postale à un collègue pendant un voyage dans un pays francophone.',
        ['F|Consigo me apresentar no trabalho e dizer o que faço','L|Entendo textos curtos sobre países francófonos','O|Entendo quando um colega explica a função dele','E|Escrevo um cartão-postal ou e-mail curto para um amigo']],
    ],
    B1:[
      ['Raconter une histoire','Imparfait e passé composé',['Imparfait ou passé composé ?','Lecture · Une année à Montréal'],'Racontez un souvenir d’enfance : comment c’était et ce qui s’est passé.',
        ['F|Consigo contar uma história com começo, meio e fim','F|Consigo falar de como as coisas eram antes','O|Entendo uma história contada com clareza','E|Escrevo uma narrativa simples ligando os fatos']],
      ['L’avenir','Futur simple e trabalho',['Le futur simple','Le travail'],'Comment imaginez-vous votre vie professionnelle dans dix ans ?',
        ['F|Consigo falar de planos, previsões e da minha carreira','O|Entendo previsões e planos em programas de rádio simples','L|Entendo anúncios de emprego e textos sobre trabalho','E|Escrevo sobre meus planos para o futuro']],
      ['Demandes polies','Conditionnel e e-mails',['Le conditionnel présent','L’e-mail professionnel','Écrire un e-mail informel'],'Écrivez un e-mail poli pour demander un rendez-vous ou un service.',
        ['F|Consigo fazer pedidos e sugestões com educação','E|Escrevo e-mails pessoais e de trabalho claros e educados','L|Entendo e-mails e cartas do dia a dia','O|Entendo pedidos e propostas numa conversa']],
      ['Les pronoms','COD, COI, y e en',['Les pronoms COD et COI','Les pronoms y et en'],'Répondez à 5 questions sur vos habitudes sans répéter les mots (avec le, lui, y, en).',
        ['F|Consigo responder sem repetir palavras, usando pronomes','O|Acompanho conversas rápidas do dia a dia com pronomes','L|Entendo textos em que as ideias são retomadas por pronomes','E|Escrevo textos mais fluidos, sem repetições']],
      ['Relier et comparer','Relativos, comparativo e superlativo',['Les pronoms relatifs','Comparatif et superlatif'],'Comparez deux villes que vous connaissez et dites laquelle vous préférez.',
        ['F|Consigo comparar opções e explicar minha preferência','L|Entendo textos que comparam produtos, lugares ou opções','E|Escrevo frases mais longas ligadas por qui, que, où, dont','O|Entendo descrições e comparações detalhadas']],
      ['Donner son avis','Subjuntivo com il faut que, meio ambiente, saúde',['Le subjonctif · il faut que','L’environnement','La santé'],'Que faut-il faire pour protéger l’environnement dans votre ville ?',
        ['F|Consigo dar minha opinião e dizer o que é preciso fazer','F|Consigo explicar um problema de saúde ou dar conselhos','L|Entendo artigos simples sobre temas atuais','O|Entendo as ideias principais de notícias sobre temas conhecidos']],
      ['Parler naturellement','Expressões, falsos cognatos, liaisons, gastronomia',['Expressions idiomatiques','Faux amis · português e francês','Liaisons et lettres muettes','La gastronomie française'],'Écrivez un court dialogue entre deux amis qui parlent d’un repas, avec deux expressions idiomatiques.',
        ['F|Consigo entrar numa conversa sobre um assunto conhecido sem me preparar','O|Entendo os pontos principais de uma conversa entre nativos','F|Pronuncio liaisons e letras mudas de forma natural','E|Escrevo comentários curtos dando minha opinião']],
    ],
    B2:[
      ['Doutes et sentiments','Subjuntivo de dúvida e sentimento, conectores',['Le subjonctif · doute et sentiments','Les connecteurs logiques'],'Écrivez un paragraphe sur une nouvelle qui vous a surpris : ce que vous ressentez et ce dont vous doutez.',
        ['F|Consigo expressar dúvida, emoção e certeza com nuances','E|Escrevo textos claros e detalhados com conectores variados','L|Entendo artigos em que o autor defende um ponto de vista','O|Entendo falas longas se o tema for conhecido']],
      ['Hypothèses','Hipóteses com si e plus-que-parfait',['Les hypothèses avec si','Le plus-que-parfait'],'Si vous pouviez changer une chose dans votre passé, que feriez-vous ?',
        ['F|Consigo falar de situações imaginárias e de arrependimentos','O|Entendo opiniões e hipóteses em discussões','E|Escrevo sobre situações hipotéticas e consequências','L|Entendo narrativas com vários planos de passado']],
      ['Rapporter et nuancer','Discurso indireto e gerúndio',['Le discours indirect','Le gérondif'],'Rapportez une conversation importante : qui a dit quoi et ce que vous avez répondu.',
        ['F|Consigo relatar o que outras pessoas disseram','O|Entendo entrevistas e relatos com detalhes','L|Entendo reportagens que citam várias pessoas','E|Escrevo uma narrativa usando vários tempos verbais']],
      ['Médias et actualité','Voz passiva, mídia, redes sociais',['La voix passive','Les médias et l’actualité','Lecture · Les réseaux sociaux'],'Résumez une actualité de la semaine et donnez votre avis.',
        ['L|Entendo notícias e reportagens com vocabulário variado','O|Entendo a maior parte de notícias e programas de atualidades','F|Consigo resumir uma notícia e comentar','E|Consigo descrever fatos em tom impessoal']],
      ['Choisir le bon registre','Tu ou vous, expressões idiomáticas',['Tu ou vous ? Les registres','Expressions idiomatiques II'],'Écrivez le même message deux fois : à un ami (tu) et à votre directeur (vous).',
        ['F|Consigo adaptar a fala ao contexto: tu ou vous, formal ou informal','O|Entendo conversas informais entre nativos com expressões do dia a dia','L|Entendo textos informais, como posts e mensagens','E|Escrevo mensagens informais e formais com naturalidade']],
      ['Réclamer et négocier','Carta de reclamação e reuniões',['La lettre de réclamation','Les réunions','Les connecteurs logiques'],'Écrivez une lettre de réclamation à une entreprise après un problème de livraison.',
        ['E|Escrevo uma reclamação formal com argumentos claros','F|Consigo participar de reuniões, dar opinião e negociar','O|Entendo discussões de trabalho na minha área','L|Entendo cartas e documentos formais']],
    ],
    C1:[
      ['Maîtriser les temps','Subjonctif passé',['Le subjonctif passé','La concordance des temps'],'Écrivez un paragraphe sur un regret ou une surprise en utilisant le subjonctif passé.',
        ['F|Consigo falar de fatos passados com nuances de sentimento e opinião','E|Escrevo textos com tempos verbais precisos e coerentes','L|Entendo textos longos e complexos, percebendo nuances','O|Entendo falas longas mesmo quando a estrutura não é clara']],
      ['Écrire avec style','Nominalização e particípio presente',['La nominalisation','Participe présent et adjectif verbal'],'Transformez un texte simple en un paragraphe de style journalistique.',
        ['E|Escrevo textos bem estruturados, com estilo e variação','L|Percebo escolhas de estilo em textos jornalísticos','F|Consigo reformular ideias de maneiras diferentes','O|Entendo apresentações e palestras com estrutura complexa']],
      ['L’argumentation','Conectores da dissertação, leitura de artigo',['Les connecteurs de la dissertation','Lecture · Le droit à la déconnexion'],'Écrivez l’introduction d’une dissertation sur : « Le télétravail est-il un progrès ? »',
        ['E|Escrevo ensaios claros e bem organizados sobre temas complexos','L|Entendo artigos longos de opinião e identifico argumentos e atitudes','F|Consigo fazer um exposé claro e bem estruturado','O|Entendo debates longos e acompanho a argumentação']],
      ['Le registre soutenu','Registro formal e provérbios',['Le registre soutenu','Les proverbes'],'Réécrivez un message familier en registre soutenu.',
        ['E|Adapto o registro do texto: soutenu, courant ou familier','F|Consigo mudar o tom da fala conforme a situação','L|Entendo documentos formais e literários','O|Percebo diferenças de tom e de registro em quem fala']],
      ['Précision et nuance','Concordância dos tempos, nominalização, provérbios',['La concordance des temps','La nominalisation','Les proverbes'],'Écrivez un court récit au passé en utilisant au moins deux proverbes.',
        ['F|Escolho palavras precisas e expressões idiomáticas adequadas','E|Escrevo com vocabulário amplo e preciso','O|Entendo filmes, séries e conversas rápidas com expressões idiomáticas','L|Entendo ironia, humor e sentidos implícitos']],
    ],
  },
};
const MARCO_SCENES=['amanhecer','livro','conversa','mar','aviao','globo','arcos','disco','balao','montanha','lampada','planta'];
/* régua de subníveis: o CEFR divide A2, B1 e B2 em nível "cheio" e "plus" */
const SUBLEVELS=['A1','A2','A2+','B1','B1+','B2','B2+','C1'];
const hasPlus=l=>l==='A2'||l==='B1'||l==='B2';
/* horas de estudo guiado acumuladas, desde o zero (referência Cambridge English) */
const GLH={A1:[90,100],A2:[180,200],B1:[350,400],B2:[500,600],C1:[700,800]};
/* lista de marcos com id estável: EN-A1-1, FR-B2-3… */
const _mc={};
function marcosOf(lang,level){
  const k=lang+level; if (_mc[k]) return _mc[k];
  const list=TRILHAS[lang]?.[level]||[], half=Math.ceil(list.length/2);
  const used=new Set();
  return _mc[k]=list.map(([title,learn,tasks,w,cando],i)=>{ const id=`${lang}-${level}-${i+1}`, h=i<half? 1 : 2;
    /* cena pelo tema do marco; se já apareceu neste nível, tenta a próxima do grupo e depois as tarefas */
    const cands=[...scenePool(title+' '+learn,''),...tasks.flatMap(t=>scenePool(t,'')),...MARCO_SCENES], scene=cands.find(c=>!used.has(c))||MARCO_SCENES[i%MARCO_SCENES.length]; used.add(scene);
    return {id,n:i+1,lang,level,title,can:title,learn,tasks,w,half:h,sub: h===2&&hasPlus(level)? level+'+' : level,scene,
      stmts:cando.map((c,j)=>({id:`${id}.${j+1}`,k:c[0],txt:c.slice(2),marcoId:id}))}; });
}
const marcoById=id=>{ const [lang,level]=id.split('-'); return marcosOf(lang,level).find(m=>m.id===id); };
const allMarcos=lang=>['A1','A2','B1','B2','C1'].flatMap(l=>marcosOf(lang,l));
