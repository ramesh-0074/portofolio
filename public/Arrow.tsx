
/** Arrow connector component */
export default function ArrowConnector() {
  return (
    <div className="flex items-center justify-center h-20">
      <svg
        className="w-6 h-20 text-gray-400 animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m0 0l-4-4m4 4l4-4"
        />
      </svg>
    </div>
  );
}
