function ProgressBar({ skillName, progress, width }) {
  return (
    <div class="relative pt-1 w-full">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 dark:text-white dark:bg-green-500/50">
            {skillName}
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-green-600">
            {progress}%
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
        <div
          class={
            width +
            " shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          }
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
