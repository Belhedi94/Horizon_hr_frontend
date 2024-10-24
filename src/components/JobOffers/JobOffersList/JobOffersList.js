import React, { useEffect,  useState } from "react";
import Layout from "../../Layout/Layout";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal/ConfirmDeleteModal";
import {getAllJobOffers} from "../../../api";
import AddButton from "../../Common/AddButton/AddButton";
import {deleteJobOffer} from "../../../api";
import { toast } from 'react-toastify';
import JobOffersDataList from "./JobOffersDataList/JobOffersDataList";

const JobOffersList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [filterInput, setFilterInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    const handleFilterChange = (e) => {
        const value = e.target.value || "";
        setFilterInput(value);
        setPageIndex(0);
    };

    const openModal = (value) => {
        setSelectedOffer(value);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        const response = await deleteJobOffer(selectedOffer);
        if (response.status === 200) {
            closeModal();
            toast.success("Job offer deleted successfully!");
            await fetchData();
        }
        else
            toast.error("Failed to delete the job offer.");

    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAllJobOffers(pageIndex, pageSize, filterInput);
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
        data, loading, handleFilterChange, openModal, setPageSize,
        setPageIndex, pageIndex, pageSize, totalItems
    };

    return (
        <Layout title={"Job offers management"}>
            <ConfirmDeleteModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                onConfirmDelete={handleDelete}
                item={"job offer"}
            />
            <AddButton link={"/jobs/offers/add"} buttonName={"Add job offer"}/>
            <JobOffersDataList props={dataListProps}/>
        </Layout>
    );
};

export default JobOffersList;
