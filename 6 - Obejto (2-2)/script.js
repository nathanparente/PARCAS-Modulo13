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
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log("VRUM..VRUM..");
    },
    acelerar:function(){
        if(this.ligado == true){
            console.log("Riiiiihhhh");
        } else {
            console.log(this.nome+ " não está ligado")
        }

    }
};

//console.log(carro['nome'])

console.log("Ligando o "+carro.nome);


carro.ligar();
carro.acelerar();
