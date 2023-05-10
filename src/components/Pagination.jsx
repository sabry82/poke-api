import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ page, total, itemsPerPage, onChange }) => {
  const [currentPage, setCurrentPage] = useState(page);

  const totalPages = Math.ceil(total / itemsPerPage);

  const pagesArray = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  const handleChangePage = (e) => {
    const newPage = Number(e.target.value);
    setCurrentPage(newPage);

    if (onChange) onChange(newPage);
  };

  return (
    <div>
      <Button onClick={handleChangePage} value={1} disabled={currentPage === 1}>
        Primera
      </Button>{" "}
      <Button
        onClick={handleChangePage}
        value={currentPage - 1}
        disabled={currentPage === 1}
      >
        {" "}
        {"<"}{" "}
      </Button>{" "}
      {pagesArray.map((pageNumber, i) => (
        <>
          <Button
            key={i}
            onClick={handleChangePage}
            value={pageNumber}
            variant="primary"
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </Button>{" "}
        </>
      ))}
      <Button
        onClick={handleChangePage}
        value={currentPage + 1}
        disabled={currentPage === totalPages}
      >
        {" "}
        {">"}{" "}
      </Button>{" "}
      <Button
        onClick={handleChangePage}
        value={totalPages}
        disabled={currentPage === totalPages}
      >
        Ultima
      </Button>
    </div>
  );
};

export default Pagination;
