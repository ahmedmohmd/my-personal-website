//* Danger Alert JSX
function DangerAlert({ text }) {
  return (
    <div
      className="flex items-center w-full gap-2 p-3 leading-normal text-red-600 bg-red-100 rounded-lg dark:bg-red-500 dark:text-white"
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
      <p>{text}</p>
    </div>
  );
}

export default DangerAlert;
