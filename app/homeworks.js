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
/* ===================== lote 7 · homeworks das aulas novas ===================== */
CONT_ATIV.push(
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · Around the world',i:'Lição de casa: ouça quatro alunos de uma escola de idiomas em Londres e responda.',a:`Hello! I'm Yuki. I'm from Japan, from Osaka. I'm Japanese and I'm a nurse.
Hi, my name's Pedro. I'm from Portugal, but my mother is Brazilian. I speak Portuguese and a little English.
Hello, everybody. I'm Amira. I'm from Egypt. I'm Egyptian. I'm a student, and I'm twenty-two.
Hi! We're Tom and Kate. We aren't English, we're Irish! We're from Dublin, and we're teachers.`,q:[
    ['Where is Yuki from?',['China','Japan','Thailand'],1],['What is Yuki’s job?',['a nurse','a teacher','a student'],0],
    ['Where is Pedro’s mother from?',['Portugal','Spain','Brazil'],2],['How old is Amira?',['twelve','twenty-two','twenty'],1],
    TF('Tom and Kate are English.',false),TF('Tom and Kate are teachers.',true),
    GAP('Amira is from Egypt. She’s ___ .','Egyptian'),GAP('Yuki is from Japan. She’s ___ .','Japanese'),
    'Write about you and two friends or family members: name, country, nationality and job (6 sentences).']},
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · How much is it?',i:'Lição de casa: ouça a Lucy numa loja de presentes e responda.',a:`Shop assistant: Hello! Can I help you?
Lucy: Yes, please. How much is this mug?
Shop assistant: It's eight ninety-nine.
Lucy: And how much are these postcards?
Shop assistant: They're one fifty each, or five pounds for four.
Lucy: OK, I'd like the mug and four postcards, please.
Shop assistant: That's thirteen ninety-nine, please.
Lucy: Here you are. Twenty pounds.
Shop assistant: Thank you. Here's your change: six pounds and one penny.`,q:[
    ['How much is the mug?',['£8.99','£9.99','£8.19'],0],['How much is one postcard?',['£1.15','£1.50','£5'],1],
    ['How many postcards does Lucy buy?',['two','three','four'],2],['How much is the total?',['£13.99','£14.99','£30.99'],0],
    TF('Lucy pays with a twenty-pound note.',true),TF('Her change is six pounds and one penny.',true),
    GAP('How much ___ these postcards?','are'),GAP('How much ___ this mug?','is'),
    'Write a short dialogue in a shop: ask about the price of 3 things and buy one of them.']},
  {l:'EN',lv:'A1',tp:'Leitura',t:'Homework · A day in the life',i:'Read the text and answer.\n\nKai is a firefighter in Vancouver, Canada. He works three days a week, but his days are very long. He gets up at five o’clock, has a big breakfast and goes to the fire station by bike. He starts work at seven. At the station, he cleans the fire engine and checks the equipment. When there is a fire, he goes with his team very fast! He has lunch and dinner at the station with his colleagues. Kai doesn’t work on Fridays. On his days off, he plays ice hockey and watches films with his daughter.',q:[
    ['What is Kai’s job?',['a doctor','a firefighter','a police officer'],1],['How many days a week does he work?',['three','five','seven'],0],
    ['How does he go to work?',['by car','by bus','by bike'],2],['What time does he start work?',['at five','at six','at seven'],2],
    TF('Kai has lunch at home.',false),TF('He plays ice hockey on his days off.',true),
    GAP('Kai ___ (get) up at five o’clock.','gets'),GAP('He doesn’t ___ (work) on Fridays.','work'),
    'Write about the day of a person you know (6–8 sentences). Remember the -s: he works, she goes…']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Did you have fun?',i:'Lição de casa: ouça a conversa da Rosie com o Dan sobre as férias e responda.',a:`Rosie: Hi Dan! You look tired. Did you have a good holiday?
Dan: Hi Rosie! Yes, it was great, but I didn't sleep much. We went to Scotland.
Rosie: Scotland! Did you go to Edinburgh?
Dan: Yes, we stayed there for three days. Then we took a train to the Highlands.
Rosie: Did you see the Loch Ness monster?
Dan: Ha ha, no, we didn't! But we saw lots of deer, and we climbed a mountain.
Rosie: Was the weather OK?
Dan: It rained every day! But we didn't care. The food was amazing and the people were really friendly.`,q:[
    ['Where did Dan go on holiday?',['Ireland','Scotland','Wales'],1],['How long did they stay in Edinburgh?',['two days','three days','a week'],1],
    ['How did they get to the Highlands?',['by car','by bus','by train'],2],['What did they see in the Highlands?',['the Loch Ness monster','lots of deer','a castle'],1],
    TF('The weather was sunny.',false),TF('Dan liked the food.',true),
    GAP('Did you ___ (have) a good holiday?','have'),GAP('We ___ (not / see) the monster.','didn’t see|did not see'),
    'Write 6 questions with “did” to ask a friend about a trip, and then write your own answers about your last holiday.']},
  {l:'EN',lv:'B1',tp:'Leitura',t:'Homework · The more, the merrier',i:'Read the text and answer.\n\nAre big families happier? A recent survey asked 3,000 parents in the UK to compare their lives before and after having children. Parents with three or more children said their homes were not as quiet as before, and that they were not as rich as their friends with one child. However, they also said that, the more children they had, the more help they got: older children often looked after the younger ones. Parents of only children said their lives were as busy as before, but they worried more. One father said: “The bigger the family, the louder the dinner table, but it’s also the funniest.” Experts warn that every family is different from the next, so there is no perfect number.',q:[
    ['How many parents answered the survey?',['300','3,000','30,000'],1],
    ['What did parents with three or more children say?',['Their homes were as quiet as before.','They got more help from older children.','They were richer than their friends.'],1],
    ['Parents of only children said they…',['worried more.','had more free time.','were less busy.'],0],
    TF('The experts say three children is the perfect number.',false),TF('The father thinks big family dinners are noisy but fun.',true),
    GAP('My house is not as big ___ yours.','as'),GAP('The bigger the family, the ___ (loud) the dinner table.','louder'),
    ['“The more, the merrier” means…',['more people make it more fun','more money makes you happy','more work is better'],0],
    'Compare your life now with your life 5 years ago (100 words). Use as… as, not as… as and at least one “the more…, the more…”.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Pet peeves',i:'Lição de casa: ouça um trecho de podcast sobre manias que irritam e responda.',a:`Welcome back to Small Annoyances, the podcast about the little things that drive us crazy. This week, we asked listeners about their flatmates. Sarah from Leeds says her flatmate is always borrowing her clothes without asking, and he keeps leaving wet towels on the sofa. Raj from Bristol complains about a colleague who will reply all to every single email, even when the message is just "thanks". And my favourite: Jo from Glasgow says her husband would always hum the same song when they were dating. Now he's always whistling it. She says it's cute. Sometimes. So, what's your pet peeve? Send us a voice message!`,q:[
    ['What is the podcast about?',['big problems at work','small annoying habits','how to find a flatmate'],1],
    ['What does Sarah’s flatmate keep doing?',['leaving wet towels on the sofa','singing in the shower','eating her food'],0],
    ['What does Raj’s colleague do?',['arrives late','replies all to every email','talks loudly on the phone'],1],
    ['What did Jo’s husband do when they were dating?',['He would hum the same song.','He would whistle.','He would call her every night.'],0],
    TF('Jo finds her husband’s habit completely unbearable.',false),
    GAP('He keeps ___ (leave) wet towels on the sofa.','leaving'),GAP('She’s always ___ (borrow) my clothes!','borrowing'),
    ['“He will reply all to every email” shows…',['a typical (annoying) habit','a future plan','a promise'],0],
    'Write about two pet peeves (120 words): one at home and one at work or school. Use be always + -ing, keep + -ing and will.']},
  {l:'EN',lv:'B2',tp:'Leitura',t:'Homework · Office or home?',i:'Read the text and answer.\n\nWhen the pandemic forced millions of people to work from home, many predicted the death of the office. Five years later, the picture is more complicated. Most large companies now follow a hybrid model, with two or three days in the office. Supporters say it offers the best of both worlds: quiet, focused work at home and collaboration face to face. Critics argue that hybrid often combines the worst of both: people commute to the office only to spend the day on video calls with colleagues who stayed at home. Admittedly, there is no single answer. What seems clear is that flexibility has become one of the main reasons people choose, or leave, a job.',q:[
    ['What did many people predict during the pandemic?',['that offices would disappear','that everyone would move to the city','that video calls would end'],0],
    ['How many days in the office do most hybrid companies require?',['one','two or three','five'],1],
    ['What is the critics’ main complaint about hybrid work?',['It is too expensive.','People commute only to make video calls.','Nobody uses the office.'],1],
    TF('The writer says hybrid work is clearly the best model.',false),TF('Flexibility influences people’s job decisions.',true),
    GAP('___ , there is no single answer. (concessão)','Admittedly'),GAP('It offers the best of both ___ .','worlds'),
    ['“The worst of both” means…',['the negative sides of the two options','the two worst companies','the most difficult jobs'],0],
    'Write an opinion paragraph (150 words): Should companies let employees choose where they work? Use claim + reason + example and one concession (Admittedly… / That said…).']},
  {l:'EN',lv:'C1',tp:'Escuta',t:'Homework · Too many tourists',i:'Lição de casa: ouça um trecho de um debate de rádio sobre turismo em excesso e responda.',a:`Presenter: Joining me are Marta, a tour guide in Lisbon, and Professor Hughes, an urban geographer. Marta, is tourism ruining the city?
Marta: Ruining is a strong word. Tourism pays my rent, and that of thousands of others. That said, I've seen whole streets in the old town where nobody actually lives any more. Every flat is a short-term rental.
Professor Hughes: And that's the crux of it. It could be argued that the problem isn't tourists as such, but housing. When a flat earns three times more from visitors than from a local family, the market does the rest.
Presenter: So would a tourist tax help?
Professor Hughes: Arguably, only if the money goes back into housing. Otherwise it's largely symbolic.
Marta: I'd add that spreading visitors across the year and across neighbourhoods would make a real difference.`,q:[
    ['What is Marta’s job?',['a hotel manager','a tour guide','a city councillor'],1],
    ['According to Marta, what has happened in parts of the old town?',['Streets are empty of residents.','Shops have closed.','Prices have fallen.'],0],
    ['What does Professor Hughes see as the core problem?',['tourists’ behaviour','housing and short-term rentals','air pollution'],1],
    ['When would a tourist tax help, according to the professor?',['if it is very high','if the money goes into housing','if it applies all year'],1],
    TF('Marta thinks tourism is completely negative for Lisbon.',false),TF('Marta suggests spreading visitors across the year.',true),
    GAP('It could be ___ that the problem isn’t tourists as such.','argued'),GAP('___ , only if the money goes back into housing.','Arguably'),
    'Write a balanced essay (220–250 words): “Cities should limit the number of tourists.” Use hedging (it could be argued, arguably, to some extent) and propose two realistic measures.']}
);

