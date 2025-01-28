// Funções 
// Preciso Chamar
// Pode ou não receber parâmetros
// Pode ou não retornar dados

function gerarNome(nome, sobreNome) {
    return 'Nome: ' + nome  +  sobreNome 
}

//console.log(gerarNome('Samuel', ' Vinicius'))

const nomeGerado = gerarNome('Samuel', ' Ribeiro')
console.log(nomeGerado)