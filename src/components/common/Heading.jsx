//* Imports
import styled from "styled-components";

//* Heading Style
const HeadingStyle = styled.div`
  h2 {
    font-family: "Luckiest Guy";
    letter-spacing: 0.1rem;
    background: -webkit-linear-gradient(-50deg, #57b2d7, #3a87f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }
`;

//* Heading JSX
function Heading({ title, description }) {
  return (
    <HeadingStyle className="mx-auto text-center sm:text-center lg:max-w-2xl">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg text-4xl leading-none tracking-tight text-gray-900 font-sansfont-bold sm:text-5xl md:mx-auto">
          {title}
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </HeadingStyle>
  );
}

export default Heading;
