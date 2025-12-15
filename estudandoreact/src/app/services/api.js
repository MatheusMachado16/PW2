const API_URL = 'https://jsonplaceholder.typicode.com/users'


export async function getUsers() {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Erro ao buscar usuários')
    return response.json()
}


export async function createUser(user) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })


    if (!response.ok) throw new Error('Erro ao criar usuário')
    return response.json()
}