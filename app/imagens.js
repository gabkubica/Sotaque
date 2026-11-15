/* =========================================================
   Sotaque · atividades e flashcards com imagem
   As imagens são as cenas dos quadros (estilo do Sotaque). IMG(cena, questão) põe a imagem na questão.
   ========================================================= */
const CONT_IMG=[
  /* ===================== INGLÊS ===================== */
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Picture vocabulary: things',i:'Olhe a imagem e escolha a palavra certa.',q:[
    IMG('xicara',['What’s this?',['a cup','a book','a bag'],0]),
    IMG('mala',['What’s this?',['a suitcase','a box','a table'],0]),
    IMG('relogio',['What’s this?',['a phone','an alarm clock','a lamp'],1]),
    IMG('chuva',['What’s this?',['an umbrella','a hat','a tree'],0]),
    IMG('bicicleta',['What’s this?',['a car','a motorbike','a bike'],2]),
    IMG('fones',['What are these?',['glasses','headphones','shoes'],1]),
    IMG('presente',['What’s this?',['a gift','a cake','a letter'],0])]},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Picture vocabulary: places and nature',i:'Olhe a imagem e responda.',q:[
    IMG('mar',['What can you see?',['the sea and a boat','a river and a car','a lake and a plane'],0]),
    IMG('montanha',['What can you see?',['a beach','a mountain','a park'],1]),
    IMG('cidade',['What can you see?',['a farm','a city','a forest'],1]),
    IMG('noite',['Is it day or night?',['day','night'],1]),
    IMG('amanhecer',['What can you see?',['the sunrise','the moon','the rain'],0]),
    IMG('casa',GAP('These are ___. (casas)','houses')),
    IMG('peixes',GAP('There are three ___ in the water. (peixes)','fish'))]},
  {l:'EN',lv:'A1',tp:'Vocabulário',t:'Spell the word',i:'Escreva a palavra em inglês. Cuidado com a ortografia!',q:[
    IMG('livro',GAP('This is a ___.','book')),
    IMG('trem',GAP('This is a ___.','train')),
    IMG('planta',GAP('This is a ___.','plant')),
    IMG('coracao',GAP('This is a ___.','heart')),
    IMG('lapis',GAP('This is a ___. (lápis)','pencil')),
    IMG('bola',GAP('This is a ___.','ball')),
    IMG('uvas',GAP('These are ___. (uvas)','grapes'))]},
  {l:'EN',lv:'A2',tp:'Gramática',t:'What’s in the picture? There is / there are',i:'Olhe cada imagem e diga se a frase é verdadeira ou falsa.',q:[
    IMG('mar',TF('There is a boat on the sea.',true)),
    IMG('peixes',TF('There are two fish in the picture.',false)),
    IMG('uvas',TF('There are two bunches of grapes.',true)),
    IMG('xicara',TF('There is a cup of coffee on the table.',true)),
    IMG('bandeirinhas',TF('There are some balloons at the party.',true)),
    IMG('noite',TF('There is a sun in the sky.',false)),
    IMG('cidade',GAP('There ___ a lot of tall buildings in the city.','are'))]},
  {l:'EN',lv:'A2',tp:'Escrita',t:'Describe the picture',i:'Descreva cada imagem com 2 a 4 frases. Use there is / there are, cores e adjetivos.',q:[
    IMG('mar',['Which word describes this place?',['calm','crowded','noisy'],0]),
    IMG('cidade',['Which word describes this place?',['quiet','busy','empty'],1]),
    IMG('mar','Describe this picture: what can you see? What is the weather like?'),
    IMG('cidade','Describe this city. Would you like to live there? Why (not)?'),
    IMG('montanha','Describe this picture. What can people do in a place like this?')]},
  {l:'EN',lv:'B1',tp:'Gramática',t:'Picture talk: what might be happening?',i:'Olhe as imagens e especule com might, may, could, must e can’t.',q:[
    IMG('mala',['Someone is holding this suitcase. They ___ be going on a trip.',['must','can’t','mustn’t'],0]),
    IMG('chuva',['They are carrying an umbrella. It ___ be raining.',['might','can’t','mustn’t'],0]),
    IMG('bandeirinhas',['There are balloons and flags. It ___ be someone’s birthday party.',['could','can’t','shouldn’t'],0]),
    IMG('carrinho',['There’s a baby stroller in the park. The parents ___ be nearby.',['must','can’t','won’t'],0]),
    IMG('presente',GAP('This gift ___ be for a special occasion. (pode ser)','might|could|may')),
    IMG('mala','Who do you think this suitcase belongs to? Where might they be going? Write 3 sentences.'),
    IMG('bandeirinhas','What do you think is happening here? Write 3 sentences with might, may or must.')]},
  {l:'EN',lv:'A2',tp:'Kids',t:'Picture quiz for kids',i:'Look and choose!',q:[
    IMG('peixes',['What are they?',['fish','birds','cats'],0]),
    IMG('balao',['What is it?',['a hot-air balloon','a kite','a plane'],0]),
    IMG('bola',['What is it?',['a ball','an apple','a hat'],0]),
    IMG('uvas',['What are they?',['grapes','bananas','apples'],0]),
    IMG('trem',['What is it?',['a bus','a train','a boat'],1]),
    IMG('coracao',['What shape is it?',['a star','a heart','a circle'],1]),
    IMG('carrinho',['Who goes in this?',['a baby','a dog','a teacher'],0])]},
  /* ===================== FRANCÊS ===================== */
  {l:'FR',lv:'A1',tp:'Vocabulário',t:'Le vocabulaire en images',i:'Regardez l’image et choisissez le bon mot.',q:[
    IMG('xicara',['Qu’est-ce que c’est ?',['une tasse','un livre','un sac'],0]),
    IMG('mala',['Qu’est-ce que c’est ?',['une boîte','une valise','une table'],1]),
    IMG('chuva',['Qu’est-ce que c’est ?',['un chapeau','un arbre','un parapluie'],2]),
    IMG('bicicleta',['Qu’est-ce que c’est ?',['un vélo','une voiture','un train'],0]),
    IMG('relogio',['Qu’est-ce que c’est ?',['un téléphone','un réveil','une lampe'],1]),
    IMG('paris',['Qu’est-ce que c’est ?',['la tour Eiffel','l’Arc de triomphe','le Louvre'],0]),
    IMG('presente',['Qu’est-ce que c’est ?',['un gâteau','une lettre','un cadeau'],2])]},
  {l:'FR',lv:'A1',tp:'Vocabulário',t:'Écrivez le mot',i:'Écrivez le mot en français, avec l’article.',q:[
    IMG('livro',GAP('C’est un ___.','livre')),
    IMG('trem',GAP('C’est un ___.','train')),
    IMG('planta',GAP('C’est une ___.','plante')),
    IMG('bola',GAP('C’est un ___.','ballon')),
    IMG('casa',GAP('Ce sont des ___. (casas)','maisons')),
    IMG('montanha',GAP('C’est une ___.','montagne')),
    IMG('mar',GAP('C’est la ___.','mer'))]},
  {l:'FR',lv:'A2',tp:'Escrita',t:'Décrivez l’image',i:'Décrivez chaque image en 2 à 4 phrases. Utilisez « il y a ».',q:[
    IMG('mar',TF('Il y a un bateau sur la mer.',true)),
    IMG('noite',TF('Il fait jour.',false)),
    IMG('cidade',GAP('Il y ___ beaucoup d’immeubles.','a')),
    IMG('mar','Décrivez cette image : qu’est-ce que vous voyez ? Quel temps fait-il ?'),
    IMG('montanha','Décrivez ce paysage. Qu’est-ce qu’on peut faire ici ?')]},
];
function imgBank(T0){
  return CONT_IMG.map((x,k)=>({id:uid(),lang:x.l,level:x.lv,topic:x.tp,title:x.t,instructions:x.i,audio:'',questions:fromRaw(x.q),uses:hashStr(x.t)%3,mine:false,createdAt:T0-8*DAY+k*MIN}));
}
/* dicionários ilustrados: "palavra = tradução | exemplo | img:cena" */
const FLASH_IMG=[
  ['EN','A1','Picture dictionary',`a cup = uma xícara | I drink coffee from a big cup. | img:xicara
a suitcase = uma mala | My suitcase is very heavy. | img:mala
an alarm clock = um despertador | My alarm clock rings at six. | img:relogio
an umbrella = um guarda-chuva | Take an umbrella, it’s raining! | img:chuva
a bike = uma bicicleta | I ride my bike to school. | img:bicicleta
headphones = fones de ouvido | I listen to music with headphones. | img:fones
a gift = um presente | This gift is for you! | img:presente
a book = um livro | I’m reading a great book. | img:livro
a train = um trem | The train leaves at nine. | img:trem
a plant = uma planta | Water the plant, please. | img:planta
a ball = uma bola | Kick the ball! | img:bola
grapes = uvas | I love green grapes. | img:uvas
the sea = o mar | The sea is calm today. | img:mar
a mountain = uma montanha | We climbed a mountain. | img:montanha
a city = uma cidade | São Paulo is a big city. | img:cidade
a light bulb = uma lâmpada | The light bulb is broken. | img:lampada
a letter = uma carta | I wrote a letter to my grandma. | img:envelope
a microphone = um microfone | Speak into the microphone. | img:microfone
a pot = uma panela | The soup is in the pot. | img:panela
a baby stroller = um carrinho de bebê | The baby is sleeping in the stroller. | img:carrinho`],
  ['FR','A1','Le dictionnaire en images',`une tasse = uma xícara | Je bois mon café dans une tasse. | img:xicara
une valise = uma mala | Ma valise est lourde. | img:mala
un réveil = um despertador | Mon réveil sonne à six heures. | img:relogio
un parapluie = um guarda-chuva | Prends ton parapluie, il pleut ! | img:chuva
un vélo = uma bicicleta | Je vais à l’école à vélo. | img:bicicleta
un cadeau = um presente | Ce cadeau est pour toi ! | img:presente
un livre = um livro | Je lis un livre. | img:livro
un train = um trem | Le train part à neuf heures. | img:trem
une plante = uma planta | Arrose la plante, s’il te plaît. | img:planta
un ballon = uma bola | Lance le ballon ! | img:bola
le raisin = as uvas | J’aime le raisin vert. | img:uvas
la mer = o mar | La mer est calme aujourd’hui. | img:mar
la montagne = a montanha | Nous allons à la montagne. | img:montanha
la ville = a cidade | Paris est une grande ville. | img:cidade
la tour Eiffel = a torre Eiffel | La tour Eiffel est à Paris. | img:paris`],
];
/* imagem automática nos flashcards: quando a palavra do cartão tem desenho, ele aparece (o img: escrito vale mais) */
const AUTO_IMG=(()=>{ const m={}, add=(sc,words)=>words.split(',').forEach(w=>m[w.trim()]=sc);
  add('gato','cat,kitten,chat'); add('cachorro','dog,puppy,chien'); add('passaro','bird,oiseau'); add('coelho','rabbit,bunny,lapin'); add('peixes','fish,poisson');
  add('cavalo','horse,cheval'); add('vaca','cow,vache'); add('rato','mouse,souris'); add('macaco','monkey,singe');
  add('maca','apple,pomme'); add('banana','banana,banane'); add('sorvete','ice cream,glace'); add('bolo','cake,gâteau,dessert'); add('pizza','pizza');
  add('pao','bread,pain'); add('queijo','cheese,fromage'); add('frango','chicken,meat,viande,poulet'); add('legumes','vegetables,légumes,carrot,carotte');
  add('suco','juice,jus'); add('agua','water,eau,bottle,bouteille'); add('ovo','egg,œuf,oeuf'); add('xicara','cup,coffee,tea,café,thé,tasse');
  add('uvas','grapes,raisin,fruit,fruits'); add('panela','cook dinner,cook,kitchen,cuisine,pot,casserole');
  add('camiseta','t-shirt,tee-shirt'); add('camisa','shirt,chemise'); add('calca','trousers,pants,jeans,pantalon'); add('vestido','dress,robe');
  add('saia','skirt,jupe'); add('jaqueta','jacket,coat,veste,manteau'); add('meias','socks,chaussettes'); add('sapato','shoes,shoe,trainers,sneakers,chaussures,baskets');
  add('chapeu','hat,cap,chapeau'); add('oculos','glasses,lunettes'); add('mochila','bag,backpack,sac,sac à dos'); add('chave','key,keys,clé');
  add('sol','sunny,sun,hot,soleil,il fait beau,il fait chaud'); add('nuvem','cloudy,cloud,nuage'); add('chuva','rainy,rain,umbrella,il pleut,pluie,parapluie');
  add('vento','windy,wind,il y a du vent,vent'); add('tempestade','storm,orage,tempête'); add('neve','snow,cold,it’s freezing!,neige,il fait froid');
  add('feliz','happy,heureux,heureuse,content'); add('triste','sad,triste'); add('cansado','tired,fatigué'); add('bravo','angry,en colère,fâché');
  add('preocupado','worried,nervous,inquiet,stressé'); add('animado','excited,proud,fier'); add('entediado','bored,s’ennuyer'); add('surpreso','scared,surprised,surpris');
  add('sofa','sofa,couch,living room,canapé,salon'); add('geladeira','fridge,frigo,réfrigérateur'); add('armario','wardrobe,armoire'); add('banheira','bathroom,have a shower,salle de bains,bath');
  add('cama','bed,bedroom,go to bed,lit,chambre,se coucher'); add('cadeira','chair,chaise'); add('flor','flower,garden,jardin,fleur'); add('arvore','tree,arbre,park');
  add('celular','phone,mobile,smartphone,téléphone,portable'); add('relogio','alarm clock,clock,get up,réveil,se lever'); add('livro','book,livre,read');
  add('carro','car,drive,voiture,driver’s license'); add('onibus','bus,bus stop,to miss the bus,arrêt de bus'); add('bicicleta','bike,bicycle,ride a bike,vélo');
  add('trem','train,train station,gare,subway / underground,métro'); add('aviao','plane,flight,boarding pass,departure,avion,vol'); add('mala','suitcase,luggage,carry-on,valise,bagage');
  add('ingresso','ticket,billet,round trip'); add('violao','guitar,play the guitar,guitare'); add('camera','camera,take photos,appareil photo'); add('bola','ball,play football,football,ballon,sport');
  add('mar','sea,beach,go swimming,mer,plage'); add('montanha','mountain,montagne'); add('cidade','city,ville,town'); add('presente','gift,present,cadeau,birthday');
  return m; })();
