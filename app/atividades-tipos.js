/* =========================================================
   Sotaque · atividades com os tipos novos (tipos.js)
   Ditado, texto com lacunas, encontre o erro, separar em grupos, reescrever com a palavra dada,
   qual não combina (cartas com imagem), caça-palavras e palavras cruzadas (dicas com imagem).
   Formato igual ao das outras: {l, lv, tp, t, i, q:[questões]}. Todas contam como homework no banco.
   ========================================================= */
const CONT_TIPOS=[
  /* ===================== INGLÊS · crianças (jogos com imagem) ===================== */
  {l:'EN',lv:'A1',tp:'Kids',t:'Animals: picture games',i:'Jogos com imagens: olhe as cartas, procure as palavras e complete as cruzadas.',q:[
    ODD('Which one is different?',['cat','dog','rabbit','apple'],3,['gato','cachorro','coelho','maca'],'The apple is a fruit. The others are animals.'),
    ODD('Which one is different?',['bird','cat','bus','dog'],2,['passaro','gato','onibus','cachorro'],'The bus is not an animal.'),
    HUNT('cat, dog, bird, rabbit, fish, horse','Find 6 animals.'),
    CROSS(`rabbit = It has long ears. | img:coelho
bird = It can fly. | img:passaro
cat = It says “meow”. | img:gato
dog = It says “woof”. | img:cachorro
fish = It lives in water. | img:peixes
horse = It’s big and it runs fast on a farm.`,'Look at the pictures and complete.'),
    SORT(`It can fly: bird, bee, butterfly
It lives in water: fish, shark, whale
It lives on a farm: cow, horse, pig`),
    CLOZE('I have a [cat]. Her name is Mimi. She is [black] and white. She likes [milk] and she sleeps on my [bed].','dog, red, bread'),
    DIT('I have a dog and a cat.')]},
  {l:'EN',lv:'A1',tp:'Kids',t:'Food: picture games',i:'Jogos com imagens sobre comida.',q:[
    ODD('Which one is different?',['apple','banana','pizza','chair'],3,['maca','banana','pizza','cadeira'],'You can’t eat a chair!'),
    ODD('Which one is different?',['cake','ice cream','shoe','pizza'],2,['bolo','sorvete','sapato','pizza'],'The shoe is not food.'),
    HUNT('apple, banana, cake, pizza, milk, bread, egg','Find 7 food words.'),
    CROSS(`banana = It’s long and yellow. | img:banana
apple = It’s red and round. | img:maca
pizza = It’s from Italy, with cheese and tomato. | img:pizza
cake = We eat it on birthdays. | img:bolo
tea = A hot drink. | img:xicara`,'Look at the pictures and complete.'),
    SORT(`Fruit: apple, banana, orange
Drinks: water, juice, milk
Sweets: cake, ice cream, chocolate`),
    CLOZE('For breakfast I eat [bread] and I drink [milk]. My favourite fruit is the [banana]. On my birthday we have a big chocolate [cake].','pizza, water, chair'),
    DIT('I like pizza and ice cream.')]},
  {l:'EN',lv:'A1',tp:'Kids',t:'Clothes and things: picture games',i:'Jogos com imagens sobre roupas e objetos.',q:[
    ODD('Which one is different?',['T-shirt','hat','shoe','bus'],3,['camiseta','chapeu','sapato','onibus'],'The bus is not clothes.'),
    ODD('Which one is different?',['car','bus','bike','cake'],3,['carro','onibus','bicicleta','bolo'],'The cake is not transport.'),
    HUNT('hat, shoes, shirt, bag, glasses, socks, dress','Find 7 words.'),
    CROSS(`glasses = You wear them to see better. | img:oculos
hat = You wear it on your head. | img:chapeu
shoe = You wear it on your foot. | img:sapato
bag = You carry your books in it. | img:mochila
key = It opens the door. | img:chave`,'Look at the pictures and complete.'),
    SORT(`On your head: hat, cap, glasses
On your feet: shoes, socks, boots
On your body: T-shirt, dress, jacket`),
    CLOZE('Today I’m wearing a blue [T-shirt], black [shoes] and a big [hat]. My books are in my [bag].','car, cake'),
    FIX('She is wearing a red {hats|hat} today.')]},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'At home: picture games',i:'Coisas da casa e do dia a dia, com imagens.',q:[
    ODD('Which one is different?',['bed','chair','sun','phone'],2,['cama','cadeira','sol','celular'],'You can’t have the sun in your house!'),
    ODD('Which one is different?',['tree','flower','sun','key'],3,['arvore','flor','sol','chave'],'The others are in nature.'),
    CROSS(`phone = You call your friends with it. | img:celular
bed = You sleep in it. | img:cama
chair = You sit on it. | img:cadeira
lamp = It gives light. | img:lampada
book = You read it. | img:livro
clock = It tells the time. | img:relogio`,'Look at the pictures and complete.'),
    HUNT('bed, chair, table, lamp, sofa, door, window','Find 7 things in a house.'),
    SORT(`Bedroom: bed, pillow, wardrobe
Kitchen: fridge, cooker, sink
Living room: sofa, TV, armchair`),
    FIX('There {is|are} two chairs in the kitchen.'),
    DIT('My phone is on the table.')]},
  /* ===================== INGLÊS · gramática ===================== */
  {l:'EN',lv:'A1',tp:'Gramática',t:'Find the mistake: to be and have got',i:'Em cada frase há uma palavra errada. Toque nela e escreva a certa.',q:[
    FIX('I {have|am} 22 years old.'),
    FIX('She {are|is} my sister.'),
    FIX('We {is|are} from Brazil.'),
    FIX('He {have|has} got two brothers.'),
    FIX('They {hasn’t|haven’t} got a car.'),
    FIX('{Is|Are} you a student?'),
    CLOZE('Hi! My name [is] Ana. I [am] from Recife. I [have] got a brother. He [is] twelve.','are, has, be')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Past simple: find and fix',i:'Encontre o erro de passado em cada frase e corrija.',q:[
    FIX('Yesterday I {goed|went} to the cinema.'),
    FIX('We {buyed|bought} a new sofa last week.'),
    FIX('Did you {saw|see} the match?'),
    FIX('She didn’t {went|go} to work on Monday.'),
    FIX('They {eated|ate} pizza for dinner.'),
    FIX('I {meeted|met} my best friend at school.'),
    CLOZE('Last summer we [went] to Bahia. We [stayed] in a small hotel, we [swam] in the sea every day and we [ate] a lot of moqueca. It [was] amazing!','go, eat, swim')]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'Countable and uncountable',i:'Separe, complete e corrija: contáveis e incontáveis.',q:[
    SORT(`Countable: apple, chair, egg, bottle
Uncountable: water, money, bread, rice`),
    SORT(`Use “many”: friends, books, people
Use “much”: time, money, sugar`),
    CLOZE('Is there [any] milk in the fridge? There are [some] eggs, but there isn’t [much] cheese. How [many] apples do we need?','a, an, lots'),
    FIX('How {many|much} money do you have?'),
    FIX('There {are|is} some bread on the table.'),
    FIX('I need {an|some} information about the course.'),
    ODD('Which one is different?',['water','milk','juice','egg'],3,[],'Egg is countable. The others are uncountable.')]},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Present perfect vs past simple: sort and fix',i:'Separe as expressões de tempo, complete o texto e corrija as frases.',q:[
    SORT(`Present perfect: yet, already, ever, since 2020
Past simple: yesterday, last week, two days ago, in 2010`),
    CLOZE('I [have lived/’ve lived] in São Paulo since 2018. Before that, I [lived] in Curitiba for ten years. I [have never been/’ve never been] to Europe, but last year I [went] to Argentina.','live, go, was'),
    FIX('I {have seen|saw} that film yesterday.'),
    FIX('She {lives|has lived} here since 2015.'),
    FIX('{Did|Have} you ever eaten sushi?'),
    KWT('I started working here in 2019.','SINCE','I ___ 2019.','have worked here since/have been working here since/’ve worked here since/’ve been working here since'),
    KWT('This is my first time in London.','NEVER','I ___ London before.','have never been to/’ve never been to/have never visited/’ve never visited')]},
  {l:'EN',lv:'B2',tp:'Gramática',t:'Key word transformations (1)',i:'Reescreva com o mesmo sentido usando a palavra dada (2 a 5 palavras), como no exame Cambridge.',q:[
    KWT('It isn’t necessary for you to come.','HAVE','You ___ come.','don’t have to/do not have to'),
    KWT('I’m sorry I didn’t call you.','WISH','I ___ you.','wish I had called/wish I’d called'),
    KWT('People say he is very rich.','SAID','He ___ very rich.','is said to be'),
    KWT('She started learning French three years ago.','FOR','She ___ three years.','has been learning French for/has learnt French for/has learned French for/’s been learning French for'),
    KWT('It was too cold to go to the beach.','ENOUGH','It wasn’t ___ to go to the beach.','warm enough'),
    KWT('“Don’t touch the paint,” the man told us.','NOT','The man told ___ the paint.','us not to touch'),
    KWT('Somebody stole my bike last night.','WAS','My bike ___ last night.','was stolen')]},
  {l:'EN',lv:'C1',tp:'Gramática',t:'Key word transformations (2)',i:'Nível avançado: reescreva com o mesmo sentido usando a palavra dada.',q:[
    KWT('I didn’t know about the meeting, so I didn’t go.','HAD','If I ___ about the meeting, I would have gone.','had known'),
    KWT('As soon as she arrived, the phone rang.','SOONER','No ___ than the phone rang.','sooner had she arrived'),
    KWT('It’s possible that they missed the train.','MIGHT','They ___ the train.','might have missed'),
    KWT('He finds it difficult to wake up early.','USED','He isn’t ___ up early.','used to waking'),
    KWT('I regret not studying harder at school.','SHOULD','I ___ harder at school.','should have studied'),
    KWT('It wasn’t necessary for us to bring food.','NEED','We ___ food.','didn’t need to bring/did not need to bring/needn’t have brought/need not have brought'),
    KWT('They think the thief escaped through the window.','THOUGHT','The thief ___ through the window.','is thought to have escaped')]},
  {l:'EN',lv:'B1',tp:'Vocabulário',t:'Make or do: word games',i:'Collocations com make e do: separe, complete e corrija.',q:[
    SORT(`Make: a mistake, a decision, a cake, noise, friends
Do: homework, the dishes, exercise, a favour, your best`),
    CLOZE('Can you [do] me a favour? I need to [make] a phone call and the kids need to [do] their homework. Please don’t [make] any noise!','take, have'),
    FIX('I always {do|make} mistakes in English.'),
    FIX('She {makes|does} yoga every morning.'),
    FIX('We need to {do|make} a decision today.'),
    ODD('Which one is different? (make or do)',['homework','the dishes','a cake','exercise'],2,[],'We make a cake. With the others we use “do”.'),
    ODD('Which one is different? (make or do)',['money','a plan','friends','the shopping'],3,[],'We do the shopping. With the others we use “make”.')]},
  {l:'EN',lv:'B1',tp:'Phrasal verbs',t:'Phrasal verbs: fill and fix',i:'Complete com o phrasal verb certo e corrija os erros.',q:[
    CLOZE('I usually [get up] at six. Before work I [look after] my little brother. In the evening I [hang out] with friends and then I [go back] home.','turn on, give up'),
    FIX('Can you turn {of|off} the lights, please?'),
    FIX('I’m looking {after|for} my keys. Have you seen them?'),
    FIX('Don’t give {out|up}! You can do it.'),
    SORT(`Clothes: put on, take off, try on
People: look after, get on with, hang out with`),
    KWT('Please take care of my dog this weekend.','AFTER','Please ___ my dog this weekend.','look after'),
    KWT('I stopped eating sugar last year.','GAVE','I ___ sugar last year.','gave up eating/gave up')]},
  /* ===================== INGLÊS · escuta e escrita ===================== */
  {l:'EN',lv:'A2',tp:'Escuta',t:'Dictation: my daily routine',i:'Ouça cada frase (quantas vezes quiser) e escreva. Use a velocidade 0,75× se precisar.',q:[
    DIT('I usually get up at seven o’clock.'),
    DIT('I have coffee and bread for breakfast.'),
    DIT('I take the bus to work.'),
    DIT('I have lunch with my friends at noon.'),
    DIT('In the evening I watch TV or read a book.'),
    DIT('I go to bed at about eleven.'),
    DIT('On Sundays I visit my parents.')]},
  {l:'EN',lv:'B1',tp:'Escuta',t:'Dictation: travel plans',i:'Ouça e escreva cada frase. A nota conta as palavras certas, na ordem.',q:[
    DIT('We are going to spend two weeks in Portugal.'),
    DIT('I have already booked the hotel and the flights.'),
    DIT('Could you tell me where the train station is?'),
    DIT('If it rains, we will visit a museum.'),
    DIT('I have never been to Europe before.'),
    DIT('The flight was delayed for three hours.'),
    DIT('I can’t wait to try the local food!')]},
  {l:'EN',lv:'B2',tp:'Escrita',t:'Proofreading: a work email',i:'Revise o e-mail: escolha os conectivos e corrija os erros.',q:[
    CLOZE('Dear Mr Lee, I am writing to confirm our meeting on Friday. [However], I will need to leave at 4 pm. [In addition], could you send me the report beforehand? [Therefore], we can discuss it in detail. I look forward to [hearing] from you.','Despite, hear, Although'),
    FIX('I am writing {for|to} ask about the job.'),
    FIX('Please find {attach|attached} the documents.'),
    FIX('I look forward to {meet|meeting} you.'),
    FIX('Could you {said|tell} me the price?'),
    FIX('We {didn’t received|didn’t receive} your invoice.'),
    ODD('Which one is NOT formal?',['Dear Sir or Madam','Yours sincerely','See ya!','Kind regards'],2,[],'“See ya!” is very informal. Don’t use it in a work email.')]},
  {l:'EN',lv:'A2',tp:'Vocabulário',t:'Word games: around town',i:'Caça-palavras, cruzadas com imagens e mais, sobre a cidade e os transportes.',q:[
    CROSS(`bus = Big and yellow, it takes many people. | img:onibus
car = It has four wheels and you drive it. | img:carro
bike = It has two wheels and no engine. | img:bicicleta
train = It runs on rails. | img:trem
plane = It flies. | img:aviao
taxi = A car that you pay to take you somewhere.`,'Look at the pictures and complete.'),
    HUNT('bank, park, school, museum, hotel, station, market','Find 7 places in a city.'),
    ODD('Which one is different?',['bus','car','train','tree'],3,['onibus','carro','trem','arvore'],'The tree is not transport.'),
    SORT(`You buy things: market, shop, bakery
You learn: school, library, university
You travel: airport, station, bus stop`),
    CLOZE('Excuse me, where is the [station]? Go [straight] on and turn [left]. It’s [next] to the bank.','right, ahead, park'),
    FIX('The museum is {in|on} the left.'),
    DIT('The bank is next to the post office.')]},
  /* ===================== FRANCÊS ===================== */
  {l:'FR',lv:'A1',tp:'Kids',t:'Les animaux : jeux en images',i:'Jogos com imagens: cartas, caça-palavras e cruzadas.',q:[
    ODD('Lequel est différent ?',['le chat','le chien','le lapin','la pomme'],3,['gato','cachorro','coelho','maca'],'La pomme est un fruit.'),
    ODD('Lequel est différent ?',['l’oiseau','le chat','le bus','le chien'],2,['passaro','gato','onibus','cachorro'],'Le bus n’est pas un animal.'),
    HUNT('chat, chien, oiseau, lapin, poisson, cheval','Trouvez 6 animaux.'),
    CROSS(`lapin = Il a de grandes oreilles. | img:coelho
chien = Il fait « ouaf ». | img:cachorro
chat = Il fait « miaou ». | img:gato
oiseau = Il vole. | img:passaro
poisson = Il vit dans l’eau. | img:peixes`,'Regardez les images et complétez.'),
    SORT(`Il vole : oiseau, abeille, papillon
Il vit dans l’eau : poisson, requin, baleine
Il vit à la ferme : vache, cheval, cochon`),
    CLOZE('J’ai un [chat]. Il s’appelle Félix. Il est [noir] et il aime le [lait].','chien, rouge, pain'),
    DIT('J’ai un chien et un chat.')]},
  {l:'FR',lv:'A1',tp:'Kids',t:'La nourriture : jeux en images',i:'Jogos com imagens sobre comida.',q:[
    ODD('Lequel est différent ?',['la pomme','la banane','la pizza','la chaise'],3,['maca','banana','pizza','cadeira'],'On ne mange pas une chaise !'),
    ODD('Lequel est différent ?',['le gâteau','la glace','la chaussure','la pizza'],2,['bolo','sorvete','sapato','pizza'],'La chaussure, ça ne se mange pas.'),
    HUNT('pomme, banane, gâteau, pizza, lait, pain, œuf','Trouvez 7 aliments.'),
    CROSS(`banane = Elle est longue et jaune. | img:banana
pomme = Elle est rouge et ronde. | img:maca
pizza = Elle vient d’Italie. | img:pizza
gâteau = On le mange à l’anniversaire. | img:bolo
lait = Une boisson blanche. | img:xicara`,'Regardez les images et complétez.'),
    SORT(`Fruits : pomme, banane, orange
Boissons : eau, jus, lait
Desserts : gâteau, glace, chocolat`),
    CLOZE('Au petit-déjeuner, je mange du [pain] et je bois du [lait]. Mon fruit préféré, c’est la [banane].','chaise, eau'),
    DIT('J’aime la pizza et la glace.')]},
  {l:'FR',lv:'A1',tp:'Vocabulário',t:'Les vêtements et les objets',i:'Roupas e objetos com imagens.',q:[
    ODD('Lequel est différent ?',['le t-shirt','le chapeau','la chaussure','le bus'],3,['camiseta','chapeu','sapato','onibus'],'Le bus n’est pas un vêtement.'),
    ODD('Lequel est différent ?',['la voiture','le bus','le vélo','le gâteau'],3,['carro','onibus','bicicleta','bolo'],'Le gâteau n’est pas un transport.'),
    CROSS(`lunettes = On les porte pour mieux voir. | img:oculos
chapeau = On le porte sur la tête. | img:chapeu
sac = On y met ses livres. | img:mochila
clé = Elle ouvre la porte. | img:chave
lit = On dort dedans. | img:cama`,'Regardez les images et complétez.'),
    HUNT('chapeau, robe, pull, jupe, chaussettes, manteau','Trouvez 6 vêtements.'),
    SORT(`Sur la tête : chapeau, casquette, lunettes
Aux pieds : chaussures, chaussettes, bottes
Sur le corps : t-shirt, robe, veste`),
    FIX('Elle porte une robe {rouges|rouge} aujourd’hui.'),
    DIT('Mon téléphone est sur la table.')]},
  {l:'FR',lv:'A2',tp:'Gramática',t:'Passé composé : trouvez l’erreur',i:'Avoir ou être? Encontre o erro e corrija.',q:[
    SORT(`Avec être : aller, venir, partir, naître
Avec avoir : manger, faire, prendre, voir`),
    FIX('Hier, je {suis|ai} mangé une pizza.'),
    FIX('Nous {avons|sommes} allés au cinéma.'),
    FIX('Elle est {parti|partie} à huit heures.'),
    FIX('Ils ont {prendu|pris} le train.'),
    FIX('Tu as {fais|fait} tes devoirs ?'),
    CLOZE('Samedi, je [suis] allée au marché. J’[ai] acheté des fruits et nous [avons] fait un pique-nique. Mes amis [sont] arrivés en retard !','es, a, être')]},
  {l:'FR',lv:'A2',tp:'Escuta',t:'Dictée : ma journée',i:'Écoutez et écrivez chaque phrase. Use 0,75× se precisar.',q:[
    DIT('Je me lève à sept heures.'),
    DIT('Je prends un café et du pain.'),
    DIT('Je vais au travail en bus.'),
    DIT('À midi, je déjeune avec mes collègues.'),
    DIT('Le soir, je regarde la télé.'),
    DIT('Je me couche vers onze heures.'),
    DIT('Le dimanche, je rends visite à mes parents.')]},
  {l:'FR',lv:'B1',tp:'Gramática',t:'Phrases à transformer',i:'Reescreva com o mesmo sentido usando a palavra dada.',q:[
    KWT('Il faut que tu partes maintenant.','DEVOIR','Tu ___ maintenant.','dois partir'),
    KWT('Je n’ai jamais vu ce film avant.','PREMIÈRE','C’est ___ que je vois ce film.','la première fois'),
    KWT('Si j’avais de l’argent, j’achèterais une maison.','AVAIS','J’achèterais une maison si ___ de l’argent.','j’avais'),
    KWT('Marie a écrit cette lettre.','PAR','Cette lettre ___ Marie.','a été écrite par'),
    KWT('Il est possible qu’il pleuve demain.','PEUT-ÊTRE','Il ___ demain.','va peut-être pleuvoir/pleuvra peut-être'),
    KWT('Je n’ai pas assez de temps.','MANQUE','Je ___ temps.','manque de'),
    KWT('« Je suis fatigué », dit Paul.','QU’IL','Paul dit ___ fatigué.','qu’il est')]},
];
function tiposBank(T0){
  return CONT_TIPOS.map((x,k)=>({id:uid(),lang:x.l,level:x.lv,topic:x.tp,title:x.t,instructions:x.i,audio:'',questions:fromRaw(x.q),uses:hashStr(x.t)%3,mine:false,createdAt:T0-6*DAY+k*MIN}));
}
