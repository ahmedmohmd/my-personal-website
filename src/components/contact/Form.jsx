//* Imports
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { useState, useTransition } from "react";
import { formValidate } from "../../helpers/formValidate";
import axios from "axios";
import Joi from "joi";
import config from "../../config/config.json";
import { ToastContainer, toast } from "react-toastify";
import DangerAlert from "./DangerAlert";

//* Joi Schema
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
    .required(),
  message: Joi.string().required(),
});

//* Form Style
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

//* Form JSX
function Form() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isPending, startTransition] = useTransition();
  const [namePlaceholder, setNamePlaceholder] = useState("Your Name...");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Your Email...");
  const [messagePlaceholder, setMessagePlaceholder] =
    useState("Your Message...");

  return (
    <FormStyle
      className="flex flex-col items-center justify-center w-full gap-5 p-3 xl:w-1/3 md:w-1/2 dark:bg-gray-800"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full min-w-full text-gray-500 border-2 border-gray-300 dark:text-gray-300 form-input rounded-2xl h-14 sm:w-1/3 dark:bg-gray-900 dark:text-white dark:focus:border-blue-800 dark:border-transparent focus:border-blue-300"
        placeholder={namePlaceholder}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
        onFocus={() => setNamePlaceholder("")}
        onBlur={() => setNamePlaceholder("Your Name...")}
      />
      {errors.name && <DangerAlert text={errors.name} />}
      <input
        type="email"
        placeholder={emailPlaceholder}
        className="w-full min-w-full text-gray-500 border-2 border-gray-300 dark:text-gray-300 form-input rounded-2xl h-14 sm:w-1/3 dark:bg-gray-900 dark:text-white dark:focus:border-blue-800 dark:border-transparent focus:border-blue-300"
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        onFocus={() => setEmailPlaceholder("")}
        onBlur={() => setEmailPlaceholder("Your Email...")}
      />
      {errors.email && <DangerAlert text={errors.email} />}
      <textarea
        className="w-full min-w-full p-4 text-gray-500 border-2 border-gray-300 dark:text-gray-300 form-textarea rounded-2xl sm:w-1/3 dark:bg-gray-900 dark:text-white dark:focus:border-blue-800 dark:border-transparent focus:border-blue-300"
        cols="30"
        rows="10"
        placeholder={messagePlaceholder}
        onChange={(event) =>
          setFormData({ ...formData, message: event.target.value })
        }
        onFocus={() => setMessagePlaceholder("")}
        onBlur={() => setMessagePlaceholder("Your Message...")}
      ></textarea>
      {errors.message && <DangerAlert text={errors.message} />}
      {isPending ? (
        <button
          disabled
          type="button"
          className="flex items-center justify-center w-full gap-1 px-4 py-3 text-white duration-500 bg-blue-500 sm:w-auto rounded-xl"
        >
          <svg
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Sending...
        </button>
      ) : (
        <button
          type="submit"
          className="flex items-center justify-center w-full gap-1 px-4 py-3 text-white duration-500 bg-blue-500 sm:w-auto rounded-xl hover:bg-blue-600"
        >
          <IoSend className="w-5 h-5 mr-2" />
          <span>Send</span>
        </button>
      )}
      <ToastContainer />
    </FormStyle>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const validateResult = formValidate(formData, schema);

    if (validateResult) {
      setErrors(validateResult);
    } else {
      setErrors({});
      startTransition(async () => {
        try {
          await axios.post(config.apiEndPoint, formData);
          await toast.success("Thanks for Your Message", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setFormData({});
        } catch (error) {
          toast.error("Sorry, an Unexpected Error Occured!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
    }
  }
}

export default Form;
