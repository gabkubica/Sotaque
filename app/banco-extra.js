/* =========================================================
   Sotaque · ampliação do banco de tarefas (inglês e francês)
   Mesmo formato do banco.js: [idioma, nível, tema, título, instruções, questões]
   Também acrescenta escutas (ESCUTAS, do provas.js) e liga as tarefas novas aos marcos da trilha.
   ========================================================= */
const BANK_RAW_EXTRA=[
  /* ===================== INGLÊS ===================== */
  /* ---------- A1 ---------- */
  ['EN','A1','Gramática','Subject pronouns','Escolha o pronome certo.',[
    ['Maria is my sister. ___ is 12.',['He','She','It'],1],['Tom and I are friends. ___ play football.',['We','They','You'],0],['My bag is red. ___ is new.',['He','It','She'],1],
    ['Look at those birds! ___ are beautiful.',['It','We','They'],2],GAP('Mr Brown is our teacher. ___ is from Canada.','He'),GAP('Paul and Anna are married. ___ live in Leeds.','They'),
    TF('“I” is always written with a capital letter.',true),ORD('She is my best friend.')]],
  ['EN','A1','Gramática','Present simple · he, she, it','Complete com a forma certa do verbo.',[
    ['My father ___ in a bank.',['work','works','working'],1],['She ___ TV every evening.',['watchs','watches','watch'],1],['He ___ to school by bus.',['gos','go','goes'],2],
    GAP('Anna ___ (have) two cats.','has'),GAP('My brother ___ (study) English on Mondays.','studies'),['___ she like pizza?',['Do','Does','Is'],1],
    TF('“He don’t like coffee” is correct.',false),ORD('Does your sister speak French?')]],
  ['EN','A1','Vocabulário','Countries and nationalities','',[
    MAT('Ligue o país à nacionalidade.',[['Brazil','Brazilian'],['Spain','Spanish'],['Japan','Japanese'],['France','French'],['Mexico','Mexican']]),
    ['People from Germany are…',['Germanish','German','Germanese'],1],['He’s from China. He’s…',['Chinese','Chinian','Chinish'],0],
    GAP('I’m from Canada. I’m ___.','Canadian'),TF('People from England are English.',true),ORD('Where are you from?')]],
  ['EN','A1','Vocabulário','Food and drinks','',[
    MAT('Ligue as palavras.',[['bread','pão'],['cheese','queijo'],['chicken','frango'],['rice','arroz'],['juice','suco']]),
    ['You drink ___ in the morning.',['coffee','rice','bread'],0],['Which one is a fruit?',['carrot','banana','potato'],1],
    GAP('Can I have a glass of ___, please? (água)','water'),TF('“Breakfast” is the meal in the evening.',false),ORD('I would like a cheese sandwich.')]],
  ['EN','A1','Vocabulário','Places in town','',[
    ['You buy medicine at the…',['bakery','pharmacy','library'],1],['You borrow books at the…',['library','bank','cinema'],0],['You see films at the…',['museum','cinema','post office'],1],
    MAT('Ligue os lugares.',[['bank','banco'],['station','estação'],['supermarket','supermercado'],['park','parque']]),
    GAP('I buy bread at the ___. (padaria)','bakery'),TF('A “post office” is a place for letters and parcels.',true)]],
  ['EN','A1','Leitura','Reading · A postcard from Lisbon','Read the text and answer.\n\nDear Mum and Dad, I’m in Lisbon with my friend Clara. The city is beautiful and the weather is hot and sunny. Our hotel is small but very clean. Every morning we eat pastéis de nata in a café near the river. Today we are at the castle. Tomorrow we go to the beach. See you on Sunday! Love, Julia',[
    ['Who is Julia with?',['her mum','her friend Clara','her brother'],1],TF('The weather is cold.',false),['What do they eat every morning?',['pastéis de nata','pizza','bread and cheese'],0],
    ['Where are they today?',['at the beach','at the castle','at the hotel'],1],GAP('Tomorrow they go to the ___.','beach'),TF('Julia goes home on Sunday.',true)]],
  ['EN','A1','Kids','Toys and games','',[
    MAT('Ligue os brinquedos.',[['ball','bola'],['doll','boneca'],['kite','pipa'],['teddy bear','ursinho']]),
    ['You play ___ with a ball.',['football','chess','cards'],0],['A ___ flies in the sky.',['doll','kite','car'],1],
    GAP('My favourite ___ is hide and seek. (brincadeira)','game'),TF('A teddy bear is a toy.',true),ORD('Let’s play with my new ball.')]],
  /* ---------- A2 ---------- */
  ['EN','A2','Gramática','There was and there were','',[
    ['___ a big party last night.',['There was','There were','There is'],0],['___ many people at the concert.',['There was','There were','It was'],1],['___ any milk in the fridge?',['Were there','Was there','There was'],1],
    GAP('There ___ (not) any buses after midnight.','weren’t|were not'),GAP('There ___ a cat in the garden this morning.','was'),
    TF('“There were a problem” is correct.',false),ORD('There were two cakes on the table.')]],
  ['EN','A2','Gramática','Adjectives or adverbs?','Escolha o adjetivo ou o advérbio.',[
    ['She speaks English very ___.',['good','well','goodly'],1],['He is a ___ driver.',['careful','carefully','care'],0],['Please walk ___. The baby is sleeping.',['quiet','quietly','quietness'],1],
    ['They work very ___.',['hard','hardly','harder'],0],GAP('I finished the test ___ (quick).','quickly'),TF('“Fast” is also an adverb: “He runs fast.”',true),ORD('My grandmother cooks really well.')]],
  ['EN','A2','Vocabulário','At the doctor','',[
    MAT('Ligue os problemas.',[['a headache','dor de cabeça'],['a cold','um resfriado'],['a sore throat','dor de garganta'],['a fever','febre'],['a stomach ache','dor de barriga']]),
    ['The doctor says: “Take this ___ three times a day.”',['medicine','hospital','nurse'],0],['“What’s the ___?” “I feel sick.”',['matter','wrong','problem with'],0],
    GAP('You should stay in ___ and rest. (cama)','bed'),TF('“I’ve got a cough” means you cough a lot.',true),ORD('My back hurts when I walk.')]],
  ['EN','A2','Vocabulário','At the hotel','',[
    ['I’d like to ___ a double room for two nights.',['book','buy','take'],0],['“What time is ___?” “You need to leave the room by 11.”',['check-in','check-out','breakfast'],1],
    MAT('Ligue.',[['single room','quarto de solteiro'],['reception','recepção'],['key','chave'],['lift','elevador']]),
    GAP('Is breakfast ___ in the price?','included'),TF('“Reception” is where you check in.',true),ORD('Could I have a room with a view?')]],
  ['EN','A2','Phrasal verbs','Everyday phrasal verbs','',[
    ['Please ___ the light. It’s dark in here.',['turn on','turn off','turn up'],0],['I ___ at 7 every day.',['get up','get on','get off'],0],['___ your coat. It’s cold outside.',['Put on','Put off','Take off'],0],
    MAT('Ligue.',[['sit down','sentar'],['look for','procurar'],['give back','devolver'],['wake up','acordar']]),
    GAP('Can you turn ___ the TV? I want to sleep.','off'),TF('“Take off” can mean “tirar” (a roupa).',true)]],
  ['EN','A2','Leitura','Reading · Lucy’s new job','Read the text and answer.\n\nLucy started a new job last month. She works at a travel agency in the city centre. She helps customers plan their holidays and book flights and hotels. Her colleagues are friendly, and her boss, Mr Patel, is very patient. Lucy works from Monday to Friday, from nine to five. She takes the train to work, and the journey is about thirty minutes. The best thing about her job? Next year she can travel to Thailand for free!',[
    ['Where does Lucy work?',['at a hotel','at a travel agency','at an airport'],1],['How are her colleagues?',['friendly','strict','busy'],0],GAP('Her boss is called Mr ___.','Patel'),
    ['How does she get to work?',['by bus','by car','by train'],2],TF('Lucy works on Saturdays.',false),TF('She can travel to Thailand for free next year.',true)]],
  ['EN','A2','Pronúncia','The th sounds','',[
    ['Which word has the same “th” sound as “think”?',['this','three','mother'],1],['Which word has the same “th” sound as “the”?',['thank','bath','brother'],2],
    TF('In “thirty”, the tongue goes between the teeth.',true),['“Three” and “tree” sound…',['the same','different'],1],TF('In “Thursday”, the “th” sounds like “t”.',false),ORD('I think they are thirsty.')]],
  /* ---------- B1 ---------- */
  ['EN','B1','Gramática','Already, yet and just','',[
    ['Have you finished your homework ___?',['already','yet','just'],1],['I’ve ___ eaten, thanks. I’m not hungry.',['yet','already','still'],1],['She has ___ left. You missed her by a minute.',['just','yet','ever'],0],
    GAP('I haven’t called him ___.','yet'),TF('“Yet” is usually used in questions and negative sentences.',true),ORD('They have just arrived at the airport.')]],
  ['EN','B1','Gramática','Might, may and could','Possibilidade.',[
    ['Take an umbrella. It ___ rain later.',['might','must','should'],0],['I’m not sure. She ___ be at home.',['can’t','may','has to'],1],['That ___ be true, but I doubt it.',['could','mustn’t','will'],0],
    GAP('We ___ go to the beach this weekend, but it depends on the weather.','might|may|could'),TF('“Might” shows 100% certainty.',false),ORD('He might not come to the party.')]],
  ['EN','B1','Gramática','Who, which or where?','',[
    ['That’s the woman ___ helped me.',['which','who','where'],1],['This is the café ___ we met.',['who','which','where'],2],['I lost the book ___ you gave me.',['which','who','where'],0],
    GAP('The man ___ lives next door is a pilot.','who|that'),TF('You can say “the book that you gave me”.',true),ORD('This is the town where I grew up.')]],
  ['EN','B1','Phrasal verbs','Phrasal verbs with turn','',[
    MAT('Ligue.',[['turn down','recusar / abaixar'],['turn up','aparecer / aumentar'],['turn into','virar, transformar-se'],['turn around','dar meia-volta']]),
    ['She ___ the job offer because the salary was low.',['turned down','turned up','turned into'],0],['He finally ___ at the party at midnight.',['turned off','turned up','turned over'],1],
    ['The caterpillar ___ a butterfly.',['turned into','turned down','turned around'],0],GAP('Can you turn the music ___? I can’t hear it.','up'),TF('“Turn down the volume” means make it quieter.',true)]],
  ['EN','B1','Vocabulário','Renting a flat','',[
    MAT('Ligue.',[['rent','aluguel'],['landlord','proprietário'],['deposit','caução'],['furnished','mobiliado'],['bills','contas']]),
    ['The ___ is the person who owns the flat.',['tenant','landlord','neighbour'],1],['Are the ___ included? I mean water, gas and electricity.',['bills','rooms','fees'],0],
    GAP('You have to pay one month’s ___ before you move in. (caução)','deposit'),TF('A “tenant” is the person who rents the flat.',true),ORD('How much is the rent per month?')]],
  ['EN','B1','Expressões','Complaining politely','',[
    ['Which is the most polite?',['This soup is cold!','I’m afraid my soup is a bit cold.','Give me another soup.'],1],['“I’d like to make a ___.”',['complain','complaint','complaining'],1],
    ['“Could you possibly ___ it?”',['change','changing','to change'],0],GAP('I’m ___ to say the room wasn’t clean.','sorry|afraid'),
    TF('“I’m afraid…” is often used to give bad news politely.',true),ORD('Would it be possible to speak to the manager?')]],
  ['EN','B1','Leitura','Reading · The tiny house movement','Read the text and answer.\n\nAll over the world, more and more people are choosing to live in tiny houses: homes that are usually smaller than 40 square metres. For some, it’s about money: a tiny house costs a fraction of a normal one, so they can live without a big mortgage. For others, it’s about the environment, because small homes use much less energy. But living in a tiny space isn’t for everyone. Owners say you have to get rid of most of your things and think carefully before buying anything new. “It changed the way I think about shopping,” says Emma, who has lived in a tiny house for three years.',[
    ['How big are tiny houses usually?',['smaller than 40 m²','about 100 m²','bigger than 40 m²'],0],['Why do some people choose them?',['they are cheaper','they are in the city','they are bigger'],0],
    TF('Small homes use more energy.',false),['What do owners say you need to do?',['buy new furniture','get rid of most of your things','live with friends'],1],
    GAP('Emma has lived in a tiny house for three ___.','years'),TF('The text says tiny houses are perfect for everyone.',false)]],
  /* ---------- B2 ---------- */
  ['EN','B2','Gramática','Both, either and neither','',[
    ['___ of my parents speak English; they only speak Portuguese.',['Neither','Both','Either'],0],['You can take ___ bus; they both go to the centre.',['neither','either','both'],1],
    ['___ my sister and I love cooking.',['Either','Neither','Both'],2],GAP('“I don’t like horror films.” “Me ___.”','neither|either'),
    TF('“Neither of them is ready” is correct, especially in formal English.',true),ORD('Either you apologise or you leave.')]],
  ['EN','B2','Gramática','Make, let and get','Verbos causativos.',[
    ['My parents never ___ me stay out late.',['let','made','got'],0],['The film ___ me cry.',['let','made','got'],1],['I finally ___ my brother to help me move.',['made','let','got'],2],
    GAP('The teacher made us ___ (rewrite) the essay.','rewrite'),GAP('I got my friend ___ (lend) me his car.','to lend'),TF('“Let” is followed by the infinitive without “to”.',true),ORD('She let me borrow her laptop.')]],
  ['EN','B2','Vocabulário','Collocations with have, take and pay','',[
    ['Can you ___ attention, please?',['have','take','pay'],2],['Let’s ___ a break for ten minutes.',['take','pay','make'],0],['We ___ a great time at the party.',['took','had','paid'],1],
    MAT('Ligue.',[['pay a compliment','fazer um elogio'],['take a risk','correr um risco'],['have a look','dar uma olhada'],['take part','participar']]),
    GAP('You should ___ advantage of the sale. It ends today.','take'),TF('We say “make a photo” in English.',false)]],
  ['EN','B2','Expressões','Discourse markers','Palavras que organizam a conversa.',[
    ['___, where was I? Oh yes, the meeting.',['Anyway','Actually','Besides'],0],['I thought he was British. ___, he’s Australian.',['Anyway','Actually','By the way'],1],
    ['___, did you hear about Tom’s new job?',['By the way','In contrast','Therefore'],0],
    MAT('Ligue ao sentido.',[['mind you','mas olha'],['after all','afinal de contas'],['on second thoughts','pensando bem'],['as I was saying','como eu dizia']]),
    GAP('It’s expensive. ___ the other hand, it lasts for years.','On'),TF('“Actually” means “atualmente”.',false)]],
  ['EN','B2','Phrasal verbs','Phrasal verbs with break','',[
    MAT('Ligue.',[['break down','quebrar (máquina)'],['break up','terminar (namoro)'],['break into','arrombar'],['break out','começar de repente (guerra, incêndio)']]),
    ['Our car ___ on the motorway.',['broke down','broke up','broke out'],0],['Someone ___ our house while we were away.',['broke out','broke into','broke up'],1],
    ['A fire ___ in the kitchen.',['broke out','broke down','broke into'],0],GAP('They broke ___ after five years together.','up'),TF('“Break the ice” means start a conversation in an awkward situation.',true)]],
  ['EN','B2','Leitura','Reading · Digital nomads','Read the text and answer.\n\nThanks to fast internet and remote jobs, a growing number of professionals have become “digital nomads”, working from laptops while travelling the world. Several countries, from Portugal to Costa Rica, now offer special visas to attract them, hoping they will spend money in local businesses. However, the trend has its critics. In some popular destinations, residents complain that rents have risen sharply as landlords prefer short-term lets to foreigners who can pay more. Nomads themselves admit the lifestyle can be lonely, and many say that, after a few years, they long for a stable home and a community.',[
    ['What makes the digital nomad lifestyle possible?',['cheap flights','fast internet and remote jobs','special universities'],1],['Why do some countries offer special visas?',['to fill local jobs','to attract spending','to reduce tourism'],1],
    ['What do residents complain about?',['noise','rising rents','traffic'],1],TF('The text says nomads never feel lonely.',false),
    ['What do many nomads want after a few years?',['more travel','a stable home and a community','a new job'],1],GAP('Landlords prefer short-term ___ to foreigners.','lets')]],
  /* ---------- C1 ---------- */
  ['EN','C1','Escrita','Hedging language','Linguagem cautelosa, comum em textos acadêmicos.',[
    ['Which sentence is more cautious?',['This proves the theory.','This would appear to support the theory.','This is the theory.'],1],['It could be ___ that the results are incomplete.',['argued','argue','arguing'],0],
    ['The data ___ that sleep affects memory.',['suggest','is suggesting','suggested to'],0],GAP('There is some evidence to ___ that the policy worked.','suggest'),
    TF('Hedging means expressing ideas with less certainty.',true),ORD('These findings may not apply to all age groups.')]],
  ['EN','C1','Gramática','Ellipsis and substitution','Evitar repetição.',[
    ['“Will it rain tomorrow?” “I hope ___.”',['not','so','it'],1],['“Is he coming?” “I’m afraid ___.”',['not','no','none'],0],['She said she would call, and she ___.',['did','made','was'],0],
    ['These shoes are nice, but I prefer the black ___.',['ones','one','them'],0],GAP('“Do you think we’ll win?” “I don’t think ___.”','so'),
    TF('In “I can’t swim, but my sister can”, the verb “swim” is left out.',true)]],
  ['EN','C1','Gramática','Whereas, albeit and notwithstanding','Conectores avançados.',[
    ['He is outgoing, ___ his brother is shy.',['whereas','albeit','despite'],0],['The plan was successful, ___ expensive.',['albeit','whereas','in spite'],0],
    ['___ the bad weather, the event went ahead.',['Notwithstanding','Whereas','Albeit'],0],GAP('___ he had studied hard, he failed the exam.','Although|Even though|Though'),
    TF('“Albeit” is usually followed by an adjective or adverb, not a full clause.',true),ORD('The results were positive, albeit limited.')]],
  ['EN','C1','Vocabulário','Word formation','Formação de palavras.',[
    ['The decision was completely ___ (justify).',['unjustified','unjustifying','injustified'],0],['Her ___ (persist) finally paid off.',['persistance','persistence','persisting'],1],
    GAP('There was a ___ (signify) increase in sales.','significant'),GAP('He spoke with great ___ (confident).','confidence'),
    ['Which word means “impossible to believe”?',['unbelievable','disbelieving','unbelieved'],0],TF('“Irreplaceable” means it cannot be replaced.',true)]],
  ['EN','C1','Leitura','Reading · The loneliness epidemic','Read the text and answer.\n\nPublic health experts increasingly describe loneliness as an epidemic. Surveys in several countries suggest that a significant proportion of adults feel lonely often or always, and the problem is not confined to the elderly: young adults report some of the highest levels. Researchers have linked chronic loneliness to a higher risk of heart disease, depression and even early death. Some governments have responded in unusual ways; the United Kingdom, for instance, appointed a minister for loneliness in 2018. Critics argue, however, that loneliness cannot be solved by policy alone, and that it reflects deeper changes in how we work, live and build communities.',[
    ['How do experts increasingly describe loneliness?',['as a myth','as an epidemic','as a choice'],1],TF('According to the text, only elderly people feel lonely.',false),
    ['Chronic loneliness has been linked to…',['better sleep','heart disease and depression','higher salaries'],1],GAP('The UK appointed a minister for loneliness in ___.','2018'),
    ['What do critics argue?',['policy alone cannot solve it','it is not a real problem','ministers should be replaced'],0],['In the text, “confined to” means…',['limited to','caused by','hidden from'],0]]],
  ['EN','C1','Expressões','Idioms about time','',[
    MAT('Ligue.',[['in the nick of time','no último segundo'],['once in a blue moon','muito raramente'],['call it a day','encerrar por hoje'],['against the clock','contra o relógio']]),
    ['We sent the report at 4:59 and the deadline was 5. We did it ___.',['in the nick of time','once in a blue moon','in no time'],0],['I only see my cousins ___.',['against the clock','once in a blue moon','on the dot'],1],
    GAP('It’s late and we’re tired. Let’s call it a ___.','day'),TF('“On the dot” means exactly on time.',true),ORD('Time flies when you are having fun.')]],

  /* ===================== FRANCÊS ===================== */
  /* ---------- A1 ---------- */
  ['FR','A1','Gramática','Masculin ou féminin ?','Escolha a forma certa do adjetivo.',[
    ['Ma sœur est très ___.',['grand','grande','grands'],1],['Mon père est ___.',['sportif','sportive','sportifs'],0],['Elle est ___ (brasileira).',['brésilien','brésilienne','brésiliens'],1],
    GAP('Une voiture ___ (vert).','verte'),TF('« Belle » é o feminino de « beau ».',true),ORD('Ma maison est petite et jolie.')]],
  ['FR','A1','Vocabulário','Les nationalités','',[
    MAT('Ligue o país à nacionalidade (masculino).',[['le Brésil','brésilien'],['l’Italie','italien'],['l’Espagne','espagnol'],['l’Allemagne','allemand'],['le Japon','japonais']]),
    ['Elle vient du Portugal. Elle est…',['portugais','portugaise','portugaisse'],1],['Il habite à Montréal. Il est…',['canadien','canadienne','canada'],0],
    GAP('Je viens du Mexique. Je suis ___ (masculino).','mexicain'),TF('« Anglais » quer dizer inglês.',true),ORD('Je suis brésilien et j’habite à Curitiba.')]],
  ['FR','A1','Vocabulário','Au café','',[
    ['Para pedir com educação:',['Je voudrais un café, s’il vous plaît.','Donne un café.','Café moi.'],0],
    MAT('Ligue.',[['un croissant','um croissant'],['l’addition','a conta'],['un jus d’orange','um suco de laranja'],['une carafe d’eau','uma jarra de água']]),
    ['Le serveur demande : « Et ___ vous ? »',['pour','avec','à'],0],GAP('L’___, s’il vous plaît ! (a conta)','addition'),
    TF('« Un café crème » é um café com leite.',true),ORD('Je voudrais un thé, s’il vous plaît.')]],
  ['FR','A1','Vocabulário','Quelle heure est-il ?','',[
    ['8h30 : il est huit heures et…',['quart','demie','moins'],1],['10h45 : il est onze heures…',['moins le quart','et quart','et demie'],0],['12h00 : il est…',['minuit','midi','douze'],1],
    GAP('7h15 : il est sept heures et ___.','quart'),TF('« Minuit » é meia-noite.',true),ORD('Le cours commence à neuf heures.')]],
  ['FR','A1','Conjugação','Aller et faire','',[
    ['Je ___ au cinéma ce soir.',['vais','va','allons'],0],['Nous ___ du sport le samedi.',['faisons','faites','font'],0],['Ils ___ à la plage.',['vont','allent','vais'],0],
    GAP('Qu’est-ce que tu ___ (faire) le week-end ?','fais'),GAP('Vous ___ (aller) bien ?','allez'),TF('« Ils font » é do verbo faire.',true),ORD('Elle va à l’école à pied.')]],
  ['FR','A1','Vocabulário','La maison','',[
    MAT('Ligue os cômodos.',[['la cuisine','a cozinha'],['la chambre','o quarto'],['la salle de bains','o banheiro'],['le salon','a sala'],['le jardin','o jardim']]),
    ['On dort dans…',['la cuisine','la chambre','le salon'],1],['On prépare le dîner dans…',['la cuisine','le jardin','la chambre'],0],
    GAP('Il y a un canapé dans le ___.','salon'),TF('« Le grenier » é o sótão.',true),ORD('Il y a trois chambres dans ma maison.')]],
  ['FR','A1','Gramática','Les prépositions de lieu','',[
    ['Le chat est ___ la table. (embaixo)',['sur','sous','dans'],1],['Les livres sont ___ le sac. (dentro)',['dans','devant','sur'],0],['La banque est ___ la poste. (ao lado)',['à côté de','derrière','entre'],0],
    GAP('Le vase est ___ la table. (em cima)','sur'),TF('« Devant » quer dizer atrás.',false),ORD('La pharmacie est en face de la gare.')]],
  ['FR','A1','Leitura','Lecture · La journée de Paul','Lisez le texte et répondez.\n\nPaul a trente ans et il habite à Lille. Il est boulanger. Il se lève à quatre heures du matin et il commence le travail à cinq heures. À midi, il déjeune avec sa femme, Claire. L’après-midi, il dort un peu et il joue au tennis avec ses amis. Le soir, il regarde la télé et il se couche à neuf heures.',[
    ['Paul habite à…',['Lyon','Lille','Paris'],1],['Quel est son métier ?',['boulanger','professeur','médecin'],0],GAP('Il commence le travail à ___ heures.','cinq|5'),
    ['Avec qui déjeune-t-il ?',['avec ses amis','avec sa femme','avec sa mère'],1],TF('L’après-midi, il joue au football.',false),TF('Il se couche à neuf heures.',true)]],
  ['FR','A1','Vocabulário','Le temps qu’il fait','',[
    MAT('Ligue.',[['Il pleut.','Está chovendo.'],['Il fait chaud.','Está calor.'],['Il fait froid.','Está frio.'],['Il neige.','Está nevando.'],['Il y a du vent.','Está ventando.']]),
    ['En été, en général, il fait…',['froid','chaud','frais'],1],['Prends ton parapluie ! Il…',['pleut','fait soleil','fait chaud'],0],
    GAP('Aujourd’hui, il fait ___ : le ciel est bleu. (bonito)','beau'),TF('« Il fait beau » quer dizer que o tempo está bom.',true)]],
  /* ---------- A2 ---------- */
  ['FR','A2','Conjugação','Pouvoir, vouloir et devoir','',[
    ['Je ___ venir ce soir ? (posso)',['peux','veux','dois'],0],['Nous ___ partir à huit heures. (devemos)',['pouvons','voulons','devons'],2],['Ils ___ un café. (querem)',['veulent','voulent','veut'],0],
    GAP('Tu ___ (vouloir) venir avec nous ?','veux'),GAP('Vous ___ (pouvoir) répéter, s’il vous plaît ?','pouvez'),TF('« Je dois » quer dizer “eu devo / tenho que”.',true),ORD('On doit arriver avant midi.')]],
  ['FR','A2','Gramática','Les pronoms toniques','Moi, toi, lui, elle…',[
    ['___, je m’appelle Ana.',['Moi','Me','Je'],0],['Ce cadeau est pour ___ ? (você, informal)',['tu','toi','te'],1],['Je vais au cinéma avec ___ (ela).',['elle','la','lui'],0],
    GAP('Et ___, tu viens ? (você, informal)','toi'),GAP('Chez ___, on mange à vingt heures. (nós)','nous'),TF('« Lui » pode se referir a um homem: « Je travaille avec lui. »',true)]],
  ['FR','A2','Vocabulário','Chez le médecin','',[
    MAT('Ligue.',[['J’ai mal à la tête.','Estou com dor de cabeça.'],['J’ai de la fièvre.','Estou com febre.'],['Je tousse.','Estou tossindo.'],['J’ai mal au ventre.','Estou com dor de barriga.']]),
    ['Le médecin donne…',['une ordonnance','une addition','un billet'],0],['On achète les médicaments à…',['la pharmacie','la boulangerie','la poste'],0],
    GAP('J’ai mal à la ___. (garganta)','gorge'),TF('« Je suis enrhumé » quer dizer “estou resfriado”.',true),ORD('Vous devez rester au lit trois jours.')]],
  ['FR','A2','Vocabulário','Les transports','',[
    ['On va à Paris ___ train.',['en','à','au'],0],['Je vais au travail ___ pied.',['en','à','par'],1],
    MAT('Ligue.',[['le billet','a passagem'],['le quai','a plataforma'],['l’arrêt de bus','o ponto de ônibus'],['le vélo','a bicicleta']]),
    GAP('Je prends le ___ pour aller au centre. (metrô)','métro'),TF('Diz-se « à vélo » (e, no dia a dia, também « en vélo »).',true),ORD('Le train part à dix heures.')]],
  ['FR','A2','Gramática','Il y a, depuis et pendant','',[
    ['J’habite ici ___ cinq ans. (e ainda moro)',['il y a','depuis','pendant'],1],['Je suis arrivé ___ deux jours.',['il y a','depuis','pendant'],0],['J’ai étudié ___ trois heures.',['depuis','pendant','il y a'],1],
    GAP('Elle apprend le français ___ janvier.','depuis'),TF('« Il y a » + tempo, com passé composé, quer dizer “há” (atrás).',true),ORD('Nous avons voyagé pendant deux semaines.')]],
  ['FR','A2','Vocabulário','À l’hôtel','',[
    ['Je voudrais ___ une chambre pour deux nuits.',['réserver','vendre','payer'],0],
    MAT('Ligue.',[['une chambre double','um quarto de casal'],['la clé','a chave'],['l’ascenseur','o elevador'],['le petit-déjeuner','o café da manhã']]),
    ['Le petit-déjeuner est ___ ? (incluído)',['compris','comprendre','compte'],0],GAP('La chambre est au deuxième ___. (andar)','étage'),
    TF('« La réception » é onde se faz o check-in.',true),ORD('La chambre a une belle vue sur la mer.')]],
  ['FR','A2','Leitura','Lecture · Le nouveau travail de Karim','Lisez le texte et répondez.\n\nLe mois dernier, Karim a commencé un nouveau travail dans une agence de voyages à Bordeaux. Il aide les clients à organiser leurs vacances et il réserve les billets d’avion et les hôtels. Ses collègues sont sympas et sa responsable, Madame Roux, est très patiente. Karim travaille du lundi au vendredi, de neuf heures à dix-sept heures. Il va au travail en tram et le trajet dure vingt minutes. Le meilleur ? L’année prochaine, il peut partir au Maroc gratuitement !',[
    ['Où travaille Karim ?',['dans un hôtel','dans une agence de voyages','dans un aéroport'],1],['Comment sont ses collègues ?',['sympas','sévères','fatigués'],0],GAP('Sa responsable s’appelle Madame ___.','Roux'),
    ['Comment va-t-il au travail ?',['en bus','en voiture','en tram'],2],TF('Karim travaille le samedi.',false),TF('L’année prochaine, il peut voyager gratuitement.',true)]],
  ['FR','A2','Pronúncia','Les voyelles nasales','',[
    ['Qual palavra tem o mesmo som nasal de « pain » ?',['main','pan','bon'],0],['Qual palavra tem o som de « on » ?',['bonne','pont','pain'],1],
    TF('Em « vent » e « temps », o som nasal é o mesmo.',true),TF('Em « bonne », o « on » é nasal.',false),['« Cent » e « sans » soam…',['iguais','diferentes'],0],ORD('Un bon vin blanc.')]],
  /* ---------- B1 ---------- */
  ['FR','B1','Gramática','Celui, celle, ceux et celles','Pronomes demonstrativos.',[
    ['J’aime cette robe, mais je préfère ___ de ma sœur.',['celle','celui','ceux'],0],['Ces livres sont ___ que j’ai achetés hier.',['ceux','celles','celui'],0],
    ['Mon ordinateur est plus rapide que ___ de mon père.',['celui','celle','ceux'],0],GAP('Les meilleures photos sont ___ qui sont en noir et blanc.','celles'),
    TF('« Celui » substitui um substantivo masculino singular.',true),ORD('Ce n’est pas mon sac, c’est celui de Julie.')]],
  ['FR','B1','Gramática','Les adverbes en -ment','',[
    ['lent → ___',['lentement','lentment','lentemment'],0],['rapide → ___',['rapidement','rapidment','rapidemment'],0],['évident → ___',['évidentement','évidemment','évidament'],1],
    GAP('Il parle ___ (doux) au bébé.','doucement'),GAP('Elle répond toujours ___ (poli).','poliment'),TF('« Vraiment » vem de « vrai ».',true),ORD('Il conduit très prudemment.')]],
  ['FR','B1','Vocabulário','Le logement','',[
    MAT('Ligue.',[['le loyer','o aluguel'],['le propriétaire','o proprietário'],['le locataire','o inquilino'],['les charges','as despesas do prédio'],['meublé','mobiliado']]),
    ['Un petit appartement d’une seule pièce, c’est…',['un studio','un château','une villa'],0],['Avant d’emménager, on paie souvent une…',['caution','facture','amende'],0],
    GAP('Je cherche un appartement à ___ près de la fac. (alugar)','louer'),TF('Le « locataire » é o dono do apartamento.',false),ORD('Le loyer est de huit cents euros par mois.')]],
  ['FR','B1','Vocabulário','Les sentiments','',[
    MAT('Ligue.',[['fier','orgulhoso'],['déçu','decepcionado'],['inquiet','preocupado'],['soulagé','aliviado'],['jaloux','ciumento']]),
    ['Il a réussi son examen. Il est…',['déçu','fier','jaloux'],1],['Elle attend les résultats de l’hôpital. Elle est…',['inquiète','fière','soulagée'],0],
    GAP('Ouf ! Je suis ___ : le vol n’est pas annulé. (aliviado)','soulagé'),TF('« Être de bonne humeur » quer dizer estar de bom humor.',true),ORD('Je suis vraiment content de te voir.')]],
  ['FR','B1','Gramática','Cause et conséquence','',[
    ['Je suis resté à la maison ___ il pleuvait.',['parce qu’','donc','alors'],0],['Il était malade, ___ il n’est pas venu.',['car','donc','puisque'],1],['___ du mauvais temps, le match est annulé.',['À cause','Grâce','Donc'],0],
    GAP('___ à ton aide, j’ai réussi ! (graças)','Grâce'),TF('« Grâce à » é usado para uma causa positiva.',true),ORD('Il a beaucoup travaillé, c’est pourquoi il est fatigué.')]],
  ['FR','B1','Gramática','Il dit que…','Discurso indireto no presente.',[
    ['« Je suis fatigué. » → Il dit qu’il ___ fatigué.',['est','suis','était'],0],['« Tu viens ? » → Elle demande ___ je viens.',['que','si','qu’est-ce que'],1],
    ['« Où habites-tu ? » → Il me demande ___ j’habite.',['où','si','que'],0],GAP('« Fermez la porte ! » → Il nous dit ___ fermer la porte.','de'),
    TF('« Qu’est-ce que » vira « ce que » no discurso indireto.',true),ORD('Elle dit qu’elle arrive dans dix minutes.')]],
  ['FR','B1','Leitura','Lecture · Quitter Paris pour la campagne','Lisez le texte et répondez.\n\nDepuis quelques années, de nombreux Parisiens quittent la capitale pour s’installer à la campagne. Le télétravail a joué un rôle important : beaucoup de salariés peuvent maintenant travailler de chez eux plusieurs jours par semaine. À la campagne, les maisons sont moins chères et on a plus d’espace et de nature. Mais tout n’est pas si simple. Certains nouveaux habitants se plaignent du manque de transports et de services, comme les médecins ou les écoles. « On a gagné en qualité de vie, mais il faut prendre la voiture pour tout », explique Sophie, installée en Bourgogne depuis deux ans.',[
    ['Pourquoi beaucoup de Parisiens partent-ils ?',['grâce au télétravail','pour trouver un travail','pour étudier'],0],TF('À la campagne, les maisons sont plus chères.',false),
    ['De quoi se plaignent certains nouveaux habitants ?',['du bruit','du manque de transports et de services','de la pollution'],1],GAP('Sophie habite en Bourgogne depuis deux ___.','ans'),
    ['Selon Sophie, à la campagne…',['on n’a pas besoin de voiture','il faut la voiture pour tout','il n’y a pas de nature'],1],TF('Sophie trouve que sa qualité de vie est meilleure.',true)]],
  ['FR','B1','Expressões','Les expressions avec « faire »','',[
    MAT('Ligue.',[['faire la queue','fazer fila'],['faire la grasse matinée','dormir até tarde'],['faire les courses','fazer compras (mercado)'],['faire attention','prestar atenção']]),
    ['Le dimanche, j’adore faire la ___ matinée.',['grasse','grande','belle'],0],['Fais ___ ! La route est glissante.',['attention','la queue','exprès'],0],
    GAP('Il y a beaucoup de monde : on doit faire la ___.','queue'),TF('« Faire exprès » quer dizer fazer de propósito.',true),ORD('Ça ne fait rien, ce n’est pas grave.')]],
  /* ---------- B2 ---------- */
  ['FR','B2','Gramática','Bien que, malgré et pourtant','Oposição e concessão.',[
    ['___ il pleuve, nous sortons.',['Bien qu’','Malgré','Pourtant'],0],['___ la pluie, nous sortons.',['Bien que','Malgré','Pourtant'],1],['Il a beaucoup révisé ; ___, il a raté l’examen.',['malgré','pourtant','bien que'],1],
    GAP('Bien qu’elle ___ (être) fatiguée, elle est venue.','soit'),TF('« Bien que » é seguido do subjuntivo.',true),ORD('Malgré ses efforts, il n’a pas réussi.')]],
  ['FR','B2','Gramática','L’accord du participe passé','',[
    ['Les lettres que j’ai ___ sont sur la table.',['écrit','écrites','écrits'],1],['Elle est ___ à huit heures.',['parti','partie','parties'],1],['Ils se sont ___ à la gare.',['rencontré','rencontrés','rencontrées'],1],
    GAP('Ces chaussures ? Je les ai ___ (acheter) hier.','achetées'),TF('Com « avoir », o particípio concorda com o objeto direto que vem antes do verbo.',true),TF('Em « Elles ont mangé des pommes », escreve-se « mangées ».',false)]],
  ['FR','B2','Conjugação','Le futur antérieur','',[
    ['Quand tu ___, appelle-moi.',['seras arrivé','auras arrivé','es arrivé'],0],['Dès que j’___ ce livre, je te le prête.',['aurai fini','aurai finir','serai fini'],0],
    ['Dans un an, nous ___ notre diplôme.',['aurons obtenu','serons obtenu','avons obtenu'],0],GAP('Je sortirai quand j’___ (faire) mes devoirs.','aurai fait'),
    TF('O futur antérieur expressa uma ação futura anterior a outra ação futura.',true),ORD('Elle sera partie avant ton arrivée.')]],
  ['FR','B2','Vocabulário','Le vocabulaire de l’argumentation','',[
    MAT('Ligue.',[['un argument','um argumento'],['un inconvénient','uma desvantagem'],['un avantage','uma vantagem'],['un enjeu','o que está em jogo']]),
    ['Pour donner son avis : « ___, je pense que… »',['À mon avis','D’ailleurs','Bref'],0],['Pour ajouter un argument : « ___, ce système coûte cher. »',['De plus','Pourtant','Cependant'],0],
    ['Pour conclure : « ___, cette mesure est nécessaire. »',['En conclusion','D’abord','Par exemple'],0],GAP('D’un côté, c’est pratique ; d’un autre ___, c’est cher.','côté'),TF('« Néanmoins » expressa oposição.',true)]],
  ['FR','B2','Vocabulário','La transition écologique','',[
    MAT('Ligue.',[['le réchauffement climatique','o aquecimento global'],['les énergies renouvelables','as energias renováveis'],['les déchets','o lixo'],['l’empreinte carbone','a pegada de carbono']]),
    ['Le tri ___ aide à recycler.',['sélectif','écologique','vert'],0],['Les panneaux ___ produisent de l’électricité avec le soleil.',['solaires','éoliens','nucléaires'],0],
    GAP('Il faut réduire le ___ alimentaire. (desperdício)','gaspillage'),TF('« Une éolienne » funciona com o vento.',true),ORD('Nous devons réduire nos émissions de gaz à effet de serre.')]],
  ['FR','B2','Leitura','Lecture · La semaine de quatre jours','Lisez le texte et répondez.\n\nPlusieurs entreprises françaises testent la semaine de quatre jours, sans baisse de salaire. Leurs dirigeants affirment que les salariés, plus reposés, sont aussi plus concentrés et que l’absentéisme diminue. Certains craignent cependant une intensification du travail : faire en quatre jours ce que l’on faisait en cinq peut augmenter le stress. Par ailleurs, ce modèle semble difficile à appliquer dans les secteurs où il faut une présence continue, comme les hôpitaux ou les commerces. Les premiers bilans restent néanmoins encourageants, et la majorité des entreprises concernées ont décidé de poursuivre l’expérience.',[
    ['Que testent ces entreprises ?',['la semaine de quatre jours','le télétravail total','une baisse des salaires'],0],['Selon les dirigeants, les salariés sont…',['moins concentrés','plus reposés et concentrés','plus souvent absents'],1],
    ['Quel risque certains craignent-ils ?',['plus de stress','moins de clients','des salaires plus bas'],0],TF('Le modèle est facile à appliquer dans les hôpitaux.',false),
    ['Qu’a décidé la majorité des entreprises ?',['arrêter','poursuivre l’expérience','réduire les salaires'],1],GAP('Selon les dirigeants, l’absentéisme ___. (diminui)','diminue')]],
  ['FR','B2','Expressões','Argot et verlan','Francês informal.',[
    MAT('Ligue ao sentido.',[['un mec','um cara'],['bosser','trabalhar'],['la bouffe','a comida'],['ouf (verlan de fou)','doido, incrível']]),
    ['En verlan, « louche » devient…',['chelou','louchou','chelo'],0],['« J’ai la flemme » quer dizer…',['estou com preguiça','estou com fome','estou com pressa'],0],
    GAP('« Une meuf » é o verlan de « ___ ». (mulher)','femme'),TF('O verlan inverte as sílabas das palavras.',true),TF('Gírias como « bosser » são adequadas numa carta formal.',false)]],
  ['FR','B2','Gramática','La mise en relief','C’est… qui / C’est… que.',[
    ['___ Marie qui a préparé le gâteau.',['C’est','Il est','Elle est'],0],['C’est demain ___ nous partons.',['que','qui','dont'],0],['Ce ___ m’inquiète, c’est le prix.',['qui','que','dont'],0],
    GAP('Ce ___ j’aime, c’est voyager.','que'),TF('« C’est moi qui ai raison » está correto.',true),ORD('C’est lui qui m’a appris le français.')]],
  /* ---------- C1 ---------- */
  ['FR','C1','Conjugação','Le passé simple','O tempo da literatura.',[
    ['Il ___ la porte et sortit. (ouvrir)',['ouvrit','ouvra','ouvrait'],0],['Ils ___ en silence. (partir)',['partirent','partèrent','partirons'],0],['Elle ___ une lettre. (écrire)',['écrivit','écrit','écrisa'],0],
    MAT('Ligue ao infinitivo.',[['il fut','être'],['il eut','avoir'],['il fit','faire'],['il vint','venir']]),GAP('Louis XIV ___ (mourir) en 1715.','mourut'),
    TF('O passé simple é usado sobretudo na escrita, em narrativas.',true)]],
  ['FR','C1','Conjugação','Le conditionnel passé','',[
    ['Si j’avais su, je ___ plus tôt.',['serais venu','viendrais','suis venu'],0],['Tu ___ me prévenir !',['aurais dû','devrais avoir','as dû'],0],
    ['Selon la presse, le ministre ___.',['aurait démissionné','a démissionner','démissionne eu'],0],GAP('Avec plus de temps, nous ___ (finir) le projet.','aurions fini'),
    TF('O conditionnel passé pode expressar arrependimento: « J’aurais aimé… ».',true),ORD('J’aurais aimé voyager davantage.')]],
  ['FR','C1','Gramática','Au cas où, pour peu que, à condition que','Hipótese e condição.',[
    ['Prends un parapluie, ___ il pleuvrait.',['au cas où','pour peu que','à condition que'],0],['Je viendrai, ___ tu m’invites.',['à condition que','au cas où','sauf'],0],
    ['___ qu’on l’encourage, il fait des progrès énormes.',['Pour peu','Au cas','Sauf'],0],GAP('Je t’aide, à condition que tu ___ (faire) aussi un effort.','fasses'),
    TF('« Au cas où » é seguido do condicional.',true),ORD('Laisse-moi ton numéro au cas où nous serions en retard.')]],
  ['FR','C1','Escrita','Les formules de la lettre formelle','',[
    ['Pour commencer une lettre à un inconnu :',['Madame, Monsieur,','Salut,','Coucou,'],0],['« Je vous ___ de bien vouloir… »',['prie','demande que','dis'],0],
    ['Pour terminer :',['Veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.','Bisous !','À plus !'],0],
    MAT('Ligue.',[['Suite à','Em seguimento a'],['Dans l’attente de votre réponse','Aguardando sua resposta'],['Je me permets de','Tomo a liberdade de'],['Ci-joint','Em anexo']]),
    GAP('Veuillez trouver ___-joint mon curriculum vitae.','ci'),TF('« Cordialement » é uma despedida comum em e-mails profissionais.',true)]],
  ['FR','C1','Expressões','Les figures de style','',[
    MAT('Ligue.',[['la métaphore','comparação sem “como”'],['l’hyperbole','exagero'],['l’euphémisme','atenuação'],['l’oxymore','união de opostos']]),
    ['« Il est mort de rire » est…',['une hyperbole','un euphémisme','un oxymore'],0],['« Il nous a quittés » (pour « il est mort ») est…',['un euphémisme','une hyperbole','une métaphore'],0],
    ['« Cette obscure clarté » (Corneille) est…',['un oxymore','une litote','une métaphore'],0],TF('« Va, je ne te hais point » é um exemplo clássico de litote.',true),GAP('« Ses yeux sont des étoiles » : c’est une ___.','métaphore')]],
  ['FR','C1','Leitura','Lecture · L’IA au bureau','Lisez le texte et répondez.\n\nL’intelligence artificielle s’invite désormais dans la plupart des bureaux. Rédiger un courriel, résumer une réunion, traduire un document : autant de tâches que des outils automatisés accomplissent en quelques secondes. Pour certains économistes, ces gains de productivité libéreront du temps pour des activités plus créatives. D’autres redoutent au contraire une dévalorisation de certains métiers, voire leur disparition. Entre ces deux visions, de nombreux spécialistes insistent sur un point : la formation. Selon eux, ce n’est pas tant l’IA qui menace l’emploi que l’incapacité à apprendre à s’en servir.',[
    ['Quelles tâches l’IA accomplit-elle rapidement ?',['rédiger, résumer, traduire','négocier des contrats','diriger une équipe'],0],['Selon certains économistes, les gains de productivité…',['libéreront du temps','supprimeront tous les emplois','n’existent pas'],0],
    ['Que redoutent d’autres experts ?',['la dévalorisation de certains métiers','une hausse des salaires','plus de réunions'],0],TF('Les spécialistes insistent sur l’importance de la formation.',true),
    ['Selon eux, la vraie menace est…',['l’IA elle-même','l’incapacité à apprendre à s’en servir','la traduction automatique'],1],['Dans le texte, « redoutent » signifie…',['craignent','souhaitent','ignorent'],0]]],
];

