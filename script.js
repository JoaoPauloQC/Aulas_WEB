let input = document.getElementById("num")

let mensagem = document.getElementById("msg")
let botao = document.getElementById("send")





botao.addEventListener('click', function (event) {

    let num = input.value 

    event.preventDefault()
    if (perfect_num(num) == true) {
        mensagem.classList.add("sucess")
        mensagem.innerHTML = "Número perfeito"

    }
    else {
        mensagem.innerHTML = "Número não perfeito"
        mensagem.classList.add("non-sucess")
    }
});




function perfect_num(a) {

    let i = 0
    let somadivisores = 0
    while (i < a) {
        if (a % i == 0) {
            somadivisores = somadivisores + i
        }
        console.log(i)
        console.log(somadivisores)
        i = i + 1
    }

    if (somadivisores == a) {
        return true
    }
    else {
        return false
    }

}
