import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegForm from "./pages/RegForm";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </main>
  );
}

export default App;
