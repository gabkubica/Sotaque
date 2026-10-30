/* =========================================================
   Sotaque · banco de tarefas de francês
   Mesmo formato do banco.js: [enunciado, alternativas, certa] · TF · GAP · MAT · ORD · texto solto = escrita
   ========================================================= */
const READF={
  lea:'Lisez le texte et répondez.\n\nBonjour ! Je m’appelle Léa. J’ai douze ans et j’habite à Bordeaux avec ma mère, mon père et mon petit frère, Hugo. Hugo a sept ans. Ma mère est infirmière et mon père est boulanger. Nous avons un chat, il s’appelle Caramel. Le mercredi après-midi, je fais de la danse. Le dimanche, nous mangeons chez mes grands-parents.',
  lyon:'Lisez le texte et répondez.\n\nLe week-end dernier, Camille et Thomas sont allés à Lyon en train. Ils sont arrivés le samedi matin et ils ont visité la vieille ville. À midi, ils ont mangé dans un « bouchon », un restaurant typique lyonnais. L’après-midi, il a plu, alors ils sont allés au musée. Le dimanche, ils ont fait du vélo au bord du Rhône. Ils sont rentrés à Paris le soir, fatigués mais contents.',
  mtl:'Lisez le texte et répondez.\n\nL’année dernière, Gabriel a passé un an à Montréal pour ses études. Au début, l’hiver a été très difficile : il faisait parfois moins trente degrés ! Mais Gabriel s’est vite habitué et il a même appris à patiner. Il a été surpris par l’accent québécois et par certains mots différents : par exemple, au Québec, on dit « char » pour « voiture ». Ce qu’il a préféré, c’est la gentillesse des gens et la vie culturelle de la ville.',
  rs:'Lisez le texte et répondez.\n\nSelon une étude récente, les jeunes Français passent en moyenne plus de trois heures par jour sur les réseaux sociaux. Si ces plateformes permettent de garder le contact avec ses proches et de s’informer rapidement, elles présentent aussi des risques : comparaison permanente avec les autres, fausses informations et difficultés de concentration. C’est pourquoi certaines écoles ont décidé d’interdire le téléphone portable pendant les cours. Les spécialistes recommandent surtout d’apprendre aux jeunes à utiliser ces outils de manière critique.',
  deco:'Lisez le texte et répondez.\n\nDepuis 2017, la loi française reconnaît aux salariés un « droit à la déconnexion » : en dehors de leurs heures de travail, ils ne sont pas obligés de répondre aux courriels ni aux appels professionnels. Cette mesure vise à préserver la santé mentale et l’équilibre entre vie professionnelle et vie privée. Toutefois, son application reste inégale : dans de nombreuses entreprises, la culture de la disponibilité permanente persiste, et certains cadres avouent consulter leur messagerie jusque tard dans la soirée. Les syndicats réclament donc des sanctions plus strictes.',
};
const BANK_RAW_FR=[
  /* ---------- A1 ---------- */
  ['A1','Expressões','Les salutations','Cumprimentos e despedidas.',[
    MAT('Ligue.',[['Bonjour','Bom dia / Olá'],['Bonsoir','Boa noite (ao chegar)'],['Salut','Oi (informal)'],['Au revoir','Tchau'],['À bientôt','Até logo']]),
    ['Il est 20 heures. Vous arrivez chez des amis. Vous dites…',['Bonsoir !','Bonne nuit !','Bon appétit !'],0],
    ['« Comment ça va ? » — Réponse :',['Ça va bien, merci.','Je m’appelle Paul.','J’ai vingt ans.'],0],
    TF('On dit « Bonne nuit » avant d’aller dormir.',true),GAP('___ beaucoup ! (obrigado)','Merci'),ORD('Je vais bien, merci.')]],
  ['A1','Gramática','Se présenter','',[
    ['Je ___ Sophie.',['m’appelle','appelle','suis appelle'],0],['J’___ vingt-cinq ans.',['ai','suis','a'],0],['Je ___ brésilienne.',['suis','ai','est'],0],
    GAP('J’habite ___ Curitiba. (em)','à'),TF('Pour dire son âge, on utilise le verbe « être ».',false),ORD('Je suis professeur de français.')]],
  ['A1','Conjugação','Être et avoir','',[
    ['Nous ___ au Brésil.',['sommes','avons','êtes'],0],['Ils ___ un chien.',['ont','sont','avez'],0],['Tu ___ fatigué ?',['es','as','est'],0],
    GAP('Vous ___ une voiture ? (avoir)','avez'),GAP('Elle ___ médecin. (être)','est'),
    MAT('Ligue o pronome ao verbo être.',[['je','suis'],['tu','es'],['nous','sommes'],['vous','êtes'],['ils','sont']]),TF('« J’ai faim » utilise le verbe avoir.',true)]],
  ['A1','Gramática','Les articles','Le, la, les, un, une, des.',[
    ['___ soleil est chaud.',['Le','La','Les'],0],['___ maison est grande.',['Le','La','Les'],1],['J’ai ___ chat et ___ chienne.',['un / une','une / un','des / des'],0],
    GAP('___ enfants jouent dans le parc.','Les'),GAP('___ école est fermée. (artigo definido antes de vogal)','L’'),TF('En français, « des » est le pluriel de « un » et de « une ».',true)]],
  ['A1','Vocabulário','Les nombres','',[
    ['17 en français, c’est…',['dix-sept','sept-dix','soixante-dix'],0],['70 en France, c’est…',['septante','soixante-dix','sept-dix'],1],['80 en France, c’est…',['quatre-vingts','huitante','octante'],0],
    MAT('Ligue.',[['11','onze'],['12','douze'],['15','quinze'],['20','vingt'],['100','cent']]),GAP('J’ai ___ ans. (21)','vingt et un|vingt-et-un'),
    TF('En Belgique, on dit aussi « septante » pour 70.',true)]],
  ['A1','Vocabulário','Les jours et les mois','',[
    ['Le jour après lundi, c’est…',['mardi','mercredi','dimanche'],0],['Le premier mois de l’année, c’est…',['janvier','juin','juillet'],0],
    MAT('Ligue.',[['lundi','segunda'],['mercredi','quarta'],['vendredi','sexta'],['samedi','sábado'],['dimanche','domingo']]),
    TF('En français, les jours de la semaine s’écrivent avec une majuscule.',false),GAP('Mon anniversaire est en ___. (julho)','juillet'),ORD('Aujourd’hui, nous sommes jeudi.')]],
  ['A1','Vocabulário','Les couleurs','',[
    MAT('Ligue.',[['rouge','vermelho'],['bleu','azul'],['jaune','amarelo'],['vert','verde'],['noir','preto']]),
    ['Le ciel est…',['bleu','rouge','noir'],0],['Une voiture blanche → deux voitures ___',['blanches','blancs','blanche'],0],
    GAP('Une pomme rouge et une banane ___. (amarela)','jaune'),TF('« Orange » est invariable : des chaussures orange.',true),ORD('Ma couleur préférée est le vert.')]],
  ['A1','Vocabulário','La famille','',[
    MAT('Ligue.',[['la mère','mãe'],['le père','pai'],['la sœur','irmã'],['le frère','irmão'],['les grands-parents','avós']]),
    ['Le frère de ma mère, c’est mon…',['oncle','cousin','neveu'],0],['La fille de mon oncle, c’est ma…',['cousine','tante','nièce'],0],
    GAP('Les parents de mes parents sont mes ___.','grands-parents'),TF('« Mes parents », c’est mon père et ma mère.',true),ORD('J’ai deux frères et une sœur.')]],
  ['A1','Conjugação','Les verbes en -er','Presente do indicativo.',[
    ['Je ___ le français.',['parle','parles','parlons'],0],['Nous ___ à Paris.',['habitons','habitez','habitent'],0],['Ils ___ la télé le soir.',['regardent','regarde','regardons'],0],
    GAP('Tu ___ (aimer) le chocolat ?','aimes'),GAP('Vous ___ (travailler) le samedi ?','travaillez'),
    TF('Avec « il », on écrit « il parle ».',true),ORD('Nous mangeons au restaurant ce soir.')]],
  ['A1','Gramática','La négation','Ne… pas.',[
    ['Je ___ parle ___ allemand.',['ne / pas','pas / ne','non / pas'],0],['Elle ___ aime pas le café.',['n’','ne','non'],0],
    ['Choisissez la phrase correcte.',['Je ne suis pas fatigué.','Je ne pas suis fatigué.','Je suis ne pas fatigué.'],0],
    GAP('Il n’a ___ de voiture.','pas'),TF('Après une négation, « un » devient souvent « de » : je n’ai pas de chien.',true),ORD('Nous ne travaillons pas le dimanche.')]],
  ['A1','Gramática','Poser des questions','Est-ce que, qu’est-ce que, où, quand…',[
    ['___ tu habites ? — À Lyon.',['Où','Quand','Qui'],0],['___ c’est ? — C’est mon frère.',['Qui','Quoi','Où'],0],['___ tu fais ce week-end ?',['Qu’est-ce que','Est-ce que','Où'],0],
    GAP('___-ce que tu parles anglais ?','Est'),MAT('Ligue.',[['quand','quando'],['pourquoi','por que'],['combien','quanto'],['comment','como']]),ORD('Est-ce que tu aimes le cinéma ?')]],
  ['A1','Kids','Les animaux','',[
    MAT('Ligue.',[['le chien','cachorro'],['le chat','gato'],['l’oiseau','pássaro'],['le poisson','peixe'],['le cheval','cavalo']]),
    ['Quel animal fait « miaou » ?',['le chat','le chien','la vache'],0],['Quel animal vit dans la mer ?',['le poisson','le lapin','le cheval'],0],
    GAP('Le ___ fait « ouaf ouaf ». (cachorro)','chien'),TF('L’éléphant est un petit animal.',false),ORD('J’ai un petit chat noir.')]],
  ['A1','Kids','Le corps','',[
    MAT('Ligue.',[['la tête','cabeça'],['la main','mão'],['le pied','pé'],['les yeux','olhos'],['le nez','nariz']]),
    ['On entend avec les…',['oreilles','yeux','pieds'],0],['On a dix…',['doigts','nez','têtes'],0],
    GAP('Je me brosse les ___ le matin. (dentes)','dents'),TF('Le pluriel de « œil » est « yeux ».',true),ORD('Touche ton nez avec ton doigt.')]],
  ['A1','Kids','Les fruits et les légumes','',[
    MAT('Ligue.',[['la pomme','maçã'],['la fraise','morango'],['la carotte','cenoura'],['la poire','pera'],['le citron','limão']]),
    ['La banane est…',['jaune','bleue','violette'],0],['Quel est un légume ?',['la carotte','la cerise','la poire'],0],
    GAP('J’aime le jus d’___. (laranja)','orange'),TF('La fraise est rouge.',true),ORD('Je voudrais une pomme, s’il te plaît.')]],
  ['A1','Leitura','Lecture · Je m’appelle Léa',READF.lea,[
    TF('Léa habite à Paris.',false),TF('Hugo est le frère de Léa.',true),['Quel âge a Hugo ?',['sept ans','douze ans','dix ans'],0],
    ['Que fait le père de Léa ?',['Il est infirmier.','Il est boulanger.','Il est professeur.'],1],['Comment s’appelle le chat ?',['Hugo','Caramel','Bordeaux'],1],
    GAP('Le mercredi, Léa fait de la ___.','danse')]],
  ['A1','Cultura','Les fêtes en France','',[
    ['La fête nationale française est le…',['14 juillet','1er mai','25 décembre'],0],
    MAT('Ligue.',[['Noël','Natal'],['Pâques','Páscoa'],['le Nouvel An','Ano-Novo'],['la fête des Mères','Dia das Mães']]),
    ['En janvier, pour l’Épiphanie, on mange la…',['galette des rois','pizza','feijoada'],0],TF('Le 1er avril, en France, on fait des « poissons d’avril ».',true),
    GAP('Joyeux ___ ! (Natal)','Noël'),ORD('Bonne année et bonne santé !')]],
  ['A1','Pronúncia','Les sons du français','Leia em voz alta antes de responder.',[
    ['Dans « Paris », on prononce le s final ?',['oui','non'],1],['Quel mot a un son nasal ?',['pain','pas','pomme'],0],['« eau » se prononce comme…',['o','e-a-u','a'],0],
    TF('Dans « chat », le t final ne se prononce pas.',true),TF('O « ou » do francês soa como o « u » do português.',true),
    MAT('Ligue as palavras que soam igual.',[['vert','verre'],['mer','mère'],['cent','sang'],['vin','vingt']])]],
  /* ---------- A2 ---------- */
  ['A2','Conjugação','Passé composé avec avoir','',[
    ['Hier, j’___ un film.',['ai regardé','suis regardé','ai regarder'],0],['Nous ___ une pizza.',['avons mangé','sommes mangés','avons manger'],0],
    GAP('Tu ___ fini tes devoirs ?','as'),MAT('Ligue o infinitivo ao particípio.',[['faire','fait'],['prendre','pris'],['voir','vu'],['boire','bu'],['écrire','écrit']]),
    GAP('Elle a ___ (lire) ce livre.','lu'),TF('« J’ai faire » est correct.',false),ORD('Nous avons visité le musée hier.')]],
  ['A2','Conjugação','Passé composé avec être','Verbos de movimento e pronominais.',[
    ['Elle ___ allée au cinéma.',['est','a','es'],0],['Nous sommes ___ à huit heures. (partir)',['partis','parti','partir'],0],['Ils ___ nés à Rio.',['sont','ont','est'],0],
    GAP('Marie est ___ (venir) avec sa sœur.','venue'),TF('Avec « être », le participe passé s’accorde avec le sujet.',true),
    MAT('Ligue.',[['aller','allé'],['naître','né'],['mourir','mort'],['descendre','descendu']]),ORD('Je suis rentré tard hier soir.')]],
  ['A2','Conjugação','Le futur proche','Aller + infinitivo.',[
    ['Demain, je ___ voyager.',['vais','va','allons'],0],['Nous ___ manger au restaurant.',['allons','allez','vont'],0],
    GAP('Ils ___ partir en vacances. (aller)','vont'),GAP('Qu’est-ce que tu ___ faire ce soir ?','vas'),
    TF('Le futur proche se forme avec « aller » + infinitif.',true),ORD('Je vais apprendre le français cette année.')]],
  ['A2','Gramática','Les adjectifs possessifs','Mon, ma, mes, ton, ta, tes…',[
    ['C’est ___ livre. (meu)',['mon','ma','mes'],0],['C’est ___ voiture. (minha)',['mon','ma','mes'],1],['Ce sont ___ enfants. (deles)',['leurs','leur','ses'],0],
    GAP('___ amie s’appelle Julie. (minha, antes de vogal)','Mon'),TF('« Son » pode significar « dele » ou « dela ».',true),ORD('Notre maison est près de la plage.')]],
  ['A2','Gramática','Les articles partitifs','Du, de la, de l’, des.',[
    ['Je mange ___ pain.',['du','de la','des'],0],['Tu veux ___ eau ?',['de l’','du','de la'],0],['Elle achète ___ fraises.',['des','du','de la'],0],
    GAP('Je bois ___ lait le matin. (masculino)','du'),GAP('Je ne mange pas ___ viande. (negativa)','de'),TF('Après « beaucoup », on utilise « de » : beaucoup de sucre.',true)]],
  ['A2','Conjugação','Les verbes pronominaux','',[
    ['Je ___ lève à sept heures.',['me','te','se'],0],['Nous ___ couchons tard.',['nous','vous','se'],0],['Elle ___ appelle Camille.',['s’','se','te'],0],
    GAP('Tu ___ douches le matin ou le soir ?','te'),TF('« Se laver » est un verbe pronominal.',true),ORD('Je me brosse les dents après le repas.')]],
  ['A2','Gramática','À, en, au, aux','Países e cidades.',[
    ['J’habite ___ Paris.',['à','en','au'],0],['Elle travaille ___ France.',['à','en','au'],1],['Nous allons ___ Brésil.',['à','en','au'],2],['Ils vivent ___ États-Unis.',['aux','au','en'],0],
    GAP('Je suis ___ Portugal pour les vacances.','au'),TF('On dit « en Italie » parce que l’Italie est féminin.',true)]],
  ['A2','Vocabulário','Au restaurant','',[
    MAT('Ligue.',[['l’entrée','entrada'],['le plat principal','prato principal'],['le dessert','sobremesa'],['l’addition','conta'],['la carte','cardápio']]),
    ['Pour payer, on demande…',['l’addition','la carte','l’entrée'],0],['« Eu queria um café, por favor » :',['Je voudrais un café, s’il vous plaît.','Je veux café, merci.','Donne-moi un café.'],0],
    GAP('Bon ___ ! (para desejar boa refeição)','appétit'),TF('« Saignant » se dit d’une viande peu cuite.',true),ORD('Je voudrais réserver une table pour deux.')]],
  ['A2','Vocabulário','Les vêtements et les courses','',[
    MAT('Ligue.',[['la chemise','camisa'],['le pantalon','calça'],['la jupe','saia'],['les chaussures','sapatos'],['le manteau','casaco']]),
    ['Combien ___ cette robe ?',['coûte','coûtes','coûtent'],0],['Je peux l’___ ? (experimentar)',['essayer','porter','acheter'],0],
    GAP('Vous avez cette chemise en taille ___ ? (M)','M|moyenne'),TF('« Les soldes » sont des périodes de prix réduits.',true),ORD('Je cherche un pull bleu.')]],
  ['A2','Vocabulário','En ville','',[
    ['« Siga em frente » :',['Allez tout droit.','Tournez à gauche.','Revenez.'],0],
    MAT('Ligue.',[['à droite','à direita'],['à gauche','à esquerda'],['en face de','em frente a'],['à côté de','ao lado de']]),
    ['On achète du pain à la…',['boulangerie','pharmacie','poste'],0],GAP('Excusez-moi, où est la ___ ? Je voudrais prendre le train.','gare'),
    TF('Dans une « librairie », on achète des livres.',true),ORD('Prenez la deuxième rue à droite.')]],
  ['A2','Vocabulário','Les loisirs','',[
    MAT('Ligue.',[['faire du vélo','andar de bicicleta'],['jouer de la guitare','tocar violão'],['lire','ler'],['nager','nadar'],['faire la cuisine','cozinhar']]),
    ['On dit « jouer ___ football ».',['au','du','de la'],0],['On dit « jouer ___ piano ».',['du','au','à la'],0],
    GAP('Le samedi, je fais ___ yoga.','du'),TF('« Faire une randonnée » veut dire fazer uma trilha.',true),'Qu’est-ce que vous aimez faire le week-end ? Écrivez trois phrases.']],
  ['A2','Expressões','Les expressions avec avoir','',[
    MAT('Ligue.',[['avoir faim','ter fome'],['avoir soif','ter sede'],['avoir froid','sentir frio'],['avoir peur','ter medo'],['avoir sommeil','ter sono']]),
    ['Il fait 40 degrés. J’ai…',['chaud','froid','faim'],0],['Je n’ai pas mangé. J’ai…',['faim','soif','raison'],0],
    GAP('Tu as ___ : c’est la bonne réponse ! (razão)','raison'),TF('« J’ai besoin de » veut dire « eu preciso de ».',true),ORD('J’ai envie de manger une glace.')]],
  ['A2','Leitura','Lecture · Un week-end à Lyon',READF.lyon,[
    TF('Ils sont allés à Lyon en voiture.',false),TF('Il a plu le samedi après-midi.',true),
    ['Qu’est-ce qu’un « bouchon » ?',['un restaurant typique','un musée','une gare'],0],['Qu’est-ce qu’ils ont fait le dimanche ?',['du vélo','du ski','de la natation'],0],
    GAP('Ils sont rentrés à ___ le dimanche soir.','Paris'),['Comment étaient-ils à la fin ?',['fatigués mais contents','tristes','malades'],0]]],
  ['A2','Escrita','Écrire une carte postale','',[
    ['Pour commencer une carte à un ami :',['Cher Paul,','Monsieur,','Madame, Monsieur,'],0],['Pour finir :',['Bisous !','Veuillez agréer…','Cordialement,'],0],
    ORD('Je passe de super vacances à Nice.'),ORD('Hier, nous sommes allés à la plage.'),
    'Écrivez une carte postale (40–60 mots) à un ami : où vous êtes, le temps qu’il fait et ce que vous avez fait hier.']],
  ['A2','Cultura','La francophonie','',[
    ['Dans quel pays on parle aussi français ?',['au Canada','au Mexique','au Chili'],0],
    MAT('Ligue o país à capital.',[['la Belgique','Bruxelles'],['la Suisse','Berne'],['le Sénégal','Dakar'],['le Maroc','Rabat']]),
    TF('Au Québec, on parle français.',true),TF('Le français est une langue officielle en Haïti.',true),GAP('La capitale de la France est ___.','Paris'),
    ['Qui a écrit « Le Petit Prince » ?',['Antoine de Saint-Exupéry','Victor Hugo','Molière'],0]]],
  ['A2','Trabalho','Se présenter au travail','',[
    ['Qu’est-ce que vous ___ dans la vie ? — Je suis designer.',['faites','êtes','avez'],0],
    MAT('Ligue.',[['un collègue','colega'],['le patron','chefe'],['une réunion','reunião'],['le bureau','escritório'],['le salaire','salário']]),
    ['On utilise « vous » pour…',['parler de façon polie','parler à un enfant','parler à un ami proche'],0],GAP('Je travaille ___ une banque. (em)','dans'),
    TF('« Enchanté de faire votre connaissance » est une formule polie.',true),ORD('Je suis responsable du service marketing.')]],
  /* ---------- B1 ---------- */
  ['B1','Conjugação','Imparfait ou passé composé ?','',[
    ['Quand j’étais petit, je ___ souvent à la plage.',['allais','suis allé','vais'],0],['Hier, il ___ quand je suis sorti.',['pleuvait','a plu','pleut'],0],['Soudain, le téléphone ___.',['a sonné','sonnait','sonne'],0],
    GAP('Nous ___ (regarder) la télé quand tu as appelé.','regardions'),TF('L’imparfait décrit des habitudes et des situations dans le passé.',true),ORD('Il faisait beau quand nous sommes arrivés.')]],
  ['B1','Conjugação','Le futur simple','',[
    ['Demain, il ___ beau.',['fera','faira','fait'],0],['Nous ___ en France l’année prochaine.',['irons','allerons','vont'],0],
    GAP('Je t’___ (appeler) ce soir.','appellerai'),MAT('Ligue o verbo ao radical do futuro.',[['être','ser-'],['avoir','aur-'],['pouvoir','pourr-'],['venir','viendr-'],['voir','verr-']]),
    TF('« Je serai » est le futur de « être ».',true),ORD('Quand je serai grand, je serai pilote.')]],
  ['B1','Conjugação','Le conditionnel présent','Pedidos educados e desejos.',[
    ['Je ___ un café, s’il vous plaît.',['voudrais','voulais','voudrai'],0],['Tu ___ m’aider, s’il te plaît ?',['pourrais','pourrait','pouvez'],0],['Si j’avais de l’argent, je ___ le monde.',['visiterais','visiterai','visite'],0],
    GAP('À ta place, je ___ (partir) tout de suite.','partirais'),TF('Le conditionnel sert aussi à être poli.',true),ORD('Nous aimerions réserver une chambre.')]],
  ['B1','Gramática','Les pronoms COD et COI','Le, la, les, lui, leur.',[
    ['Tu vois Marie ? — Oui, je ___ vois.',['la','lui','le'],0],['Tu parles à tes parents ? — Oui, je ___ parle.',['leur','les','lui'],0],['Tu as le livre ? — Oui, je ___ ai.',['l’','le','lui'],0],
    GAP('J’écris à Paul. → Je ___ écris.','lui'),TF('« Lui » remplace une personne introduite par « à ».',true),ORD('Je les ai invités à dîner.')]],
  ['B1','Gramática','Les pronoms y et en','',[
    ['Tu vas à Paris ? — Oui, j’___ vais.',['y','en','le'],0],['Tu veux du café ? — Oui, j’___ veux.',['en','y','le'],0],['Vous pensez à votre examen ? — Oui, nous ___ pensons.',['y','en','lui'],0],
    GAP('Tu as des frères ? — Oui, j’___ ai deux.','en'),TF('« En » remplace souvent un nom introduit par « de ».',true),ORD('Il y en a beaucoup dans le frigo.')]],
  ['B1','Gramática','Les pronoms relatifs','Qui, que, où, dont.',[
    ['C’est le film ___ j’ai vu hier.',['que','qui','où'],0],['C’est l’homme ___ habite à côté.',['qui','que','dont'],0],['C’est la ville ___ je suis né.',['où','que','dont'],0],
    GAP('C’est le livre ___ je t’ai parlé.','dont'),TF('« Qui » est le sujet du verbe qui suit.',true),ORD('La femme que tu as vue est ma tante.')]],
  ['B1','Gramática','Comparatif et superlatif','',[
    ['Paris est ___ grande que Lyon.',['plus','très','la plus'],0],['C’est le ___ restaurant de la ville. (bom)',['meilleur','plus bon','mieux'],0],['Elle chante ___ que moi. (melhor)',['mieux','meilleur','plus bien'],0],
    GAP('Le Brésil est ___ grand que la France.','plus'),TF('On dit « plus bon » en français standard.',false),ORD('C’est la plus belle plage du monde.')]],
  ['B1','Conjugação','Le subjonctif · il faut que','Introdução ao subjuntivo.',[
    ['Il faut que tu ___ tes devoirs.',['fasses','fais','feras'],0],['Il faut que nous ___ à l’heure.',['soyons','sommes','serons'],0],['Je veux que vous ___ avec moi.',['veniez','venez','viendrez'],0],
    GAP('Il faut que j’___ (aller) chez le médecin.','aille'),TF('On utilise le subjonctif après « il faut que ».',true),ORD('Il faut que tu partes maintenant.')]],
  ['B1','Vocabulário','Faux amis · português e francês','Cuidado com as palavras parecidas!',[
    ['« Attendre » veut dire…',['esperar','atender','entender'],0],['« Rester » veut dire…',['ficar','restar','descansar'],0],['« Salir » veut dire…',['sujar','sair','saltar'],0],
    MAT('Ligue ao significado certo.',[['la tasse','xícara'],['sauter','pular'],['embrasser','beijar'],['la journée','o dia (inteiro)'],['le garçon','o menino']]),
    TF('« Sortir » veut dire « sair ».',true),GAP('« Esperar » en français, c’est ___.','attendre')]],
  ['B1','Vocabulário','Le travail','',[
    MAT('Ligue.',[['un CV','currículo'],['un entretien','entrevista'],['embaucher','contratar'],['licencier','demitir'],['un stage','estágio']]),
    ['Je cherche un ___ dans une entreprise.',['emploi','emploie','employer'],0],['Elle travaille à temps ___.',['partiel','partie','part'],0],
    GAP('Il a envoyé son ___ et une lettre de motivation.','CV'),TF('« Les congés » sont les jours de vacances au travail.',true),ORD('J’ai un entretien d’embauche demain.')]],
  ['B1','Vocabulário','La santé','',[
    ['J’ai mal à la ___. (cabeça)',['tête','gorge','dent'],0],['Le médecin m’a donné une ___. (receita)',['ordonnance','pharmacie','santé'],0],
    MAT('Ligue.',[['la fièvre','febre'],['un rhume','resfriado'],['la toux','tosse'],['un médicament','remédio']]),
    GAP('J’ai mal à la ___. Je ne peux pas parler. (garganta)','gorge'),TF('On achète les médicaments à la pharmacie.',true),ORD('Je dois prendre rendez-vous chez le dentiste.')]],
  ['B1','Vocabulário','L’environnement','',[
    MAT('Ligue.',[['la pollution','poluição'],['recycler','reciclar'],['les déchets','o lixo'],['le réchauffement climatique','aquecimento global'],['l’énergie solaire','energia solar']]),
    ['Il faut ___ les bouteilles en plastique.',['recycler','polluer','jeter'],0],['Pour économiser l’énergie, on peut ___ la lumière.',['éteindre','allumer','ouvrir'],0],
    GAP('La ___ de l’air est un grave problème dans les grandes villes.','pollution'),TF('L’énergie éolienne vient du vent.',true),'Que faites-vous pour protéger l’environnement ? Écrivez trois phrases.']],
  ['B1','Expressões','Expressions idiomatiques','',[
    ['« Avoir le cafard » veut dire…',['être triste','avoir faim','avoir un insecte'],0],['« Poser un lapin » veut dire…',['ne pas venir à un rendez-vous','faire un cadeau','cuisiner'],0],
    ['« Coûter les yeux de la tête » veut dire…',['être très cher','faire mal aux yeux','être gratuit'],0],
    MAT('Ligue.',[['avoir la flemme','estar com preguiça'],['avoir un coup de foudre','amor à primeira vista'],['casser les pieds','encher o saco'],['c’est du gâteau','é moleza']]),
    TF('« Tomber dans les pommes » veut dire desmaiar.',true),GAP('Il pleut des ___ ! (chove muito)','cordes')]],
  ['B1','Leitura','Lecture · Une année à Montréal',READF.mtl,[
    TF('Gabriel est resté six mois à Montréal.',false),TF('Il a appris à patiner.',true),['Qu’est-ce qui a été difficile au début ?',['l’hiver','la nourriture','les cours'],0],
    ['Au Québec, « char » veut dire…',['voiture','chat','train'],0],GAP('Il a été surpris par l’___ québécois.','accent'),['Qu’est-ce qu’il a préféré ?',['la gentillesse des gens','le froid','les transports'],0]]],
  ['B1','Escrita','Écrire un e-mail informel','',[
    ['Pour commencer un e-mail à une amie :',['Salut Julie !','Madame,','Objet : demande'],0],['Pour finir :',['À bientôt, bises !','Je vous prie d’agréer…','Salutations distinguées'],0],
    MAT('Ligue.',[['Merci pour ton message.','Obrigado pela mensagem.'],['Devine quoi !','Adivinha!'],['Écris-moi vite !','Me escreva logo!'],['Bref,','Enfim,']]),
    ORD('Désolé de ne pas avoir répondu plus tôt.'),'Écrivez un e-mail (70–90 mots) à un ami pour lui raconter un nouveau projet.']],
  ['B1','Pronúncia','Liaisons et lettres muettes','Leia em voz alta.',[
    ['Dans « les amis », on fait la liaison ?',['oui (lé-z-amis)','non'],0],['Dans « et il », on fait la liaison ?',['oui','non'],1],['Dans « ils parlent », la terminaison -ent se prononce ?',['non','oui'],0],
    ['Quelle lettre est muette dans « petit » ?',['le t final','le p','le i'],0],TF('Dans « un grand homme », le d se prononce comme un t.',true),TF('Le h de « hôtel » se prononce.',false)]],
  ['B1','Cultura','La gastronomie française','',[
    MAT('Ligue o prato à descrição.',[['la ratatouille','legumes da Provença'],['la quiche lorraine','torta salgada da Lorena'],['les crêpes','especialidade da Bretanha'],['la bouillabaisse','sopa de peixe de Marselha']]),
    ['On mange surtout un croissant au…',['petit-déjeuner','dîner','goûter de minuit'],0],['« Le fromage » en portugais, c’est…',['queijo','fermento','manteiga'],0],
    TF('En France, on mange souvent du pain à chaque repas.',true),GAP('Une ___ est un pain long et fin. (baguete)','baguette'),ORD('Je voudrais une baguette bien cuite.')]],
  ['B1','Trabalho','L’e-mail professionnel','',[
    ['Pour commencer un e-mail formel :',['Madame, Monsieur,','Coucou !','Salut à tous'],0],['« Segue em anexo » :',['Veuillez trouver ci-joint…','Suivez dans l’attaché…','Voilà le truc…'],0],
    MAT('Ligue.',[['Dans l’attente de votre réponse,','Aguardo seu retorno,'],['Je me permets de vous contacter','Tomo a liberdade de contatá-lo'],['Cordialement,','Atenciosamente,'],['N’hésitez pas à me contacter.','Fique à vontade para me contatar.']]),
    GAP('Je vous remercie ___ votre réponse rapide.','pour|de'),TF('« Cordialement » est une formule de politesse courante.',true),ORD('Je reste à votre disposition pour toute question.')]],
  /* ---------- B2 ---------- */
  ['B2','Conjugação','Le subjonctif · doute et sentiments','',[
    ['Je suis content que tu ___ là.',['sois','es','seras'],0],['Je doute qu’il ___ raison.',['ait','a','aura'],0],['Bien qu’il ___ tard, nous continuons.',['soit','est','sera'],0],
    GAP('Je veux que tu ___ (savoir) la vérité.','saches'),TF('Après « je pense que », on utilise normalement l’indicatif.',true),ORD('Il est possible qu’elle vienne demain.')]],
  ['B2','Conjugação','Le plus-que-parfait','',[
    ['Quand je suis arrivé, le film ___ déjà ___.',['avait / commencé','a / commencé','était / commencé'],0],['Elle était triste parce qu’elle ___ ses clés.',['avait perdu','a perdu','perdait'],0],
    GAP('Nous ___ déjà mangé quand ils sont arrivés.','avions'),GAP('Il était ___ (partir) avant moi.','parti'),
    TF('Le plus-que-parfait indique une action antérieure à une autre action passée.',true),ORD('Je n’avais jamais vu la mer avant ce voyage.')]],
  ['B2','Gramática','Les hypothèses avec si','',[
    ['Si j’ai le temps, je ___ te voir.',['viendrai','viendrais','serais venu'],0],['Si j’avais le temps, je ___ te voir.',['viendrais','viendrai','viens'],0],['Si j’avais eu le temps, je ___ te voir.',['serais venu','viendrais','viendrai'],0],
    GAP('Si tu ___ (étudier) plus, tu réussirais.','étudiais'),TF('Dans une hypothèse, on n’utilise pas le conditionnel juste après « si ».',true),ORD('Si j’étais riche, je voyagerais partout.')]],
  ['B2','Gramática','Le discours indirect','',[
    ['Il dit : « Je suis fatigué. » → Il dit qu’il ___ fatigué.',['est','était','sera'],0],['Elle a dit : « Je viendrai. » → Elle a dit qu’elle ___.',['viendrait','viendra','vient'],0],
    ['« Où habites-tu ? » → Il m’a demandé où ___.',['j’habitais','habites-tu','tu habites'],0],GAP('« Tu as faim ? » → Elle m’a demandé ___ j’avais faim.','si'),
    TF('Au discours indirect, on n’utilise pas de point d’interrogation.',true),ORD('Il m’a dit qu’il avait trouvé un travail.')]],
  ['B2','Gramática','La voix passive','',[
    ['Le gâteau ___ par ma mère.',['a été fait','a fait','était faisant'],0],['Ce livre ___ en 1943.',['a été publié','a publié','publiait'],0],
    GAP('Les résultats seront ___ (annoncer) demain.','annoncés'),GAP('La maison a été construite ___ mon grand-père.','par'),
    TF('Au passif, le participe passé s’accorde avec le sujet.',true),ORD('Le voleur a été arrêté par la police.')]],
  ['B2','Gramática','Le gérondif','En + particípio presente.',[
    ['Il travaille ___ de la musique.',['en écoutant','en écouter','écoutant en'],0],['Je l’ai rencontré ___ du métro.',['en sortant','en sortir','sortant en'],0],
    GAP('Elle s’est blessée en ___ (tomber).','tombant'),TF('Le gérondif exprime souvent la simultanéité ou la manière.',true),
    ['« C’est en forgeant qu’on devient forgeron » veut dire…',['A prática leva à perfeição.','Quem tem boca vai a Roma.','Antes tarde do que nunca.'],0],ORD('On apprend une langue en la pratiquant.')]],
  ['B2','Gramática','Les connecteurs logiques','',[
    ['Il pleuvait, ___ nous sommes restés à la maison.',['donc','pourtant','bien que'],0],['Elle est malade ; ___, elle travaille.',['pourtant','donc','parce que'],0],['___ il fasse froid, il sort en t-shirt.',['Bien qu’','Parce qu’','Donc'],0],
    GAP('Je suis resté chez moi ___ j’étais malade. (porque)','parce que|car'),MAT('Ligue.',[['cependant','contudo'],['ainsi','assim'],['grâce à','graças a'],['à cause de','por causa de']]),
    TF('« Bien que » est suivi du subjonctif.',true)]],
  ['B2','Expressões','Tu ou vous ? Les registres','',[
    ['Au travail, avec un client, on utilise…',['vous','tu'],0],['Avec un ami, on utilise…',['tu','vous'],0],
    MAT('Ligue o informal ao formal.',[['Salut !','Bonjour, Madame.'],['T’as faim ?','Avez-vous faim ?'],['Merci !','Je vous remercie.'],['Ouais.','Oui.']]),
    TF('À l’oral, « on » remplace souvent « nous ».',true),GAP('Est-ce que je peux vous ___ ? (tutear)','tutoyer'),['« Bouquin », en langage familier, c’est…',['un livre','un bateau','un bouquet'],0]]],
  ['B2','Expressões','Expressions idiomatiques II','',[
    ['« Mettre les pieds dans le plat » veut dire…',['dizer algo inconveniente','cozinhar mal','pisar no prato'],0],['« Avoir un poil dans la main » veut dire…',['ser preguiçoso','ser cabeludo','ser habilidoso'],0],
    ['« Ce n’est pas la mer à boire » veut dire…',['não é tão difícil','é impossível','estou com sede'],0],
    MAT('Ligue.',[['avoir le bras long','ser influente'],['être dans la lune','estar no mundo da lua'],['raconter des salades','contar mentiras'],['faire la grasse matinée','dormir até tarde']]),
    TF('« Quand les poules auront des dents » veut dire « jamais ».',true),GAP('Il ne faut pas vendre la peau de l’___ avant de l’avoir tué.','ours')]],
  ['B2','Vocabulário','Les médias et l’actualité','',[
    MAT('Ligue.',[['le gros titre','manchete'],['un journaliste','jornalista'],['les infos','as notícias'],['une fausse nouvelle','notícia falsa'],['un abonnement','assinatura']]),
    ['Le journal télévisé, c’est…',['o telejornal','a novela','o jornal impresso'],0],['« Atualmente » en français, c’est…',['actuellement','actualité','actuel'],0],
    GAP('Tu as vu les ___ ce matin ? (notícias, informal)','infos|informations|nouvelles'),TF('« L’actualité » veut dire as notícias do momento.',true),'Comment vous informez-vous ? Vos sources sont-elles fiables ? (40–60 mots)']],
  ['B2','Leitura','Lecture · Les réseaux sociaux',READF.rs,[
    TF('Les jeunes passent moins d’une heure par jour sur les réseaux sociaux.',false),TF('Certaines écoles interdisent le portable en classe.',true),
    ['Quel est un avantage des réseaux sociaux ?',['garder le contact avec ses proches','dormir mieux','gagner de l’argent'],0],['Que recommandent les spécialistes ?',['un usage critique','une interdiction totale','plus d’heures d’écran'],0],
    GAP('Un des risques est la diffusion de fausses ___.','informations'),'Et vous, combien de temps passez-vous sur les réseaux sociaux ? Est-ce trop ? (60–80 mots)']],
  ['B2','Escrita','La lettre de réclamation','',[
    ['Pour commencer :',['Madame, Monsieur,','Coucou,','Hé !'],0],
    MAT('Ligue.',[['Je vous écris pour me plaindre de…','Escrevo para reclamar de…'],['un remboursement','reembolso'],['Je vous serais reconnaissant de…','Eu agradeceria se…'],['Veuillez agréer mes salutations distinguées.','Atenciosamente (formal).']]),
    ['Quelle phrase est la plus formelle ?',['Réparez ça tout de suite !','Je vous prie de bien vouloir remplacer l’article.','Bon, vous pouvez changer ça ?'],1],
    ORD('Je vous remercie par avance de votre réponse.'),'Écrivez une lettre de réclamation (100–120 mots) : votre commande est arrivée en retard et abîmée.']],
  ['B2','Trabalho','Les réunions','',[
    MAT('Ligue.',[['l’ordre du jour','pauta'],['le compte rendu','ata'],['le délai','prazo'],['faire le point','fazer um balanço'],['reporter','adiar']]),
    ['« Vamos começar? » :',['On commence ?','On termine ?','On mange ?'],0],['« Posso interromper? » :',['Excusez-moi de vous interrompre, mais…','Je coupe maintenant.','Arrête de parler.'],0],
    GAP('Passons au point suivant de l’ordre du ___.','jour'),TF('« Faire le point » veut dire faire un bilan de la situation.',true),ORD('Pourriez-vous m’envoyer le compte rendu ?')]],
  /* ---------- C1 ---------- */
  ['C1','Conjugação','Le subjonctif passé','',[
    ['Je suis content que tu ___ venu.',['sois','es','seras'],0],['Bien qu’elle ___ beaucoup étudié, elle a échoué.',['ait','a','avait'],0],['Il est dommage qu’ils n’___ pas pu venir.',['aient','ont','auront'],0],
    GAP('Je regrette que vous ___ parti si tôt. (être)','soyez'),TF('Le subjonctif passé exprime une action antérieure.',true),ORD('Je ne crois pas qu’il ait compris.')]],
  ['C1','Gramática','La concordance des temps','',[
    ['Il pensait que tu ___ venir.',['pourrais','pourras','peux'],0],['Elle m’a dit qu’elle ___ déjà ___ ce film.',['avait / vu','a / vu','aura / vu'],0],['Il a affirmé qu’il ___ le lendemain.',['partirait','partira','part'],0],
    GAP('Je savais qu’il ___ (être) en retard.','serait'),TF('Après un verbe introducteur au passé, le futur devient conditionnel.',true),ORD('Nous croyions que vous étiez déjà partis.')]],
  ['C1','Gramática','La nominalisation','',[
    ['Le nom de « décider », c’est…',['la décision','le décidement','la décidance'],0],['Le nom de « augmenter », c’est…',['l’augmentation','l’augmentage','l’augmente'],0],
    GAP('Le nom de « développer », c’est le ___.','développement'),GAP('Le nom de « réussir », c’est la ___.','réussite'),
    MAT('Ligue.',[['partir','le départ'],['arriver','l’arrivée'],['choisir','le choix'],['vendre','la vente']]),TF('La nominalisation est fréquente dans les titres de presse.',true)]],
  ['C1','Gramática','Participe présent et adjectif verbal','',[
    ['Les enfants ___ dans le parc sont bruyants. (jouer)',['jouant','jouants','joués'],0],['C’est une histoire ___.',['passionnante','passionnant','passionnée'],0],
    GAP('Ayant ___ (finir) mon travail, je suis sorti.','fini'),TF('L’adjectif verbal s’accorde ; le participe présent ne s’accorde pas.',true),
    ['« Négligent » (adjectif) et « négligeant » (participe)…',['s’écrivent différemment','s’écrivent de la même façon','n’existent pas'],0],ORD('Ne sachant pas quoi dire, il est resté silencieux.')]],
  ['C1','Expressões','Les proverbes','',[
    MAT('Ligue ao equivalente em português.',[['Mieux vaut tard que jamais.','Antes tarde do que nunca.'],['L’habit ne fait pas le moine.','O hábito não faz o monge.'],['Qui se ressemble s’assemble.','Diga-me com quem andas…'],['Petit à petit, l’oiseau fait son nid.','De grão em grão…']]),
    ['« Après la pluie, le beau temps » veut dire…',['depois da tempestade vem a bonança','vai chover amanhã','o tempo voa'],0],
    ['« Quand le chat n’est pas là, les souris dansent » :',['Quando o gato sai, os ratos fazem a festa.','Gato escaldado tem medo de água fria.','À noite todos os gatos são pardos.'],0],
    TF('« Mettre la charrue avant les bœufs » veut dire fazer as coisas na ordem errada.',true),GAP('Qui ne risque rien n’a ___.','rien')]],
  ['C1','Vocabulário','Le registre soutenu','',[
    MAT('Ligue o comum ao formal.',[['commencer','débuter'],['finir','achever'],['demander','solliciter'],['aider','assister'],['donner','fournir']]),
    ['Quelle phrase est la plus soutenue ?',['Il est parti en vitesse.','Il s’est éclipsé promptement.','Il a filé.'],1],['« Bagnole » est un mot…',['familier','soutenu','technique'],0],
    GAP('Je vous prie de bien vouloir m’___ un rendez-vous. (conceder)','accorder'),TF('« Néanmoins » appartient plutôt au registre soutenu.',true),
    'Réécrivez en registre soutenu : « Salut, tu peux m’envoyer les trucs vite fait ? Merci ! »']],
  ['C1','Leitura','Lecture · Le droit à la déconnexion',READF.deco,[
    TF('Le droit à la déconnexion existe en France depuis 2017.',true),TF('Tous les salariés respectent parfaitement cette règle.',false),
    ['Quel est l’objectif de cette loi ?',['préserver la santé mentale','augmenter les salaires','réduire les impôts'],0],['Que réclament les syndicats ?',['des sanctions plus strictes','moins de vacances','plus de réunions'],0],
    GAP('Certains cadres consultent leur ___ tard le soir.','messagerie'),'Faudrait-il une loi semblable au Brésil ? Justifiez votre réponse (80–100 mots).']],
  ['C1','Escrita','Les connecteurs de la dissertation','',[
    MAT('Ligue à função.',[['En outre','adição'],['Néanmoins','oposição'],['Par conséquent','consequência'],['Par exemple','exemplo'],['En définitive','conclusão']]),
    ['___ son coût élevé, le projet a été accepté.',['Malgré','Bien que','Car'],0],['Les résultats sont clairs ; ___, d’autres études sont nécessaires.',['toutefois','parce que','car'],0],
    GAP('D’une part, la ville offre des emplois ; d’autre ___, elle coûte cher.','part'),TF('« Tandis que » sert à opposer deux idées.',true),
    'Rédigez une introduction (60–80 mots) : « La technologie nous rend-elle plus libres ? »']],
];
