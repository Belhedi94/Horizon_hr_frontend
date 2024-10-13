import React, { useEffect,  useState } from "react";
import Layout from "../../../Layout/Layout";
import LeaveRequestDetailsModal from "../../../Modals/LeaveRequestDetailsModal/LeaveRequestDetailsModal";
import {getAllLeaveRequests, updateLeaveRequest} from "../../../../api";
import AddButton from "../../../Common/AddButton/AddButton";
import { toast } from 'react-toastify';
import LeaveRequestsDataList from "./LeaveRequestsDataList/LeaveRequestsDataList";

const LeaveRequestsList = () => {
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
            await updateLeaveRequest(id, data);
            await fetchData();
            toast.success(`Leave request ${value} successfully`);
        } catch (error) {
            const action = data === 'Approved' ? 'approve' : 'reject';

            toast.error(`Error when trying to ${action} a leave request`);
        }

    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getAllLeaveRequests(pageIndex, pageSize, filterInput);
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
        <Layout title={"Leave requests management"}>
            <LeaveRequestDetailsModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                leaveRequestData={selectedRequest}
            />
            <AddButton link={"/requests/leaves/add"} buttonName={"Add leave request"}/>
            <LeaveRequestsDataList props={dataListProps}/>
        </Layout>
    );
};

export default LeaveRequestsList;
