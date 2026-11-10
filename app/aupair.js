/* =========================================================
   Sotaque · Au Pair: preparação para a entrevista de inglês da agência
   Simula a entrevista em inglês que a agência faz no Brasil antes de liberar o perfil
   para as famílias: conversa sobre a vida pessoal, o inglês, a experiência com crianças,
   situações do dia a dia ("What would you do if…?") e as expectativas sobre os EUA.
   Nível esperado: básico a intermediário (A2–B1).
   Usado pelo banco do Sotaque (tema "Au Pair") e pelas páginas de lição de casa em /aupair/.
   Itens: mc (alternativas), tf (verdadeiro ou falso), gap (lacuna, respostas com |),
   match (ligar), open (resposta escrita; au = pergunta lida em voz alta, m = exemplo de resposta).
   Linhas "A:" (entrevistadora) e "B:" (candidata) viram duas vozes.
   ========================================================= */
const AUPAIR_TAREFAS=[
  {lv:'A2',title:'Au Pair · The interview: all about you',ins:'Ouça a entrevista da Camila com a agência e responda. Dá para ouvir quantas vezes quiser.',
   audio:`A: Hi Camila, nice to meet you. Thank you for coming to this interview. How are you today?
B: Hi! I'm fine, thank you. I'm a little nervous, but I'm happy to be here.
A: Don't worry, it's just a conversation. So, tell me a little about yourself.
B: Well, I'm twenty-one years old and I'm from Curitiba, in the south of Brazil. I live with my parents and my younger brother, Davi. He's twelve.
A: That's nice. Are you studying or working at the moment?
B: Both! I study Pedagogy at university in the evening, and in the morning I work as an assistant at a kindergarten.
A: Great. What do you like to do in your free time?
B: I love cooking, and I go running in the park on weekends. I also like watching series and reading.
A: And how long have you studied English?
B: For about three years. I study with a private teacher once a week, and I watch series in English to practise.
A: Very good. Can you describe yourself in three words?
B: Hmm, let me think. I'm patient, organised and very friendly.`,
   items:[
     {t:'mc',p:'How old is Camila?',o:['nineteen','twenty-one','twenty-five'],c:1},
     {t:'mc',p:'Who does she live with?',o:['with friends','alone','with her parents and her brother'],c:2},
     {t:'mc',p:'What does she do in the morning?',o:['she studies Pedagogy','she works at a kindergarten','she goes running'],c:1},
     {t:'tf',p:'She goes running every day after work.',c:false},
     {t:'mc',p:'How does she practise English?',o:['she watches series in English','she lives with an American family','she listens to the radio'],c:0},
     {t:'gap',p:'I have studied English ___ about three years.',a:'for'},
     {t:'gap',p:'I’m patient, ___ and very friendly.',a:'organised|organized'},
     {t:'match',p:'Ligue a pergunta da entrevista à melhor resposta.',pairs:[['Tell me about yourself.','I’m 21 and I’m from Curitiba.'],['Are you studying or working?','I study Pedagogy and I work at a kindergarten.'],['What do you do in your free time?','I love cooking and running.'],['How long have you studied English?','For about three years.'],['Describe yourself in three words.','Patient, organised and friendly.']]},
     {t:'open',p:'Agora é a sua vez. Ouça e responda em inglês, como na entrevista.',au:'Tell me a little about yourself.',m:'I’m 22 years old and I’m from Londrina, in Paraná. I live with my mother and my sister. I study Nursing and I work part-time in a shop. In my free time I like dancing, cooking and spending time with my friends.'},
   ]},
  {lv:'A2',title:'Au Pair · Experience with children',ins:'Ouça a Camila falando da experiência dela com crianças e responda.',
   audio:`A: So, Camila, do you have any experience with children?
B: Yes, I do. I work at a kindergarten with children from two to five years old. I help the teacher with activities, snacks and nap time.
A: That's great. Have you ever babysat?
B: Yes, many times. I often babysit my neighbour's kids, a girl of four and a baby boy of ten months. I usually look after them on Saturday nights, when their parents go out.
A: What do you do with them?
B: With the girl, I play games, draw and read stories. With the baby, I feed him, change his diapers and put him to bed.
A: What is the most difficult part of taking care of children?
B: I think it's when they are tired and they cry a lot. I try to stay calm and understand what they need.
A: And which age group do you prefer?
B: I love toddlers, but I'm comfortable with all ages.`,
   items:[
     {t:'mc',p:'Where does Camila work?',o:['at a hospital','at a kindergarten','at a high school'],c:1},
     {t:'mc',p:'How old is the neighbour’s baby?',o:['four months','ten months','two years'],c:1},
     {t:'mc',p:'When does she usually babysit?',o:['on Saturday nights','every afternoon','on Sunday mornings'],c:0},
     {t:'tf',p:'She changes the baby’s diapers.',c:true},
     {t:'mc',p:'What does she do when the children are tired and cry a lot?',o:['she calls their parents','she stays calm and tries to understand what they need','she gives them sweets'],c:1},
     {t:'match',p:'Ligue a expressão ao significado.',pairs:[['change diapers','trocar fralda'],['put to bed','colocar para dormir'],['pick up from school','buscar na escola'],['give a bath','dar banho'],['make a snack','fazer um lanche'],['help with homework','ajudar com o dever de casa']]},
     {t:'gap',p:'I often ___ after my neighbour’s kids. (cuidar)',a:'look'},
     {t:'gap',p:'With the baby, I feed him and put him to ___.',a:'bed'},
     {t:'gap',p:'Have you ever ___ (babysit)? Yes, many times.',a:'babysat'},
     {t:'open',p:'Ouça e responda em inglês.',au:'Do you have any experience with children? Tell me about it.',m:'Yes, I do. I have two cousins, a boy of six and a girl of three, and I often take care of them on weekends. I play with them, make snacks, help with homework and put them to bed. I love it because they are very fun.'},
   ]},
  {lv:'B1',title:'Au Pair · What would you do if…?',ins:'Na entrevista, a agência descreve situações com as crianças. Ouça as respostas da Camila e responda.',
   audio:`A: Now I'm going to describe some situations. What would you do if the child you take care of fell and hurt his knee?
B: First, I would stay calm and check if it's serious. If it's a small cut, I would clean it and put a band-aid on it. Then I would tell the host parents. If it were serious, I would call 911 immediately.
A: What would you do if a child refused to eat dinner?
B: I wouldn't force him. I would try to make dinner fun, maybe by eating together and talking. And I would follow the family's rules, because every family is different.
A: And what if the kids were fighting with each other?
B: I would separate them and ask what happened. Then I would help them say sorry and find a different game to play.
A: Last one: what would you do if you felt homesick?
B: I would call my family, but I would also try to keep busy, meet other au pairs and explore the city.`,
   items:[
     {t:'mc',p:'What would Camila do first if the child fell?',o:['call 911','stay calm and check if it is serious','call her mother in Brazil'],c:1},
     {t:'mc',p:'When would she call 911?',o:['if it were serious','always','never'],c:0},
     {t:'tf',p:'She would force the child to eat.',c:false},
     {t:'mc',p:'Why would she follow the family’s rules?',o:['because every family is different','because it’s the law','because the child asked her'],c:0},
     {t:'mc',p:'What would she do if the kids were fighting?',o:['send them to bed','separate them and ask what happened','call the police'],c:1},
     {t:'mc',p:'Qual é a MELHOR resposta? “What would you do if the baby had a high fever?”',o:['I would give him some medicine from my bag.','I would call the host parents and, if necessary, the doctor or 911.','I would wait and see if he gets better tomorrow.'],c:1},
     {t:'mc',p:'Qual é a MELHOR resposta? “What would you do if the child said: You are not my mom! I don’t have to listen to you!”',o:['I would shout at the child.','I would stay calm, be firm and follow the rules the parents gave me.','I would let the child do what he wants.'],c:1},
     {t:'gap',p:'If the child ___ (have) a fever, I would call the parents.',a:'had'},
     {t:'gap',p:'If it were serious, I ___ call 911.',a:'would'},
     {t:'gap',p:'I wouldn’t ___ (force) the child to eat.',a:'force'},
     {t:'open',p:'Ouça e responda em inglês. Use “I would…”.',au:'What would you do if the child you take care of didn’t want to go to bed?',m:'First, I would stay calm and remind him of the rules. I would read a story or sing a song to help him relax. If he still didn’t want to sleep, I would talk to the host parents to understand their routine.'},
   ]},
  {lv:'B1',title:'Au Pair · Why au pair? Life in the USA',ins:'Ouça a Camila falando da motivação e das expectativas e responda.',
   audio:`A: Why do you want to be an au pair?
B: I've always loved working with children, and I want to improve my English and learn about a different culture. Living with an American family is a unique experience.
A: What do you expect from your host family?
B: I hope they will be open and patient, and that we can talk honestly about the rules and the routine. I would like to feel like part of the family.
A: What would you like to do in the US in your free time?
B: I'd like to take a course, travel with other au pairs and visit national parks. I've never seen snow, so I really hope to see it!
A: What do you think will be the biggest challenge for you?
B: Probably being far from my family and speaking English all the time. But I'm ready for it.
A: Can you drive?
B: Yes, I've had my driving licence for three years and I drive every day.`,
   items:[
     {t:'mc',p:'Why does Camila want to be an au pair?',o:['to earn a lot of money','to work with children and learn about another culture','because her friends live in the US'],c:1},
     {t:'mc',p:'What does she expect from her host family?',o:['that they are open and patient','that they give her a car','that they speak Portuguese'],c:0},
     {t:'tf',p:'She has seen snow before.',c:false},
     {t:'mc',p:'What does she think will be the biggest challenge?',o:['the food','being far from her family and speaking English all the time','driving'],c:1},
     {t:'mc',p:'How long has she had her driving licence?',o:['for one year','for three years','she can’t drive'],c:1},
     {t:'mc',p:'Qual resposta NÃO é uma boa ideia para “Why do you want to be an au pair?”',o:['Because I love children and I want to grow as a person.','Because I just want to party in the US.','Because I want to improve my English and share my culture.'],c:1},
     {t:'gap',p:'I’ve always ___ working with children.',a:'loved|liked|enjoyed'},
     {t:'gap',p:'I ___ like to take a course in the US.',a:'would'},
     {t:'gap',p:'I’ve never seen snow, so I hope ___ see it!',a:'to'},
     {t:'open',p:'Ouça e responda em inglês.',au:'Why do you want to be an au pair?',m:'I want to be an au pair because I love children and I want to live a new culture. I also want to improve my English and become more independent. I think it’s a great opportunity to grow as a person.'},
     {t:'open',p:'Ouça e responda em inglês.',au:'What do you expect from your host family?',m:'I hope my host family is friendly and open, and that we can talk about the rules and the routine. I would like to feel like part of the family and share my Brazilian culture with them.'},
   ]},
  {lv:'B1',title:'Au Pair · Interview simulation (speaking)',ins:'Simulação da entrevista. Ouça cada pergunta e responda em voz alta primeiro, com frases completas. Depois escreva palavras-chave ou a resposta.\n\nDica: se não entender, peça “Could you repeat, please?”. Para ganhar tempo: “That’s a good question. Let me think…”',
   items:[
     ['Tell me a little about yourself.','I’m 21 and I’m from Curitiba. I live with my parents and my brother, and I study Pedagogy.'],
     ['Tell me about your family.','I have a small family: my parents, my younger brother and our dog. We are very close and we have lunch together on Sundays.'],
     ['What do you do in your free time?','I like cooking, running and watching series. On weekends I usually go out with my friends.'],
     ['How long have you studied English? How do you practise?','For about three years. I have classes once a week and I watch series and listen to music in English.'],
     ['Do you have any experience with children?','Yes. I work at a kindergarten and I often babysit my neighbour’s kids.'],
     ['What do you like most about working with children?','I love how curious and honest they are. Every day is different and they teach me a lot.'],
     ['What would you do if the child got hurt?','I would stay calm, check if it is serious and give first aid. Then I would call the host parents, or 911 if it were an emergency.'],
     ['What would you do on a rainy day with a five-year-old?','We could bake cookies, build a tent with blankets, draw or play board games.'],
     ['Why do you want to be an au pair?','Because I love children, I want to improve my English and I want to live a new culture.'],
     ['What do you expect from your host family?','I hope they are open and patient, and that we can talk honestly about the rules.'],
     ['What will be the biggest challenge for you?','Being far from my family. But I’m independent and I will keep busy and make new friends.'],
     ['Do you have any questions for me?','Yes! How long does it usually take to find a host family?'],
   ].map(([au,m])=>({t:'open',p:'Ouça a pergunta e responda.',au,m}))},
];

