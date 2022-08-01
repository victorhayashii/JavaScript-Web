//toca o botao
function tocaSom(idElementoAudio){
    // querySelector encontra o 1° elemento que ele achar 
    document.querySelector(idElementoAudio).play();
}
//querySelectorAll faz com que ele busque todos os elementos que tenham uma coincidência informada
//const é quando por exemplo essa lista vai se tornar outra coisa? vai receber outro tipo de dados, como nao é necessario usar o const
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1];

    //concatena um texto com o valor de uma variavel
    //template string
    const idAudio = `#som_${instrumento}`;

    // a funcao anonima serve para voce declarar uma função a algum elemento podendo inserir parenteses e parametros
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event){
        console.log(event.code);
        if(event.code === "Space" || event.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup() = function(event){
        if(event.code === "Space" || event.code === "Enter"){
            tecla.classList.remove('ativa');
            
        }
    }
}