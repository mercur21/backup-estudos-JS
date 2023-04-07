// Arrays podem ser criadas com let, var e const.
let L = []

L.push(2) // Comando array.push(param) adiciona um elemento ao fim lista.

console.log(L) // A saída será [ 2 ]

/////////////////////////////////////--//////////////////////////////////

let lista3 = [1,2,3,4]

lista3.unshift(3) // Função array.unshift(param) adiciona um elememto ao início da lista.

console.log(lista3) // Saída [ 3, 1, 2, 3, 4 ]

/////////////////////////////////////--//////////////////////////////////

let L0 = [1]
let L1 = [2]

let L2 = L0.concat(L1) // Função array.concat(param) concatena/soma duas arrays.

console.log(L2) // Saída [ 1, 2 ]

////////////////////////////////--//////////////////////////////////

let lista = [1,2,3,4,5]

let lista2 = lista.reverse() // Função reverse reverte a ordem dos índices.

console.log(lista2) // Saída [ 5, 4, 3, 2, 1 ]

//////////////////////////////--///////////////////////////

let lista4 = [1,2,3]

lista4.pop() // Função array.pop() retira o último elemento da lista.

console.log(lista4) // Saída [ 1, 2 ]

/////////////////////////////--///////////////////////////////

let lista5 = [1,2,3,4,5]

lista5.shift() // Função array.shift() retira o primeiro elemento da lista.

console.log(lista5) // Saída [ 2, 3, 4, 5 ]

//////////////////////////////////--/////////////////////////

// Função slice não altera a lista/valor inicial 
let lista6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let lista7 = lista6.slice(0, lista6.length / 2) // A função array.slice(param1, param2) fatia/divide uma array do param1 até o param2.
let lista8 = lista6.slice(lista6.length / 2) // A função array.slice(param2) já entende que é do parametro citado até o fim da lista.

console.log(lista7) // Saída [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(lista8) // Saída [ 11, 12, 13, 14, 15,16, 17, 18, 19, 20 ]

//////////////////////////////////--///////////////////////////

let lista9 = [1,2,3,4,5,6,7]

lista9.splice(1,2, "Olokinho meu") // Função array.splice(inicio, fim, elemento-opcional) (fim é opcional pois ele pode remover todos os elementos em sua falta) ela remove elementos com índices 
//específicos. Splice também pode adicionar elementos no lugar de outros removidos.

console.log(lista9) // SAída [ 1, 4, 5, 6, 7 ]

/////////////////////////--//////////////////////////

let lista10 = [1,2,3,4,5,6]
let lista11 = [lista10]

if (lista11[0].includes(1)){ // Função array.includes(param) verifica se o param está incluído retornando true.
    console.log("Artur coringando")
}
if (lista10.includes(1)){ // Exemplo com lista de duas dimensões
    console.log("Artur coringando")
}

/////////////////////////////--////////////////////////////////////
