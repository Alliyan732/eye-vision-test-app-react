import React from "react";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Routes,
// } from "react-router-dom";

import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import ColorBlindnessTestScreen from "./pages/ColorBlindTest";

function App() {
  return (
    <Router>
      <Route exact path="/" component={ColorBlindnessTestScreen} />
      <Route path="/about" component={About} />
    </Router>
  )

  // <h1 className="text-3xl font-bold underline">This is React + Vite + Tailwind Template</h1>;
}

export default App;