/* ---------- escutas novas (entram no banco e no sorteio da prova de nível) ---------- */
if (typeof ESCUTAS!=='undefined'){
  ESCUTAS.EN.A1.push(['Sam’s new flat','Hi, I’m Sam. I live in a new flat in the city centre. It’s small, but it’s very nice. There is a living room, a kitchen, one bedroom and a bathroom. My bedroom has a big window and a blue sofa. The flat is on the fourth floor and there’s no lift! Next to my building there is a supermarket and a park.',[
    ['Where is Sam’s flat?',['in the city centre','near the beach','in a village'],0],['How many bedrooms are there?',['one','two','three'],0],['What colour is the sofa?',['red','blue','green'],1],
    TF('There is a lift in the building.',false),GAP('Next to the building there is a supermarket and a ___.','park')]]);
  ESCUTAS.EN.A2.push(['Lost luggage','A: Good morning. Can I help you?\nB: Yes, my suitcase didn’t arrive. I was on the flight from Madrid.\nA: I’m sorry about that. Can you describe it?\nB: It’s a large black suitcase with a red ribbon on the handle.\nA: OK. What’s inside?\nB: Mostly clothes, and a present for my daughter.\nA: We’ll find it. It’ll probably arrive on the next flight, at six this evening. We can send it to your hotel.\nB: That’s great. I’m staying at the Grand Hotel.',[
    ['Where was the flight from?',['Madrid','Milan','Munich'],0],['What colour is the suitcase?',['red','black','blue'],1],GAP('There is a red ___ on the handle.','ribbon'),
    TF('There is a present for B’s son in the suitcase.',false),['When will the suitcase probably arrive?',['at six this evening','tomorrow morning','next week'],0]]]);
  ESCUTAS.EN.B1.push(['A voice message from Mark','Hey Jess, it’s Mark. Listen, I’m really sorry, but I can’t make it to dinner on Friday. My boss has asked me to go to a conference in Birmingham, and I won’t be back until Saturday afternoon. Could we move it to Sunday instead? I’ve heard there’s a new Italian place near the station that’s supposed to be amazing. I could book a table for seven o’clock if that works for you. Let me know, and say hi to Tom!',[
    ['Why can’t Mark go to dinner on Friday?',['he is ill','he has a conference','he has a family event'],1],GAP('He will be back on Saturday ___.','afternoon'),['What day does he suggest instead?',['Saturday','Sunday','Monday'],1],
    ['Where is the new restaurant?',['near the station','in Birmingham','near Jess’s house'],0],TF('Mark has already booked a table.',false)]]);
  ESCUTAS.EN.B2.push(['Podcast · Learning languages as an adult','There’s a common belief that adults simply can’t learn languages as well as children. The research tells a more interesting story. Children do have an advantage when it comes to pronunciation: if you start young, you’re much more likely to end up sounding like a native speaker. But in the early stages, adults often learn faster, because they can use strategies, understand grammar rules and make connections with languages they already know. What really matters, according to most studies, is the amount of exposure and practice. An adult who spends an hour a day listening and speaking will usually make far more progress than a child who studies for an hour a week.',[
    ['What is the common belief?',['adults can’t learn languages as well as children','children learn grammar faster','adults have better pronunciation'],0],['Where do children have an advantage?',['vocabulary','pronunciation','grammar rules'],1],
    TF('In the early stages, adults often learn faster.',true),['What matters most, according to most studies?',['age','exposure and practice','talent'],1],
    ['Who will usually make more progress?',['a child who studies an hour a week','an adult who practises an hour a day','both the same'],1]]]);
  ESCUTAS.EN.C1.push(['Lecture · The placebo effect','The placebo effect is one of the most intriguing phenomena in medicine. Patients given a sugar pill, believing it to be a real drug, frequently report genuine improvements, particularly in conditions such as pain or anxiety. Perhaps more surprising is that placebos can work even when patients know they are taking one: so-called open-label placebos. Researchers suspect that the ritual of treatment itself, the consultation, the attention, the expectation of relief, triggers measurable changes in the brain. That said, placebos are no substitute for effective treatment: they rarely, if ever, shrink tumours or cure infections.',[
    ['What do patients given a sugar pill often report?',['no change','genuine improvements','only side effects'],1],['Placebos seem to work particularly for…',['pain or anxiety','infections','broken bones'],0],
    ['What is an open-label placebo?',['a placebo patients know they are taking','a new type of drug','a hidden treatment'],0],['What might trigger the effect, according to researchers?',['the ritual of treatment','the colour of the pill','the price'],0],
    TF('The speaker says placebos can replace effective treatment.',false)]]);
  ESCUTAS.FR.A1.push(['L’appartement d’Inès','Salut, je m’appelle Inès. J’habite dans un petit appartement au centre-ville. Il y a un salon, une cuisine, une chambre et une salle de bains. Dans ma chambre, il y a un grand lit et un canapé bleu. L’appartement est au quatrième étage et il n’y a pas d’ascenseur ! À côté de mon immeuble, il y a un supermarché et un parc.',[
    ['Où habite Inès ?',['au centre-ville','à la campagne','à la plage'],0],['Combien de chambres y a-t-il ?',['une','deux','trois'],0],['De quelle couleur est le canapé ?',['rouge','bleu','vert'],1],
    TF('Il y a un ascenseur.',false),GAP('À côté de l’immeuble, il y a un supermarché et un ___.','parc')]]);
  ESCUTAS.FR.A2.push(['À l’aéroport · la valise perdue','A: Bonjour, je peux vous aider ?\nB: Oui, ma valise n’est pas arrivée. J’étais sur le vol de Lisbonne.\nA: Je suis désolé. Vous pouvez la décrire ?\nB: C’est une grande valise noire avec un ruban rouge sur la poignée.\nA: D’accord. Qu’est-ce qu’il y a dedans ?\nB: Surtout des vêtements, et un cadeau pour ma fille.\nA: Nous allons la retrouver. Elle arrivera sûrement avec le prochain vol, à dix-huit heures. On peut l’envoyer à votre hôtel.\nB: Parfait. Je suis à l’hôtel Bellevue.',[
    ['D’où venait le vol ?',['de Lisbonne','de Londres','de Lyon'],0],['De quelle couleur est la valise ?',['rouge','noire','bleue'],1],GAP('Il y a un ruban rouge sur la ___.','poignée'),
    TF('Le cadeau est pour son fils.',false),['Quand la valise va-t-elle probablement arriver ?',['à dix-huit heures','demain matin','la semaine prochaine'],0]]]);
  ESCUTAS.FR.B1.push(['Un message de Marc','Salut Julie, c’est Marc. Écoute, je suis vraiment désolé, mais je ne pourrai pas venir dîner vendredi. Mon chef m’a demandé d’aller à un salon professionnel à Lille, et je ne rentrerai que samedi après-midi. On pourrait plutôt se voir dimanche ? On m’a parlé d’un nouveau restaurant italien près de la gare, il paraît qu’il est génial. Je peux réserver une table pour dix-neuf heures si ça te va. Dis-moi, et fais un bisou à Thomas !',[
    ['Pourquoi Marc ne peut-il pas venir vendredi ?',['il est malade','il va à un salon professionnel','il a un dîner de famille'],1],GAP('Il rentrera samedi ___.','après-midi'),['Quel jour propose-t-il ?',['samedi','dimanche','lundi'],1],
    ['Où est le nouveau restaurant ?',['près de la gare','à Lille','près de chez Julie'],0],TF('Marc a déjà réservé une table.',false)]]);
  ESCUTAS.FR.B2.push(['Podcast · Apprendre une langue à l’âge adulte','On entend souvent dire que les adultes ne peuvent pas apprendre une langue aussi bien que les enfants. La recherche raconte une histoire plus nuancée. Les enfants ont bien un avantage pour la prononciation : quand on commence jeune, on a beaucoup plus de chances de parler sans accent. Mais au début, les adultes apprennent souvent plus vite, car ils utilisent des stratégies, comprennent les règles de grammaire et font des liens avec les langues qu’ils connaissent déjà. Ce qui compte vraiment, selon la plupart des études, c’est l’exposition et la pratique. Un adulte qui écoute et parle une heure par jour progressera généralement bien plus qu’un enfant qui étudie une heure par semaine.',[
    ['Que dit-on souvent ?',['que les adultes apprennent moins bien que les enfants','que les enfants apprennent la grammaire plus vite','que les adultes prononcent mieux'],0],['Où les enfants ont-ils un avantage ?',['le vocabulaire','la prononciation','la grammaire'],1],
    TF('Au début, les adultes apprennent souvent plus vite.',true),['Qu’est-ce qui compte le plus, selon les études ?',['l’âge','l’exposition et la pratique','le talent'],1],
    ['Qui progressera généralement le plus ?',['un enfant qui étudie une heure par semaine','un adulte qui pratique une heure par jour','les deux pareil'],1]]]);
  ESCUTAS.FR.C1.push(['Conférence · L’effet placebo','L’effet placebo est l’un des phénomènes les plus intrigants de la médecine. Des patients qui reçoivent une pilule de sucre, en croyant prendre un vrai médicament, signalent souvent une amélioration réelle, en particulier pour la douleur ou l’anxiété. Plus surprenant encore, le placebo peut fonctionner même lorsque le patient sait qu’il en prend un : on parle alors de placebo ouvert. Les chercheurs pensent que le rituel du soin lui-même, la consultation, l’attention, l’attente d’un soulagement, provoque des changements mesurables dans le cerveau. Cela dit, le placebo ne remplace pas un traitement efficace : il ne guérit pas les infections et ne fait pas disparaître les tumeurs.',[
    ['Que signalent souvent les patients qui reçoivent une pilule de sucre ?',['aucun changement','une amélioration réelle','seulement des effets secondaires'],1],['Le placebo semble agir surtout sur…',['la douleur ou l’anxiété','les infections','les fractures'],0],
    ['Qu’est-ce qu’un placebo ouvert ?',['un placebo que le patient sait prendre','un nouveau médicament','un traitement caché'],0],['Qu’est-ce qui provoquerait l’effet, selon les chercheurs ?',['le rituel du soin','la couleur de la pilule','le prix'],0],
    TF('Selon l’intervenant, le placebo peut remplacer un traitement efficace.',false)]]);
}

