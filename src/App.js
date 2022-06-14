// import "./App.css";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Toolbar from "./layouts/Toolbar";
import "./styles/index.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Toolbar />
      {/* <div className="grid_layout">
        <Sidebar />
        <div className="box1"></div>
        <div className="box2"></div>
      </div> */}
    </div>
  );
}

export default App;