if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · What are you wearing?',i:'Lição de casa: roupas, cores e I’m wearing.',q:[
    SORT(`Always plural: jeans, trousers, shorts, sunglasses
One thing: dress, skirt, jacket, hat`),
    PICK('Today I’m [*wearing/wear] a [*red T-shirt/T-shirt red] and black jeans. I love [*these/this] jeans!'),
    FIX('She’s wearing a {dress blue|blue dress}.'),FIX('My shoes {is|are} new.'),
    COMIC(`[armario]
Ana: What are you wearing to the party?
Leo: ___
---
Ana (feliz): Cool! I’m wearing my green dress.`,['My black jacket and white shirt.','Yes, I am.','I wear every day.'],0),
    ['___ you wearing a hat today?',['Are','Is','Do'],0],
    'What are you wearing today? Describe 5 clothes with their colours. Then describe the clothes of a person in your family.']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · How do you feel?',i:'Lição de casa: sentimentos com to be e because.',q:[
    PICK('I’m [*hungry/hunger]. Let’s eat! She [*is/has] thirsty. We’re [*bored/boring] because the film is long.'),
    SORT(`Good: happy, excited, relaxed
Bad: sad, angry, worried
Body: hungry, thirsty, tired`),
    FIX('I {have|am} cold. Can you close the window?'),FIX('He’s tired {so|because} he works a lot.'),
    COMIC(`[cansado]
Mia: Hi Sam! How are you?
Sam: ___
---
Mia: Oh no! Go to bed early tonight.`,['I’m really tired.','I’m fine, thanks!','Yes, I do.'],0),
    TF('“I’m boring” and “I’m bored” mean the same.',false),
    'Write 6 sentences: how do you feel on Monday morning, Friday night, on your birthday, at the dentist, in a traffic jam and on holiday? Use because.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · I’d love to!',i:'Lição de casa: like ou would like? Convites e pedidos.',q:[
    PICK('[*Would you like/Do you like] a cup of tea? — Yes, please. I [*like/’d like] swimming, I go every week. I’d like [*to visit/visiting] Japan one day.'),
    COMIC(`[ingresso]
Leo: Would you like to come to the cinema on Saturday?
Ana: ___
---
Leo (feliz): Great! I’ll buy the tickets.`,['I’d love to!','Yes, I like.','Yes, I do.'],0),
    KWT('I want a coffee.','LIKE','I ___ a coffee, please.','would like/’d like'),
    KWT('Do you want to dance?','WOULD','___ to dance?','Would you like'),
    FIX('Would you like {come|to come} with us?'),
    SORT(`Likes (always): I like cats, She likes jazz, They like running
Wants (now or future): I’d like a table for two, She’d like to travel, We’d like the bill`),
    'Write 3 invitations to friends (Would you like to…?) and their answers: one yes, one “I’d love to, but…”, one polite no.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Maybe, maybe not',i:'Lição de casa: may, might e could para possibilidade.',q:[
    PICK('Take a jacket. It [*might/mights/might to] get cold. I [*may not/don’t may] be home tonight. That [*can’t/might not] be Leo. He’s in Japan!'),
    KWT('Perhaps she is in a meeting.','MIGHT','She ___ a meeting.','might be in'),
    KWT('Maybe we won’t go to the party.','MAY','We ___ to the party.','may not go'),
    KWT('It’s possible that the train is late.','COULD','The train ___ late.','could be'),
    FIX('He might {to call|call} you later.'),
    SORT(`Possible: might, may, could
Impossible: can’t, couldn’t
Certain: will definitely, must`),
    'Write about your plans for next year (100 words): 3 things you will do, 3 things you might do and 2 things you might not do.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · Change of plans',i:'Lição de casa: futuro no passado.',q:[
    PICK('I [*was going to/am going to] call you, but my phone died. She said she [*would/will] help us. We [*were about to/were about] leave when it started to rain.'),
    KWT('We had agreed to meet at eight.','SUPPOSED','We ___ at eight.','were supposed to meet'),
    KWT('I planned to buy the tickets, but they sold out.','GOING','I ___ the tickets, but they sold out.','was going to buy'),
    KWT('She was just going to leave when he arrived.','ABOUT','She ___ when he arrived.','was about to leave'),
    FIX('I knew the exam {will|would} be difficult.'),
    SEQ('We were going to travel in April.\nThen the flights were cancelled.\nWe were about to give up.\nFinally, we went in September.','Put the story in order.'),
    'Write about a plan that didn’t happen (120 words). Use was going to, was supposed to, was about to and would.']},
  {l:'EN',lv:'B2',tp:'Pronúncia',t:'Homework · Stress shift',i:'Lição de casa: a sílaba forte que muda nas famílias de palavras.',q:[
    ['Where is the stress in “photographer”?',['PHO-to-gra-pher','pho-TO-gra-pher','pho-to-GRA-pher'],1],
    ['Where is the stress in “economic”?',['e-CO-no-mic','e-co-NO-mic','E-co-no-mic'],1],
    ['Where is the stress in “politician”?',['po-li-TI-cian','PO-li-ti-cian','po-LI-ti-cian'],0],
    ['Where is the stress in “reality”?',['RE-a-li-ty','re-A-li-ty','re-a-LI-ty'],1],
    SORT(`Stress moves: photographic, education, musician, democratic
Stress stays: hopeful, happiness, employment, comfortable`),
    ['“They want to reCORD a song.” Here, record is…',['a verb','a noun'],0],
    DIT('The photographer took a photograph of the politician.'),
    'Write 5 sentences, each with two words from the same family (e.g., economy / economic). Read them aloud and record yourself.']},
  {l:'EN',lv:'C1',tp:'Expressões',t:'Homework · Mind you…',i:'Lição de casa: marcadores do discurso no inglês falado.',q:[
    PICK('The flat is tiny. [*Mind you/As it happens], it’s right in the centre. “Do you know a good plumber?” “[*As it happens/Mind you], my brother is one.” [*Come to think of it/Having said that], I never paid you back!'),
    SORT(`Contrast: mind you, having said that, that said
Coincidence or fact: as it happens, actually, in fact
Changing topic: anyway, by the way, speaking of which`),
    FIX('{Actually|Currently} I live in Lisbon, but I’m moving next year.'),
    COMIC(`[conversa]
Bia: How was the new restaurant?
Leo: The food was amazing.
---
Leo: ___
Bia (surpreso): Really? How much?`,['Mind you, it wasn’t cheap.','As it happens, it was cheap.','Anyway, the food was amazing.'],0),
    KWT('The hotel was great. However, it was far from the beach.','MIND','The hotel was great. ___ , it was far from the beach.','Mind you'),
    'Write a short anecdote (150 words) about a trip or a day out, as if you were telling a friend, with at least 6 different discourse markers.']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · Needless worries',i:'Lição de casa: needn’t have, didn’t need to e deduções no passado.',q:[
    PICK('I [*needn’t have/didn’t need to] bought so much food: half the guests didn’t come. The meeting was cancelled, so I [*didn’t need to/needn’t have] go. The lights are off; they [*must have/must] gone out.'),
    KWT('It wasn’t necessary for us to hurry, but we did.','NEEDN’T','We ___ .','needn’t have hurried/need not have hurried'),
    KWT('I’m sure she forgot the meeting.','MUST','She ___ the meeting.','must have forgotten'),
    KWT('It’s impossible that he saw us; he was in Paris.','CAN’T','He ___ us; he was in Paris.','can’t have seen/cannot have seen'),
    FIX('She must {forgot|have forgotten} my birthday.'),
    SORT(`Did it, unnecessarily: needn’t have worried, needn’t have cooked
Probably didn’t do it: didn’t need to worry, didn’t have to cook`),
    'Write about a time you prepared too much for something (150 words). Use needn’t have, didn’t need to, must have and might have.']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · I do believe…',i:'Lição de casa: ênfase com do/did, clefts e intensificadores.',q:[
    KWT('I need a long holiday.','WHAT','___ a long holiday.','What I need is'),
    KWT('My sister found the solution.','WHO','It ___ the solution.','was my sister who found'),
    KWT('I called you yesterday, I promise!','DID','I ___ yesterday, I promise!','did call you'),
    KWT('I don’t mind at all.','LEAST','I don’t ___ .','mind in the least'),
    PICK('What [*on earth/at all] are you doing? There’s no evidence [*whatsoever/on earth]. That’s [*the very/the most very] thing I wanted.'),
    FIX('I {do loved|did love} that concert.'),
    'Write a short speech (150 words) defending a cause you care about. Use at least two clefts (What…is… / It is… that…), emphatic do and one intensifier.']},
  {l:'EN',lv:'C1',tp:'Pronúncia',t:'Homework · Fast speech',i:'Lição de casa: entender a fala rápida (elisão, assimilação e junções).',q:[
    DIT('I don’t know what you want.'),DIT('Did you see the last match?'),DIT('Most people don’t want to wait.'),
    ['“Didja get the tickets?” means…',['Did you get the tickets?','Do you get the tickets?','Did they get the tickets?'],0],
    ['In “ten pounds”, the n often sounds like…',['m','ng','d'],0],
    SORT(`Elision (a sound disappears): next door, last night, most people
Assimilation (a sound changes): handbag, ten pounds, good boy
Coalescence (t/d + you): did you, don’t you, would you`),
    'Choose a 30-second clip of a series or podcast. Write down 5 examples of fast speech you hear and their full forms.']}
);
/* ===================== lote 7 · homeworks extras (A1 a C1) ===================== */
CONT_ATIV.push(
  /* ---------- A1 ---------- */
  {l:'EN',lv:'A1',tp:'Leitura',t:'Homework · The new neighbour',i:'Read the text and answer.\n\nHi! I’m Sara, your new neighbour in flat 4. I’m from Chile, but I live here now with my husband, Mark, and our two children, Lucas and Ema. Lucas is seven and Ema is four. We’ve got a dog, too: his name is Bolt and he’s very friendly! Our flat is small, but there’s a nice balcony with lots of plants. Mark is a chef and I’m a teacher. Please come and say hello. Our door is the blue one!',q:[
    ['Where is Sara from?',['Spain','Chile','Mexico'],1],['How many children has she got?',['one','two','three'],1],
    ['How old is Ema?',['four','seven','fourteen'],0],['What is Mark’s job?',['a teacher','a doctor','a chef'],2],
    TF('Bolt is a cat.',false),TF('There’s a balcony in Sara’s flat.',true),
    GAP('We’ve ___ a dog.','got'),GAP('There ___ a nice balcony.','is|’s'),
    'Write a message to a new neighbour (6 sentences): who you are, your family, your home and your pets.']},
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · At the market',i:'Lição de casa: ouça a conversa na feira e responda.',a:`Seller: Good morning! What would you like?
Ben: Good morning. Can I have some tomatoes, please?
Seller: Sure. How many?
Ben: Six, please. And a kilo of apples.
Seller: Red or green?
Ben: Green, please. Have you got any bananas?
Seller: Sorry, no bananas today. We've got lovely oranges.
Ben: OK, four oranges, please. How much is that?
Seller: That's seven pounds, please.`,q:[
    ['How many tomatoes does Ben want?',['four','six','ten'],1],['What colour apples does he buy?',['red','green','yellow'],1],
    ['What fruit is not available?',['oranges','apples','bananas'],2],['How much does he pay?',['£7','£11','£4'],0],
    TF('Ben buys four oranges.',true),TF('The seller has got bananas today.',false),
    GAP('Can I ___ some tomatoes, please?','have'),GAP('Have you got ___ bananas?','any'),
    'Write your shopping list for the weekend (8 items with quantities) and a short dialogue at a market.']},
  {l:'EN',lv:'A1',tp:'Escuta',t:'Homework · Can you spell that?',i:'Lição de casa: ouça a ligação para uma academia e responda.',a:`Receptionist: City Gym, good afternoon.
Man: Hello. I'd like to book a swimming class, please.
Receptionist: Of course. What's your name?
Man: It's Daniel Okafor.
Receptionist: Can you spell your surname, please?
Man: Yes. O-K-A-F-O-R.
Receptionist: Thank you. And your phone number?
Man: It's oh-seven-nine-four-three, two-six-one, five-eight-eight.
Receptionist: Great. The class is on Tuesday at six thirty.
Man: Perfect. Thank you!`,q:[
    ['What does Daniel want to book?',['a yoga class','a swimming class','a tennis class'],1],
    ['How do you spell his surname?',['OKAFOR','OCAFOR','OKAFFOR'],0],
    ['When is the class?',['Tuesday at 6:30','Thursday at 6:30','Tuesday at 7:30'],0],
    TF('Daniel calls a gym.',true),['His phone number starts with…',['07943','07934','09743'],0],
    GAP('Can you ___ your surname, please?','spell'),GAP('I’d ___ to book a class.','like'),
    'Write your name, email and phone number as you would say them in English (for example: “oh-seven…”, “at”, “dot”).']},
  /* ---------- A2 ---------- */
  {l:'EN',lv:'A2',tp:'Leitura',t:'Homework · A walk in the mountains',i:'Read the text and answer.\n\nLast summer, Nina and her brother went hiking in the mountains near their town. It was a beautiful morning and the sun was shining. They were walking along a narrow path when they heard a strange noise. Nina stopped. Something was moving in the trees! Her brother was very scared, but Nina took out her phone and waited. Suddenly, a big brown deer jumped onto the path. It looked at them for a few seconds and then ran away. Nina didn’t take a photo because her hands were shaking, but they still talk about it every day.',q:[
    ['Where did Nina and her brother go?',['to the beach','to the mountains','to a park'],1],
    ['What was the weather like?',['rainy','sunny','cloudy'],1],
    ['What were they doing when they heard the noise?',['eating lunch','walking along a path','taking photos'],1],
    ['What animal did they see?',['a bear','a dog','a deer'],2],
    TF('Nina took a great photo of the animal.',false),TF('Her brother was scared.',true),
    GAP('The sun ___ (shine) when they started.','was shining'),GAP('They ___ (hear) a strange noise.','heard'),
    'Write a short story (80–100 words) about a surprise during a trip. Use the past continuous (I was walking…) and the past simple (when I saw…).']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Lost and found',i:'Lição de casa: ouça o diálogo no balcão de achados e perdidos e responda.',a:`Officer: Hello, can I help you?
Woman: Yes, I think I left my bag on the train this morning.
Officer: What does it look like?
Woman: It's a small black backpack with a red key ring.
Officer: Let me check… Is this one yours?
Woman: No, that one isn't mine. Mine is smaller.
Officer: What about this one?
Woman: Yes! That's mine! Thank you so much.
Officer: Can you tell me what's inside, please?
Woman: My laptop, a blue umbrella and my sister's book. The book is hers, not mine!`,q:[
    ['Where did the woman lose her bag?',['on a bus','on a train','in a café'],1],
    ['What does her bag look like?',['a big red backpack','a small black backpack','a small blue bag'],1],
    ['Was the first bag hers?',['Yes, it was.','No, it wasn’t.'],1],
    ['Whose book is in the bag?',['the officer’s','her sister’s','her friend’s'],1],
    TF('There is an umbrella in the bag.',true),
    GAP('That one isn’t ___ . Mine is smaller.','mine'),GAP('The book is ___ (her sister), not mine.','hers'),
    'Describe something you lost once: what it looked like, where you lost it and whether you found it (80 words). Use mine, yours, his, hers.']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Weekend plans',i:'Lição de casa: ouça a conversa sobre o fim de semana e responda.',a:`Jess: So, what are you going to do this weekend, Paulo?
