import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Classpage from "./pages/Classpage";
import Testimonials from "./pages/Testimonials";
import Homepage from "./pages/homepage";
import Faqpage from "./pages/Faqpage";
import AddJobs from "./pages/AddJobs";
import Form from "./pages/form";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import EmployeeForm from "./pages/employeeform";

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ['/form'];


  // Function to check if the current route should hide header and footer
  const shouldHideHeaderFooter = () => {
    return hideHeaderFooterRoutes.includes(location.pathname);
  };

  return (
    <div>
      {!shouldHideHeaderFooter() && <NavbarComponent/>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/class" element={<Classpage />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/faq" element={<Faqpage />} />
        <Route path="/addjobs" element={<AddJobs />} />
        <Route path = "/applyform" element={<EmployeeForm/>} />
        <Route path="/form" element={<Form />} />
      </Routes>
      {!shouldHideHeaderFooter() && <Footer />}
    </div>
  );
}

export default App;
