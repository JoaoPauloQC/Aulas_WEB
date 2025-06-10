const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

valores[10] = 20
console.log(valores[4])
console.log(typeof(valores[4]))

valores.push({id:3 , name:3})

console.log(valores[11].id)
console.log(typeof(valores[11]))

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof(valores))

//let id_recent = valores[valores.length-1].id + 1
//console.log(id_recent)

// function createUser (name) {
   // let id_recent = valores[valores.length-1].id + 1
 //   valores.push({id : id_recent , name: name})


//}

//createUser("joao")

//console.log(valores[12].id)