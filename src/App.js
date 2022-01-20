import logo from './logo.svg';
import './App.css';
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>React with ThreeJS</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ThreeScene />
    </div>
  );
}

export default App;
