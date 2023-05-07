import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ page, total, itemsPerPage, onChange }) => {
    const [currentPage, setCurrentPage] = useState(page);

    const totalPages = Math.ceil(total / itemsPerPage);

    const pagesArray = [];

    const handleChangePage =  (e)=>{
        setCurrentPage(e.target.value)
        
        if(onChange)
            onChange(e.target.value);
    }

    for (let index = 1; index <= totalPages; index++) {
        pagesArray.push(index);
    }

    return (
        <div>
            <Button onClick={handleChangePage} value={1} disabled={currentPage==1}> {"<"} </Button>
            {pagesArray.map((pageNumber, i) => (
                <Button key={i} onClick={handleChangePage} value={pageNumber} variant='primary' disabled={pageNumber == currentPage}>{pageNumber}</Button>
            ))}
            <Button onClick={handleChangePage} value={totalPages} disabled={currentPage==totalPages}> {">"} </Button>
        </div>
    );
};

export default Pagination;
