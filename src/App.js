import React from "react";
import "./app.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}
