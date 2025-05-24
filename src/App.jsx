import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import UsersDashboard from './Components/UsersDashboard'
import Registration from './Components/Registration'
import EditUser from './Components/EditUser'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<UsersDashboard/>}></Route>
        <Route path='/dashboard/addUser' element={<Registration/>}></Route>
        <Route path='/dashboard/edit/:id' element={<EditUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
