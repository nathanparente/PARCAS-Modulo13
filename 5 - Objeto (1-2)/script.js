// O ARRAY É UMA LISTAGEM NUMERADA E O OBJETO É UMA LISTAGEM NOMEADA

/*let carros = [
    'Corolla',
    'Palio',
    'Ferrari',
    'Uno',
];*/

let carro = {
    nome:'Fiat',
    ano:'2016',
    peso:'800kg',
    ligar:function(){
        console.log("VRUM..VRUM..");
    }
};

//console.log(carro['nome'])

carro.ligar();

console.log(carro.ano);

console.log("Peso:"+carro.ano);