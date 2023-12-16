import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ColorBlindnessTestScreen from "./pages/ColorBlindTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ColorBlindnessTestScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
