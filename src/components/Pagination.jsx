import { useCallback, useState } from "react";

const Pagination = (props) => {
  const perpage = 15;
  const [currentPage, setCurrentPage] = useState(props?.page);

  const totalPages = Math.ceil(props.totalItems / perpage);

  const handleClick = (pageNumber) => {
    setCurrentPage(Number(pageNumber));
    props.currentPage(pageNumber);
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      props.currentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      props.currentPage(currentPage + 1);
    }
  };

  const renderPagination = useCallback(() => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(totalPages, currentPage + 2);

    pageNumbers.push(
      <div
        key="previous"
        className={" pagination_arrow" + (currentPage == 1 ? " disable" : "")}
        onClick={handlePrevious}
      >
        <p>{"<<"}</p>
      </div>
    );
    // Add ellipsis (...) if necessary
    if (startPage > 1) {
      pageNumbers.push(
        <div key={1} className="pg_item" onClick={() => handleClick(1)}>
          {1}
        </div>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <div className="pg_item" key="ellipsis-start" disabled>
            {"..."}
          </div>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={"pg_item" + (i === currentPage ? " active" : "")}
          onClick={() => handleClick(i)}
        >
          {i}
        </div>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <div className="pg_item" key="ellipsis-end" disabled>
            {"..."}
          </div>
        );
      }
      pageNumbers.push(
        <div
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className="pg_item"
        >
          {totalPages}
        </div>
      );
    }
    // Render "Next" button
    pageNumbers.push(
      <div
        className={
          " pagination_arrow" + (currentPage == endPage ? " disable" : "")
        }
        onClick={handleNext}
        disabled={currentPage == endPage}
        key="next"
      >
        <p>{">>"}</p>
      </div>
    );

    return pageNumbers;
  }, [currentPage]);

  return (
    <div className="pagination_wrapp">
      <div className="pagination_wrap_content">{renderPagination()}</div>
    </div>
  );
};

export default Pagination;
