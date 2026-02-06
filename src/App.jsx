import React from "react";
import Navbar from "./component/layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home.jsx";
import About from "./component/pages/About.jsx";
import Contact from "./component/pages/Contact.jsx";
import Footer from "./component/layout/Footer.jsx";
import ErrorPage from "./component/pages/ErrorPage.jsx";
import Register from "./component/pages/Register.jsx";
import Show from "./component/pages/Show.jsx";
import Update from "./component/pages/Update.jsx";
import Delete from "./component/pages/Delete.jsx";
import Login from "./component/pages/Login.jsx";
import Admin from "./component/pages/Admin.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/show" element={<Show />}></Route>
          <Route path="/update/:stuId" element={<Update />}></Route>
          <Route path="/delete/:stuId" element={<Delete />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
