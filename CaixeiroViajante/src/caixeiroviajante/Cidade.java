package caixeiroviajante;

/**
 * Vertice
 */

public class Cidade {
    
    private String nome;

    public Cidade(String nome) {
        this.nome = nome;
    }

    public Cidade() {
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public String toString(){
        return nome;
    }
    
}
