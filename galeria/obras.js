/* =====================================================================
   Galeria · TODOS OS DADOS DO SITE (EXEMPLOS: trocar pelos reais)
   ---------------------------------------------------------------------
   Para mudar o site, basta editar este arquivo.

   OBRA:   id (curto, sem espaço), titulo, artista (id do artista), serie (id da série),
           tecnica, medidas:[altura, largura] em cm, ano, preco (R$; 0 = sob consulta),
           status: 'disponivel' | 'reservada' | 'vendida',
           cores: lista com 'vermelho' 'amarelo' 'verde' 'azul' 'roxo' 'terroso' (usada no filtro de cor),
           destaque:true (entra no slideshow da abertura), desc (texto curto),
           e a imagem: foto:'fotos/arquivo.jpg' (quando houver) ou arte:[paleta, cena] (pintura de exemplo).
   Depois de trocar os dados, rode  node galeria/ferramentas/gerar.js  para refazer
   as páginas de compartilhamento (imagem do link no WhatsApp) e o sitemap do Google.
   ===================================================================== */
const GAL={
  nome:'Nome da Galeria',
  lema:'Pintura brasileira contemporânea, de família',
  descricao:'Obras originais de dois pintores da mesma família. Telas únicas, assinadas, com certificado de autenticidade e envio para todo o Brasil.',
  site:'https://gabkubica.github.io/Sotaque/galeria/',      // endereço público (para os links compartilhados)
  contato:{
    whatsapp:'5541900000000', email:'contato@exemplo.com', instagram:'@exemplo',
    endereco:'Rua Exemplo, 123 · Curitiba, PR', horario:'Visitas ao ateliê com hora marcada, de terça a sábado',
  },
  /* Pagamento: até `parcelas` vezes sem juros (parcela mínima `parcelaMin`) e `pix`% de desconto no Pix */
  pagamento:{parcelas:10, parcelaMin:150, pix:5},

  artistas:[
    {id:'a1', nome:'Artista 1', retrato:['terracota','planta'], cidade:'Curitiba, PR', desde:1985, tecnica:'Óleo sobre tela',
     bio:'Pinta há quatro décadas paisagens e interiores cheios de luz. Começou com aquarela e encontrou no óleo sobre tela a sua linguagem: cores chapadas, formas simples e muito silêncio.',
     citacao:'Eu pinto a luz que entra pela janela às sete da manhã. O resto é paciência.',
     expos:['Salão de Artes de Curitiba, 2019','Coletiva “Luz do Sul”, 2022','Individual “Horas”, 2024']},
    {id:'a2', nome:'Artista 2', retrato:['petroleo','mar'], cidade:'Florianópolis, SC', desde:1990, tecnica:'Acrílica sobre tela',
     bio:'Mar, montanhas e cidades vistos de longe. Trabalha com acrílica em camadas finas, buscando a calma das horas do dia: amanhecer, meio-dia e noite. Nos últimos anos, também pinta geometrias.',
     citacao:'O horizonte é a linha mais bonita que existe. Passo a vida tentando acertá-la.',
     expos:['Mostra Litoral, 2018','Individual “Horizontes”, 2023','Feira de Arte do Sul, 2025']},
  ],

  series:[
    {id:'horas', nome:'Horas do dia', artista:'a1', anos:'2022–2024', capa:'o1',
     texto:'O mesmo vale pintado do amanhecer à noite. A série nasceu de um caderno de esboços feito na varanda do ateliê, sempre no mesmo lugar, em horários diferentes.'},
    {id:'interiores', nome:'Interiores', artista:'a1', anos:'2021–2025', capa:'o6',
     texto:'Objetos da casa e da cozinha: a planta, o café, as uvas da feira, a cadeira da avó. Naturezas-mortas pequenas, para paredes do dia a dia.'},
    {id:'litoral', nome:'Litoral', artista:'a2', anos:'2020–2024', capa:'o2',
     texto:'O mar de Santa Catarina em tons de verde-água e rosa. Pinceladas horizontais e poucos elementos: um barco, um cardume, o sol baixo.'},
    {id:'serra', nome:'Serra e cidade', artista:'a2', anos:'2021–2025', capa:'o4',
     texto:'A viagem do litoral para a serra: a cidade vista do morro, as montanhas no inverno, o trem e os campos abertos.'},
    {id:'geometrias', nome:'Geometrias', artista:'a2', anos:'2025–2026', capa:'o17',
     texto:'A série mais nova: arcos, círculos e listras. A paisagem vira forma e a cor fica sozinha no quadro.'},
  ],

  obras:[
    {id:'o1', titulo:'Amanhecer no vale', artista:'a1', serie:'horas', tecnica:'Óleo sobre tela', medidas:[60,80], ano:2024, preco:4800, status:'disponivel', cores:['amarelo','terroso'], destaque:true, arte:['mostarda','amanhecer'],
     desc:'O sol nasce devagar sobre os morros. A primeira tela da série “Horas do dia”, pintada em camadas de amarelo e ocre.'},
    {id:'o2', titulo:'Maré mansa', artista:'a2', serie:'litoral', tecnica:'Acrílica sobre tela', medidas:[70,100], ano:2023, preco:6200, status:'disponivel', cores:['verde','azul'], destaque:true, arte:['petroleo','mar'],
     desc:'Um barco solitário e o mar quase parado. Tons de verde-água em pinceladas horizontais.'},
    {id:'o3', titulo:'Noite em casa', artista:'a1', serie:'horas', tecnica:'Óleo sobre tela', medidas:[60,60], ano:2022, preco:3900, status:'vendida', cores:['roxo','azul'], destaque:true, arte:['lavanda','noite'],
     desc:'As luzes das casas acesas sob um céu de estrelas.'},
    {id:'o4', titulo:'Cidade ao longe', artista:'a2', serie:'serra', tecnica:'Acrílica sobre tela', medidas:[80,120], ano:2024, preco:8500, status:'disponivel', cores:['terroso','vermelho'], destaque:true, arte:['terracota','cidade'],
     desc:'Prédios em tons de terra vistos do alto do morro, no fim da tarde.'},
    {id:'o5', titulo:'Montanha azul', artista:'a2', serie:'serra', tecnica:'Acrílica sobre tela', medidas:[50,70], ano:2021, preco:3200, status:'reservada', cores:['azul'], arte:['ceu','montanha'],
     desc:'A serra no inverno, com nuvens baixas e a primeira neve no pico.'},
    {id:'o6', titulo:'Vaso na janela', artista:'a1', serie:'interiores', tecnica:'Óleo sobre tela', medidas:[50,40], ano:2023, preco:2600, status:'disponivel', cores:['verde'], arte:['menta','planta'],
     desc:'Natureza-morta com a planta da cozinha e a luz da manhã.'},
    {id:'o7', titulo:'Vindima', artista:'a1', serie:'interiores', tecnica:'Óleo sobre tela', medidas:[100,70], ano:2024, preco:0, status:'disponivel', cores:['roxo','vermelho'], destaque:true, arte:['ameixa','uvas'],
     desc:'Cachos de uva em tons de ameixa. Tela de grande formato, preço sob consulta.'},
    {id:'o8', titulo:'Balão sobre o campo', artista:'a2', serie:'serra', tecnica:'Acrílica sobre tela', medidas:[80,60], ano:2022, preco:3500, status:'disponivel', cores:['vermelho'], arte:['rosa','balao'],
     desc:'Um balão atravessa o céu rosado. Leve e alegre.'},
    {id:'o9', titulo:'Café das sete', artista:'a1', serie:'interiores', tecnica:'Óleo sobre tela', medidas:[40,30], ano:2025, preco:1800, status:'disponivel', cores:['terroso'], arte:['terracota','xicara'],
     desc:'A xícara fumegando na mesa da cozinha. Pequena, para cantinhos e corredores.'},
    {id:'o10', titulo:'A cadeira da avó', artista:'a1', serie:'interiores', tecnica:'Óleo sobre tela', medidas:[70,50], ano:2021, preco:2900, status:'vendida', cores:['verde'], arte:['oliva','cadeira'],
     desc:'A cadeira de palha que ficava na varanda da casa da família.'},
    {id:'o11', titulo:'Flor do quintal', artista:'a1', serie:'interiores', tecnica:'Óleo sobre tela', medidas:[60,40], ano:2025, preco:2400, status:'disponivel', cores:['vermelho','verde'], arte:['rosa','flor'],
     desc:'Uma flor só, contra um fundo rosado. Pintada numa manhã de primavera.'},
    {id:'o12', titulo:'Tarde na vila', artista:'a1', serie:'horas', tecnica:'Óleo sobre tela', medidas:[90,90], ano:2024, preco:6800, status:'disponivel', cores:['amarelo','terroso'], arte:['mostarda','casa'],
     desc:'As casas da vila no meio da tarde, quando o sol deixa tudo dourado.'},
    {id:'o13', titulo:'Fim de tarde na praia', artista:'a2', serie:'litoral', tecnica:'Acrílica sobre tela', medidas:[80,60], ano:2024, preco:4200, status:'disponivel', cores:['vermelho'], destaque:true, arte:['rosa','mar'],
     desc:'O sol baixo pinta o mar de rosa. Um veleiro volta para a marina.'},
    {id:'o14', titulo:'Cardume', artista:'a2', serie:'litoral', tecnica:'Acrílica sobre tela', medidas:[100,70], ano:2020, preco:5400, status:'disponivel', cores:['azul'], arte:['ceu','peixes'],
     desc:'Peixes azuis atravessando a tela de cima a baixo, como se a parede fosse um aquário.'},
    {id:'o15', titulo:'Trem da serra', artista:'a2', serie:'serra', tecnica:'Acrílica sobre tela', medidas:[50,100], ano:2025, preco:5900, status:'disponivel', cores:['verde'], arte:['oliva','trem'],
     desc:'O trem antigo subindo a serra entre os campos. Formato panorâmico, ótimo sobre sofás e aparadores.'},
    {id:'o16', titulo:'Árvore solitária', artista:'a2', serie:'serra', tecnica:'Acrílica sobre tela', medidas:[40,40], ano:2023, preco:1900, status:'disponivel', cores:['verde'], arte:['menta','arvore'],
     desc:'Uma árvore carregada de frutos no meio do campo. Pequena e quadrada.'},
    {id:'o17', titulo:'Arcos I', artista:'a2', serie:'geometrias', tecnica:'Acrílica sobre tela', medidas:[100,80], ano:2026, preco:7200, status:'disponivel', cores:['verde'], destaque:true, arte:['oliva','arcos'],
     desc:'Arcos verdes que lembram um túnel de folhas. A primeira tela da série “Geometrias”.'},
    {id:'o18', titulo:'Sol listrado', artista:'a2', serie:'geometrias', tecnica:'Acrílica sobre tela', medidas:[120,90], ano:2026, preco:9600, status:'disponivel', cores:['terroso','vermelho'], arte:['terracota','estampa'],
     desc:'Um círculo grande sobre listras diagonais. Tela de grande formato, para salas amplas.'},
  ],

  /* Encomendas: tamanhos de referência [altura, largura, preço a partir de R$] e prazo */
  encomenda:{prazo:'30 a 60 dias', tamanhos:[[30,40,1500],[40,50,1900],[50,70,2800],[60,80,3600],[70,100,4900],[80,120,6500],[100,150,9500]]},

  /* Exposições e notícias. tipo: 'exposicao' ou 'noticia'. Datas no formato AAAA-MM-DD. */
  agenda:[
    {id:'e1', tipo:'exposicao', titulo:'Horas — pinturas de Artista 1', inicio:'2026-11-05', fim:'2027-01-20', local:'Espaço Cultural Exemplo · Curitiba, PR', capa:'o1', obras:['o1','o3','o12'],
     texto:'Individual com as telas da série “Horas do dia”, do amanhecer à noite. Entrada gratuita, de terça a domingo, das 10h às 18h.'},
    {id:'e2', tipo:'exposicao', titulo:'Geometrias — novas telas de Artista 2', inicio:'2027-03-10', fim:'2027-04-25', local:'Galeria Exemplo · Florianópolis, SC', capa:'o17', obras:['o17','o18'],
     texto:'Primeira exposição da série “Geometrias”, com telas inéditas pintadas em 2026. Abertura com a presença do artista.'},
    {id:'e3', tipo:'exposicao', titulo:'Litoral e serra (coletiva)', inicio:'2025-08-02', fim:'2025-09-14', local:'Casa de Cultura Exemplo · Joinville, SC', capa:'o2', obras:['o2','o4','o14'],
     texto:'Os dois artistas lado a lado pela primeira vez: o mar de um e a serra do outro.'},
    {id:'n1', tipo:'noticia', titulo:'Novas telas da série “Interiores”', data:'2026-10-12', capa:'o9', obras:['o9','o11'],
     texto:'Chegaram ao site duas telas pequenas da série “Interiores”, ótimas para presentear: “Café das sete” e “Flor do quintal”.'},
    {id:'n2', tipo:'noticia', titulo:'Ateliê aberto em dezembro', data:'2026-09-28', capa:'o6',
     texto:'Nos sábados de dezembro, o ateliê abre para visitas sem hora marcada. Venha ver as telas de perto e tomar um café com os artistas.'},
  ],

  /* Página do ateliê e do processo. Imagens: foto:'fotos/...' ou arte:[paleta, cena] (exemplo). */
  atelie:{
    texto:'O ateliê fica nos fundos da casa da família, em Curitiba: uma sala com janelas grandes viradas para o sul, onde a luz é mais constante. É ali que as telas são esboçadas, pintadas, secas e embaladas.',
    imagens:[{arte:['oliva','casa'], legenda:'A casa e o ateliê nos fundos'},{arte:['mostarda','planta'], legenda:'A janela virada para o sul'},{arte:['terracota','xicara'], legenda:'O café da pausa'}],
    processo:[
      {titulo:'Ideia e esboço', texto:'Tudo começa no caderno: desenhos rápidos a lápis e estudos de cor em papel, às vezes dezenas antes da tela.', arte:['mostarda','lapis']},
      {titulo:'Preparação da tela', texto:'A tela de algodão é esticada no chassi de madeira e recebe duas ou três demãos de base (gesso acrílico), lixadas entre uma e outra.', arte:['terracota','estampa']},
      {titulo:'Primeiras camadas', texto:'As grandes áreas de cor entram primeiro, com tinta mais diluída. É a fase de acertar a composição e a luz.', arte:['ceu','montanha']},
      {titulo:'Detalhes', texto:'Camada por camada, as formas ganham contorno. Uma tela média leva de duas a seis semanas, conforme a secagem.', arte:['menta','planta']},
      {titulo:'Assinatura e verniz', texto:'Seca, a tela é assinada, recebe verniz de proteção e uma etiqueta no verso com título, data e técnica.', arte:['ameixa','uvas']},
      {titulo:'Certificado e embalagem', texto:'Cada obra sai com certificado de autenticidade assinado e embalagem em camadas: papel, plástico-bolha, cantoneiras e caixa.', arte:['rosa','presente']},
    ],
    materiais:['Tintas a óleo e acrílicas profissionais','Telas de algodão em chassi de madeira','Pincéis de cerda e sintéticos','Verniz final com proteção UV'],
  },

  /* Perguntas frequentes e políticas. As respostas podem usar {parcelas}, {parcelaMin} e {pix}. */
  faq:[
    {grupo:'Pagamento e parcelamento', id:'pagamento', itens:[
      ['Quais são as formas de pagamento?','Pix, transferência bancária e cartão de crédito (por link de pagamento). No Pix, a obra sai com {pix}% de desconto.'],
      ['Posso parcelar?','Sim, em até {parcelas}× sem juros no cartão, com parcela mínima de R$ {parcelaMin}. O valor das parcelas aparece na página de cada obra.'],
      ['Posso reservar uma obra?','Sim. Com um sinal de 30%, a obra fica reservada por até 15 dias.'],
    ]},
    {grupo:'Frete e entrega', id:'frete', itens:[
      ['Vocês enviam para todo o Brasil?','Sim. Telas pequenas e médias vão pelos Correios ou transportadora; telas grandes, por transportadora especializada em obras de arte. O frete é calculado pelo CEP e informado antes do pagamento.'],
      ['Como a obra é embalada?','Em camadas: papel neutro, plástico-bolha, cantoneiras nos quatro cantos e caixa de papelão rígido. Telas grandes vão em caixa de madeira.'],
      ['Qual é o prazo de entrega?','A obra é despachada em até 5 dias úteis depois do pagamento. O prazo do transporte depende da região (em geral de 3 a 12 dias úteis).'],
      ['O envio tem seguro?','Sim, todas as obras viajam com seguro pelo valor da venda.'],
      ['Posso retirar no ateliê?','Pode, sem custo, com hora marcada.'],
    ]},
    {grupo:'Certificado de autenticidade', id:'certificado', itens:[
      ['A obra vem com certificado?','Sim. Cada obra acompanha certificado de autenticidade assinado pelo artista, com foto, título, técnica, medidas e data.'],
      ['A obra vem assinada?','Sim, na frente (canto inferior) e no verso, junto com o título e o ano.'],
    ]},
    {grupo:'Trocas e devoluções', id:'trocas', itens:[
      ['Posso devolver uma obra?','Nas compras pela internet, você tem 7 dias corridos a partir do recebimento para desistir da compra (direito de arrependimento), com devolução integral do valor. A obra deve voltar na embalagem original e sem danos.'],
      ['E se a obra chegar danificada?','Fotografe a embalagem e a obra e fale conosco em até 48 horas. Acionamos o seguro e resolvemos com troca, restauro ou reembolso, como você preferir.'],
      ['Obras sob encomenda podem ser devolvidas?','Como são feitas sob medida e aprovadas por você em cada etapa (esboço e fotos do processo), as condições de encomenda são combinadas por escrito antes do início.'],
    ]},
    {grupo:'Encomendas', id:'encomendas', itens:[
      ['Qual é o prazo de uma encomenda?','De 30 a 60 dias, conforme o tamanho e a técnica (o óleo seca mais devagar). O prazo exato é combinado no orçamento.'],
      ['Como funciona o pagamento da encomenda?','50% na aprovação do esboço e 50% na entrega. Também dá para parcelar no cartão.'],
      ['Posso escolher tamanho e cores?','Sim: tamanho, cores, tema e até o ambiente onde a tela vai ficar. O artista envia um esboço antes de começar.'],
    ]},
  ],
};
