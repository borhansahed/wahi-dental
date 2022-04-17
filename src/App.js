import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Service from './Service/Service';
import Blogs from './Blogs/Blogs';
import About from './About/About';
import Login from './Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Service></Service>}></Route>
        <Route path='/blogs'element={<Blogs></Blogs>}></Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
