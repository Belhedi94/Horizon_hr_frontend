import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getDepartmentData, updateDepartment} from "../../../api";
import Layout from "../../Layout/Layout";
import AddDepartmentForm from "../AddDepartmentForm/AddDepartmentForm";


const EditDepartment = () => {
    const {id} = useParams();
    const [department, setDepartment] = useState({});
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
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

    const onSubmit = async (data) => {
        try {
            await updateDepartment(id, data);
            setServerErrorMessage('');
            setSuccessMessage("Department updated successfully.");
            setTimeout(() => navigate('/departments'), 2000);
        } catch (error) {
            setServerErrorMessage('Failed to update the department data');
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

export default EditDepartment;