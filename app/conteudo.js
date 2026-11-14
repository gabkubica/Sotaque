/* =========================================================
   Sotaque · conteúdo extra: atividades, lições de casa, baralhos e aulas prontas
   Questões no formato do banco: [enunciado, alternativas, certa] · TF(frase, v/f) · GAP(frase com ___, respostas com |)
   MAT(enunciado, pares) · ORD(frase) · texto solto = resposta escrita. "a" = áudio (A: e B: viram duas vozes).
   As provas dos marcos são montadas a partir das tarefas de cada marco (provasMarcos, no fim).
   ========================================================= */
const CONT_ATIV=[
  /* ===================== INGLÊS ===================== */
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'My family',i:'Escolha a palavra certa para cada pessoa da família.',q:[
    ['My mother’s mother is my ___.',['aunt','grandmother','sister'],1],
    ['My father’s brother is my ___.',['uncle','cousin','nephew'],0],
    ['My aunt’s children are my ___.',['brothers','cousins','parents'],1],
    ['My mother and my father are my ___.',['parents','grandparents','children'],0],
    TF('“Husband” is the man in a married couple.',true),
    MAT('Ligue as palavras.',[['brother','irmão'],['daughter','filha'],['son','filho'],['wife','esposa'],['grandfather','avô']]),
    GAP('I have one sister and two ___ (irmãos).','brothers'),
    'Write 3 sentences about your family. Example: I have one brother. His name is…']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'There is / there are',i:'Complete com there is ou there are.',q:[
    GAP('___ a sofa in the living room.','There is|There’s'),
    GAP('___ two bedrooms in my flat.','There are'),
    ['___ any milk in the fridge?',['Is there','Are there','There is'],0],
    ['___ any chairs in the kitchen?',['Is there','Are there','There are'],1],
    ['There ___ a lot of people at the party.',['is','are','be'],1],
    ['There isn’t ___ bread.',['some','any','a'],1],
    ORD('There are three windows in my room'),
    'Describe your bedroom in 3 sentences with there is / there are.']},
  {l:'EN',lv:'A1',tp:'Escuta',t:'Ordering at a café',i:'Ouça o diálogo e responda.',a:`A: Hi! What can I get you?
B: Hello. Can I have a cappuccino, please?
A: Sure. Small or large?
B: Small, please. And a chocolate muffin.
A: To have here or to take away?
B: To have here.
A: That’s five pounds twenty, please.
B: Here you are. Thank you!`,q:[
    ['What does the customer drink?',['tea','a cappuccino','orange juice'],1],
    ['What size is the drink?',['small','medium','large'],0],
    ['What does the customer eat?',['a sandwich','a chocolate muffin','a salad'],1],
    TF('The customer takes the food away.',false),
    ['How much is it?',['£5.20','£2.50','£5.12'],0],
    GAP('“Can I ___ a cappuccino, please?”','have')]},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Days, months and dates',i:'Datas e dias da semana em inglês.',q:[
    ['The day after Monday is ___.',['Sunday','Tuesday','Thursday'],1],
    ['The month after March is ___.',['April','May','February'],0],
    ['We say: “My birthday is ___ May.”',['on','in','at'],1],
    ['We say: “The party is ___ Saturday.”',['in','at','on'],2],
    ['How do we say 21/06?',['the twenty-one of June','the twenty-first of June','June twenty-one'],1],
    MAT('Ligue.',[['Wednesday','quarta-feira'],['Thursday','quinta-feira'],['weekend','fim de semana'],['January','janeiro'],['August','agosto']]),
    GAP('There are seven days in a ___.','week')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Past simple: regular and irregular',i:'Escolha ou escreva o passado certo.',q:[
    GAP('Yesterday I ___ (go) to the beach.','went'),
    GAP('She ___ (study) for three hours last night.','studied'),
    GAP('We ___ (eat) pizza on Friday.','ate'),
    GAP('They ___ (not / like) the film.','didn’t like|did not like'),
    ['___ you see Tom at the party?',['Do','Did','Was'],1],
    ['I ___ tired, so I went to bed early.',['was','were','did'],0],
    MAT('Ligue o verbo ao passado.',[['buy','bought'],['take','took'],['write','wrote'],['come','came'],['think','thought']]),
    'Write about your last weekend (3–4 sentences).']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Plans for the weekend',i:'Ouça a conversa e responda.',a:`A: Hey, Sara! Are you doing anything this weekend?
B: On Saturday morning I'm going to clean my flat, and in the afternoon I'm meeting my cousin for lunch.
A: What about Sunday?
B: Nothing yet. Why?
A: There's a food festival in the old town. Do you want to come?
B: I'd love to! What time?
A: Let's meet at the station at eleven.
B: Perfect. See you on Sunday!`,q:[
    ['What is Sara going to do on Saturday morning?',['clean her flat','go shopping','visit her cousin'],0],
    ['Who is she meeting for lunch?',['her sister','her cousin','her boss'],1],
    ['What is happening on Sunday?',['a concert','a food festival','a football match'],1],
    ['Where are they meeting?',['at the station','at the old town','at Sara’s flat'],0],
    GAP('They are meeting at ___ o’clock.','eleven|11'),
    TF('Sara doesn’t want to go to the festival.',false)]},
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'Clothes and shopping',i:'Roupas e frases para fazer compras.',q:[
    ['You wear ___ on your feet.',['gloves','shoes','a scarf'],1],
    ['“Can I try it on?” means you want to…',['pay for it','put it on in the shop','return it'],1],
    ['This jacket is too small. Do you have it in a ___ size?',['bigger','biggest','big'],0],
    ['“How much ___ these jeans?”',['is','are','does'],1],
    MAT('Ligue.',[['dress','vestido'],['shirt','camisa'],['skirt','saia'],['coat','casaco'],['trainers','tênis']]),
    GAP('I’d like to pay ___ card, please.','by'),
    GAP('The changing rooms are over ___.','there')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Comparatives: my city',i:'Escolha a forma certa.',q:[
    ['My brother is ___ than me.',['taller','more tall','tallest'],0],
    ['This is the ___ restaurant in town.',['better','best','goodest'],1],
    ['Today is ___ than yesterday.',['hotter','hoter','more hot'],0],
    ['English is ___ than Chinese for me.',['easyer','easier','more easy'],1],
    ['Rio is one of the ___ cities in the world.',['most beautiful','beautifullest','more beautiful'],0],
    GAP('My car is ___ (bad) than yours.','worse'),
    GAP('She’s the ___ (funny) person I know.','funniest'),
    'Compare two cities you know (3 sentences).']},
  {l:'EN',lv:'A2',tp:'Leitura',t:'A day in London',i:`Leia o texto e responda.

