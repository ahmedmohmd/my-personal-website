//* ProgressBar JSX
function ProgressBar({ skillName, progress, width }) {
  return (
    <div className="relative w-full pt-1">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 uppercase bg-blue-200 rounded-full dark:text-white dark:bg-blue-500/50">
            {skillName}
          </span>
        </div>
        <div className="text-right">
          <span className="inline-block text-xs font-semibold text-blue-600 dark:text-gray-200">
            {progress}%
          </span>
        </div>
      </div>
      <div className="flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded">
        <div
          className={
            width +
            " shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          }
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
