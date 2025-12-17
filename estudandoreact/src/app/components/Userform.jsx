'use client'

import { useState } from 'react'
import { createUser } from '../services/api'

export function UserForm({ onSaved }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const createdUser = await createUser({
      name,
      email,
    })

    setName('')
    setEmail('')

    if (onSaved) {
      onSaved(createdUser)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button>Salvar</button>
    </form>
  )
}
