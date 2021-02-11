const cidades = [
  "BeloHorizonte",
  "GovValadares",
  "JuizDeFora",
  "MontesClaros",
  "Uberlandia",
];

const matriz = [
  {
    cidade: "BeloHorizonte",
    para: {
      BeloHorizonte: 0,
      GovValadares: 63.6,
      JuizDeFora: 53.2,
      MontesClaros: 90.4,
      Uberlandia: 159.4,
    },
    cidade: "GovValadares",
    para: {
      BeloHorizonte: 63.6,
      GovValadares: 0,
      JuizDeFora: 90.8,
      MontesClaros: 106.8,
      Uberlandia: 169.4,
    },
    cidade: "JuizDeFora",
    para: {
      BeloHorizonte: 53.2,
      GovValadares: 90.8,
      JuizDeFora: 0,
      MontesClaros: 135.4,
      Uberlandia: 157.6,
    },
    cidade: "MontesClaros",
    para: {
      BeloHorizonte: 90.4,
      GovValadares: 106.8,
      JuizDeFora: 135.4,
      MontesClaros: 0,
      Uberlandia: 125.4,
    },

    cidade: "Uberlandia",
    para: {
      BeloHorizonte: 159.4,
      GovValadares: 169.4,
      JuizDeFora: 157.4,
      MontesClaros: 125.4,
      Uberlandia: 0,
    },
  },
];
/**
 * 
{ x16: 0 }

{ x26: 0 }

{ x36: 0 }


 */

let variaveis = [
  { x1: { x12: 0 ,  x13: 0 ,  x14: 0 ,  x15: 0 } },
  { x2: { x22: 0 ,  x23: 0 ,  x24: 0 ,  x25: 0 } },
  { x3: { x32: 0 ,  x33: 0 ,  x34: 0 ,  x35: 0 } },
  { x4: { x42: 0 ,  x43: 0 ,  x44: 0 ,  x45: 0 } },
  { x5: { x52: 0 ,  x53: 0 ,  x54: 0 ,  x55: 0 } },
];
// console.log('vars',variaveis[0]['x1']);
// variaveis.forEach((variavel, index) => {
//   let i = 0;

//   while (i < 5) {
//     const vari = `x${index + 1}${i + 2}`;
//     // console.log({ [vari]: 0 });
//     variaveis[index][`x${index + 1}`].push({ [vari]: 0 });
//     i++;
//   }
// });
console.log("vars", variaveis);

const restricoes = [
  { saida: [] },
  { entrada: [] },
  { ciclo2cidades: [] },
  { ciclo3cidades: [] },
  { ciclo4cidades: [] },
];

let expressaoZMin =
  matriz[0].para.GovValadares * variaveis[0].x1.x12 +
  matriz[0].para.JuizDeFora * variaveis[0].x1.x13 +
  matriz[0].para.MontesClaros * variaveis[0].x1.x14 +
  matriz[0].para.Uberlandia * variaveis[0].x1.x15
  matriz[1].para.BeloHorizonte * variaveis[0].x2.x22 +
  matriz[1].para.JuizDeFora * variaveis[0].x2.x23 +
  matriz[1].para.MontesClaros * variaveis[0].x2.x24 +
  matriz[1].para.Uberlandia * variaveis[0].x2.x25
  matriz[2].para.BeloHorizonte * variaveis[0].x3.x32 +
  matriz[2].para.GovValadares * variaveis[0].x3.x33 +
  matriz[2].para.MontesClaros * variaveis[0].x3.x34 +
  matriz[2].para.Uberlandia * variaveis[0].x3.x35
  matriz[3].para.BeloHorizonte * variaveis[0].x4.x42 +
  matriz[3].para.GovValadares * variaveis[0].x4.x43 +
  matriz[3].para.JuizDeFora * variaveis[0].x4.x44 +
  matriz[3].para.Uberlandia * variaveis[0].x4.x45
  matriz[4].para.BeloHorizonte * variaveis[0].x5.x52 +
  matriz[4].para.GovValadares * variaveis[0].x5.x53 +
  matriz[4].para.JuizDeFora * variaveis[0].x5.x54 +
  matriz[4].para.MontesClaros * variaveis[0].x5.x55

console.log("exp",expressaoZMin);

// matriz.forEach((cidade,index)=> {
//     expressaoZMin += ;
// })
