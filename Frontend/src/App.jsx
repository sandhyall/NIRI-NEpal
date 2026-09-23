import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/UserLayout/Layout";
import Landing from "./Component/UserLayout/Landing";
import Contactus from "./Pages/Contactus";
import Aboutpage from "./Pages/Aboutpage";
import BoardOfDirectors from "./Pages/BoardDirect";
import MembersGrid from "./Pages/Membersgrid";
import CurrentInvestigators from "./Pages/CurrentInvenstigation";
import BecomeAnInvestigator from "./Pages/Becomeaninvestigator";
import Projects from "./Component/UserLayout/Project";
import VolunteerOpportunities from "./Component/GetInvolved/Volunteeropportunities";
import ResearchInternship from "./Component/GetInvolved/Researchinternship ";
import Event from "./Component/Activities/Event";
import News from "./Component/Activities/News";
import Newspaper from "./Component/Activities/Newspaper";
import Publication from "./Component/Activities/Publication";
import Blog from "./Component/Activities/Blog";
import Support from "./Pages/Support";
import Donate from "./Pages/Donate";
import PartnerWithUs from "./Pages/Partner";

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
        <Route path='/current' element={<CurrentInvestigators/>}/>
        <Route path="/invest" element={<BecomeAnInvestigator/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/vol" element={<VolunteerOpportunities/>}/>
          <Route path="/internship" element={<ResearchInternship/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/newspaper" element={<Newspaper/>}/>
          <Route path="/publication" element={<Publication/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/partner" element={<PartnerWithUs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;