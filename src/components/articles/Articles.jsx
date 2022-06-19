import { useEffect, useState, useTransition } from "react";
import styled from "styled-components";
import paginate from "../../utilities/paginate";
import getArticles from "../../services/articlesService";
import Heading from "../common/Heading";

const ArticlesStyle = styled.div``;

function Articles() {
  const [articles, setArticles] = useState([]);

  //* Handle Paginate
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(2);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    const getAllArticles = async () => {
      setLoading(true);

      const { data } = await getArticles();
      const { next, previous, result } = paginate(data, page, 9);
      setArticles(result);
      setNext(next);
      setPrev(previous);

      setLoading(false);
    };

    getAllArticles();
  }, [page]);

  return (
    <ArticlesStyle className="mx-auto text-gray-600 body-font dark:bg-whale-dark sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="container px-5 py-16 mx-auto lg:pt-0 lg:pb-16">
        <Heading
          title={"Articles"}
          description={"My Articles on Different Websites."}
        />
        {loading ? (
          <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <svg
              role="status"
              className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          <div className="flex flex-col items-center justify-center gap-10 projects">
            <div className="grid grid-cols-1 -m-4 sm:grid-cols-2 lg:grid-cols-3 ">
              {articles.map(
                ({
                  id,
                  title,
                  description,
                  url,
                  reading_time_minutes,
                  cover_image,
                }) => {
                  return (
                    <div className="p-4" key={id}>
                      <div className="overflow-hidden transition duration-500 transform border-2 border-gray-200 hadow-sm hover:-translate-y-1 dark:border-transparent border-opacity-60 rounded-xl">
                        <img
                          className="object-contain object-center w-full h-full"
                          src={cover_image}
                          alt={`${title} Image`}
                        />
                        <div className="p-6 dark:bg-slate-800">
                          <a href={url} target="_blank">
                            <h1 className="mb-3 text-lg font-semibold text-blue-500 truncate title-font dark:text-gray-300">
                              {title}
                            </h1>
                          </a>
                          <p className="mb-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                            {description}
                          </p>
                          <div className="flex flex-wrap items-center justify-between">
                            <a
                              href={url}
                              target="_blank"
                              className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                            >
                              Read
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span className="inline-flex items-center gap-2 py-1 ml-auto text-sm leading-none text-gray-400 lg:ml-auto md:ml-0 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>{reading_time_minutes} Menuits</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            {prev || next ? (
              <div className="inline-flex gap-4">
                <button
                  disabled={!prev}
                  onClick={() => {
                    if (prev) {
                      setPage(page - 1);
                    }
                  }}
                  className={
                    "inline-flex items-center py-2 px-4 text-sm font-medium  duration-300 " +
                    (!prev
                      ? "text-gray-500 rounded-lg border border-gray-300 bg-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-40"
                      : "text-white bg-blue-500 rounded-lg  dark:border-gray-700 hover:bg-blue-600")
                  }
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Prev
                </button>
                <button
                  disabled={!next}
                  onClick={() => {
                    if (next) {
                      setPage(page + 1);
                    }
                  }}
                  className={
                    "inline-flex items-center py-2 px-4 text-sm font-medium  duration-300 " +
                    (!next
                      ? "text-gray-500 rounded-lg border border-gray-300 bg-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-40"
                      : "text-white bg-blue-500 rounded-lg  dark:border-gray-700 hover:bg-blue-600 duration-3000")
                  }
                >
                  Next
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </ArticlesStyle>
  );
}

export default Articles;
