import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { formValidate } from "../../helpers/formValidate";
import axios from "axios";
import swal from "sweetalert";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
    .required(),
  message: Joi.string().required(),
});

const FormStyle = styled.form`
  font-family: "Cairo";

  input,
  textarea {
    box-shadow: none !important;
    outline: none;
  }

  textarea {
    resize: none;
  }
`;

function Form() {
  const [formData, setFormData] = useState({});

  const [errors, setErrors] = useState({});

  return (
    <FormStyle
      className="flex flex-col items-center justify-center w-full gap-5 p-3 xl:w-1/3 md:w-1/2 dark:bg-gray-800"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full min-w-full text-gray-500 border-2 border-gray-300 dark:text-gray-300 form-input rounded-2xl h-14 sm:w-1/3 dark:bg-gray-900 dark:text-white dark:focus:border-blue-800 dark:border-transparent focus:border-blue-300"
        placeholder="Name..."
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      {errors.name && (
        <div
          class="w-full flex gap-2 items-center p-3 leading-normal text-red-600 bg-red-100 dark:bg-red-500 dark:text-white rounded-lg"
          role="alert"
        >
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
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{errors.name}</p>
        </div>
      )}
      <input
        type="email"
        placeholder="Email: example@website.com"
        className="w-full min-w-full text-gray-500 border-2 border-gray-300 dark:text-gray-300 form-input rounded-2xl h-14 sm:w-1/3 dark:bg-gray-900 dark:text-white dark:focus:border-blue-800 dark:border-transparent focus:border-blue-300"
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      {errors.email && (
        <div
          class="w-full flex gap-2 items-center p-3 leading-normal text-red-600 bg-red-100 dark:bg-red-500 dark:text-white rounded-lg"
          role="alert"
        >
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
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{errors.email}</p>
        </div>
      )}
      <textarea
        className="w-full min-w-full text-gray-500 border-2 border-gray-300 dark:text-gray-300 form-textarea rounded-2xl sm:w-1/3 dark:bg-gray-900 dark:text-white dark:focus:border-blue-800 dark:border-transparent focus:border-blue-300"
        cols="30"
        rows="10"
        placeholder="Message..."
        onChange={(event) =>
          setFormData({ ...formData, message: event.target.value })
        }
      ></textarea>
      {errors.message && (
        <div
          class="w-full flex gap-2 items-center p-3 leading-normal text-red-600 bg-red-100 dark:bg-red-500 dark:text-white rounded-lg"
          role="alert"
        >
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
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>{errors.message}</p>
        </div>
      )}
      <button
        type="submit"
        className="flex items-center justify-center w-full gap-1 px-4 py-3 text-white duration-500 bg-blue-500 sm:w-auto rounded-xl hover:bg-blue-600"
      >
        <IoSend className="w-5 h-5 mr-2" />
        <span>Send</span>
      </button>
    </FormStyle>
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const result = formValidate(formData, schema);

    if (result) {
      setErrors(result);
    } else {
      axios
        .post("http://localhost:5000/contactMe", formData)
        .then(() => {
          swal("Success", "Thanks for Contacting", "success").then(
            () => (window.location = "/")
          );
        })
        .catch((error) => {
          console.log(error);
          swal(
            "Error!",
            "Sorry, There is an Error, PLease Try again.",
            "error"
          );
        });

      setErrors({});
    }
  }
}

export default Form;
