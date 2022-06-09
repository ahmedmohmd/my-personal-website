//* ProgressBar JSX
function ProgressBar({ skillName, progress, width }) {
  return (
    <div className="relative w-full pt-1">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="inline-block px-2 py-1 text-xs font-semibold text-purple-600 uppercase bg-purple-200 rounded-full dark:text-white dark:bg-purple-500/50">
            {skillName}
          </span>
        </div>
        <div className="text-right">
          <span className="inline-block text-xs font-semibold text-purple-600">
            {progress}%
          </span>
        </div>
      </div>
      <div className="flex h-2 mb-4 overflow-hidden text-xs bg-purple-200 rounded">
        <div
          className={
            width +
            " shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-l from-blue-500 to-purple-600"
          }
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
