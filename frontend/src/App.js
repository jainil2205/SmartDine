// Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Login from "./components/Login";
// import SignUp from "./components/SignUp";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>} />
          {/* <Route path="/signup" element={<SignUp/>} /> */}
          <Route path="/home" element={<Home />} />
          
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;