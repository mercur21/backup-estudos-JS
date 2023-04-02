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
