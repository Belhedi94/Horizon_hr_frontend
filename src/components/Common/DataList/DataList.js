import React, { useMemo } from "react";
import {usePagination, useTable} from "react-table";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrashCan, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../SearchBox/SearchBox";
import Table from "../Table/Table";
import ReactPaginate from "react-paginate";
import './data_list.css';

const DataList = ({props}) => {
    const {data, loading, filterInput, handleFilterChange, openModal, setPageIndex, pageSize, totalItems} = props;

    const columns = useMemo(
        () => [
            {
                Header: "Title",
                accessor: "title",
                Cell: ({ value }) => (
                    <div className="d-flex px-2 py-1">
                        <div>
                            <FontAwesomeIcon icon={faBriefcase} size={"2x"} style={{marginRight: '10px'}}/>
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
                        <Link to={`/positions/edit/${row.original.id}`}>
                            <FontAwesomeIcon icon={faPen} title={"Edit"}   style={{color: 'purple', cursor: 'pointer', marginRight: '5px'}}/>
                            <span className={"ml-2"}>Edit</span>
                        </Link>
                        <span className={"cursor-pointer"} onClick={(e) => openModal(row.original.id)}>
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
                                    <h6>Positions</h6>
                                </div>
                                <SearchBox
                                    filterInput={filterInput}
                                    handleFilterChange={handleFilterChange}
                                />
                            </div>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <Table props={tableProps} />
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
        </div>

    );
};

export default DataList;