import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {createPosition} from "../../../api";
import Layout from "../../Layout/Layout";
import SimpleForm from "../../Common/SimpleForm/SimpleForm";

const AddPosition = () => {
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        try {
            await createPosition(data);
            setServerErrorMessage('');
            setSuccessMessage("New position created successfully.");
            setTimeout(() => navigate('/positions'), 2000);
        } catch (error) {
            setServerErrorMessage('Failed to create the position');
        }
    }

    return (
        <Layout title={"Add new position"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <SimpleForm register={register} errors={errors}/>
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

export default AddPosition;