Last Saturday, Paula spent the day in London with her friend Mia. They took the train from Oxford early in the morning and arrived at nine. First, they visited the British Museum, because it's free and Paula loves history. Then they had lunch at a small Italian restaurant near Covent Garden. In the afternoon, it started to rain, so they went to a bookshop and stayed there for two hours. In the evening, they saw a musical in the West End. They got home very late, but they were very happy.`,q:[
    ['How did they travel to London?',['by bus','by train','by car'],1],
    ['Why did they visit the British Museum?',['It’s free and Paula loves history','Mia works there','It was raining'],0],
    ['Where did they have lunch?',['at a Chinese restaurant','at an Italian restaurant','at the museum'],1],
    ['What did they do when it started to rain?',['went home','went to a bookshop','saw a film'],1],
    TF('They saw a musical in the evening.',true),
    TF('They came home early.',false)]},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Used to and would',i:'Hábitos do passado.',q:[
    ['I ___ live in a small town when I was a child.',['used to','use to','was used to'],0],
    ['Did you ___ play football at school?',['used to','use to','using to'],1],
    ['We ___ go to the beach every summer.',['would','will','were'],0],
    ['She ___ have long hair, but now it’s short.',['used to','would','is used to'],0],
    TF('We can use “would” for past states, like “I would have a dog”.',false),
    GAP('I didn’t ___ to like vegetables.','use'),
    'Write 3 things you used to do as a child.']},
  {l:'EN',lv:'B1',tp:'Escuta',t:'A job interview',i:'Ouça a entrevista de emprego e responda.',a:`A: So, Daniel, why are you interested in this position?
B: Well, I've been working in customer service for three years, and I'd like to take on more responsibility. Your company is known for training its staff, which is really important to me.
A: What would you say is your biggest strength?
B: I'm a good listener. When customers are angry, I stay calm and try to find a solution.
A: And a weakness?
B: Sometimes I take on too many tasks at once. I'm learning to say no and to prioritise.
A: Where do you see yourself in five years?
B: Hopefully leading a small team.`,q:[
    ['How long has Daniel worked in customer service?',['one year','three years','five years'],1],
    ['Why does he like the company?',['the salary','the training for staff','the location'],1],
    ['What is his biggest strength?',['He’s a good listener','He speaks four languages','He’s very fast'],0],
    ['What is his weakness?',['He arrives late','He takes on too many tasks','He doesn’t like teams'],1],
    ['Where does he see himself in five years?',['leading a small team','abroad','in another company'],0],
    'What is your biggest strength? Answer in 2–3 sentences.']},
  {l:'EN',lv:'B1',tp:'Phrasal verbs',t:'Phrasal verbs: travel',i:'Phrasal verbs que aparecem em viagens.',q:[
    ['The plane ___ at 6 a.m.',['took off','took on','took in'],0],
    ['We need to ___ at the hotel before 2 p.m.',['check in','check out','check up'],1],
    ['Can you ___ me ___ at the airport?',['pick / up','pick / out','pick / on'],0],
    ['Let’s ___ early to avoid traffic.',['set off','set up','set in'],0],
    ['Our car ___ on the motorway.',['broke down','broke up','broke out'],0],
    MAT('Ligue.',[['get on','embarcar'],['get off','descer'],['look around','dar uma volta, explorar'],['see off','despedir-se de alguém que viaja']]),
    GAP('We stayed ___ late talking.','up')]},
  {l:'EN',lv:'B1',tp:'Gramática',t:'First and second conditional',i:'Real ou imaginado? Escolha a forma certa.',q:[
    ['If it rains tomorrow, we ___ at home.',['will stay','would stay','stayed'],0],
    ['If I ___ a lot of money, I would travel the world.',['have','had','will have'],1],
    ['If you heat ice, it ___.',['melts','would melt','melted'],0],
    ['I ___ that job if I were you.',['will take','would take','take'],1],
    ['If she ___ harder, she will pass.',['studies','studied','would study'],0],
    GAP('If I ___ (be) you, I’d talk to her.','were|was'),
    'What would you do if you won the lottery? (3 sentences)']},
  {l:'EN',lv:'B1',tp:'Expressões',t:'Suggestions and advice',i:'Como sugerir e aconselhar.',q:[
    ['“Why don’t we ___ a taxi?”',['take','to take','taking'],0],
    ['“How about ___ to the cinema?”',['go','going','to go'],1],
    ['“You ___ see a doctor.”',['should','would','could to'],0],
    ['“If I were you, I ___ apologise.”',['will','would','am'],1],
    ['“You’d better ___ now or you’ll miss the bus.”',['leave','to leave','leaving'],0],
    MAT('Ligue o problema ao conselho.',[['I’m always tired.','You should go to bed earlier.'],['I can’t find a job.','Why don’t you update your CV?'],['I’m bored.','How about learning something new?']]),
    'Your friend wants to learn English fast. Give 3 pieces of advice.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Passive voice and causative',i:'Passiva e “have something done”.',q:[
    ['The bridge ___ in 1890.',['built','was built','has built'],1],
    ['A new hospital ___ at the moment.',['is being built','is building','builds'],0],
    ['I ___ my hair cut yesterday.',['had','made','did'],0],
    ['The results ___ next week.',['will announce','will be announced','are announcing'],1],
    ['She’s going to get her car ___.',['repair','repaired','repairing'],1],
    GAP('The emails have already ___ (send).','been sent'),
    GAP('It is said ___ he is very rich.','that')]},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Podcast: working from home',i:'Ouça o trecho do podcast e responda.',a:`A: Today we're talking about remote work. Ana, you've been working from home for four years. Would you go back to the office?
B: Honestly, not full-time. I'm far more productive at home, and I've gained almost two hours a day that I used to spend commuting.
A: But don't you miss your colleagues?
B: I do, and that's the downside. Working from home can get lonely, and it's harder to learn from more experienced people. That's why my team meets in person every Thursday.
A: So a hybrid model is the answer?
B: For us, yes. But it depends on the job. A nurse can't work from home, obviously.`,q:[
    ['How long has Ana worked from home?',['two years','four years','six years'],1],
    ['What has she gained?',['a higher salary','almost two hours a day','a bigger office'],1],
    ['What is the downside for her?',['it can get lonely','the internet is slow','she works more hours'],0],
    ['How often does her team meet in person?',['every day','once a month','every Thursday'],2],
    ['What is her conclusion?',['everybody should work from home','it depends on the job','offices are the future'],1],
    'Would you prefer to work from home or in an office? Why?']},
  {l:'EN',lv:'B2',tp:'Vocabulário',t:'Collocations: make and do',i:'Make ou do?',q:[
    ['___ a mistake',['make','do'],0],['___ your homework',['make','do'],1],['___ a decision',['make','do'],0],['___ business',['make','do'],1],
    ['___ an effort',['make','do'],0],['___ the washing-up',['make','do'],1],['___ progress',['make','do'],0],['___ someone a favour',['make','do'],1],
    GAP('Could you ___ me a favour?','do')]},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Reported speech: what they said',i:'Passe para o discurso indireto.',q:[
    ['“I’m tired.” → She said she ___ tired.',['is','was','has been'],1],
    ['“I’ll call you.” → He said he ___ call me.',['will','would','can'],1],
    ['“Where do you live?” → She asked me where ___.',['did I live','I lived','do I live'],1],
    ['“Don’t be late.” → He told us ___ late.',['not to be','don’t be','to not being'],0],
    ['“I saw the film.” → She said she ___ the film.',['had seen','has seen','sees'],0],
    GAP('“Are you coming?” → He asked ___ I was coming.','if|whether')]},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Inversion for emphasis',i:'Inversão depois de expressões negativas.',q:[
    ['Never ___ such a beautiful sunset.',['I have seen','have I seen','I saw'],1],
    ['Not only ___ late, but he also forgot the tickets.',['he was','was he','he is'],1],
    ['Little ___ that the house was haunted.',['did they know','they knew','knew they'],0],
    ['Under no circumstances ___ the door.',['you should open','should you open','open you'],1],
    ['No sooner ___ home than the phone rang.',['I had got','had I got','I got'],1],
    GAP('Only then ___ I realise my mistake.','did'),
    'Rewrite with inversion: “I have rarely felt so welcome.”']},
  {l:'EN',lv:'C1',tp:'Leitura',t:'The attention economy',i:`Leia o texto e responda.

Every app on your phone is competing for the same scarce resource: your attention. Designers call it "engagement", but the techniques behind it are borrowed from the casino floor. Infinite scrolling removes natural stopping points; unpredictable rewards, such as likes and notifications, keep us checking compulsively. None of this is accidental. Yet blaming technology alone would be too convenient. Many of us reach for our phones precisely because boredom, once a fertile ground for reflection, has become intolerable. Reclaiming our attention may therefore require not only better-designed products, but a renewed tolerance for doing nothing at all.`,q:[
    ['According to the text, “engagement” techniques come from…',['education','casinos','sports'],1],
    ['What does infinite scrolling do?',['it removes natural stopping points','it saves battery','it improves reading'],0],
    ['“None of this is accidental” means that…',['it happens by chance','it is designed on purpose','it is illegal'],1],
    ['What is the author’s view on blaming technology?',['it is the only cause','it is too simple an explanation','technology is harmless'],1],
    ['What does the author suggest?',['banning phones','tolerating boredom again','using more apps'],1],
    'Do you agree with the author? Write a short paragraph.']},
  /* ===================== FRANCÊS ===================== */
  {l:'FR',lv:'A1',tp:'Gramática',t:'Les articles : le, la, les, un, une',i:'Choisissez le bon article.',q:[
    ['J’ai ___ chat et deux chiens.',['un','une','le'],0],['___ soleil brille.',['La','Le','Les'],1],['J’adore ___ pommes.',['les','la','une'],0],
    ['C’est ___ maison de Paul.',['le','la','un'],1],['Il y a ___ école dans ma rue.',['un','une','le'],1],
    GAP('___ enfants jouent dans le parc.','Les'),GAP('J’habite dans ___ appartement.','un')]},
  {l:'FR',lv:'A1',tp:'Escuta',t:'Au café : commander',i:'Écoutez et répondez.',a:`A: Bonjour ! Qu'est-ce que vous désirez ?
B: Bonjour. Un café et un croissant, s'il vous plaît.
A: Sur place ou à emporter ?
B: Sur place.
A: Très bien. Ça fait quatre euros cinquante.
B: Voilà. Merci !`,q:[
    ['Qu’est-ce que le client commande ?',['un thé et un croissant','un café et un croissant','un café et un gâteau'],1],
    TF('Le client mange à emporter.',false),
    ['Combien ça coûte ?',['4,50 €','5,40 €','14,50 €'],0],
    GAP('« Un café, s’il vous ___. »','plaît')]},
  {l:'FR',lv:'A2',tp:'Conjugação',t:'Passé composé : être ou avoir ?',i:'Choisissez l’auxiliaire.',q:[
    ['Hier, je ___ allé au cinéma.',['suis','ai'],0],['Nous ___ mangé une pizza.',['sommes','avons'],1],['Elle ___ née en 1998.',['est','a'],0],
    ['Ils ___ regardé un film.',['sont','ont'],1],['Tu ___ resté à la maison ?',['es','as'],0],['Vous ___ fini vos devoirs ?',['êtes','avez'],1],
    GAP('Marie est ___ (partir) à 8 heures.','partie')]},
  {l:'FR',lv:'A2',tp:'Gramática',t:'Les pronoms COD : le, la, les',i:'Remplacez par le bon pronom.',q:[
    ['Tu regardes la télé ? Oui, je ___ regarde.',['la','le','les'],0],['Tu connais Pierre ? Oui, je ___ connais.',['la','le','les'],1],
    ['Tu aimes les fraises ? Oui, je ___ adore.',['la','le','les'],2],['Tu as vu le film ? Non, je ne ___ ai pas vu.',['l’','la','les'],0],
    GAP('Tu prends le bus ? Oui, je ___ prends tous les jours.','le')]},
  {l:'FR',lv:'A2',tp:'Escuta',t:'Le week-end de Léa',i:'Écoutez et répondez.',a:`Le week-end dernier, je suis allée à la mer avec mes parents. Samedi matin, on a fait du vélo le long de la plage. L'après-midi, il a fait très chaud, alors on s'est baignés. Le soir, on a mangé des fruits de mer dans un petit restaurant. Dimanche, il a plu toute la journée, donc on est restés à l'hôtel et on a joué aux cartes.`,q:[
    ['Où est allée Léa ?',['à la montagne','à la mer','à Paris'],1],['Qu’est-ce qu’ils ont fait samedi matin ?',['du vélo','du ski','les courses'],0],
    TF('Dimanche, il a fait beau.',false),['Qu’est-ce qu’ils ont mangé le soir ?',['une pizza','des fruits de mer','des crêpes'],1]]},
  {l:'FR',lv:'B1',tp:'Gramática',t:'Imparfait ou passé composé : souvenirs',i:'Choisissez le bon temps.',q:[
    ['Quand j’étais petit, je ___ au foot tous les samedis.',['jouais','ai joué'],0],['Hier, je ___ mes clés.',['perdais','ai perdu'],1],
    ['Il ___ quand je suis sorti.',['pleuvait','a plu'],0],['Nous ___ la télé quand le téléphone a sonné.',['regardions','avons regardé'],0],
    ['En 2015, elle ___ à Lyon.',['déménageait','a déménagé'],1],GAP('Avant, il ___ (habiter) à Marseille.','habitait')]},
  {l:'FR',lv:'B1',tp:'Gramática',t:'Le subjonctif après « il faut que »',i:'Conjuguez au subjonctif.',q:[
    GAP('Il faut que tu ___ (être) à l’heure.','sois'),GAP('Il faut que nous ___ (faire) attention.','fassions'),
    GAP('Il faut qu’elle ___ (avoir) de la patience.','ait'),GAP('Il faut que je ___ (partir) maintenant.','parte'),
    ['Je veux que tu ___ avec moi.',['viens','viennes','viendras'],1]]},
  {l:'FR',lv:'B1',tp:'Escuta',t:'Un entretien d’embauche',i:'Écoutez et répondez.',a:`A: Pourquoi voulez-vous travailler chez nous ?
B: J'ai travaillé trois ans dans un hôtel et j'aimerais évoluer. Votre entreprise propose beaucoup de formations, et c'est important pour moi.
A: Quelle est votre principale qualité ?
B: Je suis très organisée. Je sais gérer plusieurs tâches en même temps.
A: Et votre défaut ?
B: Je suis parfois trop perfectionniste, mais j'apprends à déléguer.`,q:[
    ['Où a-t-elle travaillé ?',['dans un hôtel','dans une école','dans un hôpital'],0],['Pourquoi aime-t-elle l’entreprise ?',['le salaire','les formations','les horaires'],1],
    ['Quelle est sa qualité ?',['elle est organisée','elle parle cinq langues','elle est drôle'],0],TF('Son défaut est d’être trop perfectionniste.',true)]},
  {l:'FR',lv:'B2',tp:'Gramática',t:'Les pronoms relatifs composés',i:'Lequel, laquelle, auquel, duquel…',q:[
    ['La raison pour ___ je suis venu est simple.',['lequel','laquelle','lesquels'],1],['Le projet ___ je pense est ambitieux.',['auquel','duquel','lequel'],0],
    ['C’est le parc près ___ j’habite.',['duquel','auquel','lequel'],0],['Les amis avec ___ je pars sont sympas.',['lesquels','lesquelles','lequel'],0],
    GAP('La ville dans ___ je suis né est petite.','laquelle')]},
  {l:'FR',lv:'C1',tp:'Expressões',t:'Les connecteurs logiques (C1)',i:'Choisissez le connecteur qui convient.',q:[
    ['Il a beaucoup travaillé ; ___, il a réussi.',['par conséquent','pourtant','bien que'],0],['___ la pluie, le match a eu lieu.',['Malgré','Grâce à','Puisque'],0],
    ['Elle est compétente ; ___, elle manque d’expérience.',['en revanche','donc','ainsi'],0],['___ il soit tard, je continue.',['Bien qu’','Parce qu’','Puisqu’'],0],
    'Écrivez trois phrases avec « cependant », « en effet » et « d’ailleurs ».']},
];

