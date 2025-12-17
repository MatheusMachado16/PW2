// criando a promessa
const myPromise = new Promise((resolve, reject) =>{
    const nome = "Matheus"

    if (nome === "Matheus"){
        resolve("Encontrado")
    }else{
        reject("Não encontrado")
    }
})

myPromise.then((data) =>{
    console.log(data)
})

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) =>{
    const nome = "Matheus"

    if (nome === "Matheus"){
        resolve("Encontrado")
    }else{
        reject("Não encontrado")
    }
})

myPromise2
    .then((data) =>{
    return data.toLowerCase()
})
    .then((stringModificada) =>{
    console.log(stringModificada)
})


// Retorno do catch

const myPromise3 = new Promise((resolve, reject) =>{
    const nome = "Joao"

    if (nome === "Matheus"){
        resolve("Encontrado")
    }else{
        reject("Não encontrado")
    }
})


myPromise3.then((data) => {
    console.log(data)
}).catch((erro) => {
    console.log("Aconteceu um erro: " + erro)
})


// Resolver várias promessas com all
const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("P1 ok! Timeout")
        
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok!")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 ok!")
})

const resolvaAll = Promise.all([p1,p2,p3]).then((data)=> {
    console.log(data)
})

console.log('Depois do all')

// Várias promessas com o race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("P4 ok! Timeout")
        
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve("P5 ok!")
})

const p6 = new Promise((resolve, reject) => {
    resolve("P6 ok!")
})

const resolvaAllRace = Promise.race([p4,p5,p6]).then((data)=> {
    console.log(data)
})


// Fetch request na API do GitHub
// Fetch API

const userName = 'MatheusMachado16'

const API_URL = `https://api.github.com/users/${userName}`

fetch(API_URL,{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) =>{
    console.log(`Nome do usuário: ${data.name}`)
}).catch((erro) => {
    console.log(`Houve um erro: ${erro}`)
})
