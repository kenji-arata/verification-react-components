import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SampleButton } from './shopify/sampleButton'
import { Auth } from './toDoApp/auth'
import { ToDo } from './toDoApp/toDo'
import axios from 'axios'
import { CsrfToken } from './types'

function App() {
  React.useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const { data } = await axios.get<CsrfToken>('http://localhost:8080/csrf')
      axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
    }
    getCsrfToken()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/shopify-button" element={<SampleButton />} />
      </Routes>
    </Router>
  )
}

export default App
