import React, {useMemo} from 'react';
import {usePagination, useTable} from "react-table";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleXmark, faEye} from "@fortawesome/free-solid-svg-icons";

const LastLeaveRequests = ({leaveRequests}) => {
    const baseURL = "https://localhost:7292/";
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
                Header: "Reason",
                accessor: "reason",
            },
            {
                Header: "Remaining annual",
                accessor: "annual",
                Cell: ({ row }) => {
                    const {annual} = row.original.user.leaveBalance;
                    return (
                        <p className={"text-sm text-center"}>{annual.toFixed(2)}</p>
                    )
                },
            },
            {
                Header: "Remaining sick",
                accessor: "sick",
                Cell: ({ row }) => {
                    const {sick} = row.original.user.leaveBalance;
                    return (
                        <p className={"text-sm text-center"}>{sick.toFixed(2)}</p>
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
};

export default LastLeaveRequests;