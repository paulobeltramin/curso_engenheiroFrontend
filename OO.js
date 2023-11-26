
// constructor
function Carro(modelo, ano, valor) {

    this.modelo = modelo;
    this.ano = ano;
    this.valor = valor;

}

// carro 1 
function Gol(modelo, ano, valor) {
    Carro.call(this, modelo, ano, valor);
}
const gol = new Gol("confortline", 2012, 18000)
console.log(gol)


// carro2
function Voyage(modelo, ano, valor) {
    Carro.call(this, modelo, ano, valor);
}
const voyage = new Voyage("highline", 2018, 25000)

//    instance

console.log(voyage instanceof Carro)
console.log(voyage instanceof Voyage)
console.log(gol instanceof Voyage)
console.log(gol instanceof Gol)