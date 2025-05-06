let prova1 = 2
let prova2 = 4
let tr = 3
let faltas = 22
let media = ((prova1 * 0.4) + (prova2*0.6))* 0.7 + tr

if ((media >= 6) && (faltas < 24)){
    console.log("Aprovado com nota: ", media)
}
else{
    if ((media >=3) && (faltas < 24)){
        console.log("Aluno está de exame com nota: ", media)
    }
    else{
        console.log("Reprovado com nota: ", media)
    }
}