/* ---------- tarefas novas ligadas aos marcos da trilha (treino e provinha) ---------- */
const TRILHA_EXTRA={
  'EN-A1-1':['Subject pronouns','Countries and nationalities'],'EN-A1-4':['Toys and games'],'EN-A1-5':['Places in town'],'EN-A1-6':['Present simple · he, she, it'],'EN-A1-7':['Food and drinks'],'EN-A1-8':['Reading · A postcard from Lisbon'],
  'EN-A2-1':['Adjectives or adverbs?'],'EN-A2-2':['The th sounds'],'EN-A2-3':['There was and there were'],'EN-A2-5':['At the hotel'],'EN-A2-7':['Everyday phrasal verbs','At the doctor'],'EN-A2-8':['Reading · Lucy’s new job'],
  'EN-B1-2':['Already, yet and just'],'EN-B1-3':['Might, may and could'],'EN-B1-5':['Phrasal verbs with turn','Complaining politely'],'EN-B1-6':['Renting a flat'],'EN-B1-7':['Who, which or where?','Reading · The tiny house movement'],
  'EN-B2-2':['Make, let and get'],'EN-B2-4':['Both, either and neither'],'EN-B2-5':['Reading · Digital nomads','Discourse markers'],'EN-B2-6':['Collocations with have, take and pay'],'EN-B2-7':['Phrasal verbs with break'],
  'EN-C1-2':['Ellipsis and substitution'],'EN-C1-3':['Hedging language'],'EN-C1-4':['Word formation'],'EN-C1-5':['Idioms about time'],'EN-C1-6':['Whereas, albeit and notwithstanding','Reading · The loneliness epidemic'],
  'FR-A1-1':['Les nationalités'],'FR-A1-2':['Masculin ou féminin ?'],'FR-A1-4':['La maison'],'FR-A1-5':['Quelle heure est-il ?','Aller et faire','Lecture · La journée de Paul'],'FR-A1-6':['Les prépositions de lieu'],'FR-A1-7':['Au café','Le temps qu’il fait'],
  'FR-A2-1':['Il y a, depuis et pendant'],'FR-A2-2':['Les voyelles nasales'],'FR-A2-3':['Pouvoir, vouloir et devoir'],'FR-A2-4':['Les pronoms toniques','Chez le médecin'],'FR-A2-6':['Les transports','À l’hôtel'],'FR-A2-7':['Lecture · Le nouveau travail de Karim'],
  'FR-B1-1':['Lecture · Quitter Paris pour la campagne'],'FR-B1-2':['Le logement'],'FR-B1-4':['Il dit que…'],'FR-B1-5':['Celui, celle, ceux et celles','Les adverbes en -ment'],'FR-B1-6':['Cause et conséquence','Les sentiments'],'FR-B1-7':['Les expressions avec « faire »'],
  'FR-B2-1':['Bien que, malgré et pourtant'],'FR-B2-2':['Le futur antérieur'],'FR-B2-3':['L’accord du participe passé'],'FR-B2-4':['Lecture · La semaine de quatre jours','La transition écologique'],'FR-B2-5':['Argot et verlan'],'FR-B2-6':['Le vocabulaire de l’argumentation','La mise en relief'],
  'FR-C1-1':['Le conditionnel passé','Le passé simple'],'FR-C1-2':['Les figures de style'],'FR-C1-3':['Lecture · L’IA au bureau'],'FR-C1-4':['Les formules de la lettre formelle'],'FR-C1-5':['Au cas où, pour peu que, à condition que'],
};
