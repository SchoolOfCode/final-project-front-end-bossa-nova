import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../../Pages/Home";
import AddNew from "../../Pages/AddNew";
import Update from "../../Pages/Update";
import ErrorPage from "../../Pages/ErrorPage";
import Login from "../../Pages/Login";
import Resources from "../../Pages/Resources";

import styles from "./Hero.module.css";

function Hero() {
  function RouterRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/update" element={<Update />} />
        <Route path="/update/:_id" element={<Update />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    );
  }

  return (
    <main className={styles.HeroSection}>
      <RouterRoutes />
    </main>
  );
}

export default Hero;
