import React from 'react';

const Pagination = ({pageIndex, pageSize, totalItems, setPageIndex, setPageSize}) => {
    return (
        <div className="center">
            <div className="pagination">
                    <span onClick={() => setPageIndex(0)} disabled={pageIndex === 0}>
                        {"<<"}
                    </span>
                <span onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex === 0}>
                        {"<"}
                    </span>
                {Array.from({ length: Math.ceil(totalItems / pageSize) }, (_, i) => (
                    <span
                        key={i}
                        onClick={() => setPageIndex(i)}
                        style={{ fontWeight: pageIndex === i ? "bold" : "normal" }}
                    >
                            {i + 1}
                        </span>
                ))}
                <span onClick={() => setPageIndex(pageIndex + 1)} disabled={pageIndex + 1 >= Math.ceil(totalItems / pageSize)}>
                        {">"}
                    </span>
                <span onClick={() => setPageIndex(Math.ceil(totalItems / pageSize) - 1)} disabled={pageIndex + 1 >= Math.ceil(totalItems / pageSize)}>
                        {">>"}
                    </span>

                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        setPageIndex(0);
                    }}
                >
                    {[10, 20, 30, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Pagination;