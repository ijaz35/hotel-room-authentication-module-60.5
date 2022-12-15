import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home'
import Checkin from './Pages/Checkin/Checkin';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkin' element={
          <RequireAuth>
            <Checkin></Checkin>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
