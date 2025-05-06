let input = document.getElementById("numero")
let num = input.value
let mensagem = document.getElementById("msg")
let botao = document.getElementById("send")


let teste = 2


meuBotao.addEventListener('click', function() {

    if (perfect_num(num) == True){
        mensagem.innerHTML("Número perfeito")
    }
    else{
        mensagem.innerHTML("Número não perfeiyo")
    }
  });




function perfect_num(a){

    i = 0
    somadivisores = 0
    while (i <= a) {
        if (i % a == 0){
            somadivisores = somadivisores + i
        }
        
        i = i + 1
    }

    if (somadivisores == a){
        return True
    }
    else {
        return False
    }

}

perfect_num(teste)