import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ColorBlindnessTestScreen from './pages/ColorBlindTest';
import VisionAcuityTest from './pages/VisionAcuityTest'
import ContrastSensitivityTestScreen from "./pages/ContrastSensitivityTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ColorBlindnessTestScreen />} />
        <Route path="/vision_acuity_test" element={<VisionAcuityTest />} />
        <Route path="/contrast_sensitivity_test" element={<ContrastSensitivityTestScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
