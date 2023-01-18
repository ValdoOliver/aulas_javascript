const API_URL = 'https://jsonplaceholder.typicode.com/albums'

async function getalbums(userId) {
 

  const listadobanco = await fetch(API_URL);
  

  const banco= await listadobanco.json();
  console.log(banco)

  const filtrando = banco.filter((cabeca) => cabeca.userId == userId);

  filtrando.forEach((element) => {

    console.log(`id:${element.id} titulo:${element.title}`);

  });
}

getalbums(1)

