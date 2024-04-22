import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hoge } from "./hoge";
import { Fuga } from "./fuga";
import { SampleButton } from "./shopify/sampleButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>ルート</div>} />
        <Route path="/hoge" element={<Hoge />} />
        <Route path="/fuga" element={<Fuga />} />
        <Route path="/shopify-button" element={<SampleButton />} />
      </Routes>
    </Router>
  );
}

export default App;
