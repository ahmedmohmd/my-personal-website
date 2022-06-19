//* Imports
import styled from "styled-components";
import Heading from "../common/Heading";
import Form from "./Form";

//* Contact Style
const ContactStyle = styled.div`
  font-family: "Cairo";

  h2 {
    font-family: "Luckiest Guy";
    letter-spacing: 0.1rem;
    background: -webkit-linear-gradient(-50deg, #57b2d7, #3a87f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

//* Contact JSX
function Contact() {
  return (
    <ContactStyle className="container flex flex-col items-center justify-center pb-5 mx-auto mt-auto lg:pb-auto lg:pt-20 dark:bg-whale-dark lg:flex-row">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto text-center sm:text-center lg:max-w-2xl">
          <Heading title={"Contact"} description={"Let's To work Together"} />
          <div>
            <img
              className="object-contain w-full sm:h-64 md:h-80 lg:h-96"
              src="/images/contact/contact-us.svg"
              alt="Contact Illustration"
            />
          </div>
        </div>
      </div>
      <Form />
    </ContactStyle>
  );
}

export default Contact;
