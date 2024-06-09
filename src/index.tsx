import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({})

ReactDom.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App /> <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
