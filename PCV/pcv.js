const cidades = [
  "BeloHorizonte",
  "GovValadares",
  "JuizDeFora",
  "MontesClaros",
  "Uberlandia",
];

let matrizValores = [
  [0, 1, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
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
  },
  {
    cidade: "GovValadares",
    para: {
      BeloHorizonte: 63.6,
      GovValadares: 0,
      JuizDeFora: 90.8,
      MontesClaros: 106.8,
      Uberlandia: 169.4,
    },
  },
  {
    cidade: "JuizDeFora",
    para: {
      BeloHorizonte: 53.2,
      GovValadares: 90.8,
      JuizDeFora: 0,
      MontesClaros: 135.4,
      Uberlandia: 157.6,
    },
  },
  {
    cidade: "MontesClaros",
    para: {
      BeloHorizonte: 90.4,
      GovValadares: 106.8,
      JuizDeFora: 135.4,
      MontesClaros: 0,
      Uberlandia: 125.4,
    },
  },
  {
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
// console.log("mat", matriz[1]);

let variaveis = [
  { x1: { x12: 0, x13: 0, x14: 0, x15: 0 } },
  { x2: { x21: 0, x23: 0, x24: 0, x25: 0 } },
  { x3: { x31: 0, x32: 0, x34: 0, x35: 0 } },
  { x4: { x41: 0, x42: 0, x43: 0, x45: 0 } },
  { x5: { x51: 0, x52: 0, x53: 0, x54: 0 } },
];

const restricoes = [
  { saida: [] },
  { entrada: [] },
  { ciclo2cidades: [] },
  { ciclo3cidades: [] },
  { ciclo4cidades: [] },
];

let expressaoZMin = () => {
  return (
    matriz[0].para.GovValadares * variaveis[0].x1.x12 +
    matriz[0].para.JuizDeFora * variaveis[0].x1.x13 +
    matriz[0].para.MontesClaros * variaveis[0].x1.x14 +
    matriz[0].para.Uberlandia * variaveis[0].x1.x15 +
    matriz[1].para.BeloHorizonte * variaveis[1].x2.x21 +
    matriz[1].para.JuizDeFora * variaveis[1].x2.x23 +
    matriz[1].para.MontesClaros * variaveis[1].x2.x24 +
    matriz[1].para.Uberlandia * variaveis[1].x2.x25 +
    matriz[2].para.BeloHorizonte * variaveis[2].x3.x31 +
    matriz[2].para.GovValadares * variaveis[2].x3.x32 +
    matriz[2].para.MontesClaros * variaveis[2].x3.x34 +
    matriz[2].para.Uberlandia * variaveis[2].x3.x35 +
    matriz[3].para.BeloHorizonte * variaveis[3].x4.x41 +
    matriz[3].para.GovValadares * variaveis[3].x4.x42 +
    matriz[3].para.JuizDeFora * variaveis[3].x4.x43 +
    matriz[3].para.Uberlandia * variaveis[3].x4.x45 +
    matriz[4].para.BeloHorizonte * variaveis[4].x5.x51 +
    matriz[4].para.GovValadares * variaveis[4].x5.x52 +
    matriz[4].para.JuizDeFora * variaveis[4].x5.x53 +
    matriz[4].para.MontesClaros * variaveis[4].x5.x54
  );
};

const restricoesSaida = () =>
  variaveis[0].x1.x12 +
    variaveis[0].x1.x13 +
    variaveis[0].x1.x14 +
    variaveis[0].x1.x15 ===
    1 &&
  variaveis[1].x2.x21 +
    variaveis[1].x2.x23 +
    variaveis[1].x2.x24 +
    variaveis[1].x2.x25 ===
    1 &&
  variaveis[2].x3.x31 +
    variaveis[2].x3.x32 +
    variaveis[2].x3.x34 +
    variaveis[2].x3.x35 ===
    1 &&
  variaveis[3].x4.x41 +
    variaveis[3].x4.x42 +
    variaveis[3].x4.x43 +
    variaveis[3].x4.x45 ===
    1 &&
  variaveis[4].x5.x51 +
    variaveis[4].x5.x52 +
    variaveis[4].x5.x53 +
    variaveis[4].x5.x54 ===
    1;

const restricoesChegada = () =>
  variaveis[1].x2.x21 +
    variaveis[2].x3.x31 +
    variaveis[3].x4.x41 +
    variaveis[4].x5.x51 ===
    1 &&
  variaveis[0].x1.x12 +
    variaveis[2].x3.x32 +
    variaveis[3].x4.x42 +
    variaveis[4].x5.x52 ===
    1 &&
  variaveis[0].x1.x13 +
    variaveis[1].x2.x23 +
    variaveis[3].x4.x43 +
    variaveis[4].x5.x53 ===
    1 &&
  variaveis[0].x1.x14 +
    variaveis[1].x2.x24 +
    variaveis[2].x3.x34 +
    variaveis[4].x5.x54 ===
    1 &&
  variaveis[0].x1.x15 +
    variaveis[1].x2.x25 +
    variaveis[2].x3.x35 +
    variaveis[3].x4.x45 ===
    1;

const restricoesCiclos2Cidades = () =>
  variaveis[0].x1.x12 + variaveis[1].x2.x21 <= 1 &&
  variaveis[0].x1.x13 + variaveis[2].x3.x31 <= 1 &&
  variaveis[0].x1.x14 + variaveis[3].x4.x41 <= 1 &&
  variaveis[0].x1.x15 + variaveis[4].x5.x51 <= 1 &&
  variaveis[1].x2.x23 + variaveis[2].x3.x32 <= 1 &&
  variaveis[1].x2.x24 + variaveis[3].x4.x42 <= 1 &&
  variaveis[1].x2.x25 + variaveis[4].x5.x52 <= 1 &&
  variaveis[2].x3.x34 + variaveis[3].x4.x43 <= 1 &&
  variaveis[2].x3.x35 + variaveis[4].x5.x53 <= 1 &&
  variaveis[3].x4.x45 + variaveis[4].x5.x54 <= 1;

const restricoesCiclos3Cidades = () =>
  variaveis[0].x1.x12 + variaveis[1].x2.x23 + variaveis[2].x3.x31 <= 2 &&
  variaveis[0].x1.x12 + variaveis[1].x2.x24 + variaveis[3].x4.x41 <= 2 &&
  variaveis[0].x1.x12 + variaveis[1].x2.x25 + variaveis[4].x5.x51 <= 2 &&
  variaveis[0].x1.x13 + variaveis[2].x3.x34 + variaveis[3].x4.x41 <= 2 &&
  variaveis[0].x1.x13 + variaveis[2].x3.x35 + variaveis[4].x5.x51 <= 2 &&
  variaveis[0].x1.x14 + variaveis[3].x4.x45 + variaveis[4].x5.x51 <= 2 &&
  variaveis[1].x2.x23 + variaveis[2].x3.x34 + variaveis[3].x4.x42 <= 2 &&
  variaveis[1].x2.x23 + variaveis[2].x3.x35 + variaveis[4].x5.x52 <= 2 &&
  variaveis[1].x2.x24 + variaveis[3].x4.x45 + variaveis[4].x5.x52 <= 2 &&
  variaveis[2].x3.x34 + variaveis[3].x4.x45 + variaveis[4].x5.x53 <= 2;

const restricoesCiclos4Cidades = () =>
  variaveis[0].x1.x12 +
    variaveis[1].x2.x23 +
    variaveis[2].x3.x34 +
    variaveis[3].x4.x41 <=
    3 &&
  variaveis[0].x1.x12 +
    variaveis[1].x2.x23 +
    variaveis[2].x3.x35 +
    variaveis[4].x5.x51 <=
    3 &&
  variaveis[0].x1.x12 +
    variaveis[1].x2.x24 +
    variaveis[3].x4.x45 +
    variaveis[4].x5.x51 <=
    3 &&
  variaveis[0].x1.x13 +
    variaveis[2].x3.x34 +
    variaveis[3].x4.x45 +
    variaveis[4].x5.x51 <=
    3 &&
  variaveis[1].x2.x23 +
    variaveis[2].x3.x34 +
    variaveis[3].x4.x45 +
    variaveis[4].x5.x52 <=
    3;

const shiftTest = (arrayX1, arrayX2, arrayX3, arrayX4, arrayX5) => {
  variaveis[0].x1.x12 = arrayX1[0];
  variaveis[0].x1.x13 = arrayX1[1];
  variaveis[0].x1.x14 = arrayX1[2];
  variaveis[0].x1.x15 = arrayX1[3];
  variaveis[1].x2.x21 = arrayX2[0];
  variaveis[1].x2.x23 = arrayX2[1];
  variaveis[1].x2.x24 = arrayX2[2];
  variaveis[1].x2.x25 = arrayX2[3];
  variaveis[2].x3.x31 = arrayX3[0];
  variaveis[2].x3.x32 = arrayX3[1];
  variaveis[2].x3.x34 = arrayX3[2];
  variaveis[2].x3.x35 = arrayX3[3];
  variaveis[3].x4.x41 = arrayX4[0];
  variaveis[3].x4.x42 = arrayX4[1];
  variaveis[3].x4.x43 = arrayX4[2];
  variaveis[3].x4.x44 = arrayX4[3];
  variaveis[4].x5.x51 = arrayX5[0];
  variaveis[4].x5.x52 = arrayX5[1];
  variaveis[4].x5.x53 = arrayX5[2];
  variaveis[4].x5.x54 = arrayX5[3];
};

const percorreMatriz = (item1, item2, item3, item4, item5) => {
  let matrizCopia = matrizValores;
  let arrayteste = [];
  matrizCopia[item1.item].forEach((i, index) => {
    if (index === item1.index) {
      arrayteste.push(1);
    } else {
      arrayteste.push(0);
    }
    matrizCopia[item1.item] = arrayteste;
  });
  arrayteste = [];
  matrizCopia[item2.item].forEach((item, index) => {
    if (index === item2.index) {
      arrayteste.push(1);
    } else {
      arrayteste.push(0);
    }
    matrizCopia[item2.item] = arrayteste;
  });
  arrayteste = [];
  matrizCopia[item3.item].forEach((item, index) => {
    if (index === item3.index) {
      arrayteste.push(1);
    } else {
      arrayteste.push(0);
    }
    matrizCopia[item3.item] = arrayteste;
  });
  arrayteste = [];
  matrizCopia[item4.item].forEach((item, index) => {
    if (index === item4.index) {
      arrayteste.push(1);
    } else {
      arrayteste.push(0);
    }
    matrizCopia[item4.item] = arrayteste;
  });
  arrayteste = [];
  matrizCopia[item5.item].forEach((item, index) => {
    if (index === item5.index) {
      arrayteste.push(1);
    } else {
      arrayteste.push(0);
    }
    matrizCopia[item5.item] = arrayteste;
  });
  matrizValores = matrizCopia;
  console.log('valores',matrizValores);
};

const testaRota = () => {
  // console.log("\n\n\n\nteste", expressaoZMin());

  shiftTest(
    matrizValores[0],
    matrizValores[1],
    matrizValores[2],
    matrizValores[3],
    matrizValores[4]

  );
  // if (
  //   !(
  //     restricoesSaida() &&
  //     restricoesChegada() &&
  //     restricoesCiclos2Cidades() &&
  //     restricoesCiclos3Cidades() &&
  //     restricoesCiclos4Cidades()
  //   )
  // ) {
  //   percorreMatriz(
  //     { item: 0, index: 1 },
  //     { item: 1, index: 0 },
  //     { item: 2, index: 0 },
  //     { item: 3, index: 0 },
  //     { item: 4, index: 0 }
  //   );
  //    shiftTest(
  //      matrizValores[0],
  //      matrizValores[1],
  //      matrizValores[2],
  //      matrizValores[3],
  //      matrizValores[4]
  //    );
  // }

  //  if (
  //    !(
  //      restricoesSaida() &&
  //      restricoesChegada() &&
  //      restricoesCiclos2Cidades() &&
  //      restricoesCiclos3Cidades() &&
  //      restricoesCiclos4Cidades()
  //    )
  //  ) {
  //    percorreMatriz(
  //      { item: 0, index: 1 },
  //      { item: 1, index: 1 },
  //      { item: 2, index: 0 },
  //      { item: 3, index: 0 },
  //      { item: 4, index: 0 }
  //    );
  //     shiftTest(
  //       matrizValores[0],
  //       matrizValores[1],
  //       matrizValores[2],
  //       matrizValores[3],
  //       matrizValores[4]
  //     );
  //  }

  //  if (
  //    !(
  //      restricoesSaida() &&
  //      restricoesChegada() &&
  //      restricoesCiclos2Cidades() &&
  //      restricoesCiclos3Cidades() &&
  //      restricoesCiclos4Cidades()
  //    )
  //  ) {
  //    percorreMatriz(
  //      { item: 0, index: 1 },
  //      { item: 1, index: 1 },
  //      { item: 2, index: 1 },
  //      { item: 3, index: 0 },
  //      { item: 4, index: 0 }
  //    );
  //     shiftTest(
  //       matrizValores[0],
  //       matrizValores[1],
  //       matrizValores[2],
  //       matrizValores[3],
  //       matrizValores[4]
  //     );
  //  }

  //  if (
  //    !(
  //      restricoesSaida() &&
  //      restricoesChegada() &&
  //      restricoesCiclos2Cidades() &&
  //      restricoesCiclos3Cidades() &&
  //      restricoesCiclos4Cidades()
  //    )
  //  ) {
  //    percorreMatriz(
  //      { item: 0, index: 1 },
  //      { item: 1, index: 1 },
  //      { item: 2, index: 1 },
  //      { item: 3, index: 1 },
  //      { item: 4, index: 0 }
  //    );
  //     shiftTest(
  //       matrizValores[0],
  //       matrizValores[1],
  //       matrizValores[2],
  //       matrizValores[3],
  //       matrizValores[4]
  //     );
  //  }
   
  //  if (
  //    !(
  //      restricoesSaida() &&
  //      restricoesChegada() &&
  //      restricoesCiclos2Cidades() &&
  //      restricoesCiclos3Cidades() &&
  //      restricoesCiclos4Cidades()
  //    )
  //  ) {
  //    percorreMatriz(
  //      { item: 0, index: 1 },
  //      { item: 1, index: 1 },
  //      { item: 2, index: 1 },
  //      { item: 3, index: 1 },
  //      { item: 4, index: 1 }
  //    );
  //     shiftTest(
  //       matrizValores[0],
  //       matrizValores[1],
  //       matrizValores[2],
  //       matrizValores[3],
  //       matrizValores[4]
  //     );
  //  }

  //  if (
  //    !(
  //      restricoesSaida() &&
  //      restricoesChegada() &&
  //      restricoesCiclos2Cidades() &&
  //      restricoesCiclos3Cidades() &&
  //      restricoesCiclos4Cidades()
  //    )
  //  ) {
  //    percorreMatriz(
  //      { item: 0, index: 2 },
  //      { item: 1, index: 0 },
  //      { item: 2, index: 0 },
  //      { item: 3, index: 0 },
  //      { item: 4, index: 0 }
  //    );
  //     shiftTest(
  //       matrizValores[0],
  //       matrizValores[1],
  //       matrizValores[2],
  //       matrizValores[3],
  //       matrizValores[4]
  //     );
  //  }
//
//TODO FAzer a partir daqui
//
//
 
  //   console.log("teste expZ", expressaoZMin());
  //  console.log("teste rest", restricoesSaida());
  //  console.log("teste chega", restricoesChegada());
  //  console.log("teste restricoesCiclos2Cidades", restricoesCiclos2Cidades());
  //  console.log("teste restricoesCiclos3Cidades", restricoesCiclos3Cidades());
  //  console.log("teste restricoesCiclos4Cidades", restricoesCiclos4Cidades());

  console.log("teste expZ", expressaoZMin());
  console.log("teste rest", restricoesSaida());
  console.log("teste chega", restricoesChegada());
  console.log("teste restricoesCiclos2Cidades", restricoesCiclos2Cidades());
  console.log("teste restricoesCiclos3Cidades", restricoesCiclos3Cidades());
  console.log("teste restricoesCiclos4Cidades", restricoesCiclos4Cidades());

};

testaRota();
// console.log("exp", variaveis[1].x2.x23);
