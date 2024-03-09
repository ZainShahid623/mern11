import Navbar from "./components/Navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Contactus from "./components/Contactus/Contactus";
import Aboutus from "./components/Aboutus/Aboutus";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact-us" element={<Contactus/>}></Route>
        <Route path="/about-us" element={<Aboutus/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>


      </Routes>
    </div>
  );
}

export default App;
