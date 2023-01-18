function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);







/* funcao saber se numero é par

function calc(n){
  const verifica = n % 2 === 0
  return verifica
  
}
const okPar = calc(3)
console.log(okPar)

*/


/*Calculadora

function soma(a, b) {
  return a + b
}
function sub(a, b) {
  return a - b
}


function calc(tipo) {
  const a = 1
  const b = 2
  if (tipo === "soma") return soma(a, b)
  else if (tipo === "sub") return sub(a, b)

}

const res = calc("sub")
console.log(res)

*/