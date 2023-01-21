import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Coins from "./pages/Coins";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coins" element={<Coins />} />
      </Routes>
    </Router>
  );
}

export default App;