/* lições de casa prontas: mais longas, com áudio, para mandar como homework */
const CONT_HW=[
  {l:'EN',lv:'A1',t:'Homework · Me and my routine',i:'Lição de casa: ouça, responda e escreva sobre a sua rotina.',a:`Hi! I'm Lucas. I'm twenty-five and I live in Porto Alegre. I'm a nurse, so I work at a hospital. I get up at six o'clock every day. I have coffee and bread for breakfast. I go to work by bus. I finish work at three and I go to the gym. In the evening, I cook dinner and watch TV. I go to bed at ten.`,q:[
    ['What is Lucas’s job?',['teacher','nurse','doctor'],1],['What time does he get up?',['at six','at seven','at ten'],0],['How does he go to work?',['by car','by bike','by bus'],2],
    TF('He goes to the gym after work.',true),GAP('He ___ (go) to bed at ten.','goes'),GAP('I ___ (not / work) on Sundays.','don’t work|do not work'),
    ['She ___ breakfast at 7.',['have','has','having'],1],ORD('I usually have lunch at noon'),
    MAT('Ligue.',[['get up','levantar'],['have breakfast','tomar café da manhã'],['go to bed','ir dormir'],['take a shower','tomar banho']]),
    'Write about your routine: 5 sentences (get up, work/study, lunch, evening, go to bed).']},
  {l:'EN',lv:'A2',t:'Homework · My last holiday',i:'Lição de casa: passado simples e viagens.',a:`Last July, I went to Chile with my best friend. We flew from São Paulo to Santiago and stayed in a small hotel in the centre. On the first day, we visited the markets and tried empanadas. Then we took a bus to the mountains and saw snow for the first time! It was very cold, but beautiful. The only problem was that I lost my sunglasses. It was the best holiday of my life.`,q:[
    ['When did she go to Chile?',['in June','in July','in August'],1],['Who did she travel with?',['her family','her best friend','alone'],1],['What did they try?',['empanadas','pizza','sushi'],0],
    TF('It was her first time seeing snow.',true),['What was the problem?',['she lost her sunglasses','she got sick','the hotel was bad'],0],
    GAP('We ___ (stay) in a small hotel.','stayed'),GAP('I ___ (lose) my sunglasses.','lost'),GAP('___ you enjoy the trip?','Did'),
    'Write about your last holiday: where you went, who with, what you did and how it was (60–80 words).']},
  {l:'EN',lv:'A2',t:'Homework · Food and restaurants',i:'Lição de casa: comida e restaurante.',a:`A: Good evening. Are you ready to order?
B: Yes. For starters, I'd like the tomato soup, please.
A: And for your main course?
B: The grilled chicken with salad. Does it come with chips?
A: It comes with rice or chips.
B: Rice, please. And a glass of water.
A: Would you like a dessert?
B: Maybe later, thank you.`,q:[
    ['What does she order for starters?',['salad','tomato soup','chips'],1],['What is the main course?',['grilled chicken','fish','pasta'],0],['What does she choose with it?',['chips','rice','potatoes'],1],
    TF('She orders a dessert now.',false),['“Are you ready to order?” is said by…',['the customer','the waiter'],1],
    MAT('Ligue.',[['starter','entrada'],['main course','prato principal'],['dessert','sobremesa'],['the bill','a conta']]),
    GAP('Could I have the ___, please? (a conta)','bill|check'),'Write a short dialogue at a restaurant (6 lines).']},
  {l:'EN',lv:'B1',t:'Homework · Life experiences',i:'Lição de casa: present perfect para falar de experiências.',a:`Have I ever done anything crazy? Well, I've jumped out of a plane! It was a parachute jump for my thirtieth birthday. I've also lived in three different countries: Brazil, Portugal and Canada. I've never been to Asia, but I'd love to visit Japan. Recently, I've started learning to play the guitar. I haven't played in public yet, but maybe one day!`,q:[
    ['What crazy thing has the speaker done?',['climbed a volcano','jumped out of a plane','swum with sharks'],1],['How many countries has the speaker lived in?',['two','three','four'],1],
    TF('The speaker has been to Japan.',false),['What has the speaker started recently?',['learning the guitar','learning Japanese','running'],0],
    ['I ___ to London three times.',['have been','went','was'],0],['She ___ the film last night.',['has seen','saw'],1],GAP('Have you ___ (ever / try) sushi?','ever tried'),
    GAP('I haven’t finished my homework ___.','yet'),'Write about 3 interesting experiences in your life (present perfect).']},
  {l:'EN',lv:'B1',t:'Homework · Health and habits',i:'Lição de casa: saúde, hábitos e conselhos.',a:`Doctors say that small habits make a big difference. First, try to walk at least thirty minutes a day. You don't need a gym: take the stairs and get off the bus one stop earlier. Second, drink more water and less sugar. Third, sleep is not a luxury. Adults need seven to nine hours a night. Finally, take breaks from your screen every hour. Your eyes and your back will thank you.`,q:[
    ['How long should we walk every day?',['15 minutes','30 minutes','1 hour'],1],['What is one way to walk more without a gym?',['take the stairs','buy a bike','run at night'],0],
    ['How many hours of sleep do adults need?',['5 to 6','7 to 9','10 to 12'],1],TF('The speaker says sleep is a luxury.',false),
    GAP('You ___ drink more water. (conselho)','should'),GAP('If you sleep more, you ___ feel better.','will|’ll'),
    MAT('Ligue.',[['headache','dor de cabeça'],['to get fit','entrar em forma'],['a healthy diet','uma dieta saudável'],['to give up','largar, desistir']]),'Which habit would you like to change? How?']},
  {l:'EN',lv:'B2',t:'Homework · Work and careers',i:'Lição de casa: trabalho, carreira e e-mails formais.',a:`More and more people are changing careers in their thirties and forties. Some are looking for meaning; others simply need more flexibility. Experts recommend testing the new career before quitting: take a short course, do volunteer work or talk to people in the field. Above all, don't underestimate your transferable skills. Communication, problem-solving and time management are valued in almost any job.`,q:[
    ['Why do people change careers, according to the text?',['for meaning or flexibility','only for money','because they are fired'],0],['What do experts recommend before quitting?',['testing the new career','asking for a raise','moving abroad'],0],
    ['Which is NOT mentioned as a transferable skill?',['communication','problem-solving','programming'],2],
    ['I’m writing to apply ___ the position of manager.',['for','to','at'],0],['I look forward to ___ from you.',['hear','hearing','heard'],1],
    GAP('Please find my CV ___ (anexo).','attached'),['“Kind regards” is used to…',['start a formal email','end an email','apologise'],1],
    'Write a short formal email applying for a job (80–100 words).']},
  {l:'EN',lv:'B2',t:'Homework · Technology and society',i:'Lição de casa: tecnologia, opinião e argumentação.',a:`A: Do you think children should have smartphones?
B: Not before twelve or thirteen. They're not ready to deal with social media.
A: But parents want to be able to contact them.
B: Sure, but a basic phone does that. The problem isn't the phone, it's the apps designed to keep kids hooked.
A: So you'd ban them?
B: Not ban, but schools and families should agree on clear limits.`,q:[
    ['At what age does B think children should have smartphones?',['8 or 9','12 or 13','16 or 17'],1],['What is the real problem, for B?',['the price','apps designed to keep kids hooked','the battery'],1],
    TF('B wants to ban smartphones completely.',false),['B suggests that schools and families…',['agree on clear limits','buy basic phones for everyone','teach programming'],0],
    ['On the one hand…, ___',['in the other hand','on the other hand','by the other hand'],1],GAP('I’m ___ favour of clear limits.','in'),
    'Should social media be banned for children under 16? Write 120–150 words.']},
  {l:'EN',lv:'C1',t:'Homework · Debate: cities of the future',i:'Lição de casa: argumentação avançada.',a:`What I find striking about the debate on car-free city centres is how quickly opinions change once people experience the result. Initially, shop owners tend to oppose such measures, fearing a loss of customers. Yet, in most cases, footfall increases, because pedestrians linger and come back more often. That said, these policies only work when there are viable alternatives. Without decent public transport, banning cars simply penalises those who live furthest from the centre.`,q:[
    ['What does the speaker find striking?',['how quickly opinions change','how expensive cars are','how big cities are'],0],['What do shop owners initially fear?',['losing customers','paying more taxes','crime'],0],
    ['What actually happens to footfall?',['it decreases','it increases','it stays the same'],1],['What is the condition for these policies to work?',['viable alternatives','more parking','lower prices'],0],
    ['“That said” is closest in meaning to…',['therefore','however','because'],1],GAP('Not ___ do these policies reduce pollution, but they also help shops.','only'),
    'Should your city ban cars from the centre? Write a balanced argument (150–200 words).']},
  {l:'FR',lv:'A1',t:'Devoirs · Ma journée',i:'Devoirs : écoutez, répondez et décrivez votre journée.',a:`Je m'appelle Camille. Je me lève à sept heures. Je prends un café et des tartines. Je vais au travail en métro. Je travaille dans une banque. À midi, je mange avec mes collègues. Le soir, je fais du sport et je regarde une série. Je me couche à onze heures.`,q:[
    ['À quelle heure Camille se lève ?',['à six heures','à sept heures','à huit heures'],1],['Où travaille-t-elle ?',['dans une école','dans une banque','dans un magasin'],1],
    ['Comment va-t-elle au travail ?',['en bus','en métro','à pied'],1],TF('Le soir, elle fait du sport.',true),GAP('Je me ___ (lever) à sept heures.','lève'),
    'Décrivez votre journée (5 phrases).']},
  {l:'FR',lv:'A2',t:'Devoirs · Mes vacances',i:'Devoirs : le passé composé et les vacances.',a:`L'été dernier, je suis partie en Bretagne avec mes amies. Nous avons loué une petite maison près de la mer. Nous avons visité Saint-Malo et nous avons mangé beaucoup de crêpes. Un jour, nous avons fait une randonnée sous la pluie ! C'était fatigant mais très drôle.`,q:[
    ['Où est-elle partie ?',['en Provence','en Bretagne','en Alsace'],1],['Qu’est-ce qu’elles ont loué ?',['une voiture','une petite maison','des vélos'],1],
    ['Qu’est-ce qu’elles ont mangé ?',['des crêpes','des pizzas','du fromage'],0],TF('La randonnée était sous le soleil.',false),GAP('Nous ___ visité Saint-Malo.','avons'),
    'Racontez vos dernières vacances (60–80 mots).']},
  {l:'FR',lv:'B1',t:'Devoirs · Souvenirs d’enfance',i:'Devoirs : l’imparfait et les souvenirs.',a:`Quand j'étais petit, je passais tous mes étés chez mes grands-parents, à la campagne. Mon grand-père avait un grand jardin et il m'apprenait le nom de toutes les plantes. Le soir, ma grand-mère nous racontait des histoires. Un jour, j'ai trouvé un petit chat dans la grange et je l'ai gardé. Il s'appelait Caramel.`,q:[
    ['Où passait-il ses étés ?',['à la mer','à la campagne','à Paris'],1],['Que faisait son grand-père ?',['il lui apprenait le nom des plantes','il lui apprenait à nager','il cuisinait'],0],
    TF('Sa grand-mère racontait des histoires.',true),['Comment s’appelait le chat ?',['Caramel','Chocolat','Biscuit'],0],GAP('Quand j’étais petit, je ___ (jouer) dehors.','jouais'),
    'Racontez un souvenir d’enfance (80–100 mots).']},
  {l:'FR',lv:'B2',t:'Devoirs · Le monde du travail',i:'Devoirs : le travail et l’argumentation.',a:`De plus en plus de jeunes diplômés refusent les emplois qui ne correspondent pas à leurs valeurs. Pour eux, le sens du travail compte autant que le salaire. Certains employeurs s'inquiètent de cette exigence ; d'autres y voient une opportunité de repenser leur organisation. Une chose est sûre : le rapport au travail est en train de changer.`,q:[
    ['Que refusent beaucoup de jeunes diplômés ?',['les emplois mal payés','les emplois contraires à leurs valeurs','les emplois à l’étranger'],1],['Pour eux, le sens du travail compte…',['moins que le salaire','autant que le salaire','plus que la famille'],1],
    ['Comment réagissent certains employeurs ?',['ils s’inquiètent','ils augmentent les salaires','ils ferment'],0],['« Une chose est sûre » signifie…',['c’est certain','c’est possible','c’est faux'],0],
    'Le sens du travail est-il plus important que le salaire ? (150 mots)']},
];

