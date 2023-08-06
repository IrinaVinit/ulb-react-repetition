import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import About from "../pages/About";
// import Posts from "../pages/Posts";
// import PostsIdPage from "../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "./router/routes";

export default function AppRouter() {
  return (
    <Routes>
      {privateRoutes?.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
      {publicRoutes?.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
      {/* <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostsIdPage />} /> */}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  );
}
