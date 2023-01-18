const users = 
[{
  id: 1,
  nome: "Jose",
  sobrenome: "Fortes",
  email: "edvaldo@gmail",
  idade: 46,

  
  
  },
  { 
    id: 2,
    nome: "J",
    sobrenome: "For",
    email: "edvaldo",
    idade: 45,
 
}

]

function fullName({nome, sobrenome}){
  return `${nome} ${sobrenome} `
}
 

const newUSers = users.map((user) => {
   return {...user, 
   nomeCompleto : fullName(user),
   idade: user.id === 1 ? 10  : user.idade   // trocando idade de um id pessoal
   }
}) 

console.log(newUSers)