Paulo: I'm going to visit my grandparents on Saturday. They live in the countryside.
Jess: Nice! Are you going to drive?
Paulo: No, I'm going to take the bus. It's cheaper. What about you?
Jess: I'm going to paint my bedroom. It's a horrible colour!
Paulo: What colour is it going to be?
Jess: Light green, I think. And on Sunday I'm going to relax and watch a film.
Paulo: Sounds perfect. I'm not going to do much on Sunday. Can I help you paint?
Jess: Really? Thanks! I'll make lunch.`,q:[
    ['Who is Paulo going to visit?',['his parents','his grandparents','his sister'],1],
    ['How is he going to travel?',['by car','by train','by bus'],2],
    ['What is Jess going to do on Saturday?',['paint her bedroom','watch a film','visit friends'],0],
    ['What colour is the bedroom going to be?',['light blue','light green','white'],1],
    TF('Jess is going to make lunch for Paulo.',true),
    GAP('What ___ you going to do this weekend?','are'),GAP('I’m going ___ take the bus.','to'),
    'Write about your plans for next weekend (6–8 sentences) with going to.']},
  {l:'EN',lv:'A2',tp:'Leitura',t:'Homework · Healthy habits',i:'Read the text and answer.\n\nDoctors say that small habits can make a big difference to our health. Most people should sleep seven to nine hours a night, but many adults usually sleep less than six. Experts also say we should drink water regularly and walk at least 30 minutes a day. You don’t have to go to the gym: you can take the stairs, get off the bus one stop early or walk to the supermarket. Another important habit is eating more vegetables. People who often cook at home usually eat better than people who always eat fast food. And finally: never look at your phone just before you sleep!',q:[
    ['How many hours should most people sleep?',['five to six','seven to nine','ten'],1],
    ['How long should we walk every day?',['at least 30 minutes','one hour','ten minutes'],0],
    ['According to the text, people who cook at home…',['usually eat better','spend more money','never eat fast food'],0],
    TF('You have to go to the gym to be healthy.',false),TF('It’s a bad idea to look at your phone before sleeping.',true),
    GAP('Many adults ___ (usually / sleep) less than six hours.','usually sleep'),GAP('You ___ go to the gym. (não é obrigatório)','don’t have to|do not have to'),
    'Write about your habits (100 words): what do you always, usually, sometimes and never do? What should you change?']},
  /* ---------- B1 ---------- */
  {l:'EN',lv:'B1',tp:'Leitura',t:'Homework · The job offer',i:'Read the email and answer.\n\nDear Ms Ferreira,\nThank you for attending the interview last Thursday. We are pleased to offer you the position of Marketing Assistant at Greenway Foods. The position is full-time, and you would start on 3 March. Your salary would be £28,000 per year, and you would be entitled to 25 days of holiday. As discussed, you would be able to work from home on Fridays. Please could you confirm whether you accept this offer by the end of next week? If you have any questions, do not hesitate to contact me.\nKind regards,\nPeter Lowe, HR Manager',q:[
    ['What position is offered?',['Marketing Manager','Marketing Assistant','HR Assistant'],1],
    ['When would she start?',['next Thursday','on 3 March','at the end of next week'],1],
    ['How many days of holiday would she get?',['20','25','28'],1],
    ['When could she work from home?',['on Mondays','on Fridays','never'],1],
    TF('The job is part-time.',false),TF('She must answer by the end of next week.',true),
    GAP('We are ___ to offer you the position.','pleased'),GAP('Do not ___ to contact me.','hesitate'),
    'Write a reply (100–120 words): accept the offer, thank Peter and ask two questions about your first day.']},
  {l:'EN',lv:'B1',tp:'Escuta',t:'Homework · Gap year',i:'Lição de casa: ouça o trecho de podcast sobre um ano sabático e responda.',a:`Today on Life Choices I'm talking to Hannah, who took a gap year before university. Hannah, what did you do?
Well, first I worked in a café for six months to save money. Then I travelled around South America for four months. I've never been so far from home!
Was it difficult?
At the beginning, yes. I'd never travelled alone before, and my Spanish was terrible. But I've made friends in five different countries, and I still talk to them every week.
Would you recommend it?
Definitely, but plan your budget. I ran out of money in Peru and had to work in a hostel for three weeks. It was actually one of the best experiences of the trip!`,q:[
    ['What did Hannah do first?',['She travelled.','She worked in a café.','She studied Spanish.'],1],
    ['How long did she travel?',['four months','six months','a year'],0],
    ['Why was it difficult at the beginning?',['She was ill.','She had never travelled alone.','She didn’t like the food.'],1],
    ['What happened in Peru?',['She lost her passport.','She ran out of money.','She met her boyfriend.'],1],
    TF('Hannah still talks to the friends she made.',true),TF('She hated working in the hostel.',false),
    GAP('I’ve never ___ so far from home!','been'),GAP('I ___ out of money in Peru.','ran'),
    'Would you like to take a gap year? Write 120 words: where would you go, what would you do and what might be difficult?']},
  {l:'EN',lv:'B1',tp:'Leitura',t:'Homework · The robbery',i:'Read the news story and answer.\n\nA jewellery shop in the city centre was robbed on Tuesday night. When the owner, Mr Davies, arrived on Wednesday morning, he saw that someone had broken the back window. The thieves had taken watches and rings worth £40,000, but they had left the most expensive necklace in the safe. Police believe the robbers had visited the shop as customers before the robbery, because they knew exactly where the cameras were. A neighbour said she had heard a noise at about 2 am, but she had thought it was a cat. The police have asked anyone with information to contact them.',q:[
    ['When did the robbery happen?',['on Tuesday night','on Wednesday morning','on Monday'],0],
    ['How did the thieves get in?',['through the front door','through the back window','through the roof'],1],
    ['What did the thieves NOT take?',['watches','rings','the most expensive necklace'],2],
    ['Why do police think the robbers had visited before?',['They knew where the cameras were.','A customer recognised them.','They left a note.'],0],
    TF('The neighbour called the police at 2 am.',false),
    GAP('Someone ___ (break) the back window before he arrived.','had broken'),GAP('She ___ (think) it was a cat.','had thought|thought'),
    'Write a short news story (120 words) about a strange event in your city. Use the past simple and the past perfect.']},
  /* ---------- B2 ---------- */
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · The four-day week trial',i:'Lição de casa: ouça a reportagem de rádio e responda.',a:`Six months ago, sixty-one companies in the UK agreed to test a four-day working week, with no reduction in pay. The results are now in. Of the sixty-one companies, fifty-six have decided to continue with the new schedule, and eighteen have made it permanent. Employees reported less stress and better sleep, while sick days fell by almost two thirds. Crucially, most managers said productivity stayed the same or even improved. Not everyone is convinced, though. Critics point out that the trial mostly involved office jobs, and that hospitals or schools would find it far harder to cut a working day without hiring more staff.`,q:[
    ['How many companies took part?',['18','56','61'],2],
    ['How many have made the change permanent?',['18','56','60'],0],
    ['What happened to sick days?',['They rose.','They fell by almost two thirds.','They stayed the same.'],1],
    ['What do most managers say about productivity?',['It fell sharply.','It stayed the same or improved.','It is impossible to measure.'],1],
    TF('Workers had their pay reduced during the trial.',false),
    ['What is the critics’ main point?',['The trial was too short.','Some sectors would find it much harder.','Employees didn’t like it.'],1],
    GAP('There was no ___ in pay.','reduction'),GAP('Productivity stayed the same or even ___ .','improved'),
    'Would a four-day week work in your job or in your country? Write 150 words with arguments for and against.']},
  {l:'EN',lv:'B2',tp:'Leitura',t:'Homework · Sleep science',i:'Read the text and answer.\n\nFor decades, sleep was treated as wasted time. Now scientists see it as one of the pillars of health, alongside diet and exercise. During deep sleep, the brain clears away waste products that build up during the day, and memories are transferred from short-term to long-term storage. People who regularly sleep fewer than six hours are more likely to catch colds, put on weight and make poor decisions. Yet many of us sacrifice sleep to work longer or scroll through our phones. Experts suggest a few simple rules: keep the same schedule, even at weekends; avoid caffeine after lunch; and keep the bedroom cool, dark and free of screens.',q:[
    ['How was sleep seen for decades?',['as wasted time','as a medical treatment','as a luxury'],0],
    ['What happens to memories during deep sleep?',['They are deleted.','They move to long-term storage.','They become dreams.'],1],
    ['People who sleep fewer than six hours are more likely to…',['catch colds','sleep better at weekends','drink more coffee'],0],
    TF('Experts recommend sleeping in at weekends.',false),TF('The bedroom should be cool and dark.',true),
    GAP('The brain clears away waste products that ___ up during the day.','build'),GAP('Many of us ___ sleep to work longer.','sacrifice'),
    ['“Pillars of health” means…',['the most important parts of health','medicines','the hours of sleep'],0],
    'Describe your sleep habits and what you could change (150 words). Use should, could and it’s worth + -ing.']},
  /* ---------- C1 ---------- */
  {l:'EN',lv:'C1',tp:'Escuta',t:'Homework · Lecture: the myth of multitasking',i:'Lição de casa: ouça o trecho de uma palestra e responda.',a:`Let's start with an uncomfortable truth: for most tasks, multitasking is a myth. What we call multitasking is, in reality, task-switching, and every switch carries a cost. Studies suggest that it can take more than twenty minutes to fully regain concentration after an interruption. Students who check messages while studying not only take longer to finish, but also remember less of what they read. The exceptions are revealing: we can combine tasks when one of them is automatic, such as walking while talking. So, rather than trying to do everything at once, the evidence points towards what researchers call "deep work": blocks of time devoted to a single, demanding task, with notifications switched off.`,q:[
    ['According to the lecturer, multitasking is really…',['task-switching','a skill we can train','impossible for everyone'],0],
    ['How long can it take to regain concentration?',['a few seconds','about five minutes','more than twenty minutes'],2],
    ['Students who check messages while studying…',['finish faster','remember less','learn more vocabulary'],1],
    ['When can we combine tasks?',['when one is automatic','when both are easy','never'],0],
    TF('The lecturer recommends switching notifications off.',true),
    GAP('Every switch ___ a cost.','carries|has'),GAP('The evidence points ___ “deep work”.','towards|toward'),
    'Write a short guide (200 words) for students on how to study with fewer distractions, using evidence from the lecture and hedging language.']},
  {l:'EN',lv:'C1',tp:'Escuta',t:'Homework · Podcast: less is more',i:'Lição de casa: ouça o trecho de podcast sobre minimalismo e responda.',a:`Host: My guest today, Leila, owns exactly one hundred things. Leila, why?
Leila: It started as an experiment. I'd moved flats four times in five years, and every time I was packing boxes of things I hadn't touched since the last move. So I asked myself: what if I only kept what I actually use?
Host: And was it liberating, or just inconvenient?
Leila: Both, to be honest. I'd be lying if I said I never missed anything. But on balance, I spend less, I clean less and I make decisions faster. Mind you, I'm not saying everyone should count their possessions. The number is arbitrary; the point is to ask why you own what you own.`,q:[
    ['How did Leila’s experiment start?',['She lost her job.','She had moved flats many times.','She read a book about it.'],1],
    ['What did she notice when packing?',['She had too few boxes.','She had things she never used.','Her things were broken.'],1],
    ['How does she describe the experience?',['completely liberating','both liberating and inconvenient','a total failure'],1],
    ['What is her main point?',['Everyone should own 100 things.','We should question why we own things.','Moving house is stressful.'],1],
    TF('Leila says she never misses anything.',false),
    GAP('I’d be ___ if I said I never missed anything.','lying'),GAP('On ___ , I spend less and clean less.','balance'),
    'Could you live with 100 things? Write a reflective paragraph (200 words) weighing the pros and cons, with at least two discourse markers.']}
);

