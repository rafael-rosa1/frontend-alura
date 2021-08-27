

// for (let i = 0; i < nomes.length; i = i + 1) {
//     console.log(nomes[i], i);
// }
// const nomes = ['Kotlin', 'JavaScript', 'Android', 'Linux'];

// const retornoDoForEach = nomes.forEach(function (nome, i) {
//     console.log(nome, i);
// })
// console.log(retornoDoForEach)

// const retornoDoMap = nomes.map(function(nome, i) {
//         console.log(nome, i)
// })


const nomes = ['Kotlin', 'JavaScript', 'Android', 'Linux'];

function nossoMap(array, funcao) {
    const novoArray = [];
    for (let i = 0; i < array.length; i = i +1) {
        const itemDoArray = array[i];
        novoArray.push(funcao(itemDoArray, i));
    }
    return novoArray
}
const retornoDoNossoMap = nossoMap (nomes, function(nome, i) {
    console.log(nome, i);

    return `<li>${nome}</li>`
})

console.log(retornoDoNossoMap)


// function nossoForEach(array, funcao) {
//     for (let i = 0; i < array.length; i = i +1) {
//         const itemDoArray = array[i];
//         funcao(itemDoArray, i);
//     }
// }

// console.log(retornoDoMap)
// nossoForEach(function (nome, i) {
//     console.log(nome, i);
// });