/* mais baralhos de flashcards: [idioma, nível, título, cartões] */
const FLASH_SEED_2=[
  ['EN','A1','Family',`mother = mãe | My mother is a teacher.
father = pai | My father likes football.
sister = irmã | I have one sister.
brother = irmão | My brother is twelve.
grandmother = avó | My grandmother lives with us.
grandfather = avô | My grandfather is eighty.
aunt = tia | My aunt lives in Recife.
uncle = tio | My uncle has a dog.
cousin = primo / prima | My cousins are very funny.
parents = pais | My parents work a lot.`],
  ['EN','A1','Food and drinks',`breakfast = café da manhã | I have breakfast at seven.
lunch = almoço | We have lunch at noon.
dinner = jantar | What’s for dinner?
bread = pão | I eat bread with butter.
cheese = queijo | I love cheese.
chicken = frango | Chicken and rice, please.
vegetables = legumes, verduras | Eat your vegetables!
juice = suco | An orange juice, please.
water = água | Can I have some water?
I’m hungry. = Estou com fome. | I’m hungry. Let’s eat!`],
  ['EN','A1','Daily routine',`get up = levantar-se | I get up at six.
have a shower = tomar banho | I have a shower in the morning.
get dressed = vestir-se | I get dressed quickly.
go to work = ir para o trabalho | I go to work by bus.
have lunch = almoçar | I have lunch at one.
finish work = sair do trabalho | I finish work at five.
cook dinner = fazer o jantar | I cook dinner every day.
watch TV = ver TV | We watch TV in the evening.
go to bed = ir dormir | I go to bed at eleven.
usually = geralmente | I usually walk to school.`],
  ['EN','A1','Classroom English',`Can you repeat, please? = Pode repetir, por favor? | Sorry, can you repeat, please?
How do you say… in English? = Como se diz… em inglês? | How do you say “saudade” in English?
What does … mean? = O que significa…? | What does “busy” mean?
How do you spell it? = Como se escreve? | How do you spell your name?
I don’t understand. = Não entendo. | Sorry, I don’t understand.
Can you speak more slowly? = Pode falar mais devagar? | Can you speak more slowly, please?
I have a question. = Tenho uma pergunta. | Teacher, I have a question.
I don’t know. = Não sei. | I don’t know the answer.`],
  ['EN','A2','Clothes',`shirt = camisa | He’s wearing a white shirt.
T-shirt = camiseta | I need a new T-shirt.
trousers = calça (UK) | These trousers are too long.
dress = vestido | She bought a red dress.
skirt = saia | I like your skirt.
jacket = jaqueta | Take a jacket, it’s cold.
shoes = sapatos | My shoes are wet.
trainers = tênis (UK) | I run in my old trainers.
try on = experimentar | Can I try this on?
It fits. = Serve. / Ficou bom. | The jacket fits perfectly.`],
  ['EN','A2','House and home',`living room = sala de estar | We watch TV in the living room.
bedroom = quarto | My bedroom is small.
kitchen = cozinha | The kitchen is next to the dining room.
bathroom = banheiro | The bathroom is upstairs.
garden = jardim, quintal | We have a small garden.
sofa = sofá | The cat sleeps on the sofa.
fridge = geladeira | The milk is in the fridge.
wardrobe = guarda-roupa | My clothes are in the wardrobe.
upstairs = no andar de cima | My room is upstairs.
rent = aluguel; alugar | The rent is very high.`],
  ['EN','A2','Weather',`sunny = ensolarado | It’s sunny today!
cloudy = nublado | It’s cloudy but warm.
rainy = chuvoso | It’s a rainy day.
windy = com vento | It’s very windy at the beach.
cold = frio | It’s cold in the morning.
hot = quente (muito) | Summer in Rio is hot.
storm = tempestade | There’s a storm coming.
umbrella = guarda-chuva | Take an umbrella!
forecast = previsão do tempo | What’s the forecast for tomorrow?
It’s freezing! = Está um gelo! | Close the window, it’s freezing!`],
  ['EN','A2','Feelings',`happy = feliz | I’m so happy to see you!
sad = triste | Why are you sad?
tired = cansado | I’m tired after work.
angry = bravo, com raiva | Don’t be angry with me.
worried = preocupado | I’m worried about the exam.
excited = animado | I’m excited about the trip!
bored = entediado | I’m bored. Let’s go out.
nervous = nervoso | I’m nervous about the interview.
scared = com medo | My son is scared of the dark.
proud = orgulhoso | I’m proud of you!`],
  ['EN','A2','Directions',`turn left = vire à esquerda | Turn left at the bank.
turn right = vire à direita | Turn right at the traffic lights.
go straight on = siga em frente | Go straight on for two blocks.
next to = ao lado de | The café is next to the bank.
opposite = em frente a | The school is opposite the park.
between = entre | It’s between the bakery and the bank.
on the corner = na esquina | There’s a pharmacy on the corner.
traffic lights = semáforo | Stop at the traffic lights.
How do I get to…? = Como chego a…? | How do I get to the station?
It’s a five-minute walk. = Fica a cinco minutos a pé. | The museum is a five-minute walk from here.`],
  ['EN','B1','Work and the office',`colleague = colega de trabalho | My colleagues are very helpful.
boss = chefe | My boss is on holiday.
meeting = reunião | I have a meeting at ten.
deadline = prazo | The deadline is on Friday.
salary = salário | The salary is good.
to hire = contratar | They’re hiring new staff.
to be fired = ser demitido | He was fired last month.
day off = folga | Tomorrow is my day off.
to apply for a job = candidatar-se a uma vaga | I applied for a job at a bank.
work from home = trabalhar de casa | I work from home on Mondays.`],
  ['EN','B1','Health',`headache = dor de cabeça | I have a terrible headache.
sore throat = dor de garganta | I’ve got a sore throat.
fever = febre | The baby has a fever.
cough = tosse | That’s a bad cough.
prescription = receita médica | You need a prescription for this.
appointment = consulta | I have a doctor’s appointment.
to feel sick = sentir enjoo / passar mal | I feel sick after the boat trip.
to get better = melhorar | I hope you get better soon!
to sprain your ankle = torcer o tornozelo | She sprained her ankle playing football.
allergic to = alérgico a | I’m allergic to peanuts.`],
  ['EN','B1','Phrasal verbs: relationships',`get on with = dar-se bem com | I get on well with my sister.
fall out with = brigar com | She fell out with her best friend.
make up = fazer as pazes | They argued but made up quickly.
break up = terminar (namoro) | They broke up last year.
ask someone out = chamar para sair | He finally asked her out.
look up to = admirar | I look up to my grandmother.
let someone down = decepcionar | Don’t let me down!
put up with = tolerar, aguentar | I can’t put up with the noise.
bring up = criar (filhos) | She was brought up by her aunt.
grow up = crescer | I grew up in Curitiba.`],
  ['EN','B1','Make or do?',`make a mistake = cometer um erro | Everyone makes mistakes.
make a decision = tomar uma decisão | I need to make a decision.
make friends = fazer amigos | It’s easy to make friends here.
make money = ganhar dinheiro | He makes a lot of money.
make an effort = esforçar-se | Please make an effort.
do homework = fazer o dever | Did you do your homework?
do the dishes = lavar a louça | I’ll do the dishes.
do exercise = fazer exercício | I do exercise three times a week.
do business = fazer negócios | We do business with Chile.
do someone a favour = fazer um favor | Can you do me a favour?`],
  ['EN','B1','Linking words',`however = no entanto | It was cheap. However, it was terrible.
although = embora | Although it rained, we went out.
because of = por causa de | We stayed home because of the rain.
so = então, por isso | I was tired, so I went to bed.
in addition = além disso | In addition, the hotel has a pool.
for example = por exemplo | I love fruit, for example mangoes.
instead of = em vez de | Let’s walk instead of taking the bus.
as soon as = assim que | Call me as soon as you arrive.
unless = a menos que | I’ll go unless it rains.
in the end = no fim | In the end, everything was fine.`],
  ['EN','B2','Common idioms',`a piece of cake = moleza | The test was a piece of cake.
break the ice = quebrar o gelo | He told a joke to break the ice.
hit the books = cair nos livros | I have to hit the books tonight.
under the weather = indisposto | I’m feeling a bit under the weather.
once in a blue moon = muito raramente | I eat fast food once in a blue moon.
cost an arm and a leg = custar os olhos da cara | That car cost an arm and a leg.
call it a day = encerrar por hoje | Let’s call it a day.
on the fence = em cima do muro | I’m still on the fence about it.
the last straw = a gota d’água | That was the last straw!
get the hang of it = pegar o jeito | You’ll get the hang of it.`],
  ['EN','B2','Business emails',`I’m writing to… = Escrevo para… | I’m writing to ask about the position.
Please find attached… = Segue em anexo… | Please find attached my CV.
I look forward to hearing from you. = Aguardo seu retorno. | I look forward to hearing from you soon.
Could you please…? = Poderia, por favor…? | Could you please confirm the date?
As discussed… = Conforme conversamos… | As discussed, I’m sending the report.
Sorry for the delay. = Desculpe a demora. | Sorry for the delay in replying.
Kind regards = Atenciosamente | Kind regards, Ana
to follow up = dar seguimento | I’m following up on my last email.
at your earliest convenience = assim que possível | Please reply at your earliest convenience.
to reach out = entrar em contato | Feel free to reach out with questions.`],
  ['EN','B2','Giving opinions',`In my opinion… = Na minha opinião… | In my opinion, it’s too expensive.
As far as I’m concerned… = No que me diz respeito… | As far as I’m concerned, it’s fine.
I see your point, but… = Entendo seu ponto, mas… | I see your point, but I disagree.
I couldn’t agree more. = Concordo totalmente. | I couldn’t agree more!
That’s not necessarily true. = Não necessariamente. | That’s not necessarily true.
It depends on… = Depende de… | It depends on the situation.
On the other hand… = Por outro lado… | On the other hand, it’s very fast.
To be honest… = Para ser sincero… | To be honest, I didn’t like it.
I’m not so sure about that. = Não tenho tanta certeza. | Hmm, I’m not so sure about that.`],
  ['EN','C1','Advanced connectors',`nevertheless = ainda assim | It was risky; nevertheless, they went ahead.
whereas = ao passo que | She loves cities, whereas he prefers the countryside.
notwithstanding = não obstante | Notwithstanding the cost, the project was approved.
hence = daí, portanto | Prices rose; hence the protests.
albeit = embora, ainda que | It was a success, albeit a small one.
in light of = à luz de | In light of the results, we changed plans.
by and large = de modo geral | By and large, the feedback was positive.
let alone = muito menos | He can’t boil an egg, let alone cook dinner.
inasmuch as = na medida em que | It’s useful inasmuch as it saves time.`],
  ['FR','A1','La famille',`la mère = mãe | Ma mère est professeure.
le père = pai | Mon père aime le foot.
la sœur = irmã | J’ai une sœur.
le frère = irmão | Mon frère a douze ans.
les grands-parents = avós | Mes grands-parents habitent à Lyon.
l’oncle = tio | Mon oncle a un chien.
la tante = tia | Ma tante est très drôle.
le cousin = primo | Mon cousin s’appelle Paul.
les enfants = filhos, crianças | Ils ont trois enfants.`],
  ['FR','A1','La nourriture',`le pain = pão | Je voudrais une baguette, s’il vous plaît.
le fromage = queijo | J’adore le fromage.
la viande = carne | Je ne mange pas de viande.
le poisson = peixe | Le poisson est frais.
les légumes = legumes | Mange tes légumes !
les fruits = frutas | J’aime les fruits.
l’eau = água | Une carafe d’eau, s’il vous plaît.
le petit-déjeuner = café da manhã | Je prends le petit-déjeuner à 7 h.
le déjeuner = almoço | Le déjeuner est à midi.
J’ai faim. = Estou com fome. | J’ai faim, on mange ?`],
  ['FR','A2','Les vêtements',`la chemise = camisa | Il porte une chemise blanche.
le pantalon = calça | Ce pantalon est trop long.
la robe = vestido | Elle a acheté une robe rouge.
la jupe = saia | J’aime ta jupe.
la veste = jaqueta | Prends ta veste, il fait froid.
les chaussures = sapatos | Mes chaussures sont mouillées.
essayer = experimentar | Je peux essayer ce pull ?
la taille = tamanho | Vous avez la taille M ?
Ça vous va bien. = Fica bem em você. | Cette robe vous va très bien.`],
  ['FR','A2','La maison',`le salon = sala | On regarde la télé dans le salon.
la chambre = quarto | Ma chambre est petite.
la cuisine = cozinha | La cuisine est à côté.
la salle de bains = banheiro | La salle de bains est en haut.
le jardin = jardim | Nous avons un petit jardin.
le canapé = sofá | Le chat dort sur le canapé.
le frigo = geladeira | Le lait est dans le frigo.
le loyer = aluguel | Le loyer est très cher.
à l’étage = no andar de cima | Ma chambre est à l’étage.`],
  ['FR','A2','La météo',`Il fait beau. = Faz tempo bom. | Il fait beau aujourd’hui !
Il pleut. = Está chovendo. | Il pleut depuis ce matin.
Il fait froid. = Está frio. | Il fait froid en hiver.
Il fait chaud. = Está calor. | Il fait chaud en été.
Il y a du vent. = Está ventando. | Il y a du vent à la plage.
le nuage = nuvem | Il y a beaucoup de nuages.
l’orage = tempestade | Un orage arrive.
la neige = neve | J’adore la neige !
la météo = previsão do tempo | Qu’est-ce que dit la météo ?`],
  ['FR','B1','Les sentiments',`heureux, heureuse = feliz | Je suis très heureuse !
triste = triste | Pourquoi tu es triste ?
fatigué = cansado | Je suis fatigué après le travail.
en colère = com raiva | Il est en colère contre moi.
inquiet, inquiète = preocupado | Je suis inquiète pour l’examen.
fier, fière = orgulhoso | Je suis fier de toi !
déçu = decepcionado | J’ai été déçu par le film.
avoir peur de = ter medo de | Mon fils a peur du noir.
avoir hâte de = estar ansioso para | J’ai hâte de te voir !`],
  ['FR','B1','Le travail',`le collègue = colega | Mes collègues sont sympas.
le patron = chefe | Mon patron est en vacances.
la réunion = reunião | J’ai une réunion à dix heures.
le salaire = salário | Le salaire est correct.
embaucher = contratar | L’entreprise embauche.
être licencié = ser demitido | Il a été licencié le mois dernier.
le congé = folga, férias | Je suis en congé demain.
postuler = candidatar-se | J’ai postulé pour ce poste.
le télétravail = trabalho remoto | Je fais du télétravail le lundi.`],
  ['FR','B2','Expressions idiomatiques',`avoir le cafard = estar na fossa | J’ai le cafard depuis lundi.
coûter les yeux de la tête = custar os olhos da cara | Cette voiture coûte les yeux de la tête.
poser un lapin = dar um bolo | Il m’a posé un lapin hier soir.
avoir la flemme = estar com preguiça | J’ai la flemme de sortir.
casser les pieds = encher o saco | Tu me casses les pieds !
tomber dans les pommes = desmaiar | Elle est tombée dans les pommes.
mettre son grain de sel = dar pitaco | Il met toujours son grain de sel.
c’est la goutte d’eau qui fait déborder le vase = é a gota d’água | Ça, c’est la goutte d’eau qui fait déborder le vase !`],
];

