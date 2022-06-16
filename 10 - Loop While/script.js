let html ='';

let c = 0;
while(c <= 10){
    html += "Número: "+c+"</br>";
    c++;
}

//COMPARANDO COM FOR 

for(let c=1; c<= 10; c++){
    html +="Número: "+c+"</br>";
}

document.getElementById('demo').innerHTML = html;