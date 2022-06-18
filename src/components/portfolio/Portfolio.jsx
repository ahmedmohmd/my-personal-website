//* Imports
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import projects from "../../services/projectService";
import Heading from "../common/Heading";
import { useEffect, useState } from "react";
import paginate from "../../helpers/paginate";

//* Portfolio Style
const PortfolioStyle = styled.div`
  #current-page {
    color: red;
  }

  .card {
    position: relative;
    font-family: "Cairo";

    .px-6 {
      border-radius: 40% 60% 100% 0% / 0% 100% 0% 100% !important;
    }

    .category {
      right: -100px;
      transition: 0.3s;
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
        background: #1e293bc2;
      }

      .btns {
        display: flex;
      }
      .project-title {
        bottom: 0;
      }

      .category {
        right: 0px;
      }
    }
  }
`;

//* Portfolio JSX
function Portfolio() {
  const [page, setPage] = useState(1);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [next, setNext] = useState(2);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    const { next, previous, result } = paginate(projects, page, 9);
    setCurrentProjects(result);
    setNext(next);
    setPrev(previous);
  }, [page]);

  return (
    <PortfolioStyle className="px-4 py-16 mx-auto dark:bg-whale-dark sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Heading
        title={"Portfolio"}
        description={"My Web Development Projects Portfolio"}
      />
      {
        <div className="flex flex-col items-center justify-center gap-10 projects">
          <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map(
              ({ id, title, cover, githubUrl, livePreviewUrl, category }) => {
                return (
                  <div
                    key={id}
                    className="overflow-hidden transition duration-500 transform bg-white shadow-sm card rounded-2xl hover:-translate-y-1 hover:shadow md:text-center "
                  >
                    <div className="absolute z-20 right-2 top-2 category">
                      {category === "fullstack" ? (
                        <div class=" flex items-center justify-center gap-1 bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded-md  dark:bg-cyan-200 dark:text-cyan-900">
                          <span>Full Stack</span>
                          <GoPrimitiveDot />
                        </div>
                      ) : category === "frontend" ? (
                        <div class="flex items-center justify-center gap-1  bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded-md  dark:bg-orange-200 dark:text-orange-800">
                          <span>Front End</span>
                          <GoPrimitiveDot />
                        </div>
                      ) : (
                        <div class="flex items-center justify-center gap-1  bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded-md  dark:bg-purple-200 dark:text-purple-900">
                          <span>Back End</span>
                          <GoPrimitiveDot />
                        </div>
                      )}
                    </div>
                    <div className="w-full h-full abosolute">
                      <img
                        className="object-cover w-full h-full"
                        src={cover}
                        alt={title}
                      />
                    </div>
                    <div className="absolute flex items-center justify-start w-full h-10 px-6 py-6 text-white bg-blue-500 project-title sm:px-8 z-1">
                      <h5 className="mb-2 text-xl font-extrabold leading-none">
                        {title}
                      </h5>
                    </div>

                    <div className="absolute flex items-center w-full duration-500 -translate-x-1/2 -translate-y-1/2 btns justify-evenly top-1/2 left-1/2">
                      <a
                        href={githubUrl}
                        target="_blank"
                        type="reset"
                        className="flex items-center justify-center gap-1 px-3 py-2 font-semibold text-white duration-500 text-md rounded-xl bg-slate-800 hover:bg-slate-900"
                      >
                        <span>Github</span>
                        <BsGithub className="w-5 h-5 ml-2" />
                      </a>

                      {livePreviewUrl ? (
                        <a
                          href={livePreviewUrl}
                          target="_blank"
                          type="reset"
                          className="flex items-center justify-center gap-1 px-3 py-2 font-semibold text-white duration-500 bg-purple-600 text-md rounded-xl hover:bg-purple-800"
                        >
                          <span>Preview</span>
                          <AiFillEye className="w-5 h-5 ml-2" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="flex items-center justify-center gap-1 px-3 py-2 font-semibold text-white duration-500 bg-purple-400 text-md rounded-xl"
                          disabled
                        >
                          <span>Preview</span>
                          <AiFillEye className="w-5 h-5 ml-2" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {prev || next ? (
            <div class="inline-flex gap-4">
              <button
                disabled={page === 0}
                onClick={() => {
                  if (prev) {
                    setPage(page - 1);
                  }
                }}
                class={
                  "inline-flex items-center py-2 px-4 text-sm font-medium  duration-300 " +
                  (!prev
                    ? "text-gray-500 rounded-lg border border-gray-300 bg-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-40"
                    : "text-white bg-blue-500 rounded-lg  dark:border-gray-700 hover:bg-blue-600")
                }
              >
                <svg
                  class="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Prev
              </button>
              <button
                disabled={page === projects.length - 1}
                onClick={() => {
                  if (next) {
                    setPage(page + 1);
                  }
                }}
                class={
                  "inline-flex items-center py-2 px-4 text-sm font-medium  duration-300 " +
                  (!next
                    ? "text-gray-500 rounded-lg border border-gray-300 bg-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-40"
                    : "text-white bg-blue-500 rounded-lg  dark:border-gray-700 hover:bg-blue-600")
                }
              >
                Next
                <svg
                  class="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      }
    </PortfolioStyle>
  );
}

export default Portfolio;
