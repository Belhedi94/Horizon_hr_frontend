import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {createDepartment} from "../../../api";
import Layout from "../../Layout/Layout";
import AddDepartmentForm from "./AddDepartmentForm/AddDepartmentForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";

const AddDepartment = () => {
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            await createDepartment(data);
            toast.success("Department created successfully.");
            setTimeout(() => navigate('/departments'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error("Failed to create a department.");
        }
    }

    return (
        <Layout title={"Add new department"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <AddDepartmentForm register={register} errors={errors}/>
                                <button disabled={loading} className={"btn btn-dark btn-sm ms-auto"}>{saveButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default AddDepartment;