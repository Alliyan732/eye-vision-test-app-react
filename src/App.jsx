import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// layouts
import Navbar from "./layouts/Navbar";

// Pages
import ColorBlindnessTestScreen from './pages/ColorBlindTest';
import VisionAcuityTest from './pages/VisionAcuityTest'
import ContrastSensitivityTestScreen from "./pages/ContrastSensitivityTest";
import AstigmatismTestScreen from "./pages/AstigmatismTest";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={< Navbar />} > 
        <Route index path="/" element={<ColorBlindnessTestScreen />} />
        <Route path="vision_acuity_test" element={<VisionAcuityTest />} />
        <Route path="contrast_sensitivity_test" element={<ContrastSensitivityTestScreen />} />
        <Route path="astigmatism_test" element={<AstigmatismTestScreen />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
