import React from "react";
import "./app.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <BrowserRouter>
    <div className="navbar">
      <div className="navbar-items">
        <Link to='/about'>О сайте</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
