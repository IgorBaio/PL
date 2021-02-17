package caixeiroviajante;

/**
 * Aresta
 */
public class Caminho {

    private Cidade origem;
    private Cidade destino;
    private float valor;

    public Caminho(Cidade origem, Cidade destino) {
        this.origem = origem;
        this.destino = destino;
    }

    public Caminho() {
    }

    public Cidade getOrigem() {
        return origem;
    }

    public void setOrigem(Cidade origem) {
        this.origem = origem;
    }

    public Cidade getDestino() {
        return destino;
    }

    public void setDestino(Cidade destino) {
        this.destino = destino;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }
}
