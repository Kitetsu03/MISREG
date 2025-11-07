import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classlist.toggle("responsive_nav");
  };
  return (
    <>
      <nav ref={navRef}>
        <h3>Logo</h3>
        <hr />
        <a href="/#">Dashboard</a>
        <a href="/#">Users & Access</a>
        <a href="/#">Members Data</a>
        <a href="/#">Reports & Analytics</a>
        <a href="/#">System Settings</a>
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

export default Navbar;
