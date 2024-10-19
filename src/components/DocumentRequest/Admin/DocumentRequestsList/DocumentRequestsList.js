import React, { useEffect,  useState } from "react";
import Layout from "../../../Layout/Layout";
import {getAllDocumentRequests, updateDocumentRequest} from "../../../../api";
import AddButton from "../../../Common/AddButton/AddButton";
import { toast } from 'react-toastify';
import DocumentRequestsDataList from "./DocumentRequestsDataList/DocumentRequestsDataList";
import DocumentRequestDetailsModal from "../../../Modals/DocumentRequestDetailsModal/DocumentRequestDetailsModal";

const DocumentRequestsList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [filterInput, setFilterInput] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleFilterChange = (e) => {
        const value = e.target.value || "";
        setFilterInput(value);
        setPageIndex(0);
    };

    const openModal = (value) => {
        setSelectedRequest(value);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const changeStatus = async (id, value) => {
        const data = {
            status: value
        };
        try {
            await updateDocumentRequest(id, data);
            await fetchData();
            toast.success(`Document request ${value} successfully`);
        } catch (error) {
            const action = data === 'Approved' ? 'approve' : 'reject';

            toast.error(`Error when trying to ${action} a document request`);
        }

    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAllDocumentRequests(pageIndex, pageSize, filterInput);
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
        data, loading, handleFilterChange, openModal, changeStatus,
        setPageSize, setPageIndex, pageIndex, pageSize, totalItems
    };

    return (
        <Layout title={"Document requests management"}>
            <DocumentRequestDetailsModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                documentRequestData={selectedRequest}
            />
            <AddButton link={"/requests/documents/add"} buttonName={"Request a document"}/>
            <DocumentRequestsDataList props={dataListProps}/>
        </Layout>
    );
};

export default DocumentRequestsList;
