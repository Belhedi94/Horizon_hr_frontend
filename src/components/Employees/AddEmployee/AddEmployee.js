import React, { useState } from "react";
import {useForm} from "react-hook-form";
import {createEmployee} from "../../../api";
import {useNavigate} from "react-router-dom";
import ContactInformation from "./Form/ContactInformation";
import EmployeeInformation from "./Form/EmployeeInformation";
import AdditionalInformation from "./Form/AdditionalInformation";
import BankAccountInformation from "./Form/BankAccountInformation";
import EmploymentInformation from "./Form/EmploymentInformation";
import "./add_employee.css";
import Layout from "../../Layout/Layout";

const AddEmployee = () => {
    const [cnssFieldIsHidden, setCnssFieldIsHidden] = useState('none');
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleCnssField = (e) => {
        const contractType = e.target.value;
        if (contractType === 'CDI' || contractType === 'CDD')
            setCnssFieldIsHidden('block');
        else {
            setCnssFieldIsHidden('none');
            unregister('cnss');
        }
    };
    const {register, unregister, handleSubmit, control, formState: {errors}} = useForm();

    const onSubmit = async (employeeData) => {
        const formData = new FormData();
        for (const key in employeeData) {
            if (key === 'profileImage') {
                if (employeeData[key][0])
                    formData.append(key, employeeData[key][0]);
            }
            else {
                if (typeof employeeData[key] === 'object') {
                    for (const subKey in employeeData[key])
                        formData.append(`${key}[${subKey}]`, employeeData[key][subKey]);
                } else
                    formData.append(key, employeeData[key]);
            }

        }
        formData.append('EmploymentStatus', 'Active');
        try {
            const newEmployee = await createEmployee(formData);
            setServerErrorMessage('');
            setSuccessMessage("New employee created successfully.");
            setTimeout(() => navigate('/employees'), 2000);
        } catch (error) {
            setServerErrorMessage('Failed to create the employee');
        }
    }

    return (
        <Layout title={"Employees management"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <EmployeeInformation register={register} errors={errors}/>
                                <ContactInformation register={register} errors={errors}/>
                                <AdditionalInformation register={register} errors={errors}/>
                                <EmploymentInformation
                                    register={register}
                                    errors={errors}
                                    handleCnssField={handleCnssField}
                                    cnssFieldIsHidden={cnssFieldIsHidden}
                                />
                                <BankAccountInformation
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
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

export default AddEmployee;