const imgKey=s=>String(s||'').toLowerCase().replace(/[’']/g,'’').replace(/^(a|an|the|to|un|une|des|du|de la|le|la|les)\s+/,'').replace(/^l’/,'').replace(/[.!?¿¡]+$/,'').trim();
const cardImg=(c)=>c.img||AUTO_IMG[imgKey(c.f)]||AUTO_IMG[String(c.f||'').toLowerCase().trim()]||'';
/* mais dicionários ilustrados, com as imagens novas */
FLASH_IMG.push(
  ['EN','A1','Picture dictionary: animals',`a cat = um gato | My cat sleeps all day. | img:gato
a dog = um cachorro | The dog is in the garden. | img:cachorro
a bird = um pássaro | A bird is singing. | img:passaro
a rabbit = um coelho | The rabbit eats carrots. | img:coelho
a fish = um peixe | I have a red fish. | img:peixes
a horse = um cavalo | She rides a horse. | img:cavalo
a cow = uma vaca | Cows give us milk. | img:vaca
a mouse = um rato | The mouse is very small. | img:rato
a monkey = um macaco | Monkeys love bananas. | img:macaco`],
  ['EN','A1','Picture dictionary: food',`an apple = uma maçã | An apple a day keeps the doctor away. | img:maca
a banana = uma banana | I eat a banana every morning. | img:banana
bread = pão | Can you buy some bread? | img:pao
cheese = queijo | I love cheese sandwiches. | img:queijo
chicken = frango | We’re having chicken for dinner. | img:frango
vegetables = legumes | Eat your vegetables! | img:legumes
juice = suco | An orange juice, please. | img:suco
water = água | Can I have a glass of water? | img:agua
an egg = um ovo | I have two eggs for breakfast. | img:ovo
a cake = um bolo | Happy birthday! Here’s your cake. | img:bolo
ice cream = sorvete | Chocolate or vanilla ice cream? | img:sorvete
pizza = pizza | Let’s order a pizza tonight. | img:pizza`],
  ['EN','A1','Picture dictionary: clothes',`a T-shirt = uma camiseta | I’m wearing a blue T-shirt. | img:camiseta
a shirt = uma camisa | He wears a shirt to work. | img:camisa
trousers = calça | These trousers are too long. | img:calca
a dress = um vestido | What a beautiful dress! | img:vestido
a skirt = uma saia | She’s wearing a purple skirt. | img:saia
a jacket = uma jaqueta | Take a jacket, it’s cold. | img:jaqueta
socks = meias | Where are my socks? | img:meias
shoes = sapatos / tênis | I need new shoes. | img:sapato
a hat = um chapéu | Wear a hat in the sun. | img:chapeu
glasses = óculos | I can’t read without my glasses. | img:oculos`],
  ['EN','A2','Picture dictionary: weather and feelings',`sunny = ensolarado | It’s sunny today! | img:sol
cloudy = nublado | It’s cloudy but warm. | img:nuvem
rainy = chuvoso | Take an umbrella, it’s rainy. | img:chuva
windy = ventando | It’s too windy to go to the beach. | img:vento
a storm = uma tempestade | There was a big storm last night. | img:tempestade
snow = neve | Have you ever seen snow? | img:neve
happy = feliz | I’m so happy to see you! | img:feliz
sad = triste | Why are you sad? | img:triste
tired = cansado | I’m tired after work. | img:cansado
angry = bravo | My boss was angry with me. | img:bravo
worried = preocupado | Don’t be worried, it’s OK. | img:preocupado
excited = animado | I’m excited about the trip! | img:animado
bored = entediado | I’m bored. Let’s go out! | img:entediado
surprised = surpreso | She was surprised by the gift. | img:surpreso`],
  ['EN','A2','Picture dictionary: home and free time',`a sofa = um sofá | Sit on the sofa. | img:sofa
a fridge = uma geladeira | The milk is in the fridge. | img:geladeira
a wardrobe = um guarda-roupa | My clothes are in the wardrobe. | img:armario
a bathroom = um banheiro | The bathroom is upstairs. | img:banheira
a bed = uma cama | My bed is very comfortable. | img:cama
a chair = uma cadeira | Take a chair and sit down. | img:cadeira
a phone = um celular | Can I use your phone? | img:celular
a key = uma chave | I can’t find my key! | img:chave
a guitar = um violão | He plays the guitar. | img:violao
a camera = uma câmera | I take photos with my camera. | img:camera
a ticket = um bilhete / ingresso | Two tickets for the concert, please. | img:ingresso
a backpack = uma mochila | My backpack is very heavy. | img:mochila`],
  ['FR','A1','Les animaux en images',`un chat = um gato | Mon chat dort toute la journée. | img:gato
un chien = um cachorro | Le chien est dans le jardin. | img:cachorro
un oiseau = um pássaro | Un oiseau chante. | img:passaro
un lapin = um coelho | Le lapin mange des carottes. | img:coelho
un poisson = um peixe | J’ai un poisson rouge. | img:peixes
un cheval = um cavalo | Elle monte à cheval. | img:cavalo
une vache = uma vaca | La vache donne du lait. | img:vaca
une souris = um rato | La souris est toute petite. | img:rato
un singe = um macaco | Les singes adorent les bananes. | img:macaco`],
  ['FR','A1','La nourriture en images',`une pomme = uma maçã | Je mange une pomme. | img:maca
une banane = uma banana | Une banane, s’il te plaît. | img:banana
le pain = o pão | Tu peux acheter du pain ? | img:pao
le fromage = o queijo | La France a beaucoup de fromages. | img:queijo
le poulet = o frango | On mange du poulet ce soir. | img:frango
les légumes = os legumes | Mange tes légumes ! | img:legumes
le jus d’orange = o suco de laranja | Un jus d’orange, s’il vous plaît. | img:suco
l’eau = a água | Un verre d’eau, s’il vous plaît. | img:agua
un œuf = um ovo | Je mange deux œufs le matin. | img:ovo
un gâteau = um bolo | Joyeux anniversaire ! Voici ton gâteau. | img:bolo
une glace = um sorvete | Une glace à la vanille ! | img:sorvete`],
  ['FR','A1','Les vêtements en images',`un t-shirt = uma camiseta | Je porte un t-shirt bleu. | img:camiseta
une chemise = uma camisa | Il porte une chemise au travail. | img:camisa
un pantalon = uma calça | Ce pantalon est trop long. | img:calca
une robe = um vestido | Quelle belle robe ! | img:vestido
une jupe = uma saia | Elle porte une jupe violette. | img:saia
une veste = uma jaqueta | Prends une veste, il fait froid. | img:jaqueta
des chaussettes = meias | Où sont mes chaussettes ? | img:meias
des chaussures = sapatos | J’ai besoin de nouvelles chaussures. | img:sapato
un chapeau = um chapéu | Mets un chapeau au soleil. | img:chapeu
des lunettes = óculos | Je ne peux pas lire sans mes lunettes. | img:oculos`],
  ['FR','A2','La météo et les émotions',`Il fait beau. = Está um dia bonito. | Il fait beau, on va à la plage ! | img:sol
Il y a des nuages. = Está nublado. | Il y a des nuages mais il fait doux. | img:nuvem
Il pleut. = Está chovendo. | Prends un parapluie, il pleut. | img:chuva
Il y a du vent. = Está ventando. | Il y a trop de vent pour la plage. | img:vento
un orage = uma tempestade | Il y a eu un gros orage cette nuit. | img:tempestade
la neige = a neve | Tu as déjà vu la neige ? | img:neve
heureux / heureuse = feliz | Je suis très heureuse de te voir ! | img:feliz
triste = triste | Pourquoi tu es triste ? | img:triste
fatigué(e) = cansado(a) | Je suis fatigué après le travail. | img:cansado
en colère = bravo | Mon chef était en colère. | img:bravo
inquiet / inquiète = preocupado(a) | Ne sois pas inquiet, ça va. | img:preocupado
surpris(e) = surpreso(a) | Elle était surprise par le cadeau. | img:surpreso`],
);
