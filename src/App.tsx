import React from 'react';
//styled
import "bootstrap/dist/css/bootstrap.min.css";
//route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "../src/contants/routes";
//components
import Navbar from "./components/navbar";
//pages
import Home from "./pages/home";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path={ROUTES.HOME} element={<Home/>}/>
          </Routes>
      </Router>
  );
}

export default App;
