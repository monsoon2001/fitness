import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Program from "./components/Program";
import Membership from "./components/Membership";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Program />
      <Membership />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
