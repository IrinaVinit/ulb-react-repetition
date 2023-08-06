import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/routes";
import { AuthContext } from "../context";

export default function AppRouter() {
  const {isAuth} = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes?.map((route) => (
        <Route 
        path={route.path} 
        element={route.component} 
        key={route.path} />
      ))}
      <Route 
      path="*" 
      element={<Navigate to="/posts"/>} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes?.map((route) => (
        <Route 
        path={route.path} 
        element={route.component} 
        key={route.path}/>
      ))}
      <Route 
      path="*" 
      element={<Navigate to="/login" />} />
    </Routes>
  );
}
