/* =========================================================
   Sotaque · banco de homeworks extras (inglês, A1 a C1)
   Com áudio ou leitura → CONT_ATIV (com o tema certo: Escuta, Leitura, Gramática…);
   interativas (tirinha, escolha no texto, transformação, ordem, ditado…) → CONT_TIPOS.
   Carrega junto com o banco, antes de main.js.
   ========================================================= */
/* ===================== A1 ===================== */
CONT_ATIV.push(
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · My journey to work',i:'Lição de casa: ouça o Ben falar do caminho para o trabalho e responda.',a:`Hi, I'm Ben. I live in a small town near Manchester, and I work in the city centre. Every day, I walk to the station. It takes five minutes. Then I take the train to Manchester. The train takes forty minutes. I read a book or listen to music. From the station, I go to my office by bike. I love my bike! On Fridays, I work from home, so I don't travel. My wife goes to work by car, because there's no train to her office.`,q:[
    ['How does Ben get to the station?',['by bus','on foot','by car'],1],['How long is the train journey?',['five minutes','fourteen minutes','forty minutes'],2],
    ['What does Ben do on the train?',['he sleeps','he reads or listens to music','he works'],1],['How does he get from the station to the office?',['by bike','by taxi','on foot'],0],
    TF('Ben goes to the office on Fridays.',false),['How does his wife go to work?',['by train','by car','by bike'],1],
    GAP('It ___ forty minutes by train.','takes'),GAP('I go to school ___ foot.','on'),
    'How do you get to work or school? Write 4–5 sentences: transport, time and what you do on the way.']},
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · My morning routine',i:'Lição de casa: ouça a rotina da Clara e responda.',a:`Good morning! I'm Clara. I get up at half past six every day. First, I have a shower and get dressed. Then I have breakfast with my son. We have coffee, bread and fruit. At half past seven, I take him to school. After that, I go to work. I'm a dentist, and I start work at eight. I never have breakfast alone, and I always listen to the radio in the car.`,q:[
    ['What time does Clara get up?',['at six','at half past six','at seven'],1],['What does she do first?',['has breakfast','has a shower','goes to work'],1],
    ['What do they have for breakfast?',['eggs and juice','coffee, bread and fruit','tea and cake'],1],['What is Clara’s job?',['a doctor','a dentist','a teacher'],1],
    TF('Clara starts work at nine.',false),TF('She listens to the radio in the car.',true),
    GAP('She ___ (take) her son to school.','takes'),GAP('I always ___ (have) a shower in the morning.','have'),
    'Describe your morning routine in 5 sentences (get up, shower, breakfast, work or study).']},
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · Checking in',i:'Lição de casa: ouça o check-in no hotel e responda.',a:`A: Good afternoon. Welcome to the Park Hotel. B: Hi. I have a reservation. My name is Laura Costa. A: Let me see. Yes, a single room for three nights. Can I see your passport, please? B: Here you are. A: Thank you. You're in room 214, on the second floor. Here's your key card. Breakfast is from seven to ten in the restaurant. B: Thank you. What's the Wi-Fi password? A: It's parkhotel, all small letters. B: Great, thanks!`,q:[
    ['What is the guest’s name?',['Laura Costa','Laura Park','Lara Costa'],0],['How many nights is she staying?',['two','three','four'],1],
    ['What is her room number?',['204','214','240'],1],['Which floor is the room on?',['the first floor','the second floor','the third floor'],1],
    ['When is breakfast?',['from six to nine','from seven to ten','from eight to eleven'],1],TF('The Wi-Fi password is in capital letters.',false),
    MAT('Ligue.',[['key card','cartão do quarto'],['single room','quarto de solteiro'],['floor','andar'],['breakfast','café da manhã']]),
    'Write a short check-in dialogue (6 lines) at a hotel: name, nights, room and one question.']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · My street',i:'Lição de casa: there is / there are. Ouça e responda.',a:`I live on Green Street. It's a quiet street in the city. There are about twenty houses and there's a small park at the end. There's a bakery next to my house, and the bread is delicious! There are two cafés and a supermarket, but there isn't a bank. There aren't any big shops. There's a bus stop in front of the park. I really like my street.`,q:[
    ['What’s the name of the street?',['Green Street','Park Street','Queen Street'],0],['How many houses are there?',['about ten','about twenty','about fifty'],1],
    ['What’s next to the house?',['a bank','a bakery','a café'],1],TF('There is a bank on the street.',false),TF('There are two cafés.',true),
    ['There ___ a park at the end of the street.',['is','are'],0],['There ___ any big shops.',['aren’t','isn’t'],0],GAP('___ there a supermarket? — Yes, there is.','Is'),
    'Describe your street in 5 sentences with there is / there are / there isn’t / there aren’t.']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · I love pizza!',i:'Lição de casa: like, love e hate + -ing. Ouça e responda.',a:`Hi, I'm Daniel. I love food! I love pizza and I really like Japanese food. I don't like fish, and I hate olives. In my free time, I love cooking for my friends. I like watching films, but I don't like going to the cinema, because it's expensive. I hate getting up early on Saturdays! My sister is different: she loves running and she likes getting up early.`,q:[
    ['What food does Daniel love?',['fish','pizza','olives'],1],['What does he hate?',['olives','pizza','Japanese food'],0],
    ['What does he love doing in his free time?',['running','cooking for friends','going to the cinema'],1],['Why doesn’t he like going to the cinema?',['it’s boring','it’s expensive','it’s far'],1],
    TF('Daniel likes getting up early on Saturdays.',false),TF('His sister loves running.',true),
    ['I love ___ films.',['watching','watch','to watching'],0],GAP('She ___ (not / like) fish.','doesn’t like|does not like'),
    'Write 6 sentences about you: 2 things you love, 2 you like and 2 you hate (use -ing).']},
  {l:'EN',lv:'A1',tp:'Leitura',t:'Homework · A postcard from Rio',i:`Read the postcard and answer.\n\nHi Mum and Dad!\n\nI'm in Rio de Janeiro with Sara. It's hot and sunny every day! Our hotel is near Copacabana beach. In the morning, we swim in the sea and in the afternoon we visit the city. Today we are at Sugarloaf Mountain. The view is amazing! The food is great too: I love the fruit juices. Tomorrow we go to a samba show.\n\nSee you on Sunday!\nLove, Emma`,q:[
    ['Where is Emma?',['in São Paulo','in Rio de Janeiro','in Lisbon'],1],['Who is she with?',['her mum','Sara','her dad'],1],
    ['What’s the weather like?',['cold and rainy','hot and sunny','cloudy'],1],['What do they do in the morning?',['visit the city','swim in the sea','sleep'],1],
    TF('Emma loves the fruit juices.',true),TF('Tomorrow they go to a museum.',false),
    MAT('Ligue.',[['view','vista'],['amazing','incrível'],['beach','praia'],['tomorrow','amanhã']]),
    'Write a postcard (50–60 words) from a city you love: where you are, the weather, what you do and what you eat.']},
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · What’s the time?',i:'Lição de casa: ouça os horários e responda.',a:`A: Excuse me, what time is it? B: It's quarter past three. A: Thank you. What time does the museum close? B: It closes at half past five. A: And the café? B: The café closes at five o'clock. A: Great. And the last bus to the centre? B: The last bus is at ten to eleven tonight. A: Perfect, thank you very much! B: You're welcome.`,q:[
    ['What time is it?',['3:15','3:45','3:30'],0],['When does the museum close?',['5:00','5:30','5:15'],1],
    ['When does the café close?',['5:00','5:30','4:30'],0],['When is the last bus?',['10:50','11:10','10:10'],0],
    MAT('Ligue o horário à forma falada.',[['3:15','quarter past three'],['5:30','half past five'],['10:50','ten to eleven'],['8:45','quarter to nine']]),
    DIT('It’s quarter past three.'),
    'Write your daily routine with 5 times (I get up at…, I have lunch at…).']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · When’s your birthday?',i:'Lição de casa: datas, ordinais, in e on.',q:[
    MAT('Ligue o número ao ordinal.',[['1st','first'],['2nd','second'],['3rd','third'],['21st','twenty-first']]),
    PICK('My birthday is [*in/on] May. The party is [*on/in] the 3rd of July. I was born [*in/on] 1998.'),
    SEQ('January\nMarch\nMay\nAugust\nOctober\nDecember','Put the months in order.'),
    FIX('My birthday is {in|on} the twelfth of June.'),
    ['How do you say 22/10?',['the twenty-two of October','the twenty-second of October','the second-twenty of October'],1],
    DIT('My birthday is on the third of March.'),
    'Write the birthdays of 5 people in your family (ex.: My mum’s birthday is on the 4th of May).']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · All about me',i:'Lição de casa: o verbo to be.',q:[
    PICK('I [*am/is/are] Brazilian. My sister [*is/are/am] a nurse. We [*are/is/am] from Curitiba. [*Are/Is] you married?'),
    COMIC(`[conversa]
Tom: Hi! Are you a student?
Ana: ___
---
Tom (feliz): Oh, cool! I’m a teacher.`,['No, I’m not. I’m a doctor.','No, I don’t.','Yes, I is.'],0),
    FIX('My parents {is|are} very nice.'),FIX('{I have|I am} 30 years old.'),
    SEQ('Hello! My name is Julia.\nI’m 27 years old.\nI’m from Salvador, but I live in São Paulo.\nI’m a designer.','Put Julia’s introduction in order.'),
    ['___ she your sister?',['Is','Are','Am'],0],
    'Write 6 sentences about you and your family with am / is / are (name, age, city, job, nationality).']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · Superpowers',i:'Lição de casa: can e can’t.',q:[
    PICK('I [*can/cans] swim, but I [*can’t/don’t can] dance. [*Can/Do] you speak Spanish? She [*can/can to] play the guitar.'),
    SORT(`Fish can: swim
Birds can: fly, sing
Dogs can: run, bark`,'O que cada animal pode fazer?'),
    COMIC(`[cidade]
Leo: Can you cook?
Mia: ___
---
Leo (feliz): Great! Let’s have dinner at your house!`,['Yes, I can. I’m a good cook!','Yes, I cook.','Yes, I can cooking.'],0),
    FIX('She can {speaks|speak} three languages.'),
    ['— Can you drive? — No, I ___.',['can’t','don’t','am not'],0],
    'Write 4 things you can do and 4 things you can’t do. Then write the superpower you’d like to have.']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · My family tree',i:'Lição de casa: família, have got e possessivos.',q:[
    MAT('Ligue.',[['my mother’s mother','my grandmother'],['my father’s brother','my uncle'],['my aunt’s son','my cousin'],['my sister’s daughter','my niece']]),
    PICK('I [*have got/has got] two brothers. My sister [*has got/have got] a baby. [*Have/Has] you got any cousins?'),
    CLOZE('This is my [family]. My [father] is Carlos and my [mother] is Rita. I’ve got one [brother], Pedro.','house, friend'),
    FIX('My brother {have|has} got a new car.'),
    HUNT('mother, father, sister, brother, uncle, aunt, cousin','Find 7 family words.'),
    'Draw your family tree and write 6 sentences about it (My uncle is…, I’ve got…).']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · Where’s my phone?',i:'Lição de casa: preposições de lugar.',q:[
    PICK('The phone is [*on/in] the table. The keys are [*in/on] my bag. The cat is [*under/on] the bed. The lamp is [*next to/between] the sofa.'),
    MAT('Ligue.',[['in','dentro'],['on','em cima'],['under','embaixo'],['next to','ao lado de']]),
    COMIC(`[casa]
Bia (preocupado): Where are my glasses?
Tom: ___
---
Bia (feliz): Oh! Thank you!`,['They’re on your head!','It’s on your head!','They on your head!'],0),
    FIX('The books are {in|on} the shelf.'),
    DIT('The cat is under the table.'),
    'Describe your bedroom: write 6 sentences with in, on, under, next to and between.']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · Question words',i:'Lição de casa: what, where, when, who, how.',q:[
    MAT('Ligue a pergunta à resposta.',[['Where do you live?','In Recife.'],['When is your birthday?','In May.'],['Who is your best friend?','Ana.'],['How old are you?','I’m 25.']]),
    PICK('[*What/Where] is your name? [*Where/Who] do you work? [*How/What] are you? [*When/Who] is the party?'),
    ['___ do you go to work? — By bus.',['How','What','Who'],0],['___ is your favourite food? — Pizza.',['What','Where','When'],0],
    ORD('Where do you live'),
    FIX('{Where|What} is your favourite colour?'),
    'Write 6 questions to ask a new friend, each with a different question word.']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · Clothes and colours',i:'Lição de casa: roupas e cores.',q:[
    CROSS(`shirt = You wear it on your body, often with buttons. | img:camisa
shoes = You wear them on your feet. | img:sapato
hat = You wear it on your head. | img:chapeu
dress = A woman or girl wears it. One piece. | img:vestido`,'Complete the crossword.'),
    SORT(`Clothes: shirt, trousers, jacket, dress
Colours: red, blue, green, yellow`),
    PICK('I’m wearing [*a/an] blue shirt and [*black/blacks] shoes. She’s wearing [*an/a] orange dress.'),
    FIX('I like your {shoes red|red shoes}.'),
    DIT('He’s wearing a white shirt and blue jeans.'),
    'What are you wearing today? And what do you wear to a party? Write 5 sentences with colours.']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · Days and months',i:'Lição de casa: dias da semana e meses.',q:[
    SEQ('Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday','Put the days in order.'),
    PICK('I work [*on/in] Mondays. My holiday is [*in/on] July. The weekend is Saturday and [*Sunday/Monday].'),
    ODD('Which one is NOT a month?',['June','July','Tuesday','August'],2),
    HUNT('January, March, April, June, October, December','Find 6 months.'),
    FIX('My English class is on {friday|Friday}.'),
    'Write your week: one thing you do every day from Monday to Sunday.']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · My pets',i:'Lição de casa: have got e animais.',q:[
    PICK('I [*’ve got/’s got] a dog. My sister [*’s got/’ve got] two cats. [*Have/Has] you got any pets? We [*haven’t got/hasn’t got] a fish.'),
    MAT('Ligue o animal à frase.',[['dog','It barks.'],['cat','It says “meow”.'],['bird','It can fly.'],['fish','It lives in water.']]),
    COMIC(`[casa]
Tom: Have you got a pet?
Ana: ___
---
Tom (surpreso): Three dogs? Wow!`,['Yes, I have. I’ve got three dogs.','Yes, I got.','Yes, I has got three dogs.'],0),
    FIX('My cat {have|has} got green eyes.'),
    'Describe your pet (or a pet you’d like): name, age, colour and what it likes.']}
);
/* ===================== A2 ===================== */
CONT_ATIV.push(
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Room 304',i:'Lição de casa: ouça a hóspede reclamando na recepção e responda.',a:`A: Good evening, reception. How can I help you? B: Hi, I'm calling from room 304. I'm sorry, but there are a few problems with my room. The air conditioning doesn't work, and it's very hot. A: Oh, I'm sorry. I'll send someone to check it right away. B: Thank you. And there aren't any towels in the bathroom. A: I'll ask housekeeping to bring some. Anything else? B: Yes, the room next to mine is very noisy. Could I change rooms? A: Of course. We have a quiet room on the fifth floor, with a sea view. B: Perfect, thank you so much!`,q:[
    ['What room is the guest in?',['204','304','314'],1],['What doesn’t work?',['the TV','the air conditioning','the shower'],1],
    ['What is missing in the bathroom?',['soap','towels','shampoo'],1],['Why does she want to change rooms?',['it’s noisy','it’s small','it’s dirty'],0],
    ['Where is the new room?',['on the fifth floor','on the third floor','on the first floor'],0],TF('The new room has a sea view.',true),
    GAP('The air conditioning ___ work.','doesn’t|does not'),GAP('___ I change rooms, please?','Could|Can'),
    'Write a short email to a hotel (50–70 words): explain two problems in your room and ask for a solution.']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Last weekend',i:'Lição de casa: ouça sobre o fim de semana do Rafael e responda.',a:`Last weekend was great. On Saturday morning, I played football with my friends in the park. We won! Then I went home and had lunch with my parents. In the afternoon, I didn't do much: I watched a film and slept a bit. In the evening, I met my girlfriend and we went to a new Italian restaurant. The food was delicious, but it was expensive. On Sunday, it rained all day, so we stayed at home and played board games.`,q:[
    ['What did Rafael do on Saturday morning?',['he played football','he went shopping','he slept'],0],['Who did he have lunch with?',['his friends','his parents','his girlfriend'],1],
    ['Where did they go on Saturday evening?',['to the cinema','to an Italian restaurant','to a party'],1],TF('The restaurant was cheap.',false),
    ['What was the weather like on Sunday?',['sunny','rainy','windy'],1],['What did they do on Sunday?',['played board games','went to the beach','visited friends'],0],
    GAP('We ___ (win) the game.','won'),GAP('I ___ (not / do) much in the afternoon.','didn’t do|did not do'),
    'Write about your last weekend (60–80 words): what you did on Saturday and Sunday, and who with.']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · At the doctor’s',i:'Lição de casa: ouça a consulta e responda.',a:`Doctor: Good morning. What's the problem? Patient: I've got a terrible headache and a sore throat. Doctor: How long have you felt like this? Patient: Since Monday. And I've got a temperature too. Doctor: Let me have a look. Hmm, your throat is very red. I think it's an infection. Take these tablets three times a day after meals, for five days. You should drink a lot of water and stay in bed for two days. You shouldn't go to work. Patient: OK. Thank you, doctor.`,q:[
    ['What are the patient’s problems?',['a headache and a sore throat','a stomach ache','a broken arm'],0],['Since when?',['Sunday','Monday','yesterday'],1],
    ['How often should the patient take the tablets?',['once a day','twice a day','three times a day'],2],['For how long?',['three days','five days','a week'],1],
    TF('The doctor says the patient should go to work.',false),['You ___ drink a lot of water.',['should','shouldn’t'],0],
    MAT('Ligue.',[['headache','dor de cabeça'],['sore throat','dor de garganta'],['temperature','febre'],['tablets','comprimidos']]),
    'Write a dialogue at the doctor’s (8 lines): describe a problem and receive advice with should / shouldn’t.']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Travel trouble',i:'Lição de casa: ouça a história de viagem e responda.',a:`Last month, I flew from São Paulo to Dublin to visit my cousin. The trip started badly. First, my flight was two hours late. Then, when I arrived in Dublin, my suitcase wasn't there! I went to the lost luggage desk and filled in a form. They said they would send it to my cousin's house. I had no clothes, so I bought a T-shirt at the airport. Luckily, my suitcase arrived the next day. And the rest of the trip was perfect!`,q:[
    ['Where did the speaker fly to?',['London','Dublin','Lisbon'],1],['How late was the flight?',['one hour','two hours','three hours'],1],
    ['What was the problem in Dublin?',['the hotel was closed','the suitcase didn’t arrive','the cousin wasn’t there'],1],['What did the speaker buy at the airport?',['a T-shirt','a suitcase','a ticket'],0],
    ['When did the suitcase arrive?',['the same day','the next day','never'],1],TF('The rest of the trip was bad.',false),
    GAP('My flight ___ (be) two hours late.','was'),
    'Write about a problem you had on a trip (60–80 words). What happened and how did you solve it?']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · My best friend',i:'Lição de casa: ouça a descrição e responda.',a:`My best friend is called Julia. We met at school when we were eleven. She's tall and slim, with long curly hair and big brown eyes. She usually wears jeans and colourful T-shirts. Julia is very funny and kind, but she's a bit untidy: her room is always a mess! She works as a vet, because she loves animals. She's got two dogs and a cat. We meet every Friday to have coffee and talk about everything.`,q:[
    ['When did they meet?',['at university','at school','at work'],1],['What does Julia look like?',['short with straight hair','tall and slim with curly hair','tall with short hair'],1],
    ['What is she like?',['funny and kind','serious and quiet','shy and nervous'],0],['What’s her job?',['a doctor','a vet','a teacher'],1],
    TF('Julia is very tidy.',false),['How often do they meet?',['every day','every Friday','once a month'],1],
    MAT('Ligue.',[['curly','cacheado'],['slim','magro(a)'],['untidy','bagunceiro(a)'],['kind','gentil']]),
    'Describe your best friend (60–80 words): appearance, personality, job and what you do together.']},
  {l:'EN',lv:'A2',tp:'Leitura',t:'Homework · Two cities',i:`Read the text and answer.\n\nSarah has lived in two very different cities: London and Lisbon. London is bigger and busier than Lisbon, and there are more things to do at night. But it's also more expensive: a coffee in London costs almost twice as much! Lisbon is sunnier and warmer, and the people are friendlier, Sarah says. The public transport in London is better, but Lisbon's old trams are more beautiful. "London is more exciting," she says, "but Lisbon is more relaxing. I'm happier here."`,q:[
    ['Which city is bigger?',['London','Lisbon'],0],['Where is coffee more expensive?',['in London','in Lisbon'],0],
    ['Which city is sunnier?',['London','Lisbon'],1],['Where is public transport better?',['in London','in Lisbon'],0],
    TF('Sarah is happier in London.',false),['Lisbon is ___ than London. (warm)',['warmer','more warm','warmest'],0],
    GAP('London is more ___ than Lisbon. (exciting)','exciting'),GAP('The people in Lisbon are ___ (friendly).','friendlier'),
    'Compare two cities you know (60–80 words) using at least five comparatives.']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Next summer',i:'Lição de casa: going to. Ouça os planos e responda.',a:`Next summer, my family and I are going to travel to the north of Brazil. We're going to fly to Belém and then take a boat along the Amazon River. It's going to take three days! My kids are very excited: they're going to see pink dolphins. My husband isn't going to come on the boat trip, because he gets seasick, so he's going to stay in Manaus and visit the opera house. We're going to meet him there at the end of the week.`,q:[
    ['Where are they going to travel?',['to the south of Brazil','to the north of Brazil','to Argentina'],1],['How are they going to travel on the river?',['by boat','by plane','by car'],0],
    ['How long is the boat trip going to take?',['one day','three days','a week'],1],['What are the kids going to see?',['pink dolphins','monkeys','jaguars'],0],
    TF('The husband is going to come on the boat trip.',false),['He ___ going to visit the opera house.',['is','are','am'],0],
    GAP('We ___ going to meet him in Manaus.','are|’re'),
    'Write about your plans for the next holiday (60–80 words) using going to.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'Homework · Who does the dishes?',i:'Lição de casa: tarefas de casa, have to e don’t have to.',q:[
    SORT(`do: the dishes, the laundry, the ironing
