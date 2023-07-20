import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
