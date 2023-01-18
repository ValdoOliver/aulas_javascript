const API_URL = 'https://jsonplaceholder.typicode.com/albums'

async function getalbums(userId) {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    const filtered = data.filter((objeto) => objeto.userId === userId);

    filtered.forEach((item) => {

      console.log(`id: ${item.id}, nome: ${item.title}`);

    });
  } catch (error) {
    console.log(error);
  }
}
getalbums(1);

