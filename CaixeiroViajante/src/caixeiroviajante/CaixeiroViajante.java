/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package caixeiroviajante;

import java.util.Scanner;

/**
 *
 * @author lucas
 */
public class CaixeiroViajante {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        int n;
        
        Grafo grafo = new Grafo();
        grafo.insereValores();
        grafo.mostra();


//        Scanner ler = new Scanner(System.in);
//        n = ler.nextInt();
        //grafo.calcula(n);
        
        grafo.repete();
        grafo.precos();
    }
    
}
