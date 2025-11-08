import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegForm from "./pages/RegForm";
import LogForm from "./pages/LogForm";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<RegForm />}></Route>
        <Route path="/" element={<LogForm />}></Route>
      </Routes>
    </main>
  );
}

export default App;
