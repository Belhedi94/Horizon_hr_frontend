import React, { useEffect,  useState } from "react";
import Layout from "../../Layout/Layout";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal/ConfirmDeleteModal";
import {getAllPositions} from "../../../api";
import AddButton from "../../Common/AddButton/AddButton";
import PositionsDataList from "./PositionsDataList/PositionsDataList";
import {deletePosition} from "../../../api";
import { toast } from 'react-toastify';

const PositionsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [filterInput, setFilterInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null);

    const handleFilterChange = (e) => {
        const value = e.target.value || "";
        setFilterInput(value);
        setPageIndex(0);
    };

    const openModal = (value) => {
        setSelectedPosition(value);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const response = await deletePosition(selectedPosition);
        if (response.status === 200) {
            closeModal();
            toast.success("Position deleted successfully!");
            await fetchData();
        }
        else
            toast.error("Failed to delete the position.");

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

    const dataListProps = {
        data, loading, handleFilterChange, openModal, setPageSize, setPageIndex, pageIndex, pageSize, totalItems
    };

    return (
        <Layout title={"Positions management"}>
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onConfirmDelete={handleDelete}
                item={"position"}
            />
            <AddButton link={"/positions/add"} buttonName={"Add position"}/>
            <PositionsDataList props={dataListProps}/>
        </Layout>
    );
};

export default PositionsList;