if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  /* ---------- A1 ---------- */
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · My weekend',i:'Lição de casa: present simple no fim de semana.',q:[
    PICK('On Saturdays I [*get up/gets up] late. My brother [*plays/play] football. We [*don’t/doesn’t] work on Sundays. [*Does/Do] your sister go to the cinema?'),
    SORT(`play: football, the guitar, video games
go: to the cinema, swimming, shopping
watch: TV, films, a match`),
    FIX('My mother {cook|cooks} lunch on Sundays.'),FIX('He doesn’t {likes|like} football.'),
    SEQ('I get up at nine.\nI have breakfast in the garden.\nI go to the park with my dog.\nIn the evening, I watch a film.','Put Laura’s Saturday in order.'),
    'Write about your weekend (6–8 sentences) and the weekend of a friend (he/she + -s).']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · In my bag',i:'Lição de casa: a/an, this/these e plurais.',q:[
    SORT(`a: book, phone, pen, key
an: umbrella, apple, orange, egg`),
    PICK('There’s [*an/a] umbrella in my bag. [*These/This] keys are mine. I’ve got two [*boxes/boxs] of chocolates and three [*watches/watchs].'),
    FIX('I’ve got {a|an} orange and a banana.'),FIX('Look at {this|these} glasses! They’re beautiful.'),
    ['What’s the plural of “child”?',['childs','children','childrens'],1],
    ['What’s the plural of “woman”?',['womans','women','womens'],1],
    'What’s in your bag right now? Write 8 things with a, an or numbers (two keys, a phone…).']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · Where is it?',i:'Lição de casa: preposições de lugar e there is / there are.',q:[
    PICK('The cat is [*under/at] the table. There [*are/is] two books on the shelf. My keys are [*in/on] my bag. There [*isn’t/aren’t] a TV in my bedroom.'),
    COMIC(`[sofa]
Mia: Where’s my phone?
Leo: ___
---
Mia (feliz): Oh, yes! Thank you!`,['It’s on the sofa, next to you.','They’re on the sofa.','It’s a phone.'],0),
    FIX('There {is|are} three chairs in the kitchen.'),
    SORT(`There is: a sofa, a lamp, an armchair
There are: two windows, some plants, three cushions`),
    'Describe your living room (6–8 sentences) with there is, there are and in, on, under, next to, between.']},
  /* ---------- A2 ---------- */
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · The best day ever',i:'Lição de casa: superlativos.',q:[
    PICK('It was [*the best/the better/the most good] day of my life! Everest is [*the highest/the most high] mountain in the world. This is [*the most beautiful/the beautifullest] beach I know.'),
    SORT(`-est: the tallest, the cheapest, the biggest
most: the most expensive, the most interesting, the most famous
irregular: the best, the worst, the furthest`),
    KWT('No city in Brazil is bigger than São Paulo.','BIGGEST','São Paulo is ___ in Brazil.','the biggest city'),
    FIX('It’s the {most cheap|cheapest} restaurant in town.'),
    ['What’s the superlative of “bad”?',['the baddest','the worst','the most bad'],1],
    'Write about the best day of your life and the worst trip you’ve had (100 words), with at least 5 superlatives.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · Rules at work',i:'Lição de casa: must, mustn’t, have to e don’t have to.',q:[
    PICK('You [*mustn’t/don’t have to] smoke in the office. It’s forbidden! We [*don’t have to/mustn’t] wear a suit on Fridays. It’s optional. Nurses [*have to/has to] work at night sometimes.'),
    SORT(`Obligation: must, have to, need to
Prohibition: mustn’t, can’t, not allowed to
No obligation: don’t have to, don’t need to`),
    FIX('She {have to|has to} start work at seven.'),FIX('You {don’t have to|mustn’t} park here. It’s for ambulances only.'),
    COMIC(`[relogio]
Boss: Welcome to your first day!
Sam: Thanks! Do I have to wear a uniform?
---
Boss: ___
Sam (feliz): Great, I like this T-shirt!`,['No, you don’t have to. Wear what you like.','No, you mustn’t wear clothes.','Yes, you mustn’t.'],0),
    'Write the rules of your job, school or home (8 sentences) with must, mustn’t, have to and don’t have to.']},
  /* ---------- B1 ---------- */
  {l:'EN',lv:'B1',tp:'Escrita',t:'Homework · Noisy neighbours',i:'Lição de casa: reclamar por escrito, com educação.',q:[
    PICK('I’m writing [*to complain about/for complain] the noise. I would be grateful [*if you could/if you can to] keep the music down after 11 pm. I [*look forward to hearing/look forward to hear] from you.'),
    SEQ('Dear Mr Patel,\nI’m writing about the noise from your flat at night.\nOn Monday and Wednesday, the music continued until 2 am.\nI would be grateful if you could keep it down after 11 pm.\nThank you for your understanding.\nBest regards, Ana','Put the email in order.'),
    FIX('I would be grateful if you {will|could} help.'),
    SORT(`Polite: I’m afraid…, I would be grateful if…, Could you possibly…?
Rude: Stop it now!, You’re terrible neighbours, This is unacceptable and stupid`),
    KWT('Please reply soon.','FORWARD','I ___ from you.','look forward to hearing'),
    'Write an email to a neighbour (120 words) about a problem (noise, parking, rubbish). Be polite but clear.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Life online',i:'Lição de casa: present perfect ou past simple; for e since.',q:[
    PICK('I [*’ve had/had] this phone for two years. I [*bought/have bought] it in 2024. She [*’s never used/never used] TikTok. [*Have you ever posted/Did you ever post] a video?'),
    KWT('I started using Instagram in 2018.','SINCE','I ___ 2018.','have used Instagram since/’ve used Instagram since/have been using Instagram since/’ve been using Instagram since'),
    KWT('My last post was three months ago.','POSTED','I ___ for three months.','haven’t posted anything/have not posted anything/haven’t posted'),
    FIX('I {have seen|saw} that video yesterday.'),
    SORT(`for: two years, a long time, ages
since: 2019, Monday, I was a child`),
    'Write about your life online (120 words): what apps you have used, for how long, and something memorable that happened.']},
  {l:'EN',lv:'B1',tp:'Phrasal verbs',t:'Homework · Tidy up!',i:'Lição de casa: phrasal verbs da casa e do dia a dia.',q:[
    PICK('Please [*turn off/turn down] the lights when you leave. We’ve [*run out of/run away] milk. Can you [*put away/put on] your toys? It’s time to [*get rid of/get on] these old clothes.'),
    SORT(`Tidying: tidy up, put away, throw away
Machines: turn on, turn off, plug in
Problems: run out of, break down, give up`),
    FIX('The washing machine broke {up|down} again.'),
    KWT('There’s no coffee left.','RUN','We’ve ___ coffee.','run out of'),
    CLOZE('On Sunday I [tidied] up my room, [threw] away old magazines and [put] my winter clothes away.','took, gave'),
    'Describe your cleaning routine at home (100 words) using at least 6 phrasal verbs.']},
  /* ---------- B2 ---------- */
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · Unless you hurry',i:'Lição de casa: unless, as long as, provided that e in case.',q:[
    PICK('We’ll miss the train [*unless/if] we hurry. You can borrow my car [*as long as/unless] you bring it back by Sunday. Take an umbrella [*in case/if] it rains.'),
    KWT('If you don’t book now, there won’t be any seats.','UNLESS','There won’t be any seats ___ now.','unless you book'),
    KWT('You can come, but only if you’re quiet.','PROVIDED','You can come ___ quiet.','provided that you are/provided you are/provided that you’re/provided you’re'),
    KWT('I’ll take some snacks because we might get hungry.','CASE','I’ll take some snacks ___ hungry.','in case we get'),
    FIX('I’ll help you {unless|as long as} you help me later.'),
    'Write the rules for lending something to a friend (120 words) using unless, as long as, provided that and in case.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · He denied it',i:'Lição de casa: verbos de relato (advise, suggest, refuse, admit, deny).',q:[
    KWT('“I didn’t take the money,” he said.','DENIED','He ___ the money.','denied taking/denied having taken'),
    KWT('“Why don’t we go by train?” she said.','SUGGESTED','She ___ by train.','suggested going/suggested that we go/suggested that we should go'),
    KWT('“I won’t sign the contract,” said the manager.','REFUSED','The manager ___ the contract.','refused to sign'),
    KWT('“You should see a doctor,” my friend told me.','ADVISED','My friend ___ a doctor.','advised me to see'),
    KWT('“Yes, I broke the window,” said Tom.','ADMITTED','Tom ___ the window.','admitted breaking/admitted having broken/admitted that he had broken/admitted that he broke'),
    SORT(`+ -ing: deny, admit, suggest
+ to: refuse, agree, promise
+ object + to: advise, warn, remind`),
    'Report a conversation or argument you had recently (150 words) using at least 5 different reporting verbs.']},
  {l:'EN',lv:'B2',tp:'Expressões',t:'Homework · Idioms at work',i:'Lição de casa: expressões idiomáticas do trabalho.',q:[
    SORT(`Communication: keep someone in the loop, be on the same page, touch base
Quality: cut corners, go the extra mile, think outside the box`),
    PICK('Please keep me [*in the loop/on the loop]. We need to make sure everyone is [*on the same page/in the same page]. Don’t [*cut corners/cut edges]: safety comes first.'),
    ['“Can you give me a ballpark figure?” means…',['an approximate number','an exact price','a sports result'],0],
    ['“Let’s touch base next week” means…',['let’s talk briefly next week','let’s play baseball','let’s finish the project'],0],
    FIX('She always goes the extra {kilometre|mile} for her clients.'),
    'Write an email to a colleague (120 words) about a project, using at least 5 idioms from this homework.']},
  /* ---------- C1 ---------- */
  {l:'EN',lv:'C1',tp:'Expressões',t:'Homework · The art of understatement',i:'Lição de casa: understatement, o jeito britânico de suavizar.',q:[
    SORT(`Understatement: not bad at all, a bit of a problem, I wouldn’t say no
Overstatement: the best thing ever, an absolute disaster, I’m dying to`),
    ['A British colleague says your proposal is “not without its challenges”. She probably means…',['It has serious problems.','It is perfect.','It is easy.'],0],
    ['“I wouldn’t say no to a coffee” means…',['I’d like a coffee.','I don’t want coffee.','I never drink coffee.'],0],
    PICK('The traffic was [*a bit of a nightmare/a bit of nightmare]. Her presentation was [*not bad at all/not at all bad thing]: everyone loved it.'),
    KWT('The meeting was quite long, honestly.','RATHER','The meeting was ___ , honestly.','rather long'),
    FIX('It’s {a little bit of|a bit of a} problem, to be honest.'),
    'Rewrite a very enthusiastic or very negative review (of a film, hotel or restaurant) in a British understated style (150 words).']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · It’s essential that he be…',i:'Lição de casa: o subjuntivo e estruturas formais.',q:[
    PICK('It is essential that every employee [*be/is] informed. The doctor recommended that she [*rest/rests] for a week. If I [*were/was] you, I would accept the offer. I’d rather you [*didn’t/don’t] tell anyone.'),
    KWT('The committee wants all members to attend.','INSISTS','The committee ___ attend.','insists that all members/insists all members'),
    KWT('You should leave early, I suggest.','SUGGEST','I ___ early.','suggest that you leave/suggest you leave'),
    KWT('It’s time for us to go home.','HIGH','It’s ___ home.','high time we went'),
    FIX('It is vital that the report {is sent|be sent} today.'),
    'Write a formal memo (150 words) about new office rules using at least 4 subjunctive or formal structures (it is essential that…, we recommend that…).']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · The rebuttal',i:'Lição de casa: responder a um argumento contrário com elegância.',q:[
    SORT(`Acknowledge: Admittedly…, It is true that…, Granted…
Rebut: However this overlooks…, That said…, Even so…
Conclude: On balance…, All things considered…, Ultimately…`),
    SEQ('Opponents argue that public transport should not be free.\nAdmittedly, free fares would cost the city millions.\nHowever, this overlooks the savings from less traffic and pollution.\nOn balance, the benefits clearly outweigh the costs.','Put the rebuttal paragraph in order.'),
    KWT('It is true that the plan is expensive, but it is necessary.','GRANTED','___ , the plan is necessary.','Granted, the plan is expensive/Granted the plan is expensive'),
    FIX('{In my opinion I think|In my view} the proposal is flawed.'),
    PICK('This argument [*overlooks/oversees] a key point. [*On balance/In balance], the evidence supports the change.'),
    'Choose a controversial topic. Write a paragraph (200 words) that presents the opposing view fairly and then rebuts it.']}
);
/* ===================== lote 8 · homeworks (inglês) ===================== */
CONT_ATIV.push(
  {l:'EN',lv:'A1',tp:'Leitura',t:'Homework · Good morning, world!',i:'Read the text and answer.\n\nIn Turkey, breakfast is a big meal. People have bread, white cheese, olives, tomatoes, cucumbers and eggs, and they drink black tea in small glasses. In Mexico, a popular breakfast is chilaquiles: tortilla chips with red or green salsa, cheese and sometimes an egg. In Germany, many people have bread rolls with cheese, ham or jam, and a cup of coffee. And in Brazil? Bread with butter, fruit and coffee with milk!',q:[
    ['What do people drink in Turkey?',['coffee with milk','black tea','orange juice'],1],
    ['What are chilaquiles?',['tortilla chips with salsa','bread rolls with jam','rice and fish'],0],
    ['Where do people have bread rolls with ham or jam?',['Mexico','Turkey','Germany'],2],
    TF('Breakfast is a small meal in Turkey.',false),TF('In Mexico, chilaquiles sometimes have an egg.',true),
    GAP('In Turkey, they have ___ egg and some olives. (a/an)','an'),GAP('In Germany, many people ___ (have) coffee.','have'),
    'Describe your perfect breakfast and the breakfast of someone in your family (6 sentences). Use a, an, some, has and doesn’t have.']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · Where’s the treasure?',i:'Lição de casa: ouça as instruções da caça ao tesouro e responda.',a:`Welcome to the treasure hunt! Listen carefully. First, go to the kitchen. Look under the table. There's a small box. Don't open it! Take it to the living room and put it on the sofa. Then go to the garden. Walk past the big tree and stop in front of the blue door. Behind the door, there's a red bucket. The treasure is in the bucket, between two old shoes. Good luck!`,q:[
    ['Where is the small box?',['on the table','under the table','next to the table'],1],
    ['Where do you put the box?',['on the sofa','in the garden','behind the door'],0],
    ['What colour is the door?',['red','green','blue'],2],
    ['Where is the treasure?',['in the red bucket','under the tree','on the sofa'],0],
    TF('You must open the small box.',false),
    GAP('Stop in ___ of the blue door.','front'),GAP('The treasure is ___ two old shoes.','between'),
    'Write a treasure hunt in your house (6–8 instructions) using imperatives and at least 5 prepositions.']},
  {l:'EN',lv:'B1',tp:'Leitura',t:'Homework · Is it a scam?',i:'Read the email and answer.\n\nSubject: URGENT – Your account will be closed today!!\nDear Customer,\nWe detected unusual activity in your account. To avoid permanent closure, you must confirm your details within 2 hours. Click here: secure-banking-verify.co\nYou will need your card number, password and the code we send by SMS.\nThank you for your cooperation,\nCustomer Security Team',q:[
    ['What does the email want you to do?',['visit the bank','click a link and give your details','call your manager'],1],
    ['Which sign of a scam is in the subject line?',['urgency','good news','a prize'],0],
    ['What information do they ask for?',['only your name','your card number, password and SMS code','your address'],1],
    TF('The email uses your real name.',false),TF('Banks normally ask for passwords by email.',false),
    GAP('This ___ be a real bank: banks never ask for codes. (dedução)','can’t|cannot'),
    GAP('If it sounds too good to be true, it probably ___ .','is'),
    'Write advice for an older relative (100–120 words): how to recognise a scam message and what to do. Use must, might, can’t and imperatives.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Flop!',i:'Lição de casa: ouça o trecho de podcast sobre um fracasso famoso e responda.',a:`Welcome back to Brand Disasters. Today: Crystal Pepsi. In 1992, Pepsi launched a cola that was completely clear, like water. The idea was that clear meant pure and healthy. At first, sales were excellent, because everybody wanted to try it. But people were confused: it looked like water but tasted like cola, and many said the flavour wasn't quite right. Within two years, it had disappeared from the shelves. Looking back, marketing experts say Pepsi should have tested the idea with more consumers, and perhaps it shouldn't have promised health benefits that a soft drink couldn't deliver. Interestingly, it was brought back for short periods in the 2010s, mostly for nostalgia.`,q:[
    ['When was Crystal Pepsi launched?',['1982','1992','2012'],1],
    ['Why was it clear?',['to look pure and healthy','to save money','because of a mistake'],0],
    ['What happened at first?',['Sales were excellent.','Nobody bought it.','It was banned.'],0],
    ['Why were people confused?',['It tasted like water.','It looked like water but tasted like cola.','It was very expensive.'],1],
    TF('According to experts, Pepsi should have tested it with more consumers.',true),
    GAP('Within two years, it ___ (disappear) from the shelves.','had disappeared'),
    GAP('It ___ (bring) back in the 2010s. (passiva)','was brought'),
    'Choose a product that failed (or invent one). Write a short report (150 words): what happened, what should have been done and what you would do now.']},
  {l:'EN',lv:'A2',tp:'Escuta',t:'Homework · A message from the dentist',i:'Lição de casa: ouça a mensagem de voz e responda.',a:`Hello, this is Sarah from Bright Smile Dental Clinic, calling for Mr Costa. I'm afraid Dr Lee is ill on Thursday, so we need to change your appointment. We can offer you Friday at a quarter past nine in the morning, or Monday at four thirty in the afternoon. Please call us back on 020 7946 0321 before Wednesday evening. And remember to bring your new insurance card. Thank you, and have a nice day!`,q:[
    ['Why does Sarah call?',['to cancel the clinic','to change an appointment','to ask for money'],1],
    ['What is the problem with Thursday?',['The clinic is closed.','Dr Lee is ill.','Mr Costa is travelling.'],1],
    ['What time is the Friday appointment?',['9:15','9:45','4:30'],0],
    ['When should Mr Costa call back?',['before Wednesday evening','on Friday','after Monday'],0],
    TF('Mr Costa needs to bring his insurance card.',true),
    GAP('I’m ___ Dr Lee is ill on Thursday.','afraid'),GAP('Please call us ___ before Wednesday.','back'),
    'Leave a voice message (written) to change an appointment: who you are, the problem and two new times.']},
  {l:'EN',lv:'B1',tp:'Leitura',t:'Homework · The hidden cost of free apps',i:'Read the text and answer.\n\nMost of the apps on your phone are free. But are they really? Many free apps make money by collecting information about you: where you go, what you buy and even how long you look at a post. This data is used to show you personalised adverts, and it is sometimes sold to other companies. Some experts say that if you aren’t paying for the product, you are the product. That doesn’t mean you should delete everything. But it’s worth checking the permissions of each app: does a torch app really need your location and your contacts?',q:[
    ['How do many free apps make money?',['by selling phones','by collecting and using your data','by charging every month'],1],
    ['What is the data used for?',['personalised adverts','phone repairs','free calls'],0],
    ['What does the writer suggest?',['deleting all apps','checking app permissions','never using the internet'],1],
    TF('The writer thinks you should delete all free apps.',false),
    GAP('If you aren’t paying for the product, you ___ the product.','are'),
    GAP('It’s ___ checking the permissions of each app.','worth'),
    ['A torch app asking for your contacts is…',['suspicious','normal','necessary'],0],
    'Check three apps on your phone. Write about their permissions (100 words): which ones surprised you and what you will change.']},
  {l:'EN',lv:'B2',tp:'Escuta',t:'Homework · Interview: a night nurse',i:'Lição de casa: ouça a entrevista com uma enfermeira do turno da noite e responda.',a:`Interviewer: Joanna, you've worked night shifts for twelve years. How do you cope?
Joanna: Routine is everything. I sleep from nine in the morning until four in the afternoon, with blackout curtains and my phone switched off. My family knows not to call unless it's an emergency.
Interviewer: What's the hardest part?
Joanna: Probably the social side. You miss birthdays and weekends, and your friends stop inviting you. But the night is also when patients feel most alone, so you get to know them in a way the day staff don't.
Interviewer: Would you go back to days?
Joanna: I've thought about it. Maybe in a few years. For now, I'd miss the quiet and the team spirit.`,q:[
    ['How long has Joanna worked nights?',['two years','ten years','twelve years'],2],
    ['When does she sleep?',['from 9 pm to 4 am','from 9 am to 4 pm','from midnight to 8 am'],1],
    ['What is the hardest part for her?',['the patients','the social side','the salary'],1],
    ['Why is night work special, according to her?',['Patients feel most alone at night.','It is better paid.','There is less work.'],0],
    TF('Joanna has decided to go back to day shifts next month.',false),
    GAP('How do you ___ ? (lidar com a situação)','cope'),GAP('I sleep with ___ curtains.','blackout'),
    'Would you work night shifts? Write 150 words about the advantages and disadvantages, using a range of linkers.']},
  {l:'EN',lv:'C1',tp:'Leitura',t:'Homework · The case for boredom',i:'Read the text and answer.\n\nWe have all but eliminated boredom. Every queue, every bus ride and every advert break is now filled by a glance at our phones. Yet a growing body of research suggests that boredom, far from being a waste of time, may be a catalyst for creativity. In one well-known study, participants who first completed a deliberately dull task went on to produce more creative ideas than those who had not. The theory is that an unstimulated mind starts to wander, and mind-wandering is where unexpected connections are made. None of this means we should seek out tedium for its own sake. But perhaps, the next time we reach for our phones in a queue, we might pause and let our minds drift.',q:[
    ['According to the text, how have we “eliminated” boredom?',['by working more','by filling every gap with our phones','by travelling more'],1],
    ['What did the study suggest?',['Boring tasks make people less creative.','A dull task first can lead to more creative ideas.','Phones improve creativity.'],1],
    ['Why might boredom help creativity?',['Because the mind wanders and makes connections.','Because people sleep more.','Because it reduces stress.'],0],
    TF('The writer recommends seeking out boredom for its own sake.',false),
    GAP('Boredom, far ___ being a waste of time, may help creativity.','from'),
    GAP('We have all ___ eliminated boredom. (quase)','but'),
    ['“A catalyst for creativity” means something that…',['triggers or speeds up creativity','destroys creativity','measures creativity'],0],
    'Write a reflective essay (200–250 words): “Is boredom good for us?” Refer to the text and to your own experience.']}
);

