import {Route, Routes } from "react-router-dom";
import "./App.css";
import Corousel from "./Components/Corousel";
// import Home from './Components/Home';
// import ImageSlider from './Components/ImageSlider';
import Navbar from "./Components/Navbar";
import Product from "./Components/product";
import Products from "./Components/products";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Corousel />}></Route>
          <Route exact path="/Products" element={<Products />}></Route>
          <Route exact path="/Products/:id" element={<Product />}></Route>
        </Routes>

    </>
  );
}

export default App;
