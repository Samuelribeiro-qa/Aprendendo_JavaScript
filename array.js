const paises = ['Brasil', 'Portugal', 'Argentina', 'Alemanha']  // Lista de dados

console.log('Acessando o país: ' + paises[0])  // Acessando uma posição do array
console.log('Tamanho do array: ' + paises.length)  // Tamanho do array

// Operações com o array

paises.push('USA') // Adiciona no final do array
paises.pop() // Remove o ultimo elemento
paises.unshift('Canadá') // Adiciona no começo da array 
paises.shift() // Remove o primeiro elemento

console.log(paises)

const videogame = ['Super Nintendo', 'Play station 1', 'Play station 2', 'Xbox 360', 'Play station 3', 'Xbox one']

console.log('Gerações de video Games: ' + videogame[2])
console.log('Tamanho do array: ' + videogame.length)
console.log(videogame)