if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · Live from my house',i:'Lição de casa: present continuous (o que está acontecendo agora).',q:[
    PICK('I [*’m writing/write/writing] my homework now. My cat [*is sleeping/sleeps/sleeping] on the sofa. My parents [*are watching/is watching/watching] TV.'),
    SORT(`+ ing: reading, playing, cooking
no e: making, writing, dancing
double letter: running, swimming, sitting`),
    FIX('She’s {danceing|dancing} in the kitchen.'),FIX('They {is|are} playing football.'),
    COMIC(`[celular]
Ana: Hi, Leo! What are you doing?
Leo: ___
---
Ana (feliz): Mmm! Can I come for dinner?`,['I’m cooking pasta.','I cook every day.','Yes, I am.'],0),
    ['___ it raining now?',['Is','Are','Does'],0],
    'Imagine you’re on a video call. Describe what you and 3 people in your house are doing right now (6 sentences).']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · The New York plan',i:'Lição de casa: going to (planos) e will (decisões na hora).',q:[
    PICK('We [*’re going to/will] visit the museum tomorrow: we bought the tickets. “The shop is closed!” “OK, I [*’ll/’m going to] try the other one.” [*Why don’t we/Why we don’t] take a taxi?'),
    COMIC(`[cidade]
Mia: It’s raining! We can’t walk in Central Park.
Sam: ___
---
Mia (feliz): Good idea. I love museums!`,['OK, let’s go to a museum instead.','I’m going to walk in the park.','It rains every day.'],0),
    KWT('Our plan is to see a show on Saturday.','GOING','We ___ a show on Saturday.','’re going to see/are going to see'),
    KWT('I can carry your bag. (decisão agora)','I’LL','___ your bag.','I’ll carry'),
    SEQ('We’re going to have breakfast at the hotel.\nThen we’re going to take the ferry to the Statue of Liberty.\nIn the afternoon, we’re going to rent bikes in Central Park.\nIn the evening, we’re going to eat pizza in Brooklyn.','Put the plan in order.'),
    'Plan a weekend in a city you love with $300 (100 words): what you’re going to do, how much it costs and one decision you make on the spot with will.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Flatmate rules',i:'Lição de casa: let, allow, be allowed to, have to, should.',q:[
    PICK('My landlord [*lets us/lets us to/allows us] have a cat. We’re not [*allowed to/allowed/let to] smoke inside. You [*should/must to] buy a bigger fridge. Guests [*can/are let] stay at weekends.'),
    KWT('The landlord doesn’t permit parties.','ALLOWED','We ___ have parties.','aren’t allowed to/are not allowed to/’re not allowed to'),
    KWT('My parents allowed me to stay out late.','LET','My parents ___ out late.','let me stay'),
    FIX('She doesn’t let me {to use|use} her laptop.'),
    SORT(`Obligation: have to, must, need to
Prohibition: not allowed to, mustn’t, can’t
Permission: can, be allowed to, let`),
    'Write 6 house rules for your ideal shared flat and explain why each one is important (120 words).']},
  {l:'EN',lv:'B2',tp:'Trabalho',t:'Homework · Sorry for the trouble',i:'Lição de casa: atendimento ao cliente e notícias ruins com educação.',q:[
    SEQ('Listen: let the customer explain the problem.\nApologise: say sorry without blaming anyone.\nSolve: offer a concrete solution.\nThank: thank the customer for their patience.','Put the LAST steps in order.'),
    PICK('[*I’m afraid/I’m scared] the item is out of stock. [*Would it help if/Would it help when] I sent a replacement? What I can do [*is/it is] refund the delivery fee.'),
    KWT('We can’t deliver on Sunday.','AFRAID','I’m ___ on Sunday.','afraid we can’t deliver/afraid we cannot deliver/afraid that we can’t deliver'),
    KWT('The order was delayed, apparently.','SEEMS','It ___ delayed.','seems that the order was/seems the order was'),
    COMIC(`[celular]
Tom (bravo): This is the third time I’m calling!
Ana: ___
---
Tom (pensando): OK… what can you do?`,['I completely understand your frustration.','Calm down, please.','It’s not my fault.'],0),
    'Reply to this complaint (150 words): “I booked a double room and got a single. Nobody helped me.” Use LAST and softening language.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · The red suitcase',i:'Lição de casa: tempos narrativos e conectores.',q:[
    PICK('She [*was waiting/waited/had waited] for the train when she saw him. By the time she arrived, the train [*had left/left/was leaving]. [*As soon as/Meanwhile] she sat down, she opened the case.'),
    CLOZE('[Meanwhile], an old man [was looking] for his suitcase. [Eventually], he [found] the station manager.','as soon as, looked'),
    SEQ('She grabbed the wrong suitcase.\nShe ran for the train.\nShe opened the suitcase on the train.\nShe found an old camera.\nShe recognised her own house in the photos.','Put the events in order.'),
    KWT('She took the wrong suitcase before she got on the train.','HAD','When she got on the train, she ___ the wrong suitcase.','had taken'),
    FIX('By the time we arrived, the film {started|had started}.'),
    'Finish the story of the red suitcase (180 words) using past simple, past continuous, past perfect and at least four linkers.']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · Thought experiments',i:'Lição de casa: estruturas hipotéticas avançadas.',q:[
    KWT('If you pulled the lever, five people would survive.','WERE','___ the lever, five people would survive.','Were you to pull'),
    KWT('If it hadn’t been for your advice, I would have quit.','BUT','___ your advice, I would have quit.','But for'),
    KWT('If you need help, call me.','SHOULD','___ help, call me.','Should you need'),
    KWT('What would you do if you lost your job?','SUPPOSE','___ your job, what would you do?','Suppose you lost/Supposing you lost'),
    PICK('[*Were/Was] we to accept, the deal would change everything. [*Had/Would] I known, I would have called. [*Imagine if/Imagine that if] nobody had invented the internet.'),
    'Invent your own thought experiment (200 words): describe the scenario with at least four hypothetical structures and argue for one answer.']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · Words that move',i:'Lição de casa: recursos retóricos.',q:[
    SORT(`Tricolon: veni vidi vici, faster cheaper cleaner, of the people by the people for the people
Antithesis: one small step for a man one giant leap for mankind, not for us but for them
Rhetorical question: who among us would say no, is this the future we want`),
    ['“Ask not what your country can do for you; ask what you can do for your country” is an example of…',['chiasmus','tricolon','understatement'],0],
    ['“We shall fight on the beaches, we shall fight on the landing grounds” uses…',['anaphora','antithesis','chiasmus'],0],
    KWT('We must be brave and we must be honest.','NOT ONLY','We must ___ brave, but also honest.','not only be'),
    PICK('Good speeches use [*concrete/abstract] words, [*short/long] sentences at the climax and [*one or two/as many as possible] devices per paragraph.'),
    'Write a one-minute speech (150–180 words) for a cause you believe in, with a tricolon, an antithesis and a rhetorical question.']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · Say it simply',i:'Lição de casa: plain English, sem jargão.',q:[
    KWT('We will conduct an investigation into the incident.','INVESTIGATE','We will ___ .','investigate the incident'),
    KWT('Payment must be made by Friday.','PAY','You ___ by Friday.','must pay/need to pay/have to pay'),
    KWT('In the event that the meeting is cancelled, we will inform you.','IF','___ cancelled, we will tell you.','If the meeting is'),
    KWT('We are in receipt of your application.','RECEIVED','We ___ application.','have received your/’ve received your'),
    SORT(`Jargon: leverage, going forward, synergy, at this moment in time
Plain: use, from now on, teamwork, now`),
    FIX('We need to {utilise|use} the new software.'),
    'Find a real piece of jargon-heavy text (an email, a policy, a contract). Rewrite it in plain English and explain three changes (200 words).']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · My favourite room',i:'Lição de casa: there is / there are e adjetivos.',q:[
    PICK('There [*is/are] a big sofa in my living room. There [*are/is] two windows. There [*isn’t/aren’t] a TV. It’s a [*small room/room small].'),
    SORT(`Kitchen: fridge, cooker, sink
Bedroom: bed, wardrobe, pillow
Bathroom: shower, mirror, towel`),
    FIX('There {is|are} three chairs in the kitchen.'),
    ['What’s the opposite of “big”?',['small','long','new'],0],
    TF('We say “a room big” in English.',false),
    'Describe your favourite room (6–8 sentences): what there is, colours, size and why you like it.']},
  {l:'EN',lv:'B2',tp:'Phrasal verbs',t:'Homework · Problems? Sort them out!',i:'Lição de casa: phrasal verbs para problemas no trabalho.',q:[
    SORT(`Problems appear: come up, crop up, break down
Solving: sort out, deal with, figure out
Delaying: put off, hold up, push back`),
    PICK('Something urgent has [*come up/come down], so I can’t join the call. Let’s [*sort out/sort up] the budget first. We had to [*put off/put on] the meeting until Friday.'),
    KWT('We postponed the launch.','PUT','We ___ the launch.','put off'),
    KWT('Who will handle the complaint?','DEAL','Who will ___ the complaint?','deal with'),
    FIX('The printer broke {up|down} again.'),
    'Write an email to your team (150 words) about a problem that came up this week and how you sorted it out, with at least 6 phrasal verbs.']}
);
/* ===================== lote 8 · devoirs (français) ===================== */
CONT_ATIV.push(
  {l:'FR',lv:'A1',tp:'Escuta',t:'Devoirs · Ma famille et moi',i:'Devoirs : écoutez Hugo parler de sa famille et répondez.',a:`Bonjour ! Je m'appelle Hugo, j'ai vingt-cinq ans et j'habite à Nantes. Dans ma famille, nous sommes cinq. Mon père s'appelle Marc, il est médecin. Ma mère s'appelle Sylvie, elle est professeure de musique. J'ai une sœur, Inès, qui a dix-neuf ans, et un petit frère, Théo. Il a huit ans et il adore le football. Nous avons aussi un chat, Caramel. Il est très paresseux !`,q:[
    ['Où habite Hugo ?',['à Paris','à Nantes','à Lyon'],1],['Quel âge a Hugo ?',['vingt et un ans','vingt-cinq ans','dix-neuf ans'],1],
    ['Quelle est la profession de sa mère ?',['médecin','professeure de musique','ingénieure'],1],['Qui adore le football ?',['Théo','Inès','Marc'],0],
    TF('Dans la famille, ils sont cinq.',true),TF('Le chat est très actif.',false),
    GAP('___ sœur s’appelle Inès. (mon / ma / mes)','Ma'),GAP('Théo ___ huit ans.','a'),
    'Présentez votre famille en 6 phrases : noms, âges, professions et un détail amusant.']},
  {l:'FR',lv:'A2',tp:'Escuta',t:'Devoirs · Docteur, j’ai mal !',i:'Devoirs : écoutez la consultation et répondez.',a:`Médecin : Bonjour, madame. Qu'est-ce qui ne va pas ?
Patiente : Bonjour, docteur. J'ai mal au dos depuis une semaine. Je travaille toute la journée devant l'ordinateur.
Médecin : Vous avez de la fièvre ?
Patiente : Non, pas de fièvre. Mais je dors mal.
Médecin : Bon. Ce n'est pas grave. Faites des pauses toutes les heures, marchez un peu et prenez ce médicament le soir pendant cinq jours. Et achetez une bonne chaise !
Patiente : Merci, docteur.`,q:[
    ['Où la patiente a-t-elle mal ?',['à la tête','au dos','au ventre'],1],['Depuis quand ?',['depuis hier','depuis une semaine','depuis un mois'],1],
    ['Elle a de la fièvre ?',['Oui','Non'],1],['Combien de jours doit-elle prendre le médicament ?',['trois','cinq','sept'],1],
    TF('Le médecin conseille de faire des pauses.',true),TF('Le médecin pense que c’est grave.',false),
    GAP('___ des pauses toutes les heures ! (faire, impératif)','Faites'),GAP('J’ai mal ___ dos.','au'),
    'Écrivez un dialogue chez le médecin (8 répliques) : vos symptômes et trois conseils à l’impératif.']},
  {l:'FR',lv:'A2',tp:'Leitura',t:'Devoirs · Mon nouvel appart',i:'Devoirs : lisez les deux annonces et répondez.\n\nAnnonce A – Lyon 7e. Studio meublé de 22 m², 2e étage sans ascenseur, cuisine équipée, près de l’université. 620 € charges comprises. Libre tout de suite.\nAnnonce B – Lyon 3e. T2 lumineux de 40 m², 5e étage avec ascenseur et balcon, non meublé. 780 € + 60 € de charges. Libre le 1er avril.',q:[
    ['Quel appartement est meublé ?',['A','B','les deux'],0],['Quel appartement a un balcon ?',['A','B'],1],
    ['Combien coûte le T2 au total par mois ?',['780 €','840 €','620 €'],1],
    TF('Le studio est libre le 1er avril.',false),TF('L’annonce B est au cinquième étage.',true),
    GAP('Le T2 est ___ grand que le studio. (comparatif +)','plus'),GAP('Le studio est ___ cher que le T2. (comparatif −)','moins'),
    'Vous êtes étudiant(e). Quel appartement choisissez-vous ? Comparez les deux annonces en 80 mots (plus… que, moins… que, aussi… que).']},
  {l:'FR',lv:'B1',tp:'Escuta',t:'Devoirs · Mon entretien',i:'Devoirs : écoutez l’entretien et répondez.',a:`Recruteuse : Bonjour, Monsieur Alves. Parlez-moi de votre parcours.
Candidat : J'ai fait des études de commerce à Porto Alegre, puis j'ai travaillé pendant quatre ans dans une entreprise d'exportation. Depuis 2023, je suis responsable des clients européens.
Recruteuse : Pourquoi souhaitez-vous venir en France ?
Candidat : Ma femme est française et nous voulons vivre à Bordeaux. Et je parle français depuis l'enfance : ma grand-mère était belge.
Recruteuse : Quelles sont vos qualités ?
Candidat : Je suis organisé et je m'adapte facilement. Il y a deux ans, j'ai géré un projet avec des équipes dans trois pays.`,q:[
    ['Où le candidat a-t-il fait ses études ?',['à Bordeaux','à Porto Alegre','à Bruxelles'],1],
    ['Combien de temps a-t-il travaillé dans l’exportation avant 2023 ?',['deux ans','quatre ans','six ans'],1],
    ['Pourquoi veut-il vivre en France ?',['pour le salaire','parce que sa femme est française','pour étudier'],1],
    ['Pourquoi parle-t-il français depuis l’enfance ?',['Sa grand-mère était belge.','Il a habité à Paris.','Son père est professeur.'],0],
    TF('Il est responsable des clients européens depuis 2023.',true),
    GAP('J’ai travaillé ___ quatre ans dans l’exportation. (depuis / pendant / il y a)','pendant'),
    GAP('___ deux ans, j’ai géré un projet international.','Il y a'),
    'Préparez vos réponses (120 mots) à : « Parlez-moi de vous » et « Quelles sont vos qualités ? ». Utilisez depuis, pendant et il y a.']},
  {l:'FR',lv:'B2',tp:'Leitura',t:'Devoirs · Le tour du monde en français',i:'Devoirs : lisez le texte et répondez.\n\nÀ Montréal, on ne fait pas du shopping : on magasine. Et le soir, on soupe. À Bruxelles, on compte « septante, quatre-vingt, nonante » et on range son GSM dans sa poche. À Dakar, on fait le plein à l’essencerie avant de prendre la route. Ces différences ne sont pas des erreurs : ce sont les couleurs d’une langue parlée par plus de 320 millions de personnes sur les cinq continents. Aujourd’hui, la majorité des francophones vivent en Afrique, et ce sont souvent eux qui inventent les mots de demain.',q:[
    ['À Montréal, « souper », c’est…',['le repas du soir','le petit-déjeuner','le déjeuner'],0],
    ['Qu’est-ce qu’un GSM en Belgique ?',['une voiture','un téléphone portable','un magasin'],1],
    ['Où sont la plupart des francophones aujourd’hui ?',['en France','en Afrique','au Canada'],1],
    TF('Le texte présente les variantes comme des erreurs.',false),
    GAP('À Dakar, on fait le plein à l’___ .','essencerie'),
    GAP('Le français est parlé ___ plus de 320 millions de personnes.','par'),
    ['« Les couleurs d’une langue » signifie…',['sa diversité','ses règles','son alphabet'],0],
    'Comparez le français et le portugais dans le monde (150 mots) : variantes, accents et attitudes. Donnez votre avis avec des connecteurs.']},
  {l:'FR',lv:'C1',tp:'Leitura',t:'Devoirs · Il était une fois…',i:'Devoirs : lisez le conte et répondez.\n\nIl était une fois un pêcheur qui vivait seul au bord de la mer. Un matin d’hiver, il trouva dans son filet une perle d’une beauté si rare qu’il n’osa la vendre. Il la cacha sous son lit et ne dit rien à personne. Les années passèrent ; le pêcheur devint vieux et pauvre, mais il garda toujours son secret. Le jour de sa mort, une enfant du village vint lui apporter du pain. Il lui donna la perle, sourit, et ferma les yeux. On raconte que l’enfant fit construire, avec cette perle, la première école du village.',q:[
    ['Que trouva le pêcheur dans son filet ?',['un trésor d’or','une perle','une lettre'],1],
    ['Que fit-il de la perle ?',['Il la vendit.','Il la cacha.','Il la jeta à la mer.'],1],
    ['« Il devint vieux » : « devint » vient du verbe…',['devoir','devenir','deviner'],1],
    ['Que fit l’enfant avec la perle, selon la légende ?',['Elle construisit une école.','Elle acheta un bateau.','Elle la garda.'],0],
    TF('Le pêcheur raconta son secret à tout le village.',false),
    GAP('Un matin, il ___ (trouver, passé simple) une perle.','trouva'),
    GAP('Une enfant ___ (venir, passé simple) lui apporter du pain.','vint'),
    'Écrivez un conte court (200 mots) au passé simple et à l’imparfait, avec une fin surprenante.']},
  {l:'FR',lv:'A1',tp:'Escuta',t:'Devoirs · À la boulangerie',i:'Devoirs : écoutez le dialogue et répondez.',a:`Boulangère : Bonjour, madame ! Vous désirez ?
Cliente : Bonjour ! Une baguette, s'il vous plaît.
Boulangère : Une baguette tradition ou normale ?
Cliente : Une tradition. Et deux croissants.
Boulangère : Voilà. Autre chose ?
Cliente : Oui, un pain au chocolat. C'est combien ?
Boulangère : Alors, ça fait quatre euros quarante.
Cliente : Voilà cinq euros.
Boulangère : Et soixante centimes. Merci, bonne journée !`,q:[
    ['Quelle baguette achète la cliente ?',['normale','tradition','complète'],1],['Combien de croissants ?',['un','deux','trois'],1],
    ['Combien coûte le total ?',['4,40 €','4,60 €','5 €'],0],['Combien de monnaie reçoit-elle ?',['40 centimes','60 centimes','1 euro'],1],
    TF('La cliente achète aussi un pain au chocolat.',true),
    GAP('Une baguette, s’il vous ___ .','plaît'),GAP('C’est ___ ?','combien'),
    'Écrivez votre dialogue à la boulangerie (6 répliques) : commandez trois choses et payez.']},
  {l:'FR',lv:'A2',tp:'Leitura',t:'Devoirs · Le week-end de Chloé',i:'Devoirs : lisez le message et répondez.\n\nSalut Emma ! Ce week-end, je suis allée à Annecy avec Paul. Nous sommes partis samedi matin en train. Il a fait très beau ! Nous avons loué des vélos et nous avons fait le tour du lac. Le soir, nous avons mangé une fondue dans un petit restaurant. Dimanche, je suis montée en haut de la montagne, mais Paul est resté à l’hôtel : il était fatigué ! Nous sommes rentrés dimanche soir. Et toi, qu’est-ce que tu as fait ? Bises, Chloé',q:[
    ['Comment sont-ils partis à Annecy ?',['en voiture','en train','en avion'],1],['Qu’ont-ils loué ?',['des vélos','une voiture','un bateau'],0],
    ['Qu’ont-ils mangé le soir ?',['une pizza','une fondue','des crêpes'],1],
    TF('Paul est monté en haut de la montagne.',false),TF('Il a fait beau.',true),
    GAP('Nous ___ partis samedi matin. (être / avoir)','sommes'),GAP('Nous ___ loué des vélos. (être / avoir)','avons'),
    'Répondez à Chloé (80 mots) : racontez votre week-end au passé composé, avec au moins trois verbes avec être.']},
  {l:'FR',lv:'B1',tp:'Escuta',t:'Devoirs · Anti-gaspi',i:'Devoirs : écoutez la chronique radio et répondez.',a:`En France, chaque habitant jette environ trente kilos de nourriture par an, dont sept kilos d'aliments encore emballés. Pour lutter contre ce gaspillage, de nouvelles applications permettent aux boulangeries et aux supermarchés de vendre leurs invendus à prix réduit en fin de journée. Depuis 2016, une loi interdit aussi aux grandes surfaces de jeter de la nourriture encore consommable : elles doivent la donner à des associations. Et chez soi ? Les spécialistes conseillent de faire une liste avant les courses, de bien lire les dates et de cuisiner les restes.`,q:[
    ['Combien de nourriture un Français jette-t-il par an, environ ?',['trois kilos','trente kilos','trois cents kilos'],1],
    ['À quoi servent les nouvelles applications ?',['à vendre les invendus moins cher','à livrer des repas','à compter les calories'],0],
    ['Que doivent faire les grandes surfaces depuis 2016 ?',['jeter moins d’emballages','donner la nourriture consommable à des associations','fermer le dimanche'],1],
    TF('Les spécialistes conseillent de faire une liste avant les courses.',true),
    GAP('Il faut lutter ___ le gaspillage.','contre'),GAP('On peut cuisiner les ___ . (o que sobrou)','restes'),
    'Quels gestes anti-gaspi faites-vous déjà ? Lesquels pourriez-vous adopter ? (120 mots)']},
  {l:'FR',lv:'C1',tp:'Escuta',t:'Devoirs · Conférence : la sieste au travail',i:'Devoirs : écoutez l’extrait de conférence et répondez.',a:`La sieste a mauvaise réputation dans le monde du travail : elle serait le signe d'une certaine paresse. Pourtant, les études convergent. Une sieste courte, de dix à vingt minutes, améliorerait la vigilance et la mémoire, sans provoquer cette sensation d'engourdissement que l'on éprouve après un sommeil plus long. Certaines entreprises, au Japon comme en Europe, ont d'ailleurs aménagé des salles de repos. Encore faut-il que la culture de l'entreprise le permette : à quoi bon installer un fauteuil si personne n'ose s'y asseoir ? Le véritable obstacle, en somme, n'est pas biologique mais social.`,q:[
    ['Quelle est la durée idéale de la sieste selon la conférencière ?',['dix à vingt minutes','une heure','deux heures'],0],
    ['Quel effet a une sieste plus longue ?',['une meilleure mémoire','une sensation d’engourdissement','plus de créativité'],1],
    ['Quel est le véritable obstacle, selon elle ?',['biologique','social','économique'],1],
    TF('La conférencière pense que la sieste est un signe de paresse.',false),
    GAP('___ faut-il que la culture de l’entreprise le permette.','Encore'),
    GAP('À quoi ___ installer un fauteuil si personne n’ose s’y asseoir ?','bon'),
    ['« Les études convergent » signifie qu’elles…',['arrivent aux mêmes conclusions','se contredisent','sont rares'],0],
    'Rédigez une note (200 mots) à votre direction pour proposer (ou refuser) une salle de sieste, dans un registre soutenu.']}
);

