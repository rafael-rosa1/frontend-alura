const cpf = "33298104833";

const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

console.log(cpfFormatado);


const frase = "Que merda cara, que merda";
// const fraseAtualizada = frase.replace("merda", "*****");
const fraseAtualizada = frase.replace(/merda/g, "*****");
console.log(fraseAtualizada);