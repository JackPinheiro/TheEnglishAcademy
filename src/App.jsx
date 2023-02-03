import "./App.css";
import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div className="min-h-screen w-full bg-blue-400">
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default App;
