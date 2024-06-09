import React from 'react'
import { CheckBadgeIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import { useMutateAuth } from '../hooks/useMutateAuth'

export const Auth = () => {
  const [email, setEmail] = React.useState('')
  const [pw, setPw] = React.useState('')
  const [isLogin, setIsLogin] = React.useState(true)
  const { loginMutation, registerMutation } = useMutateAuth()

  const submitAuthHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      loginMutation.mutate({
        email: email,
        password: pw,
      })
    } else {
      await registerMutation
        .mutateAsync({
          email: email,
          password: pw,
        })
        .then(() =>
          loginMutation.mutate({
            email: email,
            password: pw,
          })
        )
    }
  }

  return (
    <div>
      <div>
        <span>Todo app by React/Go(Echo)</span>
      </div>
      <h2>{isLogin ? 'Login' : 'Create a new account'}</h2>
      <form onSubmit={submitAuthHandler}>
        <div>
          <input
            name="email"
            type="email"
            autoFocus
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
        </div>
        <div>
          <button disabled={!email || !pw} type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>login/signUp切り替え</button>
    </div>
  )
}
