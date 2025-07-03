// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DepartmentCommercial from "./pages/DepartmentCommercial";
import DepartmentLogistic from "./pages/DepartmentLogistic";
import DepartmentManagement from "./pages/DepartmentManagement";
import DepartmentClientService from "./pages/DepartmentClientService";
import AgentDetails from "./pages/AgentDetails";
import { useEffect } from "react";
import Aos from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/departments/commercial"
          element={<DepartmentCommercial />}
        />
        <Route path="/departments/logistic" element={<DepartmentLogistic />} />
        <Route
          path="/departments/management"
          element={<DepartmentManagement />}
        />
        <Route
          path="/departments/client-service"
          element={<DepartmentClientService />}
        />
        <Route path="/agent/:id" element={<AgentDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
