//* Imports
import { Navbar, DarkThemeToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

//* Style
const NavBarStyle = styled.div`
  ul {
    gap: 10px;
    .link.active {
      li {
        a {
          color: #fff;
          background: #3a82f6;
        }
      }
    }

    .link {
      margin: 0 !important;

      li {
        a {
          padding: 0.7rem;
          border-radius: 10px;
          transition: 0.5s;
        }
      }
    }
  }
`;

//* JSX
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
          <NavLink to={"/"} className="link">
            <Navbar.Link active={false}>Home</Navbar.Link>
          </NavLink>
          <NavLink to={"/about"} className="link">
            <Navbar.Link>About</Navbar.Link>
          </NavLink>
          <NavLink to={"/portfolio"} className="link">
            <Navbar.Link>Portfolio</Navbar.Link>
          </NavLink>
          <NavLink to={"/contact"} className="link">
            <Navbar.Link>Contact</Navbar.Link>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </NavBarStyle>
  );
}

export default NavBar;
