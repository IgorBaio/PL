package caixeiroviajante;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Grafo {

    private int linha, cont;
    //private static Set<Integer> visitados = new HashSet();
    private static List<Integer> visitados = new ArrayList(); 
    private static List<Float> valores = new ArrayList();
    private static String[][] valor = new String[5][5];
    private static float[][] preco = new float[5][5];
    private static float[][] variaveis = new float[4][4];

    private static Integer[] arrayX1 = new Integer[4];
    private static Integer[] arrayX2 = new Integer[4];
    private static Integer[] arrayX3 = new Integer[4];
    private static Integer[] arrayX4 = new Integer[4];
    private static Integer[] arrayX5 = new Integer[4];

    public Grafo() {
    }

    public void insereValores() {

        valor[0][0] = "0";
        valor[0][1] = "63.6";
        valor[0][2] = "53.2";
        valor[0][3] = "90.4";
        valor[0][4] = "159.4";
        valor[1][0] = "63.6";
        valor[1][1] = "0";
        valor[1][2] = "90.8";
        valor[1][3] = "106.8";
        valor[1][4] = "169.4";
        valor[2][0] = "53.2";
        valor[2][1] = "90.8";
        valor[2][2] = "0";
        valor[2][3] = "135.4";
        valor[2][4] = "157.6";
        valor[3][0] = "90.4";
        valor[3][1] = "106.8";
        valor[3][2] = "135.4";
        valor[3][3] = "0";
        valor[3][4] = "125.4";
        valor[4][0] = "159.4";
        valor[4][1] = "169.4";
        valor[4][2] = "157.6";
        valor[4][3] = "125.4";
        valor[4][4] = "0";
    }

    public void mostra() {
        for (int i = 0; i < valor.length; i++) {
            for (int j = 0; j < valor.length; j++) {
                preco[i][j] = Float.valueOf(valor[i][j]).floatValue();
                System.out.print(preco[i][j] + "\t");
            }
            System.out.println(" ");
        }
    }

    public void calcula(Integer linha) {

        cont = 0;
        float menorValor = 0;
        float aux2 = 0;
        List<Float> aux = new ArrayList();

//      adiciona linha List auxiliar        
        for (int j = 0; j < preco[linha].length; j++) {
            aux.add(preco[linha][j]);
        }

        //System.out.println(aux);
//      encontra menor valor linha        
        for (Float x : aux) {
            
            if (menorValor < x && menorValor != 0.0 || x == 0.0) {
                for (Integer v : visitados) {
                    if (v != cont){
                        System.out.println(v);
                        aux2 = menorValor;
                    }
                }
                //aux2 = menorValor;
                
            } else {
                menorValor = x;
                cont++;
            
            }
            
        }

//      adiciona menor preco passagem em List auxiliar
        valores.add(aux2);
        visitados.add(cont);
        System.out.println("Depois:" + visitados);
        
        
        
    }

    public void repete() {
        int contador = 0;
        visitados.add(1);
        while (contador < 5) {
            calcula(contador);
            contador++;
        }
    }

    public void precos() {
        float somaValores = 0;
        for (Float v : valores) {
            somaValores += v;
            System.out.println(v);
        }
        System.out.println("Soma dos Valores: " + somaValores);
    }

    public Boolean restricoesSaida() {

        int aux = 0;
        for (int i = 0; i < variaveis.length; i++) {
            for (int j = 0; j < valor.length; j++) {
                aux += variaveis[i][j];
            }
        }

        return aux == 1;
//        variaveis[0][1] + variaveis[0][2] + variaveis[0][3] + variaveis[0][4]
//                && variaveis[1][0] + variaveis[1][2] + variaveis[1][3] + variaveis[1][4]
//                && variaveis[2][0] + variaveis[2][1] + variaveis[2][3] + variaveis[2][4]
//                && variaveis[3][0] + variaveis[3][1] + variaveis[3][2] + variaveis[3][4]
//                && variaveis[4][0] + variaveis[4][1] + variaveis[4][2] + variaveis[4][3];
    }

    public Boolean restricoesChegada() {

        int aux = 0;
        for (int i = 0; i < variaveis.length; i++) {
            for (int j = 0; j < valor.length; j++) {
                aux += variaveis[j][i];
            }
        }

        return aux == 1;
//        variaveis[0][1] + variaveis[0][2] + variaveis[0][3] + variaveis[0][4]
//                && variaveis[1][0] + variaveis[1][2] + variaveis[1][3] + variaveis[1][4]
//                && variaveis[2][0] + variaveis[2][1] + variaveis[2][3] + variaveis[2][4]
//                && variaveis[3][0] + variaveis[3][1] + variaveis[3][2] + variaveis[3][4]
//                && variaveis[4][0] + variaveis[4][1] + variaveis[4][2] + variaveis[4][3];
    }

    public void declaraVariaveis() {

        variaveis[0][1] = 0;
        variaveis[0][2] = 0;
        variaveis[0][3] = 0;
        variaveis[0][4] = 0;
        variaveis[1][0] = 0;
        variaveis[1][2] = 0;
        variaveis[1][3] = 0;
        variaveis[1][4] = 0;
        variaveis[2][0] = 0;
        variaveis[2][1] = 0;
        variaveis[2][3] = 0;
        variaveis[2][4] = 0;
        variaveis[3][0] = 0;
        variaveis[3][1] = 0;
        variaveis[3][2] = 0;
        variaveis[3][4] = 0;
        variaveis[4][0] = 0;
        variaveis[4][1] = 0;
        variaveis[4][2] = 0;
        variaveis[4][3] = 0;
    }

    public void preencheParametros() {
        variaveis[0][1] = arrayX1[0];
        variaveis[0][2] = arrayX1[1];
        variaveis[0][3] = arrayX1[2];
        variaveis[0][4] = arrayX1[3];
        variaveis[1][0] = arrayX2[0];
        variaveis[1][2] = arrayX2[1];
        variaveis[1][3] = arrayX2[2];
        variaveis[1][4] = arrayX2[3];
        variaveis[2][0] = arrayX3[0];
        variaveis[2][1] = arrayX3[1];
        variaveis[2][3] = arrayX3[2];
        variaveis[2][4] = arrayX3[3];
        variaveis[3][0] = arrayX4[0];
        variaveis[3][1] = arrayX4[1];
        variaveis[3][2] = arrayX4[2];
        variaveis[3][4] = arrayX4[3];
        variaveis[4][0] = arrayX5[0];
        variaveis[4][1] = arrayX5[1];
        variaveis[4][2] = arrayX5[2];
        variaveis[4][3] = arrayX5[3];
    }
;

}
