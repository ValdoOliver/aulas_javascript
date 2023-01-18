 const user = [
  {nome:"ana"},
  {nome: "ovo"},
  {nome:"arara"},
  {nome:"cavalo"},
  {nome:"Reinier"},
  {nome:"aibofobia"},
  
];

/*function strings
  .toLowerCase()
  .toupperCase()
  .split()


  Function arrays
  .reverse
  .map
  .filter
  .reduce
  .forEach
  .Find
  .join
  



*/


const palindromo = (palavra) =>{
  const pMinusculo = palavra.toLowerCase()
  const pArray = pMinusculo.split('').reverse()

   const verif = pArray.join('') === pMinusculo
   console.log(pArray.join(''))
   console.log(pMinusculo)
   console.log(verif)

}
  palindromo('aba')
 
