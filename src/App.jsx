import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";

function App() {
  return (
    <Routes>
      <Route index element={<MainLayout />}>
        
      </Route>
    </Routes>
  );
}

export default App;
