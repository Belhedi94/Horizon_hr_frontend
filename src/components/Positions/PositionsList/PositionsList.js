import React, { useEffect,  useState } from "react";
import Layout from "../../Layout/Layout";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal/ConfirmDeleteModal";
import {getAllPositions} from "../../../api";
import AddButton from "../../Common/AddButton/AddButton";
import DataList from "../../Common/DataList/DataList";
import Pagination from "../../Common/Pagination/Pagination";
import './positions_list.css';

const PositionsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [filterInput, setFilterInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFilterChange = (e) => {
        const value = e.target.value || "";
        setFilterInput(value);
        setPageIndex(0);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        closeModal();
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAllPositions(pageIndex, pageSize, filterInput);
            setData(data.items);
            setTotalItems(data.totalItems);
            setLoading(false);
        }
        catch(error) {
            console.error("Failed to fetch data", error);
        }};

    useEffect(() => {
        fetchData();
    }, [pageIndex, pageSize, filterInput]);

    return (
        <Layout title={"Positions management"}>
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onConfirmDelete={handleDelete}
                item={"position"}
            />
            <AddButton link={"/positions/add"} buttonName={"Add position"}/>
            <DataList
                data={data}
                loading={loading}
                handleFilterChange={handleFilterChange}
                openModal={openModal}
            />
            <Pagination
                pageIndex={pageIndex}
                pageSize={pageSize}
                totalItems = {totalItems}
                setPageIndex={setPageIndex}
                setPageSize={setPageSize}
            />
        </Layout>
    );
};

export default PositionsList;
