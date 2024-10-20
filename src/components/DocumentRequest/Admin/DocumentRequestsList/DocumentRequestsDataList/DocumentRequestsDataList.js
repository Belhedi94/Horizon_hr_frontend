import React, { useMemo } from "react";
import {usePagination, useTable} from "react-table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faListUl, faCircleCheck, faCircleXmark, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../../../../Common/SearchBox/SearchBox";
import Table from "../../../../Common/Table/Table";
import ReactPaginate from "react-paginate";
import { Tooltip } from "react-tooltip";
import {formatDateForInput} from "../../../../utils/dateUtils";

const DocumentRequestsDataList = ({props}) => {
    const baseURL = "https://localhost:7292/";
    const {data, loading, filterInput, handleFilterChange, openModal,
        setPageIndex, pageSize, totalItems, changeStatus} = props;

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "firstName",
                Cell: ({ row }) => {
                    const {firstName, lastName, profileImage} = row.original.user;
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
                Header: "Type",
                accessor: "type",
            },
            {
                Header: "Submitted date",
                accessor: "createdAt",
                Cell: ({ row }) => {
                    const {createdAt} = row.original;
                    return formatDateForInput(createdAt);
                },
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ row }) => {
                    const {status} = row.original;
                    return (
                        <div className="align-middle text-sm">
                            <span
                                className={`badge badge-sm ${status === 'Approved' ? 'bg-gradient-success' :
                                    status === 'Pending' ? 'bg-gradient-secondary' :
                                        'bg-gradient-danger'}`}
                            >
                                {status}
                            </span>
                        </div>
                    )
                },
            },
            {
                Header: "Action",
                accessor: "action",
                Cell: ({ row }) => (
                    <div>
                        <span
                            data-tooltip-id={"show_details_tooltip"}
                            className={"cursor-pointer"}
                            onClick={(e) => openModal(row.original)}
                        >
                            <FontAwesomeIcon
                                onClick={openModal}
                                icon={faEye}
                                size={"xl"}
                                style={{color: 'purple', cursor: 'pointer', marginRight: '10px'}}
                            />
                        </span>
                        {row.original.status === 'Pending' && (
                            <>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    title={"Approve"}
                                    onClick={() => changeStatus(row.original.id, "Approved")}
                                    size={"xl"}
                                    style={{marginRight: '10px', color: 'green', cursor: 'pointer'}}
                                    data-tooltip-id={"approve_request_tooltip"}
                                />
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    title={"Reject"}
                                    onClick={() => changeStatus(row.original.id, "Rejected")}
                                    size={"xl"}
                                    style={{marginRight: '10px', color: 'red', cursor: 'pointer'}}
                                    data-tooltip-id={"reject_request_tooltip"}
                                />
                            </>
                        )}
                        <span
                            data-tooltip-id={"delete_request_tooltip"}
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
                                        Document requests
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
                id="delete_request_tooltip"
                place="top"
                content="Delete request"
                variant={"dark"}
            />
            <Tooltip
                id="show_details_tooltip"
                place="top"
                content="Show details"
                variant={"dark"}
            />
            <Tooltip
                id="approve_request_tooltip"
                place="top"
                content="Approve"
                variant={"dark"}
            />
            <Tooltip
                id="reject_request_tooltip"
                place="top"
                content="Reject"
                variant={"dark"}
            />
        </div>

    );
};

export default DocumentRequestsDataList;