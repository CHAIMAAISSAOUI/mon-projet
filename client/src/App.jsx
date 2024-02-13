import './App.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/navbar/Menu'
import Register from './components/auth/Register'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
function App () {

  useEffect(()=>{
    toast.success('bonjour')
  }
  ,[])
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
