const frase = "Eu quero ser um desenvolvedor profiçççsssçional";
let count = {};

for (let i = 0; i < frase.length; i++) {
  const char = frase[i].toLowerCase();
  if (!count[char]) {
    count[char] = 1;
  } else {
    count[char]++;
  }
}
console.log(count);