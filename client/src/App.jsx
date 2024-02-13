import './App.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/navbar/Menu'
import Register from './components/auth/Register'
function App () {
  return (
    <>
      <Menu />

      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
