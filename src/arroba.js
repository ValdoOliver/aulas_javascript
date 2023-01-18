// Arroba a frente de todos names


const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUpdatedUsers() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data)
    const updatedUsers = data.map(user => {
      user.name = `@${user.name}`;
      return user;
     
    });

    console.log(updatedUsers);
  } catch (error) {
    console.log(error);
  }
}

getUpdatedUsers();