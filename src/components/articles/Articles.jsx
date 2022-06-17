import { useEffect, useState, useTransition } from "react";
import styled from "styled-components";
import getArticles from "../../services/articlesService";
import Heading from "../common/Heading";

const ArticlesStyle = styled.div``;

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllArticles = async () => {
      setLoading(true);
      const { data } = await getArticles();

      setArticles(data);
      setLoading(false);
    };

    getAllArticles();
  }, []);

  return (
    <ArticlesStyle className="mx-auto text-gray-600 body-font dark:bg-whale-dark sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="container px-5 py-16 lg:pt-0 lg:pb-16 mx-auto">
        <Heading
          title={"Articles"}
          description={"My Articles on Different Websites."}
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
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -m-4 ">
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
                  <div class="p-4" key={id}>
                    <div class=" transition duration-500 transform hadow-sm hover:-translate-y-1  border-2 border-gray-200 dark:border-transparent border-opacity-60 rounded-xl overflow-hidden">
                      <img
                        class="h-full w-full object-contain object-center"
                        src={cover_image}
                        alt={`${title} Image`}
                      />
                      <div class="p-6 dark:bg-slate-800">
                        <a href={url} target="_blank">
                          <h1 className="mb-3 text-lg font-semibold text-blue-500 truncate title-font dark:text-gray-300">
                            {title}
                          </h1>
                        </a>
                        <p class="leading-relaxed mb-3 text-sm sm:text-base text-gray-500">
                          {description}
                        </p>
                        <div class="flex items-center flex-wrap  justify-between">
                          <a
                            href={url}
                            target="_blank"
                            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                          >
                            Read
                            <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <span class="text-gray-400  inline-flex items-center gap-2 lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 ">
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
        )}
      </div>
    </ArticlesStyle>
  );
}

export default Articles;
