function cambiarTexto(id, texto){
    document.getElementById(id).innerText = texto;
}

function cambiarColor(id, color){
    document.getElementById(id).style.color = color;
}

function cambiarTamanio(id, valor){
    document.getElementById(id).style.fontSize = valor;
}
function agregarElemento(id, elemento){
    document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + elemento;
}