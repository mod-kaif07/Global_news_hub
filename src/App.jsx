import { useState } from "react";
import News from "./components/News";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tranding_news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
