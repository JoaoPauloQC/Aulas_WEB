// trabalhando com array e laço de repetição do... while

const alunos = [

    {
        id: 1 ,
        nome: "João" ,
        notas : [5]
    },
    {
        id: 2 ,
        nome: "Maria" ,
        notas : [2]
    }


]

let index=0
let somaDasNotas = 0
let totalAlunos = alunos.length

do{
    somaDasNotas += alunos[index].notas[0]
    console.log(somaDasNotas)
    index++
}
while(index<totalAlunos)
console.log(somaDasNotas)

function createAluno(name){
    const lastid = alunos[alunos.length -1].id

    alunos.push({id: lastid+1, nome : name ,notas:[]})
}

function addnota(id,nota){

    alunos[id-1].notas.push(nota)

}

function somadosalunos(){

    alunos.forEach(a =>{
        a.notas.forEach(n =>{
            somaDasNotas += n
        })


    })

    return somaDasNotas
}


createAluno("vit")
createAluno("ale")
createAluno("pedro")
addnota(1,2)
addnota(2,10)
addnota(4,9)

console.log(alunos)
console.log(somadosalunos())