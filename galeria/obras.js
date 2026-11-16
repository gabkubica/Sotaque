/* Galeria · dados (EXEMPLOS: trocar pelas obras, artistas e contatos reais)
   Cada obra: id, titulo, artista (id), tecnica, medidas, ano, preco (R$, 0 = sob consulta), status (disponivel|reservada|vendida),
   desc, e a imagem: foto:'fotos/arquivo.jpg' (quando houver) ou arte:[paleta, cena] (pintura de exemplo gerada). */
const GAL={
  nome:'Nome da Galeria', lema:'Pintura brasileira contemporânea, de família',
  contato:{whatsapp:'5511900000000', email:'contato@exemplo.com', instagram:'@exemplo'},
  artistas:[
    {id:'a1',nome:'Artista 1',foto:['terracota','planta'],cidade:'Curitiba, PR',desde:1985,bio:'Pinta há quatro décadas paisagens e interiores cheios de luz. Começou com aquarela e encontrou no óleo sobre tela a sua linguagem: cores chapadas, formas simples e muito silêncio. (Texto de exemplo.)',expos:['Salão de Artes de Curitiba, 2019','Coletiva “Luz do Sul”, 2022']},
    {id:'a2',nome:'Artista 2',foto:['petroleo','mar'],cidade:'Florianópolis, SC',desde:1990,bio:'Mar, montanhas e cidades vistos de longe. Trabalha com acrílica e camadas finas de tinta, buscando a calma das horas do dia: amanhecer, meio-dia e noite. (Texto de exemplo.)',expos:['Mostra Litoral, 2018','Individual “Horizontes”, 2023']},
  ],
  obras:[
    {id:'o1',titulo:'Amanhecer no vale',artista:'a1',tecnica:'Óleo sobre tela',medidas:'80 × 60 cm',ano:2024,preco:4800,status:'disponivel',arte:['mostarda','amanhecer'],desc:'O sol nasce devagar sobre os morros. Uma das primeiras telas da série “Horas”, pintada em camadas de amarelo e ocre.'},
    {id:'o2',titulo:'Maré mansa',artista:'a2',tecnica:'Acrílica sobre tela',medidas:'100 × 70 cm',ano:2023,preco:6200,status:'disponivel',arte:['petroleo','mar'],desc:'Um barco solitário e o mar quase parado. Tons de verde-água em pinceladas horizontais.'},
    {id:'o3',titulo:'Noite em casa',artista:'a1',tecnica:'Óleo sobre tela',medidas:'60 × 60 cm',ano:2022,preco:3900,status:'vendida',arte:['lavanda','noite'],desc:'As luzes das casas acesas sob um céu de estrelas.'},
    {id:'o4',titulo:'Cidade ao longe',artista:'a2',tecnica:'Acrílica sobre tela',medidas:'120 × 80 cm',ano:2024,preco:8500,status:'disponivel',arte:['terracota','cidade'],desc:'Prédios em tons de terra vistos do alto do morro, no fim da tarde.'},
    {id:'o5',titulo:'Montanha azul',artista:'a2',tecnica:'Acrílica sobre tela',medidas:'70 × 50 cm',ano:2021,preco:3200,status:'reservada',arte:['ceu','montanha'],desc:'A serra no inverno, com nuvens baixas.'},
    {id:'o6',titulo:'Vaso na janela',artista:'a1',tecnica:'Óleo sobre tela',medidas:'50 × 40 cm',ano:2023,preco:2600,status:'disponivel',arte:['menta','planta'],desc:'Natureza-morta com a planta da cozinha e a luz da manhã.'},
    {id:'o7',titulo:'Vindima',artista:'a1',tecnica:'Óleo sobre tela',medidas:'90 × 60 cm',ano:2024,preco:0,status:'disponivel',arte:['ameixa','uvas'],desc:'Cachos de uva em tons de ameixa. Tela de grande formato, preço sob consulta.'},
    {id:'o8',titulo:'Balão sobre o campo',artista:'a2',tecnica:'Acrílica sobre tela',medidas:'60 × 80 cm',ano:2022,preco:3500,status:'disponivel',arte:['rosa','balao'],desc:'Um balão atravessa o céu rosado. Leve e alegre.'},
  ],
};
