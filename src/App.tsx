import React from 'react';
//Route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "../src/contants/routes";

//Pages
import Home from "./pages/home";
function App() {
  return (
      <Router>
          <Routes>
              <Route path={ROUTES.HOME} element={<Home/>}/>
          </Routes>
      </Router>
  );
}

export default App;
