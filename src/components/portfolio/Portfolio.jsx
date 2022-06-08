import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import projects from "../../services/projectService";
import Heading from "../common/Heading";

const PortfolioStyle = styled.div`
  .card {
    position: relative;
    font-family: "Cairo";

    .px-6 {
      border-radius: 40% 60% 100% 0% / 0% 100% 0% 100% !important;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: tranparent;
      transition: 0.5s;
    }

    .btns {
      z-index: 1;
      display: none;
    }

    .project-title {
      bottom: -75px;
      z-index: 3;
      transition: 0.5s;
    }

    :hover {
      &:after {
        background: #1e293ba6;
      }

      .btns {
        display: flex;
      }
      .project-title {
        bottom: 0;
      }
    }
  }
`;

function Portfolio() {
  return (
    <PortfolioStyle className="px-4 py-16 mx-auto dark:bg-gray-800 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Heading
        title={"Portfolio"}
        description={"My Web Development Projects Portfolio"}
      />
      <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, cover, githubUrl, livePreviewUrl }) => {
          return (
            <div className="overflow-hidden transition duration-500 transform bg-white shadow-sm card rounded-2xl hover:-translate-y-1 hover:shadow md:text-center ">
              <div className="w-full h-full abosolute">
                <img
                  className="object-contain w-full max-h-full"
                  src={cover}
                  alt={title}
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="absolute flex items-center justify-start w-full h-10 px-6 py-6 text-white bg-blue-500 project-title sm:px-8 z-1">
                <h5 className="mb-2 text-xl font-extrabold leading-none sm:text-xl">
                  {title}
                </h5>
              </div>

              <div className="absolute flex items-center w-full duration-500 -translate-x-1/2 -translate-y-1/2 btns justify-evenly top-1/2 left-1/2">
                <a
                  href={githubUrl}
                  target="_blank"
                  type="reset"
                  className="flex items-center justify-center gap-1 px-3 py-2 text-white duration-500 text-md sm:text-lg rounded-xl bg-slate-800 hover:bg-slate-900"
                >
                  <span>Github</span>
                  <BsGithub className="w-5 h-5 ml-2" />
                </a>

                <a
                  href={livePreviewUrl}
                  target="_blank"
                  type="reset"
                  className="flex items-center justify-center gap-1 px-3 py-2 text-white duration-500 bg-purple-600 text-md sm:text-lg rounded-xl hover:bg-purple-800"
                >
                  <span>Preview</span>
                  <AiFillEye className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </PortfolioStyle>
  );
}

export default Portfolio;
