import React, { useMemo } from "react";
import {usePagination, useTable} from "react-table";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const DataList = ({data, loading, filterInput, handleFilterChange, totalItems, pageSize, openModal}) => {

    const columns = useMemo(
        () => [
            {
                Header: "Title",
                accessor: "title",
                Cell: ({ value }) => (
                    <div className="d-flex px-2 py-1">
                        <div>
                            <img src={"/images/default_employee_avatar.png"} className="avatar avatar-sm me-3" alt="user_image" />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{ value}</h6>
                        </div>
                    </div>
                ),
            },
            {
                Header: "Description",
                accessor: "description",
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ({ row }) => (
                    <div>
                        <Link to={`/requests/leaves/edit/${row.original.id}`}>
                            <FontAwesomeIcon icon={faPen} title={"Edit"}   style={{color: 'purple', cursor: 'pointer', marginRight: '5px'}}/>
                            <span className={"ml-2"}>Edit</span>
                        </Link>
                        <span className={"cursor-pointer"} onClick={openModal}>
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                title={"Delete position"}
                                size={"lg"}
                                style={{marginLeft: '15px', marginRight: '5px', color: 'red', cursor: 'pointer'}}
                            />
                            <span style={{color: 'red'}} className={"ml-2"}>Delete</span>
                        </span>
                    </div>
                ),
            },
        ],
        []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize: setPageSizeTable,
        state: { pageIndex: tablePageIndex, pageSize: tablePageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 }, // Set initial page size
            manualPagination: true, // For server-side pagination
            pageCount: Math.ceil(totalItems / pageSize), // Calculate page count
        },
        usePagination
    );

    return (
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="card-header pb-0">
                        <div className="row d-flex px-2 py-1 align-items-center">
                            <div className={"col-md"}>
                                <h6>Positions</h6>
                            </div>
                            <div className="col-md-3">
                                <input
                                    value={filterInput}
                                    onChange={handleFilterChange}
                                    placeholder={"Search..."}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-body px-0 pt-0 pb-2">
                        <div className="table-responsive p-0">
                            <table {...getTableProps()} className="table align-items-center mb-0">
                                <thead>
                                {headerGroups.map((headerGroup, index) => (
                                    <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()} key={column.id} className={"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}>{column.render("Header")}</th>
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
                                                    <td {...cell.getCellProps()} key={cell.column.id} className={"text-xs font-weight-bold mb-0"}>{cell.render("Cell")}</td>
                                                ))}
                                            </tr>
                                        );
                                    })
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataList;