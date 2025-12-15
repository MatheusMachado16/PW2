'use client'

import { useEffect, useState } from 'react'
import { getUsers } from './services/api'
import { UserForm } from './components/Userform'

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (err) {
        alert(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  function handleUserAdded(user) {
    setUsers(prev => [...prev, user])
  }

  return (
    <main>
      <h1>Usuários</h1>

      <UserForm onUserAdded={handleUserAdded} />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {users.map(u => (
            <li key={u.id}>
              {u.name} – {u.email}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
