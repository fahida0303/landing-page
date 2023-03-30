import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Menu from "../src/components/Menu";
import List from "./components/List";
import MapView from "./components/MapComponent";



function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Menu/>}>
       <Route path="/List" element={<List/>} />
       <Route path="/Mapa" element={<MapView/>} />
       <Route path="/acercade" />

      </Route>
     </Routes>
    </>    
  );
}

export default App;
