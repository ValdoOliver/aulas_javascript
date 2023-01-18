function frasepalavras(frase){
  // Primeiro, a frase é convertida para minúsculas
  const fraseminus = frase.toLowerCase()

  // Em seguida, a frase é dividida em um array de palavras
  const fraseArray = fraseminus.split(' ')

  // Cria um objeto vazio chamado "contador"
  let contador = {}
     
  // Usa um loop para percorrer cada elemento do array
  fraseArray.forEach((element) => {
    // Se um elemento não existe no objeto "contador", então ele é adicionado e inicializado com 0
    if(!contador[element]){
      contador[element] = 0
    }
    // Se o elemento já existe, então o valor é incrementado em 1
    contador[element] = contador [element] +1
  })

  // Imprime o objeto "contador" no console
  console.log(contador)
}

// A função é chamada com a frase "Eu quero ser um desenvolvedor profissional".
frasepalavras('Eu quero ser um desenvolvedor profissional');
