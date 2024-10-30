import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {createTeam, getAllDepartments} from "../../../api";
import Layout from "../../Layout/Layout";
import AddTeamForm from "./AddTeamFrom/AddTeamForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";

const AddTeam = () => {
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    const {register, setValue, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            await createTeam(data);
            toast.success("Team created successfully.");
            setTimeout(() => navigate('/teams'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error("Failed to create a team.");
        }
    }

    const fetchDepartments = async () => {
        const pageNumber = 0;
        const pageSize = 10;
        const filter = '';
        const departments = await getAllDepartments(pageNumber, pageSize, filter, false);
        setDepartments(departments.items);
    };

    useEffect( () => {
        fetchDepartments();
    }, []);

    return (
        <Layout title={"Add new team"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <AddTeamForm
                                    register={register}
                                    setValue={setValue}
                                    errors={errors}
                                    departments={departments}
                                />
                                <button
                                    className={"btn btn-dark btn-sm ms-auto"}
                                    disabled={loading}
                                >
                                    {saveButton}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default AddTeam;