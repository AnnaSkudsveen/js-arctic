import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<RouteNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
