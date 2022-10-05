import "./App.css";
import About from "./Components/About/About";
import ContactUS from "./Components/ContactUS/ContactUS";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Summary from "./Components/Summary/Summary";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Summary />
      <Portfolio />
      <ContactUS />
      <Footer />
    </div>
  );
}

export default App;
