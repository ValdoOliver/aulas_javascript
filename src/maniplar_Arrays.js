

//forEach passo por todos elementos do array

/*

lista.forEach((elemento, posicao)=>{
  console.log(`${elemento} esta na posição ${posicao}`)
 
 })
const lista2 = ["pessoa", "nome", "sobrenome"]

lista2.forEach((dados, posicao)=>{
  //console.log(`${dados} posicao=${posicao}`)
})
*/

/*
let lista = [2,4,6,8,11]
lista.forEach((elemento, posicao)=>{
  console.log(`${elemento} esta na posição ${posicao}`)
 
 })

 // retorna elemento 'find' 
 // retorna posição do elemento 'findIndex' 

let note = "nao encotrado"
let acharnumero = lista.findIndex((elemento) =>{
  if(elemento === 10) return  true 
  
  // some: retorna se for verdadeiro, exe: numero maior
})
console.log(acharnumero)

const some = lista.some((elemento)=>{
         if(elemento >= 11)
         return true
         return false
})
console.log(some)


const todos = lista.every(elemento => elemento % 2 == 0) // verificando se é todos
  

console.log(todos)


*/
/*
let novalista = [2,4,6,8,11]

 // splice: corta o array,  primeiro paramentro é o inicio
 // segundo paramentro é a quantidade que quer mostrar de items 
console.log(novalista.splice(0,4))
*/

/*
let novalista = [2,4,6,8,11]
    // map trocando elemento da array, exemplo multiplicando por 2
console.log(novalista.map((elemento)=>{
      return elemento * 2
})) 
*/

// filter: filtrar elemento dentro da array
// filtrando pares exemplo
/*
let novalista = [2,4,6,8,11,20]
console.log(novalista.filter((elemento)=>{
  return elemento % 2 == 2
})) 

*/


// reduce: reduz o array para algum outro, exemplo abaixo adição
let novalista2 = [2,20,30,40,50]

console.log(novalista2.reduce ((acumulado,elemento)=>{
  return elemento  + acumulado

}, ))


