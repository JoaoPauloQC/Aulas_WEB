let a = 20
let b = 30

console.log("a =" , a)
console.log("b =" , b)

let c = a
let d = b
a = d
b = c


console.log("a passou a ser ", a)
console.log("b passou a ser ", b)