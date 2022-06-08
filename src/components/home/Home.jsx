//* Imports
import Header from "./Header";
import styled from "styled-components";

//* Style
const HomeStyle = styled.div`
  @media (min-width: 645px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

//* JSX
function Home() {
  return (
    <HomeStyle className="dark:bg-gray-800 w-full">
      <Header />
    </HomeStyle>
  );
}

export default Home;
