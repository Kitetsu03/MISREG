import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegForm from "./pages/RegForm";
import LogForm from "./pages/LogForm";
import AdminDashboard from "./pages/admin/AdminDashboard";
import MemberPortal from "./pages/member/MembersPortal";
import GatekeeperDashboard from "./pages/gatekeeper/GatekeeperDashboard";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/register" element={<RegForm />}></Route>
        <Route path="/login" element={<LogForm />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/member" element={<GatekeeperDashboard />}></Route>
        <Route path="/member" element={<MemberPortal />}></Route>
      </Routes>
    </main>
  );
}

export default App;