make: the bed, dinner, a mess
take out: the rubbish`,'Que verbo vem com cada tarefa?'),
    PICK('I [*have to/has to] cook every day. My son [*has to/have to] make his bed. On Sundays, we [*don’t have to/mustn’t] get up early. You [*mustn’t/don’t have to] touch the oven. It’s hot!'),
    COMIC(`[casa]
Mia: Do you have to do the dishes tonight?
Leo: ___
---
Mia (feliz): Lucky you!`,['No, I don’t. It’s my brother’s turn.','No, I mustn’t.','No, I haven’t to.'],0),
    KWT('It isn’t necessary to iron this shirt.','HAVE','You ___ this shirt.','don’t have to iron'),
    FIX('My sister {have|has} to take out the rubbish on Mondays.'),
    'Who does what in your house? Write 6 sentences with have to, has to and don’t have to.']},
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'Homework · Guess the job',i:'Lição de casa: profissões e present simple.',q:[
    MAT('Ligue a profissão ao que a pessoa faz.',[['nurse','looks after patients'],['chef','cooks in a restaurant'],['mechanic','fixes cars'],['accountant','works with numbers and taxes']]),
    PICK('My mother is [*a/an] engineer. She [*works/work] for [*a/an] big company. — What [*does/is] your brother do? — He’s [*an/a] lawyer.'),
    ['“I work at night. I help people. I wear a uniform.” Who am I?',['a nurse','a chef','a lawyer'],0],
    ['“I write code. I often work from home.” Who am I?',['a mechanic','a software developer','a shop assistant'],1],
    FIX('— What do you do? — I {am working|’m} a teacher.'),
    'Write 3 “Who am I?” riddles about jobs (3 sentences each). Then describe your own job or dream job.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · Irregular verbs',i:'Lição de casa: past simple dos verbos irregulares.',q:[
    MAT('Ligue o verbo ao passado.',[['go','went'],['eat','ate'],['see','saw'],['buy','bought']]),
    PICK('Yesterday I [*went/goed] to the beach. We [*ate/eated] fish. I [*saw/seed] a dolphin! My dad [*bought/buyed] ice cream.'),
    CLOZE('Last year, I [took] a trip to Chile. I [flew] to Santiago and [met] a lot of nice people.','taked, meeted'),
    HUNT('went, saw, ate, took, made, came, got','Find 7 irregular past forms.'),
    FIX('I {did go|went} to the cinema last night.'),
    'Write about your last holiday (60–80 words) using at least 8 irregular verbs.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · What were you doing?',i:'Lição de casa: past continuous e past simple.',q:[
    PICK('I [*was watching/watched] TV when the lights [*went/were going] out. While she [*was cooking/cooked], the phone [*rang/was ringing].'),
    COMIC(`[noite]
