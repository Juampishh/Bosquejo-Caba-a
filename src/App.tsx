import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import Genetic from "./pages/Genetic";
import BullInfo from "./pages/BullInfo";
import Auctions from "./pages/Auctions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="genetic" element={<Genetic />} />
        <Route path="auctions" element={<Auctions />} />
        <Route path="bull/:id" element={<BullInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
