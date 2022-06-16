function azul() {
    limpar();
    document.getElementById("título").classList.add('azul');
}

function vermelho() {
    limpar();
    document.getElementById("título").classList.add('vermelho');
}

function verde() {
    limpar();
    document.getElementById("título").classList.add('verde');
}

function limpar(){
    document.getElementById("título").classList.remove("azul");
    document.getElementById("título").classList.remove("vermelho");
    document.getElementById("título").classList.remove("verde");
    
}

function mostrarTelefone(elemento){
    elemento.style.display = "none";
    document.getElementById('telefone').style.display="block";
}


