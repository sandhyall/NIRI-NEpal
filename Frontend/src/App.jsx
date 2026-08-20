import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/UserLayout/Layout";
import Landing from "./Component/UserLayout/Landing";
import Contactus from "./Pages/Contactus";
import Aboutpage from "./Pages/Aboutpage";
import BoardOfDirectors from "./Pages/BoardDirect";
import MembersGrid from "./Pages/Membersgrid";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Landing/>}/>
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/BoardOfDirectors" element={<BoardOfDirectors/>}/>
        <Route path="/member" element={<MembersGrid/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;