Tom: What were you doing at 10 p.m. last night?
Bia: ___
---
Tom (surpreso): At 10 p.m.? You’re so good!`,['I was studying for my exam.','I studied for my exam.','I am studying for my exam.'],0),
    SEQ('It was a sunny afternoon.\nI was walking in the park with my dog.\nSuddenly, it started to rain.\nWe ran home, but we got very wet!','Put the story in order.'),
    FIX('When I {was arriving|arrived}, they were having dinner.'),
    KWT('I was in the shower. Then the phone rang.','WHILE','The phone rang ___ a shower.','while I was having/while I was taking'),
    'Write a short story (60–80 words) about an unexpected moment. Use the past continuous for the background and the past simple for the action.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · The best in the world',i:'Lição de casa: superlativos.',q:[
    PICK('The Nile is [*the longest/the longer] river in Africa. This is [*the best/the goodest] pizza in town! Who is [*the most famous/the famousest] singer in Brazil?'),
    MAT('Ligue.',[['good','the best'],['bad','the worst'],['far','the furthest'],['big','the biggest']]),
    ['Mount Everest is ___ mountain in the world.',['the highest','the higher','the most high'],0],
    ['What’s ___ film you’ve ever seen?',['the most interesting','the interestingest','the more interesting'],0],
    FIX('It’s the {most cheap|cheapest} hotel in the city.'),
    'Write 6 sentences about the best, the worst and the most interesting things in your city.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · Rules, rules, rules',i:'Lição de casa: must, mustn’t, have to e don’t have to.',q:[
    PICK('You [*mustn’t/don’t have to] use your phone in the cinema. You [*don’t have to/mustn’t] wear a suit, but you can. Drivers [*must/mustn’t] stop at a red light.'),
    SORT(`Obrigatório: must, have to
Proibido: mustn’t
Não precisa: don’t have to`),
    MAT('Ligue o aviso ao significado.',[['No smoking','You mustn’t smoke.'],['Free entry','You don’t have to pay.'],['Seat belts on','You must wear a seat belt.']]),
    FIX('Students {mustn’t|don’t have to} bring food. Lunch is free, but you can bring your own.'),
    'Write 6 rules for your house, office or school (must, mustn’t, have to, don’t have to).']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · In the kitchen',i:'Lição de casa: some, any, much, many.',q:[
    PICK('There are [*some/any] eggs in the fridge. Is there [*any/some] milk? How [*much/many] sugar do you want? How [*many/much] apples do we need?'),
    SORT(`How much: water, money, rice
How many: eggs, bananas, people`),
    CLOZE('We need [some] bread and [some] tomatoes. We don’t have [any] cheese. How [much] does it cost?','many, a'),
    FIX('There isn’t {some|any} coffee left.'),
    ['There aren’t ___ chairs. Let’s get more.',['many','much'],0],
    'Look in your fridge. Write 6 sentences with some, any, much and many.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · Quick or quickly?',i:'Lição de casa: adjetivos e advérbios.',q:[
    PICK('She’s a [*careful/carefully] driver. She drives [*carefully/careful]. He speaks English very [*well/good]. The test was [*easy/easily].'),
    MAT('Ligue o adjetivo ao advérbio.',[['quick','quickly'],['good','well'],['fast','fast'],['hard','hard']]),
    FIX('He plays the guitar very {good|well}.'),FIX('Please speak {slow|slowly}.'),
    KWT('She is a beautiful singer.','BEAUTIFULLY','She ___ .','sings beautifully'),
    'Describe how 5 people you know do things (ex.: My dad drives slowly).']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · Right now',i:'Lição de casa: present continuous e present simple.',q:[
    PICK('Look! It [*’s raining/rains]. I usually [*walk/am walking] to work, but today I [*’m taking/take] the bus. She [*’s talking/talks] on the phone right now.'),
    COMIC(`[celular]
Ana: Hi! What are you doing?
Leo: ___
---
Ana (feliz): Can I come? I’m hungry!`,['I’m having lunch at the café.','I have lunch at the café.','I having lunch.'],0),
    SORT(`Now: right now, at the moment, today
Habit: usually, every day, always`),
    FIX('Listen! The baby {cries|is crying}.'),
    'Look out of your window. Write 6 sentences about what is happening right now.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · A, an or the?',i:'Lição de casa: artigos.',q:[
    PICK('I have [*a/an] idea! She’s [*an/a] engineer. [*The/A] sun is very hot today. I love [*–/the] music.'),
    ['I saw ___ film yesterday. ___ film was great.',['a / The','the / A','a / A'],0],
    ['She plays ___ piano.',['the','a','–'],0],
    FIX('{The life|Life} is beautiful.'),FIX('He’s {a|an} honest man.'),
    CLOZE('I live in [a] small flat. [The] kitchen is small, but [the] living room is big. It’s near [the] beach.','an, some'),
    'Write about your home (60 words). Be careful with a, an and the.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · Too big, not big enough',i:'Lição de casa: too e enough.',q:[
    PICK('This coffee is [*too/enough] hot. I can’t drink it. He isn’t [*old enough/enough old] to drive. There’s [*too much/too many] noise here.'),
    COMIC(`[camiseta]
