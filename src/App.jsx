import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Profile from "./Components/Profile";
import Input from "./Components/Input";
import Degree from "./Components/Degree";
import ButtonID from "./Components/ButtonID";


function App() {
  const title = "Header Component Title";

  return (
    <div className="App">
      <ButtonID />

    //component of counter and add two button of increment and decreement
      <h1> Increement: </h1>
      <h1> Decreement: </h1>
    </div>
  );
}

export default App;
