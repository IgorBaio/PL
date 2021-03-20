const express = require('express')
const app = express()
const PORT = 4000;

app.get('/', async (req, res) => {
    main()

})

app.listen(PORT, () => {
    console.log('Back Levantado na porta', PORT)
})

let matrixToTransport = [
    [27.65, 35.40, 14.95, 48.60, 47.50],
    [21.70, 29.40, 9.00, 42.60, 47.90],
    [29.00, 4.80, 26.40, 48.65, 24.90],
    [23.80, 23.10, 15.15, 44.30, 50.00],
    [25.75, 18.30, 23.70, 26.75, 41.85],
    [1.00, 17.75, 13.20, 20.45, 26.10],
    [20.95, 28.70, 8.25, 33.75, 48.50],
    [28.60, 43.95, 23.10, 48.50, 30.10],
    [29.05, 14.70, 29.85, 39.20, 55.85],
    [30.60, 46.25, 24.25, 50.60, 31.65],
    [22.30, 30.00, 9.50, 43.10, 49.80],
    [22.05, 29.80, 9.25, 42.85, 47.60],
    [30.05, 45.45, 24.65, 50.05, 19.30],
    [25.80, 41.20, 31.50, 41.05, 14.00],
    [22.20, 29.25, 9.10, 42.80, 49.50],
    [30.00, 35.75, 25.15, 50.10, 30.45],
    [29.95, 45.00, 25.30, 49.90, 30.35],
    [22.85, 29.00, 9.90, 43.45, 50.15],
    [30.40, 31.75, 19.50, 50.35, 32.45],
    [29.25, 24.00, 23.90, 49.25, 29.50],
    [27.20, 51.00, 24.40, 40.95, 27.40],
    [33.60, 23.55, 28.50, 53.35, 28.85],
    [24.00, 39.40, 36.50, 32.90, 4.90],
    [25.45, 17.60, 22.80, 42.45, 52.90],
    [25.95, 17.90, 23.80, 42.15, 52.75]
]
let matrixAux = [
    [27.65, 35.40, 14.95, 48.60, 47.50],
    [21.70, 29.40, 9.00, 42.60, 47.90],
    [29.00, 4.80, 26.40, 48.65, 24.90],
    [23.80, 23.10, 15.15, 44.30, 50.00],
    [25.75, 18.30, 23.70, 26.75, 41.85],
    [1.00, 17.75, 13.20, 20.45, 26.10],
    [20.95, 28.70, 8.25, 33.75, 48.50],
    [28.60, 43.95, 23.10, 48.50, 30.10],
    [29.05, 14.70, 29.85, 39.20, 55.85],
    [30.60, 46.25, 24.25, 50.60, 31.65],
    [22.30, 30.00, 9.50, 43.10, 49.80],
    [22.05, 29.80, 9.25, 42.85, 47.60],
    [30.05, 45.45, 24.65, 50.05, 19.30],
    [25.80, 41.20, 31.50, 41.05, 14.00],
    [22.20, 29.25, 9.10, 42.80, 49.50],
    [30.00, 35.75, 25.15, 50.10, 30.45],
    [29.95, 45.00, 25.30, 49.90, 30.35],
    [22.85, 29.00, 9.90, 43.45, 50.15],
    [30.40, 31.75, 19.50, 50.35, 32.45],
    [29.25, 24.00, 23.90, 49.25, 29.50],
    [27.20, 51.00, 24.40, 40.95, 27.40],
    [33.60, 23.55, 28.50, 53.35, 28.85],
    [24.00, 39.40, 36.50, 32.90, 4.90],
    [25.45, 17.60, 22.80, 42.45, 52.90],
    [25.95, 17.90, 23.80, 42.15, 52.75]
]
let matrixTransported = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

const demanda = [6500, 2100, 4400, 2300, 1700];
let totalTransported = [0, 0, 0, 0, 0];

const ofertaArray = [289, 335, 1087, 319, 268, 314, 812, 1253, 276, 345, 482, 831, 630, 833, 1461, 962, 605, 829, 572, 1959, 481, 333, 998, 390, 251];

//TODO cada item é a soma de cada linha da matrixTransported 
let transported = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let matrixBestAltPenToTransport = [
    [14.95, 27.65, 12.7],
    [9, 21.7, 12.7],
    [4.8, 24.9, 20.1],
    [15.15, 23.1, 7.95],
    [18.3, 23.7, 5.4],
    [1, 13.2, 12.2],
    [8.25, 20.95, 12.7],
    [23.1, 28.6, 5.5],
    [14.7, 29.05, 14.35],
    [24.25, 30.6, 6.35],
    [9.5, 22.3, 12.8],
    [9.25, 22.05, 12.8],
    [19.3, 24.65, 5.35],
    [14, 25.8, 11.8],
    [9.1, 22.2, 13.1],
    [25.15, 30, 4.85],
    [25.3, 29.95, 4.65],
    [9.9, 22.85, 12.95],
    [19.5, 30.4, 10.9],
    [23.9, 24, 0.1],
    [24.4, 27.2, 2.8],
    [23.55, 28.5, 4.95],
    [4.9, 24, 19.1],
    [17.6, 22.8, 5.2],
    [17.9, 23.8, 5.9],

]

