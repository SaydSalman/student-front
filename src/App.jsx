
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import Register from './Pages/Register'
import UserDetails from './Pages/UserDetails'
import Header from './components/Header'
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/register'} element={<Register/>}/>
    <Route path={'/details'} element={<UserDetails/>}/>
    <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    </>
  )
}

export default App
