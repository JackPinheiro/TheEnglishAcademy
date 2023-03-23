import "./App.css";
import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default App;
