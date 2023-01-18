const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUpdatedUsers() {
try {
const response = await fetch(API_URL);
const data = await response.json();

const updatedUsers = data.find(user => {
user.name = `${"@"} + ${user.name}`
return user;
});
console.log(updatedUsers);
} catch (error) {
console.log(error);
}
}
getUpdatedUsers();