Mia: How’s the T-shirt?
Tom: ___
---
Mia: Let’s try a bigger size.`,['It’s too small.','It’s small enough.','It’s enough small.'],0),
    KWT('The box is very heavy. I can’t carry it.','TOO','The box is ___ carry.','too heavy for me to/too heavy to'),
    FIX('The room isn’t {enough big|big enough} for us.'),
    'Write 6 sentences about things that are too… or not … enough in your life (ex.: My flat is too small).']}
);

/* ===================== B1 ===================== */
CONT_ATIV.push(
  {l:'EN',lv:'B1',tp:'Escuta',t:'Homework · My bucket list',i:'Lição de casa: ouça os planos e sonhos da Priya e responda.',a:`I turned thirty last month, so I decided to write a bucket list. Some things are big dreams: one day, I'd love to see the Northern Lights in Norway, and I'm hoping to run a marathon before I'm forty. Other things are more practical. I'm planning to learn to drive this year, because I'm tired of depending on buses. I'm also thinking of changing jobs: I work in a bank, but I'd really like to work with animals. My friends laughed at that one, but I've already started volunteering at an animal shelter on Saturdays.`,q:[
    ['Why did Priya write a bucket list?',['she turned thirty','she lost her job','a friend asked her'],0],['What would she love to see?',['the Northern Lights','the pyramids','the Amazon'],0],
    ['What is she planning to do this year?',['run a marathon','learn to drive','move to Norway'],1],['Where does she work now?',['in a bank','in a shelter','in a school'],0],
    TF('She has already started volunteering with animals.',true),['I’m thinking of ___ jobs.',['changing','to change','change'],0],
    GAP('I’m hoping ___ run a marathon.','to'),
    'Write your bucket list (80–100 words): 2 dreams, 2 practical goals and 1 thing you’ve already started. Use hope to, plan to, would like to and be thinking of.']},
  {l:'EN',lv:'B1',tp:'Escuta',t:'Homework · The soundtrack of my life',i:'Lição de casa: ouça sobre as músicas que marcaram a vida do Marco e responda.',a:`Music has always been part of my life. The first song that I remember is a samba that my grandfather used to sing while he was cooking. When I was a teenager, I was really into rock: I had long hair and played the guitar in a band which was, honestly, terrible. The song that reminds me most of my wife is a jazz tune we heard at a tiny bar where we had our first date. Today, I listen to all kinds of music, but I still can't stand electronic music. It's just not my cup of tea.`,q:[
    ['Who used to sing samba?',['his father','his grandfather','his wife'],1],['What kind of music did he like as a teenager?',['samba','rock','jazz'],1],
    ['How was his band?',['excellent','terrible','famous'],1],['Where did he have his first date with his wife?',['at a tiny bar','at a concert','at a restaurant'],0],
    TF('Marco loves electronic music.',false),['It’s a song ___ reminds me of my wife.',['that','who','where'],0],
    GAP('That’s the bar ___ we had our first date.','where'),
    'Describe 3 songs from different moments of your life (100–120 words) using who, which, that and where.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · How long have you been…?',i:'Lição de casa: present perfect continuous. Ouça e responda.',a:`A: You look tired! B: I know. I've been working on this report since seven o'clock this morning. A: Seven? That's ten hours! B: And I haven't finished yet. I've been trying to find some numbers all afternoon. A: Have you eaten anything? B: Not really. I've been drinking coffee all day. A: You should stop. How long have you been working here, anyway? B: Five years. And I've been thinking about changing jobs for months!`,q:[
    ['Since when has B been working on the report?',['seven o’clock','ten o’clock','noon'],0],['How many hours is that?',['seven','ten','five'],1],
    ['What has B been drinking?',['tea','coffee','water'],1],['How long has B been working there?',['five months','five years','ten years'],1],
    TF('B has finished the report.',false),['I ___ waiting for you for an hour!',['have been','am','was being'],0],
    GAP('How long ___ you been learning English?','have'),GAP('She’s been working here ___ 2019.','since'),
    'Write about 4 things you’ve been doing recently and for how long (I’ve been… for / since…).']},
  {l:'EN',lv:'B1',tp:'Escuta',t:'Homework · Life hacks',i:'Lição de casa: zero conditional. Ouça as dicas e responda.',a:`Welcome to Life Hacks in Sixty Seconds! Hack number one: if you put a wooden spoon across a pot of boiling water, it doesn't boil over. Number two: if your phone falls in water, don't put it in rice. Experts say it doesn't help. Just turn it off and let it dry. Number three: if you can't sleep, get up and read a boring book for twenty minutes. And number four: if you put bananas in a bag with an avocado, the avocado gets ripe faster. See you next week!`,q:[
    ['What stops water from boiling over?',['a wooden spoon across the pot','salt','a lid'],0],['What do experts say about putting a wet phone in rice?',['it helps a lot','it doesn’t help','it’s dangerous'],1],
    ['What should you do if you can’t sleep?',['watch TV','read a boring book','drink coffee'],1],['What makes an avocado ripe faster?',['bananas in the same bag','the fridge','water'],0],
    ['If you heat ice, it ___.',['melts','will melt','melted'],0],['If you mix red and blue, you ___ purple.',['get','will get','got'],0],
    GAP('If you ___ (not / water) plants, they die.','don’t water|do not water'),
    'Write 4 life hacks you know, using the zero conditional (If you…, …).']},
  {l:'EN',lv:'B1',tp:'Escuta',t:'Homework · Then and now',i:'Lição de casa: used to. Ouça e responda.',a:`My grandmother is ninety, and she loves telling me how life used to be. When she was a child, she used to walk three kilometres to school every day. They didn't use to have a fridge, so they bought fresh food every morning at the market. There was only one phone in the whole street, and people used to queue to use it! In the evenings, her family used to listen to the radio together. She says people used to talk more. But she loves her smartphone: she uses it to video-call me every Sunday!`,q:[
    ['How did the grandmother use to go to school?',['by bus','on foot','by bike'],1],['Why did they buy food every morning?',['they didn’t have a fridge','it was cheaper','they liked the market'],0],
    ['How many phones were there in the street?',['one','none','many'],0],['What did the family use to do in the evenings?',['watch TV','listen to the radio','play cards'],1],
    TF('The grandmother doesn’t like her smartphone.',false),['They didn’t ___ have a TV.',['use to','used to','using to'],0],
    GAP('My grandmother ___ walk to school every day.','used to'),
    'Compare your life 15 years ago with now (80–100 words) using used to and didn’t use to.']},
  {l:'EN',lv:'B1',tp:'Trabalho',t:'Homework · The interview',i:'Lição de casa: ouça a entrevista de emprego e responda.',a:`Interviewer: So, tell me about yourself. Candidate: Sure. I'm a graphic designer, and I've been working in advertising for six years. In my current job, I design campaigns for food brands. Interviewer: Why do you want to leave? Candidate: I love my team, but I'd like to work on more digital projects. Interviewer: What's your biggest strength? Candidate: I'm very organised. I always meet deadlines, even when I'm working on three projects at the same time. Interviewer: And a weakness? Candidate: I find it hard to say no, so sometimes I take on too much. I'm learning to prioritise better.`,q:[
    ['What is the candidate’s job?',['a graphic designer','a project manager','a chef'],0],['How long has the candidate worked in advertising?',['three years','six years','ten years'],1],
    ['Why does the candidate want to leave?',['the salary is low','to work on more digital projects','the team is bad'],1],['What is the candidate’s biggest strength?',['creativity','being organised','speaking languages'],1],
    ['What is the weakness?',['finding it hard to say no','being late','working slowly'],0],TF('The candidate dislikes the current team.',false),
    GAP('I’ve been working in advertising ___ six years.','for'),
    'Answer the three interview questions about yourself (100–120 words): tell me about yourself, your biggest strength and a weakness.']},
  {l:'EN',lv:'B1',tp:'Escuta',t:'Homework · Health advice',i:'Lição de casa: ouça o podcast de saúde e responda.',a:`Welcome to Healthy Minutes. Today's topic: back pain. Millions of office workers suffer from it. So what should you do? First, you should get up and walk for a few minutes every hour. Second, you ought to check your chair and screen: the top of the screen should be at eye level. Third, you shouldn't sit with your legs crossed for long periods. And finally, you'd better see a doctor if the pain lasts more than two weeks, especially if it goes down your leg.`,q:[
    ['What is the topic?',['headaches','back pain','stress'],1],['How often should office workers walk?',['every hour','twice a day','once a week'],0],
    ['Where should the top of the screen be?',['at eye level','below your chin','above your head'],0],['What shouldn’t you do?',['sit with your legs crossed for long periods','drink water','take breaks'],0],
    ['When should you see a doctor?',['if the pain lasts more than two weeks','immediately','never'],0],
    ['You ___ check your chair. (conselho)',['ought to','ought','oughting to'],0],GAP('You’d ___ see a doctor if it gets worse.','better'),
    'Give advice to a friend who works long hours at a computer (80–100 words) using should, ought to and had better.']},
  {l:'EN',lv:'B1',tp:'Leitura',t:'Homework · The night train',i:`Read the story and answer.\n\nIt was almost midnight when Clara got on the night train to Vienna. She had bought her ticket weeks before and had booked a bed in a small cabin. When she opened the door, an old man was already sitting there, reading a newspaper. "I think there's a mistake," she said. The man smiled and showed her his ticket: same cabin, same bed. The conductor came and checked both tickets. The man had booked for the following night! He apologised and moved to another carriage. In the morning, at breakfast, he sat at Clara's table. He was a retired pianist, and by the time the train arrived in Vienna, he had invited her to his concert that evening.`,q:[
    ['Where was the train going?',['to Paris','to Vienna','to Berlin'],1],['Who was in the cabin?',['a young woman','an old man','the conductor'],1],
    ['What was the problem?',['the man had booked for the following night','Clara had lost her ticket','the cabin was dirty'],0],['What was the man’s job before he retired?',['a pianist','a conductor','a journalist'],0],
    TF('Clara had bought her ticket on the day of the trip.',false),['By the time they arrived, he ___ her to a concert.',['had invited','invited','has invited'],0],
    GAP('When she opened the door, the man ___ already sitting there.','was'),
    'Continue the story (80–100 words): what happened at the concert? Use the past perfect at least twice.']},
  {l:'EN',lv:'B1',tp:'Escuta',t:'Homework · A message for you',i:'Lição de casa: ouça a mensagem de voz e anote as informações.',a:`Hi, this is Karen Wilson from Bright Office Supplies. This message is for Mr Pedro Alves. I'm calling about your order of twenty office chairs. Unfortunately, the blue chairs are out of stock until the end of the month. We can send grey chairs this Friday at no extra cost, or you can wait for the blue ones. Could you call me back by Wednesday? My number is 020 7946 0381. Again, that's 020 7946 0381. Thank you, and have a nice day.`,q:[
    ['Who is the message for?',['Karen Wilson','Pedro Alves','Bright Office'],1],['What did he order?',['twenty office chairs','twenty desks','two chairs'],0],
    ['What is the problem?',['the blue chairs are out of stock','the order is late','the price changed'],0],['What can they send this Friday?',['grey chairs','blue chairs','nothing'],0],
    ['When should he call back?',['by Monday','by Wednesday','by Friday'],1],TF('The grey chairs cost more.',false),
    GAP('Could you call me ___ by Wednesday?','back'),
    'Write a voicemail message (60–80 words) to a supplier: who you are, why you’re calling, what you need and your phone number.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'B1',tp:'Phrasal verbs',t:'Homework · Off we go!',i:'Lição de casa: phrasal verbs de viagem.',q:[
    MAT('Ligue o phrasal verb ao sentido.',[['set off','start a journey'],['check in','register at a hotel or airport'],['look around','explore a place'],['take off','leave the ground (a plane)']]),
    PICK('Can you pick [*me up/up me] at the station? We [*set off/set up] at 5 a.m. Get [*off/out] the bus at the next stop. The plane [*took off/took out] late.'),
    SEQ('We set off early on Friday morning.\nWe checked in at the airport at 7.\nThe plane took off at 9.\nWe checked in at the hotel and looked around the old town.\nOn Sunday, we checked out and flew home.','Put the trip in order.'),
    KWT('I’ll take you to the airport and leave you there.','DROP','I’ll ___ at the airport.','drop you off'),
    FIX('Can you drop {off me|me off} at the corner?'),
    'Write about a trip (100–120 words) using at least 6 phrasal verbs from the lesson.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Done or did?',i:'Lição de casa: present perfect ou past simple?',q:[
    PICK('I [*’ve been/went] to Paris three times. I [*went/have been] there last year. Have you ever [*seen/saw] a whale? She [*lost/has lost] her keys yesterday.'),
    SORT(`Present perfect: ever, never, yet, so far, recently
Past simple: yesterday, last week, in 2019, two days ago`,'Que tempo combina com cada expressão?'),
    COMIC(`[aviao]
Ana: Have you ever been to Japan?
Tom: ___
---
Ana (feliz): Wow! What did you like most?`,['Yes, I have. I went there in 2022.','Yes, I went there ever.','Yes, I have been there in 2022.'],0),
    FIX('I {have seen|saw} that film last weekend.'),
    KWT('This is my first time in London.','BEEN','I ___ to London before.','have never been/’ve never been'),
    'Write 5 things you’ve done in your life and then say when you did 3 of them.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · For or since?',i:'Lição de casa: for e since com present perfect.',q:[
    SORT(`for: ten years, two weeks, a long time, ages
since: 2015, Monday, I was a child, last summer`),
    PICK('I’ve lived here [*since/for] 2010. She’s worked there [*for/since] five years. We haven’t seen him [*since/for] Christmas.'),
    KWT('I started working here three years ago.','FOR','I ___ three years.','have worked here for/’ve worked here for/have been working here for'),
    KWT('We met in 2018.','SINCE','We ___ 2018.','have known each other since/’ve known each other since'),
    FIX('I’ve known her {since|for} ten years.'),
    'Write 6 sentences about your life with for and since (job, home, hobbies, friends).']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · What if…?',i:'Lição de casa: primeiro e segundo condicional.',q:[
    PICK('If it [*rains/will rain] tomorrow, we’ll stay home. If I [*had/have] more money, I’d travel more. If you [*study/would study], you’ll pass.'),
    SORT(`Real (1st conditional): If it rains, I’ll take a taxi / If you call me, I’ll answer
Imaginary (2nd conditional): If I were rich, I’d buy an island / If I could fly, I’d go to work by air`),
    KWT('I don’t have a car, so I can’t drive to work.','HAD','If I ___ drive to work.','had a car, I could/had a car I could/had a car, I would'),
    COMIC(`[presente]
Leo: What would you do if you won the lottery?
Mia: ___
---
Leo (feliz): Can I come too?`,['I’d travel around the world!','I’ll travel around the world!','I travel around the world!'],0),
    FIX('If I {would be|were} you, I’d accept the job.'),
    'Write 3 sentences with the 1st conditional about tomorrow and 3 with the 2nd conditional about your dreams.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Guess who!',i:'Lição de casa: orações relativas (who, which, that, where).',q:[
    PICK('He’s the actor [*who/which] played Batman. It’s the city [*where/which] I was born. This is the book [*that/who] changed my life.'),
    ['“It’s a person ___ works in a hospital and looks after patients.”',['who','which','where'],0],
    ['“It’s a place ___ you can see animals from all over the world.”',['where','who','which'],0],
    KWT('I met a woman. She speaks seven languages.','WHO','I met a woman ___ seven languages.','who speaks'),
    FIX('That’s the restaurant {which|where} we had our first date.'),
    'Write 5 “Guess who / guess what” definitions with relative clauses (ex.: It’s a thing which you use to…).']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Isn’t it?',i:'Lição de casa: question tags.',q:[
    PICK('It’s a beautiful day, [*isn’t it/is it]? You don’t like coffee, [*do you/don’t you]? She can swim, [*can’t she/can she]? They went to Rome, [*didn’t they/did they]?'),
    MAT('Ligue a frase à tag.',[['You’re Brazilian,','aren’t you?'],['He hasn’t called,','has he?'],['We should go,','shouldn’t we?'],['I’m late,','aren’t I?']]),
    FIX('You live in Recife, {doesn’t you|don’t you}?'),
    ['Let’s go to the beach, ___?',['shall we','will we','don’t we'],0],
    'Write a short dialogue (8 lines) where two people check information with question tags.']},
  {l:'EN',lv:'B1',tp:'Phrasal verbs',t:'Homework · Phrasal verbs at home',i:'Lição de casa: phrasal verbs do dia a dia em casa.',q:[
    MAT('Ligue.',[['wake up','acordar'],['turn off','desligar'],['clean up','limpar, arrumar'],['run out of','ficar sem']]),
    PICK('Please turn [*off/out] the lights. We’ve run [*out of/off] milk. Can you pick [*it up/up it]? I need to throw [*away/out of] these old shoes.'),
    CLOZE('I [woke] up late, [got] dressed quickly and [put] on my jacket. Then I realised I had [run] out of coffee!','took, made'),
    FIX('The music is too loud. Can you turn {down it|it down}, please?'),
    KWT('I don’t have any more sugar.','RUN','I’ve ___ sugar.','run out of'),
    'Describe your evening routine at home (80 words) using 6 phrasal verbs.']},
  {l:'EN',lv:'B1',tp:'Vocabulário',t:'Homework · Bored or boring?',i:'Lição de casa: adjetivos com -ed e -ing.',q:[
    PICK('The film was [*boring/bored], so I was [*bored/boring]. I’m [*interested/interesting] in history. The news was [*shocking/shocked].'),
    SORT(`How I feel (-ed): bored, tired, excited, surprised
What causes it (-ing): boring, tiring, exciting, surprising`),
    FIX('I’m very {exciting|excited} about the trip!'),FIX('The class was really {interested|interesting}.'),
    KWT('The journey made me very tired.','TIRING','The journey ___ .','was very tiring'),
    'Describe a great day and a terrible day (80–100 words) using at least 6 -ed and -ing adjectives.']},
  {l:'EN',lv:'B1',tp:'Vocabulário',t:'Homework · Make or do: daily life',i:'Lição de casa: make e do no dia a dia.',q:[
    SORT(`make: a mistake, a decision, friends, dinner
do: homework, the dishes, exercise, your best`),
    PICK('I [*made/did] a big mistake. Can you [*do/make] me a favour? She [*does/makes] yoga every morning. Let’s [*make/do] a plan.'),
    FIX('I always {make|do} my homework after dinner.'),
    CLOZE('This morning I [did] some exercise, [made] breakfast and [did] the shopping.','took, had'),
    ODD('Which one goes with DO?',['a mistake','the laundry','a phone call','money'],1),
    'Write 8 sentences about your week using make and do.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Will, going to or present continuous?',i:'Lição de casa: as formas do futuro.',q:[
    PICK('Look at those clouds! It [*’s going to/will] rain. — The phone’s ringing! — I [*’ll/’m going to] get it. I [*’m meeting/will meet] Ana at 7 tonight. It’s all arranged.'),
    SORT(`Instant decision (will): I’ll have the soup, I’ll help you
Plan or evidence (going to): I’m going to study medicine, It’s going to rain
Arrangement (present continuous): I’m flying to Rio on Monday, We’re having dinner with Ana at 8`),
    COMIC(`[relogio]
Tom: What are you doing this weekend?
Bia: ___
---
Tom (feliz): Have a great trip!`,['I’m visiting my parents in Salvador.','I visit my parents.','I will to visit my parents.'],0),
    FIX('I think it {is raining|will rain} tomorrow.'),
    'Write about your next week (80–100 words): one arrangement, one plan, one prediction and one quick decision.']}
);

/* ===================== B2 ===================== */
CONT_ATIV.push(
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Quiet power',i:'Lição de casa: ouça o podcast sobre introversão e responda.',a:`Welcome back to Mind Matters. Today we're talking about introverts. First, a common myth: introverts are not necessarily shy. Shyness is a fear of social judgement, while introversion is about where you get your energy from. Introverts recharge by spending time alone; extroverts recharge by being with people. Many introverts are excellent public speakers, but they need quiet time afterwards. Research suggests that between a third and a half of people are introverts, yet many offices are designed for extroverts, with open-plan spaces and constant meetings. The solution? Workplaces that offer both: spaces for collaboration and quiet rooms for focused work.`,q:[
    ['What is the difference between shyness and introversion?',['shyness is a fear of judgement; introversion is about energy','they are the same','introverts never speak in public'],0],['How do introverts recharge?',['by spending time alone','by going to parties','by working more'],0],
    ['How many people are introverts, according to research?',['about 10%','between a third and a half','almost everyone'],1],['What does the speaker suggest for workplaces?',['only open-plan offices','both collaborative and quiet spaces','working from home only'],1],
    TF('Introverts can’t be good public speakers.',false),['He never keeps his promises. He’s very ___.',['unreliable','disreliable','inreliable'],0],
    GAP('Don’t be so ___ (patient → oposto)! We’re nearly there.','impatient'),
    'Are you an introvert, an extrovert or an ambivert? Write 100–120 words with examples, using at least 5 personality adjectives.']},
  {l:'EN',lv:'B2',tp:'Leitura',t:'Homework · Who made my clothes?',i:`Read the article and answer.\n\nIn April 2013, the Rana Plaza building in Bangladesh collapsed. More than 1,100 garment workers were killed. The building housed factories that made clothes for well-known Western brands. The disaster led to the creation of Fashion Revolution, a global movement that asks one simple question: "Who made my clothes?". Every April, people post photos of their clothing labels and ask brands to reveal where and how their products are made. Since then, many brands have been pressured to publish lists of their factories, and safety agreements have been signed. However, campaigners say that most garment workers are still paid far less than a living wage, and that real change will only happen if consumers buy less and keep their clothes for longer.`,q:[
    ['What happened in 2013?',['a factory building collapsed in Bangladesh','a new brand was created','a law was passed'],0],['How many workers were killed?',['about 100','more than 1,100','more than 11,000'],1],
    ['What does Fashion Revolution ask?',['“Who made my clothes?”','“How much did it cost?”','“Where can I buy it?”'],0],['What have many brands been pressured to do?',['close their shops','publish lists of their factories','lower their prices'],1],
    TF('Campaigners say the problem has been completely solved.',false),['Most clothes ___ in Asia.',['are made','make','are making'],0],
    GAP('Many brands have ___ pressured to change.','been'),
    'Write an opinion paragraph (120–150 words): “Consumers have the power to change the fashion industry.” Use the passive at least three times.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Great inventions',i:'Lição de casa: voz passiva. Ouça e responda.',a:`Today's quiz: great inventions. The telephone was patented by Alexander Graham Bell in 1876, although some say it was invented earlier by an Italian, Antonio Meucci. The World Wide Web was created by Tim Berners-Lee in 1989, and it was given to the world for free. Penicillin was discovered by accident: Alexander Fleming noticed that bacteria were killed by a mould that had grown in his lab. And the microwave oven? It was invented after an engineer noticed that a chocolate bar in his pocket had been melted by a radar machine!`,q:[
    ['When was the telephone patented?',['1876','1889','1976'],0],['Who created the World Wide Web?',['Alexander Fleming','Tim Berners-Lee','Antonio Meucci'],1],
    ['How was penicillin discovered?',['by accident','after years of planned research','in a hospital'],0],['What gave the idea for the microwave oven?',['a melted chocolate bar','a broken radio','a hot sandwich'],0],
    TF('The World Wide Web was sold for a lot of money.',false),['Penicillin ___ by Fleming.',['was discovered','discovered','has discover'],0],
    GAP('The chocolate had ___ melted by a radar machine.','been'),
    'Write about an invention you can’t live without (100 words): when and by whom it was invented, and how it is used today. Use the passive.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Did you hear?',i:'Lição de casa: reported speech. Ouça a fofoca e responda.',a:`A: Did you hear about Laura? B: No, what happened? A: She told me she was leaving the company! B: Really? Why? A: She said she had got a job in Canada and that she was moving there in March. B: Wow. Does the boss know? A: Yes. Laura said she had told him on Monday and that he had been very understanding. B: And her husband? A: She said he was going to work from home, so it wasn't a problem. She asked me not to tell anyone… so don't tell anyone!`,q:[
    ['What did Laura say?',['she was leaving the company','she was getting married','she was retiring'],0],['Where is she moving?',['to Australia','to Canada','to the USA'],1],
    ['When did she tell the boss?',['on Monday','on Friday','last month'],0],['What is her husband going to do?',['work from home','stay in Brazil','look for a job'],0],
    TF('Laura asked A to tell everyone.',false),['She said she ___ a job in Canada.',['had got','has got','gets'],0],
    ['She asked me ___ anyone.',['not to tell','to not telling','don’t tell'],0],
    'Report a conversation you had this week (100–120 words) using said, told, asked and reported questions.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · The empty flat',i:'Lição de casa: modals of deduction. Ouça o mistério e responda.',a:`When Detective Ross arrived at the flat, the front door was open. There was nobody inside. A cup of tea on the table was still warm, so the owner can't have left long before. The TV was on, but the sound was off. There were two plates in the sink, which means he must have had a visitor. A suitcase was missing from the wardrobe, so he might have gone on a trip, but his passport was still on the desk. The window was broken from the inside. "He must have left in a hurry," said Ross. "And he can't have gone far without his passport."`,q:[
    ['Why does Ross think the owner left recently?',['the tea was still warm','the TV was on','the door was open'],0],['Why does he think there was a visitor?',['there were two plates in the sink','the window was broken','a suitcase was missing'],0],
    ['What was still on the desk?',['the passport','the suitcase','the phone'],0],['How was the window broken?',['from the inside','from the outside','it wasn’t broken'],0],
    ['He ___ left in a hurry. (certeza)',['must have','can’t have','should have'],0],['He ___ gone far without his passport.',['can’t have','must have','would have'],0],
    GAP('He ___ have gone on a trip, but we’re not sure.','might|may|could'),
    'Write the end of the mystery (100–120 words). What happened? Use must have, might have and can’t have.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Podcast: the power of naps',i:'Lição de casa: ouça o podcast e responda.',a:`Welcome to Science Bites. Today: naps. In many cultures, an afternoon nap is perfectly normal, but in most offices it's still seen as lazy. Research tells a different story. A NASA study found that a forty-minute nap improved pilots' performance by thirty-four percent. However, timing matters. A short nap of ten to twenty minutes gives you energy without that groggy feeling. If you sleep for more than thirty minutes, you may enter deep sleep and wake up feeling worse. And the best time? Usually early afternoon, between one and three. Some companies, like Google, have even installed nap pods for their employees.`,q:[
    ['How are naps seen in most offices?',['as lazy','as healthy','as normal'],0],['How much did pilots’ performance improve after a nap?',['14%','34%','43%'],1],
    ['What is the ideal length for a short nap?',['10–20 minutes','40–60 minutes','two hours'],0],['What can happen if you sleep more than 30 minutes?',['you may wake up feeling worse','you feel more creative','nothing'],0],
    ['When is the best time for a nap?',['early afternoon','late evening','early morning'],0],TF('Some companies have installed nap pods.',true),
    GAP('If you sleep too long, you may wake ___ feeling groggy.','up'),
    'Should companies encourage naps? Write 120–150 words with arguments for and against.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Podcast: the gig economy',i:'Lição de casa: ouça o podcast sobre trabalho por aplicativo e responda.',a:`Today we're discussing the gig economy: jobs like delivery riders, app drivers and freelancers who are paid per task instead of receiving a salary. Supporters say it offers flexibility: you can choose when and how much you work. For students and parents, that can be a big advantage. Critics, however, point out that gig workers usually don't get holiday pay, sick pay or pensions. Many work long hours for low pay, and an algorithm, not a manager, decides how much work they get. Some countries, like Spain, have passed laws that classify delivery riders as employees. The debate is far from over.`,q:[
    ['How are gig workers paid?',['per task','a monthly salary','by the hour only'],0],['What is the main advantage, according to supporters?',['flexibility','high salaries','free training'],0],
    ['What do gig workers usually NOT get?',['holiday pay and pensions','customers','smartphones'],0],['Who decides how much work they get?',['a manager','an algorithm','the government'],1],
    ['What has Spain done?',['classified delivery riders as employees','banned delivery apps','reduced taxes'],0],TF('The speaker says the debate is over.',false),
    GAP('Gig workers are paid ___ task.','per'),
    'Would you work in the gig economy? Write 120–150 words discussing the advantages and disadvantages, using linkers (however, whereas, on the other hand).']},
  {l:'EN',lv:'B2',tp:'Escrita',t:'Homework · A formal enquiry',i:`Read the email and answer.\n\nDear Sir or Madam,\n\nI am writing to enquire about the English courses advertised on your website. I am particularly interested in the evening Business English course, as I work full-time and would only be able to attend after 6 p.m.\n\nCould you please let me know how many students there are in each group and whether the course includes a final certificate? I would also be grateful if you could send me information about the fees and any discounts for early registration.\n\nI look forward to hearing from you.\n\nYours faithfully,\nMariana Lopes`,q:[
    ['Why is Mariana writing?',['to complain','to ask for information','to cancel a course'],1],['Which course is she interested in?',['the evening Business English course','a weekend course','an online course'],0],
    ['Why can she only attend after 6 p.m.?',['she works full-time','she studies in the morning','she lives far away'],0],['What does she ask about?',['group size, certificate, fees and discounts','teachers’ names','the school’s address'],0],
    TF('The email starts with “Dear Sir or Madam” because she doesn’t know the name of the person.',true),
    ['Which closing matches “Dear Sir or Madam” in British English?',['Yours faithfully','Cheers','Lots of love'],0],
    GAP('I would be ___ if you could send me more information.','grateful'),
    'Write a formal email of enquiry (120–150 words) to a hotel or school asking for three pieces of information.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'B2',tp:'Vocabulário',t:'Homework · Make it, do it, take it',i:'Lição de casa: collocations com make, do, take e have.',q:[
    SORT(`make: a mistake, a decision, money
do: homework, business, your best
take: a photo, a risk, a break
have: a shower, a look, a chat`),
    PICK('Sorry, I [*made/did] a mistake. Could you [*do/make] me a favour? Let’s [*take/make] a break. Can I [*have/take] a look?'),
    FIX('Let’s {make|take} a photo here!'),FIX('I always {make|do} my best.'),
    KWT('I decided quickly.','DECISION','I ___ quickly.','made a decision'),
    CLOZE('Yesterday I [had] breakfast early, [did] some exercise and [took] the train to work.','made, gave'),
    'Write about your week (100–120 words) using at least 12 collocations with make, do, take and have.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · Passive transformations',i:'Lição de casa: voz passiva em vários tempos.',q:[
    KWT('Someone stole my bike yesterday.','WAS','My bike ___ yesterday.','was stolen'),
    KWT('They are building a new hospital.','BEING','A new hospital ___ .','is being built'),
    KWT('They will announce the results tomorrow.','BE','The results ___ tomorrow.','will be announced'),
    KWT('Someone has cleaned the room.','BEEN','The room ___ .','has been cleaned'),
    PICK('The emails [*are sent/send] every morning. The bridge [*was built/built] in 1900. The winner [*will be chosen/will choose] by the public.'),
    FIX('The report {has written|has been written} by the manager.'),
    'Describe how something is made or done in your job or city (100 words) using the passive in three different tenses.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · If I had known…',i:'Lição de casa: third conditional.',q:[
    PICK('If I [*had known/knew], I would have called you. We [*would have won/would win] if we had played better. If she hadn’t missed the bus, she [*wouldn’t have been/wouldn’t be] late.'),
    KWT('I didn’t study, so I failed.','HAD','If I ___ , I wouldn’t have failed.','had studied'),
    KWT('It rained, so we didn’t go to the beach.','RAINED','If it ___ , we would have gone to the beach.','hadn’t rained/had not rained'),
    SEQ('I woke up late.\nI missed the bus.\nI arrived late for the interview.\nI didn’t get the job.','Put the chain of events in order.'),
    FIX('If I {would have seen|had seen} you, I would have said hello.'),
    'Write a chain of 5 third conditional sentences about a day when things went wrong (If I hadn’t…, I wouldn’t have…).']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · Verb patterns',i:'Lição de casa: gerund ou infinitive?',q:[
    SORT(`+ -ing: enjoy, avoid, finish, mind, suggest
+ to: decide, hope, promise, refuse, afford`),
    PICK('I enjoy [*reading/to read]. She decided [*to move/moving] abroad. Do you mind [*waiting/to wait]? We can’t afford [*to buy/buying] a car.'),
    PICK('Remember [*to lock/locking] the door when you leave. I’ll never forget [*seeing/to see] the sea for the first time. He stopped [*smoking/to smoke] last year.'),
    FIX('I’m looking forward to {meet|meeting} you.'),
    KWT('Why don’t we go to the cinema?','SUGGESTED','She ___ to the cinema.','suggested going'),
    'Write 8 sentences about your habits and plans using enjoy, avoid, decide, hope, can’t stand, look forward to, remember and stop.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · Which, by the way',i:'Lição de casa: orações relativas não definidoras.',q:[
    PICK('My brother, [*who/that] lives in Rome, is a chef. Lisbon, [*which/that] is the capital of Portugal, is very sunny. The hotel, [*where/which] we stayed last year, has closed.'),
    KWT('My mother is a doctor. She works in São Paulo.','WHO','My mother, ___ in São Paulo, is a doctor.','who works'),
    KWT('He failed the exam. This surprised everyone.','WHICH','He failed the exam, ___ everyone.','which surprised'),
    FIX('Paris, {that|which} I visited last year, was amazing.'),
    TF('In non-defining relative clauses, we can use “that”.',false),
    'Write a paragraph about your family or city (100 words) with at least 4 non-defining relative clauses (with commas!).']},
  {l:'EN',lv:'B2',tp:'Escrita',t:'Homework · Linkers in action',i:'Lição de casa: conectores de contraste, causa e consequência.',q:[
    PICK('[*Although/Despite] it was late, we kept working. [*Despite/Although] the rain, the event was a success. The company lost money. [*As a result/Despite], it closed two shops.'),
    SORT(`Contrast: although, despite, however, whereas
Cause: because of, due to, since
Result: therefore, as a result, consequently`),
    KWT('It was cold, but we went swimming.','ALTHOUGH','___ cold, we went swimming.','Although it was'),
    KWT('The flight was cancelled because of the storm.','DUE','The flight was cancelled ___ the storm.','due to'),
    FIX('{Despite of|Despite} the price, it sold very well.'),
    'Write an essay paragraph (120–150 words): “Social media does more harm than good.” Use six different linkers.']},
  {l:'EN',lv:'B2',tp:'Vocabulário',t:'Homework · Word building',i:'Lição de casa: formação de palavras.',q:[
    MAT('Ligue o verbo ao substantivo.',[['decide','decision'],['improve','improvement'],['succeed','success'],['explain','explanation']]),
    PICK('Her [*ability/able] to stay calm is amazing. It was a very [*successful/success] project. He answered [*politely/polite]. The [*unemployment/unemployed] rate is rising.'),
    CLOZE('The [government] made a [decision] to invest in [education].','govern, decide'),
    FIX('Thanks for your {explain|explanation}.'),
    ODD('Which word is NOT a noun?',['happiness','freedom','careful','development'],2),
    'Choose 5 verbs and write the noun, adjective and adverb of each (ex.: create – creation – creative – creatively). Then use them in 5 sentences.']},
  {l:'EN',lv:'B2',tp:'Phrasal verbs',t:'Homework · Phrasal verbs at the office',i:'Lição de casa: phrasal verbs do trabalho.',q:[
    MAT('Ligue.',[['put off','adiar'],['carry out','realizar'],['set up','montar, criar'],['follow up','dar seguimento']]),
    PICK('We need to [*put off/put out] the meeting until Friday. Can you [*follow up/follow on] with the client? They [*set up/set off] a new company last year. Let’s [*go over/go on] the numbers again.'),
    KWT('We have to postpone the launch.','PUT','We have to ___ the launch.','put off'),
    KWT('The team did a survey of 500 customers.','CARRIED','The team ___ a survey of 500 customers.','carried out'),
    FIX('Could you look {in|into} the problem and tell me tomorrow?'),
    'Write an email to your team (100 words) using 6 phrasal verbs from the lesson.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · By this time next year',i:'Lição de casa: future continuous e future perfect.',q:[
    PICK('This time tomorrow, I [*’ll be lying/’ll have lain] on a beach. By Friday, we [*’ll have finished/’ll be finishing] the project. By 2030, I [*’ll have been working/’ll work] here for ten years.'),
    KWT('I’m going to finish the report before Monday.','BY','I ___ the report by Monday.','will have finished/’ll have finished'),
    KWT('At 8 p.m. I’m going to be in the middle of dinner.','HAVING','At 8 p.m. I ___ dinner.','will be having/’ll be having'),
    FIX('By next year, she {will finish|will have finished} her degree.'),
    TF('“Will you be using the car tonight?” is a polite way to ask about someone’s plans.',true),
    'Write about your life in 5 and 10 years (100–120 words) using the future continuous and the future perfect.']},
  {l:'EN',lv:'B2',tp:'Expressões',t:'Homework · Keep an eye on it',i:'Lição de casa: expressões idiomáticas com partes do corpo.',q:[
    MAT('Ligue a expressão ao sentido.',[['keep an eye on','watch carefully'],['cost an arm and a leg','be very expensive'],['pull someone’s leg','joke, tease'],['give someone a hand','help someone']]),
    PICK('Can you [*give me a hand/give me a foot] with these boxes? He’s not serious, he’s just [*pulling your leg/pulling your arm]. That car [*cost an arm and a leg/cost a head].'),
    ['“I’m all ears” means…',['I’m listening carefully','I have big ears','I can’t hear'],0],
    ['“It’s on the tip of my tongue” means…',['I almost remember it','I don’t like the taste','I said something rude'],0],
    FIX('Could you keep an {eyes|eye} on my bag for a minute?'),
    'Write a short story (100 words) using at least 5 body-part idioms.']}
);
/* ===================== C1 ===================== */
CONT_ATIV.push(
  {l:'EN',lv:'C1',tp:'Trabalho',t:'Homework · Lead the way',i:'Lição de casa: ouça a entrevista sobre liderança e responda.',a:`Interviewer: You've led teams in three countries. What have you learnt about leadership? Leader: Mainly that there's no single right style. Early in my career, I was quite autocratic: I made every decision myself, and morale was terrible. Then I swung the other way and gave the team complete freedom, which led to chaos. What works, in my experience, is empowering people while being clear about the goals. Interviewer: What about crises? Leader: In a crisis, people want direction, so I become more decisive. But once things calm down, I step back and let the team lead. The hardest part is admitting when you're wrong. Arguably, that's what builds trust.`,q:[
    ['What was the leader like early in their career?',['autocratic','laissez-faire','democratic'],0],['What happened when they gave the team complete freedom?',['it led to chaos','morale improved','profits rose'],0],
    ['What works best, in their experience?',['empowering people with clear goals','making all decisions alone','avoiding goals'],0],['What do people want in a crisis?',['direction','freedom','more meetings'],0],
    ['According to the leader, what builds trust?',['admitting when you’re wrong','never changing your mind','working longer hours'],0],
    TF('The leader believes there is one right leadership style.',false),
    GAP('A good leader ___ (empower) the team to make decisions.','empowers'),
    'Describe the best and worst leaders you have worked or studied with (150–180 words), using vocabulary from the lesson and nuanced language.']},
  {l:'EN',lv:'C1',tp:'Escuta',t:'Homework · Lecture: urban gardens',i:'Lição de casa: ouça o trecho da palestra e responda.',a:`Good afternoon. Today I'd like to look at urban gardening, which has grown remarkably over the last decade. Rooftop farms, community allotments and vertical gardens are no longer niche projects. Their benefits are well documented: they reduce urban heat, improve air quality and, perhaps less obviously, strengthen social ties between neighbours. That said, we should be cautious about overstating their impact on food security. Studies suggest that even the most ambitious city would struggle to grow more than a small fraction of the food it consumes. Their real value, arguably, lies elsewhere: in education, wellbeing and reconnecting city dwellers with where their food comes from.`,q:[
    ['What has grown remarkably over the last decade?',['urban gardening','urban traffic','food prices'],0],['Which benefit is described as “less obvious”?',['stronger social ties','lower heat','cleaner air'],0],
    ['What should we be cautious about?',['overstating the impact on food security','the cost of seeds','the risk of pollution'],0],['According to the speaker, where does the real value lie?',['education, wellbeing and reconnection with food','feeding entire cities','making money'],0],
    TF('The speaker believes cities can grow most of their own food.',false),
    ['“That said” in the lecture introduces…',['a contrast','an example','a conclusion'],0],
    GAP('Studies ___ that cities would struggle to grow much of their food. (sugerem)','suggest'),
    'Summarise the lecture in 80–100 words, using formal language and at least two hedging expressions.']},
  {l:'EN',lv:'C1',tp:'Escuta',t:'Homework · Podcast: the future of work',i:'Lição de casa: ouça o podcast e responda.',a:`Host: Our guest today studies the future of work. Is the office dead? Guest: Not dead, but its purpose has changed. Before the pandemic, the office was where work happened. Now it's increasingly where collaboration happens. Focused work is often done better at home. Host: And the four-day week? Guest: The trials are promising, but I'd be wary of treating it as a universal solution. It works well in knowledge work; it's much harder in hospitals or shops. Host: What skill will matter most in ten years? Guest: Adaptability, without a doubt. Many of the jobs our children will do haven't been invented yet. Being able to learn, unlearn and relearn will be essential.`,q:[
    ['According to the guest, what is the office increasingly for?',['collaboration','focused work','storing documents'],0],['What does the guest say about the four-day week?',['it’s not a universal solution','it works everywhere','it has failed'],0],
    ['Where is the four-day week harder to apply?',['in hospitals and shops','in tech companies','in offices'],0],['Which skill will matter most?',['adaptability','coding','public speaking'],0],
    TF('The guest believes the office is completely dead.',false),
    ['“I’d be wary of…” means…',['I’d be careful about…','I’d be excited about…','I’d recommend…'],0],
    GAP('Many future jobs haven’t been ___ yet.','invented'),
    'Write a response (150–180 words): “Remote work will become the norm for most professions.” Agree or disagree with nuance.']},
  {l:'EN',lv:'C1',tp:'Escuta',t:'Homework · Interview: a marine biologist',i:'Lição de casa: ouça a entrevista e responda.',a:`Interviewer: What drew you to marine biology? Biologist: Growing up in a fishing village, I was fascinated by the sea, but also worried by how much it was changing. By the time I was a teenager, the fishermen were complaining that the catch had halved. Interviewer: What's the biggest threat to the oceans today? Biologist: It's hard to single out one. Overfishing, plastic and warming waters all interact. Coral reefs, for instance, are bleaching because of rising temperatures, and that affects thousands of species. Interviewer: Is there any reason for hope? Biologist: Definitely. Where marine protected areas have been properly enforced, fish populations have recovered remarkably quickly, sometimes within a decade.`,q:[
    ['Where did the biologist grow up?',['in a fishing village','in a big city','on a farm'],0],['What were the fishermen complaining about?',['the catch had halved','the weather','low prices'],0],
    ['What does the biologist say about the biggest threat?',['it’s hard to single out one','it’s definitely plastic','there are no threats'],0],['Why are coral reefs bleaching?',['rising temperatures','overfishing','tourism'],0],
    ['What happened in well-enforced marine protected areas?',['fish populations recovered','fishing increased','coral disappeared'],0],TF('The biologist sees no reason for hope.',false),
    GAP('It’s hard to ___ out one single threat.','single'),
    'Write a short article (150 words) about an environmental problem you care about, including a cause, an effect and a reason for hope.']},
  {l:'EN',lv:'C1',tp:'Leitura',t:'Homework · The slow movement',i:`Read the article and answer.\n\nIt began in 1986, when a fast-food chain announced plans to open a restaurant near the Spanish Steps in Rome. In protest, journalist Carlo Petrini founded Slow Food, a movement dedicated to local, traditional and unhurried eating. Decades later, "slow" has become a philosophy applied to almost everything: slow travel, slow fashion, even slow cities, known as cittaslow, which limit traffic and protect local businesses. Its advocates insist the movement is not about doing everything at a snail's pace, but about doing things at the right speed: savouring rather than rushing. Critics counter that slowness is a privilege. Not everyone, they argue, can afford to spend three hours cooking or to take the train across a continent. Nonetheless, the movement's central question remains compelling: what are we rushing towards?`,q:[
    ['What triggered the creation of Slow Food?',['plans for a fast-food restaurant in Rome','a book by Petrini','a food scandal'],0],['What are cittaslow?',['cities that limit traffic and protect local businesses','slow trains','restaurants'],0],
    ['According to its advocates, the movement is about…',['doing things at the right speed','doing everything very slowly','avoiding technology'],0],['What do critics argue?',['slowness is a privilege','it’s too fast','it’s too cheap'],0],
    TF('The writer concludes that the movement’s central question is irrelevant.',false),
    ['“Nonetheless” in the last sentence introduces…',['a contrast','an addition','an example'],0],
    GAP('Critics ___ that slowness is a privilege. (argumentam em resposta)','counter'),
    'Write an opinion piece (180–200 words): “Is a slower life a luxury or a necessity?” Use formal register and at least four discourse markers.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · Say it formally',i:'Lição de casa: registro formal e informal.',q:[
    MAT('Ligue o informal ao formal.',[['get','obtain'],['ask about','enquire about'],['need','require'],['put off','postpone']]),
    KWT('We’ll let you know soon.','INFORMED','You will ___ in due course.','be informed'),
    KWT('Can you help me?','GRATEFUL','I would ___ assist me.','be grateful if you could'),
    KWT('We need to put off the meeting.','POSTPONE','It is necessary ___ the meeting.','to postpone'),
    SORT(`Formal: assist, obtain, require, Yours faithfully
Informal: help, get, need, Cheers`),
    FIX('{Hey|Dear} Mr Thompson, I am writing to enquire about the vacancy.'),
    'Rewrite this message in formal English (80–100 words): “Hi! Got your email. We can’t do the meeting on Monday, can we do Wednesday? Also can you send the numbers before? Thanks!”']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · Inversion drills',i:'Lição de casa: inversão para ênfase.',q:[
    KWT('I have never seen such a beautiful place.','NEVER','___ such a beautiful place.','Never have I seen'),
    KWT('As soon as we arrived, it started to rain.','SOONER','No ___ than it started to rain.','sooner had we arrived'),
    KWT('She didn’t realise how important the letter was.','LITTLE','___ how important the letter was.','Little did she realise/Little did she know'),
    KWT('If you need any help, please call us.','SHOULD','___ any help, please call us.','Should you need'),
    PICK('Rarely [*have I eaten/I have eaten] such good food. Not only [*did he arrive/he arrived] late, but he also forgot the documents. Only then [*did I understand/I understood] the problem.'),
    FIX('Under no circumstances {you should|should you} share your password.'),
    'Write the opening of a dramatic short story (120–150 words) using at least four inversions.']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · Cleft it!',i:'Lição de casa: cleft sentences.',q:[
    KWT('I need a long holiday.','WHAT','___ a long holiday.','What I need is'),
    KWT('Ana broke the window, not Tom.','IT','___ broke the window.','It was Ana who/It was Ana that'),
    KWT('The noise really annoys me.','THING','The ___ the noise.','thing that really annoys me is/thing that annoys me is'),
    KWT('I called the police.','DID','What I ___ the police.','did was call/did was to call'),
    PICK('[*What/That] I love about Rio is the beach. All I want [*is/are] some peace. It was in 2010 [*that/when] we first met.'),
    FIX('What I need {it is|is} more time.'),
    'Write about what really matters to you at work and in life (120–150 words) using five different cleft structures.']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · Mixed up',i:'Lição de casa: condicionais mistos.',q:[
    KWT('I didn’t take the job, so I don’t live in Dubai now.','WOULD','If I had taken the job, I ___ in Dubai now.','would live/would be living'),
    KWT('I’m not good at languages, so I didn’t get the job.','HAD','If I ___ good at languages, I would have got the job.','were/was'),
    KWT('Your help saved me from failing.','FOR','But ___ , I would have failed.','for your help'),
    PICK('If I [*had saved/saved] more, I would be on holiday now. If he [*weren’t/hadn’t been] so shy, he would have spoken to her. If you [*had listened/listened] to me, we wouldn’t be lost now.'),
    FIX('If I {would have studied|had studied} medicine, I would be a doctor now.'),
    'Write about three decisions that shaped your life (150 words) using mixed conditionals in both directions.']},
  {l:'EN',lv:'C1',tp:'Vocabulário',t:'Homework · Strong collocations',i:'Lição de casa: collocations avançadas.',q:[
    MAT('Ligue para formar collocations.',[['bitterly','disappointed'],['highly','unlikely'],['deeply','concerned'],['strongly','recommend']]),
    PICK('The results were [*highly/deeply] unlikely. I was [*bitterly/strongly] disappointed. We [*strongly/highly] recommend this hotel. She was [*deeply/bitterly] moved by the film.'),
    SORT(`heavy: traffic, rain, smoker
strong: coffee, wind, accent
high: price, expectations, risk`),
    FIX('There was a lot of {strong|heavy} traffic on the way.'),
    ODD('Which word does NOT go with “make”?',['a decision','an effort','a mistake','a risk'],3,[],'We TAKE a risk.'),
    'Write a short review of a film, book or restaurant (120 words) using at least 8 strong collocations.']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · Academic hedging',i:'Lição de casa: hedging na escrita acadêmica.',q:[
    PICK('The data [*suggest/prove] that the treatment may be effective. It [*seems likely/is sure] that prices will rise. This [*could potentially/definitely will] reduce costs.'),
    KWT('Social media causes anxiety in teenagers.','MAY','Social media ___ anxiety in teenagers.','may contribute to/may cause'),
    KWT('Everyone agrees with this theory.','WIDELY','This theory is ___ .','widely accepted'),
    SORT(`Hedged: tends to, appears to, it could be argued that
Too strong: always, proves, everyone knows`),
    FIX('The study {proves|suggests} that sleep may affect memory.'),
    'Rewrite this paragraph in an academic, hedged style (100–120 words): “Video games make children violent. Everybody knows that. Studies prove it. Parents must ban them.”']},
  {l:'EN',lv:'C1',tp:'Expressões',t:'Homework · Money talks',i:'Lição de casa: expressões idiomáticas sobre dinheiro.',q:[
    MAT('Ligue a expressão ao sentido.',[['make ends meet','have just enough money'],['break the bank','cost too much'],['a rip-off','something too expensive'],['be in the red','owe money']]),
    PICK('One coffee won’t [*break the bank/break the money]. That restaurant was a total [*rip-off/rip-out]. They’re struggling to [*make ends meet/meet the ends].'),
    ['“Money doesn’t grow on trees” means…',['money is limited, so be careful','trees are valuable','you should plant trees'],0],
    ['If a company is “in the black”, it is…',['making a profit','losing money','closed'],0],
    FIX('After paying the rent, I’m always {on the red|in the red} at the end of the month.'),
    'Write a short dialogue (8–10 lines) between two friends talking about money, using at least five idioms.']},
  {l:'EN',lv:'C1',tp:'Vocabulário',t:'Homework · Word families',i:'Lição de casa: formação de palavras (C1).',q:[
    PICK('The project was a [*resounding/resound] success. His [*reluctance/reluctant] to change was obvious. The new policy is highly [*controversial/controversy].'),
    MAT('Ligue.',[['sustain','sustainability'],['rely','reliability'],['justify','justification'],['vary','variety']]),
    CLOZE('The [unpredictability] of the market made the [decision] extremely [difficult].','predict, decide'),
    FIX('There is a growing {aware|awareness} of mental health issues.'),
    ODD('Which word is an adverb?',['notably','notable','note','notability'],0),
    'Choose 6 words from an article in your area and write their word family (noun, verb, adjective, adverb). Use 6 of the forms in sentences.']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · However, moreover, nonetheless',i:'Lição de casa: conectores para redação.',q:[
    PICK('The plan is expensive. [*Nonetheless/Moreover], it is worth the investment. The city is beautiful; [*moreover/nonetheless], it is very safe. Prices rose; [*consequently/whereas], sales fell.'),
    SORT(`Adding: moreover, furthermore, in addition
Contrasting: nonetheless, however, whereas
Concluding: in conclusion, all things considered, on balance`),
    KWT('Although the evidence is limited, the results are promising.','NONETHELESS','The evidence is limited. ___ , the results are promising.','Nonetheless'),
    FIX('{In the other hand|On the other hand}, remote work can be isolating.'),
    SEQ('In recent years, remote work has become increasingly common.\nOn the one hand, it offers flexibility and saves commuting time.\nOn the other hand, it can lead to isolation.\nOn balance, a hybrid model seems the most sensible solution.','Put the essay paragraph in order.'),
    'Write a four-paragraph essay plan (bullet points) and the full introduction (80–100 words) on a topic of your choice, using six connectors.']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · Key word transformations (3)',i:'Lição de casa: transformações no estilo das provas de Cambridge.',q:[
    KWT('It wasn’t necessary for you to bring a gift.','NEEDN’T','You ___ a gift.','needn’t have brought'),
    KWT('People say he is the richest man in town.','SAID','He ___ the richest man in town.','is said to be'),
    KWT('I regret not studying harder at school.','WISH','I ___ harder at school.','wish I had studied'),
    KWT('The film was so boring that I fell asleep.','SUCH','It was ___ that I fell asleep.','such a boring film'),
    KWT('The meeting was cancelled because of the strike.','RESULT','The meeting was cancelled ___ the strike.','as a result of'),
    KWT('It’s possible that they missed the train.','MIGHT','They ___ the train.','might have missed'),
    'Write 4 key word transformations of your own (original sentence, key word, new sentence) and send them to the teacher to solve.']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · Op-ed',i:'Lição de casa: escrita persuasiva (artigo de opinião).',q:[
    ['Which opening is the most effective for an opinion article?',['In this article I will talk about cities.','Every morning, two million people in São Paulo spend more time in traffic than with their children.','Cities are a topic.'],1],
    ['Which sentence uses a rhetorical question effectively?',['Is it right that a teacher earns less than a football player in one minute?','Do you know what I think?','What is a city?'],0],
    SORT(`Persuasive techniques: rhetorical question, statistic, anecdote, call to action
Weak writing: vague statements, repetition, “I think” in every sentence`),
    FIX('{In my opinion I think|In my view} public transport should be free.'),
    SEQ('Hook: a striking fact or story\nThesis: your clear position\nArguments with evidence\nCounterargument and rebuttal\nCall to action','Put the structure of an op-ed in order.'),
    'Write an op-ed (200–250 words) for a local newspaper about a problem in your city. Include a hook, three arguments, a counterargument and a call to action.']}
);
