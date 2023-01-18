const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers(){
   const response = await fetch(API_URL)
   const data = await response.json()
   console.log(data)
}

getUsers()

let novalista = [2,4,6,8,11,20]
console.log(novalista.filter((elemento)=>{
  return elemento % 2 == 2
})) 
