import "./App.css";
import { Route, Routes } from "react-router-dom";
import {About} from "./components/About";
import Home from "./components/Home";
import {Contact} from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;




