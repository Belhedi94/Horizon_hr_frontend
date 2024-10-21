import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createJobOffer } from "../../../api";
import Layout from "../../Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import AddJobOfferForm from "./AddJobOfferForm/AddJobOfferForm";

const AddJobOffer = () => {
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        register('description', { required: 'Description is required' });
    }, [register]);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{ marginRight: '10px' }} />
                    Loading...
                </>
            );
            // Send the raw description data
            data.description = JSON.parse(data.description);
            await createJobOffer(data);
            toast.success("Job offer created successfully.");
            setTimeout(() => navigate('/jobs/offers'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error("Failed to create a job offer.");
        }
    };

    return (
        <Layout title={"Add new job offer"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <AddJobOfferForm
                                    register={register}
                                    errors={errors}
                                    description={description}
                                    setDescription={setDescription}
                                    setValue={setValue}
                                />
                                <button disabled={loading} className={"btn btn-dark btn-sm ms-auto"}>
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

export default AddJobOffer;
