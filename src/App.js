import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout"
import Browse from "./pages/Browse";
import CookableRecipes from "./pages/CookableRecipes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Browse />} />
          <Route path="cookable" element={<CookableRecipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
