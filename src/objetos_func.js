//const person ={
 // name: "valdo",
 // lastname: "souza",
  //idade: 44,
//}

//Object.keys criar com todos valores
//console.log(Object.values(person))

//Object.keys criar com todos keys
//console.log(Object.keys(person))

//Object.keys criar com todos entries

//Modelo compra de livros em 2 stilos diferente com
// desconto de 10%

const lista ={
  'livro a' : 10.00, 
  'livro b' : 10.59, 
  'livro c' : 10.00, 
}
const lista2 ={
  'livro d': 10.00, 
  'livro e': 15.00,
}
const livroscomprados2 = (Object.values(lista2))
const livroscomprados = (Object.values(lista))
const soma = livroscomprados2.reduce((val,acc)=> val + acc,0) + livroscomprados.reduce((val,acc)=> val + acc,0);
const desconto = soma * 0.10;
const total = soma - desconto;
console.log(total.toFixed(2));










/*

Forma incorretta
const lista ={
  'livro a' : 10.00, 
  'livro b' : 10.59, 
  'livro c' : 10.00, 
}
const lista2 ={
  'livro d': 10.00, 
  'livro e': 15.00,
}
const livroscomprados2 = (Object.values(lista2))
const livroscomprados = (Object.values(lista))
const soma = parseInt( livroscomprados2) + livroscomprados.reduce((val,acc,)=>{
       return val + acc 
},0 )
 console.log(soma)


*/