/* aulas prontas: [professora, título, blocos] · atividade/baralho pelo título */
const CONT_AULAS=[
  ['prof','A1 · Meet my family',[{t:'texto',title:'Warm-up',body:'Who is in your family?\nDo you have brothers or sisters?\nWho do you live with?'},{t:'flash',deck:'Family'},{t:'ativ',bank:'My family'},{t:'ativ',bank:'There is / there are'},{t:'texto',title:'Speaking',body:'Show a photo of your family and describe it.\nThis is my mother. Her name is…'}]],
  ['prof','A1 · At the café',[{t:'texto',title:'Warm-up',body:'What do you usually have for breakfast?\nDo you like coffee or tea?'},{t:'flash',deck:'Food and drinks'},{t:'ativ',bank:'Ordering at a café'},{t:'texto',title:'Role-play',body:'You are at a café. Order a drink and something to eat.\nAsk how much it is.\nThen change roles!'}]],
  ['prof','A2 · My last weekend',[{t:'texto',title:'Warm-up',body:'What did you do last weekend?\nDid you go out? Did you stay at home?'},{t:'ativ',bank:'Past simple: regular and irregular'},{t:'ativ',bank:'Plans for the weekend'},{t:'texto',title:'Speaking',body:'Tell me about the best weekend you remember.\nWhere were you? Who were you with? What did you do?'}]],
  ['prof','A2 · Shopping for clothes',[{t:'texto',title:'Warm-up',body:'Do you like shopping?\nWhere do you buy your clothes?'},{t:'flash',deck:'Clothes'},{t:'ativ',bank:'Clothes and shopping'},{t:'ativ',bank:'Comparatives: my city'},{t:'texto',title:'Role-play',body:'You want to return a jacket that is too small.\nTalk to the shop assistant.'}]],
  ['prof','B1 · Childhood memories',[{t:'texto',title:'Warm-up',body:'Where did you grow up?\nWhat did you use to do after school?'},{t:'ativ',bank:'Used to and would'},{t:'flash',deck:'Phrasal verbs: relationships'},{t:'texto',title:'Speaking',body:'Describe a person you looked up to as a child.\nWhy was this person important to you?'}]],
  ['prof','B1 · Job interviews',[{t:'texto',title:'Warm-up',body:'Have you ever had a job interview in English?\nHow did you feel?'},{t:'ativ',bank:'A job interview'},{t:'flash',deck:'Work and the office'},{t:'texto',title:'Role-play',body:'Interview practice:\n1. Tell me about yourself.\n2. What is your biggest strength?\n3. Where do you see yourself in five years?'}]],
  ['prof','B2 · The future of work',[{t:'texto',title:'Warm-up',body:'Would you like to work from home?\nWhat are the pros and cons?'},{t:'ativ',bank:'Podcast: working from home'},{t:'flash',deck:'Giving opinions'},{t:'texto',title:'Debate',body:'“Offices will disappear in ten years.”\nAgree or disagree? Give reasons and examples.'}]],
  ['prof','C1 · The attention economy',[{t:'texto',title:'Warm-up',body:'How many hours a day do you spend on your phone?\nDo you think you are addicted?'},{t:'ativ',bank:'The attention economy'},{t:'ativ',bank:'Inversion for emphasis'},{t:'texto',title:'Discussion',body:'Should apps be designed to be less addictive?\nWho is responsible: companies, governments or users?'}]],
  ['prof2','A1 · Au café',[{t:'texto',title:'Échauffement',body:'Qu’est-ce que vous prenez au petit-déjeuner ?\nVous aimez le café ?'},{t:'flash',deck:'La nourriture'},{t:'ativ',bank:'Au café : commander'},{t:'texto',title:'Jeu de rôle',body:'Vous êtes au café. Commandez une boisson et quelque chose à manger.\nDemandez le prix.'}]],
  ['prof2','A2 · Le week-end dernier',[{t:'texto',title:'Échauffement',body:'Qu’est-ce que vous avez fait le week-end dernier ?'},{t:'ativ',bank:'Passé composé : être ou avoir ?'},{t:'ativ',bank:'Le week-end de Léa'},{t:'texto',title:'À vous',body:'Racontez votre meilleur week-end.\nOù ? Avec qui ? Qu’est-ce que vous avez fait ?'}]],
  ['prof2','B1 · Souvenirs d’enfance',[{t:'texto',title:'Échauffement',body:'Où avez-vous grandi ?\nQu’est-ce que vous faisiez le mercredi après-midi ?'},{t:'ativ',bank:'Imparfait ou passé composé : souvenirs'},{t:'flash',deck:'Les sentiments'},{t:'texto',title:'À vous',body:'Racontez un souvenir d’enfance heureux.'}]],
  ['prof2','B1 · L’entretien d’embauche',[{t:'texto',title:'Échauffement',body:'Avez-vous déjà passé un entretien d’embauche ?'},{t:'ativ',bank:'Un entretien d’embauche'},{t:'flash',deck:'Le travail'},{t:'texto',title:'Jeu de rôle',body:'1. Parlez-moi de vous.\n2. Quelle est votre principale qualité ?\n3. Pourquoi voulez-vous ce poste ?'}]],
];

