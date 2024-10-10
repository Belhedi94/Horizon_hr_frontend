import React, { useMemo } from "react";
import {usePagination, useTable} from "react-table";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenClip, faTrashCan, faPeopleGroup, faListUl} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../../../Common/SearchBox/SearchBox";
import Table from "../../../Common/Table/Table";
import ReactPaginate from "react-paginate";
import { Tooltip } from "react-tooltip";

const TeamsDataList = ({props}) => {
    const {data, loading, filterInput, handleFilterChange, openModal, setPageIndex, pageSize, totalItems} = props;

    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: ({ value }) => (
                    <div className="d-flex px-2 py-1">
                        <div>
                            <FontAwesomeIcon icon={faPeopleGroup} size={"2x"} style={{marginRight: '10px'}}/>
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
                        <Link to={`/teams/edit/${row.original.id}`}>
                            <FontAwesomeIcon
                                data-tooltip-id={"edit_team_tooltip"}
                                icon={faPenClip}
                                size={"xl"}
                                style={{color: 'purple', cursor: 'pointer', marginRight: '10px'}}
                            />
                        </Link>
                        <span
                            data-tooltip-id={"delete_team_tooltip"}
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
                                        Teams
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
                id="delete_team_tooltip"
                place="top"
                content="Delete team"
                variant={"dark"}
            />
            <Tooltip
                id="edit_team_tooltip"
                place="top"
                content="Edit team"
                variant={"dark"}
            />
        </div>

    );
};

export default TeamsDataList;