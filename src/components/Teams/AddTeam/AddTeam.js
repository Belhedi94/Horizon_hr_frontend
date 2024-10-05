import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {createTeam, getAllDepartments} from "../../../api";
import Layout from "../../Layout/Layout";
import AddTeamForm from "../AddTeamFrom/AddTeamForm";

const AddTeam = () => {
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        try {
            await createTeam(data);
            setServerErrorMessage('');
            setSuccessMessage("New team created successfully.");
            setTimeout(() => navigate('/teams'), 2000);
        } catch (error) {
            setServerErrorMessage('Failed to create the team');
        }
    }

    const fetchDepartments = async () => {
        const departments = await getAllDepartments();
        setDepartments(departments);
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
                                <AddTeamForm register={register} errors={errors} departments={departments}/>
                                <button className={"btn btn-dark btn-sm ms-auto"}>Save</button>
                                {serverErrorMessage && <p className="error-message">{serverErrorMessage}</p>}
                                {successMessage && <p className="success-message">{successMessage}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default AddTeam;