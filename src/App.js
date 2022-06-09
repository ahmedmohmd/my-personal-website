//* Imports
import { Flowbite } from "flowbite-react";
import { Routes, Route, Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Home from "./components/home/Home";
import NavBar from "./components/common/NavBar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

//* App Style
const AppStyle = styled.div`
  position: relative;

  .scroll-btn {
    animation: scaling 1.5s linear infinite alternate;
    transition: 0.3s;
    right: -75px;
    outline: none;
    border: none;
  }

  @keyframes scaling {
    0% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
`;

//* App JSX
function App() {
  const scrollBtn = useRef(null);

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 50) {
        scrollBtn.current.style.right = "20px";
      } else {
        scrollBtn.current.style.right = "-75px";
      }
    });

    window.onscroll = handleScroll();
  }, []);

  return (
    <Flowbite>
      <AppStyle className="min-h-screen bg-white App dark:bg-gray-800">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <button
          onClick={handleScroll}
          ref={scrollBtn}
          className="fixed p-3 text-white bg-blue-500 rounded-full scroll-btn sm:bottom-10 bottom-6 hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        </button>
      </AppStyle>
    </Flowbite>
  );

  function handleScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}

export default App;
