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
      outline: none;
      border: none;
    }
  }
`;

//* NavBar JSX
function NavBar() {
  return (
    <NavBarStyle className="py-1 sm:py-3 dark:bg-whale-dark">
      <Navbar className="flex text-center sm:text-left dark:!bg-whale-dark">
        <Navbar.Brand href="/">
          <div className="flex items-center justify-center gap-2 p-2 mr-3 rounded-full ">
            <img
              src="/images/logo.png"
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
            className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 duration-0 sm:duration-300 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 duration-0 sm:duration-300 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            About
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 duration-0 sm:duration-300 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/articles"}
            className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 duration-0 sm:duration-300 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Articles
          </NavLink>
          <NavLink
            to={"/contact"}
            className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 duration-0 sm:duration-300 link md:p-0 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </NavBarStyle>
  );
}

export default NavBar;
