
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './component/AddUser/AddUser';
import Home from './component/Home/Home';
import User from './component/User/User';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user/add" element={<AddUser></AddUser>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
