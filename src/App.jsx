import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SocialBar from "./Components/SocialBar";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SocialBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
