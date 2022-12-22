//Routes dom
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

//!= pages
import About from "../pages/About";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";

//Header + footer (présent sur toutes les pages))
import Footer from "./Footer";
import Header from "./Header";
import "../styles/Layout.css";
import "../styles/Footer.css";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div class="container">
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* * permet d'envoyer vers la page 404 lorsque l'url n'existe pas */}
          <Route path="*" element={<Page404 />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
