const cidades = [
  "BeloHorizonte",
  "GovValadares",
  "JuizDeFora",
  "MontesClaros",
  "Uberlandia",
];

const matriz = [{
    cidade:"BeloHorizonte",
    para: {
      "GovValadares": 63.6,
      "JuizDeFora": 53.2,
      "MontesClaros": 90.4,
      "Uberlandia": 159.4,
    },
    cidade:"GovValadares",
    para: {
      "BeloHorizonte": 63.6,
      "JuizDeFora": 90.8,
      "MontesClaros": 106.8,
      "Uberlandia": 169.4,
    },
    cidade:"JuizDeFora",
    para: {
      "BeloHorizonte": 53.2,
      "GovValadares": 90.8,
      "MontesClaros": 135.4,
      "Uberlandia": 157.6,
    },
    cidade:"MontesClaros",
    para: {
      "BeloHorizonte": 90.4,
      "GovValadares": 106.8,
      "JuizDeFora": 135.4,
      "Uberlandia": 125.4,
    },
    cidade:"MontesClaros",
    para: {
      "BeloHorizonte": 90.4,
      "GovValadares": 106.8,
      "JuizDeFora": 135.4,
      "Uberlandia": 125.4,
    },
    cidade:"Uberlandia",
    para: {
      "BeloHorizonte": 159.4,
      "GovValadares": 169.4,
      "JuizDeFora": 157.4,
      "MontesClaros": 125.4,
    },
}];


let variaveis = [
    {'x1':[]},
    {'x2':[]},
    {'x3':[]},
    {'x4':[]},
    {'x5':[]}
]

const restricoes = [
    {'saida':[]},
    {'entrada':[]},
    {'ciclo2cidades':[]},
    {'ciclo3cidades':[]},
    {'ciclo4cidades':[]}
]