/* ---------- entrada no banco, nos baralhos e nas aulas ---------- */
function contBank(T0){
  const mk=(x,topic,k)=>({id:uid(),lang:x.l,level:x.lv,topic,title:x.t,instructions:x.i,audio:x.a||'',questions:fromRaw(x.q),uses:hashStr(x.t)%5,mine:false,createdAt:T0-15*DAY+k*MIN});
  return CONT_ATIV.map((x,k)=>mk(x,x.tp,k)).concat(CONT_HW.map((x,k)=>mk(x,'Homework',k+200)));
}
/* prova de cada marco: questões das tarefas do marco (até 3 com áudio) e a escrita do marco */
function provasMarcos(bank,T0){
  if (typeof allMarcos!=='function') return [];
  const out=[], speak=q=>q.type==='gap'? q.prompt.replace('___',q.answers[0]) : q.type==='mc'&&q.prompt.includes('___')? q.prompt.replace('___',q.options[q.correct]) : null;
  for (const lang of ['EN','FR']) for (const m of allMarcos(lang)){
    const pool=[]; for (const title of m.tasks){ const b=bank.find(x=>x.lang===lang&&x.title===title); if (b) pool.push(...b.questions.filter(q=>q.type!=='open')); }
    if (pool.length<6) continue;
    const R=rng(hashStr(m.id)), ord=pool.map((_,i)=>i); for (let i=ord.length-1;i>0;i--){ const j=Math.floor(R.r()*(i+1)); [ord[i],ord[j]]=[ord[j],ord[i]]; }
    const qs=ord.slice(0,12).map(i=>({...JSON.parse(JSON.stringify(pool[i])),id:uid()})); let n=0;
    for (const q of qs){ const sp=n<3&&speak(q); if (sp){ q.audio=sp; q.listen=true; n++; } }
    qs.push({id:uid(),type:'open',prompt:m.w});
    out.push({id:uid(),lang,level:m.level,topic:'Provas',title:`${lang==='FR'? 'Épreuve' : 'Test'} · ${m.sub} · Marco ${m.n}: ${m.title}`,
      instructions:`Prova do marco ${m.n} da trilha ${m.sub}: ${m.title}. São ${qs.length-1} questões${n? ` (${n} com áudio: ouça e responda)` : ''} e uma escrita curta no final. Responda com calma.`,
      audio:'',questions:qs,uses:0,mine:false,createdAt:T0-5*DAY,marco:m.id});
  }
  return out;
}
function seedContAulas(){
  DB.aulas ||= [];
  const bk=(lang,t)=>DB.bank.find(b=>b.lang===lang&&b.title===t)?.id, dk=(lang,t)=>DB.decks?.find(d=>d.lang===lang&&d.title===t)?.id;
  for (const [tid,title,blocks] of CONT_AULAS){
    if (DB.aulas.some(a=>a.teacherId===tid&&a.title===title)) continue;
    const lang=DB.users.find(u=>u.id===tid)?.lang||'EN';
    const bl=blocks.map(b=>b.t==='ativ'? {t:'ativ',bankId:bk(lang,b.bank)} : b.t==='flash'? {t:'flash',deckId:dk(lang,b.deck)} : {...b}).filter(b=>b.t==='texto'||b.bankId||b.deckId);
    DB.aulas.push({id:'au'+uid(),teacherId:tid,title,studentId:null,blocks:bl,createdAt:now()-DAY});
  }
}
