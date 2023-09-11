import logo from './logo.svg';
import './App.css';
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Stepspart from "./Components/Stepspart/Stepspart";

function App() {
  return (
    <div>
    <Navbar />
      <Body />
      <Stepspart />
      <Footer />
    </div>
  );
}

export default App;
