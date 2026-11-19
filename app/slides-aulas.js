/* =========================================================
   Sotaque · atividades do banco que acompanham as aulas prontas (tirinhas e homeworks temáticas).
   As aulas em si (slides) ficam em slides-prontas.js, baixado só quando as Aulas são abertas.
   ========================================================= */
const SLIDES_SEED=[];
/* =========================================================
   Sotaque · aulas prontas em slides (formato em slides.js) e atividades de tirinha
   ========================================================= */
/* atividades "Complete a tirinha" (entram no banco com as outras dos tipos novos) */
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A2',tp:'Expressões',t:'Comics: everyday English',i:'Leia as tirinhas e escolha a fala que falta.',q:[
    COMIC(`[xicara]
Leo: Hi! What can I get you?
Ana: ___
---
Leo (feliz): Here you are!
Ana (feliz): Thanks!`,['A coffee, please.','I’m fine, thanks.','Nice to meet you.'],0),
    COMIC(`[cidade]
Tom: Excuse me, where’s the station?
Bia: ___
---
Tom (feliz): Thank you so much!
Bia: You’re welcome.`,['Go straight on and turn left.','It’s three o’clock.','I’m from Brazil.'],0),
    COMIC(`[casa]
Mia (triste): I failed my exam…
Sam: ___
---
Mia (feliz): Thanks. You’re a good friend.`,['Oh no! I’m sorry to hear that.','Congratulations!','Have a nice trip!'],0),
    COMIC(`[presente]
Ana (feliz): Happy birthday! This is for you.
Leo (surpreso): ___
---
Ana: I hope you like it!`,['Oh, thank you! You shouldn’t have!','See you tomorrow.','How much is it?'],0),
    COMIC(`[celular]
Bia: Hello, can I speak to Tom, please?
Sam: ___
---
Bia: OK, I’ll call back later.`,['Sorry, he’s not here right now.','Yes, I’m twenty.','No, thanks.'],0),
    COMIC(`[chuva]
Tom: It’s raining a lot!
Mia: ___
---
Tom (feliz): Good idea. Let’s go!`,['Why don’t we watch a film at home?','I went to the beach yesterday.','My name is Mia.'],0),
    COMIC(`[mala]
Sam (preocupado): My suitcase didn’t arrive!
Ana: ___
---
Sam: It’s big and blue.`,['Oh no. What does it look like?','Have a good flight!','Where are you from?'],0)]},
  {l:'FR',lv:'A2',tp:'Expressões',t:'BD : le français de tous les jours',i:'Lisez les BD et choisissez la réplique qui manque.',q:[
    COMIC(`[xicara]
Leo: Bonjour ! Qu’est-ce que je vous sers ?
Ana: ___
---
Leo (feliz): Voilà !
Ana (feliz): Merci !`,['Un café, s’il vous plaît.','Je vais bien, merci.','Enchantée.'],0,'Complétez la BD.'),
    COMIC(`[cidade]
Tom: Pardon, où est la gare ?
Bia: ___
---
Tom (feliz): Merci beaucoup !
Bia: De rien.`,['Allez tout droit et tournez à gauche.','Il est trois heures.','Je suis brésilienne.'],0,'Complétez la BD.'),
    COMIC(`[presente]
Ana (feliz): Joyeux anniversaire ! C’est pour toi.
Leo (surpreso): ___`,['Oh, merci ! Il ne fallait pas !','À demain !','C’est combien ?'],0,'Complétez la BD.'),
    COMIC(`[chuva]
Tom: Il pleut beaucoup !
Mia: ___
---
Tom (feliz): Bonne idée !`,['Et si on regardait un film à la maison ?','Je suis allée à la plage hier.','Je m’appelle Mia.'],0,'Complétez la BD.'),
    COMIC(`[mala]
Sam (preocupado): Ma valise n’est pas arrivée !
Ana: ___
---
Sam: Elle est grande et bleue.`,['Oh non ! Elle est comment ?','Bon voyage !','Tu viens d’où ?'],0,'Complétez la BD.')]},
);
/* a fala certa não fica sempre na letra A */
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.forEach(a=>a.q.forEach((q,k)=>{ if (q.type!=='comic'||q._rot) return; const n=q.options.length, r=(k*2+1)%n; q.options=q.options.map((_,i)=>q.options[(i-r+n)%n]); q.correct=(q.correct+r)%n; q._rot=1; }));
/* ---------- mais aulas A1, A2 e A2+ ---------- */
SLIDES_SEED.push(
['EN','A1','Verb to be',`# capa: Verb to be | img:conversa
I am, you are, she is: introducing yourself and others
# sobre: Sobre esta aula
ver: **am, is, are**; formas curtas (I’m, she’s); negativas e perguntas; idade, origem, profissão e sentimentos
porque: É o verbo mais usado do inglês e substitui **ser e estar** ao mesmo tempo. Toda conversa começa com ele.
meta: se apresentar e apresentar outras pessoas; dizer idade, origem e como está; fazer e responder perguntas simples
nivel: Nível A1
# aquecimento: Hello, who are you?
musica: Happy — Pharrell Williams | Ouçam o refrão e contem: quantas vezes aparece “I’m”? “I’m” = I am.
filme: Finding Nemo (2003) | Procurem a cena em que Marlin conhece a Dory: os dois se apresentam. Como eles dizem o nome?
jogo: Who am I? | Pense numa pessoa famosa. O outro pergunta “Are you a singer? Are you American?” e você responde “Yes, I am / No, I’m not”.
pergunta: What’s your name? Where are you from?
nota: Faça o jogo com 2 ou 3 famosos. Anote as perguntas que o aluno conseguiu fazer.
# tirinha: Nice to meet you
[conversa]
Leo: Hi! I’m Leo. What’s your name?
Ana (feliz): I’m Ana. Nice to meet you!
---
Leo: Are you from Brazil?
Ana: Yes, I am. I’m from Recife. And you?
---
Leo (feliz): I’m from Chile. My sister is in Recife now!
Ana (surpreso): Really? Cool!
# explica: Verb to be = ser ou estar
Em inglês, **ser** e **estar** são o mesmo verbo: **to be**.
> I am a teacher. (sou)
> I am tired. (estou)
Usamos para nome, idade, origem, profissão, sentimentos e lugar:
> She is 25. · They are from Italy. · We are at home.
# tabela: Positive and contracted form
Subject | to be | Short form
I | am | I’m
you / we / they | are | you’re / we’re / they’re
he / she / it | is | he’s / she’s / it’s
# exercicio: Practice 1 · am, is or are?
! Choose the right form.
escolha: My name [*is/am/are] Lucas and I [*am/is/are] 19.
escolha: My parents [*are/is/am] teachers.
escolha: It [*is/are/am] a beautiful day!
lacunas: Hi! I[’m] Bia. This [is] my brother Tom. We [are] from Salvador. || am, be
# tabela: Negative and questions
Positive | Negative | Question
I am happy. | I’m not happy. | Am I happy?
She is here. | She isn’t here. | Is she here?
They are at work. | They aren’t at work. | Are they at work?
Short answers: Yes, I **am**. / No, I’m **not**. · Yes, she **is**. / No, she **isn’t**.
# dica: Cuidado!
Em inglês, idade é com **be**, e não com have.
x: I have 20 years.
ok: I’m 20 (years old).
x: She is a doctor? (sem inverter)
ok: Is she a doctor?
# exercicio: Practice 2 · Negatives and questions
erro: I {have|am} twenty-two years old.
erro: {She is|Is she} a student?
ordem: Are you from Brazil
1. A: Are you tired? B: No, I ___.
a) amn’t
*b) ’m not
c) isn’t
# vocab: Feelings with be
happy | feliz | img:feliz
tired | cansado | img:cansado
sad | triste | img:triste
angry | bravo | img:bravo
bored | entediado | img:entediado
excited | animado | img:animado
# dialogo: Listen: at a party
A: Hi! Are you a friend of Carla?
B: Yes, I am. I’m Daniel. And you?
A: I’m Julia. I’m Carla’s cousin.
B: Nice to meet you, Julia. Are you from São Paulo?
A: No, I’m not. I’m from Curitiba.
# exercicio: Practice 3 · Listening
Daniel is Carla’s friend. (v)
Julia is from São Paulo. (f)
ditado: I’m Carla’s cousin.
# resumo: Summary
- **I am · you/we/they are · he/she/it is**
- Negative: **’m not / isn’t / aren’t**
- Question: put **be first**: Are you…? Is she…?
- Age with **be**: I’m 20.
# leitura: Meet the Andrade family | img:casa
tipo: Profile
This **is** the Andrade family. They **are** from Belo Horizonte, but now they **are** in Lisbon.
Marta **is** a nurse and her husband, Paulo, **is** a chef. Their kids **are** Lia, who **is** 10, and Theo, who **is** 7.
**Are** they happy in Portugal? “Yes, we **are**!” says Lia. “But I**’m not** happy with the cold winters!”
# conversa: Let’s talk | img:conversa
What’s your name? How old are you?
Where are you from? Where are you now?
How are you today? Are you tired or happy?
Who is your best friend? What is he or she like?
# tarefas: Atividades recomendadas
Verb to be
Subject pronouns
Possessive adjectives
Find the mistake: to be and have got`],
['EN','A1','Present simple',`# capa: Present simple | img:relogio
Routines, habits and facts
# sobre: Sobre esta aula
ver: rotinas, hábitos e fatos; o **-s** da 3ª pessoa; do e does; advérbios de frequência
porque: É a base para falar do **dia a dia**, do trabalho e dos gostos. O -s do he/she/it é um dos erros mais comuns de brasileiros.
meta: descrever a própria rotina; perguntar sobre a rotina dos outros; dizer com que frequência faz as coisas
nivel: Nível A1
# aquecimento: Every day
musica: Every Breath You Take — The Police | O título já está no present simple: “every” = toda vez. Que coisas você faz todo dia?
filme: Groundhog Day (1993) | Phil vive o mesmo dia de novo e de novo. Descrevam a rotina dele: “He wakes up at 6…”
jogo: Guess my job | Diga 3 coisas da sua rotina (“I get up at 5. I wear a uniform…”). O outro adivinha a profissão.
pergunta: What time do you get up?
# vocab: Daily routine
get up | levantar | img:relogio
have a shower | tomar banho | img:banheira
have breakfast | tomar café | img:xicara
go to work | ir trabalhar | img:onibus
cook dinner | fazer o jantar | img:panela
go to bed | ir dormir | img:cama
# explica: When do we use it?
**Routines and habits**: coisas que fazemos sempre.
> I get up at seven every day.
**Facts**: coisas que são verdade.
> Water boils at 100 degrees.
Palavras que combinam: every day, usually, always, never, on Mondays.
# tabela: I, you, we, they × he, she, it
Subject | Positive | Negative
I / you / we / they | work | don’t work
he / she / it | work**s** | doesn’t work
Spelling: go → go**es** · watch → watch**es** · study → stud**ies** · have → **has**
# exercicio: Practice 1 · The -s
escolha: My sister [*works/work] in a bank.
escolha: They [*live/lives] in Recife.
escolha: He [*watches/watchs/watch] TV every night.
grupos: + s: works, plays, reads / + es: goes, watches, does / ies: studies, flies, cries
# explica: Questions with do and does
**Do** + I/you/we/they · **Does** + he/she/it (o verbo volta sem -s)
> Do you like coffee? Yes, I do. / No, I don’t.
> Does she work here? Yes, she does. / No, she doesn’t.
> Where do you live? What time does he get up?
# dica: Cuidado!
x: She don’t like coffee.
ok: She doesn’t like coffee.
x: Does he works here?
ok: Does he work here?
x: He have a car.
ok: He has a car.
# exercicio: Practice 2 · Find the mistake
erro: She {don’t|doesn’t} eat meat.
erro: Does your brother {plays|play} football?
erro: My dad {have|has} a big car.
ordem: What time do you get up
# tabela: Adverbs of frequency
always | usually | sometimes | never
100% | 80% | 40% | 0%
Posição: **antes do verbo** (I always walk) e **depois de be** (I’m always late).
# exercicio: Practice 3 · How often?
escolha: I [*always have/have always] breakfast at home.
escolha: She is [*never late/late never].
reescreva: I go to the gym on Monday, Wednesday and Friday. | USUALLY | I ___ three times a week. | usually go to the gym
# dialogo: Listen: Ana’s routine
A: What time do you get up, Ana?
B: I usually get up at six.
A: Wow, early! Do you have breakfast at home?
B: No, I don’t. I have coffee at work.
A: And when do you go to bed?
B: At about eleven.
# exercicio: Practice 4 · Listening
Ana gets up at six. (v)
Ana has breakfast at home. (f)
ditado: I usually get up at six.
# resumo: Summary
- Routines, habits and facts
- **he / she / it + s** (works, goes, studies, has)
- **don’t / doesn’t + verb** · **Do / Does … + verb?**
- always, usually, sometimes, never **before** the verb
# leitura: A day in space | img:noite
tipo: Curiosity
Astronauts on the International Space Station **follow** a strict routine. They **wake up** at about six and **check** the station.
They **exercise** for around two hours every day, because muscles **get** weak in space.
At night, they **don’t sleep** in beds: they **sleep** in sleeping bags attached to the wall. And **does** anyone snore? Yes, sometimes!
# conversa: Your routine | img:relogio
What time do you get up on weekdays?
What do you usually have for breakfast?
What do you do on Saturdays?
Does anyone in your family get up very early?
# tarefas: Atividades recomendadas
Present simple · I, you, we, they
Present simple · he, she, it
Do and does: questions
Adverbs of frequency
Present simple · daily routine`],
['EN','A2','Present continuous',`# capa: Present continuous | img:cidade
What’s happening now?
# sobre: Sobre esta aula
ver: **am/is/are + -ing**; o que está acontecendo agora; diferença para o present simple; verbos que não usam -ing
porque: Serve para descrever **o que está acontecendo** (agora ou nestes dias) e para descrever imagens, algo muito usado em provas e no dia a dia.
meta: descrever o que está acontecendo; descrever uma imagem; diferenciar rotina e momento
nivel: Nível A2
# aquecimento: Right now!
musica: Waiting on the World to Change — John Mayer | O título usa -ing: uma ação em andamento. Que outras palavras com -ing vocês conhecem?
filme: Home Alone (1990) | Pausem qualquer cena com o Kevin sozinho em casa e descrevam: “What is he doing?”
jogo: What am I doing? | Mímica! Um faz a ação, o outro adivinha: “You’re cooking! You’re playing tennis!”
pergunta: What are you doing this week?
# linha: Now
faixa: 0.62-0.86 | I’m studying English now.
agora: 0.75
O present continuous fala do que está **acontecendo agora**, ou nestes dias.
> Look! It’s raining.
> I’m reading a great book this week.
# tabela: How to form it
Subject | be | verb + ing
I | am (’m) | working
you / we / they | are (’re) | working
he / she / it | is (’s) | working
Spelling: make → mak**ing** · run → ru**nn**ing · lie → l**y**ing
# exercicio: Practice 1 · The form
escolha: Look! The children [*are playing/is playing/play] in the garden.
escolha: I [*’m studying/studying/study] now. Call me later.
escolha: She [*is making/is makeing/makes] a cake right now.
grupos: + ing: playing, reading, cooking / drop the e: making, writing, dancing / double letter: running, swimming, sitting
# imagem: What are they doing? | img:mar
Look at the picture. What are the people doing?
Use: swimming, sailing, walking, sitting, playing…
# explica: Present simple or continuous?
**Present simple**: rotina, sempre
> I usually walk to work.
**Present continuous**: agora, temporário
> Today I’m taking the bus.
Verbos de estado (like, love, know, want) **não** usam -ing:
> I want a coffee. (não: I’m wanting)
# dica: Cuidado!
x: I am work now.
ok: I am working now.
x: She’s knowing the answer.
ok: She knows the answer.
x: What do you do now?
ok: What are you doing now?
# exercicio: Practice 2 · Simple or continuous?
escolha: I usually [*drink/am drinking] coffee, but today I [*’m drinking/drink] tea.
erro: He {is wanting|wants} a new phone.
erro: Listen! The baby {cries|is crying}.
# tirinha: On the phone
[celular]
Tom: Hi Bia! What are you doing?
Bia: I’m cooking dinner. And you?
---
Tom (feliz): I’m watching the match!
Bia (pensando): Who’s winning?
---
Tom (triste): Not my team…
# dialogo: Listen: a video call
A: Hi Mum! Can you see me?
B: Yes! Where are you? What are you doing?
A: I’m sitting in a café in Lisbon. I’m having lunch.
B: Lovely! Is it sunny there?
A: Yes, and people are walking on the beach.
# exercicio: Practice 3 · Listening
The son is having lunch in Lisbon. (v)
It’s raining in Lisbon. (f)
ditado: I’m sitting in a café.
# resumo: Summary
- **am / is / are + verb-ing**
- Now and temporary situations: now, at the moment, this week, Look!
- Routines → present simple · Now → present continuous
- State verbs (like, know, want) don’t use -ing
# leitura: Live from the street | img:cidade
tipo: Report
Hello from São Paulo! It**’s raining** a little, but the city **is moving** as always.
Next to me, a man **is selling** umbrellas and two kids **are jumping** in the water. People **are running** to the metro.
Right now, I**’m standing** in front of a café and the smell of coffee **is making** me hungry. Back to you in the studio!
# conversa: Let’s talk | img:cidade
What are you doing these days?
What is your family doing right now?
Are you reading or watching anything good?
What are people doing in your city on a Saturday?
# tarefas: Atividades recomendadas
Present continuous
Present simple or continuous?
Present simple · daily routine`],
['EN','A2','Going to: future plans',`# capa: Going to | img:mala
Plans and predictions
# sobre: Sobre esta aula
ver: **be going to** para planos e previsões; negativas e perguntas; going to × will
porque: É a forma mais natural de falar de **planos** já decididos, em conversas, no trabalho e em viagens.
meta: contar planos para o fim de semana e para o ano; fazer previsões com evidência; escolher entre going to e will
nivel: Nível A2
# aquecimento: Big plans
musica: I’m Gonna Be (500 Miles) — The Proclaimers | “Gonna” é como se fala “going to” na conversa. Ouçam o título!
filme: The Secret Life of Walter Mitty (2013) | Walter imagina e planeja grandes aventuras. Qual seria a sua grande aventura?
jogo: My bucket list | Escreva 3 coisas que você vai fazer na vida: “I’m going to see the Northern Lights.”
pergunta: What are you going to do this weekend?
# linha: Future plans
ponto: 0.55 | I decided yesterday
ponto: 0.9 | I’m going to travel
agora: 0.72
Usamos **going to** para **planos** já decididos e para **previsões** com evidência.
> I’m going to visit my grandma on Sunday. (plano)
> Look at the clouds! It’s going to rain. (evidência)
# tabela: How to form it
Subject | be | going to + verb
I | am (’m) | going to travel
you / we / they | are (’re) | going to travel
he / she / it | is (’s) | going to travel
Negative: I’m **not** going to… · Question: **Are** you going to…?
# exercicio: Practice 1 · The form
escolha: We [*are going to/going to/is going to] visit Peru next year.
escolha: [*Is she going to/She going to/Does she going to] study medicine?
escolha: I’m [*not going/no going/don’t going] to watch TV tonight.
ordem: What are you going to do tomorrow
# imagem: What’s going to happen? | img:tempestade
Look at the sky. What’s going to happen?
Use: It’s going to… rain / be cold / be a storm
# explica: Going to or will?
**going to** = plano decidido **antes**
> I’m going to buy a car. I’ve saved money for a year.
**will** = decisão **na hora**, oferta, promessa
> The phone is ringing. I’ll get it!
# exercicio: Practice 2 · Going to or will?
escolha: A: We have no milk. B: Really? I [*’ll buy/’m going to buy] some now.
escolha: I [*’m going to start/’ll start] a new job in May. I signed the contract.
erro: Look at that car! It {will crash|is going to crash}!
# tirinha: Weekend plans
[mala]
Mia: What are you going to do this weekend?
Sam (feliz): I’m going to visit my parents in Santos.
---
Mia: Nice! Are you going to drive?
Sam: No, I’m going to take the bus.
---
Mia (pensando): And I’m going to… sleep!
# dialogo: Listen: holiday plans
A: So, where are you going to go on holiday?
B: We’re going to travel to Chile.
A: Great! How long are you going to stay?
B: Two weeks. We’re going to visit the desert and the mountains.
A: Are you going to rent a car?
B: Yes, we are.
# exercicio: Practice 3 · Listening
They are going to travel to Chile. (v)
They are going to stay for a month. (f)
ditado: We’re going to visit the desert.
# resumo: Summary
- **am / is / are + going to + verb**
- Plans decided before: I’m going to study abroad.
- Predictions with evidence: It’s going to rain.
- Decisions now, offers: **will** (I’ll help you!)
# leitura: My plan for the next 12 months | img:mala
tipo: Blog
I made a decision: this year I**’m going to** say yes to new things.
First, I**’m going to** learn to swim. I’m 32 and I can’t swim! Then I**’m going to** travel alone for the first time.
I**’m not going to** wait for the perfect moment. And you? What **are** you **going to** do differently this year?
# conversa: Your plans | img:mala
What are you going to do this weekend?
Where are you going to go on your next holiday?
What are you going to do when you finish your course?
What’s something you’re never going to do?
# tarefas: Atividades recomendadas
Going to · plans
Will or going to?
Will: predictions, offers and decisions`],
['EN','A2','Comparatives and superlatives (A2+)',`# capa: Comparatives and superlatives | img:montanha
A2+ · Bigger, better, the best
# sobre: Sobre esta aula
ver: adjetivos curtos (-er, -est) e longos (more, the most); irregulares (better, the best); as… as
porque: **Comparar** é essencial para escolher, opinar e descrever: hotéis, cidades, produtos, pessoas.
meta: comparar duas coisas; dizer qual é a melhor ou a maior; dar opiniões com comparações
nivel: Nível A2+
# aquecimento: Bigger and better
musica: Harder, Better, Faster, Stronger — Daft Punk | O título inteiro é feito de comparativos! Como é cada palavra na forma “normal”?
filme: Zootopia (2016) | A Judy é menor que os outros policiais. Comparem os personagens: “The elephant is bigger than Judy.”
jogo: Which is bigger? | Escolham dois objetos da sala e comparem: bigger, smaller, older, more expensive…
pergunta: What’s the most beautiful place you know?
# tabela: Short adjectives
Adjective | Comparative | Superlative
small | small**er** than | the small**est**
big | big**ger** than | the big**gest**
easy | eas**ier** than | the eas**iest**
nice | nic**er** than | the nic**est**
# tabela: Long and irregular adjectives
Adjective | Comparative | Superlative
expensive | **more** expensive than | **the most** expensive
beautiful | **more** beautiful than | **the most** beautiful
good | **better** than | **the best**
bad | **worse** than | **the worst**
far | **further** than | **the furthest**
# exercicio: Practice 1 · The form
escolha: Rio is [*bigger/more big/biggest] than Salvador.
escolha: This is the [*most expensive/expensivest/more expensive] hotel in town.
escolha: My English is [*better/gooder/best] than last year.
grupos: + er / + est: cheap, tall, young / more / the most: expensive, comfortable, interesting
# explica: How to compare
Duas coisas: **comparative + than**
> São Paulo is bigger **than** Rio.
Uma coisa é a mais de todas: **the + superlative**
> It’s **the** tallest building **in** the city.
Iguais: **as … as** · Diferentes: **not as … as**
> My brother is **as tall as** my dad. · Tea is **not as strong as** coffee.
# dica: Cuidado!
x: She is more tall than me.
ok: She is taller than me.
x: It’s the more beautiful beach.
ok: It’s the most beautiful beach.
x: He is taller that me.
ok: He is taller than me.
# exercicio: Practice 2 · Find the mistake
erro: This pizza is {more good|better} than the other one.
erro: My city is {the more|the most} beautiful in Brazil.
erro: Brazil is bigger {that|than} Argentina.
reescreva: Ana is 1.60 m. Bia is 1.70 m. | TALLER | Bia ___ Ana. | is taller than
# imagem: Compare | img:onibus
Compare: the bus, the car and the bike.
Which is faster? Cheaper? Better for the city? Use: faster, cheaper, more comfortable, the best…
# dialogo: Listen: choosing a hotel
A: Which hotel is better, the Sea View or the Park?
B: The Sea View is more expensive, but it’s closer to the beach.
A: And the Park?
B: It’s cheaper and bigger, but it’s further from the centre.
A: I think the Sea View is the best for us.
# exercicio: Practice 3 · Listening
The Sea View is cheaper than the Park. (f)
The Park is further from the centre. (v)
ditado: It’s closer to the beach.
# resumo: Summary
- Short: **-er than / the -est** (taller, the tallest)
- Long: **more … than / the most …**
- Irregular: good → better → the best · bad → worse → the worst
- Equal: **as … as** · Different: **not as … as**
# leitura: Which is the best city in the world? | img:cidade
tipo: Opinion
Every year, someone publishes a list of **the best** cities to live in. But is a big city always **better than** a small one?
Big cities are **more exciting**, but they are also **more expensive** and **noisier**. Small towns are **quieter** and often **friendlier**.
In my opinion, **the best** city is the one where you feel at home. What’s **the most important** thing for you?
# conversa: Let’s compare | img:montanha
Compare your city with another city you know.
What’s the best restaurant in your city?
Is English more difficult than Portuguese? Why?
Who is the funniest person in your family?
# tarefas: Atividades recomendadas
Comparatives: my city
Superlatives
Comparatives and superlatives
As…as and not as…as`],
);
/* ---------- mais aulas (temas variados) ---------- */
/* ---------- homeworks novas (entram no banco) ---------- */
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'B1',tp:'Gramática',t:'Present perfect continuous: how long?',i:'Pratique o present perfect continuous: escolha, corrija e reescreva.',q:[
    PICK('I’m tired because I [*’ve been working/’ve worked/work] all day.'),
    PICK('How long [*have you been waiting/are you waiting/did you wait] for the bus?'),
    PICK('She [*has been learning/is learning/learns] Spanish since January.'),
    FIX('They {have been knowing|have known} each other for years.'),
    FIX('It {is raining|has been raining} since this morning.'),
    SORT('Continuous (activity): have been running, have been painting, have been studying\nSimple (result or state): have painted three rooms, have known her, have finished'),
    KWT('I started reading this book two hours ago and I’m still reading.','BEEN','I ___ this book for two hours.','have been reading/’ve been reading')]},
  {l:'EN',lv:'A2',tp:'Expressões',t:'Small talk: keep the conversation going',i:'Frases e respostas para conversas rápidas do dia a dia.',q:[
    ['How’s it going?',['Pretty good, thanks. And you?','I’m 25.','Yes, I do.'],0],
    ['Lovely weather today, isn’t it?',['Yes, it’s beautiful!','No, I’m not.','I like pizza.'],0],
    ODD('Which one is NOT a good small talk topic?',['the weather','the weekend','your salary','food'],2,[],'Salary is too personal for small talk.'),
    SEQ('A: Hi! How was your weekend?\nB: Great, thanks! I went to the beach.\nA: Oh, nice! Which beach?\nB: Praia do Forte. Have you been there?','Put the conversation in order.'),
    CLOZE('A: What do you [do]? B: I’m a nurse. A: Oh, [really]? Do you [enjoy] it?','make, real'),
    FIX('Nice to {know|meet} you!'),
    DIT('It was nice talking to you.')]},
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'At the doctor: symptoms and advice',i:'Sintomas, conselhos e frases para a consulta médica.',q:[
    SORT('Symptoms: a headache, a sore throat, a fever, a cough\nAdvice: take this medicine, drink water, stay in bed, see a doctor'),
    PICK('I’ve got a [*sore/sour/sick] throat.'),
    PICK('You [*should/must to/shoulds] stay in bed for two days.'),
    ['The doctor says: “What’s the matter?” You answer:',['I’ve got a terrible headache.','I’m a doctor.','It’s the matter.'],0],
    FIX('I’ve had {pain of head|a headache} since yesterday.'),
    CLOZE('Take one [tablet] three times a [day], after meals.','week, pill box'),
    DIT('I’ve had a fever since Monday.')]},
);
/* ---------- leva: A1 / A2 (frequência, horas, direções, roupas, pronomes, futuro) ---------- */
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Gramática',t:'How often? Adverbs in sentences',i:'Advérbios de frequência: a posição certa na frase.',q:[
    PICK('I [*always get up/get always up/get up always] at seven.'),
    PICK('She is [*never late/late never/never is late] for work.'),
    PICK('How often [*do you go/you go/are you go] to the gym?'),
    FIX('He {goes never|never goes} to the cinema.'),
    FIX('We {usually are|are usually} tired on Mondays.'),
    SEQ('I usually wake up at 7.\nThen I have a quick shower.\nI often eat bread for breakfast.\nI always take the bus to work.','Put Lia’s morning in order.'),
    KWT('I go swimming on Monday, Wednesday and Friday.','TIMES','I go swimming three ___ a week.','times')]},
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'Directions: follow the map',i:'Peça e dê direções na cidade.',q:[
    PICK('Go [*straight on/straight in/right on] until the traffic lights.'),
    PICK('The bank is [*next to/next/near of] the post office.'),
    PICK('Turn [*left/to left/at left] at the corner.'),
    ['A tourist asks: “Excuse me, where’s the station?” You answer:',['Go down this street and turn right. It’s on your left.','Yes, I’m a station.','It’s ten o’clock.'],0],
    CLOZE('The café is [between] the bank and the pharmacy, [opposite] the park.','under, inside'),
    FIX('Excuse me, {where is the museum, please|where the museum is, please}?'),
    DIT('Take the second street on the left.')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Will or going to? Choose and explain',i:'Planos, decisões na hora e previsões.',q:[
    PICK('Look at those clouds! It’s [*going to rain/will rain/rains].'),
    PICK('“The phone is ringing.” “I [*’ll answer/’m going to answer/answer] it!”'),
    PICK('I’ve bought the tickets. We [*’re going to see/’ll see/see] a concert on Friday.'),
    SORT('Plans (going to): I’m going to study medicine, We’re going to move in May\nInstant decisions (will): I’ll have the soup, I’ll help you with that'),
    FIX('Maybe it {is going to be|will be} sunny next week. I hope so!'),
    KWT('My plan is to visit my aunt on Sunday.','GOING','I ___ my aunt on Sunday.','am going to visit/’m going to visit')]},
);
/* ---------- leva: perguntas, have got, simple × continuous, advérbios, telefone, artigos, phrasal verbs ---------- */
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Gramática',t:'Wh- questions: ask the right question',i:'Escolha a palavra de pergunta certa e monte perguntas completas.',q:[
    PICK('[*Where/What/Who] do you live? — In Recife.'),
    PICK('[*Who/What/When] is your favourite singer? — Anitta.'),
    PICK('[*When/Where/Why] is your birthday? — In May.'),
    PICK('[*Why/How/What] are you sad? — Because I lost my phone.'),
    FIX('Where {you work|do you work}?'),
    PMATCH('How old are you? | img:bolo\nWhat time is it? | img:relogio\nWhere is the station? | img:trem\nHow much is it? | img:camiseta','Match each question to a picture.'),
    KWT('I want to know your name.','WHAT','___ your name?','what’s/what is')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Simple or continuous: right now or usually?',i:'Rotina (present simple) ou agora (present continuous)?',q:[
    PICK('Shh! The baby [*is sleeping/sleeps].'),
    PICK('I [*work/am working] in a bank. It’s my job.'),
    PICK('Look! It [*’s snowing/snows]!'),
    PICK('She usually [*takes/is taking] the bus, but today she [*’s walking/walks].'),
    SORT('Routine (simple): every day, usually, on Mondays, never\nNow (continuous): right now, at the moment, look!, today'),
    FIX('I {am knowing|know} the answer.'),
    KWT('My job is teaching English.','TEACH','I ___ English.','teach')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Adverbs: how do you do it?',i:'Adjetivo descreve a pessoa ou a coisa; advérbio descreve a ação.',q:[
    PICK('She speaks English very [*well/good].'),
    PICK('He is a [*careful/carefully] driver. He drives [*carefully/careful].'),
    PICK('Please talk [*quietly/quiet]. The baby is sleeping.'),
    FIX('You did the test {perfect|perfectly}!'),
    SORT('Adjective: happy, fast, good, hard\nAdverb: happily, slowly, well, quietly'),
    KWT('He is a fast runner.','RUNS','He ___.','runs fast')]},
  {l:'EN',lv:'A2',tp:'Expressões',t:'Phone calls: leave a message',i:'Frases para ligar, atender e deixar recado.',q:[
    ['You call a company. The receptionist says “Good morning, Lima Design.” You say:',['Hello, could I speak to Mr Lima, please?','Who are you?','Give me Mr Lima.'],0],
    PICK('Hold [*on/up/in], please. I’ll put you through.'),
    PICK('Can I [*take/do/make] a message?'),
    SEQ('A: Good morning, Blue Sky Travel.\nB: Hi, could I speak to Paula, please?\nA: I’m sorry, she’s in a meeting. Can I take a message?\nB: Yes, please ask her to call me back.','Put the phone call in order.'),
    FIX('Hello, {I am Carlos|this is Carlos} speaking.'),
    DIT('Could you ask her to call me back?')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Articles: a, an or the?',i:'A, an, the ou nada? Pratique os casos mais comuns.',q:[
    PICK('I have [*a/an/the] brother and [*an/a/the] uncle.'),
    PICK('Can you close [*the/a/an] door, please?'),
    PICK('[*–/The/A] dogs are friendly animals.'),
    PICK('She’s [*an/a/the] engineer.'),
    FIX('I play {the football|football} on Saturdays.'),
    FIX('My father is {doctor|a doctor}.'),
    CLOZE('I saw [a] cat and [a] dog. [The] cat was black.','an, some')]},
);
/* ---------- leva caprichada: preposições, descrever pessoas, pedidos, zero conditional, au pair ---------- */
/* ---------- homeworks das aulas caprichadas + homeworks temáticas ---------- */
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Gramática',t:'Prepositions: where is it?',i:'Olhe as imagens e diga onde estão as coisas: in, on, under, next to, behind.',q:[
    PICK('The cat is [*under/on/in] the bed. I can only see its tail!'),
    PICK('The milk is [*in/on/at] the fridge.'),
    PICK('There’s a clock [*on/in/under] the wall.'),
    PICK('Where [*are/is] my glasses? — [*They’re/It’s] on your head!'),
    LABEL('sofa | img:sofa\nfridge | img:geladeira\nbed | img:cama\nchair | img:cadeira','Write the name of each thing.'),
    FIX('The keys are {in|on} the table.'),
    SORT('in: the bag, the box, the fridge\non: the wall, the table, the floor\nunder: the bed, the sofa, the chair'),
    CLOZE('My room is small. My bed is [next] to the window. There’s a lamp [on] the desk, and my shoes are [under] the bed.','in, behind'),
    DIT('The book is on the table, next to the lamp.')]},
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'Describing people: who is who?',i:'Aparência e personalidade: leia, escolha e descreva.',q:[
    ['“What does your sister look like?”',['She’s tall, with long curly hair.','She’s very friendly.','She likes music.'],0],
    ['“What is your boss like?”',['He’s strict but fair.','He’s got a beard.','He looks like his father.'],0],
    PICK('She [*’s got/is] blue eyes and she [*’s/has got] very tall.'),
    PICK('He’s got [*short curly black/black curly short] hair.'),
    SORT('Appearance: tall, curly hair, a beard, slim\nPersonality: friendly, lazy, generous, shy'),
    ODD('Which one is NOT about personality?',['funny','shy','bald','kind'],2,[],'Bald (careca) is about appearance.'),
    FIX('My father is {sympathetic|friendly}: he talks to everyone at the bakery.'),
    KWT('My brother and my dad are very similar.','LOOKS','My brother ___ my dad.','looks like'),
    COMIC('[cidade]\nTom: Have you seen my friend?\nBia: ___\n---\nTom: She’s short and she’s got red hair.\nBia (feliz): Oh, she’s behind you!',['What does she look like?','What does she like?','How is she?'],0)]},
  {l:'EN',lv:'A2',tp:'Expressões',t:'Requests and offers: be polite!',i:'Peça, ofereça e responda com educação.',q:[
    ['At a restaurant, the most polite way is:',['Could I have the menu, please?','Give me the menu.','I want the menu.'],0],
    ['“Would you mind closing the door?” You say YES (you’ll do it):',['No, not at all.','Yes, I mind.','Yes, close.'],0],
    PICK('[*Would you like/Do you like] a glass of water? — Yes, please.'),
    PICK('Would you mind [*waiting/to wait/wait] a minute?'),
    PICK('[*Shall I/Will you I/Shall you] open the window?'),
    SORT('Requests: Could you help me?, Can you pass the salt?, Would you mind waiting?\nOffers: Shall I carry it?, Would you like a drink?, I’ll call a taxi'),
    SEQ('A: Good morning. Can I help you?\nB: Yes, please. Could you call a taxi for me?\nA: Of course. Would you like a coffee while you wait?\nB: Yes, please. That’s very kind of you!','Put the conversation in order.'),
    KWT('Please speak more slowly.','COULD','___ more slowly, please?','could you speak'),
    DIT('Could I leave my bags here for an hour?')]},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Zero conditional: if it rains, it…',i:'Fatos, regras e hábitos com if + present, present.',q:[
    PICK('If you heat ice, it [*melts/will melt/melted].'),
    PICK('If I drink coffee at night, I [*can’t/won’t can/couldn’t] sleep.'),
    PICK('If it rains tomorrow, we [*’ll stay/stay] at home.'),
    FIX('If you {will mix|mix} red and white, you get pink.'),
    SORT('Zero (always true): If you heat water it boils, If I’m tired I sleep early\nFirst (one future situation): If it rains tomorrow we’ll stay in, If I see Ana I’ll tell her'),
    CLOZE('If you feel cold, [put] on a jacket. If you’re thirsty, [drink] some water.','puts, drinking'),
    SEQ('If you want good bread, you need time.\nFirst, you mix flour, water and salt.\nIf the dough is too dry, you add more water.\nThen you wait, and if you wait long enough, it doubles in size.','Put the recipe tips in order.'),
    KWT('When I don’t sleep, I feel terrible.','IF','I feel terrible ___ sleep.','if I don’t'),
    DIT('If you need help, ask your manager.')]},
  {l:'EN',lv:'B1',tp:'Au Pair',t:'Au Pair · A day with the kids',i:'Rotina com as crianças, instruções gentis e conversa com a host family.',q:[
    SORT('Morning: wake up, breakfast, school run\nAfternoon: nap time, snack, playdate\nEvening: bath time, dinner, bedtime story'),
    PICK('After lunch, the baby has a [*nap/snack/bath].'),
    PICK('[*Let’s/Lets/Let] put your shoes on!'),
    ['The child is jumping on the sofa. The best thing to say is:',['Please don’t jump on the sofa. Let’s jump outside!','Stop it now!','Jumping is bad.'],0],
    ['The child doesn’t want to get dressed. You say:',['Do you want the dinosaur T-shirt or the blue one?','You have to. Now!','OK, stay in your pajamas.'],0],
    FIX('He didn’t eat {nothing|anything} at lunch.'),
    SEQ('A: Hi! How was the day?\nB: Good! Emma had a great nap.\nA: Did she eat her lunch?\nB: Not much, but she had a big snack at four.\nA: Thank you for telling me!','Put the conversation with the host mom in order.'),
    KWT('Can the kids play outside?','OK','Is it ___ play outside?','ok if the kids'),
    COMIC('[noite]\nMia (feliz): Time for bed, Tom!\nTom (bravo): One more story, please!\n---\nMia (pensando): ___\nTom (feliz): Deal!',['OK. One more story, then lights off.','No! Go to bed now!','I don’t care.'],0),
    DIT('Lucas fell at the park, but he’s fine now.')]},
  {l:'EN',lv:'A2',tp:'Cultura',t:'Theme · The World Cup',i:'Futebol em inglês: vocabulário, um texto curto e jogos.',q:[
    PMATCH('a ball | img:bola\na ticket | img:ingresso\na flag | img:bandeirinhas\na stadium | img:cidade','Match each word to a picture.'),
    SORT('People: the referee, the goalkeeper, the fans, the coach\nThings: the ball, the goal, the pitch, the whistle'),
    CLOZE('Brazil [won] the World Cup five times. The [fans] sing and dance in the stadium, and everybody waits for the [goal].','lost, players'),
    PICK('In British English, the game is called [*football/soccer/ball] and the field is the [*pitch/court/track].'),
    ['“The match ended 0–0.” It was:',['a draw','a win','a penalty'],0],
    ODD('Which one is NOT a football word?',['goal','referee','racket','penalty'],2,[],'A racket is for tennis.'),
    HUNT('goal, ball, fans, coach, match, team','Find 6 football words.'),
    FIX('Neymar {made|scored} a beautiful goal.'),
    DIT('The final is on Sunday at eight o’clock.')]},
  {l:'EN',lv:'B1',tp:'Cultura',t:'Theme · Movie night',i:'Gêneros, opiniões e vocabulário de cinema.',q:[
    SORT('Genres: horror, comedy, sci-fi, romance\nPeople: the director, the actor, the audience, the critic'),
    PICK('I loved the film! The [*plot/plate/plan] was amazing and the [*ending/end/final] was a surprise.'),
    PICK('It was so [*boring/bored] that I fell asleep.'),
    ['Your friend says: “Have you seen the new Batman film?” You haven’t. You answer:',['No, not yet. Is it good?','No, I didn’t.','Yes, I don’t.'],0],
    CLOZE('Last night I [watched] a horror film. The [special] effects were great, but the story was a bit [scary] for me!','saw film, funny'),
    FIX('The film {was based on|was based in} a true story.'),
    SEQ('First, we chose a film on Netflix.\nThen we made some popcorn.\nAfter that, we turned off the lights.\nIn the end, we all fell asleep before the ending!','Put Ana’s movie night in order.'),
    KWT('I have never seen such a funny film.','FUNNIEST','It’s the ___ seen.','funniest film I have ever/funniest film I’ve ever'),
    DIT('The ending was a big surprise.')]},
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'Theme · Healthy habits',i:'Hábitos saudáveis: comida, sono, exercício e conselhos.',q:[
    SORT('Healthy: drinking water, sleeping eight hours, walking every day, eating vegetables\nUnhealthy: skipping breakfast, eating fast food every day, staying up late, sitting all day'),
    PMATCH('vegetables | img:legumes\nwater | img:agua\nan apple | img:maca\na bike | img:bicicleta','Match each word to a picture.'),
    PICK('You [*should/should to/must to] drink more water.'),
    PICK('I go to the gym [*three times/three time/third times] a week.'),
    CLOZE('To be healthy, [try] to sleep eight hours, eat [less] sugar and [walk] every day.','more, drive'),
    ODD('Which one is NOT a healthy habit?',['going to bed late every night','eating fruit','drinking water','walking'],0,[],'Going to bed late is not good for your health.'),
    FIX('I need to {do|make} more exercise.'),
    KWT('It’s a good idea to eat more vegetables.','SHOULD','You ___ more vegetables.','should eat'),
    DIT('I try to walk for thirty minutes every day.')]},
  {l:'EN',lv:'A2',tp:'Cultura',t:'Theme · A weekend in London',i:'Uma viagem de fim de semana: lugares, transporte e frases úteis.',q:[
    PMATCH('London | img:londres\nthe Underground | img:trem\na double-decker bus | img:onibus\nan umbrella | img:chuva','Match each word to a picture.'),
    PICK('In London, the metro is called [*the Tube/the Subway/the Metro].'),
    PICK('Excuse me, how do I [*get to/go in/arrive to] Big Ben?'),
    ['At a café: “What would you like?” You say:',['I’d like a tea and a scone, please.','Give me tea.','I like tea.'],0],
    SEQ('On Saturday morning, we visited the British Museum.\nThen we had fish and chips for lunch.\nIn the afternoon, we took a boat on the Thames.\nOn Sunday, it rained, so we went shopping!','Put the weekend in order.'),
    CLOZE('London is [famous] for its red buses, its parks and its [rain]. Always take an [umbrella]!','dangerous, sun'),
    FIX('We {stayed in|stayed at} a small hotel near Hyde Park.'),
    CROSS('tube = The London metro.\nbus = Red and with two floors.\nrain = Water from the sky.\nqueen = She lived in Buckingham Palace.\ntea = A hot drink with milk.','Complete the crossword about London.'),
    DIT('Mind the gap between the train and the platform.')]},
  {l:'EN',lv:'B1',tp:'Vocabulário',t:'Theme · Technology and social media',i:'Redes sociais, celular e opiniões sobre tecnologia.',q:[
    SORT('Things you do: post, like, share, follow\nThings you have: a profile, followers, a password, notifications'),
    PICK('I [*spend/pass/use] too much time on my phone.'),
    PICK('She has a million [*followers/fans/friends] on Instagram.'),
    CLOZE('Please [log] in with your email and [password]. Don’t forget to [turn] off notifications at night.','sign, key'),
    ['Which is an opinion, not a fact?',['Social media makes people less happy.','Instagram was created in 2010.','Most phones have a camera.'],0],
    FIX('I {download|downloaded} the app yesterday and I love it.'),
    ODD('Which one is NOT something you do online?',['post','scroll','stream','knit'],3,[],'You knit with wool, not online!'),
    KWT('I started using this app two years ago.','FOR','I have ___ two years.','used this app for/been using this app for'),
    DIT('I turn off my phone an hour before bed.')]},
  {l:'EN',lv:'A2',tp:'Cultura',t:'Theme · Halloween and Thanksgiving',i:'Duas festas americanas: o que se faz, se come e se diz.',q:[
    SORT('Halloween: costumes, pumpkins, trick or treat, ghosts\nThanksgiving: turkey, family dinner, pie, saying thank you'),
    PICK('On Halloween, children say [*“Trick or treat!”/“Merry Christmas!”/“Happy birthday!”].'),
    PICK('Thanksgiving is in [*November/October/December] in the USA.'),
    CLOZE('At Thanksgiving, families eat [turkey] and pumpkin [pie], and they say what they are [thankful] for.','chicken, cake'),
    ODD('Which one is NOT about Halloween?',['a costume','a pumpkin','a turkey','a ghost'],2,[],'Turkey is for Thanksgiving.'),
    COMIC('[noite]\nLeo (feliz): Trick or treat!\nAna: ___\n---\nLeo (feliz): Thank you! Happy Halloween!',['Here you are! Have some candy.','Merry Christmas!','I’m a ghost.'],0),
    FIX('Kids {dress like|dress up as} witches and superheroes.'),
    DIT('We always have pumpkin pie at Thanksgiving.')]},
  {l:'EN',lv:'B1',tp:'Vocabulário',t:'Theme · Saving the planet',i:'Meio ambiente: problemas, soluções e o que cada um pode fazer.',q:[
    SORT('Problems: pollution, plastic in the ocean, global warming, deforestation\nSolutions: recycling, solar energy, public transport, planting trees'),
    PICK('We should [*recycle/recicle/recycling] glass, paper and plastic.'),
    PICK('If we don’t protect the forests, many animals [*will disappear/disappear/disappeared].'),
    CLOZE('I always take a [reusable] bag to the supermarket and I [turn] off the lights when I leave a room.','plastic, put'),
    ['“I think governments should do more.” This is:',['an opinion','a fact','a question'],0],
    FIX('There is too {many|much} plastic in the ocean.'),
    PMATCH('a tree | img:arvore\nthe sun | img:sol\nthe sea | img:mar\na bike | img:bicicleta','Match each word to a picture.'),
    KWT('Cars cause a lot of pollution in cities.','CAUSED','A lot of pollution in cities ___ cars.','is caused by'),
    DIT('Small changes can make a big difference.')]},
  {l:'EN',lv:'A2',tp:'Cultura',t:'Theme · Music and festivals',i:'Música, shows e festivais: vocabulário e conversa.',q:[
    PMATCH('a guitar | img:violao\nheadphones | img:fones\na microphone | img:microfone\na ticket | img:ingresso','Match each word to a picture.'),
    SORT('Instruments: guitar, drums, piano, violin\nPeople: singer, band, fans, DJ'),
    PICK('I [*’ve been/’ve gone/went] to three concerts this year.'),
    PICK('What kind of music [*do you like/are you liking/you like]?'),
    CLOZE('Rock in Rio is a huge music [festival]. Thousands of [fans] go every year to see their favourite [bands].','party, singers'),
    ODD('Which one is NOT a musical instrument?',['drums','piano','speaker','guitar'],2,[],'A speaker plays music, but it is not an instrument.'),
    SEQ('First, we bought the tickets online.\nOn the day, we arrived early to get a good place.\nThe band played for two hours.\nAfter the show, we were tired but very happy.','Put the concert story in order.'),
    FIX('She {touches|plays} the piano very well.'),
    DIT('My favourite band is playing in São Paulo next month.')]},
);

