import styled from "styled-components";
import Heading from "../common/Heading";
import ProgressBar from "./ProgressBar";

// const AboutStyle = styled.div``;

const mySkills = [
  {
    skillName: "Git",
    progress: 50,
    width: "w-1/2",
  },
  {
    skillName: "HTML",
    progress: 90,
    width: "w-11/12",
  },
  {
    skillName: "CSS",
    progress: 90,
    width: "w-11/12",
  },
  {
    skillName: "JavaScript",
    progress: 80,
    width: "w-4/5",
  },
  {
    skillName: "Pug JS",
    progress: 70,
    width: "w-9/12",
  },
  {
    skillName: "Sass",
    progress: 80,
    width: "w-4/5",
  },
  {
    skillName: "Tailwind",
    progress: 60,
    width: "w-3/5",
  },
  {
    skillName: "React JS",
    progress: 80,
    width: "w-4/5",
  },
  {
    skillName: "Node JS",
    progress: 75,
    width: "w-3/4",
  },
  {
    skillName: "MongoDB",
    progress: 60,
    width: "w-3/5",
  },
  {
    skillName: "Express JS",
    progress: 80,
    width: "w-4/5",
  },
];

function About() {
  return (
    <div class="text-gray-600 body-font lg:pb-auto pb-5 pt-16 lg:pt-20">
      <Heading title={"About"} description={"Know More About Me"} />
      <div class="container px-5 mx-auto flex flex-col justify-center items-start">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row gap-20 sm:gap-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="/images/personal-photo.jpeg"
                  alt=""
                  className="border-4 border-blue-500 rounded-full dark:border-white"
                />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-800 dark:text-white text-xl">
                  Ahmed Mohamed
                </h2>
                <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-500 dark:text-gray-400">
                  Hello there, I am Ahmed Mohamed, I am FullStack Web Developer.
                </p>
              </div>
            </div>

            <div class="pb-24 mx-auto flex flex-wrap">
              <div class="flex relative pt-10 pb-20 sm:items-center">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="flex flex-col flex-grow gap-2 sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-800 dark:text-white mb-1 text-xl">
                      What I do?
                    </h2>
                    <p class="leading-relaxed text-base text-gray-500 dark:text-gray-400">
                      I am a FullStack Developer, Who Work in Two Parts of
                      Making Website Process.
                    </p>
                    <div className="flex items-center justify-between gap-1 bt-6">
                      <div className="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="text-gray-800 dark:text-white">
                          Front End
                        </h3>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <h3 className="text-gray-800 dark:text-white">
                          Back End
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-20 sm:items-center w-full">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="self-start flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-9 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div class="flex-grow md:pl-8 pl-6 flex  items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <img
                      src="/images/skills.svg"
                      alt=""
                      className="w-14 h-14"
                    />
                  </div>
                  <div class="flex flex-col flex-grow gap-2 sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-800 dark:text-white mb-1 text-xl">
                      Skills
                    </h2>
                    <p class="leading-relaxed text-base text-gray-500 dark:text-gray-400">
                      My Skills in Frontend and Backend.
                    </p>
                    <div className="flex flex-col items-center justify-between w-full gap-1 bt-6">
                      {mySkills.map(({ skillName, progress, width }) => {
                        return (
                          <ProgressBar
                            skillName={skillName}
                            progress={progress}
                            width={width}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-20 sm:items-center">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <img
                      src="/images/education.svg"
                      alt=""
                      className="w-14 h-14"
                    />
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-800 dark:text-white mb-1 text-xl">
                      Education
                    </h2>
                    <p class="leading-relaxed text-base text-gray-500 dark:text-gray-400">
                      Electrical Power Engineering Student at SVU.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-20 sm:items-center">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <img
                      src="/images/hoppies.svg"
                      alt=""
                      className="w-14 h-14"
                    />
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-800 dark:text-white mb-1 text-xl">
                      Hoppies
                    </h2>
                    <p class="leading-relaxed text-base text-gray-500 dark:text-gray-400">
                      I love shearing Knowladge with Aothers and Learn New
                      Things Every Day. <br />I love Reading and Writing.
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex relative pb-20 sm:items-center">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm"></div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                    <img
                      src="/images/experience.svg"
                      alt=""
                      className="w-14 h-14"
                    />
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-gray-800 dark:text-white mb-1 text-xl">
                      Experience
                    </h2>
                    <p class="leading-relaxed text-base text-gray-500 dark:text-gray-400">
                      I am Student Now, I hope to be Professional Programmer in
                      The Future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
