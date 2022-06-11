//* Imports
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import projects from "../../services/projectService";
import Heading from "../common/Heading";
import { useEffect, useState } from "react";

//* Portfolio Style
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
      transition: 0.3s;
    }

    .btns {
      z-index: 1;
      display: none;
    }

    .project-title {
      bottom: -75px;
      z-index: 3;
      transition: 0.3s;
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

//* Portfolio JSX
function Portfolio() {
  const [loading, setLoading] = useState(false);
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    setMyProjects([...projects]);
    setLoading(false);
  });

  return (
    <PortfolioStyle className="px-4 py-16 mx-auto dark:bg-gray-800 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Heading
        title={"Portfolio"}
        description={"My Web Development Projects Portfolio"}
      />
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
          <svg
            role="status"
            class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="text-gray-500 dark:text-gray-400">Loading...</span>
        </div>
      ) : (
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {myProjects.map(({ id, title, cover, githubUrl, livePreviewUrl }) => {
            return (
              <div
                key={id}
                className="overflow-hidden transition duration-500 transform bg-white shadow-sm card rounded-2xl hover:-translate-y-1 hover:shadow md:text-center "
              >
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
      )}
    </PortfolioStyle>
  );
}

export default Portfolio;
