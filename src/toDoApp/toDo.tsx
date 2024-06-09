import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useMutateAuth } from '../hooks/useMutateAuth'

export const ToDo = () => {
  const queryClient = useQueryClient()
  const { logoutMutation } = useMutateAuth()
  const logout = async () => {
    await logoutMutation.mutateAsync()
    queryClient.removeQueries(['tasks'])
  }
  return (
    <div>
      <span>Task Manager</span>
      <button onClick={logout}>logout</button>
    </div>
  )
}
