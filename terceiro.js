const quaseArray = {0: 'Rafael' , 1 : 'Ana' , 2: 'Bia'}
console.log(quaseArray)

console.log(quaseArray[0])

Object.defineProperty(quaseArray, 'toString' ,{
    value: function () {return Object.values(this)},
    
})

console.log(quaseArray[0])

const meuArray = ['Rafael' , 'Ana' , 'Bia' ]
console.log(quaseArray.toString(), meuArray)