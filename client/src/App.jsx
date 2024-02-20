import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Menu from './components/navbar/Menu'
import Register from './components/auth/Register'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import Login from './components/auth/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Auth from './components/Auth'
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
        <Route path='/login' element={<Auth><Login /></Auth>} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to="/"/>} />



      </Routes>
    </>
  )
}

export default App
