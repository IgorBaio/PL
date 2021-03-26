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
//responsavel por ir atualizando e testando se a linha do menor valor ja foi alterada
let arrayAux4GetMenoresValores = []
let indexLinha, menorValor, penalidade, ofertaItem, penalidade2, indexColuna, menorValor2, samePenalitiesSecondCase
let jaPassou0 = false
let jaPassou1 = false
let jaPassou2 = false
let jaPassou3 = false
let jaPassou4 = false
let indexMin;

const indexFromMinValue = () => {
    const minValue = matrixToTransport[indexLinha].reduce(function (a, b) {
        return Math.min(a, b);
    });
    const indexesArray = matrixToTransport[indexLinha].map((i, ind) => {
        if (i === minValue) {
            return ind;
        }
    })
    return indexesArray.filter(i => i !== undefined & i !== null)[0]
}

const truck = (mode) => {
    if (mode === 1) {
        /*
            Pega o index do menor valor na linha, verifica se o somatorio da coluna é menor que o valor da demanda e caso seja,
            verifica se ao adicionar o novo valor obedece à restrição de ser menor ou igual ao valor da demanda, se obedecer as estas duas restrições
            adiciona o valor ao campo
        */
        switch (indexMin) {
            case 0:
                if (totalTransported[0] < demanda[0] && totalTransported[0] + ofertaItem <= demanda[0]) {
                    matrixTransported[indexLinha][indexMin] = ofertaItem
                    matrixAux[indexLinha][indexMin] = ofertaItem
                    return
                } else if (!jaPassou1) {
                    indexMin += 1;
                    jaPassou0 = true
                    truck(1)
                }
                break;
            case 1:
                if (totalTransported[1] < demanda[1] && totalTransported[1] + ofertaItem <= demanda[1]) {
                    matrixTransported[indexLinha][indexMin] = ofertaItem
                    matrixAux[indexLinha][indexMin] = ofertaItem
                    return
                }
                else if (!jaPassou2) {
                    indexMin += 1;
                    jaPassou1 = true
                    truck(1)
                }
                break;
            case 2:
                if (totalTransported[2] < demanda[2] && totalTransported[2] + ofertaItem <= demanda[2]) {
                    matrixTransported[indexLinha][indexMin] = ofertaItem
                    matrixAux[indexLinha][indexMin] = ofertaItem
                    return
                } else if (!jaPassou3) {
                    indexMin += 1;
                    jaPassou2 = true
                    truck(1)
                }
                break;
            case 3:
                if (totalTransported[3] < demanda[3] && totalTransported[3] + ofertaItem <= demanda[3]) {
                    matrixTransported[indexLinha][indexMin] = ofertaItem
                    matrixAux[indexLinha][indexMin] = ofertaItem
                    return
                } else if (!jaPassou4) {
                    indexMin += 1;
                    jaPassou3 = true
                    truck(1)
                }
                break;
            default:
                if (totalTransported[4] < demanda[4] && totalTransported[4] + ofertaItem <= demanda[4]) {
                    matrixTransported[indexLinha][indexMin] = ofertaItem
                    matrixAux[indexLinha][indexMin] = ofertaItem
                    return
                }
                else if (!jaPassou0) {
                    indexMin = 0;
                    jaPassou4 = true
                    truck(1)
                }
                break;
        }


        return

    } else {
        matrixToTransport.forEach((mTransported, index) => {
            if (mTransported[indexColuna] === menorValor2) {
                ofertaItem = ofertaArray.find((i, ind) => ind === index)
                if (matrixBestAltPenToTransport[index].some(ele => ele === 0)) {
                    matrixAux[index][indexColuna] = 99999
                    //caso de quando a penalidade vem da matriz de penalidade das 5 cidades, pega a coluna da matriz e ve se essa linha ja foi substituida,
                    // se sim, pega coloca o 99999 no menor valor e procura o proximo menor valor 
                    matrixAux.forEach((m, index) => {
                        arrayAux4GetMenoresValores.push(m[indexColuna])
                    })
                    menorValor2 = arrayAux4GetMenoresValores.reduce(function (a, b) {
                        return Math.min(a, b);
                    });
                    arrayAux4GetMenoresValores = []
                    truck(2)

                } else {

                    matrixTransported[index][indexColuna] = ofertaItem
                    matrixAux[index][indexColuna] = ofertaItem
                    //ZERANDO A LINHA DA MATRIZ DE PENALIDADES
                    matrixBestAltPenToTransport[index] = [0, 0, 0]

                }
                return
            }

        })

    }
}

