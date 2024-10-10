import React, { useEffect,  useState } from "react";
import Layout from "../../Layout/Layout";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal/ConfirmDeleteModal";
import {getAllDepartments} from "../../../api";
import AddButton from "../../Common/AddButton/AddButton";
import {deleteDepartment} from "../../../api";
import DepartmentsDataList from "./DepartmentsDataList/DepartmentsDataList";
import { toast } from 'react-toastify';

const DepartmentsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [filterInput, setFilterInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleFilterChange = (e) => {
        const value = e.target.value || "";
        setFilterInput(value);
        setPageIndex(0);
    };

    const openModal = (value) => {
        setSelectedDepartment(value);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const response = await deleteDepartment(selectedDepartment);
        if (response.status === 200) {
            closeModal();
            toast.success("Department deleted successfully!");
            await fetchData();
        }
        else
            toast.error("Failed to delete the Department.");

    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAllDepartments(pageIndex, pageSize, filterInput);
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
        <Layout title={"Departments management"}>
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onConfirmDelete={handleDelete}
                item={"department"}
            />
            <AddButton link={"/departments/add"} buttonName={"Add department"}/>
            <DepartmentsDataList props={dataListProps}/>
        </Layout>
    );
};

export default DepartmentsList;
