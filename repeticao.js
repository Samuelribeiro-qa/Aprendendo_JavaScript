// Repetição por array

//array.forEach(element => {    
//});

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

cidades.forEach((elemento, index) => {
    console.log('Execução numero: ' + index)
    console.log(elemento)
})

// for normal

//for (let index = 0; index < 10; index++) {
//}

for (let indcice = 0; indcice < cidades.length; indcice++) {
    console.log(cidades[indcice])
}