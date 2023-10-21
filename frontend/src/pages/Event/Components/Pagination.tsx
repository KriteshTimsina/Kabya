

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="flex justify-center mt-4 dark:text-black">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        className="mx-2 px-3 py-2 bg-gray-300 rounded-lg"
      >
        Previous
      </button>
      <span className="mx-2 dark:text-white">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className="mx-2 px-3 py-2 bg-gray-300 rounded-lg dark:text-black"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
