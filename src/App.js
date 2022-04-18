
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Service from './Service/Service';
import Blogs from './Blogs/Blogs';
import About from './About/About';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound'
import RequireAuth from './RequireAuth/RequireAuth';
import Checkout from './Checkout/Checkout';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Service></Service>}></Route>
        <Route path='/checkout' element={
         
           <Checkout></Checkout>
         
        }></Route>
        <Route path='/blogs'element={<Blogs></Blogs>}></Route>
        <Route path='/about'element={<About></About>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
