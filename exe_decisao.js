// Exercicio 2 - Estrutura de decisão

// Percorrer um lista de cidades
// contendo: ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
// Para cada item, verificar se a cidade Florianópolis está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento procurado, avisar
// Numero da execução

// Execução: 1
// Cidade: São Paulo
// Encontradp / Não encontrado
//------------------------------

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
    cidades.forEach((Cidade, index)=>{
        console.log('Execução:', + index + 1)
        console.log('Cidade: ' + Cidade)
    if (Cidade == 'São Paulo'){
        console.log('Encontrado!')            
    } else {
        console.log('NÃO Encontrado!')
        }
        console.log('-------------------------')
    })