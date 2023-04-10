import "./Navbar.scss";
import { images } from "../../images";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navList = [
  { title: "Projects", id: 1, path: "/projects" },
  { title: "About Us", id: 2, path: "/about" },
];

const navItems = [
  { title: "Home", id: 1, path: "/" },
  { title: "Contact", id: 2, path: "/contact" },
  { title: "Our Team", id: 3, path: "/team" },
  { title: "About Us", id: 4, path: "/about" },
  { title: "Join Next Cohorts", id: 5, path: "/join" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbarCon">
        <div className="navbarLogo">
          <a href="/">
            <img src={images.logo} alt="DLT Africa logo" />
          </a>
        </div>

        <div className="navbarItems appFlex">
          <div className="navbarItemsLinks">
            {navList.map(({ title, id, path }) => (
              <ul key={id}>
                <li>
                  <Link to={path}>{title}</Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="navbarMenu">
            <FiMenu onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [290, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="toggleMenu"
              >
                <div>
                  <img src={images.logo} alt="" />
                  <GrClose onClick={() => setToggle(false)} />
                </div>
                <ul>
                  {navItems.map(({ title, id, path }) => (
                    <li key={id}>
                      <Link to={path}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
