import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Corousel from "./Components/Corousel";
// import Home from './Components/Home';
// import ImageSlider from './Components/ImageSlider';
import Navbar from "./Components/Navbar";
import Product from "./Components/Products";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Corousel />}></Route>
          <Route exact path="/Products" element={<Product />}></Route>
          <Route exact path="/Products/:id" element={<Product />}></Route>
        </Routes>

    </>
  );
}

export default App;
