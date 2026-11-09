/* =========================================================
   Sotaque · teste de nivelamento (inglês e francês)
   Desenho dos testes de colocação mais usados (Oxford, Cambridge, Alliance Française):
   uma régua do A1 ao C1, com dificuldade crescente.
     1. Gramática e vocabulário: 6 questões por nível (30)
     2. Leitura: 1 texto por nível, 3 questões cada (15)
     3. Escuta: 1 áudio por nível, 3 questões cada (15)
     4. Escrita: 3 tarefas em degraus (a 3ª é opcional)
     5. Fala: conversa na aula, com roteiro em degraus para o professor
   As objetivas se corrigem sozinhas. Um nível conta como alcançado com 60% de acerto
   nele e em todos os de baixo. Escrita e fala o professor classifica, e a decisão final é dele.
   Formato das questões: igual ao do banco ([enunciado, alternativas, certa], TF, GAP).
   As alternativas de gramática são embaralhadas na montagem e ganham a opção "Não sei".
   ========================================================= */
const NIVELAMENTO={
  EN:{
    G:{
      A1:[
        ['My sister ___ a teacher.',['is','are','am','be'],0],
        ['___ you like coffee?',['Does','Do','Are','Is'],1],
        ['There ___ two books on the table.',['is','be','are','has'],2],
        ['He ___ to work by bus every day.',['go','going','is go','goes'],3],
        ['This is my friend Ana. ___ house is near the beach.',['Her','She','His','Hers'],0],
        ['I usually have lunch ___ one o’clock.',['in','at','on','to'],1],
      ],
      A2:[
        ['We ___ to the cinema last night.',['go','went','gone','are going'],1],
        ['Please be quiet. The baby ___.',['sleeps','is sleeping','slept','sleep'],1],
        ['My brother is ___ than me.',['tall','tallest','taller','more tall'],2],
        ['How ___ sugar do you want in your tea?',['many','lot','few','much'],3],
        ['Look at those clouds! It ___ rain.',['is going to','goes to','will to','is raining to'],0],
        ['___ you see the match on TV yesterday?',['Do','Did','Have','Were'],1],
      ],
      B1:[
        ['I ___ in this city since 2019.',['live','am living','have lived','lived'],2],
        ['If it rains tomorrow, we ___ at home.',['stay','will stay','would stay','stayed'],1],
        ['This bridge ___ more than a hundred years ago.',['built','was built','has built','is building'],1],
        ['When I got to the station, the train ___.',['already left','has already left','had already left','was already leave'],2],
        ['She asked me where ___.',['did I live','I lived','do I live','I am live'],1],
        ['I’m not used to ___ up so early.',['get','got','have got','getting'],3],
      ],
      B2:[
        ['If I ___ about the traffic, I would have left earlier.',['knew','had known','have known','would know'],1],
        ['By December, I ___ here for ten years.',['will work','am working','will have worked','have worked'],2],
        ['He denied ___ the window.',['to break','breaking','break','that broke'],1],
        ['You ___ have told me! I could have helped.',['must','can','would','should'],3],
        ['The car needs ___ before our trip.',['servicing','to servicing','service','serviced'],0],
        ['Hardly ___ the house when it started to rain.',['I had left','had I left','I left','did I leave'],1],
      ],
      C1:[
        ['Not until the results came out ___ how serious the problem was.',['we realised','we did realise','did we realise','had we realise'],2],
        ['I’d rather you ___ anyone about this yet.',['don’t tell','didn’t tell','won’t tell','not tell'],1],
        ['She is highly ___ to accept the offer.',['probable','possible','likely','potential'],2],
        ['The new policy has ___ a lot of criticism from teachers.',['made','done','put','drawn'],3],
        ['Were the company ___ its prices, many customers would leave.',['raising','to raise','raised','raise'],1],
        ['The project was a success, ___ the tight budget.',['in spite of','although','even','despite of'],0],
      ],
    },
    L:{
      A1:['A note on the fridge','Hi Sam!\nI’m at the gym. I’m back at six.\nThere is pizza in the fridge for lunch. Please give the cat some food and take the dog for a walk.\nYour English book is on the kitchen table.\nLove,\nMum',[
        ['Where is Mum?',['at work','at the gym','at the supermarket'],1],
        ['What can Sam eat for lunch?',['pizza','pasta','a sandwich'],0],
        TF('Sam must take the cat for a walk.',false)]],
      A2:['An email from Porto','Hi Paula,\nSorry I didn’t write last month! I moved to Porto in March because I got a job in a hotel. I work at reception from Tuesday to Saturday, so my days off are Sunday and Monday. The city is beautiful and the people are very friendly, but the rent is expensive, so I share a flat with two other girls. Why don’t you come and visit me in June? You can stay with us.\nWrite soon!\nInês',[
        ['Why did Inês move to Porto?',['to study','for a job','to live with her family'],1],
        ['When doesn’t Inês work?',['on Sunday and Monday','on Saturday and Sunday','from Tuesday to Saturday'],0],
        TF('Inês lives alone in Porto.',false)]],
      B1:['Repair cafés','Ten years ago, a woman in Amsterdam had a simple idea: instead of throwing away broken things, why not fix them together? She opened the first “repair café”, a monthly event where volunteers with technical skills help visitors repair lamps, bikes, clothes and toasters for free. Today there are more than two thousand repair cafés around the world. Organisers say the events are not only about saving money or reducing waste. “People come with a broken radio and leave with a new friend,” says one volunteer. Visitors are expected to help with the repair, so they learn how to do it themselves next time.',[
        ['What is the main idea of the text?',['how to repair a radio','events where people fix things together','a shop that sells used things'],1],
        ['What do visitors have to do?',['pay the volunteers','take part in the repair','bring a friend'],1],
        ['According to the organisers, repair cafés are also about…',['meeting people','selling products','winning prizes'],0]]],
      B2:['The four-day week','When a software company in Leeds moved its staff to a four-day week last year, many people predicted chaos. Twelve months later, the results have surprised even the sceptics. Productivity rose slightly, sick days fell by almost a third, and the company received three times as many job applications as before. However, the managing director is careful not to present the scheme as a miracle. “It only works because we cut unnecessary meetings and agreed clear priorities,” she explains. “If you simply squeeze five days of work into four, people burn out.” Critics point out that the model is far harder to apply in hospitals or schools, where someone has to be present every day.',[
        ['What surprised the sceptics?',['the company lost clients','the results were positive','staff worked longer hours'],1],
        ['According to the director, the scheme works because…',['employees work faster','the company changed how it organises work','salaries went up'],1],
        ['What is the critics’ main point?',['the model does not suit every sector','productivity always falls','workers prefer five days'],0]]],
      C1:['The myth of multitasking','We like to think of ourselves as accomplished multitaskers, effortlessly replying to emails while following a meeting. Yet decades of research suggest that what we call multitasking is, for the most part, rapid task-switching, and that each switch carries a cost. The brain needs time to “reload” the rules of the new task, and errors creep in during that transition. Ironically, those who multitask most often tend to perform worst on tests of attention, perhaps because the habit erodes the very ability it seems to display. None of this means that we should never do two things at once: walking while talking is hardly a problem. The difficulty arises when both activities compete for the same mental resources.',[
        ['According to the text, multitasking is mostly…',['doing two things at exactly the same time','switching quickly between tasks','a skill that improves with practice'],1],
        ['What does “the very ability it seems to display” refer to?',['the ability to pay attention','the ability to write emails','the ability to walk and talk'],0],
        ['What is the writer’s final position?',['multitasking should always be avoided','it is a problem when the tasks need the same mental resources','walking while talking is dangerous'],1]]],
    },
    O:{
      A1:['A phone message','Hi Jack, it’s Lily. Do you want to go to the park on Saturday? Let’s meet at the café on Green Street at eleven o’clock. Bring your bike! Call me back. Bye!',[
        ['What day do they meet?',['Friday','Saturday','Sunday'],1],
        ['What time do they meet?',['at ten','at eleven','at twelve'],1],
        ['What does Jack need to bring?',['his bike','a ball','some food'],0]]],
      A2:['At the shop','A: Good morning. Can I help you?\nB: Yes, please. I bought this jacket on Monday, but it’s too small. Can I change it?\nA: Of course. Have you got the receipt?\nB: Yes, here it is.\nA: Thank you. We haven’t got a medium in blue, only in black and green.\nB: Black is fine, thanks.\nA: Here you are. Is there anything else?\nB: No, that’s all. Thank you!',[
        ['What is the problem with the jacket?',['it is too big','it is too small','it is the wrong colour'],1],
        ['When did the customer buy it?',['on Monday','yesterday','last week'],0],
        ['Which colour does the customer take?',['blue','green','black'],2]]],
      B1:['A change to the course','Hello, this is a message for all students on the Tuesday evening photography course. Unfortunately, our teacher, Mark, has broken his arm, so there will be no class next Tuesday. Don’t worry: the class will take place on Thursday instead, at the same time, but in room twelve, on the second floor, because our usual room is booked. Mark will be there, and he says he can still hold a camera with one hand! The trip to the botanical garden is postponed until the following month. If you can’t come on Thursday, please send us an email and we’ll give you a link to the recording.',[
        ['Why is there no class next Tuesday?',['the room is booked','the teacher is injured','it is a holiday'],1],
        ['What changes for Thursday’s class?',['the time','the teacher','the room'],2],
        ['What happens to the trip to the botanical garden?',['it is cancelled','it is moved to later','it happens on Thursday'],1]]],
      B2:['Podcast · sleep and memory','A: So, is it true that we learn while we sleep?\nB: Well, not in the way people imagine. You can’t play a recording of French verbs at night and wake up fluent. But sleep does play a crucial role in learning. During deep sleep, the brain replays what we experienced during the day and strengthens the most important connections.\nA: So cutting sleep before an exam is a bad idea?\nB: Absolutely. Students who stay up all night revising often remember less than those who study a bit less and sleep properly. The information never gets consolidated.\nA: And what about naps?\nB: Short naps can help, especially after learning something new, but they’re not a substitute for a good night’s sleep.',[
        ['What does the expert say about learning while asleep?',['you can learn new words from recordings','sleep helps to fix what we learned while awake','it only works with languages'],1],
        ['Why is studying all night a bad idea?',['the information is not consolidated','students get bored','exams are in the morning'],0],
        ['What is the expert’s view on naps?',['they are useless','they can replace night sleep','they help but are not enough'],2]]],
      C1:['Lecture · cities and cars','What I want to suggest today is that the debate about cars in city centres is often framed in the wrong way. We tend to see it as a battle between drivers and everybody else. But when cities such as Ghent or Pontevedra restricted traffic, the most striking outcome wasn’t the anger of drivers, which faded within months, but the way local shops adapted. Many owners had feared they would lose customers; in practice, footfall increased, because people on foot linger and come back more often. That said, I don’t want to romanticise these cases. Both are relatively compact cities with decent public transport. Transplanting the same policy to a sprawling metropolis without investing in alternatives would, in my view, simply punish those who live furthest from the centre.',[
        ['What does the speaker say about drivers’ anger?',['it never went away','it was temporary','it closed many shops'],1],
        ['What happened to local shops?',['they lost customers','they moved out of the centre','they had more visitors'],2],
        ['What is the speaker’s main warning?',['the policy only works with good alternatives to the car','compact cities should allow more cars','shops always benefit from restrictions'],0]]],
    },
    E:[
      ['Write a message to a new friend. Say who you are, where you live and what you like doing at the weekend.','30 a 50','Tarefa 1 · escreva uma mensagem para um amigo novo: quem você é, onde mora e o que gosta de fazer no fim de semana.'],
      ['Write an email to a friend about a trip or an important day in your life. What happened? How did you feel? Why was it important?','80 a 120','Tarefa 2 · conte a um amigo, por e-mail, sobre uma viagem ou um dia importante: o que aconteceu, como você se sentiu e por que foi importante.'],
      ['“Learning a language online is just as effective as learning it in a classroom.” Do you agree? Give reasons and examples.','150 a 200','Tarefa 3 · opcional: faça se conseguir. Dê a sua opinião sobre aprender idiomas on-line ou em sala, com argumentos e exemplos.'],
    ],
    F:[
      ['A1 → A2','Apresentação e rotina','What’s your name? Where are you from? What do you do? Tell me about your family. What do you usually do at the weekend? What’s your favourite food?'],
      ['A2 → B1','Experiências e planos','Tell me about your last holiday. What did you do yesterday? Describe your home or your neighbourhood. What are your plans for next year?'],
      ['B1 → B2','Opiniões e explicações','Why do you want to learn English? What are the pros and cons of living in a big city? Tell me about a problem you solved at work or at school.'],
      ['B2 → C1','Debate e nuance','Should social media be regulated? How has technology changed the way we work? Imagine you could change one law in Brazil: which one, and why?'],
    ],
  },
  FR:{
    G:{
      A1:[
        ['Je ___ brésilienne.',['suis','es','est','être'],0],
        ['Nous ___ dans un petit appartement.',['habite','habitons','habitez','habitent'],1],
        ['Elle ___ vingt-cinq ans.',['est','fait','a','as'],2],
        ['Le matin, je bois ___ café.',['le','de la','des','du'],3],
        ['J’habite ___ Brésil, ___ Curitiba.',['au / à','en / à','au / en','à / au'],0],
        ['Ils ___ français ? Non, brésiliens.',['ont','sont','font','vont'],1],
      ],
      A2:[
        ['Hier, nous ___ au cinéma.',['avons allé','sommes allés','allons','irons'],1],
        ['Quand j’étais petit, je ___ au foot tous les samedis.',['ai joué','joue','jouais','jouerai'],2],
        ['Tu connais Marie ? Oui, je ___ connais bien.',['lui','le','les','la'],3],
        ['Aujourd’hui, il fait ___ froid qu’hier.',['plus','très','beaucoup','trop'],0],
        ['Il n’y a ___ lait dans le frigo.',['pas du','pas de','pas le','plus du'],1],
        ['Demain, je ___ voir mes parents.',['vais','suis','ai','fais'],0],
      ],
      B1:[
        ['Si j’avais plus de temps, je ___ le piano.',['apprendrai','apprends','apprendrais','appris'],2],
        ['Il faut que tu ___ à l’heure demain.',['es','seras','étais','sois'],3],
        ['Le livre ___ je t’ai parlé vient de sortir.',['dont','que','qui','où'],0],
        ['J’habite à Lyon ___ trois ans.',['pendant','depuis','il y a','dans'],1],
        ['Quand je suis arrivé, le film ___.',['a déjà commencé','était déjà commencé','avait déjà commencé','aura déjà commencé'],2],
        ['Elle m’a dit qu’elle ___ le lendemain.',['viendra','vient','est venue','viendrait'],3],
      ],
      B2:[
        ['Bien qu’il ___ malade, il est venu travailler.',['est','soit','était','sera'],1],
        ['Si tu m’avais prévenu, je ___ venu te chercher.',['serais','aurais','suis','serai'],0],
        ['C’est la raison pour ___ j’ai démissionné.',['lequel','que','laquelle','quoi'],2],
        ['Les lettres qu’il a ___ sont sur la table.',['écrit','écrits','écrite','écrites'],3],
        ['Il est parti sans que personne ne s’en ___.',['aperçoit','aperçoive','apercevra','apercevait'],1],
        ['___ la pluie, le match a été annulé.',['À cause de','Grâce à','Malgré','Pour'],0],
      ],
      C1:[
        ['Quoi qu’il ___, je ne changerai pas d’avis.',['dit','dise','dira','disait'],1],
        ['N’eût été son aide, nous ___ échoué.',['avons','aurons','aurions','avions'],2],
        ['Il se plaint sans arrêt, ___ tout pour être heureux.',['parce qu’il a','dès qu’il a','pour qu’il ait','alors qu’il a'],3],
        ['Cette décision a ___ de nombreuses critiques.',['suscité','fait','donné','mis'],0],
        ['À peine ___ arrivés que la réunion a commencé.',['nous étions','étions-nous','avions-nous','nous sommes'],1],
        ['Il a parlé de manière à ce que tout le monde le ___.',['comprend','comprendra','comprenne','comprenait'],2],
      ],
    },
    L:{
      A1:['Un message de Marc','Salut Léa !\nCe soir, on mange chez moi à 20 heures. J’habite 12, rue des Lilas, au troisième étage. Apporte une boisson, s’il te plaît ! Paul et Sophie viennent aussi.\nÀ ce soir !\nMarc',[
        ['À quelle heure est le dîner ?',['à 12 heures','à 20 heures','à 3 heures'],1],
        ['Qu’est-ce que Léa doit apporter ?',['une boisson','un dessert','une salade'],0],
        TF('Marc habite au premier étage.',false)]],
      A2:['Une nouvelle vie à Montréal','Chère Ana,\nÇa fait déjà trois mois que je suis à Montréal ! Je suis venue pour étudier le design à l’université. Les cours sont intéressants, mais il faut beaucoup travailler. Le week-end, je travaille dans un café pour payer mon loyer. L’hiver a été très froid : il a fait moins vingt degrés en janvier ! Heureusement, les gens sont très sympathiques. Tu veux venir me voir cet été ? Il y a plein de festivals.\nBises,\nJulia',[
        ['Pourquoi Julia est à Montréal ?',['pour travailler','pour étudier','pour voir sa famille'],1],
        ['Quand est-ce qu’elle travaille au café ?',['le week-end','le soir','en été'],0],
        TF('Julia trouve les gens de Montréal désagréables.',false)]],
      B1:['Les jardins partagés','Dans de nombreuses villes françaises, des habitants transforment des terrains abandonnés en jardins partagés. Le principe est simple : chacun cultive une petite parcelle, mais les outils, l’eau et les décisions sont communs. À Lille, le jardin du quartier de Fives réunit aujourd’hui une cinquantaine de familles. « Au début, on venait pour les tomates. Maintenant, on vient surtout pour se voir », raconte Nadia, une des fondatrices. La mairie prête le terrain gratuitement, à condition que le jardin reste ouvert au public deux après-midi par semaine.',[
        ['De quoi parle le texte ?',['de jardins cultivés ensemble par des habitants','d’un marché de légumes','d’un concours de jardinage'],0],
        ['Selon Nadia, aujourd’hui les gens viennent surtout…',['pour les légumes','pour se rencontrer','pour travailler'],1],
        ['Quelle est la condition de la mairie ?',['payer un loyer','ouvrir le jardin au public','cultiver seulement des tomates'],1]]],
      B2:['Le télétravail, une liberté ambiguë','Depuis la pandémie, le télétravail s’est imposé dans de nombreuses entreprises. Les salariés y voient d’abord un gain de temps : plus de trajets interminables, plus de flexibilité pour organiser sa journée. Pourtant, plusieurs études récentes nuancent ce tableau idyllique. Certains employés, surtout les plus jeunes, se sentent isolés et peinent à apprendre leur métier sans le contact quotidien avec des collègues expérimentés. D’autres avouent ne plus réussir à « déconnecter » : le salon devient bureau, et le travail déborde sur la soirée. Pour les spécialistes, la solution n’est ni le retour forcé au bureau ni le télétravail intégral, mais un équilibre négocié équipe par équipe.',[
        ['Quel est le principal avantage du télétravail selon les salariés ?',['un meilleur salaire','le temps gagné','plus de réunions'],1],
        ['Qui souffre le plus de l’isolement ?',['les salariés les plus jeunes','les directeurs','les salariés qui habitent loin'],0],
        ['Que proposent les spécialistes ?',['le retour obligatoire au bureau','le télétravail à 100 %','une solution adaptée à chaque équipe'],2]]],
      C1:['L’éloge de l’ennui','On a longtemps considéré l’ennui comme un simple désagrément, voire comme le signe d’un esprit paresseux. Or, un nombre croissant de chercheurs y voient au contraire un moteur de la créativité. Privé de stimulations extérieures, le cerveau se met à vagabonder, à associer des idées qui n’avaient a priori rien en commun. C’est précisément ce que nos téléphones nous empêchent de vivre : la moindre minute d’attente est aussitôt comblée par un défilement d’images. Faut-il pour autant diaboliser les écrans ? Ce serait sans doute excessif. Mais il n’est peut-être pas inutile de réapprendre, de temps en temps, à ne rien faire.',[
        ['Selon les chercheurs cités, l’ennui…',['est un signe de paresse','peut favoriser la créativité','fatigue le cerveau'],1],
        ['Qu’est-ce que « nos téléphones nous empêchent de vivre » ?',['les moments sans stimulation','les conversations','le travail'],0],
        ['Quelle est la position de l’auteur sur les écrans ?',['il faut les interdire','ils sont sans danger','il ne faut pas les diaboliser, mais savoir s’en passer'],2]]],
    },
    O:{
      A1:['À la gare','Mesdames et messieurs, le train à destination de Lyon, départ quatorze heures trente, partira voie six. Le train a dix minutes de retard. Merci de votre compréhension.',[
        ['Le train va à…',['Lille','Lyon','Lens'],1],
        ['Le train part de quelle voie ?',['voie deux','voie six','voie dix'],1],
        ['Le train a…',['dix minutes de retard','trente minutes de retard','pas de retard'],0]]],
      A2:['Au restaurant, au téléphone','A: Restaurant Le Petit Pont, bonjour !\nB: Bonjour, je voudrais réserver une table pour samedi soir, s’il vous plaît.\nA: Pour combien de personnes ?\nB: Pour quatre personnes, vers vingt heures.\nA: Désolé, à vingt heures c’est complet. J’ai une table à vingt et une heures.\nB: D’accord, vingt et une heures, c’est parfait.\nA: C’est à quel nom ?\nB: Moreau. M, O, R, E, A, U.\nA: Très bien, madame Moreau. À samedi !',[
        ['La réservation est pour combien de personnes ?',['deux','quatre','six'],1],
        ['À quelle heure est la réservation ?',['à 20 heures','à 21 heures','à 19 heures'],1],
        TF('La réservation est pour dimanche.',false)]],
      B1:['Message de l’école de langues','Bonjour à tous, ici Claire, de l’école Horizon. Petit changement pour le cours de conversation du mercredi soir : à partir de la semaine prochaine, il aura lieu le jeudi, toujours à dix-huit heures trente. La salle change aussi : rendez-vous en salle quatre, au premier étage, car la salle habituelle est en travaux. Et une bonne nouvelle : la sortie au musée d’Orsay est confirmée pour le samedi quinze. Si vous voulez venir, inscrivez-vous à l’accueil avant vendredi. Bonne soirée !',[
        ['Quel jour aura lieu le cours désormais ?',['le mercredi','le jeudi','le samedi'],1],
        ['Pourquoi la salle change ?',['elle est trop petite','elle est en travaux','elle est réservée'],1],
        ['Pour aller au musée, il faut…',['s’inscrire avant vendredi','payer à l’entrée','téléphoner à Claire'],0]]],
      B2:['Reportage · la semaine de quatre jours','A: Depuis janvier, cette entreprise nantaise de cent vingt salariés est passée à la semaine de quatre jours, sans baisse de salaire. Alors, premier bilan ?\nB: Franchement, il est très positif. L’absentéisme a baissé et nous recrutons beaucoup plus facilement. Mais il a fallu tout repenser : moins de réunions, des objectifs plus clairs.\nA: Et les salariés, ils travaillent plus le reste de la semaine ?\nB: Un peu, oui, les journées sont légèrement plus longues. Certains le vivent bien, d’autres trouvent le rythme plus intense. Ce n’est pas une formule magique.',[
        ['Depuis janvier, les salariés…',['travaillent quatre jours sans perdre de salaire','gagnent moins','travaillent à la maison'],0],
        ['Qu’est-ce qui a changé dans l’organisation ?',['plus de réunions','moins de réunions et des objectifs plus clairs','plus de salariés'],1],
        ['Quelle est l’opinion du directeur ?',['c’est une solution parfaite','c’est positif, mais il y a des limites','c’est un échec'],1]]],
      C1:['Chronique · les mots venus d’ailleurs','On entend souvent dire que le français serait menacé par les anglicismes. Il faut pourtant relativiser. D’abord, l’emprunt est un phénomène vieux comme la langue : l’anglais lui-même a puisé massivement dans le français après la conquête normande. Ensuite, beaucoup de mots empruntés finissent par s’adapter, voire par disparaître, une fois la mode passée. Ce qui devrait davantage nous inquiéter, à mon sens, c’est la disparition de domaines entiers où l’on ne pense plus qu’en anglais, comme une partie de la recherche scientifique. Là, ce n’est pas un mot qui s’en va, c’est une manière de nommer le monde.',[
        ['Selon le chroniqueur, les anglicismes…',['sont une menace grave','sont un phénomène ancien et souvent passager','n’existent pas en français'],1],
        ['Pourquoi cite-t-il la conquête normande ?',['pour montrer que l’anglais a aussi emprunté au français','pour parler d’histoire militaire','pour critiquer l’anglais'],0],
        ['Qu’est-ce qui l’inquiète vraiment ?',['les mots à la mode','les domaines où l’on n’utilise plus que l’anglais','l’orthographe'],1]]],
    },
    E:[
      ['Écrivez un message à un nouvel ami. Dites qui vous êtes, où vous habitez et ce que vous aimez faire le week-end.','30 a 50','Tarefa 1 · escreva uma mensagem para um amigo novo: quem você é, onde mora e o que gosta de fazer no fim de semana.'],
      ['Écrivez un e-mail à un ami pour raconter un voyage ou un jour important de votre vie. Que s’est-il passé ? Comment vous êtes-vous senti ? Pourquoi était-ce important ?','80 a 120','Tarefa 2 · conte a um amigo, por e-mail, sobre uma viagem ou um dia importante: o que aconteceu, como você se sentiu e por que foi importante.'],
      ['« Apprendre une langue en ligne est aussi efficace que de l’apprendre en classe. » Êtes-vous d’accord ? Donnez des arguments et des exemples.','150 a 200','Tarefa 3 · opcional: faça se conseguir. Dê a sua opinião sobre aprender idiomas on-line ou em sala, com argumentos e exemplos.'],
    ],
    F:[
      ['A1 → A2','Présentation et quotidien','Comment vous appelez-vous ? Vous venez d’où ? Qu’est-ce que vous faites dans la vie ? Parlez-moi de votre famille. Qu’est-ce que vous faites le week-end ?'],
      ['A2 → B1','Expériences et projets','Racontez-moi vos dernières vacances. Qu’est-ce que vous avez fait hier ? Décrivez votre quartier. Quels sont vos projets pour l’année prochaine ?'],
      ['B1 → B2','Opinions et explications','Pourquoi voulez-vous apprendre le français ? Quels sont les avantages et les inconvénients de vivre dans une grande ville ? Racontez un problème que vous avez résolu.'],
      ['B2 → C1','Débat et nuance','Faut-il réguler les réseaux sociaux ? Comment la technologie a-t-elle changé notre façon de travailler ? Si vous pouviez changer une loi au Brésil, laquelle et pourquoi ?'],
    ],
  },
};
/* o que cada nível quer dizer, em uma frase, para o resultado */
const NIVEL_DESC={
  'pré-A1':'Está começando agora: o ponto de partida é o A1, do zero.',
  A1:'Entende e usa frases simples do dia a dia: se apresentar, falar de rotina, pedir coisas básicas.',
  A2:'Dá conta de situações comuns: compras, direções, falar de experiências passadas e planos simples.',
  'A2+':'Já passou do A2 e começa a lidar com textos e conversas do B1.',
  B1:'Se vira na maioria das situações: conta experiências, dá opiniões simples e entende o essencial de textos e áudios claros.',
  'B1+':'B1 firme, já entendendo boa parte do que é B2.',
  B2:'Conversa com fluência e naturalidade, argumenta e entende textos e áudios mais complexos.',
  'B2+':'B2 sólido, a caminho do avançado.',
  C1:'Usa a língua com flexibilidade e precisão, inclusive em temas acadêmicos e profissionais.',
};
