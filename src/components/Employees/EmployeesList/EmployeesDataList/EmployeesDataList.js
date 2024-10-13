import React, { useMemo } from "react";
import {usePagination, useTable} from "react-table";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenClip, faTrashCan, faBriefcase, faListUl} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../../../Common/SearchBox/SearchBox";
import Table from "../../../Common/Table/Table";
import ReactPaginate from "react-paginate";
import { Tooltip } from "react-tooltip";

const EmployeesDataList = ({props}) => {
    const baseURL = "https://localhost:7292/";
    const {data, loading, filterInput, handleFilterChange, openModal, setPageIndex, pageSize, totalItems} = props;

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "firstName",
                Cell: ({ row }) => {
                    const {firstName, lastName, profileImage} = row.original;
                    return (
                    <div className="d-flex">
                        <div>
                            <img
                                src={`${baseURL}${profileImage}`}
                                className="avatar avatar-sm me-3"
                                alt={`${firstName} ${lastName}`}
                            />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">{firstName} {lastName}</h6>
                        </div>
                    </div>
                    )
                },
            },
            {
                Header: "Position",
                accessor: "position",
                Cell: ({ row }) => {
                    const {title} = row.original.employmentDetails.position;
                    const {name} = row.original.employmentDetails.team.department;
                    return (
                        <div>
                            <p className="text-xs font-weight-bold mb-1">{title}</p>
                            <p className="text-xs text-secondary mb-0">{name}</p>
                        </div>
                    )
                },
            },
            {
                Header: "Team",
                accessor: "team",
                Cell: ({ row }) => {
                    const {name} = row.original.employmentDetails.team;
                    return (
                        <p className="text-xs text-secondary mb-0">{name}</p>
                    )
                },
            },
            {
                Header: "Contract",
                accessor: "contractType",
                Cell: ({ row }) => {
                    const {contractType} = row.original.employmentDetails;
                    return (
                        <p className="text-xs text-secondary mb-0">{contractType}</p>
                    )
                },
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ row }) => {
                    const {status} = row.original;
                    return (
                        <div className="align-middle text-sm">
                            <span className={`badge badge-sm ${status === 'Active' ? 'bg-gradient-success' : 'bg-gradient-danger'}`}>{status}</span>
                        </div>
                    )
                },
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ({ row }) => (
                    <div>
                        <Link to={`/employees/edit/${row.original.id}`}>
                            <FontAwesomeIcon
                                data-tooltip-id={"edit_employee_tooltip"}
                                icon={faPenClip}
                                size={"xl"}
                                style={{color: 'purple', cursor: 'pointer', marginRight: '10px'}}
                            />
                        </Link>
                        <span
                            data-tooltip-id={"delete_employee_tooltip"}
                            className={"cursor-pointer"}
                            onClick={(e) => openModal(row.original.id)}
                        >
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                size={"xl"}
                                style={{color: 'red', cursor: 'pointer'}}
                            />
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
        page,
        prepareRow,
        pageCount,
        gotoPage,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
            manualPagination: true,
            pageCount: Math.ceil(totalItems / pageSize)
        },
        usePagination
    );

    const tableProps = {
        getTableProps,
        headerGroups,
        getTableBodyProps,
        loading,
        prepareRow,
        page
    };

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setPageIndex(selectedPage);
        gotoPage(selectedPage);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <div className="row d-flex px-2 py-1 align-items-center">
                                <div className={"col-md"}>
                                    <h6>
                                        <FontAwesomeIcon
                                            icon={faListUl} size={"xl"}
                                            style={{marginRight: '10px'}}
                                        />
                                        Employees
                                    </h6>
                                </div>
                                <SearchBox
                                    filterInput={filterInput}
                                    handleFilterChange={handleFilterChange}
                                />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                {data.length ===0 ? (
                                        <>
                                            <hr className={"horizontal dark"}/>
                                            <div className={"text-center p-3"}>No data available</div>
                                        </>
                                    ) :
                                    (<Table props={tableProps} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousClassName={"pagination-previous"}
                nextClassName={"pagination-next"}
                disabledClassName={"pagination-disabled"}
                breakClassName={"pagination-break"}
                hrefBuilder={() => null}
            />

            <Tooltip
                id="delete_employee_tooltip"
                place="top"
                content="Delete employee"
                variant={"dark"}
            />
            <Tooltip
                id="edit_employee_tooltip"
                place="top"
                content="Edit employee"
                variant={"dark"}
            />
        </div>

    );
};

export default EmployeesDataList;