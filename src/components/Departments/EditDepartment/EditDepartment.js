import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getDepartmentData, updateDepartment, updatePosition} from "../../../api";
import Layout from "../../Layout/Layout";
import AddDepartmentForm from "../AddDepartment/AddDepartmentForm/AddDepartmentForm";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const EditDepartment = () => {
    const {id} = useParams();
    const [department, setDepartment] = useState({});
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const navigate = useNavigate();

    const fetchDepartment = async () => {
        try
        {
            const departmentData = await getDepartmentData(id);
            setDepartment(departmentData);
        }
        catch(error)
        {
            console.log('Error fetching department data: ', error);
        }
    }

    useEffect( () => {
        fetchDepartment();
    }, [id]);

    const {register, handleSubmit, formState: {errors}} = useForm({
        values: {
            name:  department.name,
            description: department.description,
        }
    });

    const onSubmit = async (departmentData) => {
        try {
            await updateDepartment(id, departmentData);
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            toast.success('Department updated successfully.');
            setTimeout(() => navigate('/departments'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error('Failed to update the department data');
        }
    }

    return (
        <Layout title={"Edit department"}>
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

export default EditDepartment;