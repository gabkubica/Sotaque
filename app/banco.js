/* =========================================================
   Sotaque · banco de tarefas de inglês
   ========================================================= */
/* ---------- conteúdo do banco (inglês) ----------
   [enunciado, alternativas, certa] = múltipla escolha · TF = verdadeiro ou falso · GAP = lacuna (respostas com |)
   MAT = ligar colunas · ORD = ordenar a frase · texto solto = resposta escrita */
const TF=(s,v)=>['tf',s,v], GAP=(s,a)=>['gap',s,a], MAT=(p,pairs)=>['match',p,pairs], ORD=s=>['order',s];
const rawQ=r=> typeof r==='string'? {type:'open',prompt:r}
  : r[0]==='tf'? {type:'tf',prompt:r[1],correct:r[2]}
  : r[0]==='gap'? {type:'gap',prompt:r[1],answers:r[2].split('|')}
  : r[0]==='match'? {type:'match',prompt:r[1],pairs:r[2].map(p=>p.slice())}
  : r[0]==='order'? {type:'order',prompt:'Ponha as palavras na ordem certa.',sentence:r[1]}
  : {type:'mc',prompt:r[0],options:r[1].slice(),correct:r[2]};
const fromRaw=list=>list.map(r=>({id:uid(),...rawQ(r)}));
const READ={
  tom:'Read the text and answer.\n\nTom is 28 years old and he lives in Manchester with his wife, Lucy, and their cat, Bob. He is a nurse and he works at a big hospital. He gets up at six o’clock and goes to work by bike. In the evening, Tom and Lucy cook dinner together and watch TV. On Saturdays, they visit Lucy’s parents.',
  rio:'Read the text and answer.\n\nLast weekend, Sofia and her friends went to Rio de Janeiro. They took the bus on Friday night and arrived early on Saturday. In the morning, they walked along Copacabana beach and had coconut water. In the afternoon, it rained, so they visited a museum. On Sunday, they took the cable car up to Sugarloaf Mountain. Sofia says it was the best view of her life.',
  maya:'Read the text and answer.\n\nMaya moved from São Paulo to London last spring. At first, she found the weather depressing and the food a bit boring, but she quickly fell in love with the city’s parks and museums, most of which are free. She works at a small bookshop near the river and takes the bus every morning, although she prefers walking when it isn’t raining. Next year, she plans to study photography at evening classes.',
  week:'Read the text and answer.\n\nIn recent years, several companies in Europe have experimented with a four-day working week, keeping salaries unchanged. Supporters argue that employees become more focused and productive, and that fewer sick days compensate for the lost hours. Critics, however, point out that the model is hard to apply in sectors such as healthcare, where services must run every day. Early results suggest that most participating companies chose to continue the scheme after the trial ended, although some reported difficulties with customer service.',
};
const BANK_RAW=[
  /* ---------- A1 ---------- */
  ['A1','Gramática','Verb to be','Complete com am, is ou are.',[
    ['I ___ from Brazil.',['am','is','are'],0],['She ___ a teacher.',['am','is','are'],1],['They ___ my friends.',['is','am','are'],2],['___ you hungry?',['Is','Am','Are'],2],
    GAP('We ___ in the classroom.','are'),GAP('He ___ not at home now.','is'),TF('“I are happy” is correct.',false),ORD('Are you from São Paulo?')]],
  ['A1','Vocabulário','Greetings and introductions','',[
    MAT('Ligue cada frase à resposta.',[['How are you?','I’m fine, thanks.'],['What’s your name?','My name is Ana.'],['Where are you from?','I’m from Brazil.'],['Nice to meet you.','Nice to meet you too.']]),
    ['You meet someone at 9 am. You say…',['Good night','Good morning','Goodbye'],1],['“Tchau” in English is…',['Hello','Bye','Please'],1],
    TF('People say “Good night” when they arrive at a party.',false),GAP('___ to meet you!','Nice|Pleased|Glad'),ORD('My name is Pedro and I am from Recife.')]],
  ['A1','Vocabulário','Numbers and age','',[
    ['15 in English is…',['fifty','fifteen','five'],1],['40 in English is…',['fourteen','forty','four'],1],
    MAT('Ligue os números.',[['12','twelve'],['20','twenty'],['100','one hundred'],['8','eight']]),
    GAP('I am twenty ___ old.','years'),TF('“Thirteen” is 30.',false),ORD('How old is your brother?')]],
  ['A1','Vocabulário','Days, months and seasons','',[
    ['The day after Monday is…',['Sunday','Tuesday','Thursday'],1],['Which month comes after March?',['May','February','April'],2],['In Brazil, Christmas is in the…',['summer','winter','autumn'],0],
    GAP('There are ___ days in a week.','seven|7'),TF('Saturday and Sunday are the weekend.',true),
    MAT('Ligue as estações.',[['spring','primavera'],['summer','verão'],['autumn','outono'],['winter','inverno']]),ORD('My birthday is in July.')]],
  ['A1','Vocabulário','Colours and clothes','',[
    MAT('Ligue as cores.',[['red','vermelho'],['yellow','amarelo'],['blue','azul'],['green','verde'],['black','preto']]),
    ['You wear ___ on your feet.',['a hat','shoes','a shirt'],1],['It’s cold. Put on your ___.',['jacket','shorts','sandals'],0],
    GAP('“Camisa” in English is ___.','shirt|a shirt'),TF('A T-shirt has long sleeves.',false),ORD('I like your blue dress.')]],
  ['A1','Gramática','Have got and has got','',[
    ['I ___ two brothers.',['have got','has got','am got'],0],['She ___ a new bike.',['have got','has got','got have'],1],
    GAP('___ you got a pet?','Have'),GAP('He ___ got a car. (negativa)','hasn’t|has not'),
    TF('“They has got a big house” is correct.',false),['Has your city got a beach? — Yes, it ___.',['has','have','is'],0],ORD('Have you got any sisters?')]],
  ['A1','Gramática','Possessive adjectives','',[
    ['This is my sister. ___ name is Julia.',['His','Her','Its'],1],['We love ___ new house.',['our','their','your'],0],['The dog is eating ___ food.',['it’s','its','his'],1],
    GAP('Tom and Ana are here with ___ children.','their'),MAT('Ligue os pronomes.',[['I','my'],['you','your'],['he','his'],['she','her'],['they','their']]),
    TF('“Its” and “it’s” mean the same thing.',false),ORD('What is your favourite colour?')]],
  ['A1','Vocabulário','Family members','',[
    MAT('Ligue a família.',[['mother','mãe'],['grandfather','avô'],['aunt','tia'],['cousin','primo ou prima'],['nephew','sobrinho']]),
    ['My mother’s brother is my…',['uncle','cousin','grandfather'],0],['My uncle’s daughter is my…',['sister','niece','cousin'],2],
    GAP('My father’s mother is my ___.','grandmother|grandma|granny'),TF('Your parents are your mother and your father.',true),ORD('I have got two sisters and one brother.')]],
  ['A1','Leitura','Reading · Tom’s day',READ.tom,[
    TF('Tom lives in London.',false),TF('Tom is a nurse.',true),TF('Tom goes to work by car.',false),
    ['Who is Bob?',['Tom’s brother','the cat','Lucy’s father'],1],['What time does Tom get up?',['at six','at seven','at eight'],0],GAP('On Saturdays, they visit Lucy’s ___.','parents')]],
  ['A1','Gramática','There is and there are','',[
    ['___ a supermarket near my house.',['There is','There are','It is'],0],['___ three bedrooms in the flat.',['There is','There are','They are'],1],
    GAP('___ there any milk in the fridge?','Is'),GAP('There ___ any students in the room. (negativa)','aren’t|are not'),
    TF('“There are a cat in the garden” is correct.',false),ORD('Is there a bank on this street?')]],
  /* ---------- A2 ---------- */
  ['A2','Gramática','Present simple · daily routine','Complete as frases e depois conte sua rotina.',[
    ['I usually ___ up at 7 o’clock.',['get','gets','getting'],0],['She ___ coffee every morning.',['drink','drinks','drinking'],1],
    GAP('He ___ (not work) on Sundays.','doesn’t work|does not work'),GAP('What time ___ you go to bed?','do'),
    TF('“My brother go to school by bus” is correct.',false),ORD('She never eats breakfast at home.'),'Describe your morning routine in 3 sentences.']],
  ['A2','Gramática','Present continuous','O que está acontecendo agora?',[
    ['Look! It ___.',['rains','is raining','rain'],1],['What ___ you doing?',['are','is','do'],0],['Listen! The baby ___.',['cries','is crying','cry'],1],
    GAP('I ___ (read) a book at the moment.','am reading|’m reading'),GAP('They ___ (watch) TV now.','are watching|’re watching'),
    TF('“She is work today” is correct.',false),ORD('Why are you laughing at me?')]],
  ['A2','Gramática','Present simple or continuous?','',[
    ['Water ___ at 100°C.',['boils','is boiling','boil'],0],['Be quiet! I ___ on the phone.',['talk','am talking','talks'],1],['She ___ to the gym three times a week.',['goes','is going','go'],0],
    GAP('Right now, we ___ (have) lunch.','are having|’re having'),GAP('My dad usually ___ (drive) to work.','drives'),
    TF('We use the present continuous for daily routines.',false),ORD('What do you usually do on Fridays?')]],
  ['A2','Vocabulário','At the restaurant','',[
    ['Can I see the ___, please?',['menu','bill','kitchen'],0],['Could we have the ___? We want to pay.',['menu','bill','dish'],1],['A ___ serves food in a restaurant.',['chef','waiter','customer'],1],
    MAT('Ligue as partes da refeição.',[['starter','entrada'],['main course','prato principal'],['dessert','sobremesa'],['bill','conta']]),
    ['I’m vegetarian, so I don’t eat…',['vegetables','rice','meat'],2],TF('“Would you like some water?” is a polite question.',true),ORD('Can I have the chicken, please?')]],
  ['A2','Gramática','Some, any, much, many','',[
    ['Is there ___ milk in the fridge?',['any','some','many'],0],['How ___ apples do you want?',['much','many','any'],1],['How ___ money do you have?',['much','many','a'],0],
    GAP('There are ___ eggs on the table. (alguns)','some'),['We don’t have ___ bread.',['some','any','many'],1],
    TF('“Information” is a countable noun.',false),ORD('There isn’t much sugar in my coffee.')]],
  ['A2','Gramática','In, on, at · time','',[
    ['My birthday is ___ May.',['in','on','at'],0],['The class starts ___ 7 pm.',['in','on','at'],2],['I go to church ___ Sundays.',['in','on','at'],1],
    GAP('We go to the beach ___ summer.','in'),GAP('See you ___ the weekend!','at|on'),TF('We say “on Christmas Day”.',true),
    MAT('Ligue a preposição aos exemplos.',[['in','2025 · the morning'],['on','Monday · 5 May'],['at','night · 6 o’clock']])]],
  ['A2','Gramática','Past simple · regular verbs','',[
    ['Yesterday I ___ my grandmother.',['visit','visited','visiting'],1],GAP('We ___ (watch) a great film last night.','watched'),GAP('She ___ (study) for the test.','studied'),
    GAP('They ___ (not play) football yesterday.','didn’t play|did not play'),['___ you call me last night?',['Do','Did','Were'],1],
    TF('The past of “stop” is “stoped”.',false),ORD('Did you enjoy the party?')]],
  ['A2','Vocabulário','Jobs and workplaces','',[
    MAT('Ligue a profissão ao lugar.',[['teacher','school'],['nurse','hospital'],['chef','restaurant'],['pilot','plane'],['shop assistant','shop']]),
    ['A person who fixes cars is a…',['mechanic','lawyer','dentist'],0],['A ___ looks after your teeth.',['doctor','dentist','vet'],1],
    GAP('A ___ takes care of sick animals.','vet|veterinarian'),TF('An architect designs buildings.',true),ORD('My sister works as a lawyer in an office.')]],
  ['A2','Leitura','Reading · A weekend in Rio',READ.rio,[
    TF('They travelled to Rio by plane.',false),TF('It rained on Saturday afternoon.',true),
    ['What did they drink at the beach?',['orange juice','coconut water','coffee'],1],['What did they do when it rained?',['went home','visited a museum','slept'],1],
    GAP('On Sunday, they took the cable ___.','car'),'What was the best trip of your life? Write 3 sentences.']],
  ['A2','Escrita','Writing · My best friend','',[
    ['She always helps people. She is very…',['lazy','kind','rude'],1],ORD('My best friend is funny and kind.'),ORD('We met at school ten years ago.'),
    'Write 5 sentences about your best friend: name, age, appearance, personality and what you do together.']],
  ['A2','Expressões','Small talk','',[
    MAT('Ligue a pergunta à resposta.',[['How’s it going?','Not bad, thanks.'],['What do you do?','I’m an engineer.'],['Lovely weather, isn’t it?','Yes, it’s beautiful!'],['Long time no see!','I know! How have you been?']]),
    ['Someone says “Thank you!”. You answer…',['You’re welcome.','Yes, please.','Excuse me.'],0],['“See you later” means…',['até mais','com licença','prazer'],0],
    TF('We say “Excuse me” to get someone’s attention.',true),ORD('What do you do for a living?')]],
  ['A2','Gramática','Can and can’t','',[
    ['I ___ swim very well. I love the sea.',['can','can’t','cans'],0],['Penguins ___ fly.',['can','can’t','could'],1],
    GAP('___ you speak Spanish?','Can'),TF('“She cans dance” is correct.',false),
    MAT('Ligue.',[['Can I help you?','Posso ajudar?'],['Can you repeat, please?','Pode repetir, por favor?'],['I can’t hear you.','Não consigo te ouvir.']]),ORD('Can you open the window, please?')]],
  /* ---------- B1 ---------- */
  ['B1','Gramática','Past simple · irregular verbs','Escolha ou escreva a forma certa do verbo.',[
    ['Yesterday I ___ to the cinema.',['go','went','gone'],1],['She ___ a new phone last week.',['buyed','bought','buys'],1],
    GAP('We ___ (eat) pizza on Friday.','ate'),GAP('I ___ (forget) my keys at home.','forgot'),GAP('He ___ (take) a great photo at the beach.','took'),
    MAT('Ligue o verbo ao passado.',[['see','saw'],['write','wrote'],['bring','brought'],['think','thought'],['begin','began']]),
    TF('The past of “catch” is “caught”.',true),ORD('Where did you go last summer?')]],
  ['B1','Gramática','Past continuous or past simple?','',[
    ['I ___ TV when the phone rang.',['watched','was watching','am watching'],1],['While she was cooking, she ___ her finger.',['cut','was cutting','cuts'],0],
    GAP('What ___ you doing at 8 pm yesterday?','were'),GAP('They ___ (play) football when it started to rain.','were playing'),
    TF('We use the past continuous for a long action that was interrupted.',true),ORD('He was sleeping when I arrived.')]],
  ['B1','Gramática','Present perfect or past simple?','Preste atenção nas palavras-chave: yesterday, since, ever, just…',[
    ['I ___ never ___ to London.',['have / been','did / go','was / went'],0],['She ___ her homework yesterday.',['has finished','finished','have finished'],1],
    ['___ you ever eaten sushi?',['Did','Have','Has'],1],GAP('We ___ (live) here since 2020.','have lived|’ve lived'),['He ___ the film last night.',['has watched','watched','watches'],1],
    TF('We say “for 2019” to talk about a point in time.',false),ORD('Have you finished your project yet?'),'Write one sentence about something you have done this year.']],
  ['B1','Gramática','Comparatives and superlatives','',[
    ['My house is ___ than yours.',['big','bigger','biggest'],1],['This is the ___ film I’ve ever seen.',['good','better','best'],2],
    GAP('Today is ___ (bad) than yesterday.','worse'),GAP('Everest is the ___ (high) mountain in the world.','highest'),
    ['This exercise is ___ difficult than the last one.',['more','most','much'],0],TF('“More easy” is correct.',false),ORD('Rio is hotter than Curitiba in July.')]],
  ['B1','Gramática','Will or going to?','',[
    ['Look at those clouds! It ___ rain.',['will','is going to','goes to'],1],['I’m tired. — I ___ make you a coffee.',['’ll','am going to','go'],0],['We ___ visit Paris next month. We bought the tickets.',['will','are going to','go to'],1],
    GAP('I think Brazil ___ win the next World Cup.','will'),TF('We often use “going to” for plans we have already made.',true),ORD('What are you going to do this weekend?')]],
  ['B1','Gramática','Should, must, have to','',[
    ['You look sick. You ___ see a doctor.',['should','mustn’t','don’t have to'],0],['You ___ smoke here. It’s forbidden.',['don’t have to','mustn’t','should'],1],['It’s Sunday. I ___ wake up early.',['don’t have to','mustn’t','have'],0],
    GAP('In Brazil, you ___ to vote when you are 18.','have'),TF('“Mustn’t” and “don’t have to” mean the same thing.',false),ORD('You should drink more water.')]],
  ['B1','Vocabulário','Travel and airports','',[
    ['You show your ___ before getting on the plane.',['boarding pass','luggage','receipt'],0],['The flight was late. There was a ___.',['delay','departure','gate'],0],['A ___ ticket takes you there and back.',['one-way','round-trip','single'],1],
    MAT('Ligue.',[['departures','partidas'],['arrivals','chegadas'],['luggage','bagagem'],['customs','alfândega']]),
    GAP('We ___ a room at a hotel near the beach.','booked'),TF('The “gate” is where you get on the plane.',true),ORD('Where is the check-in desk?')]],
  ['B1','Vocabulário','Health and the body','',[
    ['I have a ___. My head hurts.',['headache','toothache','backache'],0],['Take this ___ twice a day.',['prescription','medicine','doctor'],1],
    GAP('I can’t talk. I have a sore ___.','throat'),MAT('Ligue.',[['knee','joelho'],['elbow','cotovelo'],['shoulder','ombro'],['ankle','tornozelo'],['chest','peito']]),
    TF('A pharmacy is where you buy medicine.',true),ORD('I think I have a fever.')]],
  ['B1','Phrasal verbs','Phrasal verbs with get','',[
    ['I ___ at 7 every day.',['get up','get on','get over'],0],['It took her weeks to ___ the flu.',['get over','get by','get off'],0],['We have to ___ the bus at the next stop.',['get off','get over','get up'],0],
    GAP('Do you ___ on well with your boss?','get'),MAT('Ligue.',[['get back','voltar'],['get along','dar-se bem'],['get by','virar-se'],['get in','entrar (no carro)']]),
    TF('“Get rid of” means to keep something.',false)]],
  ['B1','Gramática','Used to','',[
    ['I ___ play the piano when I was a child.',['use to','used to','using to'],1],['Did you ___ live in Bahia?',['used to','use to','using'],1],
    GAP('She ___ like coffee, but now she loves it. (negativa)','didn’t use to|did not use to'),
    TF('“Used to” describes past habits that are not true anymore.',true),ORD('We used to go to the beach every summer.'),'Write two things you used to do as a child.']],
  ['B1','Vocabulário','False friends','Cuidado com as palavras parecidas com o português!',[
    ['“Actually” means…',['na verdade','atualmente','rapidamente'],0],['“Pretend” means…',['pretender','fingir','prender'],1],['“Push” means…',['puxar','empurrar','pular'],1],['“Parents” means…',['parentes','pais','amigos'],1],
    MAT('Ligue ao significado certo.',[['library','biblioteca'],['college','faculdade'],['lunch','almoço'],['realize','perceber'],['exquisite','requintado']]),
    TF('“Eventually” means “de vez em quando”.',false),GAP('“Atualmente” in English is ___.','currently|nowadays|these days')]],
  ['B1','Gramática','First conditional','',[
    ['If it rains, we ___ at home.',['stay','will stay','would stay'],1],['If you ___ hard, you will pass.',['study','will study','studied'],0],
    GAP('I ___ (call) you if I have time.','will call|’ll call'),GAP('If she ___ (not hurry), she will miss the bus.','doesn’t hurry|does not hurry'),
    TF('In the first conditional, we use “will” after “if”.',false),ORD('What will you do if it rains tomorrow?')]],
  /* ---------- B2 ---------- */
  ['B2','Gramática','Passive voice','Escolha ou escreva a forma passiva.',[
    ['This bridge ___ in 1920.',['built','was built','is build'],1],['English ___ all over the world.',['speaks','is spoken','spoke'],1],['My car ___ right now.',['is repairing','is being repaired','repairs'],1],
    GAP('The letters ___ (send) tomorrow.','will be sent'),GAP('The thief ___ (catch) by the police yesterday.','was caught'),
    TF('In the passive, the person who does the action can be left out.',true),ORD('The house was painted last year.')]],
  ['B2','Gramática','Reported speech','',[
    ['She said, “I am tired.” → She said she ___ tired.',['is','was','has been'],1],['“I will call you.” → He said he ___ call me.',['will','would','can'],1],['“Where do you live?” → She asked me where I ___.',['live','lived','do live'],1],
    GAP('“I can swim.” → He said he ___ swim.','could'),TF('In reported questions, we keep the question word order.',false),ORD('She told me that she had lost her keys.')]],
  ['B2','Gramática','Relative clauses','',[
    ['The woman ___ lives next door is a doctor.',['who','which','where'],0],['This is the book ___ I told you about.',['who','which','where'],1],['That’s the restaurant ___ we met.',['which','where','who'],1],
    GAP('The man ___ car was stolen called the police.','whose'),TF('In defining clauses, we can use “that” instead of “who”.',true),ORD('The city where I was born is very small.')]],
  ['B2','Phrasal verbs','Phrasal verbs do dia a dia','',[
    ['Can you ___ my cat while I’m away?',['look after','look for','look up'],0],['I need to ___ smoking.',['give in','give up','give out'],1],['The meeting was ___ until Friday.',['put off','put on','put up'],0],
    ['She ___ an old friend at the mall.',['ran into','ran out','ran over'],0],GAP('We’ve ___ out of milk. Can you buy some?','run'),
    MAT('Ligue.',[['fill in','preencher'],['turn down','recusar'],['find out','descobrir'],['come up with','ter uma ideia']]),TF('“Look up a word” means to search for it in a dictionary.',true)]],
  ['B2','Phrasal verbs','Phrasal verbs at work','',[
    ['Please ___ your report by Friday. (entregar)',['hand in','hand out','hold on'],0],['The company had to ___ 50 workers.',['lay off','take on','carry on'],0],['Let’s ___ the meeting until next week.',['put off','put up','put on'],0],
    GAP('Could you ___ on a second? I’ll check.','hold|hang'),MAT('Ligue.',[['set up','montar, abrir'],['take over','assumir'],['carry on','continuar'],['figure out','entender, descobrir']]),
    TF('“Take on” can mean to hire someone.',true)]],
  ['B2','Vocabulário','Make or do?','',[
    ['I need to ___ my homework.',['make','do'],1],['Can you ___ me a favour?',['make','do'],1],['Don’t ___ so much noise!',['make','do'],0],['She ___ a mistake in the test.',['made','did'],0],
    GAP('Let’s ___ a decision today.','make'),TF('We say “do exercise”, not “make exercise”.',true),ORD('I made a cake for your birthday.')]],
  ['B2','Leitura','Reading · Maya in London',READ.maya,[
    ['When did Maya move to London?',['last winter','last spring','next year'],1],['What did she dislike at first?',['the parks','the weather','her job'],1],
    TF('Most museums in London are free.',true),TF('Maya prefers walking when it’s raining.',false),
    ['Where does she work?',['at a museum','at a bookshop','at a café'],1],GAP('Next year, she plans to study ___.','photography')]],
  ['B2','Gramática','Gerund or infinitive?','',[
    ['I enjoy ___ in the rain.',['walk','walking','to walk'],1],['She decided ___ a new job.',['looking for','to look for','look for'],1],['They avoided ___ about the problem.',['talking','to talk','talk'],0],
    GAP('I’m looking forward to ___ (see) you.','seeing'),TF('“I want going home” is correct.',false),ORD('Would you mind closing the window?')]],
  ['B2','Gramática','Linking words','',[
    ['___ it was raining, we went out.',['Although','Because','So'],0],['I was tired, ___ I went to bed early.',['so','but','although'],0],['The hotel was expensive. ___, it was very comfortable.',['However','Because','So'],0],
    GAP('She stayed at home ___ she was sick.','because|as|since'),TF('“Despite” is followed by a noun or an -ing form.',true),ORD('In spite of the traffic, we arrived on time.')]],
  ['B2','Escrita','Writing · An opinion paragraph','',[
    ['Which phrase introduces an opinion?',['In my opinion','For example','In conclusion'],0],['Which phrase introduces a conclusion?',['Firstly','To sum up','Moreover'],1],
    MAT('Ligue cada conector à função.',[['Firstly','começar a lista'],['Moreover','acrescentar uma ideia'],['However','contrastar'],['To sum up','concluir']]),
    ORD('I strongly believe that homework is important.'),'Write a paragraph (80–100 words): “Should students wear school uniforms?” Give your opinion and two reasons.']],
  ['B2','Gramática','Second conditional','',[
    ['If I ___ rich, I would travel the world.',['am','were','will be'],1],['What ___ you do if you lost your job?',['will','would','do'],1],
    GAP('If I ___ (know) the answer, I would tell you.','knew'),TF('The second conditional talks about imaginary situations.',true),
    ORD('If I were you, I would accept the offer.'),'What would you do if you won the lottery? Write 2 sentences.']],
  /* ---------- C1 ---------- */
  ['C1','Gramática','Conditionals · review','',[
    ['If I ___ more time, I would travel more.',['have','had','would have'],1],['If it rains tomorrow, we ___ at home.',['stay','would stay','will stay'],2],['If she had studied, she ___ the exam.',['would pass','would have passed','passed'],1],
    ['Unless you hurry, you ___ the train.',['miss','will miss','would miss'],1],GAP('If water reaches 100°C, it ___.','boils'),
    MAT('Ligue cada frase ao tipo.',[['If you heat ice, it melts.','zero conditional'],['If it rains, I’ll stay home.','first conditional'],['If I were taller, I’d play basketball.','second conditional'],['If I had known, I would have come.','third conditional']])]],
  ['C1','Gramática','Third and mixed conditionals','',[
    ['If I had left earlier, I ___ the train.',['would catch','would have caught','will catch'],1],['If she ___ harder, she would have passed.',['studied','had studied','would study'],1],['If I had taken that job, I ___ rich now.',['would be','would have been','will be'],0],
    GAP('If you ___ (tell) me, I would have helped you.','had told|’d told'),TF('Mixed conditionals can connect a past condition with a present result.',true),ORD('If we had known, we would have come.')]],
  ['C1','Expressões','Everyday idioms','Escolha o significado de cada expressão.',[
    ['“It’s a piece of cake” means it is…',['delicious','very easy','expensive'],1],['“To break the ice” means to…',['start a conversation','end a friendship','get angry'],0],['If you “hit the books”, you…',['get angry','study hard','go shopping'],1],
    ['“Once in a blue moon” means…',['very rarely','every night','very often'],0],TF('“To be on the fence” means to be undecided.',true),
    MAT('Ligue.',[['to cost an arm and a leg','custar os olhos da cara'],['to feel under the weather','estar meio doente'],['to call it a day','encerrar por hoje'],['to spill the beans','contar o segredo']])]],
  ['C1','Expressões','Business idioms','',[
    ['“Back to the drawing board” means…',['start again','go home','draw a picture'],0],['“To think outside the box” means to…',['be creative','work from home','travel'],0],['“To cut corners” means to…',['do something badly to save time or money','decorate','drive fast'],0],
    MAT('Ligue.',[['a ballpark figure','um número aproximado'],['to touch base','entrar em contato'],['the bottom line','o resultado final'],['up in the air','indefinido']]),
    TF('“To get the ball rolling” means to start something.',true)]],
  ['C1','Gramática','Wish and if only','',[
    ['I wish I ___ more time.',['have','had','will have'],1],['If only I ___ that! (arrependimento do passado)',['didn’t say','hadn’t said','don’t say'],1],['I wish you ___ stop interrupting me.',['would','will','did'],0],
    GAP('I wish I ___ (can) speak Japanese.','could'),TF('“I wish I knew” refers to the present.',true),ORD('I wish I had studied harder.')]],
  ['C1','Gramática','Inversion','',[
    ['Never ___ such a beautiful place.',['I have seen','have I seen','I saw'],1],['Not only ___ late, but he also forgot the tickets.',['he was','was he','he is'],1],['Hardly ___ when the phone rang.',['had I arrived','I had arrived','I arrived'],0],
    GAP('Rarely ___ she complain about anything.','does'),TF('Inversion is common in formal writing.',true),ORD('Under no circumstances should you open this door.')]],
  ['C1','Leitura','Reading · The four-day week',READ.week,[
    TF('Salaries were reduced during the trials.',false),TF('Most companies decided to keep the four-day week.',true),
    ['According to supporters, why don’t companies lose productivity?',['Workers are more focused and take fewer sick days','Workers earn more','Companies hire more people'],0],
    ['Which sector is mentioned as difficult?',['education','healthcare','tourism'],1],GAP('Some companies had problems with customer ___.','service'),
    'Would a four-day week work in your job? Why or why not? (60–80 words)']],
  ['C1','Vocabulário','Collocations','',[
    ['She ___ a lot of attention to detail.',['pays','gives','makes'],0],['We need to ___ action now.',['do','take','make'],1],['He ___ a promise and kept it.',['did','made','took'],1],
    MAT('Ligue.',[['heavy','rain'],['strong','coffee'],['fast','food'],['high','temperature']]),
    GAP('Can you ___ me a hand with these boxes?','give|lend'),TF('We say “commit a crime”.',true)]],
];
/* ---------- ampliação do banco ---------- */
Object.assign(READ,{
  anna:'Read the text and answer.\n\nHi! My name is Anna and I am ten years old. I live in a small house in Porto Alegre with my mum, my dad and my brother, Leo. Leo is six. My dad is a doctor and my mum is a teacher. We have a dog called Max. Max is white and very funny. On Sundays, we have lunch at my grandparents’ house.',
  jake:'Read the email and answer.\n\nHi Bruna,\n\nHow are you? I’m writing from Canada! I arrived in Toronto two weeks ago and I’m staying with a host family. They are really nice and they have two kids. Every morning I take the subway to my English school. The classes are hard, but my teacher is very patient. Last weekend we went to Niagara Falls. It was amazing, but very cold! Next month I’m going to visit Montreal.\n\nWrite soon!\nJake',
  detox:'Read the text and answer.\n\nLast month, Rafael decided to stop using social media for one week. On the first day, he checked his phone more than fifty times out of habit. By the third day, he felt calmer and started reading a novel he had bought months before. He also called his grandmother, something he hadn’t done in a long time. At the end of the week, Rafael went back to social media, but now he only uses it for thirty minutes a day.',
  remote:'Read the text and answer.\n\nSince 2020, millions of people have started working from home at least part of the week. Many employees say they save time and money because they no longer commute, and some report that they can concentrate better without office noise. However, remote work also has disadvantages. Some workers feel isolated, and others find it hard to separate their job from their personal life. As a result, many companies have adopted a hybrid model, in which staff spend two or three days in the office and the rest at home.',
  fashion:'Read the text and answer.\n\nFast fashion brands produce cheap clothes very quickly, sometimes launching new collections every week. This allows customers to follow trends at low prices, but the environmental cost is high. The fashion industry uses enormous amounts of water and is responsible for a large share of global carbon emissions. Many garments are worn only a few times before being thrown away. Experts suggest buying fewer, better-quality items, choosing second-hand clothes and repairing what we already own.',
  attention:'Read the text and answer.\n\nIn the attention economy, our focus is the product being sold. Apps and websites are designed to keep us scrolling for as long as possible, because the more time we spend on them, the more advertising revenue they generate. Features such as infinite scroll, autoplay and personalised notifications are not accidental; they exploit well-known psychological tendencies. Critics argue that this business model undermines our ability to concentrate, while defenders point out that users still choose how to spend their time. A growing number of people are now turning to “digital minimalism”, deliberately limiting their use of technology.',
  sleep:'Read the text and answer.\n\nScientists once believed that the brain simply switched off during sleep. We now know the opposite is true: while we sleep, the brain is remarkably active, consolidating memories and clearing out waste products that build up during the day. Adults who regularly sleep less than six hours a night are more likely to suffer from poor concentration, weakened immunity and mood problems. Despite this, many people treat sleep as a luxury rather than a necessity, sacrificing it for work or entertainment. Experts recommend going to bed at the same time each night and avoiding screens for an hour beforehand.',
});
BANK_RAW.push(
  /* ---------- A1 ---------- */
  ['A1','Kids','Animals','',[
    MAT('Ligue os animais.',[['dog','cachorro'],['cat','gato'],['bird','pássaro'],['fish','peixe'],['horse','cavalo']]),
    ['A cow says…',['moo','woof','meow'],0],['Which animal can fly?',['a bird','a fish','a dog'],0],
    GAP('A ___ lives in the sea. (peixe)','fish'),TF('An elephant is a small animal.',false),ORD('I have a black cat.')]],
  ['A1','Kids','Colours and shapes','',[
    MAT('Ligue as formas.',[['circle','círculo'],['square','quadrado'],['triangle','triângulo'],['star','estrela'],['heart','coração']]),
    ['The sun is…',['blue','yellow','green'],1],['Grass is…',['green','pink','black'],0],
    GAP('Mix red and white and you get ___.','pink'),TF('A triangle has four sides.',false),ORD('My favourite colour is purple.')]],
  ['A1','Kids','My body','',[
    MAT('Ligue as partes do corpo.',[['head','cabeça'],['hand','mão'],['foot','pé'],['eye','olho'],['nose','nariz']]),
    ['You hear with your…',['ears','eyes','feet'],0],['You have ten…',['noses','fingers','heads'],1],
    GAP('I brush my ___ every morning. (dentes)','teeth'),TF('People have two eyes.',true),ORD('Touch your nose with your finger.')]],
  ['A1','Kids','Fruits','',[
    MAT('Ligue as frutas.',[['apple','maçã'],['grapes','uvas'],['orange','laranja'],['strawberry','morango'],['pineapple','abacaxi']]),
    ['A banana is…',['yellow','blue','purple'],0],['Which one is a fruit?',['carrot','mango','bread'],1],
    GAP('I like ___ juice. (laranja)','orange'),TF('A watermelon is green outside and red inside.',true),ORD('Can I have an apple, please?')]],
  ['A1','Gramática','Plurals','',[
    ['one book → two ___',['book','books','bookes'],1],['one child → three ___',['childs','children','childrens'],1],['one box → two ___',['boxs','boxes','boxies'],1],
    GAP('one baby → two ___','babies'),GAP('one man → two ___','men'),TF('The plural of “mouse” is “mouses”.',false),
    MAT('Ligue o singular ao plural.',[['foot','feet'],['tooth','teeth'],['woman','women'],['person','people']])]],
  ['A1','Gramática','A or an?','Escolha a ou an.',[
    ['I eat ___ apple every day.',['a','an'],1],['She has ___ dog.',['a','an'],0],['It’s ___ umbrella.',['a','an'],1],['He is ___ teacher.',['a','an'],0],
    ['My brother is ___ engineer.',['a','an'],1],GAP('Wait ___ hour, please.','an'),TF('We use “an” before vowel sounds.',true)]],
  ['A1','Gramática','This, that, these, those','',[
    ['___ is my phone. (aqui, perto)',['This','These','Those'],0],['___ are my keys. (aqui, perto)',['That','These','This'],1],['Look at ___ birds in the sky! (longe)',['these','those','this'],1],
    GAP('Is ___ your car over there? (longe, singular)','that'),TF('“These” is for one thing.',false),ORD('Are those your shoes?')]],
  ['A1','Gramática','Prepositions of place','In, on, under, next to.',[
    ['The cat is ___ the box. (dentro)',['in','on','under'],0],['The book is ___ the table. (em cima)',['in','on','under'],1],['The ball is ___ the bed. (embaixo)',['on','in','under'],2],
    GAP('The bank is ___ to the school. (ao lado)','next'),MAT('Ligue.',[['in','dentro'],['on','em cima'],['under','embaixo'],['behind','atrás']]),ORD('My keys are on the kitchen table.')]],
  ['A1','Gramática','Question words','',[
    ['___ is your name?',['What','Where','Who'],0],['___ do you live? — In Curitiba.',['When','Where','Who'],1],['___ is your best friend? — Ana.',['Who','What','How'],0],
    GAP('___ old are you? — I’m 12.','How'),MAT('Ligue.',[['When','quando'],['Why','por que'],['Which','qual'],['How much','quanto (custa)']]),
    TF('We use “Where” to ask about places.',true),ORD('What time is it now?')]],
  ['A1','Vocabulário','House and rooms','',[
    MAT('Ligue os cômodos.',[['kitchen','cozinha'],['bedroom','quarto'],['bathroom','banheiro'],['living room','sala de estar'],['garden','jardim']]),
    ['You sleep in the…',['kitchen','bedroom','garage'],1],['You cook in the…',['kitchen','bathroom','bedroom'],0],
    GAP('I take a shower in the ___.','bathroom'),TF('A sofa is usually in the living room.',true),ORD('There are two bedrooms in my house.')]],
  ['A1','Vocabulário','The weather','',[
    ['It’s 35°C today. It’s…',['cold','hot','snowy'],1],['Take an umbrella. It’s…',['sunny','raining','windy'],1],
    MAT('Ligue.',[['sunny','ensolarado'],['cloudy','nublado'],['windy','com vento'],['cold','frio']]),
    GAP('What’s the ___ like today? — It’s sunny.','weather'),TF('“Snowy” means there is snow.',true),ORD('It is very cold in July.')]],
  ['A1','Vocabulário','Telling the time','',[
    ['7:30 is…',['half past seven','seven to half','half to seven'],0],['3:15 is…',['quarter to three','quarter past three','three and quarter'],1],['8:45 is…',['quarter to nine','quarter past eight','eight to quarter'],0],
    GAP('What ___ is it? — It’s five o’clock.','time'),TF('“Noon” is 12 pm.',true),ORD('The class starts at half past seven.')]],
  ['A1','Vocabulário','In the classroom','',[
    MAT('Ligue.',[['pen','caneta'],['pencil','lápis'],['eraser','borracha'],['notebook','caderno'],['desk','carteira']]),
    ['“Can I go to the ___, please?”',['bathroom','kitchen','bedroom'],0],['The teacher writes on the…',['board','floor','window'],0],
    GAP('Open your ___ on page 10. (livros)','books'),TF('“Sit down” means “levante-se”.',false),ORD('Can you repeat that, please?')]],
  ['A1','Gramática','Present simple · I, you, we, they','',[
    ['I ___ in São Paulo.',['live','lives','living'],0],['They ___ English at school.',['study','studies','studying'],0],['___ you speak English?',['Do','Does','Are'],0],
    GAP('We ___ (like) pizza.','like'),GAP('I ___ eat meat. (negativa)','don’t|do not'),TF('“They plays football” is correct.',false),ORD('Do you like chocolate?')]],
  ['A1','Gramática','Imperatives','Instruções e ordens.',[
    ['___ the door, please. It’s cold.',['Close','Closes','Closing'],0],['___ run in the classroom!',['Not','Don’t','No'],1],
    GAP('___ down, please. (Sente-se)','Sit'),MAT('Ligue.',[['Listen!','Escute!'],['Look!','Olhe!'],['Be quiet!','Fique quieto!'],['Hurry up!','Depressa!']]),
    TF('“Don’t touch” means “não toque”.',true),ORD('Please turn off your phone.')]],
  ['A1','Leitura','Reading · Anna’s family',READ.anna,[
    TF('Anna has two brothers.',false),TF('Max is a dog.',true),['How old is Leo?',['six','ten','twelve'],0],
    ['What does Anna’s mum do?',['She is a doctor.','She is a teacher.','She is a nurse.'],1],['What colour is Max?',['black','white','brown'],1],
    GAP('On Sundays, they have lunch at her ___ house.','grandparents’|grandparents')]],
  ['A1','Cultura','Holidays','Datas comemorativas em inglês.',[
    MAT('Ligue.',[['Christmas','Natal'],['Easter','Páscoa'],['New Year’s Eve','Réveillon'],['Halloween','Dia das Bruxas'],['Mother’s Day','Dia das Mães']]),
    ['At Halloween, children say…',['Trick or treat!','Happy Easter!','Cheers!'],0],['Christmas Day is on…',['24 December','25 December','31 December'],1],
    TF('Thanksgiving is a holiday in the USA.',true),GAP('Happy ___ Year!','New'),ORD('We eat chocolate eggs at Easter.')]],
  ['A1','Pronúncia','Sounds and rhymes','Leia em voz alta antes de responder.',[
    ['Which word rhymes with “cat”?',['hat','cut','cot'],0],['Which word rhymes with “blue”?',['shoe','bow','blow'],0],['Which word rhymes with “night”?',['light','late','neat'],0],
    TF('In “know”, the letter k is silent.',true),TF('“Two” and “too” sound the same.',true),
    MAT('Ligue as palavras que soam igual.',[['see','sea'],['eye','I'],['right','write'],['hour','our']])]],
  /* ---------- A2 ---------- */
  ['A2','Gramática','Adverbs of frequency','',[
    ['I ___ drink coffee. I hate it! (0%)',['always','never','often'],1],['She ___ goes to the gym. Every single day! (100%)',['always','sometimes','rarely'],0],
    ['Choose the correct sentence.',['He always is late.','He is always late.','Always is he late.'],1],GAP('How ___ do you go to the cinema? — Twice a month.','often'),
    MAT('Ligue.',[['always','sempre'],['usually','geralmente'],['sometimes','às vezes'],['never','nunca']]),ORD('I usually have lunch at home.')]],
  ['A2','Gramática','Was and were','Past simple do verbo to be.',[
    ['I ___ at home yesterday.',['was','were','am'],0],['They ___ very tired after the trip.',['was','were','are'],1],['Where ___ she born?',['was','were','did'],0],
    GAP('___ you at the party last night?','Were'),GAP('It ___ cold yesterday. (negativa)','wasn’t|was not'),TF('“We was happy” is correct.',false),ORD('The film was really good.')]],
  ['A2','Gramática','Past simple · questions and negatives','',[
    ['___ you see the game last night?',['Did','Do','Were'],0],['She didn’t ___ to the party.',['went','go','goes'],1],
    GAP('What ___ you do on Saturday?','did'),GAP('I ___ anything at the mall. (not buy)','didn’t buy|did not buy'),
    TF('“Did he went home?” is correct.',false),ORD('Where did you have lunch yesterday?')]],
  ['A2','Gramática','Object pronouns','Me, you, him, her, it, us, them.',[
    ['Can you help ___? (eu)',['I','me','my'],1],['I love this song. I listen to ___ every day.',['it','them','him'],0],['Where are my keys? I can’t find ___.',['it','they','them'],2],
    GAP('Call ___ tonight. (nós)','us'),MAT('Ligue o pronome sujeito ao objeto.',[['I','me'],['he','him'],['she','her'],['we','us'],['they','them']]),ORD('Please give me the book.')]],
  ['A2','Gramática','Possessive ’s','',[
    ['This is ___ car. (o carro do meu pai)',['my father car','my father’s car','my fathers car'],1],['The ___ room is very big. (o quarto das crianças)',['children’s','childrens’','children'],0],
    ['Whose is this bag? — It’s ___.',['Maria’s','of Maria','Maria'],0],GAP('Ana is ___ sister. (irmã do Pedro)','Pedro’s'),
    TF('“The boys’ bikes” means the bikes of more than one boy.',true),ORD('My mother’s name is Helena.')]],
  ['A2','Gramática','Going to · plans','',[
    ['I ___ visit my grandmother next weekend.',['am going to','going to','go to'],0],['They ___ going to buy a new car.',['is','are','am'],1],
    GAP('What ___ you going to do tonight?','are'),GAP('She ___ going to travel this year. (negativa)','isn’t|is not'),
    TF('We use “going to” to talk about plans.',true),ORD('We are going to watch a film tonight.')]],
  ['A2','Gramática','Like, love, hate + -ing','',[
    ['I love ___ in the sea.',['swim','swimming','swims'],1],['She hates ___ up early.',['getting','get','gets'],0],
    GAP('Do you like ___ (cook)?','cooking'),MAT('Ligue.',[['I love it.','Eu amo.'],['I don’t mind it.','Tanto faz para mim.'],['I can’t stand it.','Eu não suporto.'],['I’m into it.','Eu curto.']]),
    TF('“I enjoy to dance” is correct.',false),ORD('My brother loves playing video games.')]],
  ['A2','Gramática','Must and mustn’t · rules','',[
    ['You ___ wear a seatbelt in the car.',['must','mustn’t','can'],0],['You ___ use your phone during the test.',['must','mustn’t','have'],1],
    GAP('Students ___ be late for class. (negativa)','mustn’t|must not'),TF('“You must not swim here” means you can swim.',false),
    MAT('Ligue a placa ao significado.',[['No parking','proibido estacionar'],['No smoking','proibido fumar'],['Keep off the grass','não pise na grama'],['Exit','saída']]),ORD('You must show your passport here.')]],
  ['A2','Gramática','Prepositions of place II','Next to, between, opposite, behind, in front of.',[
    ['The car is ___ the house. (na frente)',['in front of','behind','between'],0],['The garden is ___ the house. (atrás)',['behind','opposite','on'],0],['Sit ___ me and Paula. (entre)',['between','among','next'],0],
    GAP('The café is ___ the bank. (do outro lado da rua, em frente)','opposite'),TF('“Above” means “em cima, sem tocar”.',true),ORD('The pharmacy is next to the supermarket.')]],
  ['A2','Vocabulário','Shopping','',[
    ['How much ___ this T-shirt?',['is','are','does'],0],['Can I ___ it on? (experimentar)',['try','put','take'],0],
    MAT('Ligue.',[['cash','dinheiro'],['receipt','nota fiscal'],['discount','desconto'],['fitting room','provador'],['size','tamanho']]),
    GAP('Do you have this in a bigger ___?','size'),TF('“Sale” means the prices are lower.',true),ORD('Can I pay by credit card?')]],
  ['A2','Vocabulário','Transport','',[
    MAT('Ligue.',[['bus stop','ponto de ônibus'],['subway','metrô'],['ticket','passagem'],['taxi','táxi'],['train station','estação de trem']]),
    ['I go to work ___ bus.',['by','on','in'],0],['We went to the beach ___ foot.',['by','on','in'],1],
    GAP('The ___ leaves at 8 from platform 2. (trem)','train'),TF('“Get off the bus” means to leave the bus.',true),ORD('How long does it take by car?')]],
  ['A2','Vocabulário','Directions in the city','',[
    ['“Siga em frente” in English is…',['Go straight on','Turn left','Go back'],0],['The bank is ___ the pharmacy and the bakery.',['between','opposite','behind'],0],
    MAT('Ligue.',[['turn right','vire à direita'],['turn left','vire à esquerda'],['opposite','em frente a'],['corner','esquina']]),
    GAP('Excuse me, how do I ___ to the station?','get'),TF('“It’s next to the park” means it is far from the park.',false),ORD('Take the second street on the left.')]],
  ['A2','Vocabulário','Hobbies and free time','',[
    MAT('Ligue.',[['play the guitar','tocar violão'],['go hiking','fazer trilha'],['read','ler'],['paint','pintar'],['go cycling','andar de bicicleta']]),
    ['What do you do in your free ___?',['time','hour','day'],0],['We say “play football” but “___ judo”.',['do','play','make'],0],
    GAP('I ___ swimming every Saturday.','go'),TF('We say “play the piano”.',true),'What do you like doing at the weekend? Write 3 sentences.']],
  ['A2','Vocabulário','Feelings','',[
    MAT('Ligue.',[['happy','feliz'],['sad','triste'],['angry','bravo'],['scared','com medo'],['tired','cansado']]),
    ['I have a test tomorrow. I’m…',['nervous','bored','hungry'],0],['I didn’t eat lunch. I’m…',['hungry','thirsty','sleepy'],0],
    GAP('I won the game! I’m so ___!','happy|excited'),TF('“Bored” means you have nothing interesting to do.',true),ORD('Why are you so angry today?')]],
  ['A2','Vocabulário','In the kitchen','',[
    MAT('Ligue.',[['boil','ferver'],['fry','fritar'],['chop','picar'],['bake','assar'],['mix','misturar']]),
    ['You keep milk in the…',['fridge','oven','sink'],0],['You bake a cake in the…',['fridge','oven','cupboard'],1],
    GAP('Can you wash the dishes in the ___? (pia)','sink'),TF('A “spoon” is a colher.',true),ORD('First, cut the onions into small pieces.')]],
  ['A2','Leitura','Reading · An email from Jake',READ.jake,[
    TF('Jake is in the USA.',false),TF('Jake lives with a host family.',true),['How does he get to school?',['by bus','by subway','on foot'],1],
    ['How was Niagara Falls?',['boring and hot','amazing and cold','small and quiet'],1],['How long has Jake been in Toronto?',['two days','two weeks','two months'],1],
    GAP('Next month, he is going to visit ___.','Montreal')]],
  ['A2','Escrita','Writing · A postcard','',[
    ['How do you start an informal postcard?',['Dear Sir,','Hi Paula,','To whom it may concern,'],1],['How do you finish it?',['Yours faithfully,','Love,','Regards to the company,'],1],
    ORD('Greetings from Salvador! The weather is great.'),ORD('Yesterday we visited the old town.'),
    'Write a postcard (40–60 words) to a friend from your dream holiday. Say where you are, what the weather is like and what you did yesterday.']],
  ['A2','Expressões','On the phone','',[
    MAT('Ligue.',[['Hold on, please.','Aguarde, por favor.'],['Can I speak to Ana?','Posso falar com a Ana?'],['She’s not here right now.','Ela não está agora.'],['Can I take a message?','Quer deixar recado?']]),
    ['How do you answer the phone at work?',['Hello, Ana speaking.','Who are you?','What do you want?'],0],['“Pode falar mais devagar?” is…',['Can you speak more slowly?','Can you speak more slow?','Can you talk slowly more?'],0],
    GAP('Sorry, I think you have the wrong ___. (número)','number'),TF('“I’ll call you back” means “eu te ligo depois”.',true),ORD('Who is calling, please?')]],
  ['A2','Cultura','British or American English?','',[
    MAT('Ligue o britânico ao americano.',[['flat','apartment'],['lift','elevator'],['biscuit','cookie'],['holiday','vacation'],['queue','line']]),
    ['In the UK, people say “football”. In the USA, they usually say…',['soccer','football','rugby'],0],['“Trousers” (UK) are “___” in the USA.',['pants','shorts','jeans'],0],
    ['“Mobile phone” (UK) is “___” in the USA.',['cell phone','smart call','handy'],0],TF('“Colour” is the British spelling and “color” is American.',true),
    GAP('In New York, you take the ___ to go underground. (UK: the tube)','subway')]],
  ['A2','Trabalho','Introducing yourself at work','',[
    ['What do you ___? — I’m a designer.',['do','make','work'],0],['I work ___ a big company.',['for','of','to'],0],
    MAT('Ligue.',[['colleague','colega de trabalho'],['boss','chefe'],['meeting','reunião'],['office','escritório'],['salary','salário']]),
    GAP('Nice to meet you. I’m the new ___ manager. (vendas)','sales'),TF('“I’m in charge of the team” means I lead the team.',true),ORD('I have been working here for two years.')]],
  /* ---------- B1 ---------- */
  ['B1','Gramática','Present perfect · for and since','',[
    ['I’ve lived here ___ 2019.',['for','since','from'],1],['She’s worked there ___ five years.',['for','since','during'],0],['I haven’t seen him ___ ages.',['for','since','ago'],0],
    GAP('We’ve known each other ___ we were kids.','since'),GAP('How ___ have you studied English?','long'),
    TF('We use “for” with a period of time.',true),ORD('I have had this car since 2020.')]],
  ['B1','Gramática','Present perfect continuous','',[
    ['I ___ for two hours. I’m tired!',['have been running','have run','am running'],0],['How long ___ you been waiting?',['have','has','did'],0],
    GAP('She has been ___ (study) all day.','studying'),GAP('It ___ been raining since this morning.','has'),
    TF('“I have been knowing her for years” is correct.',false),ORD('What have you been doing lately?')]],
  ['B1','Gramática','Past perfect','',[
    ['When I arrived, the film ___.',['already started','had already started','has already started'],1],['She was sad because she ___ her keys.',['had lost','has lost','loses'],0],
    GAP('I ___ never seen snow before I went to Chile.','had'),GAP('By the time we got there, everyone ___ (leave).','had left'),
    TF('The past perfect shows the earlier of two past actions.',true),ORD('He had finished dinner before I called.')]],
  ['B1','Gramática','Zero conditional','',[
    ['If you heat ice, it ___.',['melts','will melt','melted'],0],['If I drink coffee at night, I ___ sleep.',['don’t','won’t','didn’t'],0],
    GAP('Plants die if they ___ (not get) water.','don’t get|do not get'),TF('The zero conditional talks about general truths.',true),
    MAT('Ligue as duas partes.',[['If you mix red and blue,','you get purple.'],['If it rains,','the streets get wet.'],['If you press this button,','the machine starts.']]),ORD('If I am tired, I go to bed early.')]],
  ['B1','Gramática','Too and enough','',[
    ['This coffee is ___ hot to drink.',['too','enough','very much'],0],['He isn’t old ___ to drive.',['too','enough','so'],1],['There are ___ many people here. Let’s go.',['too','enough','very'],0],
    GAP('We don’t have ___ time to finish.','enough'),TF('“Enough” comes after adjectives: “tall enough”.',true),ORD('The box is too heavy for me.')]],
  ['B1','Gramática','So and such','',[
    ['It was ___ a good film!',['so','such','very'],1],['The test was ___ difficult.',['so','such','such a'],0],
    GAP('They are ___ nice people.','such'),GAP('I was ___ tired that I fell asleep on the bus.','so'),
    TF('We use “such” before a noun: “such a beautiful day”.',true),ORD('It was such a long trip.')]],
  ['B1','Gramática','Question tags','',[
    ['You’re Brazilian, ___?',['aren’t you','are you','don’t you'],0],['She can swim, ___?',['can’t she','can she','doesn’t she'],0],['They didn’t call, ___?',['did they','didn’t they','do they'],0],
    GAP('He likes pizza, ___ he?','doesn’t'),GAP('It’s cold today, ___ it?','isn’t'),TF('After a negative sentence, the tag is positive.',true)]],
  ['B1','Gramática','A few, a little, few, little','',[
    ['I have ___ friends in London, so I’m not alone.',['a few','a little','little'],0],['There’s ___ milk left. Let’s buy some.',['few','little','a few'],1],['Can I have ___ sugar, please?',['a little','a few','many'],0],
    GAP('Very ___ people came to the meeting. It was almost empty.','few'),TF('We use “a little” with uncountable nouns.',true),ORD('I need a few minutes to think.')]],
  ['B1','Gramática','Articles · a, an, the or nothing','“–” quer dizer sem artigo.',[
    ['I saw ___ good film last night.',['a','the','–'],0],['___ film was about a dog.',['A','The','–'],1],['I love ___ music.',['the','a','–'],2],['___ moon looks beautiful tonight.',['A','The','–'],1],
    GAP('She plays ___ piano very well.','the'),TF('We say “I go to school by bus” without “the”.',true)]],
  ['B1','Vocabulário','-ed or -ing adjectives?','',[
    ['The film was so ___. I fell asleep.',['bored','boring'],1],['I’m ___ in history.',['interested','interesting'],0],['The news was ___. Everyone was shocked.',['shocking','shocked'],0],
    GAP('I was very ___ (tire) after the trip.','tired'),TF('“I am boring” means other people find me boring.',true),
    MAT('Ligue.',[['excited','animado (como eu me sinto)'],['exciting','emocionante (como a coisa é)'],['confused','confuso (eu)'],['confusing','confuso (a coisa)']])]],
  ['B1','Vocabulário','Money','',[
    MAT('Ligue.',[['save','economizar'],['spend','gastar'],['borrow','pegar emprestado'],['lend','emprestar'],['owe','dever']]),
    ['Can you ___ me some money? I’ll pay you back.',['lend','borrow','owe'],0],['I want to ___ money for a trip.',['save','spend','waste'],0],
    GAP('This phone is too expensive. I can’t ___ it.','afford'),TF('“Cheap” means it costs a lot.',false),ORD('How much did you spend on clothes?')]],
  ['B1','Vocabulário','Technology','',[
    MAT('Ligue.',[['download','baixar'],['upload','enviar (para a internet)'],['password','senha'],['charger','carregador'],['screen','tela']]),
    ['My phone is dead. Where’s my ___?',['charger','screen','keyboard'],0],['I forgot my ___ and can’t log in.',['password','username','screen'],0],
    GAP('Can you send me the ___ to the meeting? (link)','link'),TF('“Wi-Fi” is a wireless internet connection.',true),ORD('Did you back up your files?')]],
  ['B1','Vocabulário','The environment','',[
    MAT('Ligue.',[['pollution','poluição'],['recycle','reciclar'],['waste','lixo, desperdício'],['global warming','aquecimento global'],['renewable energy','energia renovável']]),
    ['We should ___ plastic bottles.',['recycle','pollute','throw'],0],['Cutting down trees causes…',['deforestation','recycling','solar power'],0],
    GAP('Turn off the lights to ___ energy.','save'),TF('Solar power is a renewable energy.',true),'What do you do to help the environment? Write 3 sentences.']],
  ['B1','Vocabulário','Personality','',[
    MAT('Ligue.',[['shy','tímido'],['generous','generoso'],['lazy','preguiçoso'],['honest','honesto'],['bossy','mandão']]),
    ['She never tells lies. She’s very…',['honest','rude','lazy'],0],['He always helps everyone. He’s…',['selfish','kind','mean'],1],
    GAP('My brother never shares anything. He’s so ___.','selfish'),TF('“Sensible” means “sensível”.',false),ORD('My best friend is very easy-going.')]],
  ['B1','Vocabulário','Sports','',[
    ['We ___ football and tennis.',['play','do','go'],0],['They ___ yoga on Mondays.',['play','do','go'],1],['I ___ running every morning.',['play','do','go'],2],
    MAT('Ligue.',[['referee','juiz'],['goal','gol'],['team','time'],['match','partida'],['score','placar']]),
    GAP('Who ___ the game last night? — Brazil, 2–0.','won'),TF('A “draw” means both teams scored the same.',true)]],
  ['B1','Vocabulário','School and education','',[
    MAT('Ligue.',[['grade','nota'],['degree','diploma (faculdade)'],['subject','matéria'],['homework','lição de casa'],['principal','diretor da escola']]),
    ['I have to ___ an exam tomorrow.',['take','make','give'],0],['She ___ all her exams. She’s very happy!',['passed','failed','lost'],0],
    GAP('He didn’t study, so he ___ the test.','failed'),TF('“College” can mean faculdade.',true),ORD('What was your favourite subject at school?')]],
  ['B1','Phrasal verbs','Phrasal verbs with look','',[
    ['I’m ___ my keys. Have you seen them?',['looking for','looking after','looking up'],0],['___! There’s a car coming!',['Look out','Look into','Look up'],0],['I’m ___ to the holidays.',['looking forward','looking up','looking after'],0],
    GAP('If you don’t know a word, look it ___ in the dictionary.','up'),MAT('Ligue.',[['look after','cuidar de'],['look into','investigar'],['look up to','admirar'],['look back on','relembrar']]),
    TF('“Look forward to” is followed by an -ing form.',true)]],
  ['B1','Phrasal verbs','Phrasal verbs with take and put','',[
    ['The plane ___ at 9 am.',['took off','took up','put off'],0],['Please ___ your coat. It’s cold.',['put on','take off','put off'],0],['She ___ her mother. They look the same.',['takes after','takes off','puts up'],0],
    GAP('I’ve taken ___ yoga. I go twice a week.','up'),MAT('Ligue.',[['put away','guardar'],['put up with','tolerar'],['take back','devolver'],['take over','assumir']]),
    TF('“Take off your shoes” means to remove them.',true)]],
  ['B1','Leitura','Reading · A week without social media',READ.detox,[
    TF('Rafael stopped using social media for a month.',false),TF('He read a book during the week.',true),
    ['How many times did he check his phone on day one?',['more than fifty','about ten','never'],0],['Who did he call?',['his boss','his grandmother','his teacher'],1],
    ['How did he feel by the third day?',['calmer','angrier','bored'],0],GAP('Now he uses social media for thirty ___ a day.','minutes')]],
  ['B1','Escrita','Writing · An informal email','',[
    ['Which is the best opening for an email to a friend?',['Dear Madam,','Hey Carol! How’s it going?','To the manager,'],1],['Which is the best ending?',['Yours faithfully,','Take care, see you soon!','Best regards from the board,'],1],
    MAT('Ligue.',[['Thanks for your email.','Obrigado pelo seu e-mail.'],['Guess what?','Adivinha só?'],['Write back soon!','Responda logo!'],['Anyway,','Enfim,']]),
    ORD('I’m sorry I haven’t written for so long.'),'Write an email (70–90 words) to a friend telling them about a new job or course you started.']],
  ['B1','Expressões','Agreeing and disagreeing','',[
    MAT('Ligue.',[['I couldn’t agree more.','Concordo totalmente.'],['That’s a good point.','Bom argumento.'],['I’m not so sure.','Não tenho tanta certeza.'],['I see what you mean, but…','Entendo, mas…']]),
    ['Which phrase shows strong disagreement?',['I totally disagree.','You might be right.','Fair enough.'],0],['Someone says “I don’t like coffee.” You agree:',['Me neither.','Me too.','Me also.'],0],
    TF('“Fair enough” means you accept the other person’s point.',true),GAP('I agree ___ you. (com)','with'),ORD('In my opinion, it is a great idea.')]],
  ['B1','Expressões','Making suggestions','',[
    ['___ we go to the beach?',['Why don’t','How about','Let’s'],0],['How about ___ a film tonight?',['watch','watching','to watch'],1],['___ order pizza!',['Let’s','Shall','How about'],0],
    GAP('___ we meet at 7? (sugestão)','Shall|Can|Should'),TF('“Why don’t you…?” can be a suggestion, not a real question.',true),ORD('What about going for a walk?')]],
  ['B1','Expressões','Everyday chunks','Expressões úteis do dia a dia.',[
    MAT('Ligue.',[['No worries.','Sem problemas.'],['It’s up to you.','Você que sabe.'],['I’m running late.','Estou atrasado.'],['Never mind.','Deixa pra lá.'],['Make yourself at home.','Fique à vontade.']]),
    ['“Tanto faz” is…',['I don’t mind.','I don’t care for you.','It doesn’t matter me.'],0],TF('“Take your time” means you don’t need to hurry.',true),
    GAP('Excuse me, is this seat ___? (livre)','free'),ORD('Let me know if you need anything.')]],
  ['B1','Pronúncia','-ed endings','Leia em voz alta: /t/, /d/ ou /ɪd/?',[
    ['How do you say the -ed in “wanted”?',['/t/','/d/','/ɪd/'],2],['How do you say the -ed in “worked”?',['/t/','/d/','/ɪd/'],0],['How do you say the -ed in “played”?',['/t/','/d/','/ɪd/'],1],
    ['Which verb has an extra syllable in the past?',['needed','looked','called'],0],TF('In “stopped”, the -ed sounds like /t/.',true),
    MAT('Ligue ao som do -ed.',[['decided','/ɪd/'],['washed','/t/'],['opened','/d/']])]],
  ['B1','Pronúncia','Silent letters','Qual letra não se pronuncia?',[
    ['In “knife”, the silent letter is…',['k','n','f'],0],['In “listen”, the silent letter is…',['l','t','n'],1],['In “island”, the silent letter is…',['i','s','d'],1],
    ['In “Wednesday”, which letter is usually silent?',['the first d','the w','the y'],0],TF('In “honest”, the h is silent.',true),TF('In “comb”, the b is pronounced.',false)]],
  ['B1','Cultura','Thanksgiving and Christmas','',[
    ['Thanksgiving in the USA is in…',['November','December','July'],0],['A typical Thanksgiving dish is…',['turkey','sushi','feijoada'],0],
    TF('In the UK, 26 December is called Boxing Day.',true),TF('Americans celebrate Independence Day on 4 July.',true),
    MAT('Ligue.',[['stocking','meia de Natal'],['wreath','guirlanda'],['mistletoe','visco'],['pumpkin pie','torta de abóbora']]),GAP('Merry ___ and a Happy New Year!','Christmas')]],
  ['B1','Trabalho','Job interviews','',[
    MAT('Ligue.',[['CV / résumé','currículo'],['skills','habilidades'],['strengths','pontos fortes'],['weaknesses','pontos fracos'],['salary','salário']]),
    ['“Fale-me sobre você” is…',['Tell me about yourself.','Talk me about you.','Say me about yourself.'],0],['Why do you want to ___ for our company?',['work','make','do'],0],
    GAP('I’m applying ___ the marketing position.','for'),TF('“I’m a fast learner” is a good thing to say in an interview.',true),'Answer in English: what are your two main strengths? Give an example.']],
  ['B1','Trabalho','Writing work emails','',[
    ['Which is the best way to start a formal email?',['Hey you!','Dear Mr Smith,','Yo, Mr Smith'],1],['“Segue em anexo” is…',['Please find attached','Follow in attach','See the attached below of'],0],
    MAT('Ligue.',[['I look forward to hearing from you.','Aguardo seu retorno.'],['Could you please…?','Você poderia, por favor…?'],['I’m writing to…','Escrevo para…'],['Best regards,','Atenciosamente,']]),
    GAP('Thank you ___ your quick reply.','for'),TF('“FYI” means “for your information”.',true),ORD('Please let me know if you have any questions.')]],
  /* ---------- B2 ---------- */
  ['B2','Gramática','Modals of deduction','',[
    ['She’s not answering. She ___ be asleep.',['must','can’t','should'],0],['That ___ be John. He’s in Paris now.',['must','can’t','might'],1],['I’m not sure. It ___ rain later.',['might','must','can’t'],0],
    GAP('The ground is wet. It ___ have rained last night.','must'),GAP('He ___ have seen us. He didn’t say hello. (impossível)','can’t|couldn’t|cannot|could not'),
    TF('“Might have done” talks about a possibility in the past.',true)]],
  ['B2','Gramática','Have something done','',[
    ['I ___ my hair cut yesterday.',['had','did','made'],0],['We’re having our house ___ next week.',['painted','paint','painting'],0],['Where do you get your nails ___?',['done','do','doing'],0],
    GAP('She got her car ___ (fix) at the garage.','fixed'),TF('“I cut my hair” and “I had my hair cut” mean the same.',false),ORD('We need to have the roof repaired.')]],
  ['B2','Gramática','Future continuous and future perfect','',[
    ['This time tomorrow, I ___ on the beach.',['will be lying','will lie','will have lain'],0],['By 2030, they ___ the new airport.',['will have built','will be building','build'],0],
    GAP('Don’t call at 8. We ___ be having dinner.','will'),GAP('By the end of the year, I will have ___ (save) enough money.','saved'),
    TF('The future perfect talks about something finished before a future time.',true),ORD('I will have finished the report by Friday.')]],
  ['B2','Gramática','Used to, be used to, get used to','',[
    ['I ___ live in Recife, but now I live in Curitiba.',['used to','am used to','get used to'],0],['I’m used to ___ up early. It’s easy for me.',['wake','waking','woke'],1],['It took me months to ___ the cold weather.',['get used to','used to','be use to'],0],
    GAP('She isn’t used to ___ (drive) on the left.','driving'),TF('“Be used to” means something is normal for you.',true),ORD('You will get used to it soon.')]],
  ['B2','Gramática','Narrative tenses','',[
    ['It ___ when we left the house.',['was raining','rained','had rain'],0],['When I got to the station, the train ___ already ___.',['had / left','has / left','was / leaving'],0],['While we ___ dinner, the lights went out.',['were having','had','have had'],0],
    GAP('She ___ (walk) home when she saw the accident.','was walking'),TF('We use the past continuous for background actions in a story.',true),
    'Write the beginning of a story (3–4 sentences) using the past simple, the past continuous and the past perfect.']],
  ['B2','Gramática','Passive with modals','',[
    ['The form must ___ by Friday.',['be sent','send','sent'],0],['This problem can’t ___ easily.',['be solved','solve','be solving'],0],
    GAP('The meeting should be ___ (cancel).','cancelled|canceled'),GAP('The tickets can ___ bought online.','be'),
    TF('“It might be done tomorrow” is a passive sentence.',true),ORD('The rules must be followed by everyone.')]],
  ['B2','Gramática','Indirect questions','Perguntas mais educadas.',[
    ['Could you tell me where the station ___?',['is','is it','does it'],0],['Do you know what time the shop ___?',['opens','does open','open'],0],['Do you know ___?',['where does he live','where he lives','where lives he'],1],
    GAP('I was wondering ___ you could help me. (se)','if|whether'),TF('In indirect questions, the word order is the same as in a statement.',true),ORD('Can you tell me how much this costs?')]],
  ['B2','Vocabulário','Prefixes','',[
    ['The opposite of “possible” is…',['impossible','unpossible','dispossible'],0],['The opposite of “agree” is…',['misagree','disagree','unagree'],1],['The opposite of “legal” is…',['illegal','unlegal','inlegal'],0],
    GAP('The opposite of “happy” is ___.','unhappy'),MAT('Ligue o prefixo ao sentido.',[['re-','de novo (redo)'],['mis-','errado (misunderstand)'],['over-','demais (overcook)'],['pre-','antes (preview)']]),
    TF('“Unbelievable” means very hard to believe.',true)]],
  ['B2','Vocabulário','Suffixes','',[
    ['The noun from “decide” is…',['decision','decidement','decidity'],0],['The adjective from “danger” is…',['dangerful','dangerous','dangerly'],1],
    GAP('The noun from “happy” is ___.','happiness'),GAP('The adjective from “use” is ___. (útil)','useful'),
    MAT('Ligue.',[['employ','employee'],['act','actor'],['improve','improvement'],['friend','friendship']]),TF('“Careless” means with a lot of care.',false)]],
  ['B2','Vocabulário','Crime and the law','',[
    MAT('Ligue.',[['thief','ladrão'],['witness','testemunha'],['judge','juiz'],['fine','multa'],['arrest','prender']]),
    ['He was ___ for stealing a car.',['arrested','robbed','fined'],0],['Someone ___ my phone on the bus!',['stole','robbed','arrested'],0],
    GAP('They ___ a bank last night. (assaltaram)','robbed'),TF('You rob a person or a place, and you steal a thing.',true),ORD('The police are looking for witnesses.')]],
  ['B2','Vocabulário','News and media','',[
    MAT('Ligue.',[['headline','manchete'],['breaking news','notícia urgente'],['journalist','jornalista'],['fake news','notícia falsa'],['viewers','telespectadores']]),
    ['A person who reads the news on TV is a…',['newsreader','journalist student','headline'],0],['The news ___ very surprising today.',['was','were','are'],0],
    GAP('Did you ___ the news about the election?','hear|see|read'),TF('“News” is uncountable in English.',true),'Where do you usually get your news? Is it reliable? (40–60 words)']],
  ['B2','Vocabulário','Health and lifestyle','',[
    ['You should cut ___ on sugar.',['down','off','out'],0],['Doctors recommend ___ at least 7 hours a night.',['sleeping','sleep','to sleeping'],0],
    MAT('Ligue.',[['work out','malhar'],['balanced diet','alimentação equilibrada'],['stressed out','estressado'],['get in shape','entrar em forma']]),
    GAP('I’m trying to ___ weight before the summer. (perder)','lose'),TF('“Sedentary” describes someone who exercises a lot.',false),ORD('A healthy lifestyle is more than going to the gym.')]],
  ['B2','Expressões','Idioms with body parts','',[
    ['“To pull someone’s leg” means to…',['joke with them','hurt them','help them'],0],['“To keep an eye on” means to…',['watch carefully','close your eyes','ignore'],0],['“To be all ears” means to…',['listen carefully','be very loud','have big ears'],0],
    MAT('Ligue.',[['Break a leg!','Boa sorte!'],['to have a sweet tooth','gostar de doces'],['to get cold feet','amarelar'],['to give someone a hand','dar uma mão']]),
    TF('“My lips are sealed” means I will keep the secret.',true),GAP('I can’t remember his name. It’s on the tip of my ___.','tongue')]],
  ['B2','Phrasal verbs','Phrasal verbs for relationships','',[
    ['They ___ after five years together.',['broke up','made up','got on'],0],['We had a fight, but we ___ the next day.',['made up','broke up','fell out'],0],['I really ___ well with my sister.',['get on','get over','get off'],0],
    GAP('She fell ___ with her best friend over money. (brigou)','out'),MAT('Ligue.',[['ask someone out','convidar para sair'],['go out with','namorar'],['split up','separar-se'],['settle down','sossegar, criar raízes']]),
    TF('“Fall for someone” means to fall in love.',true)]],
  ['B2','Phrasal verbs','Phrasal verbs with come and go','',[
    ['I ___ an old photo while I was cleaning.',['came across','came up','went off'],0],['Prices keep ___ up.',['going','coming','getting'],0],['The alarm ___ at 6 am.',['went off','came off','went out'],0],
    GAP('Something came ___, so I can’t go tonight.','up'),MAT('Ligue.',[['go on','continuar'],['come back','voltar'],['go over','revisar'],['come up with','ter a ideia de']]),
    TF('“The milk has gone off” means the milk is bad.',true)]],
  ['B2','Leitura','Reading · Working from home',READ.remote,[
    TF('Remote work became popular before 2010.',false),TF('Some people feel lonely when they work from home.',true),
    ['Why do employees save money?',['They don’t need to commute.','They earn more.','They work less.'],0],['What is a hybrid model?',['working only at home','a mix of office and home','working at night'],1],
    GAP('Some people find it hard to separate work from their personal ___.','life'),'Do you prefer working at home or in an office? Why? (50–70 words)']],
  ['B2','Leitura','Reading · The cost of fast fashion',READ.fashion,[
    TF('Fast fashion clothes are usually expensive.',false),TF('Many clothes are thrown away after being worn only a few times.',true),
    ['What do experts suggest?',['buying more clothes','buying fewer, better-quality items','never buying clothes'],1],['Which resource does the industry use a lot of?',['water','gold','wood'],0],
    GAP('Experts recommend repairing the clothes we already ___.','own|have'),MAT('Ligue.',[['second-hand','usado'],['garment','peça de roupa'],['trend','tendência'],['emissions','emissões']])]],
  ['B2','Escrita','Writing · A formal complaint','',[
    ['Which is the best opening for a complaint email?',['Hi guys!','I am writing to complain about…','You are terrible.'],1],
    MAT('Ligue.',[['I would be grateful if…','Eu agradeceria se…'],['I am extremely disappointed','Estou extremamente decepcionado'],['a full refund','reembolso total'],['I expect a reply','Aguardo uma resposta']]),
    ['Which sentence is the most formal?',['Fix it now!','I would appreciate it if you could replace the item.','Can you, like, fix it?'],1],ORD('I look forward to hearing from you soon.'),
    'Write a complaint email (100–120 words) to an online shop. Your order arrived late and damaged. Explain the problem and say what you want them to do.']],
  ['B2','Trabalho','Meetings','',[
    MAT('Ligue.',[['agenda','pauta'],['minutes','ata'],['deadline','prazo'],['to follow up','dar seguimento'],['to run late','atrasar']]),
    ['“Vamos começar?” is…',['Shall we get started?','Shall we get start?','Let’s to begin?'],0],['“Posso interromper?” is…',['Sorry to interrupt, but…','I interrupt you now.','Stop talking, please.'],0],
    GAP('Let’s move ___ to the next item on the agenda.','on'),TF('“To wrap up” means to finish a meeting.',true),ORD('Could you send me the minutes after the meeting?')]],
  ['B2','Trabalho','Negotiating','',[
    ['“Podemos chegar a um acordo?” is…',['Can we reach an agreement?','Can we arrive an agreement?','Can we make an agree?'],0],
    MAT('Ligue.',[['to compromise','chegar a um meio-termo'],['a counteroffer','contraproposta'],['a win-win situation','todos saem ganhando'],['to close a deal','fechar negócio']]),
    ['Which sentence is more polite?',['That’s too expensive.','I’m afraid that’s a little above our budget.','No way!'],1],GAP('If you order 100 units, we can offer you a 10% ___.','discount'),
    TF('“The bottom line” is the most important point or the final result.',true),ORD('We would need to think about it first.')]],
  ['B2','Pronúncia','Word stress','Onde fica a sílaba forte?',[
    ['Where is the stress in “photograph”?',['PHOtograph','phoTOgraph','photoGRAPH'],0],['Where is the stress in “photographer”?',['PHOtographer','phoTOgrapher','photoGRApher'],1],
    ['Where is the stress in “hotel”?',['HOtel','hoTEL'],1],['Where is the stress in “comfortable”?',['COMfortable','comFORtable','comforTAble'],0],
    TF('“Record” (noun) and “record” (verb) have different stress.',true),TF('In “vegetable”, the stress is on “TA”.',false)]],
  ['B2','Cultura','Politeness in English','',[
    ['Which is more polite in a café?',['Give me a coffee.','Could I have a coffee, please?','I want coffee.'],1],['When people bump into someone, they usually say…',['Sorry!','Thank you!','Cheers!'],0],
    TF('In the UK, “Cheers” can mean “thank you”.',true),
    MAT('Ligue o direto ao educado.',[['Open the window.','Would you mind opening the window?'],['I want a refund.','I was wondering if I could get a refund.'],['Repeat that.','Sorry, could you say that again?']]),
    GAP('Would you ___ helping me with this box?','mind'),TF('Saying “please” and “thank you” matters less in English than in Portuguese.',false)]],
  /* ---------- C1 ---------- */
  ['C1','Gramática','Cleft sentences','Ênfase com It is… that / What… is…',[
    ['___ I need is a holiday.',['What','That','Which'],0],['It was Ana ___ broke the window.',['who','what','which'],0],['What I love about London ___ the parks.',['is','are','does'],0],
    GAP('It ___ in 2015 that we first met.','was'),TF('Cleft sentences are used to emphasise information.',true),ORD('What annoys me is his attitude.')]],
  ['C1','Gramática','Participle clauses','',[
    ['___ the letter, she started to cry.',['Having read','Read','Being read'],0],['___ in 1890, the building is now a museum.',['Built','Building','Having building'],0],['___ down the street, I saw an old friend.',['Walking','Walked','To walk'],0],
    GAP('___ what to say, I stayed quiet. (not know)','Not knowing'),TF('“Feeling tired, he went to bed” means “because he felt tired”.',true),ORD('Having finished the exam, we went out to celebrate.')]],
  ['C1','Gramática','Advanced passive','It is said that…',[
    ['It ___ that the president will resign.',['is said','says','is saying'],0],['He is believed ___ the country.',['to have left','having left','that he left'],0],['It is ___ that prices will rise next year.',['expected','expecting','expect'],0],
    GAP('The painting is thought ___ be worth millions.','to'),TF('“She is said to be very rich” means people say she is very rich.',true),ORD('The suspect is reported to have escaped.')]],
  ['C1','Gramática','Emphasis with do and did','',[
    ['I ___ like your new haircut! (ênfase)',['do','did','am'],0],['She ___ call you yesterday. I saw her!',['did','does','was'],0],['___ be quiet, please! (pedido enfático)',['Do','Does','Did'],0],
    GAP('You ___ look tired. Are you OK?','do'),TF('“I did tell you” is stronger than “I told you”.',true),ORD('I do hope you can come to the party.')]],
  ['C1','Gramática','The subjunctive','Formal: I suggest that he be…',[
    ['I suggest that she ___ a doctor.',['see','sees','saw'],0],['It is essential that everyone ___ on time.',['be','is','are'],0],['They recommended that the meeting ___ postponed.',['be','is','was being'],0],
    GAP('The manager insisted that he ___ immediately. (leave)','leave'),TF('“If I were you” is an example of the subjunctive.',true),ORD('I wish it were Friday already.')]],
  ['C1','Gramática','Future in the past','',[
    ['I knew she ___ late. She always is.',['would be','will be','is'],0],['They were going to ___, but it rained.',['travel','travelled','travelling'],0],['I was about ___ when the phone rang.',['to leave','leaving','left'],0],
    GAP('He said he ___ call me, but he never did.','would'),TF('“Was going to” can describe a plan that didn’t happen.',true),ORD('I thought you would like this present.')]],
  ['C1','Vocabulário','Formal or informal?','',[
    MAT('Ligue o informal ao formal.',[['ask for','request'],['get','obtain'],['help','assist'],['need','require'],['enough','sufficient']]),
    ['Which is more formal?',['We’re sorry for the delay.','We apologise for the delay.','Oops, sorry it’s late!'],1],['Which is more informal?',['Kind regards,','Cheers,','Yours sincerely,'],1],
    GAP('Please do not ___ to contact us. (hesitar)','hesitate'),TF('“Commence” is a formal word for “start”.',true),'Rewrite in formal English: “Hey, can you send me the stuff ASAP? Thanks!”']],
  ['C1','Vocabulário','Academic vocabulary','',[
    MAT('Ligue.',[['to assess','avaliar'],['evidence','evidências, provas'],['significant','significativo'],['to highlight','destacar'],['to undermine','minar, enfraquecer']]),
    ['The study ___ that sleep improves memory.',['suggests','says me','talks'],0],['There is little ___ to support this theory.',['evidence','evidences','evident'],0],
    GAP('These results ___ the importance of exercise. (destacam)','highlight|emphasise|emphasize|underline'),TF('“Furthermore” is used to add information.',true),
    ['A “hypothesis” is…',['an idea to be tested','a final result','a type of graph'],0]]],
  ['C1','Vocabulário','Binomials','Pares fixos: pros and cons, by and large…',[
    MAT('Complete o par.',[['pros and','cons'],['sooner or','later'],['safe and','sound'],['peace and','quiet'],['trial and','error']]),
    ['“By and large” means…',['in general','very big','slowly'],0],['“Sick and tired” means…',['very annoyed','very ill','sleepy'],0],
    GAP('Let’s weigh up the pros and ___ before we decide.','cons'),TF('“Now and then” means sometimes.',true),ORD('We got home safe and sound.')]],
  ['C1','Vocabulário','Collocations II','',[
    ['We need to ___ a compromise.',['reach','arrive','do'],0],['She ___ an important role in the project.',['played','made','did'],0],['They ___ a lot of progress this year.',['made','did','took'],0],
    MAT('Ligue.',[['bitterly','disappointed'],['highly','recommended'],['deeply','concerned'],['fully','aware']]),
    GAP('He ___ the opportunity to study abroad. (agarrou)','seized|took|grabbed'),TF('Both “make a decision” and “take a decision” are used in British English.',true)]],
  ['C1','Expressões','Proverbs','',[
    MAT('Ligue ao equivalente em português.',[['Better late than never.','Antes tarde do que nunca.'],['Practice makes perfect.','A prática leva à perfeição.'],['Actions speak louder than words.','Ações valem mais que palavras.'],['Don’t judge a book by its cover.','Quem vê cara não vê coração.']]),
    ['“The early bird catches the worm” is like…',['Deus ajuda quem cedo madruga.','Mais vale um pássaro na mão.','Cada um no seu quadrado.'],0],['“When in Rome, do as the Romans do” means…',['adapt to local customs','visit Italy','always travel'],0],
    TF('“A bird in the hand is worth two in the bush” is like “mais vale um pássaro na mão do que dois voando”.',true),GAP('Every cloud has a silver ___.','lining')]],
  ['C1','Expressões','Idioms with colours','',[
    ['If you are “in the red”, you…',['owe money','are angry','are happy'],0],['“A white lie” is…',['a small, harmless lie','a serious lie','the truth'],0],['“Out of the blue” means…',['unexpectedly','sadly','in the sky'],0],
    MAT('Ligue.',[['green with envy','morrendo de inveja'],['to see red','ficar furioso'],['a grey area','zona cinzenta'],['to be tickled pink','ficar encantado']]),
    TF('“To be green” can mean to be inexperienced.',true),GAP('He has a ___ thumb. All his plants are beautiful.','green')]],
  ['C1','Phrasal verbs','Advanced phrasal verbs','',[
    ['We need to ___ the details before we sign.',['iron out','iron in','iron up'],0],['The talks ___ after hours of discussion.',['broke down','broke up','broke in'],0],['She ___ the opportunity to work abroad.',['jumped at','jumped in','jumped off'],0],
    GAP('Don’t worry, I’ll ___ in for you while you’re away. (substituir)','fill|stand'),
    MAT('Ligue.',[['to bring about','provocar, causar'],['to rule out','descartar'],['to come across as','passar a impressão de'],['to boil down to','resumir-se a']]),
    TF('“To touch on a subject” means to mention it briefly.',true)]],
  ['C1','Leitura','Reading · The attention economy',READ.attention,[
    TF('According to the text, apps want us to spend as little time as possible on them.',false),TF('Infinite scroll is described as a deliberate design choice.',true),
    ['How do these apps make money?',['through advertising','through subscriptions only','by selling phones'],0],['What do critics say?',['It harms our concentration.','It improves our memory.','It is too expensive.'],0],
    GAP('Some people are adopting “digital ___”.','minimalism'),'Do you think apps are designed to be addictive? Give your opinion in 80–100 words.']],
  ['C1','Leitura','Reading · Why we sleep',READ.sleep,[
    TF('The brain switches off completely during sleep.',false),TF('Sleep helps to consolidate memories.',true),
    ['What can happen to people who sleep less than six hours?',['They concentrate better.','Their immunity gets weaker.','They grow taller.'],1],['Many people treat sleep as…',['a necessity','a luxury','a sport'],1],
    GAP('Experts recommend avoiding ___ for an hour before bed.','screens'),MAT('Ligue.',[['to consolidate','consolidar'],['immunity','imunidade'],['to sacrifice','sacrificar'],['beforehand','com antecedência']])]],
  ['C1','Escrita','Writing · Essay connectors','',[
    MAT('Ligue ao uso.',[['Nevertheless','contraste'],['Consequently','consequência'],['In addition','adição'],['For instance','exemplo'],['In conclusion','conclusão']]),
    ['___ the high cost, the project was approved.',['Despite','Although','However'],0],['The evidence is clear. ___, more research is needed.',['Nonetheless','Because','Despite'],0],
    GAP('On the one hand, cities offer jobs. On the other ___, they are expensive.','hand'),TF('“Whereas” is used to compare two contrasting ideas.',true),
    'Write an essay introduction (60–80 words): “Technology has made our lives more complicated, not easier.” Do you agree?']],
  ['C1','Trabalho','Presentations','',[
    MAT('Ligue.',[['Let me start by…','Deixe-me começar…'],['As you can see on this slide,','Como vocês podem ver neste slide,'],['To sum up,','Resumindo,'],['I’d be happy to take questions.','Fico à disposição para perguntas.']]),
    ['Which phrase introduces the next point?',['Moving on to…','Finally I stop.','That’s all, bye.'],0],
    ['Which is a good way to handle a difficult question?',['That’s a great question. Let me get back to you on that.','I don’t know. Next!','Why are you asking that?'],0],
    GAP('I’d like to ___ your attention to this graph.','draw'),TF('“To elaborate on” means to give more details.',true),ORD('Thank you all for being here today.')]],
  ['C1','Trabalho','Formal business writing','',[
    ['Which is the most appropriate in a formal email?',['We regret to inform you that…','Bad news, guys…','Sadly, we gotta tell you…'],0],
    MAT('Ligue o informal ao formal.',[['ASAP','at your earliest convenience'],['Sorry for…','We apologise for…'],['Here is…','Please find enclosed…'],['Can you…?','Would you be able to…?']]),
    ['Which closing goes with “Dear Sir or Madam”?',['Yours faithfully,','Love,','See ya,'],0],GAP('Should you ___ any further information, please contact me.','require|need'),
    TF('“Should you have any questions” means “if you have any questions”.',true),ORD('Please do not hesitate to contact me.')]],
);

function seedBank(){
  const T0=now(), mk=lang=>([level,topic,title,instructions,list],k)=>({id:uid(),lang,level,topic,title,instructions,questions:fromRaw(list),uses:(hashStr(title)%6),mine:false,createdAt:T0-30*DAY+k*MIN});
  return BANK_RAW.map(mk('EN')).concat((typeof BANK_RAW_FR!=='undefined'? BANK_RAW_FR : []).map(mk('FR')),typeof provasBank!=='undefined'? provasBank(T0) : []);
}