let matrixAltBestPenTransported = [
    [1, 20.95, 19.95],
    [4.8, 14.7, 9.9],
    [8.25, 9, 0.75],
    [20.45, 26.75, 6.3],
    [4.9, 14, 9.1]

]

let arrayAux = []
let arrayAux2 = []
let arrayAux3MelhoresValores = []
//de grao em grao a galinha enche o papo
let arrayAux4Galinha = []
let indexLinha, menorValor, penalidade, ofertaItem, penalidade2, indexColuna, menorValor2, samePenalitiesSecondCase

const truck = (mode) => {
    if (mode === 1) {

        matrixToTransport.forEach((mTransported, index) => {
            if (index === indexLinha) {
                mTransported.forEach((element, indexLinhaArray) => {
                    if (element === menorValor) {
                        matrixTransported[index][indexLinhaArray] = ofertaItem
                        matrixAux[index][indexLinhaArray] = ofertaItem
                        return
                    }

                })
            }
        })
    } else {
        matrixToTransport.forEach((mTransported, index) => {
            if (mTransported[indexColuna] === menorValor2) {
                console.log('menorValor2',menorValor2,index)
                ofertaItem = ofertaArray.find((i, ind) => ind === index)
                console.log('ofertaItem', ofertaItem)
                console.log('matrixBestAltPenToTransport[index]',matrixBestAltPenToTransport[index])
                if (matrixBestAltPenToTransport[index].some(ele=>ele===0)) {
                    console.log(index)
                    console.log(indexColuna)
                    console.log(matrixTransported[index][indexColuna])
                    matrixAux[index][indexColuna] = 99999
                    matrixAux.forEach((m,index)=>{
                        arrayAux4Galinha.push(m[indexColuna])
                    })
                    console.log(arrayAux4Galinha)
                    menorValor2 = arrayAux4Galinha.reduce(function (a, b) {
                        return Math.min(a, b);
                    });
                    arrayAux4Galinha = []
                    truck(2)


                    // console.log('matrixAltBestPenTransported[indexColuna]',matrixAltBestPenTransported[indexColuna])
                    // menorValor2 = matrixAltBestPenTransported[indexColuna][1]
                    // if(matrixAltBestPenTransported[indexColuna][1] !== 0 && 
                    //     matrixAltBestPenTransported[indexColuna][1] - matrixAltBestPenTransported[indexColuna][0] === 0){
                    //         matrixAltBestPenTransported[indexColuna][1] = 0

                    //     }
                    // else if (matrixAltBestPenTransported[indexColuna][1] !== 0) {
                    //     truck(2)

                    // }
                } else {

                    matrixTransported[index][indexColuna] = ofertaItem
                    console.log(index)
                    console.log(indexColuna)
                    console.log(matrixTransported[index][indexColuna])
                    matrixAux[index][indexColuna] = ofertaItem
                    // console.log(matrixBestAltPenToTransport)
                    matrixBestAltPenToTransport[index] = [0, 0, 0]
                    // console.log(index)
                    // console.log(matrixBestAltPenToTransport)
                }
                return
            }

        })

    }
}

