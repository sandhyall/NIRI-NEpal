import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/UserLayout/Layout";
import Landing from "./Component/UserLayout/Landing";
import Contactus from "./Pages/Contactus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Landing/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;