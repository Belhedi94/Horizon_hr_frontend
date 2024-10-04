import React from 'react';
import './pagination.css';

const Pagination = ({pageIndex, pageSize, pageCount, totalPages, endPage, previousPage, setPageSize, gotoPage, canPreviousPage, canNextPage, startPage, nextPage}) => {
    return (
        <div className="center">
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {"<"}
                </button>

                {/* Show the first page and ellipsis if necessary */}
                {startPage > 0 && (
                    <>
                        <button onClick={() => gotoPage(0)}>1</button>
                        <span>...</span>
                    </>
                )}

                {/* Visible page numbers */}
                {Array.from({ length: endPage - startPage }, (_, i) => startPage + i).map((page) => (
                    <button
                        key={page}
                        onClick={() => gotoPage(page)}
                        style={{ fontWeight: pageIndex === page ? "bold" : "normal" }}
                    >
                        {page + 1}
                    </button>
                ))}

                {/* Show the last page and ellipsis if necessary */}
                {endPage < totalPages && (
                    <>
                        <span>...</span>
                        <button onClick={() => gotoPage(totalPages - 1)}>{totalPages}</button>
                    </>
                )}

                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {">>"}
                </button>

                {/* Page size selection */}
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 50].map((size) => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Pagination;