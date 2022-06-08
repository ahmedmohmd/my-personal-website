//* Imports
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//* Style
const HeaderStyle = styled.div`
  h2 {
    font-family: "Permanent Marker";
    letter-spacing: 0.1rem;
    background: -webkit-linear-gradient(-50deg, #57b2d7, #3a87f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .image-box {
    border: 15px solid #3a82f6ab;
    box-shadow: 0 0 0 15px #3a82f642;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    margin-top: 40px;
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    background-color: transparent;
    display: table;
    position: relative;
    overflow: hidden;
    opacity: 0.99;
    z-index: 999;

    animation: up-down 7s linear infinite alternate;

    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 50%;
    }

    @media (max-width: 425px) {
      max-width: 230px;
      max-height: 230px;
    }
  }

  .btn {
    transition: 0.5s;
  }

  @keyframes up-down {
    0% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(-30px);
    }
  }
`;

//* JSX
function Header() {
  return (
    <HeaderStyle className="container mx-auto">
      <div className="relative flex flex-col items-center gap-20 px-4 pt-16 mx-auto sm:flex-row justify-evenly lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="order-2 max-w-xl sm:order-1 lg:max-w-screen-xl">
          <div className="flex flex-col gap-1 mb-16 lg:max-w-lg lg:mb-0 sm:gap-8">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl text-5xl font-bold tracking-tight text-center text-blue-400 sm:text-left sm:text-7xl sm:leading-none">
                Ahmed Mohamed
              </h2>
              <p className="text-base text-center text-gray-500 dark:text-gray-400 sm:text-left md:text-lg">
                Hello There, My Name is Ahmed Mohamed.
                <br />I am a Fullstack Web Devloper. <br />
                And this is My Offecial Website.
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 sm:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="p-1 duration-500 shadow hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-lg dark:hover:shadow-blue-800/80 sm:p-2 rounded-2xl"
                >
                  About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 w-full overflow-hidden image-box sm:order-2 sm:w-1/2 h-1/2">
          <img src="/images/personal-photo.jpeg" alt="My Personal Photo" />
        </div>
      </div>
    </HeaderStyle>
  );
}

export default Header;
