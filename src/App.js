import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import DashBoard from './Components/Dashboard/DashBoard';
import Email from './Components/Email/Email';

const App=()=>{
  return(
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/mail' element={<Email/>}/>
      </Routes>
     </Router>
  )
}

export default App;