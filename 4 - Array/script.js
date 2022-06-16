/*
let carro1 = 'Corolla';
let carro2 = 'Palio';
let carro3 = 'Ferrari';
let carro4 = 'Uno';
let carro5 = 'Fiat';
*/

// EM VEZ DE DEFINIR DESSA FORMA, EU POSSO SIMPLESMENTE ADICIONAR TUDO DENTRO DO ARRAY

/*let carros = ['Corolla', 'Palio', 'Ferrari', 'Uno', 'Fiat'];

console.log(carros[2]);
*/

// OS ARRAYS SÃO ORDENADOS A PARTIR DO 0 COMO PRIMEIRO ITEM

let carros = [
    'Corolla',
    'Palio',
    'Ferrari',
    'Uno',
    'Fiat',
    function() {
        console.log('Testando 1...2...3');
    }
];

console.log(carros[5]())


let ingredientes = [
    ['uva', 'banana', 'melancia'],
    ['arroz', 'macarrão'],
];

console.log(ingredientes[1][0]);