/* ---------- homework temática de cada aula (texto com áudio, questões e escrita) ---------- */
CONT_HW.push(
  {l:'EN',lv:'B1',t:'Homework · Reply to the email',i:'Lição de casa: leia o e-mail, responda às questões e escreva a resposta.',a:`Subject: Training session next week. Hi everyone, I hope you're all well. I'm writing to let you know that we're organising a training session on the new software next Wednesday, from 2 to 4 p.m., in Meeting Room B. The session is compulsory for the sales team, but anyone else is welcome to join. Please bring your laptop and make sure the app is installed before the session. I've attached the installation guide. Could you confirm your attendance by Monday? If you can't make it, please let me know, and we'll organise another date. Thanks a lot, and see you there! Best regards, Helen, HR Department.`,q:[
    ['What is the email about?',['a training session','a party','a new client'],0],['When is the session?',['Monday morning','Wednesday afternoon','Friday at 2'],1],
    ['Who must go?',['everyone','the sales team','only managers'],1],TF('Helen attached the installation guide.',true),
    ['What should people do by Monday?',['install the app','confirm their attendance','send a report'],1],
    MAT('Ligue.',[['attached','anexado'],['compulsory','obrigatório'],['attendance','presença'],['make it','conseguir ir']]),
    GAP('Please find ___ the installation guide. (anexo)','attached'),GAP('I look forward to ___ from you.','hearing'),
    'Reply to Helen (50–70 words): you can’t go on Wednesday. Apologise, explain why and suggest another day.']},
  {l:'EN',lv:'B1',t:'Homework · It’s not what I ordered',i:'Lição de casa: ouça a ligação, responda e escreva uma reclamação educada.',a:`A: Good morning, Shop Online customer service. How can I help you? B: Hi. I'm afraid there's a problem with my order. I ordered a blue jacket, size medium, but I received a pink one, size large. A: Oh, I'm really sorry to hear that. Could you give me your order number? B: Yes, it's 4-5-7-2-1. A: Thank you. I can see the mistake. We can send you the right jacket tomorrow, or give you a full refund. B: I'd prefer the right jacket, please. What should I do with the pink one? A: Just keep it in the box. Our driver will collect it when he delivers the new one. And we'll give you a ten percent discount on your next order. B: That's great, thank you.`,q:[
    ['What did the customer order?',['a pink jacket','a blue jacket','a blue shirt'],1],['What was wrong?',['the colour and the size','only the size','the price'],0],
    ['What does the customer choose?',['a refund','the right jacket','a discount only'],1],TF('The customer has to take the pink jacket to the post office.',false),
    ['What extra does the shop offer?',['free delivery','10% off the next order','a gift'],1],
    MAT('Ligue.',[['refund','reembolso'],['order number','número do pedido'],['collect','buscar, recolher'],['delivers','entrega']]),
    GAP('I’m ___ there’s a problem with my order.','afraid'),GAP('Would it be ___ to exchange it?','possible'),
    'Write a polite complaint email (60–80 words) about a product that arrived damaged. Explain the problem and ask for a solution.']},
  {l:'EN',lv:'B1',t:'Homework · My favourite series',i:'Lição de casa: ouça a recomendação, responda e escreva uma resenha curta.',a:`Have you seen Ted Lasso? If you haven't, you should definitely watch it. It's a comedy series about an American football coach who goes to England to manage a soccer team, even though he knows nothing about soccer! At first, everybody laughs at him, but slowly he wins them over with his kindness. The cast is brilliant, especially Hannah Waddingham as the club owner. The first season is hilarious and very moving. The third season is a bit too long, in my opinion, but it's still worth watching. If you like feel-good stories, you'll love it.`,q:[
    ['What kind of series is Ted Lasso?',['a horror series','a comedy','a documentary'],1],['What is Ted’s job?',['a football coach','a teacher','a journalist'],0],
    TF('Ted is an expert in soccer.',false),['What does the speaker think of the third season?',['the best one','a bit too long','boring and bad'],1],
    ['How does Ted win people over?',['with money','with his kindness','with jokes only'],1],
    MAT('Ligue.',[['hilarious','muito engraçado'],['moving','emocionante, tocante'],['cast','elenco'],['worth watching','vale a pena assistir']]),
    ['I ___ the first season last week.',['watched','have watched','watch'],0],GAP('It’s a series ___ a coach who goes to England.','about'),
    'Write a short review (60–80 words) of a series or film you love: what it’s about, the cast, your opinion and who should watch it.']},
  {l:'EN',lv:'B2',t:'Homework · A story to remember',i:'Lição de casa: tempos narrativos numa história real.',a:`It was the night before my wedding, and I had been preparing everything for months. I was driving to the hotel when I suddenly realised that I had left the rings at home. By the time I got back to my flat, it was almost midnight, and I couldn't find my keys anywhere. I had been carrying them all day, but now they had disappeared. I was sitting on the stairs, almost crying, when my neighbour opened her door. She had found my keys in the lift that afternoon! I got the rings, drove back to the hotel and finally went to bed at three. The next day, I was exhausted, but the wedding was perfect.`,q:[
    ['What had the speaker forgotten?',['the rings','the suit','the car keys'],0],['Why couldn’t he get into the flat?',['he had lost his keys','the door was broken','his neighbour was inside'],0],
    ['Where had the neighbour found the keys?',['in the car','in the lift','on the stairs'],1],TF('The speaker went to bed early that night.',false),
    ['When I arrived, the party ___.',['had already started','already started','has already started'],0],
    ['She was tired because she ___ all day.',['had been working','has worked','was work'],0],
    GAP('I ___ (drive) to the hotel when I remembered the rings.','was driving'),GAP('By the time we arrived, the film ___ (finish).','had finished'),
    'Write a story (100–120 words) about a day when everything went wrong. Use past simple, past continuous and past perfect.']},
  {l:'EN',lv:'B2',t:'Homework · Wishes and regrets',i:'Lição de casa: wish e if only no presente e no passado.',a:`I'm forty now, and people often ask me if I have any regrets. Of course I do. I wish I had travelled more when I was younger, before I had children. I also wish I had learned to play an instrument. My parents offered me piano lessons, and I said no. Today, I wish I could play something, even badly! In the present, I wish I had more time for my friends, and I really wish my teenage son would put his phone down at dinner. But I don't wish I had a different life. If only I could tell my younger self one thing, it would be: stop worrying so much.`,q:[
    ['What does the speaker regret about the past?',['not travelling more','having children','studying too much'],0],['Why can’t the speaker play an instrument?',['refused piano lessons','had no money','had no time'],0],
    ['What annoys the speaker about the son?',['his music','his phone at dinner','his friends'],1],TF('The speaker would like to have a completely different life.',false),
    ['I wish I ___ more money. (presente)',['had','have','would have'],0],['I wish I ___ to the concert last night.',['had gone','went','would go'],0],
    GAP('I wish my neighbour ___ stop making so much noise! (hábito irritante)','would'),GAP('If only I ___ (can) speak French!','could'),
    'Write about 3 wishes for the present and 2 regrets about the past (80–100 words).']},
  {l:'EN',lv:'B2',t:'Homework · Remote work: pros and cons',i:'Lição de casa: conectores de contraste, causa e consequência.',a:`Although working from home has many advantages, it isn't for everyone. On the one hand, you save time and money because you don't have to commute. You can also organise your day in a more flexible way. On the other hand, many people feel lonely, and it can be hard to switch off at the end of the day. Despite the freedom, some workers say they work longer hours than before. As a result, more and more companies are choosing a hybrid model, where employees go to the office two or three days a week. Whereas younger workers often prefer the office for social reasons, parents usually prefer to stay at home.`,q:[
    ['What is one advantage of working from home?',['no commuting','more meetings','a bigger salary'],0],['What is one problem?',['feeling lonely','too much traffic','expensive lunches'],0],
    ['What are many companies choosing?',['only remote work','a hybrid model','only office work'],1],TF('Parents usually prefer to work in the office.',false),
    ['___ the rain, we went to the beach.',['Despite','Although','However'],0],['___ it was late, they kept working.',['Although','Despite','In spite of'],0],
    GAP('Sales fell. As a ___, the shop closed.','result'),GAP('In spite ___ being tired, she finished the report.','of'),
    'Write an opinion paragraph (100–120 words): “Is remote work better than working in an office?” Use although, despite, however and as a result.']},
  {l:'EN',lv:'B2',t:'Homework · Life in 2035',i:'Lição de casa: future continuous e future perfect.',a:`What will life be like in 2035? Experts agree on a few things. By then, most new cars will be electric, and in many cities, people will be using self-driving taxis. Doctors will have started using AI to diagnose diseases much earlier. Many of us will be working only four days a week, and some jobs that exist today will have disappeared completely. On the other hand, some things won't change: we will still be complaining about the weather, and we will still be looking for good coffee. Personally, by 2035 I will have paid off my flat, and I'll be living somewhere near the sea.`,q:[
    ['What will most new cars be like?',['electric','faster','cheaper'],0],['What will doctors have started using?',['robots for surgery','AI to diagnose diseases','new hospitals'],1],
    ['How many days a week will many people be working?',['three','four','five'],1],TF('The speaker thinks people will stop complaining about the weather.',false),
    ['This time tomorrow, I ___ to Paris.',['will be flying','will have flown','fly'],0],['By Friday, we ___ the project.',['will have finished','will be finishing','finish'],0],
    GAP('By 2030, I ___ (save) enough money for a car.','will have saved'),GAP('___ you be using the car tonight? (pergunta educada)','Will'),
    'Write about your life in 2035 (80–100 words): what you will be doing and what you will have achieved by then.']},
  {l:'EN',lv:'B2',t:'Homework · The team meeting',i:'Lição de casa: ouça a reunião, responda e escreva o resumo com as ações.',a:`A: OK everyone, let's get started. The main point today is the summer campaign. In my view, we should focus on social media. B: I see what you mean, but I'm not sure that's enough. Our older customers don't use Instagram. C: That's a good point. What if we combine social media with emails? A: I couldn't agree more. Sorry, Mark, did you want to add something? D: Yes, just a quick point. We need to decide the budget first. A: Fair enough. So, to sum up: we'll use social media and emails, Julia will prepare the email plan, and Mark will send us the budget by Thursday. Let's touch base again on Friday.`,q:[
    ['What is the main point of the meeting?',['the summer campaign','the new office','a client complaint'],0],['Why isn’t social media enough?',['it’s too expensive','older customers don’t use Instagram','it’s too slow'],1],
    ['What do they decide?',['only emails','social media and emails','TV adverts'],1],['Who will send the budget?',['Julia','Mark','the manager'],1],
    TF('They will meet again on Thursday.',false),
    MAT('Ligue.',[['I couldn’t agree more','concordo totalmente'],['I see what you mean, but…','entendo, mas…'],['to sum up','resumindo'],['touch base','dar uma alinhada']]),
    GAP('Sorry to ___ , but can I add something?','interrupt'),
    'Write the summary email of the meeting (60–80 words): decisions, who does what and deadlines.']},
  {l:'EN',lv:'B2',t:'Homework · Moving abroad',i:'Lição de casa: used to, be used to e get used to.',a:`When I moved from Brazil to Germany, everything was different. In São Paulo, I used to have dinner at nine or ten at night, but here people eat at six! At first, I couldn't get used to it, but now I'm completely used to eating early. The hardest thing was the language. I used to think German was impossible, and I still make mistakes, but I'm getting used to speaking it at work. I'm also used to the cold now, although I still miss the beach. My friends ask if I would go back. Maybe one day, but I'm not used to the chaos of big Brazilian cities anymore.`,q:[
    ['Where did the speaker move to?',['Germany','Canada','Portugal'],0],['What time do people have dinner there?',['at six','at nine','at ten'],0],
    ['What was the hardest thing?',['the food','the language','the weather'],1],TF('The speaker is used to the cold now.',true),
    ['I ___ live in a small town when I was a child.',['used to','am used to','get used to'],0],['She’s used to ___ in English.',['working','work','worked'],0],
    GAP('It took me months to get used to ___ (drive) on the left.','driving'),GAP('Did you ___ to play football at school?','use'),
    'Imagine you moved to another country one year ago. Write 80–100 words: what you used to do, what you’re used to now and what you’re still getting used to.']},
  {l:'EN',lv:'B2',t:'Homework · A good deal',i:'Lição de casa: ouça a negociação, responda e escreva a sua proposta.',a:`A: Thanks for meeting us. We're interested in your coffee machines for our 20 offices. B: Great. Our price is 900 dollars per machine, including installation. A: That's a bit more than we expected. Would you consider 750? B: I'm afraid that's not possible. But if you signed a three-year maintenance contract, we could go down to 800. A: We could agree to 800, as long as the coffee for the first month is free. B: Hmm, I'll need to check with my manager. Can I get back to you tomorrow? A: Of course. And just to confirm, delivery would be within two weeks? B: Provided that you sign this week, yes. A: Perfect. Let's put that in writing.`,q:[
    ['What does the company want to buy?',['coffee machines','computers','chairs'],0],['What was the first price?',['750 dollars','800 dollars','900 dollars'],2],
    ['What does the seller want in exchange for 800?',['a three-year maintenance contract','payment in advance','100 machines'],0],['What does the buyer ask for?',['free coffee for the first month','free delivery','a bigger discount'],0],
    TF('The seller accepts everything immediately.',false),
    ['We won’t sign ___ the price includes delivery.',['unless','as long as','provided'],0],GAP('We can deliver in two weeks, provided ___ you sign today.','that'),
    MAT('Ligue.',[['It’s a deal','fechado'],['Would you consider…?','vocês considerariam…?'],['get back to you','te dar um retorno'],['counter-offer','contraproposta']]),
    'Write an email (80–100 words) making an offer to a supplier. Include a condition (as long as / provided that) and a counter-offer.']},
  {l:'EN',lv:'C1',t:'Homework · A speech to remember',i:'Lição de casa: inversão para dar ênfase.',a:`Never have I been so proud to stand in front of a group of people. When we started this project three years ago, little did we know how difficult it would be. Not only did we lose our main investor in the first year, but we also had to rebuild the entire team. Rarely does a start-up survive that kind of crisis. Only when we stopped trying to please everyone did we find our true customers. So, should anyone ask you what the secret is, tell them this: under no circumstances should you give up on the people who believe in you. Had I known how hard it would be, I would probably never have started. And I'm so glad I didn't know.`,q:[
    ['What happened in the first year?',['they lost their main investor','they won a prize','they sold the company'],0],['When did they find their true customers?',['when they stopped trying to please everyone','when they got a new investor','after the first month'],0],
    TF('The speaker regrets starting the project.',false),['Never ___ such a beautiful view.',['have I seen','I have seen','I saw'],0],
    ['Not only ___ late, but he also forgot the documents.',['was he','he was','he did'],0],['No sooner ___ home than it started to rain.',['had I got','I had got','did I got'],0],
    GAP('___ you need any further information, please contact us. (= If you need)','Should'),GAP('Little ___ they know what was about to happen.','did'),
    'Write the opening of a speech (100–120 words) for a special occasion (wedding, graduation, retirement). Use at least four inversions.']},
  {l:'EN',lv:'C1',t:'Homework · What really matters',i:'Lição de casa: cleft sentences para dar ênfase.',a:`What surprised me most when I started working with older people was how little they talked about money or success. What they talked about was family, friends and small moments. It wasn't the big events that they remembered, it was the ordinary afternoons: a walk by the river, a meal with friends. One lady told me, "All I ever wanted was to be loved." The reason why this stayed with me is that I was spending all my time at work. What I decided to do was simple: I started leaving the office at six. The thing that changed most wasn't my career. It was my happiness.`,q:[
    ['What did older people talk about?',['money and success','family, friends and small moments','travel'],1],['What did they remember most?',['big events','ordinary moments','their jobs'],1],
    ['What did the speaker decide to do?',['change jobs','leave the office at six','retire early'],1],TF('The speaker’s career changed the most.',false),
    ['___ I need is a holiday.',['What','That','It'],0],['It was my brother ___ broke the window.',['who','what','which'],0],
    GAP('All I want ___ a good night’s sleep.','is'),GAP('The reason ___ I called you is that I need help.','why'),
    'Write a paragraph (100–120 words) about what really matters to you. Use at least four cleft sentences (What I…, It was…, All I…, The reason why…).']},
  {l:'EN',lv:'C1',t:'Homework · Sliding doors',i:'Lição de casa: condicionais mistos.',a:`Ten years ago, I was offered a place at a university in London, but I decided to stay in Brazil because I was afraid of leaving my family. If I had gone, I would probably be speaking perfect English now, and I might be working for an international company. But if I weren't so attached to my family, I would have accepted without thinking. Looking back, if I hadn't stayed, I wouldn't have started my own business, which is now very successful. And but for that decision, I would never have met my partner. So, do I regret it? Not really. If I had to choose again, I think I would make the same choice.`,q:[
    ['What was the speaker offered?',['a job in London','a place at a university in London','a house in London'],1],['Why did the speaker stay?',['afraid of leaving the family','no money','bad English'],0],
    ['What did the speaker do instead?',['started a business','studied medicine','moved to Portugal'],0],TF('The speaker regrets the decision a lot.',false),
    ['If I had taken that job, I ___ in Paris now.',['would be living','would have lived','will live'],0],['If he ___ so lazy, he would have passed the exam.',['weren’t','hadn’t','isn’t'],0],
    GAP('But ___ your help, I would have failed.','for'),GAP('If I ___ (not / miss) the train, I would be at home now.','hadn’t missed|had not missed'),
    'Write about a decision that changed your life (100–120 words). How would your life be now if you had decided differently? Use mixed conditionals.']},
  {l:'EN',lv:'C1',t:'Homework · Prepare your presentation',i:'Lição de casa: estrutura, signposting e gráficos.',a:`Good morning, everyone. Today I'd like to talk about our results for the first half of the year. I've divided my presentation into three parts: sales, costs and our plans for next year. Let's start with sales. As you can see on this chart, sales rose steadily from January to April, and then increased sharply in May, when we launched the new app. They peaked at two million in June. That brings me to my second point: costs. Costs remained stable for most of the period, but fell slightly in June. Finally, our plans. The results suggest that the app is our biggest opportunity. To wrap up, thank you for your attention. I'm happy to take any questions.`,q:[
    ['How many parts does the presentation have?',['two','three','four'],1],['When did sales increase sharply?',['in January','in April','in May'],2],
    ['What happened in May?',['they launched a new app','costs rose','they opened a shop'],0],['What happened to costs in June?',['they rose sharply','they fell slightly','they peaked'],1],
    TF('Sales peaked at two million in June.',true),
    ['Let’s now ___ to the costs.',['turn','go on','change'],0],GAP('That ___ me to my next point.','brings'),
    MAT('Ligue.',[['rose steadily','subiu de forma constante'],['increased sharply','aumentou bruscamente'],['peaked','atingiu o pico'],['fell slightly','caiu levemente']]),
    'Write the script of a 2-minute presentation about your job or a project (120–150 words): opening, outline, two signposts, one chart description and the conclusion.']},
  {l:'EN',lv:'C1',t:'Homework · Idioms in context',i:'Lição de casa: expressões idiomáticas do dia a dia e do trabalho.',a:`What a week! On Monday, the client rejected our design, so we were back to square one. My boss wanted us to finish everything by Wednesday, but I told her we couldn't cut corners again. After a long meeting, we were finally on the same page. On Thursday, I was feeling a bit under the weather, but I went to work anyway. Then my colleague forgot to send the new proposal. That was the last straw! I sent it myself, and now the ball is in the client's court. On Friday, we went out for dinner to celebrate. The restaurant cost an arm and a leg, but it was worth it. We called it a day at midnight.`,q:[
    ['Why were they back to square one?',['the client rejected the design','they lost the files','the boss quit'],0],['How was the speaker feeling on Thursday?',['very happy','a bit ill','angry with the boss'],1],
    ['What was “the last straw”?',['the colleague forgot to send the proposal','the expensive restaurant','the long meeting'],0],TF('The restaurant was cheap.',false),
    MAT('Ligue.',[['back to square one','de volta à estaca zero'],['under the weather','indisposto'],['cost an arm and a leg','custar os olhos da cara'],['call it a day','encerrar por hoje']]),
    ['We need to start. Let’s ___.',['get the ball rolling','sit on the fence','break a leg'],0],['I see him ___. He lives abroad.',['once in a blue moon','under the weather','on the same page'],0],
    GAP('I sent the offer. Now the ball is in their ___.','court'),
    'Write about a crazy week (100–120 words) using at least five idioms from the lesson.']}
);