/* lição de casa: duas páginas para a aluna fazer sozinha, com correção na hora e o link de respostas para a professora */
const AUPAIR_CASA={
  1:{lv:'A2',title:'Au Pair · Lição de casa 1: about you and kids',intro:'Treino para a entrevista de inglês da agência: falar de você, da sua família e da sua experiência com crianças. Uns 25 minutos.',
    parts:[
      {title:'Listening · Bianca’s video for host families',ins:'Muitas candidatas gravam um vídeo para as famílias. Ouça o da Bianca e responda.',
       audio:`Hi, host families! My name is Bianca, I'm twenty-two years old and I'm from Salvador, in Brazil. I live with my mum, my grandmother and my little sister, Lara, who is six. I'm studying Physical Education, so I love sports, especially swimming and volleyball. I have a lot of experience with children: I take my sister to school every day, I help her with her homework and I give her a bath at night. I also worked as a swimming instructor for kids for one year. In my free time I like going to the beach, dancing and cooking Brazilian food. I can't wait to teach your kids some Portuguese words and to learn about your culture. Thank you for watching. Bye!`,
       items:[
         {t:'mc',p:'How old is Bianca?',o:['twenty','twenty-two','twenty-six'],c:1},
         {t:'mc',p:'Who is Lara?',o:['her daughter','her little sister','her cousin'],c:1},
         {t:'mc',p:'What is Bianca studying?',o:['Pedagogy','Physical Education','Nursing'],c:1},
         {t:'tf',p:'Bianca worked as a swimming instructor for kids.',c:true},
         {t:'mc',p:'What does she want to teach the kids?',o:['how to cook','some Portuguese words','how to play volleyball'],c:1},
       ]},
      {title:'Vocabulary · a day with the kids',ins:'Ligue cada parte da rotina ao significado.',
       items:[
         {t:'match',p:'Ligue a expressão ao significado.',pairs:[['wake the kids up','acordar as crianças'],['get them dressed','vestir as crianças'],['make breakfast','preparar o café da manhã'],['drive them to school','levar de carro para a escola'],['do the kids’ laundry','lavar a roupa das crianças'],['tidy up the toys','arrumar os brinquedos']]},
         {t:'mc',p:'“Babysit” quer dizer…',o:['cuidar de crianças por algumas horas','dar aula para crianças','brincar no parque'],c:0},
         {t:'mc',p:'A “toddler” is a child of about…',o:['1 to 3 years old','6 to 10 years old','12 to 15 years old'],c:0},
       ]},
      {title:'Grammar · talking about you',ins:'Complete as frases. Elas são do tipo que você vai usar na entrevista.',
       items:[
         {t:'gap',p:'I ___ (live) with my parents and my brother.',a:'live'},
         {t:'gap',p:'My sister ___ (be) six years old.',a:'is'},
         {t:'gap',p:'I have studied English ___ three years.',a:'for'},
         {t:'gap',p:'I ___ (work) as a swimming instructor last year.',a:'worked'},
         {t:'gap',p:'I often take care ___ my little cousins.',a:'of'},
         {t:'mc',p:'Escolha a frase certa.',o:['I have 22 years.','I am 22 years old.','I am 22 years.'],c:1},
       ]},
      {title:'Your interview · answer the questions',ins:'Ouça cada pergunta. Responda primeiro em voz alta, depois escreva a sua resposta (2 a 4 frases). No final você vê um exemplo de resposta.',
       items:[
         {t:'open',p:'Ouça e responda.',au:'Hi! Nice to meet you. Can you tell me a little about yourself?',m:'Nice to meet you too! I’m 21 and I’m from Curitiba. I study Pedagogy and I work at a kindergarten.'},
         {t:'open',p:'Ouça e responda.',au:'Tell me about your family.',m:'I live with my parents and my younger brother. We are very close and we love having lunch together on Sundays.'},
         {t:'open',p:'Ouça e responda.',au:'What do you like to do in your free time?',m:'I like cooking, going to the park and watching series. I also love dancing.'},
         {t:'open',p:'Ouça e responda.',au:'Do you have any experience with children? How old were they?',m:'Yes. I take care of my cousins, a boy of five and a girl of eight. I also helped at my church’s kids’ club for two years.'},
         {t:'open',p:'Ouça e responda.',au:'What activities do you like to do with kids?',m:'I like reading stories, drawing, playing outside and cooking simple things with them, like cookies.'},
       ]},
    ]},
  2:{lv:'B1',title:'Au Pair · Lição de casa 2: situations and the USA',intro:'Treino para a entrevista de inglês da agência: situações com as crianças, motivação e expectativas sobre a vida nos EUA. Uns 25 minutos.',
    parts:[
      {title:'Listening · a call with a host mom',ins:'A Jennifer, uma host mom, explica a rotina da família. Ouça e responda.',
       audio:`Hi! I'm Jennifer, and I live in Denver, Colorado, with my husband, Mark, and our two kids. Noah is seven and Emma is three. We both work full-time, so we really need help in the mornings and in the afternoons. A typical day starts at seven: you would wake the kids up, make breakfast and drive Noah to school. Emma goes to preschool three mornings a week. In the afternoon you would pick Noah up at three, help him with his homework and play with them until we get home at six. We have a few important rules: no phones while driving, only one hour of screen time a day, and healthy snacks. On weekends you are usually free, and Denver is great for skiing and hiking. We would love an au pair who is responsible, active and loves the outdoors!`,
       items:[
         {t:'mc',p:'How many children does Jennifer have?',o:['one','two','three'],c:1},
         {t:'mc',p:'How old is Emma?',o:['three','five','seven'],c:0},
         {t:'mc',p:'What time does the au pair pick Noah up?',o:['at seven','at three','at six'],c:1},
         {t:'tf',p:'The kids can use screens for three hours a day.',c:false},
         {t:'mc',p:'What kind of au pair is the family looking for?',o:['someone who loves the outdoors','someone who can cook Italian food','someone who speaks Spanish'],c:0},
       ]},
      {title:'Situations · choose the best answer',ins:'Na entrevista, a agência quer ver se você é responsável e calma. Escolha a melhor resposta.',
       items:[
         {t:'mc',p:'“What would you do if the child had an allergic reaction?”',o:['I would give him water and wait.','I would follow the emergency plan, call 911 and then the host parents.','I would post a question on social media.'],c:1},
         {t:'mc',p:'“What would you do if the kids wanted to watch TV all afternoon?”',o:['I would let them, so they stay quiet.','I would follow the family’s screen time rule and suggest another activity.','I would turn off the TV and leave the room.'],c:1},
         {t:'mc',p:'“What would you do if you disagreed with a rule of the host parents?”',o:['I would ignore the rule.','I would talk to them calmly and respectfully, at a good moment.','I would complain to the kids.'],c:1},
         {t:'mc',p:'“What would you do if a child had a tantrum in the supermarket?”',o:['I would stay calm, get down to his level and talk to him quietly.','I would buy him the toy he wants.','I would shout so he stops.'],c:0},
       ]},
      {title:'Grammar · “I would…”',ins:'Complete com a forma certa do verbo.',
       items:[
         {t:'gap',p:'If the baby ___ (cry) a lot, I would check if he was hungry or tired.',a:'cried'},
         {t:'gap',p:'If I ___ (be) homesick, I would call my family.',a:'were|was'},
         {t:'gap',p:'I ___ call 911 if it were an emergency.',a:'would'},
         {t:'gap',p:'I hope ___ make friends with other au pairs.',a:'to'},
         {t:'gap',p:'I’m really looking forward ___ meeting your family.',a:'to'},
       ]},
      {title:'Your interview · answer the questions',ins:'Ouça cada pergunta. Responda primeiro em voz alta, depois escreva a sua resposta (2 a 4 frases). No final você vê um exemplo de resposta.',
       items:[
         {t:'open',p:'Ouça e responda.',au:'Why do you want to be an au pair in the United States?',m:'Because I love children and I want to live a new culture. I also want to improve my English and become more independent.'},
         {t:'open',p:'Ouça e responda.',au:'What would you do if the child you take care of got hurt?',m:'I would stay calm and check if it was serious. I would give first aid, and then call the host parents. If it were an emergency, I would call 911.'},
         {t:'open',p:'Ouça e responda.',au:'What do you expect from your host family?',m:'I hope they are friendly and patient, and that we can talk openly about the rules. I would like to feel part of the family.'},
         {t:'open',p:'Ouça e responda.',au:'What do you think will be the most difficult part of the program for you?',m:'Being far from my family and friends. But I’m independent, and I will try to keep busy and meet other au pairs.'},
         {t:'open',p:'Ouça e responda.',au:'Do you have any questions for me?',m:'Yes! What kind of support do au pairs get from the agency in the United States?'},
       ]},
    ]},
};

