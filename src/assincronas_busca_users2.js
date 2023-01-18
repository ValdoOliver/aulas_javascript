const API_URL = 'https://jsonplaceholder.typicode.com/users'




async function buscausers() {
  const listadobanco = await fetch(API_URL);
  const banco = await listadobanco.json();

  let buscaunica = banco.find((usuario)=>{

    if (usuario.name === "Mrs. Dennis Schulist"){
      return true
      //forma enxuta return usuario.email === 'Nathan@yesenia.net'
      // saber posição usar findIndex
    }
    
  });
  console.log(buscaunica)

  
}

buscausers();