function main() {
    let menorValorNovo;
    for (let i = 0; i < 25; i++) {
        totalTransported[0] = 0, totalTransported[1] = 0, totalTransported[2] = 0, totalTransported[3] = 0, totalTransported[4] = 0

        matrixTransported.forEach(m => {
            totalTransported[0] += m[0];
            totalTransported[1] += m[1];
            totalTransported[2] += m[2];
            totalTransported[3] += m[3];
            totalTransported[4] += m[4];

        })
        jaPassou0 = false
        jaPassou1 = false
        jaPassou2 = false
        jaPassou3 = false
        jaPassou4 = false

        matrixBestAltPenToTransport.forEach((m, index) => {
            arrayAux.push(m[2]);
        })
        penalidade = arrayAux.reduce(function (a, b) {
            return Math.max(a, b);
        });

        matrixAltBestPenTransported.forEach((m, index) => {
            arrayAux2.push(m[2]);
        })
        penalidade2 = arrayAux2.reduce(function (a, b) {
            return Math.max(a, b);
        });

        //Verifica o valor de penalidade de qual tabela será usado 
        if (penalidade > penalidade2) {
            matrixBestAltPenToTransport.forEach((m, index) => {
                if (m[2] === penalidade) {
                    //Verifica se tem mais de uma linha com a mesma penalidade,
                    //se sim, insere os melhores caminhos num arrayAux, pega o menor,
                    //faz todo o processo , vai até o proximo, e repete ate acabar
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
                                indexOferta = index
                                indexMin = indexFromMinValue()
                                jaPassou0 = false
                                jaPassou1 = false
                                jaPassou2 = false
                                jaPassou3 = false
                                jaPassou4 = false
                                truck(1);
                                //ZERANDO A LINHA DA MATRIZ DE PENALIDADES
                                matrixBestAltPenToTransport[index2] = [0, 0, 0]
                            }
                        })
                        arrayAux3MelhoresValores = []
                        return
                    } else {
                        //se nao tiver penalidade repetida, simplesmente executa o transporte
                        indexLinha = index
                        menorValor = m[0]
                        ofertaItem = ofertaArray.find((i, ind) => ind === indexLinha)
                        // console.log('ofertaItem', ofertaItem)
                        indexMin = indexFromMinValue()
                        jaPassou0 = false
                        jaPassou1 = false
                        jaPassou2 = false
                        jaPassou3 = false
                        jaPassou4 = false
                        truck(1);
                        //ZERANDO A LINHA DA MATRIZ DE PENALIDADES
                        matrixBestAltPenToTransport[index] = [0, 0, 0]
                        // recalculaPenalidade(matrixBestAltPenToTransport,index)

                    }


                    return
                }
            })




        } else {
            matrixAltBestPenTransported.forEach((m, index) => {
                if (m[2] === penalidade2) {
                    indexColuna = index
                    menorValor2 = m[0]

                    samePenalitiesSecondCase = matrixAltBestPenTransported.filter(i => i[2] === m[2])
                    if (samePenalitiesSecondCase.length > 1) {
                        samePenalitiesSecondCase.forEach(s => arrayAux3MelhoresValores.push(s[0]))
                        menorValorNovo = arrayAux3MelhoresValores.reduce(function (a, b) {
                            return Math.min(a, b);
                        });
                        matrixAltBestPenTransported.forEach((m2, index2) => {
                            if (m2[2] === penalidade && m2[0] === menorValorNovo) {

                                indexColuna = index2
                                menorValor2 = m2[0]
                                ofertaItem = ofertaArray.find((i, ind) => ind === indexLinha)
                                indexOferta = index
                                truck(2);
                                //ZERANDO A LINHA DA MATRIZ DE PENALIDADES
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
                        indexOferta = index
                        truck(2);
                        //ZERANDO A LINHA DA MATRIZ DE PENALIDADES
                        matrixAltBestPenTransported[index] = [0, 0, 0]

                    }
                }
            })


        }

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


    totalTransported[0] = 0, totalTransported[1] = 0, totalTransported[2] = 0, totalTransported[3] = 0, totalTransported[4] = 0

    matrixTransported.forEach(m => {
        totalTransported[0] += m[0];
        totalTransported[1] += m[1];
        totalTransported[2] += m[2];
        totalTransported[3] += m[3];
        totalTransported[4] += m[4];
        console.log(m)

    })
    console.log('i1', totalTransported[0])
    console.log('i2', totalTransported[1])
    console.log('i3', totalTransported[2])
    console.log('i4', totalTransported[3])
    console.log('i5', totalTransported[4])

    let somaTotal = 0
    for (let i = 0; i < 25; i++) {
        for (let j = 0; j < 5; j++) {
            //SOMAPRODUTO
            somaTotal += matrixToTransport[i][j] * matrixTransported[i][j]
        }
    }

    console.log('VALOR SOMA PRODUTO', totalTransported[0] + totalTransported[1] + totalTransported[2] + totalTransported[3] + totalTransported[4])
    console.log('VALOR SOMA PRODUTO TOTAL', somaTotal)
    console.log('encerrei')
    

}