/* ---------- homeworks do lote 2 de aulas para adultos ----------
   Metade com áudio (texto ouvido + questões + escrita) e metade interativa (tirinha, ordem da história,
   cruzadinha, caça-palavras, ditado, corrigir o erro, separar em grupos…). */
CONT_HW.push(
  {l:'EN',lv:'A2',t:'Homework · You’re invited!',i:'Lição de casa: ouça a mensagem de voz, responda e escreva a sua resposta ao convite.',a:`Hi Carla, it's Daniel! I hope you're well. Listen, it's my birthday next Saturday, and I'm having a small party at my flat. Would you like to come? It starts at eight, and there will be pizza and music. My flat is on Green Street, number 25, near the park. Oh, and do you fancy coming to the cinema with us on Sunday afternoon too? We're watching the new James Bond film. Let me know by Thursday, OK? Bye!`,q:[
    ['Why is Daniel having a party?',['it’s his birthday','he has a new job','it’s Christmas'],0],['When is the party?',['next Friday','next Saturday','next Sunday'],1],
    ['What time does it start?',['at seven','at eight','at nine'],1],TF('The party is at a restaurant.',false),['What is Daniel doing on Sunday?',['going to the cinema','going to the beach','working'],0],
    GAP('Would you like ___ come to my party?','to'),['Sorry, I can’t. I ___ my parents on Saturday.',['’m visiting','visit','visited'],0],
    MAT('Ligue.',[['I’d love to!','Eu adoraria!'],['Do you fancy…?','Você está a fim de…?'],['Let me know','Me avise'],['another time','outro dia']]),
    'Reply to Daniel (40–60 words): accept the party, but refuse the cinema politely and give a reason.']},
  {l:'EN',lv:'A2',t:'Homework · Flat for rent',i:'Lição de casa: ouça o anúncio do apartamento e responda.',a:`Flat for rent in the city centre! This bright, modern flat has two bedrooms, a big living room, a kitchen with a new fridge and a small bathroom with a shower. There is a balcony with a beautiful view of the river. The flat is furnished, so you only need your clothes! The rent is one thousand dollars a month, and water is included, but electricity isn't. It's five minutes from the underground station. Sorry, no pets. Available from the first of May. Call Mrs Brown on 555-0192.`,q:[
    ['How many bedrooms are there?',['one','two','three'],1],['What’s special about the balcony?',['a view of the river','a garden','a barbecue'],0],
    TF('The flat is furnished.',true),['What is included in the rent?',['electricity','water','internet'],1],TF('You can live there with a cat.',false),
    ['When is it available?',['from the first of May','from the first of March','now'],0],GAP('There ___ a balcony with a view.','is|’s'),
    GAP('The flat is ___ than my house. (big)','bigger'),
    'Describe your home or your dream flat in an advert (50–70 words): rooms, furniture, location and price.']},
  {l:'EN',lv:'A2',t:'Homework · A festival in Brazil',i:'Lição de casa: ouça sobre uma festa brasileira e depois explique outra em inglês.',a:`Festa Junina is one of the most popular celebrations in Brazil. It takes place in June, and it celebrates the countryside and Saint John. People dress up as farmers: men wear checked shirts and straw hats, and women wear colourful dresses. Everybody dances the quadrilha, a traditional group dance. The food is delicious: there is corn on the cob, popcorn, paçoca and a sweet called pé de moleque. People also drink quentão, a hot drink with ginger. At night, there is usually a big bonfire. It's my favourite time of the year!`,q:[
    ['When is Festa Junina?',['in June','in December','in February'],0],['What do men usually wear?',['suits','checked shirts and straw hats','costumes of animals'],1],
    ['What is the quadrilha?',['a drink','a group dance','a type of corn'],1],TF('Quentão is a cold drink.',false),['What is there at night?',['fireworks only','a big bonfire','a parade'],1],
    GAP('People ___ (wear) colourful dresses.','wear'),GAP('It ___ (take) place in June.','takes'),
    MAT('Ligue.',[['bonfire','fogueira'],['straw hat','chapéu de palha'],['corn on the cob','milho na espiga'],['dress up','se fantasiar']]),
    'Explain another Brazilian celebration to a foreign friend (60–80 words): when, what people do, wear and eat.']},
  {l:'EN',lv:'B1',t:'Homework · Green challenge',i:'Lição de casa: ouça o podcast, responda e escreva o seu desafio verde.',a:`Welcome back to Green Minutes. This week, I tried a challenge: one month without buying anything in plastic. It was harder than I thought! In the first week, I realised that almost everything in the supermarket comes in plastic. So I started going to the local market with my own bags and containers. I also made my own cleaning products with vinegar and lemon. The hardest part? Coffee! My favourite café uses plastic cups, so I took my own mug. At the end of the month, my rubbish was half the size. My advice? You shouldn't try to be perfect. If everyone makes one small change, it will make a big difference.`,q:[
    ['What was the challenge?',['one month without plastic','one month without meat','one month without a car'],0],['What did the speaker realise in the first week?',['plastic is everywhere','markets are expensive','it was easy'],0],
    ['How did the speaker clean the house?',['with normal products','with vinegar and lemon','with only water'],1],['What was the hardest part?',['coffee','food','clothes'],0],
    TF('At the end, the rubbish was half the size.',true),['You ___ leave the tap running while you brush your teeth.',['shouldn’t','should','could'],0],
    GAP('If we all ___ (recycle), there will be less waste.','recycle'),GAP('You ___ take your own bag. (sugestão suave)','could'),
    'Create your own 1-week green challenge (80–100 words): what you will do, why, and what will happen if everyone does it.']},
  {l:'EN',lv:'B1',t:'Homework · My professional profile',i:'Lição de casa: ouça um perfil profissional e escreva o seu.',a:`Hi, I'm Renata. I'm a project manager with ten years of experience in technology companies. I've worked in Brazil and in Portugal, and I've led teams of up to fifteen people. In my last job, I managed the launch of a banking app that reached one million users in six months. I also reduced project delays by thirty percent by creating a new planning system. I'm passionate about clear communication and building happy, productive teams. At the moment, I'm looking for a new challenge in an international company.`,q:[
    ['What is Renata’s job?',['a designer','a project manager','a banker'],1],['Where has she worked?',['Brazil and Portugal','Brazil and Spain','only Brazil'],0],
    ['How many users did the app reach?',['one hundred thousand','one million','ten million'],1],['How did she reduce delays?',['by hiring more people','by creating a new planning system','by working weekends'],1],
    TF('She is happy in her current job and isn’t looking for a change.',false),['I ___ in marketing since 2018.',['have worked','worked','work'],0],
    GAP('In 2020, I ___ (lead) a team of ten people.','led'),GAP('I increased sales ___ 25%.','by'),
    'Write your LinkedIn “About” section (80–100 words): who you are, your experience, one achievement with a number and what you’re looking for.']},
  {l:'EN',lv:'B2',t:'Homework · Write an advert',i:'Lição de casa: ouça o anúncio de rádio, identifique as técnicas e crie o seu.',a:`Tired of waking up tired? Meet DreamCloud, the pillow that thinks for you. Using brand-new smart foam, DreamCloud adapts to your head and neck while you sleep. Over two hundred thousand happy customers can't be wrong: ninety-four percent say they sleep better in the first week. Recommended by sleep experts across the country. And for this week only, get fifty percent off plus free delivery. But hurry: only five hundred pillows are left at this price! DreamCloud. Because you deserve to wake up happy.`,q:[
    ['What is the product?',['a mattress','a pillow','a bed'],1],['What technique is “Tired of waking up tired?”',['a rhetorical question','scarcity','authority'],0],
    ['What technique is “Over two hundred thousand happy customers”?',['social proof','scarcity','emotion'],0],['What technique is “only five hundred pillows are left”?',['authority','scarcity','emotion'],1],
    TF('The discount is available all month.',false),['It’s the ___ comfortable pillow ever!',['most','more','much'],0],
    MAT('Ligue.',[['brand-new','novinho em folha'],['hassle-free','sem complicação'],['stunning','deslumbrante'],['effortless','sem esforço']]),
    'Write a radio advert (80–100 words) for an invented product. Use a rhetorical question, two powerful adjectives, social proof and scarcity.']},
  {l:'EN',lv:'B2',t:'Homework · For and against',i:'Lição de casa: ouça o debate, responda e escreva um parágrafo argumentativo.',a:`Host: Today's question: should schools ban mobile phones? Sarah, you're in favour. Sarah: Absolutely. Firstly, there is strong evidence that phones distract students. A study in England found that test scores improved by six percent after phones were banned. Moreover, children talk to each other more at break time. Host: James, you disagree. James: I see Sarah's point, but on the contrary, I think we should teach children to use phones responsibly. Banning them doesn't prepare them for real life. Nevertheless, I agree that phones shouldn't be used during lessons. Host: So there's some common ground. Thank you both.`,q:[
    ['What is the debate about?',['banning phones in schools','homework','school uniforms'],0],['What happened to test scores in the study?',['they fell','they improved by 6%','they stayed the same'],1],
    ['What is James’s main argument?',['phones are dangerous','children should learn to use phones responsibly','phones are too expensive'],1],
    TF('James and Sarah agree on nothing.',false),['___ , children talk to each other more. (adicionando)',['Moreover','Nevertheless','On the contrary'],0],
    ['I see your point. ___ , I disagree.',['Nevertheless','Moreover','Furthermore'],0],
    GAP('There is strong ___ that phones distract students.','evidence'),
    'Write a for-and-against paragraph (120–150 words): “Should schools ban mobile phones?” Use P.E.E. (point, evidence, explanation) and three linkers.']},
  {l:'EN',lv:'C1',t:'Homework · The AI debate',i:'Lição de casa: ouça o podcast, responda e escreva a sua opinião com nuance.',a:`Welcome to Tech Talk. Today, a question that divides experts: will artificial intelligence be good for workers? Some economists argue that AI is bound to increase productivity, just like electricity did a century ago. In their view, new jobs we can't even imagine are likely to appear. Others are more cautious. They point out that, unlike previous technologies, AI can automate tasks that require language and creativity, so the impact could well be unprecedented. Arguably, the real question is not the technology itself, but who benefits from it. If governments invest in retraining, the transition might conceivably be smooth. If not, inequality is likely to grow.`,q:[
    ['What do optimistic economists compare AI to?',['electricity','the printing press','cars'],0],['Why are other experts cautious?',['AI is too expensive','AI can automate language and creative tasks','AI is too slow'],1],
    ['According to the speaker, what is arguably the real question?',['who benefits from AI','how fast AI is','which company is best'],0],
    TF('The speaker is completely sure that AI will be bad for workers.',false),['AI ___ change education in the next decade. (muito provável)',['is bound to','is unlikely to','might conceivably'],0],
    ['The fears are, ___ , justified. (até certo ponto)',['to some extent','to some extend','at some extent'],0],GAP('It’s ___ to replace teachers completely. (improvável)','unlikely'),
    'Write a nuanced opinion (150–180 words): “AI will do more good than harm.” Use at least four expressions of certainty and two hedging expressions.']},
  {l:'EN',lv:'C1',t:'Homework · The crisis statement',i:'Lição de casa: ouça o comunicado da empresa, avalie e escreva o seu.',a:`Statement from the CEO of FreshBox. Last week, a number of our customers became ill after eating salads delivered by FreshBox. First and foremost, I want to say how deeply sorry we are. No one should ever feel unsafe eating our food. Although the problem was caused by one of our suppliers, we take full responsibility. We have taken three immediate steps. We have stopped working with the supplier. Every affected customer will receive a full refund and a free month of meals. And from today, an independent laboratory will test every batch before delivery. We know that trust has to be earned again, and we are committed to doing exactly that.`,q:[
    ['What is the main purpose of the statement?',['to apologise and explain the actions','to blame the supplier','to announce new products'],0],['Who caused the problem?',['FreshBox staff','a supplier','the customers'],1],
    ['What will affected customers receive?',['a discount','a full refund and a free month','a letter'],1],['What will an independent laboratory do?',['test every batch','cook the meals','visit customers'],0],
    TF('The CEO says FreshBox is not responsible at all.',false),['I’d suggest that the company ___ publicly.',['apologise','apologises','to apologise'],0],
    GAP('It is essential that every batch ___ tested. (be)','be'),
    'Write a short crisis statement (120–150 words) for a company whose app leaked customer data. Apologise, take responsibility, explain three actions and end with a commitment.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Expressões',t:'Homework · Hello, I’m…',i:'Lição de casa: apresentações, perguntas pessoais e um pouco de escuta.',q:[
    COMIC(`[cidade]
Ana: Hi! I’m Ana. What’s your name?
Leo: ___
---
Ana (feliz): Nice to meet you, Leo!
Leo (feliz): Nice to meet you too.`,['I’m fine, thanks.','I’m Leo.','I’m from Canada.'],1),
    PICK('I [*’m/is/are] from Brazil. Where [*are/is/am] you from? She [*’s/are/am] an engineer.'),
    SEQ('Hi! My name’s Pedro.\nI’m from Recife, in Brazil.\nI’m a nurse and I work in a hospital.\nNice to meet you!','Put Pedro’s introduction in order.'),
    CLOZE('My [name] is Julia. I’m [from] Portugal and I [live] in Lisbon. I’m a [teacher].','work, old'),
    MAT('Ligue a pergunta à resposta.',[['What do you do?','I’m a student.'],['Where are you from?','From Italy.'],['How old are you?','I’m 28.'],['How do you spell it?','L-U-C-A.']]),
    DIT('What’s your name?'),DIT('I live in São Paulo.'),
    'Write 5 sentences to introduce yourself: name, country, city, job and one thing you like.']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · My shopping list',i:'Lição de casa: comida, some e any, e preços.',q:[
    HUNT('apple, bread, cheese, eggs, juice, chicken, banana','Find 7 food words.'),
    CROSS(`cheese = It’s yellow and it comes from milk. | img:queijo
banana = A long yellow fruit. | img:banana
bread = You make sandwiches with it. | img:pao
eggs = Chickens give us these. | img:ovo`,'Complete the crossword.'),
    SORT(`Fruit: apple, banana, orange
Drinks: juice, water, milk
Other: bread, cheese, chicken`),
    PICK('We need [*some/any] eggs. Do we have [*any/some] milk? There isn’t [*any/some] bread.'),
    ['How much ___ the apples?',['is','are','am'],1],['How much ___ the cheese?',['is','are'],0],
    DIT('Can I have six eggs, please?'),
    'Write your shopping list for the week (8 items) and one sentence with some and one with any.']},
  {l:'EN',lv:'A2',tp:'Pronúncia',t:'Homework · Sounds and spelling',i:'Lição de casa: sons do -ed, th e letras mudas. Ouça e escreva!',q:[
    SORT(`/t/: worked, watched, stopped, laughed
/d/: played, called, lived, cleaned
/ɪd/: wanted, needed, decided, visited`,'Separe pelo som do -ed.'),
    ODD('Which -ed ending has a different sound?',['worked','stopped','wanted','watched'],2,[],'Wanted has an extra syllable: /ɪd/.'),
    ODD('Which word has a silent letter?',['know','now','new','no'],0,[],'Know: the k is silent.'),
    DIT('I think the thirteenth is on Thursday.'),DIT('They wanted to visit their mother.'),DIT('Listen to the knife on the island.'),
    ['How many syllables are there in “decided”?',['two','three','four'],1],TF('In “Wednesday”, we pronounce the first d.',false),
    'Write 5 sentences about last weekend using verbs with -ed. Then record yourself reading them.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · The missing ring',i:'Lição de casa: um mistério com past continuous e past simple.',q:[
    COMIC(`[casa]
Mia (preocupado): My ring is gone! What were you doing at 9 p.m.?
Tom: ___
---
Mia (pensando): Hmm… but the TV was off at nine!
Tom (surpreso): Oh no.`,['I watch TV.','I was watching TV.','I have watched TV.'],1),
    SEQ('Grandma was washing the dishes when she took off her ring.\nShe left it next to the sink.\nWhile she was talking on the phone, the cat jumped on the table.\nThe ring fell into the dog’s bowl.\nThe next morning, they found it under the dog’s blanket!','Put the story in order.'),
    PICK('While I [*was cooking/cooked], the phone rang. I [*answered/was answering] it immediately. When I came back, the cat [*was eating/ate/eats] my dinner!'),
    KWT('I was sleeping. Then the alarm went off.','WHILE','The alarm went off ___ .','while I was sleeping'),
    FIX('What {did you do|were you doing} at ten o’clock last night? I was at home.'),
    TF('“I was reading when the lights went out” has two actions: one in progress and one short.',true),
    'Write a short mystery (80–100 words): something disappeared at a party. Describe what three people were doing when it happened.']},
  {l:'EN',lv:'B1',tp:'Vocabulário',t:'Homework · Digital detox',i:'Lição de casa: tecnologia, too much / too many e enough.',q:[
    PICK('I spend [*too much/too many] time on my phone. I get [*too many/too much] notifications. I don’t get [*enough sleep/sleep enough].'),
    SORT(`too much: time, money, sleep
too many: apps, messages, notifications`,'Too much or too many?'),
    FIX('There are too {much|many} people online at night.'),
    CLOZE('Last week I tried a digital [detox]. I turned off my [notifications], deleted two [apps] and read a book instead of [scrolling].','charger, offline'),
    ODD('Which one is NOT related to phones?',['charger','notification','screen','fridge'],3),
    KWT('I don’t have time to read because of social media.','ENOUGH','I don’t have ___ to read because of social media.','enough time'),
    'Describe your digital habits (80–100 words). What do you do too much? What would you like to change?']},
  {l:'EN',lv:'B2',tp:'Leitura',t:'Homework · Read all about it',i:'Lição de casa: manchetes, passiva nas notícias e fake news.',q:[
    ['“President to visit Japan” means…',['The president visited Japan.','The president will visit Japan.','The president lives in Japan.'],1],
    ['“Three injured in train crash” means…',['Three people were injured.','Three people injured others.','Three trains crashed.'],0],
    ['“Star in row with neighbours” means the star…',['moved house','had an argument with neighbours','sat with neighbours'],1],
    MAT('Ligue a palavra de manchete ao significado.',[['probe','investigation'],['slash','cut a lot'],['vow','promise'],['quit','leave a job']]),
    KWT('The storm closed all the schools.','WERE','All the schools ___ the storm.','were closed by'),
    FIX('The bridge {has closed|has been closed} since Monday because of the floods.'),
    SORT(`Check before sharing: look at the source, check the date, read beyond the headline
Warning signs: very emotional headline, no author, unknown website`),
    'Choose a real news story from this week. Write a headline in headline grammar and a short summary (80–100 words) using the passive and reported speech.']},
  {l:'EN',lv:'B2',tp:'Phrasal verbs',t:'Homework · A love story',i:'Lição de casa: phrasal verbs de relacionamentos.',q:[
    SEQ('Leo and Mia met at a friend’s party.\nA week later, Leo asked her out.\nThey went out for two years and got on really well.\nThen they fell out about moving to another city.\nAfter a month, they made up and decided to move together.','Put the love story in order.'),
    PICK('I really [*get on with/get on/get with] my sister. They had a fight, but they [*made up/made out/made off] the next day. It took him a year to [*get over/get through/get on] the break-up.'),
    KWT('I really admire my grandmother.','LOOK','I really ___ my grandmother.','look up to'),
    KWT('I can’t tolerate the noise anymore.','PUT','I can’t ___ the noise anymore.','put up with'),
    COMIC(`[xicara]
Bia (triste): Tom and I fell out yesterday.
Ana: ___
---
Bia (feliz): Yes, we made up this morning!`,['Did you make up?','Did you break up?','Did you look up?'],0),
    FIX('He asked {out her|her out} and she said yes!'),
    'Write the story of a couple or two friends (100–120 words) using at least six phrasal verbs from the lesson.']},
  {l:'EN',lv:'C1',tp:'Expressões',t:'Homework · You won’t believe it',i:'Lição de casa: contar histórias como um nativo.',q:[
    COMIC(`[cidade]
Leo (surpreso): You won’t believe who I saw at the airport!
Ana: ___
---
Leo (feliz): Taylor Swift! Well… someone who looked like her.`,['No way! Who?','I agree with you.','Nevertheless, I disagree.'],0),
    PICK('So, the other day, I’m [*walking/walk/walked] to work, right? And this guy was [*like/as/so], “Is this your wallet?” It was [*sort of/sort/kind] embarrassing.'),
    SORT(`Starting a story: You won’t believe…, So the other day…
Reacting: No way!, You’re kidding!, Then what happened?
Vague language: sort of, and stuff like that, or something`),
    KWT('I was extremely hungry.','STARVING','I ___ .','was starving'),
    FIX('It was {kind|kind of} weird, to be honest.'),
    ['“To cut a long story short” means…',['to add more details','to get to the end quickly','to start again'],1],
    'Write an anecdote (150–180 words) in informal spoken English: a travel disaster or an embarrassing moment. Use the narrative present, two exaggerations and three discourse markers.']}
);

/* ---------- homeworks do lote 3 (inglês e francês) ---------- */
CONT_HW.push(
  {l:'EN',lv:'A2',t:'Homework · Welcome to my city',i:'Lição de casa: ouça um guia da cidade, responda e escreva sobre a sua.',a:`Welcome to Bath, a beautiful historic city in the south-west of England. It's quite small, so you can walk everywhere. The most famous place is the Roman Baths, which are almost two thousand years old. There's also a big abbey in the centre and lots of elegant streets with cafés and small shops. The city is quiet in winter, but in summer it's very lively and crowded with tourists. If you like food, there's a great market on Saturdays. Bath is smaller than London, but many people say it's more charming. Don't miss the view from the hill: it's the best in the city!`,q:[
    ['Where is Bath?',['in the north of England','in the south-west of England','in Scotland'],1],['How do people usually get around?',['by bus','on foot','by bike'],1],
    ['How old are the Roman Baths?',['about 200 years','about 2,000 years','about 20,000 years'],1],TF('The city is lively in summer.',true),['When is the market?',['on Saturdays','on Mondays','every day'],0],
    GAP('There ___ lots of cafés in the centre.','are'),GAP('Bath is ___ than London. (small)','smaller'),
    MAT('Ligue.',[['crowded','lotado'],['lively','animado'],['quiet','tranquilo'],['charming','encantador']]),
    'Write a short guide to your city (70–90 words): what it’s like, three places to visit and the best time to go.']},
  {l:'EN',lv:'A2',t:'Homework · My fitness plan',i:'Lição de casa: ouça o plano de exercícios de alguém e crie o seu.',a:`Hi, I'm Marcos. This year, I want to be healthier, so I made a fitness plan. On Mondays and Thursdays, I go running in the park before work. It's hard, but I feel great after. On Tuesdays, I do yoga with my sister. She's very good, but I can't touch my toes yet! On Saturdays, I play football with my friends. We play for two hours and then we have lunch together. I never go to the gym, because I think it's boring. My goal is to run ten kilometres in December.`,q:[
    ['Why did Marcos make a fitness plan?',['to be healthier','for a competition','because of his doctor'],0],['How often does he go running?',['once a week','twice a week','every day'],1],
    ['What does he do on Tuesdays?',['he plays football','he does yoga','he goes swimming'],1],TF('Marcos can touch his toes.',false),['Why doesn’t he go to the gym?',['it’s expensive','it’s boring','it’s far'],1],
    ['I ___ swimming on Sundays.',['go','play','do'],0],['She ___ karate twice a week.',['does','plays','goes'],0],GAP('We ___ tennis every Friday.','play'),
    'Write your fitness plan for one week (60–80 words). Use play, go and do, and say how often.']},
  {l:'EN',lv:'B1',t:'Homework · My budget',i:'Lição de casa: ouça um conselho financeiro e organize o seu orçamento.',a:`Welcome to Money Tips. Today's listener, Julia, wrote to us. She earns two thousand dollars a month, but at the end of every month she has nothing left, and she often has to borrow money from her brother. So, Julia, here's my advice. First, write down everything you spend for one month. Second, try the 50/30/20 rule: fifty percent for needs, thirty for wants and twenty for savings. Third, if you can't afford something, don't buy it on credit. And finally, if you save just a hundred dollars a month, you'll have more than a thousand by the end of the year. Small steps make a big difference!`,q:[
    ['How much does Julia earn?',['1,000 dollars a month','2,000 dollars a month','3,000 dollars a month'],1],['Who does Julia borrow money from?',['her brother','her bank','her friend'],0],
    ['What is the first piece of advice?',['write down everything you spend','get a new job','stop going out'],0],TF('In the 50/30/20 rule, you save 30%.',false),
    ['If you save 100 dollars a month, how much will you have in a year?',['more than 1,000 dollars','500 dollars','10,000 dollars'],0],
    ['Can you ___ me your car?',['lend','borrow'],0],['Can I ___ your car?',['borrow','lend'],0],GAP('I can’t ___ a holiday this year. (ter dinheiro para)','afford'),
    'Write your own monthly budget plan (80–100 words): your needs, wants and savings, and two things you will do to save money.']},
  {l:'EN',lv:'B2',t:'Homework · Guilty or not guilty?',i:'Lição de casa: ouça o caso, responda e dê o seu veredito.',a:`In 2019, a 70-year-old man in a small English town was arrested for theft. He had taken food worth twenty pounds from a supermarket. At his trial, he explained that his pension had been delayed and he had nothing to eat. The supermarket manager, who was a witness, said the man had been a loyal customer for thirty years. The judge said that theft must always be taken seriously, but that this case was exceptional. Instead of a fine or prison, he was given a conditional discharge, which means no punishment unless he commits another crime. After the trial, local people raised over five thousand pounds for him.`,q:[
    ['What did the man steal?',['money','food','a phone'],1],['Why did he do it?',['his pension had been delayed','for fun','he was a thief'],0],
    ['Who was the witness?',['his neighbour','the supermarket manager','a police officer'],1],['What was the sentence?',['prison','a big fine','a conditional discharge'],2],
    TF('Local people raised money for him.',true),['The man ___ for theft. (passive)',['was arrested','arrested','has arrest'],0],
    GAP('Theft must always ___ taken seriously.','be'),
    MAT('Ligue.',[['witness','testemunha'],['trial','julgamento'],['sentence','sentença'],['fine','multa']]),
    'Do you agree with the judge? Write your opinion (120–150 words) using the passive with modals (should be punished, could be given…).']},
  {l:'EN',lv:'B2',t:'Homework · Nice to meet you, again',i:'Lição de casa: ouça uma conversa num evento e escreva a mensagem de follow-up.',a:`A: Hi, I don't think we've met. I'm Rafael. B: Nice to meet you, Rafael. I'm Emma. How do you know the organisers? A: I worked with them on a project last year. What brings you here? B: I'm launching an app for small restaurants, so I'm looking for partners. A: That sounds fascinating. How did you get into that? B: My parents had a restaurant, and I saw how hard it was to manage bookings. A: Interesting! I work in marketing for a food delivery company, actually. B: Really? We should definitely talk more. Are you on LinkedIn? A: Yes, here's my card. It's been great talking to you. I'll let you mingle.`,q:[
    ['How does Rafael know the organisers?',['they are his family','he worked with them on a project','he met them online'],1],['What is Emma launching?',['a restaurant','an app for small restaurants','a delivery company'],1],
    ['Why did Emma get into this area?',['her parents had a restaurant','she studied it','by accident'],0],TF('Rafael works for a food delivery company.',true),
    ['Which is an open question?',['What brings you here?','Are you OK?','Do you like it?'],0],['How does Rafael end the conversation?',['“I’ll let you mingle.”','“Goodbye forever.”','“I’m bored.”'],0],
    GAP('It’s been great ___ to you. (talk)','talking'),
    'Write a follow-up LinkedIn message (60–80 words) to someone you met at an event: remind them where you met, mention something you talked about and suggest a next step.']},
  {l:'EN',lv:'B2',t:'Homework · Mission to Mars',i:'Lição de casa: ouça a notícia científica e responda.',a:`Scientists have announced exciting news about Mars. Evidence of ancient lakes has been found by a robot that has been exploring the planet since 2021. The rocks that were collected may contain signs of life that existed billions of years ago. The samples will be brought back to Earth in the 2030s, when they will be studied in special laboratories. Meanwhile, several space agencies are preparing to send humans to Mars. Experts believe that by 2040, the first astronauts will probably have landed there. However, the journey will take about seven months, and many problems, like radiation and food, still need to be solved.`,q:[
    ['What has been found on Mars?',['evidence of ancient lakes','living animals','a city'],0],['Since when has the robot been exploring?',['2012','2021','2030'],1],
    ['When will the samples be brought back?',['next year','in the 2030s','never'],1],['How long will the journey to Mars take?',['about seven days','about seven months','about seven years'],1],
    TF('All the problems of a Mars mission have been solved.',false),['The samples ___ in special laboratories.',['will be studied','will study','studied'],0],
    GAP('By 2040, astronauts will probably ___ landed on Mars.','have'),
    'Would you go on a one-way mission to Mars? Write 100–120 words with your reasons, using the future and the passive.']},
  {l:'EN',lv:'C1',t:'Homework · Think twice',i:'Lição de casa: ouça a explicação de um viés e analise uma decisão sua.',a:`Imagine you paid one hundred dollars for a concert ticket. On the day of the concert, it's pouring with rain, you feel ill, and you'd honestly rather stay at home. Most people go anyway. Why? Because they've already paid. This is known as the sunk cost fallacy: we continue investing in something because of what we've already spent, not because of what we'll gain. It can be attributed to loss aversion, our tendency to feel losses more strongly than gains. The same bias affects companies that keep funding failing projects, and people who stay in jobs they hate. The rational question is simple: ignoring what I've already spent, is this still worth it?`,q:[
    ['Why do most people go to the concert?',['they’ve already paid','they love the band','their friends insist'],0],['What is the sunk cost fallacy?',['continuing because of what you’ve already invested','spending too much money','buying expensive tickets'],0],
    ['What can it be attributed to?',['loss aversion','anchoring','confirmation bias'],0],TF('The bias only affects individuals, not companies.',false),
    ['According to the speaker, what is the rational question?',['Ignoring what I’ve spent, is it still worth it?','How much did I pay?','What will people think?'],0],
    ['This behaviour ___ our fear of losing.',['stems from','stems of','stems by'],0],GAP('We are ___ to overestimate our abilities. (temos tendência)','prone'),
    'Describe a decision in your life that might have been influenced by a cognitive bias (150–180 words). Use at least four expressions of cause and effect.']},
  {l:'FR',lv:'B1',t:'Devoirs · Mon enfance',i:'Devoirs : écoutez le souvenir, répondez et racontez le vôtre.',a:`Quand j'étais petit, j'habitais dans un petit village près de Lyon. Notre maison avait un grand jardin et mon père cultivait des tomates. Tous les mercredis, j'allais chez mon grand-père. Il me racontait des histoires et nous jouions aux cartes. L'été, nous partions à la mer, en Bretagne. Il faisait souvent froid, mais j'adorais ça. Un jour, pendant que je jouais sur la plage, j'ai trouvé une vieille bouteille avec un message à l'intérieur ! Je l'ai encore aujourd'hui.`,q:[
    ['Où habitait-il ?',['à Paris','dans un village près de Lyon','en Bretagne'],1],['Que faisait-il le mercredi ?',['il allait chez son grand-père','il allait à l’école','il allait à la mer'],0],
    ['Quel temps faisait-il en Bretagne ?',['il faisait souvent froid','il faisait très chaud','il neigeait'],0],TF('Il a trouvé une bouteille avec un message.',true),
    ['Quand j’étais petit, je ___ au football tous les jours.',['jouais','ai joué','joue'],0],['Un jour, je ___ une lettre.',['ai trouvé','trouvais','trouve'],0],
    GAP('Nous ___ (habiter) à la campagne.','habitions'),
    MAT('Associez.',[['tous les étés','todo verão'],['un jour','um dia'],['autrefois','antigamente'],['souvent','frequentemente']]),
    'Racontez un souvenir d’enfance (80–100 mots) : décrivez le lieu et vos habitudes (imparfait), puis un événement précis (passé composé).']},
  {l:'FR',lv:'B2',t:'Devoirs · Je ne pense pas que…',i:'Devoirs : écoutez le débat, répondez et donnez votre avis avec le subjonctif.',a:`Animateur : Faut-il interdire les réseaux sociaux aux moins de quinze ans ? Claire, vous êtes pour. Claire : Absolument. Il est essentiel que les enfants puissent grandir sans cette pression. Je ne pense pas qu'un adolescent de douze ans soit capable de gérer ces plateformes. Animateur : Thomas, vous n'êtes pas d'accord. Thomas : Je comprends cette inquiétude, mais je doute qu'une interdiction soit efficace. Les jeunes trouvent toujours une solution. Il faut plutôt que l'école leur apprenne à utiliser ces outils. Animateur : Vous êtes donc d'accord sur un point : il faut que les adultes s'impliquent.`,q:[
    ['Quel est le sujet du débat ?',['les réseaux sociaux pour les moins de 15 ans','les jeux vidéo','l’école le samedi'],0],['Que pense Claire ?',['qu’il faut les interdire','qu’ils sont utiles','qu’il ne faut rien changer'],0],
    ['Selon Thomas, que faut-il faire ?',['que l’école apprenne aux jeunes à les utiliser','interdire les téléphones','fermer les réseaux'],0],TF('Claire et Thomas ne sont d’accord sur rien.',false),
    ['Je ne pense pas que ce ___ une bonne idée.',['soit','est','sera'],0],['Je pense qu’il ___ raison.',['a','ait','avoir'],0],
    GAP('Il faut que nous ___ (faire) un effort.','fassions'),
    'Donnez votre avis (120–150 mots) : « Faut-il interdire les réseaux sociaux aux moins de 15 ans ? » Utilisez au moins quatre structures avec le subjonctif.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Expressões',t:'Homework · Coffee, please!',i:'Lição de casa: pedir no café, perguntar o preço e pagar.',q:[
    COMIC(`[xicara]
Sam: Hi! What can I get you?
Mia: ___
---
Sam (feliz): Small, medium or large?
Mia: Small, please.`,['I’m fine, thank you.','Can I have a tea, please?','Yes, I can.'],1),
    SEQ('Hi! What can I get you?\nA coffee with milk, please.\nEat in or take away?\nTake away. How much is it?\nThat’s three fifty, please.','Put the conversation in order.'),
    PICK('[*Can I have/Can I has/I can have] a juice, please? — Anything else? — No, [*that’s all/that all/is all], thanks.'),
    CROSS(`cake = A sweet food for birthdays. | img:bolo
juice = A drink made from fruit. | img:suco
water = A drink with no colour. | img:agua
bread = You make a sandwich with it. | img:pao`,'Complete the crossword.'),
    MAT('Ligue.',[['Eat in or take away?','Take away, please.'],['How much is it?','It’s five dollars.'],['Anything else?','No, thanks.']]),
    DIT('Can I have a large coffee, please?'),
    'Write a dialogue at a café (6 lines): you order a drink and a snack, ask the price and pay.']},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Homework · What’s the weather like?',i:'Lição de casa: o tempo e as estações.',q:[
    HUNT('sunny, rainy, cloudy, windy, snowy, hot, cold','Find 7 weather words.'),
    SORT(`Hot weather: sunny, hot, summer
Cold weather: snowy, cold, winter`),
    ODD('Which one is NOT a season?',['spring','summer','sunny','winter'],2,[],'Sunny is the weather, not a season.'),
    PICK('What’s the weather [*like/is/likes] today? It’s [*raining/rain/rains] now. In winter, it’s very [*cold/hot].'),
    CLOZE('Today it’s [cloudy] and [windy]. Tomorrow it will be [sunny] and [hot]. Perfect for the beach!','snowy, cold'),
    DIT('It’s sunny and hot today.'),
    'Describe the weather in your city today and your favourite season (5 sentences).']},
  {l:'EN',lv:'A2',tp:'Expressões',t:'Homework · Text me back',i:'Lição de casa: mensagens, abreviações e o tom certo.',q:[
    MAT('Ligue a abreviação ao significado.',[['btw','by the way'],['omw','on my way'],['idk','I don’t know'],['asap','as soon as possible']]),
    COMIC(`[celular]
Leo: r u free tonight?
Ana: ___
---
Leo (feliz): cool! c u at 8 then
Ana (feliz): 👍`,['yes, wanna do something?','I am Ana.','Kind regards, Ana'],0),
    SORT(`Message to a friend: lol, c u later, thx!
Email to a manager: Kind regards, Could you…?, Thank you for…`),
    KWT('r u coming 2nite?','ARE','___ tonight?','Are you coming'),
    FIX('Dear Ms Lopez, I am writing to confirm the meeting. {thx|Thank you}, Paulo.'),
    ODD('Which one is NOT an abbreviation?',['tbh','brb','lol','hello'],3),
    'Write the same message twice: first to a friend (informal, with abbreviations), then to your boss (formal). Topic: you will be 20 minutes late.']},
  {l:'EN',lv:'B1',tp:'Vocabulário',t:'Homework · My recipe',i:'Lição de casa: verbos de cozinha, quantidades e sequência.',q:[
    SEQ('First, boil some water in a big pan.\nThen, add the pasta and a pinch of salt.\nAfter that, cook it for about ten minutes.\nMeanwhile, fry the garlic in olive oil.\nFinally, mix everything and add the cheese.','Put the recipe in order.'),
    MAT('Ligue o verbo à tradução.',[['chop','picar'],['stir','mexer'],['boil','ferver'],['bake','assar']]),
    PICK('Add [*a pinch/a cup/a slice] of salt. [*Bake/Boil/Fry] the cake for 40 minutes. Stir [*until/during/while] it’s golden.'),
    CLOZE('[First], chop the onion. [Then], fry it in oil. [After] that, add the tomatoes. [Finally], serve with rice.','during, firstly'),
    ODD('Which one is NOT a cooking verb?',['slice','fry','mix','swim'],3),
    FIX('Cook the rice {during|for} 20 minutes.'),
    'Write the recipe of your favourite dish (100–120 words): ingredients with quantities and 5 steps with sequencers.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · A strange night',i:'Lição de casa: uma lenda urbana com o past perfect.',q:[
    SEQ('A man was driving home on a rainy night.\nHe saw a young woman on the side of the road and gave her a ride.\nWhen they arrived, she had disappeared from the car.\nAn old woman opened the door and showed him a photo.\nThe girl had died on that road twenty years earlier.','Put the legend in order.'),
    PICK('When I got to the station, the train [*had already left/already left/has left]. By the time we arrived, the party [*had finished/finished/has finished].'),
    KWT('I locked the door. Then I realised my keys were inside.','HAD','I realised I ___ inside.','had left my keys/had locked my keys'),
    COMIC(`[noite]
Tom (preocupado): Why were you so scared last night?
Bia: ___
---
Tom (surpreso): A ghost?!
Bia (feliz): No! It was my cat.`,['Because I had heard a strange noise.','Because I have hear a noise.','Because I hear a noise tomorrow.'],0),
    FIX('She was sad because she {lost|had lost} her ring the day before.'),
    TF('In “When I arrived, she had left”, she left before I arrived.',true),
    'Write a short scary story (100–120 words) with a surprise ending. Use the past perfect at least three times.']},
  {l:'EN',lv:'C1',tp:'Expressões',t:'Homework · Oh, brilliant',i:'Lição de casa: ironia, sarcasmo e understatement.',q:[
    ['(Your friend arrives two hours late.) “Thanks for being so punctual.” This is…',['sincere','sarcastic','a compliment'],1],
    ['A British colleague says your idea is “very interesting”. This might mean…',['they love it','they have doubts about it','they want to copy it'],1],
    SORT(`Understatement: a bit chilly, not the best idea, slightly annoying
Sarcasm: Oh, great!, That’s just what I needed, Lovely weather (in a storm)`),
    COMIC(`[chuva]
Ana: How’s the holiday?
Leo: ___
---
Ana (feliz): Ha! I’m sorry. At least you’re not at work!`,['Oh, perfect. It’s rained every single day.','It is a holiday.','I am on a holiday now.'],0),
    KWT('The storm was terrible.','BIT','It was ___ last night. (understatement)','a bit windy/a bit stormy/a little windy'),
    MAT('O que eles dizem → o que eles querem dizer.',[['Not bad at all.','Excellent!'],['I’ll bear it in mind.','I’ll probably forget it.'],['With the greatest respect…','I think you’re wrong.']]),
    'Write a short story (120–150 words) about a terrible day, told with sarcasm and understatement. Then explain in one line what really happened.']},
  {l:'FR',lv:'A1',tp:'Expressões',t:'Devoirs · Un café, s’il vous plaît',i:'Devoirs : commander au café et payer.',q:[
    COMIC(`[xicara]
Leo: Bonjour, madame. Vous désirez ?
Ana: ___
---
Leo (feliz): Et avec ceci ?
Ana: C’est tout, merci.`,['Je voudrais un café, s’il vous plaît.','Je suis un café.','Bonne nuit !'],0),
    SEQ('Bonjour ! Vous désirez ?\nUn thé, s’il vous plaît.\nEt avec ceci ?\nUn croissant. C’est combien ?\nÇa fait quatre euros.','Mettez le dialogue dans l’ordre.'),
    PICK('Je voudrais [*un/une] croissant et [*une/un] eau minérale. L’[*addition/adition], s’il vous plaît !'),
    MAT('Associez.',[['Sur place ou à emporter ?','À emporter.'],['C’est combien ?','Trois euros.'],['Vous désirez ?','Un café, s’il vous plaît.']]),
    DIT('Je voudrais un café crème, s’il vous plaît.','Écoutez et écrivez la phrase.'),
    'Écrivez un dialogue au café (6 répliques) : vous saluez, vous commandez une boisson et quelque chose à manger, et vous payez.']},
  {l:'FR',lv:'A2',tp:'Gramática',t:'Devoirs · La liste des courses',i:'Devoirs : les partitifs et les quantités.',q:[
    SORT(`du: pain, fromage, poulet
de la: salade, confiture, viande
des: œufs, pommes, légumes`,'Classez avec le bon article.'),
    PICK('Je voudrais [*du/de la/des] pain et [*de la/du/des] confiture. Je ne mange pas [*de/du/de la] viande.'),
    CLOZE('Pour le pique-nique, j’achète [du] fromage, [de la] salade, [des] fruits et une bouteille [d’]eau.','le, les'),
    FIX('Je voudrais un kilo {des|de} pommes, s’il vous plaît.'),
    ['Elle boit ___ eau.',['de l’','du','de la'],0],['Il n’y a pas ___ lait.',['de','du','des'],0],
    'Écrivez votre liste de courses pour la semaine (8 produits avec du, de la, des) et deux phrases à la forme négative.']},
  {l:'FR',lv:'A2',tp:'Vocabulário',t:'Devoirs · Le plan de la ville',i:'Devoirs : demander et donner son chemin.',q:[
    MAT('Associez.',[['la gare','a estação de trem'],['la boulangerie','a padaria'],['la poste','o correio'],['la pharmacie','a farmácia']]),
    PICK('[*Tournez/Tourner/Tournes] à gauche. [*Prenez/Prendre/Prends-vous] la deuxième rue. La banque est [*en face de/en face/face de] la poste.'),
    SEQ('Excusez-moi, où est le musée, s’il vous plaît ?\nAllez tout droit jusqu’à la place.\nPuis, tournez à droite.\nLe musée est à côté de la banque.\nMerci beaucoup, bonne journée !','Mettez le dialogue dans l’ordre.'),
    FIX('Excusez-moi, {où la gare est|où est la gare} ?'),
    ODD('Quel mot n’est pas une direction ?',['à droite','tout droit','à gauche','la boulangerie'],3),
    DIT('Prenez la première rue à droite.','Écoutez et écrivez la phrase.'),
    'Expliquez le chemin de chez vous jusqu’à la boulangerie ou au supermarché (60–80 mots), avec l’impératif.']}
);

/* ---------- homeworks do lote 4 (gramática e fonética) ---------- */
CONT_HW.push(
  {l:'EN',lv:'A2',t:'Homework · Have you ever…?',i:'Lição de casa: ouça as experiências, responda e escreva as suas.',a:`Hi, I'm Lucy. I'm thirty, and I love new experiences. I've been to twelve countries, but I've never been to Asia. I've eaten some strange food, like crocodile in Australia! I've also met a famous actor: I sat next to him on a plane in 2019. He was very nice. I've never ridden a horse, because I'm scared of them, and I've never sung karaoke. Maybe one day! Have you ever done anything crazy?`,q:[
    ['How many countries has Lucy been to?',['ten','twelve','twenty'],1],['Has she been to Asia?',['Yes, she has.','No, she hasn’t.'],1],
    ['What strange food has she eaten?',['snails','crocodile','insects'],1],['When did she meet the actor?',['in 2019','last week','in 2009'],0],
    TF('Lucy has ridden a horse.',false),['Have you ever ___ to Japan?',['been','went','go'],0],
    GAP('I’ve never ___ (see) snow.','seen'),GAP('I ___ (meet) my best friend in 2015.','met'),
    'Write about 3 things you’ve done and 2 things you’ve never done (present perfect). Then say when one of them happened (past simple).']},
  {l:'EN',lv:'A2',t:'Homework · Follow the route',i:'Lição de casa: ouça as instruções e responda.',a:`OK, here's how to get to my house from the station. Go out of the station and walk along the main road for about five minutes. Go past the supermarket and the bank. Then go across the bridge over the river. After the bridge, go through the small park. When you come out of the park, you'll see a yellow house in front of you. Go up the stairs to the second floor. That's my flat, number 21. Don't worry, it's easy!`,q:[
    ['Where does the route start?',['at the bank','at the station','at the park'],1],['What do you go past?',['the supermarket and the bank','the school','the hospital'],0],
    ['How do you cross the river?',['by boat','across the bridge','through a tunnel'],1],['What do you go through?',['a small park','a shopping centre','a forest'],0],
    TF('The flat is on the ground floor.',false),['She walked ___ the room and sat down.',['into','in','at'],0],
    GAP('The train goes ___ a long tunnel. (por dentro)','through'),GAP('We walked ___ the river at sunset. (ao longo)','along'),
    'Write the route from your home to a place you like (60–80 words) using at least 5 prepositions of movement.']},
  {l:'EN',lv:'B1',t:'Homework · Excuse me, could you…?',i:'Lição de casa: ouça as perguntas educadas e responda.',a:`Receptionist: Good morning, how can I help you? Guest: Hi. Could you tell me what time the swimming pool opens? Receptionist: It opens at seven and closes at nine in the evening. Guest: Great. And do you know if there's a bus to the city centre? Receptionist: Yes, there's one every twenty minutes, just outside the hotel. Guest: Perfect. I was wondering whether I could leave my suitcase here after checkout. Receptionist: Of course, no problem. Guest: And one last thing: do you have any idea where I can buy a SIM card? Receptionist: There's a shop at the train station.`,q:[
    ['What time does the pool open?',['at six','at seven','at nine'],1],['How often is there a bus to the centre?',['every ten minutes','every twenty minutes','every hour'],1],
    ['What does the guest want to do after checkout?',['leave the suitcase','swim','have lunch'],0],['Where can the guest buy a SIM card?',['at the hotel','at the train station','at the airport'],1],
    ['Could you tell me where ___?',['the lift is','is the lift'],0],['Do you know what time ___?',['the shop opens','does the shop open'],0],
    GAP('Do you know ___ the museum is open on Mondays? (sim/não)','if|whether'),
    'You are in a new city. Write 5 polite indirect questions you could ask at a tourist office.']},
  {l:'EN',lv:'B1',t:'Homework · I managed it!',i:'Lição de casa: ouça a história e conte uma conquista sua.',a:`When I was a child, I couldn't swim. I was afraid of water, and my friends could all swim very well. When I was twenty-five, I decided to change that. The first lessons were terrible: I couldn't put my face in the water. But my teacher was very patient. After three months, I managed to swim one length of the pool. I was so proud! Last year, I was able to swim across a lake with my friends. It took two hours, but we all managed to finish. Now I swim three times a week.`,q:[
    ['Why couldn’t the speaker swim as a child?',['afraid of water','no pool','no time'],0],['How old was the speaker when they started lessons?',['fifteen','twenty-five','thirty'],1],
    ['What did the speaker manage to do after three months?',['swim one length of the pool','swim across a lake','teach swimming'],0],TF('The swim across the lake took two hours.',true),
    ['When I was young, I ___ run very fast. (habilidade geral)',['could','managed to'],0],['The exam was hard, but I ___ pass it.',['managed to','could'],0],
    GAP('I ___ (not) sleep last night because of the noise.','couldn’t|could not'),
    'Write about something difficult you managed to do (80–100 words). Use could, couldn’t, managed to and was able to.']},
  {l:'EN',lv:'B2',t:'Homework · Get it done',i:'Lição de casa: ouça a conversa e use o causative.',a:`A: You look different! Have you had your hair cut? B: Yes, I had it done yesterday at a new salon. And I'm getting my nails done on Friday. A: Wow, special occasion? B: My sister's wedding! We're having the garden decorated, and we're getting the cake made by a famous baker. A: Sounds amazing. Is everything ready? B: Almost. Mum still needs to have her dress altered, and Dad has to get his suit cleaned. Oh, and last week someone broke into our car and we had the radio stolen! A: Oh no! B: Don't worry, we've already had it replaced.`,q:[
    ['When did B have her hair cut?',['yesterday','last week','on Friday'],0],['What is the special occasion?',['a birthday','her sister’s wedding','a graduation'],1],
    ['Who is making the cake?',['B’s mother','a famous baker','B'],1],['What happened to the car?',['the radio was stolen','it was painted','it was sold'],0],
    TF('They haven’t replaced the radio yet.',false),['I need to get my passport ___.',['renewed','renew','renewing'],0],
    GAP('We’re having the roof ___ (repair) next week.','repaired'),
    'Write about 5 things you have done for you regularly or will have done soon (60–80 words). Include one bad experience with had … stolen / cancelled.']},
  {l:'EN',lv:'C1',t:'Homework · It is said that…',i:'Lição de casa: ouça a notícia e transforme as frases.',a:`A rare painting that is believed to have been stolen in 1987 has been found in a farmhouse in the north of Italy. The work is thought to be by a student of Leonardo da Vinci, and it is estimated to be worth around five million euros. According to police, the farmer is said to have bought it at a local market in the 1990s for just fifty euros, without knowing what it was. Experts are expected to examine the painting next month. It is reported that the original owners, a family from Milan, have already been contacted.`,q:[
    ['Where was the painting found?',['in a museum','in a farmhouse','at a market'],1],['When is it believed to have been stolen?',['1987','1990','2007'],0],
    ['How much did the farmer pay for it?',['five million euros','fifty euros','five hundred euros'],1],TF('Experts have already examined the painting.',false),
    ['The painting is thought ___ by a student of Leonardo.',['to be','being','be'],0],['The farmer is said ___ it in the 1990s.',['to have bought','to buy','having bought'],0],
    GAP('It is ___ that the family has been contacted. (reported)','reported'),
    'Write a short news story (120–150 words) about a mystery or a discovery, using at least four advanced passive structures.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · This or that?',i:'Lição de casa: this, that, these e those.',q:[
    PICK('[*This/These] shirt is nice. [*Those/That] shoes over there are cheap. [*These/This] glasses are mine.'),
    SORT(`Singular: this, that
Plural: these, those`),
    COMIC(`[cidade]
Ana: How much is this hat?
Leo: ___
---
Ana (feliz): Great! I’ll take it.`,['That one? It’s ten dollars.','Those are ten dollars.','These is ten dollars.'],0),
    FIX('{This|These} apples are delicious.'),FIX('Who are {that|those} people?'),
    DIT('I like that jacket, the black one.'),
    'Look around your room. Write 2 sentences with this, 2 with these, 1 with that and 1 with those.']},
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · Whose is it?',i:'Lição de casa: ’s, whose e mine / yours.',q:[
    PICK('This is [*Maria’s/Maria/of Maria] car. That’s my [*parents’/parent’s/parents] house. [*Whose/Who’s] bag is this?'),
    MAT('Ligue.',[['my','mine'],['your','yours'],['her','hers'],['his','his']]),
    KWT('The bike of my brother is new.','BROTHER’S','My ___ new.','brother’s bike is'),
    FIX('{Who’s|Whose} phone is ringing?'),
    ['— Is this your pen? — Yes, it’s ___.',['mine','my','me'],0],
    DIT('Whose keys are these?'),
    'Write 5 sentences about things in your house and whose they are (use ’s and mine / yours / hers / his).']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · By myself',i:'Lição de casa: pronomes reflexivos e each other.',q:[
    PICK('Be careful! Don’t cut [*yourself/you/yours]. The children cleaned the room by [*themselves/theirselves]. Ana and Leo help [*each other/themselves] with homework.'),
    SORT(`Use a reflexive: hurt, enjoy, teach
No reflexive in English: wake up, get dressed, relax`),
    FIX('I {woke myself up|woke up} at seven this morning.'),
    KWT('I made this cake. Nobody helped me.','MYSELF','I made this cake ___ .','by myself|myself'),
    COMIC(`[bandeirinhas]
Bia (feliz): Help yourselves to the food!
Tom: ___
---
Bia (feliz): Yes, I did it all by myself!`,['Did you cook it by yourself?','Did you cook it by yourselves?','Did you cook it by itself?'],0),
    'Write about 4 things you do by yourself and 2 things you and a friend do for each other.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · So good!',i:'Lição de casa: so, such, so many e so much.',q:[
    PICK('The film was [*so/such] funny! It was [*such a/so a] funny film. There were [*so many/so much] people at the party.'),
    SORT(`so: so tired, so fast, so many
such: such a mess, such nice people, such good news`),
    KWT('The weather was very hot, so we went to the beach.','SUCH','It was ___ that we went to the beach.','such hot weather'),
    KWT('The book was very boring. I stopped reading it.','SO','The book was ___ I stopped reading it.','so boring that|so boring'),
    FIX('It was {so a|such a} beautiful day!'),
    'Describe the best day of your last holiday (80–100 words) using so and such at least five times.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Not yet!',i:'Lição de casa: already, yet e just.',q:[
    PICK('I’ve [*just/yet] arrived. Have you finished [*yet/just]? She’s [*already/yet] left — she was so fast!'),
    COMIC(`[relogio]
Mia: Have you sent the report yet?
Sam: ___
---
Mia (feliz): Great, thanks! That was quick.`,['Yes, I’ve just sent it.','Yes, I’ve sent it yet.','No, I’ve already sent it.'],0),
    SEQ('Have you packed your suitcase yet?\nYes, I’ve already packed it.\nHave you called the taxi?\nNot yet. I’ll do it now.\nOK, I’ve just called it!','Put the dialogue in order.'),
    FIX('I haven’t {yet finished|finished} the book yet.'),
    KWT('The train left one minute ago.','JUST','The train ___ .','has just left|’s just left'),
    'Write your to-do list for this week: 3 things you’ve already done, 3 you haven’t done yet and 1 you’ve just done.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · House rules',i:'Lição de casa: make, let, get e allow.',q:[
    PICK('My parents made me [*study/to study] every night. They let me [*go/to go] out on Saturdays. We weren’t allowed [*to use/use] phones at dinner.'),
    SORT(`No “to”: make me study, let me go
With “to”: allow me to go, get him to help, be made to wait`),
    KWT('My boss forced me to work late.','MADE','My boss ___ late.','made me work'),
    KWT('They didn’t allow us to take photos.','LET','They didn’t ___ photos.','let us take'),
    FIX('The teacher let us {to leave|leave} early.'),
    COMIC(`[casa]
Leo: Mum, will you let me have a party?
Ana: ___
---
Leo (feliz): Deal! I’ll get Tom to help me clean.`,['Only if you clean the house after.','Only if you to clean the house.','I make you clean.'],0),
    'Write about the rules in your house when you were a teenager (100–120 words): what your parents made you do, let you do and didn’t allow you to do.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · Both or neither?',i:'Lição de casa: both, either e neither.',q:[
    PICK('[*Both/Either/Neither] my sisters live in Rio. You can pay [*either/both/neither] by card or in cash. [*Neither/Both/Either] of my parents can swim — they’ve never learned.'),
    KWT('Ana doesn’t like horror films. Leo doesn’t like horror films.','NEITHER','___ likes horror films.','Neither Ana nor Leo'),
    KWT('You can take the bus or the train.','EITHER','You can take ___ the train.','either the bus or'),
    FIX('{Both of|Both} us were tired after the trip.'),
    ['— I don’t eat meat. — ___',['Me neither.','Me too.','So do I.'],0],
    'Compare two places, two jobs or two people (100–120 words) using both, either and neither at least five times.']},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Homework · Short and elegant',i:'Lição de casa: participle clauses.',q:[
    KWT('After she had finished the report, she went home.','HAVING','___ the report, she went home.','Having finished'),
    KWT('Because I didn’t know the way, I used my phone.','KNOWING','___ the way, I used my phone.','Not knowing'),
    KWT('The castle, which was built in 1200, is now a hotel.','BUILT','The castle, ___ , is now a hotel.','built in 1200'),
    PICK('[*Having seen/Seeing/Seen] the film twice, I knew the ending. [*Written/Writing] in 1949, the novel is still relevant. [*Walking/Walked] home, I saw an old friend.'),
    FIX('{Being|Having been} a teacher for 30 years, she retired last month.'),
    ['Which sentence has a dangling participle (a mistake)?',['Walking into the room, the lights went off.','Walking into the room, I turned on the lights.','Having eaten, we left.'],0],
    'Rewrite a paragraph you wrote recently (or the news) in a more concise style using at least four participle clauses.']},
  {l:'EN',lv:'A2',tp:'Pronúncia',t:'Homework · Ship or sheep?',i:'Lição de casa: vogais curtas e longas. Ouça e escreva!',q:[
    SORT(`/ɪ/ short: ship, sit, live, fill
/iː/ long: sheep, seat, leave, feel`,'Separe pelo som da vogal.'),
    SORT(`/æ/: bad, man, sad, cat
/e/: bed, men, said, set`,'Separe pelo som da vogal.'),
    ODD('Which word has a different vowel sound?',['ship','sit','sheep','live'],2,[],'Sheep has a long /iː/.'),
    DIT('The sheep is on the ship.'),DIT('Please leave the seat for her.'),DIT('The man and the men are sad.'),
    'Record yourself reading the 3 dictation sentences. Then write 3 new sentences with minimal pairs.']},
  {l:'EN',lv:'A2',tp:'Pronúncia',t:'Homework · Find the stress',i:'Lição de casa: sílaba tônica.',q:[
    SORT(`1st syllable: table, happy, doctor, water
2nd syllable: relax, begin, decide, hotel`,'Onde está a sílaba tônica?'),
    ['Where is the stress in “comfortable”?',['COM-for-ta-ble','com-FOR-ta-ble','com-for-TA-ble'],0],
    ['Where is the stress in “information”?',['IN-for-ma-tion','in-FOR-ma-tion','in-for-MA-tion'],2],
    ['“I want to ___ a video.” (verb)',['REcord','reCORD'],1],
    ODD('Which word has the stress on the 2nd syllable?',['photograph','hotel','water','happy'],1),
    DIT('The photographer took a fantastic photograph.'),
    'Write 6 words from your job or studies. Mark the stressed syllable in CAPITALS (ex.: com-PU-ter) and check in a dictionary.']},
  {l:'EN',lv:'B1',tp:'Pronúncia',t:'Homework · Say it fast',i:'Lição de casa: fala encadeada. Ouça e escreva a forma completa.',q:[
    MAT('Ligue a forma rápida à completa.',[['gonna','going to'],['wanna','want to'],['gotta','got to'],['dunno','don’t know']]),
    DIT('What are you going to do this weekend?'),DIT('Can I have a cup of tea, please?'),DIT('Turn it off and pick it up.'),
    SORT(`Linking: an apple, turn off, pick it up
Elision: next week, last night, sandwich`),
    ['In fast speech, “can” in “I can swim” usually sounds like…',['/kæn/','/kən/'],1],
    'Watch 1 minute of a series in English. Write down 3 phrases you heard in fast speech and their full forms.']},
  {l:'EN',lv:'B1',tp:'Pronúncia',t:'Homework · Up or down?',i:'Lição de casa: entonação.',q:[
    SORT(`Falling ↘: Where do you live?, I’m a teacher., What time is it?
Rising ↗: Are you tired?, Can you help me?, Really?`,'A entonação sobe ou desce?'),
    ['“You’re a doctor, aren’t you ↘?” The speaker is…',['almost sure','asking a real question'],0],
    ['In a list (apples, bananas and grapes), the last item goes…',['up ↗','down ↘'],1],
    TF('Wh- questions usually have falling intonation.',true),
    DIT('Would you like tea or coffee?'),DIT('It’s a lovely day, isn’t it?'),
    'Record yourself asking 3 wh- questions and 3 yes/no questions. Listen: does your voice go down and up in the right places?']},
  {l:'EN',lv:'B1',tp:'Pronúncia',t:'Homework · Clear consonants',i:'Lição de casa: consoantes finais, h e r.',q:[
    SORT(`Silent h: hour, honest, honour
Pronounced h: house, happy, hotel`,'O h é pronunciado?'),
    ['Which is clearer English?',['“I likei it.”','“I like it.”'],1],
    ODD('Which word starts with a silent letter?',['house','hour','happy','hotel'],1),
    DIT('Harry has a happy horse.'),DIT('The red car is on the right.'),DIT('I had a big breakfast at the hotel.'),
    'Write 10 words you use every day that end in a consonant. Say each one 3 times without the extra “i”.']},
  {l:'EN',lv:'B2',tp:'Pronúncia',t:'Homework · Feel the rhythm',i:'Lição de casa: palavras fortes, ritmo e ênfase.',q:[
    SORT(`Content words: London, quickly, never, beautiful
Function words: of, the, can, them`,'Palavra forte ou fraca?'),
    ['Which words are stressed? “She’s going to the beach on Sunday.”',['She’s, to, the, on','going, beach, Sunday'],1],
    ['“I didn’t say SHE stole the money.” This means…',['someone else stole it','she stole something else','I only suggested it'],0],
    ['“Is it on Thursday?” — “No, it’s on ___.” Which word gets the stress?',['TUESDAY','on','it’s'],0],
    DIT('I want to go to the beach this weekend.'),
    'Write 4 versions of the sentence “I didn’t buy a new car” with different stressed words and explain the meaning of each one.']},
  {l:'FR',lv:'B1',tp:'Gramática',t:'Devoirs · Y ou en ?',i:'Devoirs : les pronoms y et en.',q:[
    PICK('Tu vas à Paris ? — Oui, j’[*y/en] vais demain. Tu veux du thé ? — Oui, j’[*en/y] veux bien. Combien de frères tu as ? — J’[*en/y] ai deux.'),
    SORT(`y: aller à la plage, penser à son voyage, habiter à Lyon
en: manger du pain, avoir trois enfants, parler de son travail`,'Y ou en ?'),
    COMIC(`[mala]
Leo: Tu es déjà allée au Canada ?
Ana: ___
---
Leo (feliz): Moi aussi, j’y suis allé l’année dernière !`,['Oui, j’y suis allée deux fois.','Oui, j’en suis allée deux fois.','Oui, je suis allée y.'],0),
    FIX('Du sucre ? Non merci, je n’{y|en} prends pas.'),
    ['Je ne vais pas ___ aller.',['y','en'],0],
    'Répondez à 5 questions sur vos habitudes avec y ou en : Tu vas souvent au cinéma ? Tu bois du café ? Tu penses à tes vacances ? Tu as des frères ? Tu habites à São Paulo ?']},
  {l:'FR',lv:'A2',tp:'Pronúncia',t:'Devoirs · Les sons nasals',i:'Devoirs : les voyelles nasales et les liaisons. Écoutez et écrivez.',q:[
    SORT(`[ɑ̃]: enfant, temps, vent
[ɔ̃]: bon, maison, pont
[ɛ̃]: vin, pain, lundi`,'Classez selon le son.'),
    ODD('Quel mot n’a pas de voyelle nasale ?',['bon','bonne','pont','vent'],1,[],'Dans « bonne », le n est suivi d’un autre n : la voyelle n’est pas nasale.'),
    DIT('Le vin blanc est bon.','Écoutez et écrivez la phrase.'),DIT('Mes enfants ont un an.','Écoutez et écrivez la phrase.'),
    ['Dans « les amis », on fait la liaison ?',['oui : [lezami]','non : [le ami]'],0],
    TF('Dans « et un ami », on fait la liaison après « et ».',false),
    'Enregistrez-vous en lisant les virelangues de la leçon. Écrivez cinq mots avec chaque voyelle nasale.']}
);

/* ---------- homeworks do lote 5 (gramática, fonética e temas) ---------- */
CONT_HW.push(
  {l:'EN',lv:'B1',t:'Homework · As soon as…',i:'Lição de casa: ouça a mensagem de voz e responda.',a:`Hi Marta, it's Jo. Just a quick message about the trip. I'll call you as soon as I land in Lisbon, probably around eight. When I get to the hotel, I'll send you the address. Please don't leave home until I call, because the traffic near the airport is terrible in the evening. Before you come, could you buy some water? Oh, and once we've had dinner, let's go and see the old town. I'll book the restaurant when I know what time you can arrive. See you soon!`,q:[
    ['When will Jo call Marta?',['as soon as Jo lands','before the trip','at midnight'],0],['What will Jo send when they get to the hotel?',['a photo','the address','the bill'],1],
    ['Why shouldn’t Marta leave home before the call?',['the traffic is terrible','it’s raining','the hotel is closed'],0],TF('They will see the old town before dinner.',false),
    ['I’ll call you when I ___ home.',['get','will get','got'],0],['Please send the report ___ Friday.',['by','until'],0],
    GAP('Don’t go out until it ___ (stop) raining.','stops'),
    'Write a message to a friend about your plans for tomorrow (60–80 words) using when, as soon as, before and until.']},
  {l:'EN',lv:'B2',t:'Homework · I should have known',i:'Lição de casa: ouça a história e escreva sobre um arrependimento.',a:`Last summer, I planned a surprise trip to Paris for my partner's birthday. I should have checked the passports before booking, but I didn't. Two days before the trip, we discovered that my partner's passport had expired. We could have paid for an emergency passport, but it was too expensive. In the end, we went to a lovely hotel in the countryside instead. Honestly, it was a great weekend. But I would have saved a lot of money if I had checked first. And my partner? Well, they said I shouldn't have planned a surprise without asking!`,q:[
    ['What was the plan?',['a surprise trip to Paris','a party at home','a trip to London'],0],['What was the problem?',['the passport had expired','the flight was cancelled','the hotel was full'],0],
    ['Why didn’t they get an emergency passport?',['it was too expensive','it was impossible','they forgot'],0],TF('The weekend in the countryside was a disaster.',false),
    ['I ___ the passports before booking. (crítica)',['should have checked','should check','could checked'],0],['We ___ a taxi, but we walked. (possibilidade)',['could have taken','should take','would take'],0],
    GAP('You should ___ told me earlier!','have'),
    'Write about a decision you regret (100–120 words) using should have, shouldn’t have, could have and would have.']},
  {l:'EN',lv:'B2',t:'Homework · She asked me…',i:'Lição de casa: ouça a entrevista e relate as perguntas.',a:`Interviewer: Good morning. So, why do you want to work for us? Candidate: I really admire your products, and I'd like to work in an international team. Interviewer: Have you ever managed a team? Candidate: Yes, I managed a team of five people at my last job. Interviewer: Can you start next month? Candidate: I need to give two weeks' notice, so yes. Interviewer: Great. Please send us your references by Friday, and don't forget to include your portfolio.`,q:[
    ['What was the first question?',['why the candidate wanted to work there','how old the candidate was','where the candidate lived'],0],['Has the candidate managed a team?',['Yes, of five people.','No, never.'],0],
    ['What must the candidate send by Friday?',['references and portfolio','a photo','a video'],0],
    ['She asked me why ___ to work there.',['I wanted','did I want','do I want'],0],['He asked ___ I had ever managed a team.',['if','that','what'],0],
    ['She told me ___ my portfolio.',['not to forget','to not forgetting','don’t forget'],0],GAP('He asked me if I ___ (can) start next month.','could'),
    'Report a real conversation (an interview, a call or a meeting) in 100–120 words using reported questions and requests.']},
  {l:'EN',lv:'A2',t:'Homework · Five stars',i:'Lição de casa: ouça a reclamação no chat e escreva uma avaliação.',a:`Customer service: Hello, this is Max from ShopNow. How can I help you? Customer: Hi. I ordered a pair of running shoes ten days ago, but they haven't arrived yet. Customer service: I'm sorry about that. Can I have your order number? Customer: Sure, it's 4-7-2-8-1. Customer service: Thank you. I can see your order was delayed at the warehouse. It's out for delivery now and will arrive today. As an apology, we'll give you free shipping on your next order. Customer: Oh, great. Thank you!`,q:[
    ['What did the customer order?',['running shoes','a jacket','a phone'],0],['When did they order?',['yesterday','ten days ago','last month'],1],
    ['Why was the order late?',['it was delayed at the warehouse','the address was wrong','it was lost'],0],['When will it arrive?',['today','tomorrow','next week'],0],
    TF('The customer will get free shipping on the next order.',true),
    MAT('Ligue.',[['refund','reembolso'],['shipping','frete'],['review','avaliação'],['out for delivery','saiu para entrega']]),
    GAP('My order ___ arrived yet.','hasn’t|has not'),
    'Write a review (50–70 words) of something you bought online: what it is, the delivery, the quality and how many stars you give.']},
  {l:'EN',lv:'B1',t:'Homework · When in Rome',i:'Lição de casa: ouça as dicas de etiqueta e responda.',a:`Welcome to Travel Smart! Today, some quick tips for business travellers. In Japan, you should exchange business cards with both hands and take a moment to read the card. It's rude to put it in your pocket immediately. In Germany, you're expected to be on time, and it's common to use surnames until people suggest otherwise. In the United States, small talk is very normal, even with strangers, and you're expected to tip around twenty percent in restaurants. And in Brazil? Don't be surprised if people greet you with a kiss on the cheek and if parties start a little late!`,q:[
    ['How should you exchange business cards in Japan?',['with both hands','with one hand','you shouldn’t'],0],['What is rude in Japan?',['putting the card in your pocket immediately','reading the card','bowing'],0],
    ['In Germany, you’re expected to…',['be on time','arrive late','use first names'],0],['How much should you tip in the USA?',['around 5%','around 20%','nothing'],1],
    TF('In Brazil, parties usually start exactly on time.',false),['It’s rude ___ late in Germany.',['to be','being','be'],0],
    GAP('You’re expected ___ tip in American restaurants.','to'),
    'Write tips for a foreigner visiting Brazil (80–100 words) using should, it’s polite / rude to and you’re expected to.']},
  {l:'EN',lv:'B2',t:'Homework · Feedback that works',i:'Lição de casa: ouça a conversa de feedback e escreva o seu.',a:`Manager: Thanks for coming, Lucas. I wanted to talk about last week's client presentation. First, the research was excellent. The clients loved the market analysis. Lucas: Thanks! I worked hard on that. Manager: It showed. One thing I'd suggest is to manage the time better. In the presentation, you spent twenty minutes on the introduction, so we didn't have time for questions. Lucas: That's fair. I hadn't realised it took so long. Manager: Next time, maybe you could practise with a timer? Lucas: Good idea. I'll do that. Could we check in after the next presentation? Manager: Of course.`,q:[
    ['What was excellent?',['the research','the slides','the timing'],0],['What was the problem?',['time management','the data','the clients'],0],
    ['How long was the introduction?',['five minutes','ten minutes','twenty minutes'],2],['What does the manager suggest?',['practise with a timer','cancel the presentation','speak faster'],0],
    TF('Lucas reacts defensively to the feedback.',false),['You ___ to send the email earlier.',['might want','must want','should want'],0],
    GAP('Thanks for ___ (tell) me.','telling'),
    'Write feedback (100–120 words) to a colleague using the SBI model: one specific piece of praise and one constructive suggestion.']}
);
if (typeof CONT_TIPOS!=='undefined') CONT_TIPOS.push(
  {l:'EN',lv:'A1',tp:'Gramática',t:'Homework · One, two, many',i:'Lição de casa: plurais e a / an.',q:[
    PICK('I have [*an/a] apple and [*a/an] banana. It’s [*an/a] hour. She works at [*a/an] university.'),
    SORT(`+ s: cars, books, apples
+ es: boxes, buses, watches
ies: cities, babies, parties`,'Como se forma o plural?'),
    MAT('Ligue o singular ao plural.',[['child','children'],['man','men'],['foot','feet'],['person','people']]),
    FIX('There are three {childs|children} in the garden.'),
    CLOZE('In my bag I have two [pens], three [books] and an [apple].','child, box'),
    DIT('I have two boxes and three knives.'),
    'Describe your kitchen or your bedroom: how many things are there? Write 5 sentences with plurals.']},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Homework · I’ll do it!',i:'Lição de casa: will para ofertas, promessas e decisões.',q:[
    COMIC(`[casa]
Ana (cansado): These bags are so heavy!
Leo: ___
---
Ana (feliz): Thanks, Leo! You’re so kind.`,['I’ll carry them for you.','I carry them for you.','I’m going to carry them yesterday.'],0),
    PICK('— The phone’s ringing! — [*I’ll get/I get/I’m getting] it! [*Shall/Will/Do] I open the window? I promise I [*won’t/don’t] be late again.'),
    SORT(`Offer: I’ll help you, Shall I carry it?
Promise: I’ll call you, I won’t forget
Decision: I’ll have the pasta, I’ll take this one`),
    FIX('— Someone’s at the door! — {I open|I’ll open} it.'),
    KWT('Do you want me to call a taxi?','SHALL','___ a taxi?','Shall I call'),
    'Write 3 offers, 3 promises and 2 quick decisions in a short dialogue at home or at a restaurant.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · Just a little',i:'Lição de casa: a few, a little, few, little.',q:[
    PICK('Can I ask you [*a few/a little] questions? Add [*a little/a few] sugar. The film was boring, so [*few/a few] people stayed.'),
    SORT(`a few: questions, friends, apples
a little: time, money, sugar`),
    ['“I have a few close friends” sounds…',['positive','negative'],0],['“Few people came to the party” sounds…',['positive','negative'],1],
    FIX('I need {a few|a little} help with this.'),
    KWT('I don’t have much time today.','LITTLE','I have very ___ today.','little time'),
    'Describe your week (80–100 words) using a few, a little, few, little, plenty of and hardly any.']},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Homework · It depends on…',i:'Lição de casa: verbos com preposição.',q:[
    PICK('It depends [*on/of] the weather. I’m waiting [*for/–] the bus. She married [*–/with] a doctor. What are you worried [*about/of]?'),
    SORT(`on: depend, rely, concentrate
for: wait, look, apply
about: worry, dream, complain`),
    FIX('Let’s discuss {about the problem|the problem} tomorrow.'),
    FIX('This bag belongs {at|to} my sister.'),
    CLOZE('I applied [for] a new job. It depends [on] the interview. I’m a bit worried [about] it.','of, in'),
    ORD('Who are you talking to'),
    'Write 8 sentences about yourself using: depend on, worry about, listen to, wait for, agree with, dream about, rely on, complain about.']},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Homework · You’d better…',i:'Lição de casa: it’s time, would rather e had better.',q:[
    PICK('It’s high time you [*found/find] a new job. I’d rather [*stay/to stay] at home. You’d better [*hurry/to hurry]!'),
    KWT('You should take an umbrella. It’s going to rain.','BETTER','You ___ an umbrella.','’d better take|had better take'),
    KWT('I prefer that you don’t call me late at night.','RATHER','I’d ___ me late at night.','rather you didn’t call'),
    KWT('We should have left already!','TIME','It’s ___ .','time we left|time to leave'),
    FIX('We’d better {not to be|not be} late for the meeting.'),
    COMIC(`[relogio]
Leo (cansado): I’m so tired. I think I’ll stay up and watch another episode.
Ana: ___
---
Leo: OK, OK. You’re right.`,['You’d better go to bed. You have work tomorrow!','You’d better to go to bed.','You better going to bed.'],0),
    'Play “Would you rather…?”: write 5 questions and your answers with reasons (I’d rather… because…).']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · The formal version',i:'Lição de casa: nominalização.',q:[
    KWT('We analysed the data carefully.','ANALYSIS','A careful ___ was carried out.','analysis of the data'),
    KWT('Sales fell, and this worried investors.','FALL','The ___ worried investors.','fall in sales'),
    KWT('They refused to negotiate, so the talks failed.','REFUSAL','Their ___ led to the failure of the talks.','refusal to negotiate'),
    SORT(`-tion or -sion: decision, introduction, discussion
-ment: improvement, development, achievement
-ity: ability, possibility, complexity`),
    FIX('The {develop|development} of the new system took two years.'),
    ['Which sentence is the most formal?',['We decided to expand, which surprised everyone.','The decision to expand came as a surprise to everyone.','We were like, let’s expand!'],1],
    'Rewrite an informal update about a project (real or invented) as a formal 120-word report paragraph, using at least five nominalisations.']},
  {l:'EN',lv:'C1',tp:'Expressões',t:'Homework · Short and natural',i:'Lição de casa: elipse e substituição.',q:[
    PICK('— Will it rain tomorrow? — I [*hope not/don’t hope so]. — Is the shop still open? — I’m afraid [*not/no]. — Has she finished? — Yes, she [*has/finished].'),
    SORT(`Positive: I think so, I hope so, I’m afraid so
Negative: I don’t think so, I hope not, I’m afraid not`),
    KWT('— Are you coming to the party? — Yes, I think that I am coming.','SO','— Yes, I ___ .','think so'),
    KWT('I haven’t been to Japan, but my sister has been to Japan.','HAS','I haven’t been to Japan, but my sister ___ .','has'),
    FIX('— Is he coming? — I {don’t hope so|hope not}.'),
    ['“Can’t complain” means…',['Things are OK.','I’m not allowed to complain.','I can’t speak.'],0],
    'Rewrite a long, repetitive dialogue (8 lines) in a natural way, using ellipsis and substitution.']},
  {l:'EN',lv:'A2',tp:'Pronúncia',t:'Homework · Numbers, numbers',i:'Lição de casa: números, preços e datas. Ouça e escreva!',q:[
    DIT('The meeting is on the thirteenth at three thirty.'),DIT('It costs fifteen dollars and fifty cents.'),DIT('My flight leaves at seven fifteen from gate eighteen.'),
    ['In “thirteen”, the stress is on…',['THIR','TEEN'],1],['In “forty”, the stress is on…',['FOR','TY'],0],
    ['How do you say 2008?',['twenty eight','two thousand and eight','twenty zero eight'],1],
    MAT('Ligue.',[['$4.99','four ninety-nine'],['1998','nineteen ninety-eight'],['44 (phone)','double four'],['0 (phone, UK)','oh']]),
    'Write and record: your birthday, your phone number (real or invented), the year you started working and 3 prices from a receipt.']},
  {l:'EN',lv:'A2',tp:'Pronúncia',t:'Homework · S sounds',i:'Lição de casa: os três sons do -s.',q:[
    SORT(`/s/: cats, books, works, stops
/z/: dogs, plays, lives, goes
/ɪz/: buses, watches, boxes, washes`,'Separe pelo som do -s.'),
    ODD('Which word has an extra syllable?',['likes','lives','kisses','plays'],2,[],'Kisses: /ɪz/ after s.'),
    ['How many syllables are there in “watches”?',['one','two','three'],1],
    DIT('She watches films and plays tennis.'),DIT('He fixes cars and drives buses.'),
    'Write about the routine of someone you know (8 sentences with he/she + -s). Read it aloud and record yourself.']},
  {l:'EN',lv:'B1',tp:'Escrita',t:'Homework · Same sound, different word',i:'Lição de casa: homófonos. Ouça e escreva!',q:[
    PICK('[*They’re/Their/There] coming at 8. Is this [*your/you’re] bag? The company changed [*its/it’s] logo. I want to go [*too/to/two]!'),
    MAT('Ligue.',[['hear','ouvir'],['here','aqui'],['write','escrever'],['right','certo']]),
    FIX('I think {their|they’re} going to be late.'),
    DIT('Their car is over there.'),DIT('You’re right, it’s too late.'),DIT('I don’t know whether the weather will be good.'),
    'Write 6 sentences, each with at least two homophones (ex.: Their dog is over there).']},
  {l:'EN',lv:'B1',tp:'Pronúncia',t:'Homework · Glide!',i:'Lição de casa: ditongos.',q:[
    SORT(`/eɪ/: day, name, great
/aɪ/: my, time, light
/aʊ/: now, house, out
/əʊ/: go, phone, road`,'Separe pelo ditongo.'),
    ODD('Which word has a different vowel sound?',['great','late','eat','name'],2,[],'Eat has /iː/; the others have /eɪ/.'),
    ['Which word rhymes with “know”?',['now','go','how'],1],
    DIT('I know my phone is at home.'),DIT('Wait for me by the gate at eight.'),
    'Write 6 words for each diphthong /eɪ/, /aɪ/ and /əʊ/. Record yourself saying them.']},
  {l:'EN',lv:'B2',tp:'Cultura',t:'Homework · Two Englishes',i:'Lição de casa: inglês britânico e americano.',q:[
    MAT('Ligue o britânico ao americano.',[['flat','apartment'],['lift','elevator'],['holiday','vacation'],['trousers','pants']]),
    SORT(`British spelling: colour, centre, organise
American spelling: color, center, organize`),
    ['In American English, “water” often sounds like…',['“wa-ter” with a clear t','“wader”, with a soft d'],1],
    FIX('(American English) Let’s take the {lift|elevator} to the 10th floor.'),
    ODD('Which word is British English?',['cookie','vacation','biscuit','apartment'],2),
    'Rewrite this text in American English and then in British English: “I left my trousers in the flat before the holiday, so I went to the shop in the city centre.”']},
  {l:'EN',lv:'B1',tp:'Trabalho',t:'Homework · Would you mind…?',i:'Lição de casa: pedidos e favores no trabalho.',q:[
    SEQ('Send me the file.\nCan you send me the file?\nCould you send me the file, please?\nWould you mind sending me the file?\nI was wondering if you could send me the file.','Do mais direto ao mais educado.'),
    PICK('Would you mind [*helping/to help] me? I was wondering if you [*could/can] check this. — Would you mind waiting? — [*Not at all./Yes, I mind.]'),
    KWT('Can you close the door?','MIND','Would you ___ the door?','mind closing'),
    FIX('Would you mind {to call|calling} the client?'),
    COMIC(`[envelope]
Sam: Would you mind preparing the slides for Monday?
Mia: ___
---
Sam (feliz): Perfect, thanks!`,['Not at all. I’ll send them on Friday.','Yes, I mind.','No, I mind.'],0),
    'Write an email (60–80 words) delegating a task to a colleague: polite request, deadline and thanks.']},
  {l:'EN',lv:'C1',tp:'Escrita',t:'Homework · Dear hiring manager',i:'Lição de casa: escreva a sua cover letter.',q:[
    ['Which opening is the best?',['I am writing to apply for the position of…','When I read that your company is expanding into Mexico, I knew I wanted to be part of it.','I am a hard-working team player.'],1],
    ['Which sentence shows a result?',['I was responsible for sales.','I increased sales by 25% in one year.','I am good at sales.'],1],
    MAT('Ligue.',[['spearheaded','liderou'],['streamlined','otimizou'],['track record','histórico'],['align with','estar alinhado com']]),
    FIX('I am looking forward to {hear|hearing} from you.'),
    SEQ('When I saw your search for a product manager, I knew I had to apply.\nIn my current role, I led a team that cut costs by 18%.\nI’m particularly drawn to your work on financial inclusion.\nI’d welcome the opportunity to discuss how I could contribute.','Put the paragraphs of the letter in order.'),
    'Write a cover letter (200–250 words) for a real or dream job: hook, two achievements with numbers, why the company, confident close.']}
);
