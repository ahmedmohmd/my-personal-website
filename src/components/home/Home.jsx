//* Imports
import Header from "./Header";
import styled from "styled-components";

//* Home Style
const HomeStyle = styled.div`
  @media (min-width: 645px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

//* Home JSX
function Home() {
  return (
    <HomeStyle className="w-full dark:bg-gray-800">
      <Header />
    </HomeStyle>
  );
}

export default Home;
