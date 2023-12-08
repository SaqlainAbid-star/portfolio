import logo from './logo.svg';
import './App.css';
import AppRouter from "./config/AppRouter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 8000 });
  });
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;
