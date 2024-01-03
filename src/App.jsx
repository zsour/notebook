import { React } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PostDisplay from "./components/PostDisplay";
import ProgressDisplay from "./components/ProgressDisplay";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="content">
      <NavBar />
      <main>
        <SideBar />
        <PostDisplay />
        <ProgressDisplay />
      </main>
    </div>
  );
}

export default App;
