/* =========================================================
   Sotaque · revisão do banco: cada tarefa existente foi avaliada e ganhou,
   quando fazia sentido, uma questão de um tipo novo (escolha no texto, encontre o erro,
   separar em grupos, reescrever, ordenar, imagens...).
   Chave: "idioma|título". As leituras e escutas ganham questões montadas do próprio texto (revAuto).
   ========================================================= */
const P=PICK, F=FIX, SO=SORT, K=KWT;
const REV_ADD={
  /* ---------------- inglês · gramática A1 ---------------- */
  'EN|Verb to be':P('My name [*is/am/are] Lucas. I [*am/is/are] from Brazil. My parents [*are/is/am] teachers and my sister [*is/are/am] a student.'),
  'EN|Have got and has got':P('I [*have/has] got two cats. My brother [*has/have] got a dog. [*Have/Has] you got any pets? No, I [*haven’t/hasn’t].'),
  'EN|Possessive adjectives':P('This is Anna and [*her/his/their] brother Tom. [*Their/Her/His] house is big. Tom loves [*his/her/its] bike, and the dog sleeps in [*its/it’s/his] bed.'),
  'EN|There is and there are':P('In my bedroom [*there is/there are] a bed and [*there are/there is] two windows. [*Is there/Are there] a TV? No, [*there isn’t/there aren’t].'),
  'EN|Plurals':SO(`-s: book, car, apple
-es: box, bus, watch
Irregular: child, man, foot`,'Como fica o plural? Separe.'),
  'EN|A or an?':SO(`a: university, car, house, uniform
an: hour, apple, umbrella, egg`,'A ou an? Separe as palavras.'),
  'EN|This, that, these, those':P('[*This/These] is my phone, here in my hand. [*Those/That] are my shoes, over there by the door. Is [*that/those] your car outside?'),
  'EN|Prepositions of place':P('Meet me [*at/in/on] the bus stop. My keys are [*in/on/at] my bag. The picture is [*on/in/at] the wall.'),
  'EN|Question words':P('[*Where/What/Who] do you live? [*What/Where/How] is your name? [*How/What/Who] old are you? [*Who/Where/What] is your best friend?'),
  'EN|Present simple · I, you, we, they':F('We {doesn’t|don’t} work on Sundays.'),
  'EN|Imperatives':P('[*Open/Opens/Opening] your books, please. [*Don’t/Doesn’t/Not] talk in class. [*Be/Are/Is] quiet!'),
  'EN|Subject pronouns':P('This is Maria. [*She/He/It] is my friend. Tom and I are brothers: [*we/they/us] live together. My dog is small: [*it/he/they] is two years old.'),
  'EN|Present simple · he, she, it':P('My sister [*works/work/working] in a bank. She [*doesn’t/don’t] like her job. [*Does/Do] she want a new one? Yes, she [*does/do].'),
  'EN|There is / there are':F('There {is|are} three bedrooms in my flat.'),
  'EN|Would like and want':P('[*Would you like/Do you like/You would like] a coffee? Yes, I’d like [*some/any/many] milk, please. I [*want/wants/wanting] to go home now.'),
  'EN|How much and how many':P('How [*many/much] apples do you want? How [*much/many] water do you drink? How [*much/many] is this T-shirt?'),
  'EN|Countable and uncountable nouns':SO(`Countable: chair, banana, friend, egg
Uncountable: milk, rice, information, music`),
  'EN|Adjectives before nouns':F('She has a {car red|red car}.'),
  'EN|Let’s and why don’t we?':P('[*Let’s/Let us to/Lets] go to the beach! Why [*don’t/doesn’t/not] we have a picnic? Good idea, let’s [*buy/to buy/buying] some sandwiches.'),
  'EN|Do and does: questions':P('[*Do/Does] you speak English? [*Does/Do] your brother live here? Where [*does/do] she work? What time [*do/does] they get up?'),
  /* ---------------- inglês · gramática A2 ---------------- */
  'EN|Present simple · daily routine':SEQ(`I wake up at seven and have a shower.
Then I have breakfast with my family.
At eight I take the bus to work.
I have lunch at one o’clock.
I get home at six and cook dinner.
I go to bed at about eleven.`,'Put Ana’s day in order.'),
  'EN|Present continuous':P('Look! [*It’s raining/It rains/It rain]. The children [*are playing/is playing/play] in the garden and Dad [*is cooking/cooks/are cooking] dinner.'),
  'EN|Present simple or continuous?':P('I usually [*walk/am walking] to work, but today I [*am taking/take] the bus. She [*is studying/studies] now, don’t call her.'),
  'EN|Some, any, much, many':P('We have [*some/any] eggs, but we don’t have [*any/some] milk. There isn’t [*much/many] time. How [*many/much] people are coming?'),
  'EN|In, on, at · time':SO(`in: July, the morning, 2010, summer
on: Monday, my birthday, 5th May
at: 7 o’clock, night, the weekend`),
  'EN|Past simple · regular verbs':F('Yesterday we {watch|watched} a great film.'),
  'EN|Can and can’t':P('I [*can/can to/cans] swim, but I [*can’t/don’t can/not can] dive. [*Can you/Do you can/You can] play the guitar?'),
  'EN|Adverbs of frequency':F('She {goes always|always goes} to the gym on Mondays.'),
  'EN|Was and were':P('Yesterday I [*was/were] at home. My parents [*were/was] at work. [*Were/Was] you at the party? No, I [*wasn’t/weren’t].'),
  'EN|Past simple · questions and negatives':F('Did you {went|go} to the party last night?'),
  'EN|Object pronouns':P('I love my grandma and I visit [*her/she/hers] every week. Where are my keys? I can’t find [*them/they/their]. Can you help [*me/I/my]?'),
  'EN|Possessive ’s':F('This is {my brother car|my brother’s car}.'),
  'EN|Going to · plans':P('Next summer we [*are going to/going to/go to] visit Peru. [*I’m going to/I’m go to/I going to] learn Spanish. [*Is she going to/She going to/Does she going to] come with us?'),
  'EN|Like, love, hate + -ing':F('I love {cook|cooking} for my friends.'),
  'EN|Must and mustn’t · rules':SO(`You must: wear a seatbelt, stop at a red light, have a ticket
You mustn’t: use your phone while driving, smoke on the plane, park here`,'Regras: must ou mustn’t?'),
  'EN|Prepositions of place II':P('The bank is [*opposite/between/into] the park. The café is [*between/opposite/on] the bank and the bookshop. The hotel is [*next to/next/near to] the station.'),
  'EN|There was and there were':P('[*There was/There were] a big party last night. [*There were/There was] lots of people. [*Was there/Were there] any food? Yes, but [*there wasn’t/there weren’t] any cake.'),
  'EN|Adjectives or adverbs?':P('She is a [*careful/carefully] driver: she drives very [*carefully/careful]. He speaks English [*well/good]. The test was [*easy/easily].'),
  'EN|Past simple: regular and irregular':SO(`Regular (-ed): played, worked, studied, visited
Irregular: went, saw, bought, ate`),
  'EN|Comparatives: my city':P('My city is [*bigger/more big/biggest] than my town. It’s [*more expensive/expensiver/most expensive] too, but the food is [*better/gooder/best].'),
  'EN|Past continuous':P('I [*was reading/read/were reading] when the phone rang. What [*were you doing/did you doing/was you doing] at 8 pm? We [*were watching/was watching/watched] TV.'),
  'EN|Present perfect: ever and never':F('Have you ever {went|been} to Japan?'),
  'EN|Will: predictions, offers and decisions':P('It’s cold. [*I’ll close/I close/I’m closing] the window. I think it [*will rain/rains/is raining] tomorrow. Don’t worry, [*I’ll help/I help/I helped] you.'),
  'EN|Possessive pronouns':P('Is this your pen? No, it isn’t [*mine/my/me]. It’s [*hers/her/she’s]. And these books? They’re [*ours/our/us].'),
  'EN|Reflexive pronouns':P('She taught [*herself/her/hers] to play the piano. Did you make it [*yourself/yourselves/you]? We enjoyed [*ourselves/us/ourself] at the party.'),
  'EN|Have to and don’t have to':SO(`have to: wear a uniform at school, pay for the bus, be on time
don’t have to: pay in a public library, wear a tie on Saturdays, cook at a restaurant`,'Have to ou don’t have to?'),
  'EN|Prepositions of movement':P('Go [*into/out of/along] the bakery to buy bread, then come [*out of/into/along] the bakery and walk [*along/into/out of] the street to the park.'),
  'EN|Superlatives':P('It’s the [*tallest/most tall/taller] building in the city. That was the [*best/goodest/better] day of my life. She’s the [*most famous/famousest/more famous] singer in Brazil.'),
  /* ---------------- inglês · gramática B1 ---------------- */
  'EN|Past simple · irregular verbs':SO(`Same form (cut): cut, put, hit, let
Different form (go → went): go, take, buy, write`,'O passado é igual ao infinitivo? Separe.'),
  'EN|Past continuous or past simple?':P('I [*was walking/walked] home when it [*started/was starting] to rain. While she [*was cooking/cooked], the lights [*went out/were going out].'),
  'EN|Present perfect or past simple?':F('I {have finished|finished} the project last Friday.'),
  'EN|Comparatives and superlatives':F('This is {the most good|the best} pizza in town.'),
  'EN|Will or going to?':P('Look at those clouds! [*It’s going to/It will] rain. A: The phone’s ringing. B: [*I’ll/I’m going to] get it. [*We’re going to/We will] get married in June: we booked everything.'),
  'EN|Should, must, have to':F('You {should to|should} see a doctor.'),
  'EN|Used to':P('When I was a child, I [*used to/use to/was used to] live in a small town. [*Did you use to/Did you used to/Used you to] play outside? I [*didn’t use to/didn’t used to/not used to] like vegetables.'),
  'EN|First conditional':F('If it {will rain|rains} tomorrow, we’ll stay at home.'),
  'EN|Present perfect · for and since':SO(`for: two years, a long time, ten minutes, ages
since: 2018, Monday, I was a child, last summer`),
  'EN|Present perfect continuous':P('I’m tired because [*I’ve been running/I’ve ran/I run]. How long [*have you been waiting/are you waiting/did you wait]? She [*has been learning/is learning/learns] English since 2020.'),
  'EN|Past perfect':P('When I arrived, the film [*had already started/already started/has already started]. She was nervous because she [*had never flown/never flew/has never flown] before.'),
  'EN|Zero conditional':F('If you heat ice, it {will melts|melts}.'),
  'EN|Too and enough':P('I can’t carry this box. It’s [*too heavy/heavy enough/enough heavy]. She isn’t [*old enough/enough old/too old] to drive. There aren’t [*enough chairs/chairs enough/too chairs] for everyone.'),
  'EN|So and such':P('It was [*such a/so/such] beautiful day! The film was [*so/such/such a] boring that I fell asleep. They are [*such/so/such a] nice people.'),
  'EN|Question tags':P('You’re Brazilian, [*aren’t you/isn’t it/don’t you]? She doesn’t eat meat, [*does she/doesn’t she/is she]? They went to the party, [*didn’t they/did they/weren’t they]?'),
  'EN|A few, a little, few, little':P('I have [*a little/a few] money, so let’s get a coffee. There are [*a few/a little] apples in the fridge. Very [*few/little] people came, so the room was empty.'),
  'EN|Articles · a, an, the or nothing':P('I saw [*a/the/—] great film yesterday. [*The/A/—] film was about [*—/the/a] love. She plays [*the/—/a] piano.'),
  'EN|Already, yet and just':P('Have you finished [*yet/already/just]? I’ve [*just/yet/still] arrived, I’m still at the door. She has [*already/yet/still] seen this film twice.'),
  'EN|Might, may and could':F('It {might rains|might rain} later, take an umbrella.'),
  'EN|Who, which or where?':P('That’s the woman [*who/which/where] lives next door. This is the café [*where/which/who] we met. I lost the book [*which/who/where] you gave me.'),
  'EN|Used to and would':F('I {would|used to} have long hair when I was a teenager.'),
  'EN|First and second conditional':P('If I [*win/won] the lottery tomorrow, I’ll buy a house. If I [*had/have] more time, I would learn Japanese. If it [*rains/rained] later, we’ll stay in.'),
  'EN|Prepositions after adjectives':P('She’s good [*at/in/on] maths. I’m afraid [*of/from/with] spiders. He’s interested [*in/on/at] history. We’re proud [*of/for/with] you.'),
  'EN|Verbs with prepositions':P('I’m waiting [*for/to/on] the bus. It depends [*on/of/from] the weather. Listen [*to/at/—] me! She’s thinking [*about/on/in] her future.'),
  'EN|Future time clauses':F('I’ll call you when I {will arrive|arrive}.'),
  'EN|As…as and not as…as':P('My brother is [*as tall as/as taller as/so tall than] my dad. The book is [*not as good as/not as better as/not good as] the film. Run [*as fast as/as faster as/fast as] you can!'),
  'EN|Stop, remember, try + -ing or to':P('I stopped [*smoking/to smoke] five years ago: I don’t smoke now. Remember [*to lock/locking] the door when you leave! Try [*opening/open] the window, maybe it’ll help.'),
  'EN|Could, was able to and managed to':F('After three hours, we {could|managed to} find the hotel.'),
  'EN|So do I and neither do I':P('A: I love pizza. B: [*So do I/Neither do I/So am I]. A: I don’t like horror films. B: [*Neither do I/So do I/Neither don’t I]. A: I’m tired. B: [*So am I/So do I/Neither am I].'),
  'EN|Had to and didn’t have to':F('Yesterday I {have to|had to} work late.'),
  'EN|Defining relative clauses: that and omission':P('The man [*who/which/where] called you is my boss. Is this the book [*that/who/where] you wanted? The day [*when/which/who] we met was perfect.'),
  /* ---------------- inglês · gramática B2 ---------------- */
  'EN|Passive voice':K('They built this bridge in 1950.','BUILT','This bridge ___ in 1950.','was built'),
  'EN|Reported speech':K('“I’m tired,” she said.','WAS','She said that ___ tired.','she was'),
  'EN|Relative clauses':F('That’s the house {which|where} I was born.'),
  'EN|Gerund or infinitive?':SO(`+ -ing: enjoy, avoid, mind, finish, suggest
+ to: decide, hope, refuse, promise, afford`,'Esses verbos pedem -ing ou to?'),
  'EN|Linking words':P('[*Although/Despite/However] it was raining, we went out. [*Despite/Although/Even] the rain, we had fun. It was late. [*However/Although/Despite], we stayed.'),
  'EN|Second conditional':K('I don’t have a car, so I can’t drive to work.','IF','I could drive to work ___ a car.','if I had'),
  'EN|Modals of deduction':P('She’s not answering. She [*must/can’t/should] be asleep. That [*can’t/must/mustn’t] be Tom, he’s in Paris! It [*might/must/can’t] rain later, I’m not sure.'),
  'EN|Have something done':K('A hairdresser cut my hair yesterday.','HAD','I ___ yesterday.','had my hair cut'),
  'EN|Future continuous and future perfect':P('This time tomorrow [*I’ll be lying/I’ll have lain/I lie] on a beach. By 2030, [*I’ll have finished/I’ll be finishing/I finish] my degree.'),
  'EN|Used to, be used to, get used to':P('I [*used to/am used to] smoke, but I stopped. I’ve lived here for years, so I [*am used to/used to] the cold. It took me months to [*get used to/use to] driving on the left.'),
  'EN|Narrative tenses':SEQ(`It was a cold night and it was snowing.
Emma was walking home from work.
Suddenly, she heard a noise behind her.
She turned around, but there was nobody there.
She had forgotten that her cat followed her everywhere!`,'Put the story in order.'),
  'EN|Passive with modals':K('You must turn off your phone.','BE','Your phone ___ turned off.','must be'),
  'EN|Indirect questions':F('Could you tell me where {is the station|the station is}?'),
  'EN|Both, either and neither':P('[*Both/Either/Neither] my parents are teachers. You can have [*either/both/neither] tea or coffee. [*Neither/Both/Either] of us likes horror films.'),
  'EN|Make, let and get':F('My parents didn’t {let me to|let me} go to the party.'),
  'EN|Passive voice and causative':K('Someone is repairing my car.','BEING','My car ___ .','is being repaired'),
  'EN|Reported speech: what they said':K('“Don’t be late,” my boss told me.','NOT','My boss told me ___ late.','not to be'),
  'EN|Third conditional':K('I didn’t study, so I failed the exam.','HAD','If I ___ , I wouldn’t have failed the exam.','had studied'),
  'EN|Modals of deduction in the past':P('The lights are off. They [*must have gone/must go/can’t have gone] to bed. She [*can’t have seen/must have seen/can’t see] me, she didn’t say hello.'),
  'EN|Should have and shouldn’t have':K('It was a mistake to eat so much.','SHOULDN’T','I ___ so much.','shouldn’t have eaten'),
  'EN|Reporting verbs':P('He [*apologised/said/told] for being late. She [*suggested/advised/told] going to the cinema. They [*refused/denied/avoided] to help us.'),
  'EN|Unless, as long as and provided that':K('We’ll go to the beach if it doesn’t rain.','UNLESS','We’ll go to the beach ___ .','unless it rains'),
  'EN|It’s time, I’d rather and I’d better':P('It’s time we [*went/go/going] home. I’d rather [*stay/to stay/staying] in tonight. You’d better [*not be/not to be/don’t be] late.'),
  'EN|Non-defining relative clauses':F('My brother, {that|who} lives in London, is a doctor.'),
  /* ---------------- inglês · gramática C1 ---------------- */
  'EN|Conditionals · review':P('If I [*had known/knew/would know], I would have helped. If she [*were/would be/is] here now, she’d know what to do. If you [*heat/will heat/heated] water to 100°C, it boils.'),
  'EN|Third and mixed conditionals':K('I didn’t take the job, so I’m not rich now.','WOULD','If I had taken the job, I ___ rich now.','would be'),
  'EN|Wish and if only':P('I wish I [*had/have/would have] more time. If only I [*hadn’t said/didn’t say/wouldn’t say] that yesterday! I wish it [*would stop/stops/stopping] raining!'),
  'EN|Inversion':K('I have never seen such a beautiful view.','NEVER','___ such a beautiful view.','never have I seen'),
  'EN|Cleft sentences':K('Her attitude annoys me.','WHAT','___ her attitude.','what annoys me is'),
  'EN|Participle clauses':K('Because I didn’t know what to do, I called my mum.','KNOWING','___ what to do, I called my mum.','not knowing'),
  'EN|Advanced passive':K('People believe that the house is haunted.','BELIEVED','The house ___ haunted.','is believed to be'),
  'EN|Emphasis with do and did':F('I {did told|did tell} you to bring an umbrella!'),
  'EN|The subjunctive':P('The doctor recommended that he [*rest/rests/rested]. It’s essential that she [*be/is/was] informed. I insist that he [*leave/leaves/left] now.'),
  'EN|Future in the past':P('I knew you [*would/will/are going to] like it. She was [*about to/going/would] leave when he called. We [*were going to/are going to/will] travel, but we cancelled.'),
  'EN|Ellipsis and substitution':P('A: Is it going to rain? B: I hope [*not/no/don’t]. A: Are you coming? B: I think [*so/it/yes]. She can swim, but I [*can’t/don’t/am not].'),
  'EN|Whereas, albeit and notwithstanding':P('It was a good result, [*albeit/whereas/notwithstanding] a small one. I love winter, [*whereas/albeit/despite] my sister prefers summer.'),
  'EN|Inversion for emphasis':K('As soon as I sat down, the phone rang.','HARDLY','___ down when the phone rang.','hardly had I sat'),
  'EN|Needn’t have and didn’t need to':P('I [*needn’t have bought/didn’t need buy/needn’t buy] so much food: nobody came. We [*didn’t need to/needn’t have] take a taxi, so we walked.'),
  'EN|Hedging and softening':SO(`Hedging (less certain): It seems that, This may suggest, It could be argued
Strong claims: This proves that, It is clear that, Everyone knows`,'Linguagem cautelosa ou afirmação forte?'),
  'EN|Bound to, about to and on the verge of':P('Hurry up, the train is [*about to/bound for/on the verge] leave! She’s so talented, she’s [*bound to/about/on the verge] succeed. The company is on the verge [*of/to/for] closing.'),
  'EN|Nominalisation':K('Prices increased sharply, which worried investors.','INCREASE','The sharp ___ prices worried investors.','increase in'),
  /* ---------------- francês · gramática ---------------- */
  'FR|Se présenter':P('Je [*m’appelle/appelle/m’appelles] Léa. J’[*ai/suis/a] vingt ans et je [*suis/ai/est] brésilienne. J’[*habite/habites/habiter] à Lyon.','Choisissez la bonne forme.'),
  'FR|Les articles':P('J’aime [*le/un/du] chocolat. Il y a [*une/la/des] pomme sur la table. [*Les/La/Le] enfants de ma sœur jouent dans [*le/la/les] jardin.','Choisissez le bon article.'),
  'FR|La négation':F('Je {ne aime pas|n’aime pas} le café.','Trouvez l’erreur et corrigez.'),
  'FR|Poser des questions':P('[*Où/Quand/Qui] habites-tu ? [*Comment/Quel/Où] tu t’appelles ? [*Quel/Quelle/Quels] âge as-tu ? [*Qu’est-ce que/Est-ce que/Qui] tu fais ce soir ?','Choisissez le bon mot.'),
  'FR|Les adjectifs possessifs':P('C’est [*ma/mon/mes] sœur et [*mon/ma/mes] frère. [*Mes/Mon/Ma] parents habitent à Nice. [*Mon/Ma/Mes] amie s’appelle Julie.','Choisissez le bon possessif.'),
  'FR|Les articles partitifs':P('Je bois [*du/de la/des] café et je mange [*de la/du/des] confiture. Il n’y a pas [*de/du/des] lait. Tu veux [*des/du/de la] fruits ?','Choisissez le bon article.'),
  'FR|À, en, au, aux':SO(`en : France, Italie, Espagne
au : Brésil, Canada, Portugal
aux : États-Unis, Pays-Bas
à : Paris, Lisbonne, Rio`,'En, au, aux ou à ? Classez.'),
  'FR|Les pronoms COD et COI':P('Tu vois Marie ? Oui, je [*la/lui/le] vois. Tu parles à Paul ? Oui, je [*lui/le/leur] parle. Tu appelles tes parents ? Oui, je [*les/leur/lui] appelle.','Choisissez le bon pronom.'),
  'FR|Les pronoms y et en':P('Tu vas à Paris ? Oui, j’[*y/en] vais demain. Tu veux du café ? Oui, j’[*en/y] veux bien. Tu penses à ton examen ? Oui, j’[*y/en] pense.','Y ou en ?'),
  'FR|Les pronoms relatifs':P('C’est le livre [*que/qui/dont] j’ai lu. C’est la femme [*qui/que/où] habite ici. C’est la ville [*où/que/dont] je suis né. C’est le film [*dont/que/qui] je t’ai parlé.','Choisissez le bon pronom relatif.'),
  'FR|Comparatif et superlatif':F('Ce restaurant est {plus bon|meilleur} que l’autre.','Trouvez l’erreur et corrigez.'),
  'FR|Les hypothèses avec si':P('Si j’[*avais/aurais/ai] de l’argent, je voyagerais. S’il pleut, nous [*resterons/resterions/restions] à la maison. Si tu étais venu, tu [*aurais aimé/aimerais/aimais] la fête.','Choisissez la bonne forme.'),
  'FR|Le discours indirect':K('« Je viendrai demain », a dit Marie.','VIENDRAIT','Marie a dit qu’elle ___ .','viendrait le lendemain','Transformez avec le mot donné.'),
  'FR|La voix passive':K('Le chef prépare le repas.','EST','Le repas ___ le chef.','est préparé par','Transformez au passif.'),
  'FR|Le gérondif':K('Il écoute de la musique quand il travaille.','EN','Il écoute de la musique ___ .','en travaillant','Utilisez le gérondif.'),
  'FR|Les connecteurs logiques':SO(`Cause : parce que, car, puisque
Conséquence : donc, alors, c’est pourquoi
Opposition : mais, pourtant, cependant`,'Classez les connecteurs.'),
  'FR|La concordance des temps':P('Il a dit qu’il [*viendrait/viendra/vient] demain. Je pensais que tu [*étais/es/seras] malade. Elle savait qu’il [*avait menti/a menti/ment].','Choisissez la bonne forme.'),
  'FR|La nominalisation':SO(`-tion : réduire → réduction, augmenter → augmentation, organiser → organisation
-ment : changer → changement, développer → développement, licencier → licenciement`,'Classez selon le suffixe du nom.'),
  'FR|Participe présent et adjectif verbal':P('Les enfants, [*obéissant/obéissants] à leur mère, sont rentrés. C’est une histoire très [*amusante/amusant]. [*Fatiguant/Fatigant] tout le monde, il parlait sans arrêt.','Choisissez la bonne forme.'),
  'FR|Masculin ou féminin ?':SO(`Masculin : le livre, le soleil, le problème, le fromage
Féminin : la voiture, la maison, la fleur, la table`,'Masculin ou féminin ?'),
  'FR|Les prépositions de lieu':P('Le chat est [*sous/sur/dans] la table. Les clés sont [*dans/sur/sous] mon sac. La banque est [*à côté de/à côté/près] la poste.','Choisissez la bonne préposition.'),
  'FR|Les pronoms toniques':P('[*Moi/Je/Me], j’aime le café. Et [*toi/tu/te] ? Ce cadeau est pour [*elle/la/lui-même]. Nous partons sans [*eux/ils/leur].','Choisissez le bon pronom.'),
  'FR|Il y a, depuis et pendant':P('J’habite ici [*depuis/il y a/pendant] cinq ans. Je suis arrivé [*il y a/depuis/pendant] deux jours. J’ai dormi [*pendant/depuis/il y a] dix heures.','Choisissez le bon mot.'),
  'FR|Celui, celle, ceux et celles':P('Quelle robe ? [*Celle/Celui/Ceux] de gauche. Quels livres ? [*Ceux/Celles/Celui] que tu m’as prêtés. Ce n’est pas mon sac, c’est [*celui/celle/ceux] de Marie.','Choisissez le bon pronom.'),
  'FR|Les adverbes en -ment':SO(`-ment : lentement, doucement, rapidement
-amment / -emment : couramment, évidemment, prudemment`,'Classez les adverbes.'),
  'FR|Cause et conséquence':P('Je suis resté chez moi [*parce qu’il/donc il/alors il] pleuvait. Il pleuvait, [*donc/parce que/car] je suis resté chez moi. [*Grâce à/À cause de/Donc] ton aide, j’ai réussi.','Choisissez le bon connecteur.'),
  'FR|Il dit que…':K('« J’ai faim », dit Marie.','QU’ELLE','Marie dit ___ faim.','qu’elle a','Transformez avec le mot donné.'),
  'FR|Bien que, malgré et pourtant':P('[*Bien qu’il/Malgré il/Pourtant il] soit malade, il travaille. [*Malgré/Bien que/Pourtant] la pluie, nous sommes sortis. Il est riche, et [*pourtant/malgré/bien que] il n’est pas heureux.','Choisissez le bon mot.'),
  'FR|L’accord du participe passé':F('Les lettres que j’ai {écrit|écrites} sont sur la table.','Trouvez l’erreur et corrigez.'),
  'FR|La mise en relief':K('Paul a cassé le vase.','C’EST','___ a cassé le vase.','c’est Paul qui','Mettez en relief avec le mot donné.'),
  'FR|Au cas où, pour peu que, à condition que':P('Prends un parapluie [*au cas où/à condition que/pour peu que] il pleuvrait. Je viendrai [*à condition que/au cas où/pour peu] tu m’invites.','Choisissez la bonne expression.'),
  'FR|Les articles : le, la, les, un, une':SO(`le : soleil, fromage, livre
la : lune, maison, plage
les : enfants, amis, chaussures`,'Le, la ou les ?'),
  'FR|Les pronoms COD : le, la, les':P('Tu regardes la télé ? Oui, je [*la/le/les] regarde. Tu aimes ce film ? Oui, je l’[*aime/aimes/aimons]. Tu as vu tes amis ? Oui, je [*les/la/leur] ai vus.','Choisissez la bonne forme.'),
  'FR|Imparfait ou passé composé : souvenirs':P('Quand j’[*étais/ai été] petit, j’[*habitais/ai habité] à la campagne. Un jour, je [*suis tombé/tombais] d’un arbre.','Imparfait ou passé composé ?'),
  'FR|Le subjonctif après « il faut que »':F('Il faut que tu {viens|viennes} demain.','Trouvez l’erreur et corrigez.'),
  'FR|Les pronoms relatifs composés':P('C’est la raison [*pour laquelle/pour lequel/pour qui] je suis parti. Voici l’ami [*avec qui/avec lequel/avec laquelle] je travaille. C’est le stylo [*avec lequel/avec laquelle/avec qui] j’écris.','Choisissez le bon pronom.'),
  'FR|Les adjectifs : accord et place':F('J’ai acheté une robe {noir|noire}.','Trouvez l’erreur et corrigez.'),
  'FR|C’est ou il est ?':P('[*C’est/Il est] mon frère. [*Il est/C’est] médecin. [*C’est/Il est] un bon médecin. [*Il est/C’est] très gentil.','C’est ou il est ?'),
  'FR|Les pronoms COI : lui et leur':P('Tu téléphones à ta mère ? Oui, je [*lui/la/leur] téléphone. Tu écris à tes amis ? Oui, je [*leur/les/lui] écris.','Choisissez le bon pronom.'),
  'FR|La négation : jamais, rien, personne, plus':P('Je ne vois [*personne/rien/jamais]: la rue est vide. Il ne mange [*rien/personne/jamais], il n’a pas faim. Je ne fume [*plus/rien/personne] depuis 2020.','Choisissez le bon mot.'),
  'FR|Les indéfinis : quelqu’un, quelque chose, chacun':P('[*Quelqu’un/Quelque chose/Chacun] a sonné à la porte. Tu veux [*quelque chose/quelqu’un/chacun] à boire ? [*Chacun/Quelqu’un/Quelque chose] a son livre.','Choisissez le bon mot.'),
  'FR|Faire + infinitif':K('Le garagiste répare ma voiture.','FAIS','Je ___ ma voiture.','fais réparer','Transformez avec le mot donné.'),
  'FR|Les verbes et leurs prépositions':P('J’ai décidé [*de/à/—] partir. Il commence [*à/de/—] pleuvoir. Je pense [*à/de/sur] toi. Elle a peur [*des/aux/pour les] chiens.','Choisissez la bonne préposition.'),
  'FR|Les temps du récit':SEQ(`Il était une fois une petite fille qui vivait dans la forêt.
Un matin, elle a décidé d’aller voir sa grand-mère.
Pendant qu’elle marchait, elle a rencontré un loup.
Le loup avait déjà mangé la grand-mère quand elle est arrivée.`,'Remettez l’histoire dans l’ordre.'),
  'FR|L’inversion du sujet':F('Peut-être {il viendra|viendra-t-il} demain.','Trouvez l’erreur et corrigez.'),
};
Object.assign(REV_ADD,{
  /* ---------------- vocabulário (com imagens quando a palavra tem desenho) ---------------- */
  'EN|Greetings and introductions':SEQ(`A: Hi! I’m Paula. What’s your name?
B: Hi, Paula. I’m Daniel. Nice to meet you.
A: Nice to meet you too. Where are you from?
B: I’m from Chile. And you?
A: I’m from Brazil.`,'Put the conversation in order.'),
  'EN|Numbers and age':P('I’m [*twenty-one/twenty-first/twelve-one] years old. My grandma is [*ninety/nineteen/ninth]. There are [*twelve/twelfth/twenty-two] months in a year.'),
  'EN|Days, months and seasons':SO(`Days: Monday, Thursday, Sunday
Months: March, August, December
Seasons: spring, summer, autumn`),
  'EN|Colours and clothes':PMATCH(`a T-shirt | img:camiseta
a dress | img:vestido
trousers | img:calca
a skirt | img:saia
socks | img:meias
a hat | img:chapeu`),
  'EN|Family members':SO(`Women: mother, aunt, sister, grandmother
Men: father, uncle, brother, grandfather
Both: cousin, parent, child`),
  'EN|At the restaurant':SEQ(`A: Good evening. A table for two?
B: Yes, please.
A: Here’s the menu. Are you ready to order?
B: I’d like the chicken, please.
A: Anything to drink?
B: Just water, thanks.`,'Put the dialogue in order.'),
  'EN|Jobs and workplaces':SO(`Hospital: nurse, doctor, surgeon
School: teacher, headteacher, cleaner
Restaurant: waiter, chef, cashier`,'Where do they work?'),
  'EN|Travel and airports':PMATCH(`a suitcase | img:mala
a plane | img:aviao
a ticket | img:ingresso
a train | img:trem
a backpack | img:mochila`),
  'EN|Health and the body':ODD('Which one is different?',['headache','toothache','stomach ache','umbrella'],3,[],'The others are pains.'),
  'EN|False friends':P('I’m reading a great [*novel/romance] by Jane Austen. [*Actually/Currently], I don’t like coffee: I prefer tea. My [*parents/relatives] are my mother and father.'),
  'EN|Make or do?':SO(`make: a mistake, noise, a cake, a phone call
do: homework, the dishes, exercise, a favour`),
  'EN|Collocations':P('It’s time to [*make/do/take] a decision. Can I [*take/make/do] a photo? Let’s [*have/make/do] a break. She [*paid/gave/made] attention to every detail.'),
  'EN|House and rooms':PMATCH(`a sofa | img:sofa
a bed | img:cama
a fridge | img:geladeira
a bathroom | img:banheira
a wardrobe | img:armario
a chair | img:cadeira`),
  'EN|The weather':LABEL(`sunny | img:sol
rainy | img:chuva
windy | img:vento
cloudy | img:nuvem
snowy/snow | img:neve`,'What’s the weather like? Write the word.'),
  'EN|Telling the time':P('It’s 7:15. It’s [*quarter past/quarter to/half past] seven. It’s 8:30. It’s [*half past/half to/quarter past] eight. It’s 9:45. It’s [*quarter to/quarter past/half past] ten.'),
  'EN|In the classroom':PMATCH(`a book | img:livro
a pencil | img:lapis
a backpack | img:mochila
a clock | img:relogio
a chair | img:cadeira`),
  'EN|Shopping':SEQ(`A: Can I help you?
B: Yes, do you have this T-shirt in a medium?
A: Yes, here you are.
B: Can I try it on?
A: Sure, the fitting rooms are over there.`,'Put the dialogue in order.'),
  'EN|Transport':PMATCH(`a bus | img:onibus
a car | img:carro
a bike | img:bicicleta
a train | img:trem
a plane | img:aviao`),
  'EN|Directions in the city':P('Go [*straight/right/across] on and turn [*left/on/at] at the traffic lights. The bank is [*on/in/at] your right, [*next to/next/near of] the café.'),
  'EN|Hobbies and free time':PMATCH(`play the guitar | img:violao
take photos | img:camera
ride a bike | img:bicicleta
play football | img:bola
read | img:livro`),
  'EN|Feelings':PMATCH(`happy | img:feliz
sad | img:triste
tired | img:cansado
angry | img:bravo
worried | img:preocupado
bored | img:entediado`,'How do they feel?'),
  'EN|In the kitchen':LABEL(`bread | img:pao
cheese | img:queijo
an egg/egg | img:ovo
juice | img:suco
a cup/cup | img:xicara`),
  'EN|-ed or -ing adjectives?':P('The film was really [*boring/bored]. I was so [*bored/boring] that I fell asleep. Her news was [*surprising/surprised] and we were all [*surprised/surprising].'),
  'EN|Money':SO(`Spend money: buy, pay, waste
Keep money: save, earn, invest`,'Separe.'),
  'EN|Technology':ODD('Which one is different?',['download','upload','click','breakfast'],3,[],'The others are things you do on a computer.'),
  'EN|The environment':SO(`Good for the planet: recycle, plant trees, take the bus
Bad for the planet: waste water, burn rubbish, drive everywhere`),
  'EN|Personality':SO(`Positive: generous, honest, patient, cheerful
Negative: selfish, rude, lazy, bossy`),
  'EN|Sports':SO(`play: football, tennis, volleyball
go: swimming, running, cycling
do: yoga, karate, gymnastics`,'Play, go ou do?'),
  'EN|School and education':ODD('Which one is different?',['exam','homework','lesson','holiday'],3,[],'A holiday is a break from school.'),
  'EN|Prefixes':SO(`un-: happy, kind, usual
im-: possible, patient, polite
dis-: agree, honest, like`,'Qual prefixo forma o contrário?'),
  'EN|Suffixes':SO(`-ness: happy, kind, dark
-ment: develop, agree, enjoy
-tion: inform, educate, create`,'Qual sufixo forma o substantivo?'),
  'EN|Crime and the law':SO(`People: thief, judge, lawyer, witness
Crimes: robbery, fraud, kidnapping, burglary`),
  'EN|News and media':P('I read the [*headlines/headings] every morning. The story was on the [*front page/first page]. She’s a [*journalist/journal] for a big newspaper.'),
  'EN|Health and lifestyle':SO(`Healthy: eat vegetables, sleep 8 hours, go for a walk
Unhealthy: skip breakfast, smoke, sit all day`),
  'EN|Formal or informal?':SO(`Formal: I would like to, Dear Sir or Madam, Kind regards
Informal: I wanna, Hey there, See ya`),
  'EN|Academic vocabulary':P('The study [*indicates/says to/tells] that sleep affects memory. The data [*suggest/suggests to/tell to] a clear trend. We need to [*analyse/analysis/analytic] the results.'),
  'EN|Binomials':SO(`and: salt and pepper, black and white, rock and roll
or: sooner or later, more or less, now or never`,'And ou or?'),
  'EN|Collocations II':P('There was [*heavy/strong/big] rain last night. She has a [*strong/heavy/hard] accent. He made a [*serious/heavy/hard] mistake.'),
  'EN|Countries and nationalities':SO(`-ian: Brazil, Italy, Canada
-ish: Spain, England, Turkey
-ese: Japan, China, Portugal`,'Como termina a nacionalidade?'),
  'EN|Food and drinks':PMATCH(`bread | img:pao
cheese | img:queijo
chicken | img:frango
vegetables | img:legumes
juice | img:suco
water | img:agua`),
  'EN|Places in town':ODD('Which one is different?',['bank','museum','hospital','banana'],3,[],'A banana is not a place.'),
  'EN|At the doctor':SEQ(`A: What’s the matter?
B: I’ve got a terrible headache.
A: How long have you had it?
B: Since Monday.
A: Take these pills twice a day.`,'Put the dialogue in order.'),
  'EN|At the hotel':SEQ(`A: Good afternoon. Can I help you?
B: Yes, I have a reservation. My name is Silva.
A: Ah, yes. A double room for three nights.
B: That’s right. What time is breakfast?
A: From seven to ten. Here’s your key.`,'Put the dialogue in order.'),
  'EN|Renting a flat':P('The [*rent/rental/renting] is £800 a month. You need to pay a [*deposit/deposition/down] first. The flat is [*furnished/furniture/furnish], so it has a sofa and a bed.'),
  'EN|Collocations with have, take and pay':SO(`have: a shower, a good time, lunch
take: a photo, a break, a taxi
pay: attention, a visit, a compliment`),
  'EN|Word formation':P('She’s very [*creative/creation/create]. His [*decision/decide/decisive] surprised us. The film was [*disappointing/disappoint/disappointment].'),
  'EN|My family':P('My mother’s brother is my [*uncle/cousin/nephew]. My uncle’s son is my [*cousin/brother/nephew]. My father’s mother is my [*grandmother/aunt/niece].'),
  'EN|Days, months and dates':P('My birthday is [*on/in/at] 5th May. Christmas is [*in/on/at] December. We have class [*on/in/at] Mondays.'),
  'EN|Clothes and shopping':PMATCH(`a jacket | img:jaqueta
shoes | img:sapato
a shirt | img:camisa
glasses | img:oculos
a backpack | img:mochila`),
  'EN|Collocations: make and do':ODD('Which one goes with “do”?',['a mistake','a cake','the dishes','noise'],2,[],'We do the dishes. We make a mistake, a cake and noise.'),
  'EN|Picture vocabulary: things':LABEL(`a cup/cup | img:xicara
a key/key | img:chave
a phone/phone | img:celular
a ticket/ticket | img:ingresso`),
  'EN|Picture vocabulary: places and nature':ODD('Which one is different?',['a mountain','the sea','a tree','a sofa'],3,['montanha','mar','arvore','sofa'],'The sofa is in the house. The others are in nature.'),
  'EN|Spell the word':LABEL(`cat | img:gato
dog | img:cachorro
cake | img:bolo
hat | img:chapeu
bed | img:cama`),
  'FR|Les nombres':P('J’ai [*vingt et un/vingt-un/vingt et une] ans. Ma grand-mère a [*quatre-vingts/huit-dix/quatre-vingt] ans. Il y a [*douze/deuze/dix-deux] mois dans une année.','Choisissez la bonne forme.'),
  'FR|Les jours et les mois':SO(`Jours : lundi, jeudi, dimanche
Mois : mars, août, décembre
Saisons : printemps, été, automne`,'Classez.'),
  'FR|Les couleurs':P('La banane est [*jaune/rouge/bleue]. Le ciel est [*bleu/vert/noir]. La neige est [*blanche/blanc/noire].','Choisissez la bonne couleur.'),
  'FR|La famille':SO(`Femmes : la mère, la tante, la sœur
Hommes : le père, l’oncle, le frère
Les deux : les parents, les enfants, les cousins`,'Classez.'),
  'FR|Au restaurant':SEQ(`A : Bonsoir, une table pour deux ?
B : Oui, s’il vous plaît.
A : Voici la carte. Vous avez choisi ?
B : Je voudrais le poulet, s’il vous plaît.
A : Et comme boisson ?
B : Une carafe d’eau, merci.`,'Remettez le dialogue dans l’ordre.'),
  'FR|Les vêtements et les courses':PMATCH(`une chemise | img:camisa
un pantalon | img:calca
une robe | img:vestido
une jupe | img:saia
des chaussettes | img:meias`,'Choisissez le mot de chaque image.'),
  'FR|En ville':PMATCH(`le bus | img:onibus
la voiture | img:carro
le vélo | img:bicicleta
le train | img:trem
l’avion | img:aviao`,'Choisissez le mot de chaque image.'),
  'FR|Les loisirs':PMATCH(`jouer de la guitare | img:violao
prendre des photos | img:camera
faire du vélo | img:bicicleta
jouer au foot | img:bola
lire | img:livro`,'Choisissez le mot de chaque image.'),
  'FR|Faux amis · português e francês':P('Je suis [*fatigué/cansé] après le travail. J’ai acheté un [*cadeau/presente] pour ma mère. Il [*attend/espère] le bus depuis dix minutes.','Choisissez le bon mot français.'),
  'FR|Le travail':SO(`Personnes : le patron, le collègue, le stagiaire
Choses : le bureau, le contrat, le salaire`,'Classez.'),
  'FR|La santé':ODD('Lequel est différent ?',['la tête','le ventre','la gorge','la voiture'],3,[],'La voiture n’est pas une partie du corps.'),
  'FR|L’environnement':SO(`Bon pour la planète : recycler, planter des arbres, prendre le vélo
Mauvais pour la planète : gaspiller l’eau, jeter des déchets, prendre la voiture partout`,'Classez.'),
  'FR|Les médias et l’actualité':P('J’ai lu les [*gros titres/grands titres] ce matin. C’est un [*journaliste/journal] du Monde. L’information est à la [*une/première] du journal.','Choisissez le bon mot.'),
  'FR|Le registre soutenu':SO(`Soutenu : demeurer, néanmoins, se rendre
Familier : bosser, bagnole, fric`,'Soutenu ou familier ?'),
  'FR|Les nationalités':SO(`-ais / -aise : français, anglais, portugais
-ien / -ienne : italien, brésilien, canadien
-ain / -aine : américain, mexicain, marocain`,'Classez.'),
  'FR|Au café':SEQ(`A : Bonjour ! Qu’est-ce que je vous sers ?
B : Un café et un croissant, s’il vous plaît.
A : Sur place ou à emporter ?
B : Sur place.
A : Ça fait quatre euros.`,'Remettez le dialogue dans l’ordre.'),
  'FR|Quelle heure est-il ?':P('Il est 7h15. Il est sept heures et [*quart/demie/moins le quart]. Il est 8h30. Il est huit heures et [*demie/quart/moins le quart]. Il est 9h45. Il est dix heures [*moins le quart/et quart/et demie].','Choisissez la bonne forme.'),
  'FR|La maison':PMATCH(`le canapé | img:sofa
le lit | img:cama
le frigo | img:geladeira
l’armoire | img:armario
la chaise | img:cadeira`,'Choisissez le mot de chaque image.'),
  'FR|Le temps qu’il fait':LABEL(`soleil | img:sol
pluie | img:chuva
vent | img:vento
nuage | img:nuvem
neige | img:neve`,'Écrivez le nom (sans article).'),
  'FR|Chez le médecin':SEQ(`A : Qu’est-ce qui ne va pas ?
B : J’ai mal à la tête depuis lundi.
A : Vous avez de la fièvre ?
B : Non, je ne crois pas.
A : Prenez ces comprimés deux fois par jour.`,'Remettez le dialogue dans l’ordre.'),
  'FR|Les transports':ODD('Lequel est différent ?',['le bus','le train','le vélo','le gâteau'],3,['onibus','trem','bicicleta','bolo'],'Le gâteau n’est pas un transport.'),
  'FR|À l’hôtel':SEQ(`A : Bonjour, je peux vous aider ?
B : Oui, j’ai une réservation au nom de Silva.
A : Oui, une chambre double pour trois nuits.
B : C’est ça. Le petit-déjeuner est à quelle heure ?
A : De sept heures à dix heures. Voici votre clé.`,'Remettez le dialogue dans l’ordre.'),
  'FR|Le logement':P('Le [*loyer/louage] est de 800 euros par mois. L’appartement est [*meublé/mobilier], il y a un lit et un canapé. Il faut payer une [*caution/location] avant.','Choisissez le bon mot.'),
  'FR|Les sentiments':PMATCH(`heureux | img:feliz
triste | img:triste
fatigué | img:cansado
en colère | img:bravo
inquiet | img:preocupado`,'Choisissez le mot de chaque image.'),
  'FR|Le vocabulaire de l’argumentation':SO(`Pour : je suis d’accord, c’est vrai que, en effet
Contre : je ne suis pas d’accord, au contraire, pas du tout`,'Classez.'),
  'FR|La transition écologique':ODD('Lequel est différent ?',['le recyclage','l’énergie solaire','le compost','le gaspillage'],3,[],'Le gaspillage est mauvais pour la planète.'),
  'FR|Le vocabulaire en images':LABEL(`chat | img:gato
chien | img:cachorro
pomme | img:maca
gâteau/gateau | img:bolo`,'Écrivez le mot (sans article).'),
  'FR|Écrivez le mot':LABEL(`lit | img:cama
pain | img:pao
vache | img:vaca
clé/cle | img:chave`,'Écrivez le mot (sans article).'),
  /* ---------------- crianças ---------------- */
  'EN|Animals':PMATCH(`cat | img:gato
dog | img:cachorro
horse | img:cavalo
cow | img:vaca
mouse | img:rato
monkey | img:macaco`,'Match the animals.'),
  'EN|Colours and shapes':P('A banana is [*yellow/blue/green]. The sky is [*blue/red/pink]. Grass is [*green/purple/orange]. Snow is [*white/black/brown].'),
  'EN|My body':ODD('Which one is different?',['arm','leg','hand','apple'],3,[],'An apple is not a part of the body.'),
  'EN|Fruits':LABEL(`apple | img:maca
banana | img:banana
grapes | img:uvas`,'Write the fruit.'),
  'FR|Les animaux':PMATCH(`le chat | img:gato
le chien | img:cachorro
le cheval | img:cavalo
la vache | img:vaca
la souris | img:rato`,'Choisissez le nom de chaque animal.'),
  'FR|Le corps':ODD('Lequel est différent ?',['le bras','la jambe','la main','la pomme'],3,[],'La pomme n’est pas une partie du corps.'),
  'FR|Les fruits et les légumes':PMATCH(`la pomme | img:maca
la banane | img:banana
le raisin | img:uvas
les légumes | img:legumes`,'Choisissez le mot de chaque image.'),
  'EN|Toys and games':ODD('Which one is different?',['ball','bike','balloon','fridge'],3,['bola','bicicleta','balao','geladeira'],'You can’t play with a fridge!'),
  'EN|Picture quiz for kids':LABEL(`sun | img:sol
tree | img:arvore
flower | img:flor
bird | img:passaro`,'Write the word.'),
  /* ---------------- francês · conjugação ---------------- */
  'FR|Être et avoir':P('Je [*suis/ai] brésilien et j’[*ai/suis] trente ans. Nous [*avons/sommes] deux enfants. Ils [*sont/ont] très gentils.','Être ou avoir ?'),
  'FR|Les verbes en -er':F('Nous {parlez|parlons} français.','Trouvez l’erreur et corrigez.'),
  'FR|Passé composé avec avoir':F('Hier, j’ai {mangeait|mangé} une pizza.','Trouvez l’erreur et corrigez.'),
  'FR|Passé composé avec être':P('Elle est [*allée/allé/aller] au cinéma. Nous sommes [*partis/parti/partir] tôt. Ils sont [*arrivés/arrivé/arriver] hier.','Choisissez la bonne forme.'),
  'FR|Le futur proche':P('Demain, je [*vais/va/vas] travailler. Nous [*allons/allez/vont] partir en vacances. Il [*va pleuvoir/va pleut/vais pleuvoir] ce soir.','Choisissez la bonne forme.'),
  'FR|Les verbes pronominaux':SEQ(`Je me réveille à six heures.
Je me lève tout de suite.
Je me douche et je m’habille.
Le soir, je me couche à onze heures.`,'Remettez la journée dans l’ordre.'),
  'FR|Imparfait ou passé composé ?':P('Il [*faisait/a fait] beau quand nous [*sommes sortis/sortions]. Pendant que je [*dormais/ai dormi], le téléphone [*a sonné/sonnait].','Choisissez la bonne forme.'),
  'FR|Le futur simple':F('Demain, nous {allerons|irons} à la plage.','Trouvez l’erreur et corrigez.'),
  'FR|Le conditionnel présent':P('Je [*voudrais/voudrai/veux bien de] un café, s’il vous plaît. Tu [*pourrais/pourras/peux pas] m’aider ? À ta place, je [*partirais/partirai/pars] tout de suite.','Choisissez la bonne forme.'),
  'FR|Le subjonctif · il faut que':P('Il faut que tu [*fasses/fais/feras] tes devoirs. Il faut que nous [*soyons/sommes/serons] à l’heure. Il faut qu’elle [*aille/va/ira] chez le médecin.','Choisissez la bonne forme.'),
  'FR|Le subjonctif · doute et sentiments':F('Je suis content que tu {es|sois} là.','Trouvez l’erreur et corrigez.'),
  'FR|Le plus-que-parfait':P('Quand je suis arrivé, le film [*avait commencé/a commencé/commençait]. Il était triste parce qu’il [*avait perdu/a perdu/perdait] son chien.','Choisissez la bonne forme.'),
  'FR|Le subjonctif passé':P('Je suis content que tu [*aies réussi/as réussi/réussis] ton examen. Bien qu’il [*soit parti/est parti/partira] tôt, il est arrivé en retard.','Choisissez la bonne forme.'),
  'FR|Aller et faire':P('Je [*vais/vas/va] au marché. Qu’est-ce que tu [*fais/fait/faites] ce soir ? Nous [*faisons/fesons/faisont] du sport. Ils [*vont/allent/vons] à Paris.','Choisissez la bonne forme.'),
  'FR|Pouvoir, vouloir et devoir':P('Je [*peux/peut/peu] venir demain. Tu [*veux/veut/voulez] un café ? Nous [*devons/doivons/devez] partir. Ils [*peuvent/pouvent/peut] nous aider.','Choisissez la bonne forme.'),
  'FR|Le futur antérieur':P('Quand tu arriveras, j’[*aurai fini/finirai/ai fini] le dîner. Dès qu’il [*sera rentré/rentre/rentrera], on mangera.','Choisissez la bonne forme.'),
  'FR|Le passé simple':SO(`Passé simple : il fut, elle eut, ils allèrent, il fit
Passé composé : il a été, elle a eu, ils sont allés, il a fait`,'Passé simple ou passé composé ?'),
  'FR|Le conditionnel passé':F('Si j’avais su, je {serai venu|serais venu}.','Trouvez l’erreur et corrigez.'),
  'FR|Les verbes en -ir et en -re':P('Je [*finis/finit/finissons] à cinq heures. Nous [*finissons/finons/finisons] tard. Tu [*prends/prend/prenons] le bus ? Ils [*prennent/prendent/prenent] le train.','Choisissez la bonne forme.'),
  'FR|L’impératif':F('{Vas|Va} à l’école !','Trouvez l’erreur et corrigez.'),
  'FR|Venir de et être en train de':P('Il [*vient de/est en train de] partir: il n’est plus là. Chut ! Le bébé [*est en train de/vient de] dormir. Je [*viens de/suis en train de] finir, c’est fait !','Choisissez la bonne expression.'),
  /* ---------------- phrasal verbs ---------------- */
  'EN|Phrasal verbs with get':P('I usually [*get up/get on/get over] at seven. How do you [*get on/get up/get off] with your boss? It took me weeks to [*get over/get on/get off] the flu.'),
  'EN|Phrasal verbs do dia a dia':P('Please [*turn off/turn on/turn up] the lights when you leave. Can you [*pick me up/pick up me/pick me] at the station? Don’t [*give up/give in/give out]!'),
  'EN|Phrasal verbs at work':P('We need to [*set up/set off/set in] a meeting. Can you [*fill in/fill up/fill out of] this form? The meeting was [*called off/called up/called in] because the boss was ill.'),
  'EN|Phrasal verbs with look':SO(`look after: a baby, a pet, your health
look for: your keys, a job, a flat
look forward to: the holidays, seeing you, the weekend`),
  'EN|Phrasal verbs with take and put':P('The plane [*took off/took on/took up] at six. Please [*put on/put off/put up] your coat, it’s cold. Don’t [*put off/put on/take off] your homework until tomorrow.'),
  'EN|Phrasal verbs for relationships':SEQ(`Jack and Mia met at university and got on really well.
They went out for two years.
Then they had a big argument and broke up.
A year later, they made up and got back together.`,'Put the story in order.'),
  'EN|Phrasal verbs with come and go':P('Prices have [*gone up/come up/gone on] a lot this year. Please [*come in/go in/come on] and sit down. An idea [*came up/went up/came in] in the meeting.'),
  'EN|Advanced phrasal verbs':K('I can’t tolerate his behaviour any more.','PUT','I can’t ___ his behaviour any more.','put up with'),
  'EN|Everyday phrasal verbs':F('Please {turn of|turn off} your phone.'),
  'EN|Phrasal verbs with turn':P('Can you [*turn up/turn down/turn off] the music? I can’t hear it. She [*turned down/turned up/turned on] the job offer. He [*turned up/turned down/turned over] late, as usual.'),
  'EN|Phrasal verbs with break':P('Our car [*broke down/broke up/broke out] on the motorway. Thieves [*broke into/broke down/broke up] the shop last night. A fire [*broke out/broke in/broke up] in the kitchen.'),
  'EN|Phrasal verbs: travel':SEQ(`We set off early in the morning.
We checked in at the airport two hours before the flight.
The plane took off at nine.
We got to the hotel in the afternoon.
We checked out three days later.`,'Put the trip in order.'),
  /* ---------------- expressões ---------------- */
  'EN|Small talk':SEQ(`A: Hi! Lovely weather today, isn’t it?
B: Yes, it’s beautiful. Are you going anywhere nice this weekend?
A: Just to the beach with some friends. And you?
B: I’m staying home. I need a rest!`,'Put the conversation in order.'),
  'EN|Everyday idioms':P('I’m [*over the moon/under the weather/on the fence]: I got the job! I feel a bit [*under the weather/over the moon/in hot water] today, I think I have a cold.'),
  'EN|Business idioms':P('Let’s [*touch base/break the bank/hit the sack] next week to discuss it. We need to [*think outside the box/beat around the bush/break the ice] to solve this problem.'),
  'EN|On the phone':SEQ(`A: Hello, Green & Co. How can I help you?
B: Hi, could I speak to Mr Lee, please?
A: I’m afraid he’s in a meeting. Can I take a message?
B: Yes, please ask him to call me back.
A: Of course. Can I have your number?`,'Put the phone call in order.'),
  'EN|Agreeing and disagreeing':SO(`Agree: Absolutely!, I couldn’t agree more., That’s so true.
Disagree: I’m not so sure., I see your point but…, I don’t think so.`),
  'EN|Making suggestions':P('[*Why don’t we/Why we don’t/Why not we] go to the cinema? [*How about/What about to/How about to] going for a walk? [*Let’s/Let’s to/Let] order a pizza!'),
  'EN|Everyday chunks':ODD('Which one is NOT a way to say goodbye?',['See you later!','Take care!','Nice to meet you!','Bye for now!'],2,[],'“Nice to meet you” is for when you meet someone.'),
  'EN|Idioms with body parts':P('Can you [*give me a hand/give me a leg/give me a head]? I’m [*all ears/all eyes/all hands]: tell me everything! Break a [*leg/arm/hand] in your show tonight!'),
  'EN|Proverbs':P('Don’t count your [*chickens/eggs/birds] before they hatch. The early [*bird/worm/cat] catches the worm. Actions speak louder than [*words/voices/sounds].'),
  'EN|Idioms with colours':P('I only see my cousins once in a [*blue moon/red moon/green moon]. She was [*green/red/blue] with envy. He was caught [*red-handed/blue-handed/black-handed].'),
  'FR|Les salutations':SEQ(`A : Bonjour madame !
B : Bonjour ! Comment allez-vous ?
A : Très bien, merci. Et vous ?
B : Ça va, merci. Bonne journée !
A : Merci, à vous aussi. Au revoir !`,'Remettez le dialogue dans l’ordre.'),
  'FR|Les expressions avec avoir':P('J’ai [*faim/fin], je veux manger. Tu as [*froid/frais] ? Mets ta veste. Il a [*raison/vrai], c’est la bonne réponse. J’ai [*besoin/manque] d’aide.','Choisissez le bon mot.'),
  'FR|Expressions idiomatiques':P('Il pleut [*des cordes/des chats/des fils]. Je suis [*dans la lune/dans le soleil/sur la lune] aujourd’hui, je ne me concentre pas. Ça coûte [*les yeux de la tête/la tête des yeux/un bras].','Choisissez la bonne expression.'),
  'FR|Tu ou vous ? Les registres':SO(`Tu : à un ami, à ton frère, à un enfant
Vous : au médecin, à un client, à une personne âgée que tu ne connais pas`,'Tu ou vous ?'),
  'FR|Expressions idiomatiques II':P('Il a [*le cafard/le chat/la poule], il est triste. J’ai [*un chat dans la gorge/une souris dans la gorge/un chien dans la gorge], je ne peux pas parler. Elle a [*la tête dans les nuages/les pieds dans les nuages/la tête dans le ciel].','Choisissez la bonne expression.'),
  'FR|Les proverbes':P('Petit à petit, l’oiseau fait son [*nid/vol/chant]. Qui vivra [*verra/saura/mourra]. Il ne faut pas vendre la peau de l’[*ours/oiseau/chat] avant de l’avoir tué.','Complétez le proverbe.'),
  'EN|Complaining politely':SO(`Polite: I’m afraid there’s a problem with…, Would you mind…?, I was wondering if…
Rude: This is terrible!, Fix it now!, You always get it wrong!`),
  'EN|Discourse markers':P('[*Anyway/However/Although], let’s get back to the main point. [*By the way/On the contrary/As a result], did you call Sam? [*To sum up/First of all/For example], it was a great year.'),
  'EN|Idioms about time':P('Better late than [*never/ever/always]. Time [*flies/runs/goes] when you’re having fun. We finished just [*in the nick of time/at the nick of time/on time nick].'),
  'FR|Les expressions avec « faire »':P('Il [*fait/est] beau aujourd’hui. Je [*fais/vais] les courses le samedi. Ne t’en [*fais/fait] pas, tout va bien. Ça me [*fait/donne] plaisir.','Choisissez le bon mot.'),
  'FR|Argot et verlan':SO(`Argot / verlan : un truc, une meuf, chelou, ouf
Langue standard : une chose, une femme, louche, fou`,'Argot ou langue standard ?'),
  'FR|Les figures de style':ODD('Laquelle n’est pas une figure de style ?',['la métaphore','la comparaison','l’hyperbole','le subjonctif'],3,[],'Le subjonctif est un mode verbal.'),
  'EN|Suggestions and advice':F('You {should to|should} talk to her.'),
  'FR|Les connecteurs logiques (C1)':SO(`Concession : certes, bien que, quoique
Conséquence : par conséquent, de sorte que, si bien que`,'Classez les connecteurs.'),
  /* ---------------- pronúncia ---------------- */
  'EN|Sounds and rhymes':ODD('Which word does NOT rhyme?',['cat','hat','bat','cake'],3,[],'Cat, hat and bat rhyme. Cake doesn’t.'),
  'EN|-ed endings':SO(`/t/: walked, watched, stopped
/d/: played, lived, cleaned
/ɪd/: wanted, needed, visited`,'Como se pronuncia o -ed?'),
  'EN|Silent letters':SO(`Silent k: knife, know, knee
Silent w: write, wrong, answer
Silent b: climb, thumb, comb`,'Qual é a letra muda?'),
  'EN|Word stress':SO(`Stress on the 1st syllable: picture, happy, table
Stress on the 2nd syllable: hotel, begin, today`,'Onde cai o acento?'),
  'FR|Les sons du français':ODD('Quel mot n’a pas le son [u] (ou) ?',['vous','rouge','tour','rue'],3,[],'« Rue » a le son [y], pas [u].'),
  'FR|Liaisons et lettres muettes':SO(`Liaison obligatoire : les_amis, vous_avez, un_enfant
Pas de liaison : et / alors, les / héros, Paris / est`,'Liaison ou pas ?'),
  'EN|The th sounds':SO(`/θ/ (think): think, three, bath
/ð/ (this): this, mother, they`,'Qual som de th?'),
  'FR|Les voyelles nasales':SO(`[ɑ̃] (an) : enfant, temps, dans
[ɔ̃] (on) : bon, maison, nom
[ɛ̃] (in) : vin, pain, main`,'Classez selon le son nasal.'),
  /* ---------------- trabalho ---------------- */
  'EN|Introducing yourself at work':SEQ(`A: Hi, you must be the new designer. I’m Kate from Marketing.
B: Nice to meet you, Kate. I’m Leo.
A: Welcome to the team! How’s your first day going?
B: Great, thanks. Everyone is very friendly.`,'Put the conversation in order.'),
  'EN|Job interviews':P('Why do you want to [*work/working/to work] here? I’m good [*at/in/on] solving problems. I have five years [*of/in/for] experience in sales.'),
  'EN|Writing work emails':SEQ(`Dear Ms Brown,
I am writing to confirm our meeting on Tuesday at 10 am.
Please find attached the agenda.
I look forward to seeing you.
Kind regards,`,'Put the email in order.'),
  'EN|Meetings':SO(`Starting: Shall we begin?, Let’s get started., The aim of today’s meeting is…
Finishing: Let’s wrap up., To sum up…, Thanks for coming.`),
  'EN|Negotiating':P('We’d be willing to [*offer/offering/offered] a 10% discount [*if/unless/when] you order 500 units. Could you [*meet us/meet to us/meeting us] halfway?'),
  'EN|Presentations':SEQ(`Good morning, everyone. Thank you for coming.
Today I’m going to talk about our sales results.
First, let’s look at the numbers for this year.
Finally, I’ll talk about our plans for next year.
Thank you. Are there any questions?`,'Put the presentation in order.'),
  'EN|Formal business writing':SO(`Formal: I would be grateful if…, Please do not hesitate to contact me., We regret to inform you…
Informal: Can you…?, Just let me know!, Sorry but…`),
  'FR|Se présenter au travail':SEQ(`A : Bonjour, vous êtes la nouvelle stagiaire ?
B : Oui, je m’appelle Ana. Enchantée.
A : Enchanté. Moi, c’est Marc, du service marketing.
B : Ravie de vous rencontrer !`,'Remettez le dialogue dans l’ordre.'),
  'FR|L’e-mail professionnel':SEQ(`Madame,
Je vous écris pour confirmer notre rendez-vous de mardi.
Vous trouverez ci-joint l’ordre du jour.
Dans l’attente de votre réponse, je vous prie d’agréer mes salutations distinguées.`,'Remettez l’e-mail dans l’ordre.'),
  'FR|Les réunions':SO(`Ouvrir : Commençons., L’objectif de cette réunion est…, Bienvenue à tous.
Conclure : Pour résumer…, Merci de votre participation., On s’arrête là.`,'Classez.'),
  /* ---------------- cultura ---------------- */
  'EN|Holidays':P('Christmas is [*on/in/at] 25th December. People give [*presents/presence/presentes] to each other. On New Year’s Eve, we [*celebrate/celebrating/celebrates] at midnight.'),
  'EN|British or American English?':SO(`British: flat, lift, biscuit, holiday
American: apartment, elevator, cookie, vacation`),
  'EN|Thanksgiving and Christmas':ODD('Which one is NOT a Christmas tradition?',['decorating a tree','giving presents','singing carols','eating chocolate eggs'],3,[],'Chocolate eggs are for Easter.'),
  'EN|Politeness in English':SO(`More polite: Could I have the salt please?, Would you mind helping me?, I was wondering if…
Less polite: Give me the salt., Help me., I want this.`),
  'FR|Les fêtes en France':P('Le 14 juillet, c’est la fête [*nationale/national/nationaux]. À Noël, on mange la bûche de [*Noël/Pâques/l’été]. Le 1er mai, on offre du [*muguet/raisin/pain].','Choisissez le bon mot.'),
  'FR|La francophonie':ODD('Quel pays n’est pas francophone ?',['le Sénégal','la Belgique','le Québec (Canada)','le Brésil'],3,[],'Au Brésil, on parle portugais.'),
  'FR|La gastronomie française':SO(`Fromages : le camembert, le brie, le roquefort
Desserts : la crème brûlée, la tarte Tatin, le macaron`,'Classez.'),
  /* ---------------- escrita ---------------- */
  'EN|Writing · My best friend':P('My best friend [*is/are/am] called Lia. She [*has/have/is] long hair and she [*is/has/are] very funny. We [*met/meet/meeting] at school.'),
  'EN|Writing · A postcard':SEQ(`Dear Mum and Dad,
Greetings from Salvador!
The weather is great and the beaches are beautiful.
Yesterday we visited the old town.
See you soon! Love, Ana`,'Put the postcard in order.'),
  'EN|Writing · An informal email':SO(`Opening: Hi Sam!, Hey there!, Dear Ana
Closing: Lots of love, See you soon!, Take care`),
  'EN|Writing · A formal complaint':F('I am writing to {complaint|complain} about the service.'),
  'EN|Writing · Essay connectors':SO(`Adding: Furthermore, Moreover, In addition
Contrasting: However, Nevertheless, On the other hand
Concluding: In conclusion, To sum up, All in all`),
  'FR|Écrire une carte postale':SEQ(`Chère Julie,
Je t’écris de Nice !
Il fait très beau et la mer est super.
Hier, on a visité le vieux port.
Je t’embrasse, Ana`,'Remettez la carte postale dans l’ordre.'),
  'FR|Écrire un e-mail informel':SO(`Pour commencer : Salut !, Coucou Léa !, Cher Paul
Pour finir : Bisous !, À bientôt !, Je t’embrasse`,'Classez.'),
  'FR|La lettre de réclamation':F('Je vous écris pour me {plaigne|plaindre} du service.','Trouvez l’erreur et corrigez.'),
  'FR|Les connecteurs de la dissertation':SO(`Ajouter : de plus, en outre, par ailleurs
Opposer : cependant, néanmoins, en revanche
Conclure : en conclusion, pour conclure, en somme`,'Classez.'),
  'EN|Hedging language':P('It [*seems/is sure/proves] that the plan works. This [*may/must/will] be due to the weather. The results [*suggest/prove/show clearly] a possible link.'),
  'FR|Les formules de la lettre formelle':SO(`Début : Je me permets de vous écrire…, Suite à notre conversation…, Je vous contacte au sujet de…
Fin : Veuillez agréer…, Dans l’attente de votre réponse…, Cordialement`,'Classez.'),
  'EN|Describe the picture':P('[*There is/There are] a cat on the sofa. [*There are/There is] two cups on the table. The man [*is reading/reads/read] a book.'),
  'FR|Décrivez l’image':P('[*Il y a/Il est] un chat sur le canapé. Il y a deux tasses [*sur/sous/dans] la table. L’homme [*lit/lis/lire] un livre.','Choisissez la bonne forme.'),
});
Object.assign(REV_ADD,{
  'EN|Writing · An opinion paragraph':SO(`Giving your opinion: In my opinion, I believe that, Personally
Adding a reason: Firstly, Another reason is that, Moreover
Concluding: To conclude, All in all, For these reasons`,'Separe as expressões pela função no parágrafo.'),
  'FR|Passé composé : être ou avoir ?':SO(`Avec être : arriver, tomber, rester, descendre
Avec avoir : dormir, lire, boire, écrire`,'Être ou avoir au passé composé ?'),
  'FR|Lecture · Les réseaux sociaux':SO(`Avantages : garder le contact avec ses proches, s’informer rapidement
Risques : la comparaison permanente, les fausses informations, les difficultés de concentration`,'D’après le texte, classez.'),
  'FR|Lecture · Le droit à la déconnexion':P('Depuis [*2017/2007/2027], les salariés ont le droit de ne pas répondre aux courriels [*en dehors de/pendant/avant] leurs heures de travail. Mais l’application reste [*inégale/parfaite/obligatoire], et les syndicats veulent des sanctions plus [*strictes/légères/rares].','D’après le texte, choisissez.'),
});
/* leituras e escutas: questão nova montada do próprio texto (a ordem certa vem do texto, então o gabarito é sempre certo) */
const revSentences=(txt,max=30)=>String(txt||'').replace(/\s+/g,' ').split(/(?<=[.!?…])\s+(?=[A-ZÀ-Ý«“"])/).map(x=>x.trim()).filter(x=>{ const n=x.split(' ').length; return n>=5&&n<=max; });
function revAuto(b){
  const FR=b.lang==='FR';
  if (b.topic==='Leitura'){ const parts=String(b.instructions||'').split(/\n\s*\n/); if (parts.length<2) return null;
    const S=[...new Set(revSentences(parts.slice(1).join(' ')))]; if (S.length<4) return null;
    const n=Math.min(5,S.length), pick=Array.from({length:n},(_,k)=>S[Math.round(k*(S.length-1)/(n-1))]);
    return SEQ(pick.join('\n'),FR? 'Remettez les phrases dans l’ordre du texte.' : 'Put the sentences in the order they appear in the text.'); }
  if ((b.topic==='Escuta'||b.topic==='Completa')&&b.audio){ const L=b.audio.split('\n').map(x=>x.trim()).filter(Boolean);
    const dl=L.filter(x=>/^[AB]:/.test(x));
    if (dl.length>=4){ for (let i=0;i+4<=dl.length;i++){ const w=dl.slice(i,i+Math.min(5,dl.length-i)); if (new Set(w).size===w.length&&w.every(x=>x.length<=150)) return SEQ(w.join('\n'),FR? 'Réécoutez et remettez le dialogue dans l’ordre.' : 'Listen again and put the dialogue in order.'); } }
    const S=revSentences(L.map(x=>x.replace(/^[AB]:\s*/,'')).join(' ')).filter(x=>{ const n=x.split(' ').length; return n>=6&&n<=14; }); if (!S.length) return null;
    return DIT(S[Math.floor(S.length/2)],FR? 'Dictée : écoutez et écrivez la phrase.' : 'Dictation: listen and write the sentence.'); }
  return null;
}
const REV_SKIP=['Provas','Au Pair'];
function aplicarRevisao(base){
  const stat={manual:0,auto:0,none:[]};
  for (const b of base){ if (REV_SKIP.includes(b.topic)||b.questions.some(q=>TIPOS[q.type])) continue;
    const add=REV_ADD[b.lang+'|'+b.title]||revAuto(b);
    if (add){ b.questions.push(...fromRaw([].concat(add))); stat[REV_ADD[b.lang+'|'+b.title]? 'manual' : 'auto']++; } else stat.none.push(b.lang+'|'+b.title); }
  return stat;
}
