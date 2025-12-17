// Sintaxe

// function primeiraFuncao(){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//            console.log('Esperou isso aqui!')
//            resolve() 
//         }, 1000)
//     })
// }

// async function segundaFuncao(){
//     console.log('Iniciou')
//     await primeiraFuncao()
//     console.log('Terminou')

// }

// segundaFuncao()

// Prático
function getUser(id){
    return fetch(`https://dummyjson.com/users/${id}`)
        .then((data) => data.json())
        .catch((erro) => console.log(erro))
}

async function mostrarUserName (id) {
    
    try{

        const user = await getUser(id)
        console.log(`O nome do usuário: ${user.firstName}`)
        
    } catch(erro) {
        console.log(`Erro: ${erro}`)
    }
}

mostrarUserName(7)