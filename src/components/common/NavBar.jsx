//* Imports
import { Navbar, DarkThemeToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//* NavBar Style
const NavBarStyle = styled.div`
  ul {
    gap: 10px;
    .link.active {
      color: #fff;
      background: #3a82f6;
    }

    .link {
      margin: 0 !important;
      padding: 0.7rem;
      border-radius: 10px;
      transition: 0.5s;
    }
  }
`;

//* NavBar JSX
function NavBar() {
  return (
    <NavBarStyle className="py-1 sm:py-3">
      <Navbar className="flex text-center sm:text-left">
        <Navbar.Brand href="/">
          <div className="flex items-center justify-center gap-2 p-1 mr-3 border-2 border-blue-300 rounded-2xl">
            <img
              src="/images/letter-a.png"
              className="h-8 sm:h-10"
              alt="Flowbite Logo"
            />
            <img
              src="/images/letter-m.png"
              className="h-8 sm:h-10"
              alt="Flowbite Logo"
            />
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to={"/"}
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            About
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/contact"}
            className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </NavBarStyle>
  );
}

export default NavBar;
