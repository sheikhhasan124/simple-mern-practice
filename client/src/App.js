
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './component/AddUser/AddUser';
import Home from './component/Home/Home';
import UpdateData from './component/UpdatData/UpdateData';
import User from './dayOne/User/User';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user/add" element={<AddUser></AddUser>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/update/:id" element={<UpdateData></UpdateData>}></Route>
      </Routes>
    </div>
  );
}

export default App;
