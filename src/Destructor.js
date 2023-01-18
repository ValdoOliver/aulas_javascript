const pessoa = {
  nome:" valdo",
  sobrenome: "oliveira",
  idade:"44",
}

//destructor
/*
const {nome, idade, sobrenome} = pessoa
console.log(nome, idade, sobrenome)
//destructor
*/
// peuxando e alterando dados com ...
const pessoaComMaisDados = {
  ...pessoa,
  idade: 33,
  senha: "456",
}
console.log(pessoaComMaisDados)

const lista = [10,20,3,40]
const [a,b,c,d] = lista


const novaLista = [0, ...lista, 5]
console.log(lista)


/*
const lista = [1,2,3,4]
const [a,b] = lista
console.log(a,b)
*/