/* perguntas para a professora fazer na aula, como no speaking da entrevista da agência */
const AUPAIR_FALA=[
  {g:'Sobre você',qs:['Tell me a little about yourself.','Where are you from? Can you describe your city?','Who do you live with? Tell me about your family.','Are you studying or working at the moment? What do you do?','What do you like to do in your free time?','Describe yourself in three words.','What are your strengths? And one weakness?','What is your typical day like?']},
  {g:'Seu inglês',qs:['How long have you studied English?','How do you practise your English?','What is the most difficult thing about English for you?','How do you feel about speaking English all day?']},
  {g:'Experiência com crianças',qs:['Do you have any experience with children? Tell me about it.','How old were the children? What did you do with them?','Have you ever taken care of a baby? What did you do?','What do you like most about working with children?','What is the most difficult part of taking care of kids?','Which age group do you prefer, and why?','What would you do with a five-year-old on a rainy day?','How would you help a child with homework?']},
  {g:'Situações: what would you do if…',qs:['…the child fell and hurt himself?','…the baby had a high fever?','…the child didn’t want to go to bed?','…a child had a tantrum in the supermarket?','…the child said: “You’re not my mom, I don’t have to listen to you”?','…the kids were fighting with each other?','…you disagreed with a rule of the host parents?','…you felt homesick?']},
  {g:'Por que au pair e expectativas',qs:['Why do you want to be an au pair?','Why the United States?','What do you know about the au pair program?','What do you expect from your host family?','What would you like to do in your free time in the US?','What do you think will be your biggest challenge?','How would you feel living in a small town, far from a big city?','What can you teach the kids about Brazil?']},
  {g:'Perguntas práticas',qs:['Can you drive? How often do you drive?','Can you swim?','Can you cook? What would you cook for the kids?','Are you comfortable with pets?','Do you smoke?','Do you have any questions for me?']},
];
const AUPAIR_FRASES=[
  ['Para ganhar tempo','That’s a good question. Let me think…'],['Quando não entender','Sorry, could you repeat the question, please?'],['Para explicar melhor','What I mean is…'],
  ['Para dar um exemplo','For example, last summer I…'],['Para mostrar entusiasmo','I’m really looking forward to…'],['Para terminar uma resposta','So that’s why I think I’d be a great au pair.'],
];

