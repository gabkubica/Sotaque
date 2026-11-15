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
