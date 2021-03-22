let variaveisBase = ["x1", "x2", "f1", "f2", "f3"];

let variaveisNaoBase = ["f1", "f2", "f3"];
/**
 *  1 x1 + 0x2 + 1f1 + 0f2 + 0f3 = 4
 *  0 x1 + 2x2 + 0f1 + 1f2 + 0f3 = 12
 *  2 x1 + 3x2 + 0f1 + 0f2 + 1f3 = 21
 * z = -3 x1 - 5x2 + 0f1 + 0f2 + 0f3 = 0
 */
let matriz = [
  [1, 0, 1, 0, 0],
  [0, 2, 0, 1, 0],
  [2, 3, 0, 0, 1],
];

let z = [-3, -5, 0, 0, 0];
// console.info(z.indexOf(Math.min.apply(Math,z)))
// console.info(Math.min.apply(Math,z));
let total = 0;

let termosIndependentes = [4, 12, 21];

let quocientes = [];

const verificaSolucaoOtima = (zMin) => {
  for(let i = 0;i < zMin.length; i = i+1){
    if(zMin[i] < 0){
      return false;
    }
  }
  return true;
  // return zMin.forEach((element) => {
  //   console.log("element", element);
  //   if (element < 0) {
  //     return false;
  //   }
  //   return true;
  // });
};

const getIndexColunaPivo = (zMin) => {
  return zMin.indexOf(Math.min.apply(Math, zMin));
};

const getIndexLinhaPivo = (indexColuna) => {
  termosIndependentes.forEach((element, index) => {
    let coeficiente = matriz[index][indexColuna];
    if (coeficiente == 0) {
        quocientes = [...quocientes, Infinity];
    } else {
      quocientes = [...quocientes, element / coeficiente];
    }
  });

  // console.log(quocientes.indexOf(Math.min.apply(Math, quocientes)));
  console.log(quocientes);
  return quocientes.indexOf(Math.min.apply(Math, quocientes));
};

const substituirLinhaPivo = (indexLinhaPivo, pivo) => {
  matriz.forEach((element, index) => {
    if (element !== 0) {
      matriz[indexLinhaPivo][index] = element / pivo;
    }

    if (termosIndependentes[indexLinhaPivo] !== 0) {
      termosIndependentes[indexLinhaPivo] =
        termosIndependentes[indexLinhaPivo] / pivo;
    }
  });
};
//passar para os metodos de forEach
const escalonaMatriz = (indexColunaPivo, indexLinhaPivo) => {
  matriz.forEach((linha, index) => {
    if (linha[indexColunaPivo] != 0 && index != indexLinhaPivo) {
      let divisor = linha[indexColunaPivo];
      linha.forEach((valor, j) => {
        if (divisor > 0) {
          matriz[index][j] =
            valor - Math.abs(divisor) * matriz[indexLinhaPivo][j];
        } else {
          console.info("linha2", linha);
          console.info("divisor2", divisor);
          console.info("Math.abs(divisor)2", Math.abs(divisor));
          console.info("matriz", matriz);
          console.info("index", index);
          console.info("j", j);
          console.info(" matriz[index][j]",  matriz[index][j]);
          console.info(" matriz[indexLinhaPivo][j]",  matriz[indexLinhaPivo][j]);
          matriz[index][j] =
            valor + Math.abs(divisor) * matriz[indexLinhaPivo][j];
        }
      });
     
      if (divisor > 0) {
        termosIndependentes[index] -=
          Math.abs(divisor) * termosIndependentes[indexLinhaPivo];
      } else {
        termosIndependentes[index] +=
          Math.abs(divisor) * termosIndependentes[indexLinhaPivo];
      }
    }
  });

  divisor = z[indexColunaPivo];
  z.forEach((valor, j) => {
    if (divisor > 0) {
      console.info('valor',valor)
      z[j] = valor - Math.abs(divisor) * matriz[indexLinhaPivo][j];
    } else {
      // console.info("valor2", valor);
      // console.info("divisor2", divisor);
      // console.info("Math.abs(divisor)2", Math.abs(divisor));
      // console.info("matriz", matriz);
      // console.info("indexLinha", indexLinhaPivo);
      // console.info("j", j);
      // console.info("matriz[indexLinhaPivo][j]", matriz[indexLinhaPivo][j]);
      z[j] = valor + Math.abs(divisor) * matriz[indexLinhaPivo][j];
    }
  });

  if (divisor > 0) {
    total -= Math.abs(divisor) * termosIndependentes[indexLinhaPivo];
  } else {
    total += Math.abs(divisor) * termosIndependentes[indexLinhaPivo];
  }
};

while (!verificaSolucaoOtima(z)) {
  const indexColunaPivo = getIndexColunaPivo(z);
  console.log("indexColunaPivo", indexColunaPivo);
  const indexLinhaPivo = getIndexLinhaPivo(indexColunaPivo);
  console.log("indexLinhaPivo", indexLinhaPivo);
  console.log(
    "matriz[indexLinhaPivo][indexColunaPivo]",
    matriz[indexLinhaPivo][indexColunaPivo]
  );

  const pivo = matriz[indexLinhaPivo][indexColunaPivo];
  variaveisNaoBase[indexLinhaPivo] = variaveisBase[indexColunaPivo];
  substituirLinhaPivo(indexLinhaPivo, pivo);
  escalonaMatriz(indexColunaPivo, indexLinhaPivo);

  quocientes = [];
  console.log('total',total);
}