/* banco do Sotaque: tema "Au Pair" */
function aupairQ(it){
  const q= it.t==='mc'? {type:'mc',prompt:it.p,options:it.o.slice(),correct:it.c} : it.t==='tf'? {type:'tf',prompt:it.p,correct:it.c}
    : it.t==='gap'? {type:'gap',prompt:it.p,answers:it.a.split('|')} : it.t==='match'? {type:'match',prompt:it.p,pairs:it.pairs.map(x=>x.slice())}
    : {type:'open',prompt:it.au? it.p+' '+it.au : it.p,...(it.au? {audio:it.au} : {})};
  return {id:uid(),...q};
}
function aupairBank(T0){
  const casa=Object.values(AUPAIR_CASA).map(d=>({lv:d.lv,title:d.title,ins:d.intro+'\n\n'+d.parts.map(p=>'· '+p.title).join('\n'),audio:d.parts.find(p=>p.audio)?.audio,items:d.parts.flatMap(p=>p.items)}));
  return AUPAIR_TAREFAS.concat(casa).map((t,k)=>({id:uid(),lang:'EN',level:t.lv,topic:'Au Pair',title:t.title,instructions:t.ins,audio:t.audio||'',questions:t.items.map(aupairQ),uses:0,mine:false,createdAt:T0-10*DAY+k*MIN}));
}
