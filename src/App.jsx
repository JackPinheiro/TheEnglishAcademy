import "./App.css";
import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen w-full bg-blue-400 font-sans">
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default App;
