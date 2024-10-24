import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getJobOfferData, updateJobOffer} from "../../../api";
import AddJobOfferForm from "../AddJobOffer/AddJobOfferForm/AddJobOfferForm";
import Layout from "../../Layout/Layout";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


const EditJobOffer = () => {
    const {id} = useParams();
    const [jobOffer, setJobOffer] = useState({});
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const navigate = useNavigate();

    const fetchJobOffer = async () => {
        try
        {
            const jobOfferData = await getJobOfferData(id);
            setJobOffer(jobOfferData);
            setDescription(jobOfferData.description);
        }
        catch(error)
        {
            console.log('Error fetching job offer data: ', error);
        }
    }

    useEffect( () => {
        fetchJobOffer();
    }, [id]);

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({
        values: {
            title:  jobOffer.title,
            location:  jobOffer.location,
            employmentType:  jobOffer.employmentType,
            status:  jobOffer.status,
            description: jobOffer.description,
        }
    });

    const onSubmit = async (jobOfferData) => {
        try {
            await updateJobOffer(id, jobOfferData);
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            toast.success('Job offer updated successfully.');
            setTimeout(() => navigate('/jobs/offers'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error('Failed to update the job offer data');
        }
    }

    return (
        <Layout title={"Edit job offer"}>
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
                                    forEdit={true}/>
                                <button disabled={loading} className={"btn btn-dark btn-sm ms-auto"}>{saveButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    )};

export default EditJobOffer;