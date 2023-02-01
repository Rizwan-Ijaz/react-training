import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Profile from "./Components/Profile";

const USER_PROFILE = {
  profileImage: "",
  name: "ABC",
  email: "example@demo.com",
  age: 20,
};
const USER_DEGREE = {
  degreetitle: 'Bs in Software Engineering',
  degreetotalcgpa: '4',
  degreeyourcgpa: '2.49',
  degreecompletionyear: '2019',
};

function App() {
  const title = "Header Component Title";

  return (
    <div className="App">
      <Header title={title} />

      <Input />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Profile
        name={USER_PROFILE.name}
        email={USER_PROFILE.email}
        age={USER_PROFILE.age}
      />

      <Degree
      degreetitle={USER_DEGREE.degreetitle}
      />

      <Footer />
    </div>
  );
}

export default App;
