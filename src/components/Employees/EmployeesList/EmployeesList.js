import React, { useEffect,  useState } from "react";
import Layout from "../../Layout/Layout";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal/ConfirmDeleteModal";
import {getAllEmployees} from "../../../api";
import AddButton from "../../Common/AddButton/AddButton";
import {deleteEmployee} from "../../../api";
import { toast } from 'react-toastify';
import EmployeesDataList from "./EmployeesDataList/EmployeesDataList";

const EmployeesList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [filterInput, setFilterInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleFilterChange = (e) => {
        const value = e.target.value || "";
        setFilterInput(value);
        setPageIndex(0);
    };

    const openModal = (value) => {
        setSelectedEmployee(value);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const response = await deleteEmployee(selectedEmployee);
        if (response.status === 200) {
            closeModal();
            toast.success("Employee deleted successfully!");
            await fetchData();
        }
        else
            toast.error("Failed to delete the employee.");

    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAllEmployees(pageIndex, pageSize, filterInput);
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
        <Layout title={"Employees management"}>
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onConfirmDelete={handleDelete}
                item={"employee"}
            />
            <AddButton link={"/employees/add"} buttonName={"Add employee"}/>
            <EmployeesDataList props={dataListProps}/>
        </Layout>
    );
};

export default EmployeesList;
