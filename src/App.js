// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/index";
function App() {
  return (
    <>
      <div className="App relative scrollbar scrollbar-track-black scrollbar-thumb-black">
        <NavBar className="relative" />
        <HomePage className="relative" />
      </div>
    </>
  );
}

export default App;
