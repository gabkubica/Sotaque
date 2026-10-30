/* =========================================================
   Sotaque · trilhas por nível (inglês e francês)
   Cada marco: [o que o aluno consegue fazer, o que ele aprende, títulos de tarefas do banco]
   As tarefas servem de treino e de fonte para a provinha do marco.
   ========================================================= */
const TRILHAS={
  EN:{
    A1:[
      ['Consigo me apresentar e cumprimentar','Verb to be, cumprimentos e perguntas básicas',['Greetings and introductions','Verb to be','A or an?','Question words']],
      ['Consigo falar da minha família e dizer números','Família, possessivos, números e idade',['Family members','Possessive adjectives','Numbers and age','Reading · Anna’s family']],
      ['Consigo descrever pessoas e coisas','Cores, roupas, plurais, this/that e have got',['Colours and clothes','Plurals','This, that, these, those','Have got and has got']],
      ['Consigo falar da minha casa e de onde moro','Cômodos, there is/are e preposições de lugar',['House and rooms','There is and there are','Prepositions of place']],
      ['Consigo contar a minha rotina','Present simple, horas, dias, meses e imperativo',['Present simple · I, you, we, they','Telling the time','Days, months and seasons','Imperatives','Reading · Tom’s day']],
      ['Consigo falar do tempo e de datas especiais','Clima, feriados, sala de aula e sons do inglês',['The weather','Holidays','In the classroom','Sounds and rhymes']],
    ],
    A2:[
      ['Consigo falar dos meus hábitos','Present simple, frequência e gostos',['Present simple · daily routine','Adverbs of frequency','Like, love, hate + -ing','Hobbies and free time']],
      ['Consigo descrever o que está acontecendo','Present continuous e sentimentos',['Present continuous','Present simple or continuous?','Feelings']],
      ['Consigo contar o que aconteceu','Was/were e past simple',['Was and were','Past simple · regular verbs','Past simple · questions and negatives','Reading · A weekend in Rio']],
      ['Consigo fazer planos e falar de regras','Going to, preposições de tempo, can e must',['Going to · plans','In, on, at · time','Can and can’t','Must and mustn’t · rules']],
      ['Consigo me virar na cidade e nas compras','Compras, transporte, direções e quantidades',['Shopping','Transport','Directions in the city','Prepositions of place II','Some, any, much, many']],
      ['Consigo conversar no dia a dia e no trabalho','Small talk, telefone, restaurante e trabalho',['Small talk','On the phone','Introducing yourself at work','At the restaurant','Object pronouns','Possessive ’s']],
    ],
    B1:[
      ['Consigo contar histórias do passado','Passado simples, contínuo, perfeito e used to',['Past simple · irregular verbs','Past continuous or past simple?','Past perfect','Used to']],
      ['Consigo falar das minhas experiências','Present perfect e present perfect continuous',['Present perfect or past simple?','Present perfect · for and since','Present perfect continuous','Reading · A week without social media']],
      ['Consigo falar do futuro e de possibilidades','Will, going to, zero e first conditional',['Will or going to?','Zero conditional','First conditional']],
      ['Consigo comparar e dar conselhos','Comparativos, modais de conselho, too/enough e so/such',['Comparatives and superlatives','Should, must, have to','Too and enough','So and such']],
      ['Consigo conversar com naturalidade','Question tags, opinião, sugestões e phrasal verbs',['Question tags','Agreeing and disagreeing','Making suggestions','Everyday chunks','Phrasal verbs with get','Phrasal verbs with look']],
      ['Consigo me comunicar em viagens e no trabalho','Aeroporto, entrevista, e-mails e dinheiro',['Travel and airports','Job interviews','Writing work emails','Money']],
    ],
    B2:[
      ['Consigo relatar o que outras pessoas disseram','Reported speech, perguntas indiretas e narrativa',['Reported speech','Indirect questions','Narrative tenses']],
      ['Consigo usar a voz passiva com segurança','Passiva, passiva com modais e have something done',['Passive voice','Passive with modals','Have something done']],
      ['Consigo fazer deduções e hipóteses','Modais de dedução, second conditional e futuros',['Modals of deduction','Second conditional','Future continuous and future perfect']],
      ['Consigo construir frases mais complexas','Orações relativas, gerúndio, conectores e used to',['Relative clauses','Gerund or infinitive?','Linking words','Used to, be used to, get used to']],
      ['Consigo usar phrasal verbs e expressões','Phrasal verbs do dia a dia e idioms',['Phrasal verbs do dia a dia','Phrasal verbs for relationships','Phrasal verbs with come and go','Idioms with body parts']],
      ['Consigo participar de reuniões e negociar','Reuniões, negociação e polidez',['Meetings','Negotiating','Phrasal verbs at work','Politeness in English']],
    ],
    C1:[
      ['Consigo falar de hipóteses complexas','Condicionais mistas, wish e if only',['Conditionals · review','Third and mixed conditionals','Wish and if only']],
      ['Consigo dar ênfase e variar a estrutura','Inversão, cleft sentences e ênfase',['Inversion','Cleft sentences','Emphasis with do and did']],
      ['Consigo escrever em registro formal','Passiva avançada, subjuntivo e registro',['Advanced passive','The subjunctive','Formal or informal?','Formal business writing']],
      ['Consigo usar um vocabulário preciso','Collocations, vocabulário acadêmico e binomials',['Collocations','Collocations II','Academic vocabulary','Binomials']],
      ['Consigo usar expressões idiomáticas','Idioms, provérbios e phrasal verbs avançados',['Everyday idioms','Business idioms','Idioms with colours','Proverbs','Advanced phrasal verbs']],
    ],
  },
  FR:{
    A1:[
      ['Consigo me apresentar e cumprimentar','Cumprimentos, se présenter, être e avoir',['Les salutations','Se présenter','Être et avoir']],
      ['Consigo falar da família e dizer números','Família, números e artigos',['La famille','Les nombres','Les articles']],
      ['Consigo contar a minha rotina','Verbos em -er, dias e meses',['Les verbes en -er','Les jours et les mois','Lecture · Je m’appelle Léa']],
      ['Consigo fazer perguntas e responder','Perguntas, negação e cores',['Poser des questions','La négation','Les couleurs']],
      ['Conheço os sons e as festas do francês','Pronúncia e cultura',['Les sons du français','Les fêtes en France']],
    ],
    A2:[
      ['Consigo contar o que fiz','Passé composé com avoir e être',['Passé composé avec avoir','Passé composé avec être','Lecture · Un week-end à Lyon']],
      ['Consigo falar dos meus planos e da rotina','Futur proche, pronominais e lazer',['Le futur proche','Les verbes pronominaux','Les loisirs']],
      ['Consigo me virar no restaurante e nas compras','Restaurante, partitivos e roupas',['Au restaurant','Les articles partitifs','Les vêtements et les courses']],
      ['Consigo me localizar e viajar','Cidade, preposições com países e francofonia',['En ville','À, en, au, aux','La francophonie']],
      ['Consigo falar de mim e do trabalho','Possessivos, expressões com avoir e trabalho',['Les adjectifs possessifs','Les expressions avec avoir','Se présenter au travail']],
    ],
    B1:[
      ['Consigo contar histórias do passado','Imparfait e passé composé',['Imparfait ou passé composé ?','Lecture · Une année à Montréal']],
      ['Consigo falar do futuro e fazer pedidos educados','Futur simple, conditionnel e e-mails',['Le futur simple','Le conditionnel présent','L’e-mail professionnel']],
      ['Consigo usar pronomes sem repetir palavras','COD, COI, y, en e relativos',['Les pronoms COD et COI','Les pronoms y et en','Les pronoms relatifs']],
      ['Consigo comparar e dar opiniões','Comparativos, subjuntivo e meio ambiente',['Comparatif et superlatif','Le subjonctif · il faut que','L’environnement']],
      ['Consigo conversar com naturalidade','Expressões, falsos cognatos, pronúncia e cotidiano',['Expressions idiomatiques','Faux amis · português e francês','Liaisons et lettres muettes','La santé']],
    ],
    B2:[
      ['Consigo expressar dúvidas e sentimentos','Subjuntivo e conectores',['Le subjonctif · doute et sentiments','Les connecteurs logiques']],
      ['Consigo falar de hipóteses e do passado','Hipóteses com si e plus-que-parfait',['Les hypothèses avec si','Le plus-que-parfait']],
      ['Consigo relatar e transformar frases','Discurso indireto, passiva e gerúndio',['Le discours indirect','La voix passive','Le gérondif']],
      ['Consigo adaptar o registro','Tu ou vous, expressões, reuniões e mídia',['Tu ou vous ? Les registres','Expressions idiomatiques II','Les réunions','Les médias et l’actualité']],
    ],
    C1:[
      ['Consigo dominar os tempos verbais','Subjonctif passé e concordância dos tempos',['Le subjonctif passé','La concordance des temps']],
      ['Consigo escrever com estilo','Nominalização, particípio e dissertação',['La nominalisation','Participe présent et adjectif verbal','Les connecteurs de la dissertation']],
      ['Consigo usar o registro soutenu','Registro formal, provérbios e leitura',['Le registre soutenu','Les proverbes','Lecture · Le droit à la déconnexion']],
    ],
  },
};
const MARCO_SCENES=['amanhecer','livro','conversa','mar','aviao','globo','arcos','disco'];
/* lista de marcos com id estável: EN-A1-1, FR-B2-3… */
function marcosOf(lang,level){
  return (TRILHAS[lang]?.[level]||[]).map(([can,learn,tasks],k)=>({id:`${lang}-${level}-${k+1}`,n:k+1,lang,level,can,learn,tasks,scene:MARCO_SCENES[k%MARCO_SCENES.length]}));
}
const marcoById=id=>{ const [lang,level]=id.split('-'); return marcosOf(lang,level).find(m=>m.id===id); };
