import React, { useEffect,  useState } from "react";
import Layout from "../../Layout/Layout";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal/ConfirmDeleteModal";
import {getAllTeams} from "../../../api";
import AddButton from "../../Common/AddButton/AddButton";
import {deleteTeam} from "../../../api";
import DepartmentsDataList from "../../Departments/DepartmentsDataList/DepartmentsDataList";
import TeamsDataList from "./TeamsDataList/TeamsDataList";

const TeamsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [filterInput, setFilterInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleFilterChange = (e) => {
        const value = e.target.value || "";
        setFilterInput(value);
        setPageIndex(0);
    };

    const openModal = (value) => {
        setSelectedTeam(value);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const response = await deleteTeam(selectedTeam);
        // if (response.status === 200)
        closeModal();
        await fetchData();
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAllTeams(pageIndex, pageSize, filterInput);
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
        <Layout title={"Teams management"}>
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onConfirmDelete={handleDelete}
                item={"team"}
            />
            <AddButton link={"/teams/add"} buttonName={"Add team"}/>
            <TeamsDataList props={dataListProps}/>
        </Layout>
    );
};

export default TeamsList;
