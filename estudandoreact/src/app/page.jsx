'use client'

import { useEffect, useState } from 'react'
import { getUsers } from './services/api'
import { UserForm } from './components/Userform'

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  // Carrega os usuários iniciais
  async function loadUsers() {
    const data = await getUsers()
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  // Recebe o usuário criado e adiciona na lista local
  function handleUserSaved(newUser) {
    setUsers(prev => [...prev, newUser])
  }

  return (
    <main>
      <h1>Usuários</h1>

      <UserForm onSaved={handleUserSaved} />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