if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'FR',lv:'A1',tp:'Gramática',t:'Devoirs · Enchanté !',i:'Devoirs : se présenter, être, s’appeler, tu ou vous.',q:[
    PICK('Je [*m’appelle/suis appelle] Lucas. Je [*suis/es] brésilien. Vous [*êtes/est] professeur ? Elle [*s’appelle/t’appelles] Marie.'),
    SORT(`Tu: avec un ami, avec un enfant, avec ton frère
Vous: avec un client, avec un inconnu, avec la directrice`),
    FIX('Elle est {brésilien|brésilienne}.'),FIX('Nous {sont|sommes} étudiants.'),
    COMIC(`[conversa]
Ana: Bonjour ! Je m’appelle Ana. Et vous ?
Leo: ___
---
Ana (feliz): Enchantée, Léo !`,['Je m’appelle Léo. Je suis français.','Je suis appelle Léo.','Vous êtes Léo ?'],0),
    'Présentez-vous en 6 phrases : nom, nationalité, ville, profession, âge et une chose que vous aimez.']},
  {l:'FR',lv:'A1',tp:'Gramática',t:'Devoirs · Ma journée de rêve',i:'Devoirs : les verbes pronominaux et l’heure.',q:[
    PICK('Je [*me/te/se] lève à dix heures. Tu [*te/me/se] couches tard ? Nous [*nous/se] promenons au parc. Ils [*se/nous] reposent l’après-midi.'),
    SEQ('D’abord, je me lève à dix heures.\nEnsuite, je prends un grand petit-déjeuner.\nPuis je me promène au bord de la mer.\nEnfin, je me couche à minuit.','Remettez la journée de rêve dans l’ordre.'),
    FIX('Le dimanche, je {lève|me lève} tard.'),
    ['« Huit heures moins le quart », c’est…',['7 h 45','8 h 15','8 h 45'],0],
    ['« Elle se douche » : quel est l’infinitif ?',['se doucher','douche','doucher se'],0],
    'Décrivez votre journée de rêve (8 phrases) avec au moins 5 verbes pronominaux et des heures.']},
  {l:'FR',lv:'A2',tp:'Pronúncia',t:'Devoirs · Tu ou tout ?',i:'Devoirs : les sons [y] (tu) et [u] (tout).',q:[
    DIT('Tu as vu la rue ?'),DIT('Vous avez tout vu ?'),DIT('La roue de mon vélo est cassée.'),
    SORT(`Son [y] comme tu: rue, vu, lune, sucre, plume
Son [u] comme tout: roue, vous, loup, sourire, poule`),
    ['« Dessus » veut dire…',['em cima','embaixo','dentro'],0],
    ['Dans quel mot entendez-vous le son [y] ?',['jupe','journée','soupe'],0],
    'Écrivez 6 phrases avec des mots en [y] et en [u]. Lisez-les à voix haute et enregistrez-vous.']},
  {l:'FR',lv:'B1',tp:'Gramática',t:'Devoirs · Si j’étais…',i:'Devoirs : le conditionnel présent (hypothèse et politesse).',q:[
    PICK('Si j’[*avais/aurais] le temps, je [*ferais/faisais] du yoga. Nous [*irions/allerions] au Japon si nous gagnions au loto. [*Pourriez-vous/Pourrez-vous] m’aider ?'),
    KWT('Je n’ai pas d’argent, donc je ne voyage pas.','SI','___ de l’argent, je voyagerais.','Si j’avais'),
    KWT('Je veux un café. (poli)','VOUDRAIS','Je ___ , s’il vous plaît.','voudrais un café'),
    FIX('Si je {serais|étais} riche, j’achèterais une maison.'),
    SORT(`Politesse: je voudrais, pourriez-vous, ça vous dérangerait
Hypothèse: si j’avais, je ferais, nous irions`),
    'Écrivez votre portrait chinois (8 phrases) : « Si j’étais un animal / une ville / un plat…, je serais…, parce que… »']},
  {l:'FR',lv:'B1',tp:'Gramática',t:'Devoirs · L’objet mystère',i:'Devoirs : les pronoms relatifs qui, que, où, dont.',q:[
    PICK('C’est un objet [*qui/que] sonne le matin. C’est un objet [*que/qui] on utilise pour écrire. C’est la ville [*où/que] je suis né. C’est le livre [*dont/que] je t’ai parlé.'),
    KWT('J’ai besoin de ce document. C’est ce document.','DONT','C’est le document ___ besoin.','dont j’ai'),
    KWT('J’ai passé mes vacances dans ce village. C’est ce village.','OÙ','C’est le village ___ mes vacances.','où j’ai passé'),
    FIX('Voici l’amie {que|qui} habite à Montréal.'),
    SORT(`qui: qui sonne, qui habite, qui m’a aidé
que: que j’aime, que tu as vu, qu’on utilise
dont: dont je parle, dont j’ai besoin, dont il est fier`),
    'Écrivez 5 devinettes sur des objets ou des lieux avec qui, que, où et dont. Ajoutez les réponses à la fin.']},
  {l:'FR',lv:'B2',tp:'Gramática',t:'Devoirs · Si j’avais su…',i:'Devoirs : le plus-que-parfait et le conditionnel passé.',q:[
    KWT('Je n’ai pas su la vérité, alors je suis venu.','AVAIS','Si j’___ , je ne serais pas venu.','avais su la vérité'),
    KWT('C’était une erreur de ne pas réserver.','DÛ','Nous ___ réserver.','aurions dû'),
    KWT('Il a plu, donc nous sommes restés à la maison.','PLU','S’il n’avait ___ , nous serions sortis.','pas plu'),
    PICK('Si tu m’avais prévenu, je [*serais venu/viendrais/étais venu]. Elle [*aurait pu/pourrait] gagner si elle s’était entraînée. Si nous [*étions partis/serions partis] plus tôt, nous aurions eu le train.'),
    FIX('Si j’{aurais|avais} su, je ne serais pas venu.'),
    'Racontez un petit hasard qui a changé votre vie (180 mots) : « Si je n’avais pas…, je n’aurais jamais… ».']},
  {l:'FR',lv:'C1',tp:'Escrita',t:'Devoirs · Madame, Monsieur,',i:'Devoirs : la lettre formelle et le registre soutenu.',q:[
    SEQ('Madame, Monsieur,\nJe me permets de vous écrire afin de contester des frais bancaires.\nVous trouverez ci-joint une copie de mon relevé.\nJe vous saurais gré de bien vouloir procéder au remboursement.\nDans l’attente de votre réponse, je vous prie d’agréer l’expression de mes salutations distinguées.','Remettez la lettre dans l’ordre.'),
    KWT('Je vous écris pour demander un rendez-vous.','AFIN','Je me permets de vous écrire ___ un rendez-vous.','afin de solliciter/afin de demander'),
    KWT('Est-ce que vous pouvez me répondre vite ?','GRÉ','Je vous saurais ___ me répondre rapidement.','gré de bien vouloir/gré de'),
    PICK('Afin que vous [*puissiez/pouvez] traiter ma demande, je joins mon dossier. Bien que j’[*aie/ai] envoyé les documents, je n’ai reçu aucune réponse.'),
    FIX('Je vous {saurai|saurais} gré de bien vouloir me répondre.'),
    'Écrivez une lettre formelle (180 mots) à votre propriétaire pour signaler un problème dans votre logement et demander une intervention.']},
  {l:'FR',lv:'A2',tp:'Expressões',t:'Devoirs · Au restaurant',i:'Devoirs : commander, demander l’addition et réclamer poliment.',q:[
    COMIC(`[pizza]
Serveur: Vous avez choisi ?
Mia: ___
---
Serveur (feliz): Très bien. Et comme boisson ?`,['Oui, je vais prendre le plat du jour.','Oui, je prends l’addition.','Non, merci, au revoir.'],0),
    PICK('Je [*voudrais/voudrai] une table pour deux. [*L’addition/La note], s’il vous plaît. Excusez-moi, ce n’est pas ce que j’ai [*commandé/commander].'),
    SORT(`Entrée: soupe à l’oignon, salade de chèvre chaud
Plat: steak frites, poulet basquaise
Dessert: crème brûlée, tarte aux pommes`),
    FIX('Je vais {prends|prendre} une salade.'),
    'Écrivez un dialogue au restaurant (10 répliques) avec une petite réclamation polie.']},
  {l:'FR',lv:'B2',tp:'Gramática',t:'Devoirs · Malgré tout',i:'Devoirs : bien que, malgré, pourtant, même si.',q:[
    PICK('[*Bien qu’/Malgré qu’] il pleuve, nous sortons. [*Malgré/Bien que] la pluie, le concert a eu lieu. Il est riche ; [*pourtant/malgré], il vit simplement.'),
    KWT('Il fait froid, mais nous allons à la plage.','BIEN QUE','___ froid, nous allons à la plage.','Bien qu’il fasse'),
    KWT('Il était fatigué, mais il a terminé le marathon.','MALGRÉ','___ , il a terminé le marathon.','Malgré sa fatigue/Malgré la fatigue'),
    FIX('Bien qu’elle {est|soit} malade, elle travaille.'),
    SORT(`+ subjonctif: bien que, quoique
+ nom: malgré, en dépit de
+ indicatif: même si, pourtant`),
    'Écrivez un paragraphe argumentatif (180 mots) sur le télétravail avec bien que, malgré, pourtant et même si.']}
);
