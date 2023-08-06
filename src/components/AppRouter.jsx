import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import About from "../pages/About";
// import Posts from "../pages/Posts";
// import PostsIdPage from "../pages/PostIdPage";
import { routes } from "./router/routes";

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
      {/* <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostsIdPage />} /> */}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  );
}
