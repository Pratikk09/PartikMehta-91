import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Page/Home";
import About from "./Component/Page/About";
import Contact from "./Component/Page/Contact";
import { Container } from "react-bootstrap";
import Products from "./Component/Module/Products";
import { LearnHooks } from "./Component/Module/LearnHooks";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LearnHooks" element={<LearnHooks/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
