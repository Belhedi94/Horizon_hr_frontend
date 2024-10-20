import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "../../../Layout/Layout";
import {createDocumentRequest} from "../../../../api";
import {Link, useNavigate} from "react-router-dom";
import {faCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserContext} from "../../../../contexts/UserContext";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";

const AddDocumentRequest = () => {
    const {user} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const documentRequestData = {
                ...data,
                userId: user.id
            };
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            await createDocumentRequest(documentRequestData);
            toast.success("Document request submitted successfully.");
            setTimeout(() => navigate('/requests/documents'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Submit');
            toast.error("Failed to submit a document request.");
        }
    }

    return (
        <div>
            <Layout title={"Submit document request"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <Link to={"/requests/documents"}>
                                        <FontAwesomeIcon
                                            icon={faCircleLeft}
                                            size={"2x"}
                                            style={{marginBottom: '10px', cursor: 'pointer'}}
                                        />
                                    </Link>
                                    <p className="text-uppercase text-sm">Document request details</p>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor={"type"}>Document type <span className={"red-star"}>*</span></label>
                                                <select
                                                    id="type"
                                                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                                                    {...register('type', {
                                                        required: 'Document type is required',
                                                        validate: (value) => value !== "" || 'Please select a document type'
                                                    })}
                                                >
                                                    <option value="">Select a document type</option>
                                                    <option value="Payslip">Payslip</option>
                                                    <option value="Salary certificate">Salary certificate</option>
                                                    <option value="Work certificate">Work certificate</option>
                                                </select>
                                                {errors.type && <span style={{ color: 'red', fontSize: '12px' }}>{errors.type.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor={"description"}>Description <span className={"red-star"}>*</span></label>
                                                <textarea
                                                    {...register('description', { required: 'Description is required' })}
                                                    className={"form-control"}
                                                    id={"description"}
                                                />
                                                {errors.description && <span style={{ color: 'red', fontSize: '12px' }}>{errors.description.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"mt-3"}>
                                        <button
                                            disabled={loading}
                                            className={"btn btn-dark btn-sm ms-auto"}
                                        >
                                            {saveButton}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </div>
    );
};

export default AddDocumentRequest;