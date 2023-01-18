/** 
exercicio 2 : considerando mes 
30 dias, dado uma quantidade de dias
dizer qual mes e dias do mes esse dia
 vair cair
 Math.floor para corrigir decimal
*/

const dias = 70
const qtMeses = Math.floor (dias / 30)
const qtdiastotal = qtMeses * 30
const diaspassados = dias - qtdiastotal

console.log( diaspassados)