function main() {
    // console.log('matrixBestAltPenToTransport antes')
    // matrixBestAltPenToTransport.forEach(m => {

    //     console.log(m)

    // })
    // console.log('matrixAltBestPenTransported antes')
    // matrixAltBestPenTransported.forEach(m => {

    //     console.log(m)

    // })

    //TODO SOMAPRODUTO f = x11*x'11+x12*x'12...+x21*x'21....
    let menorValorNovo;
    for (let i = 0; i < 25; i++) {

        matrixBestAltPenToTransport.forEach((m, index) => {
            arrayAux.push(m[2]);
        })
        // console.log(arrayAux)
        penalidade = arrayAux.reduce(function (a, b) {
            return Math.max(a, b);
        });

        matrixAltBestPenTransported.forEach((m, index) => {
            arrayAux2.push(m[2]);
        })
        penalidade2 = arrayAux2.reduce(function (a, b) {
            return Math.max(a, b);
        });

        // console.log('penalidade', penalidade)
        // console.log('penalidade2', penalidade2)

        if (penalidade > penalidade2) {
            // console.log('entrei 1')
            matrixBestAltPenToTransport.forEach((m, index) => {
                if (m[2] === penalidade) {


                    //TODO ver se tem mais de uma linha com a mesma penalidade,
                    //se sim, inserir os melhores caminhos num arrayAux, pegar o menor
                    //fazer todo o processo , ir pro proximo, fazer o processo e ir pro proximo, ate acabar
                    const samePenalities = matrixBestAltPenToTransport.filter(i => i[2] === m[2])
                    if (samePenalities.length > 1) {
                        // console.log(samePenalities)
                        samePenalities.forEach(s => arrayAux3MelhoresValores.push(s[0]))
                        menorValorNovo = arrayAux3MelhoresValores.reduce(function (a, b) {
                            return Math.min(a, b);
                        });
                        matrixBestAltPenToTransport.forEach((m2, index2) => {
                            if (m2[2] === penalidade && m2[0] === menorValorNovo) {
                                indexLinha = index2
                                menorValor = m2[0]
                                ofertaItem = ofertaArray.find((i, ind) => ind === indexLinha)
                                // console.log('ofertaItem', ofertaItem)
                                // console.log('indexLinha', indexLinha)
                                // console.log('menorValor', menorValor)
                                truck(1);
                                matrixBestAltPenToTransport[index2] = [0, 0, 0]
                            }
                        })
                        arrayAux3MelhoresValores = []
                        // console.log('aqui', menorValor, i)
                        return
                    } else {
                        indexLinha = index
                        menorValor = m[0]
                        ofertaItem = ofertaArray.find((i, ind) => ind === indexLinha)
                        // console.log('ofertaItem', ofertaItem)
                        truck(1);
                        matrixBestAltPenToTransport[index] = [0, 0, 0]

                    }

                    // if(m[2]===12.7){
                    //     console.log(m[0])
                    // }
                    return
                }
            })
            // console.log('indexLinha', indexLinha)
            // console.log('menorValor', menorValor)


            //ZERANDO A LINHA DA MATRIZ DE PENALIDADES

        } else {
            // console.log('entrei 2')

            matrixAltBestPenTransported.forEach((m, index) => {
                if (m[2] === penalidade2) {
                    indexColuna = index
                    menorValor2 = m[0]

                    samePenalitiesSecondCase = matrixAltBestPenTransported.filter(i => i[2] === m[2])
                    if (samePenalitiesSecondCase.length > 1) {
                        console.log(samePenalitiesSecondCase)
                        samePenalitiesSecondCase.forEach(s => arrayAux3MelhoresValores.push(s[0]))
                        menorValorNovo = arrayAux3MelhoresValores.reduce(function (a, b) {
                            return Math.min(a, b);
                        });
                        matrixAltBestPenTransported.forEach((m2, index2) => {
                            if (m2[2] === penalidade && m2[0] === menorValorNovo) {

                                indexColuna = index2
                                menorValor2 = m2[0]
                                ofertaItem = ofertaArray.find((i, ind) => ind === indexLinha)
                                // console.log('ofertaItem', ofertaItem)
                                truck(2);
                                matrixAltBestPenTransported[index2] = [0, 0, 0]
                            }
                        })
                        arrayAux3MelhoresValores = []
                        // console.log('aqui', menorValor, i)
                        return
                    } else {
                        indexColuna = index
                        menorValor2 = m[0]
                        ofertaItem = ofertaArray.find((i, ind) => ind === indexLinha)
                        // console.log('ofertaItem', ofertaItem)
                        truck(2);
                        matrixAltBestPenTransported[index] = [0, 0, 0]

                    }
                }
            })
            // console.log('indexColuna', indexColuna)
            // console.log('menorValor2', menorValor2)


        }



        //#region 2
        // matrixAltBestPenTransported.forEach((m, index) => {
        //     arrayAux2.push(m[2]);
        // })
        // penalidade2 = arrayAux2.reduce(function (a, b) {
        //     return Math.max(a, b);
        // });




        //#endregion

        arrayAux = []
        indexLinha = null
        menorValor = null
        penalidade = null
        ofertaItem = null;
        arrayAux2 = []
        indexColuna = null
        menorValor2 = null
        penalidade2 = null
        if (i == 24) {
            console.log('vou encerrar')
        }
    }


    // console.log(matrixTransported)
    // console.log('matrixBestAltPenToTransport depois')
    // matrixBestAltPenToTransport.forEach(m => {

    //     console.log(m)

    // })
    // console.log('matrixAltBestPenTransported depois')
    // matrixAltBestPenTransported.forEach(m => {

    //     console.log(m)

    // })
    // console.log(matrixBestAltPenToTransport)
    // console.log(matrixAltBestPenTransported)

    let i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0
    matrixTransported.forEach(m => {
        i1 += m[0];
        i2 += m[1];
        i3 += m[2];
        i4 += m[3];
        i5 += m[4];
        console.log(m)

    })
    console.log('i1', i1)
    console.log('i2', i2)
    console.log('i3', i3)
    console.log('i4', i4)
    console.log('i5', i5)

    let somaTotal = 0
    for(let i = 0; i<25; i++){
        for(let j = 0; j< 5;j++){
            somaTotal += matrixToTransport[i][j]*matrixTransported[i][j]
        }
    }

    console.log('VALOR SOMA PRODUTO', i1+i2+i3+i4+i5)
    console.log('VALOR SOMA PRODUTO TOTAL', somaTotal)
    console.log('encerrei')
    // console.log(matrixToTransport)
    // console.log(demanda)
    // console.log(totalTransported)
    // console.log(oferta)
    // console.log(transported)

}