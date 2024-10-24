import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}>
        
      </Route>
    </Routes>
  );
}

export default App;
