import { useState } from "react";
import News from "./components/News";
import { Navbar } from "./components/Navbar";
import "./App.css";
import Footer from "./components/footer";
import { getTopHeadlines } from "./components/Api_file";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tranding_news" element={<News/>} />
      </Routes>
    </>
  );
}

export default App;
