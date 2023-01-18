const user = [
  {nome:"ana"},
  {nome: "ovo"},
  {nome:"arara"},
  {nome:"cavalo"},
  {nome:"Reinier"},
  {nome:"aibofobia"},
];

function findPalindromeUser(users) {
  let palindrome = users.filter(item => item.nome === item.nome.split('').reverse().join(''));
  let nonPalindrome = users.filter(item => item.nome !== item.nome.split('').reverse().join(''));
  
  console.log("Palindrome Users: ", palindrome);
  console.log("Non Palindrome Users: ", nonPalindrome);
}

// Inserindo arroba em todos users

const updatedUsers = user.map(arroba => {
  arroba.nome = "@" + arroba.nome;
  return user;
});

console.log(updatedUsers);







findPalindromeUser(user);// logs [{nome: "ana"}, {nome: "arara"}]


