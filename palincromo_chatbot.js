const user = [
  { nome: "ana" },
  { nome: "ovo" },
  { nome: "arara" },
  { nome: "cavalo" },
  { nome: "Reinier" },
  { nome: "aibofobia" },
];

const checkPalindromo = (palavra) => {
  const pMinusculo = palavra.toLowerCase();
  return pMinusculo.split('').reverse().join('');
   
}

const palavrasPalindromo = user.filter
  (u => checkPalindromo(u.nome)).map(u => u.nome);
console.log(palavrasPalindromo);

/*Este script usa a função "filter()" para selecionar somente os
  objetos cujo nome é palíndromo, e depois usa a função "map()"
  para extrair somente os nomes desses objetos.
  O resultado final é um array com somente as palavras palíndromo. */