import React from 'react'
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from './Home'
import SiginIn from './SiginIn'
import SignUp from './SignUp'

const Navbar = () => {
  return (
    <div className='container'>
        <BrowserRouter>
          <ul>
            <li><Link to="/signin" >SignIn</Link></li>
            <li><Link to="/signup" >SignUp</Link></li>
          </ul>
          <Routes>
            <Route path='/signin' element={<SiginIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar