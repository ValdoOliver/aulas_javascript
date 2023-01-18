const API_URL = 'https://jsonplaceholder.typicode.com/users'

/*
async function getUSersIds() {
  const listadobanco = await fetch(API_URL);
  const banco = await listadobanco.json();

  banco.forEach((cadastro) => {
    console.log(`Id: ${cadastro.id} Nome: ${cadastro.name} Username: ${cadastro.username}`);
  });
}

getUSersIds()

*/
async function buscaPorEmail() {
  const listadobanco = await fetch(API_URL);
  const banco = await listadobanco.json();

  let acharpessoa
  banco.forEach((usuario) => {

    if (usuario.email === 'Shanna@melissa.tv')
      acharpessoa = usuario
    //if(usuario.email === "Shanna@melissa.tv")
    // user = usuario

    
  });

    let buscaunica = banco.find((usuario)=>{

    if (usuario.email === 'Lucio_Hettinger@annie.ca'){
      return true
      //forma enxuta return usuario.email === 'Nathan@yesenia.net'
      // saber posição usar findIndex
    }
    
  })
  console.log(buscaunica)


  const total = banco.reduce((acc) => acc + 1, 0); // calculando numeros de users
  console.log(`Total de usuários: ${total}`);

  console.log(acharpessoa) // todos dados
  console.log(acharpessoa.phone) // só telefone
  console.log(acharpessoa.name) // por nome

  //filtrando por id especifico ou todos

  const retornartodos = banco.filter((usuario)=>{
    return usuario.id === 3
  })
  console.log(retornartodos)



  
}


buscaPorEmail(); 

