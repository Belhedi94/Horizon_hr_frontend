import React from "react";

const Table = ({props}) => {
    const {getTableProps, headerGroups, getTableBodyProps, loading, prepareRow, page} = props;

    return (
        <table {...getTableProps()} className="table align-items-center mb-0">
            <thead>
            {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}
                            key={column.id}
                            className={"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}
                        >
                            {column.render("Header")}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {loading ? (
                <tr>
                    <td colSpan={5} className="text-center">
                        Loading...
                    </td>
                </tr>
            ) : (
                page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={row.id}>
                            {row.cells.map((cell) => (
                                <td
                                    {...cell.getCellProps()}
                                    key={cell.column.id}
                                    className={"text-xs font-weight-bold mb-0"}
                                >
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    );
                })
            )}
            </tbody>
        </table>
    );
};

export default Table;