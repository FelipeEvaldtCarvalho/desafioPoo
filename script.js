// criar classe cozinha
class Cozinha {
    constructor(horaAbertura, horaFechamento, nome, pratoPrincipal) {
        this.horaAbertura = horaAbertura;
        this.horaFechamento = horaFechamento;
        this.nome = nome;
        this.pratoPrincipal = pratoPrincipal;                
    }
}
//criar classe ingredientes
class Ingredientes { 
    constructor(nome, validade) {
        this.nome = nome;
        this.validade = validade;
    }
}
//adicionar array vazia para cozinha ingredientes
Cozinha.prototype.ingredientes = new Array();
//criar metodo que retorne o tamanho da lista ingredientes da classe cozinha
Cozinha.prototype.retornaTamanho = function () {
    console.log (this.ingredientes.length);
}




const teste1 = new Cozinha (1,2,'coz','prato');
teste1.ingredientes =['fe', 'amor', 'paz'];



teste1.retornaTamanho();

//console.log(teste1.ingredientes.length);


