// Exercicio 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes:
// Eduardo, Maria, Fernando, Joao e Francisco
// Numero de execução, começando em 1 
// Nome que esta sendo executado
// Separadores

// Execução: 1 
// Nome: Eduardo
// ----------------

const nomes =['Eduardo', 'Maria', 'Fernando', 'Joao', 'Francisco']
    nomes.forEach((nome, index) =>{
        console.log('Execução: ', + index + 1)
        console.log('Nome: ' + nome)
        console.log('----------------------')
    })