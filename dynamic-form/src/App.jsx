import './App.css' 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div  className="flex flex-col min-h-screen bg-sky-50 text-gray-800">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

