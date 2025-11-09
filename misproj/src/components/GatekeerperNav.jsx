import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function GatekeeperNav() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classlist.toggle("responsive_nav");
  };
  return (
    <>
      <nav className="sticky w-80 flex-row " ref={navRef}>
        <h3>Logo</h3>
        <hr />
        <Link to="/AdminDashboard">Dashboard</Link>
        <Link to="/UsersAccess">Users & Access</Link>
        <Link to="/MembersData">Members Data</Link>
        <Link to="/Reports">Reports & Analytics</Link>
        <Link to="/Settings">System Settings</Link>
        <button className="nav-btn close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </>
  );
}

export default GatekeeperNav;
