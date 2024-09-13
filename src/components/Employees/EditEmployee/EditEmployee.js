import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {getEmployeeData} from "../../../api";
import EditEmployeeInformation from "./Form/EditEmployeeInformation";
import Layout from "../../Layout/Layout";

const EditEmployee = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState(null);
    const [cnssFieldIsHidden, setCnssFieldIsHidden] = useState('none');
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect( () => {
        const employeeData = getEmployeeData(id);
        setEmployee(employeeData);
        console.log('test', employeeData);
    }, [id]);
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
        // const formData = new FormData();
        // for (const key in employeeData) {
        //     if (key === 'profileImage') {
        //         if (employeeData[key][0])
        //             formData.append(key, employeeData[key][0]);
        //     }
        //     else {
        //         if (typeof employeeData[key] === 'object') {
        //             for (const subKey in employeeData[key])
        //                 formData.append(`${key}[${subKey}]`, employeeData[key][subKey]);
        //         } else
        //             formData.append(key, employeeData[key]);
        //     }
        //
        // }
        // formData.append('EmploymentStatus', 'Active');
        // try {
        //     const newEmployee = await createEmployee(formData);
        //     setServerErrorMessage('');
        //     setSuccessMessage("New employee created successfully.");
        //     setTimeout(() => navigate('/employees'), 2000);
        // } catch (error) {
        //     setServerErrorMessage('Failed to create the employee');
        // }
    }

    return(
        <Layout title={"Edit Employee"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <EditEmployeeInformation register={register} errors={errors}/>
                                {/*<ContactInformation register={register} errors={errors}/>*/}
                                {/*<AdditionalInformation register={register} errors={errors}/>*/}
                                {/*<EmploymentInformation*/}
                                {/*    register={register}*/}
                                {/*    errors={errors}*/}
                                {/*    handleCnssField={handleCnssField}*/}
                                {/*    cnssFieldIsHidden={cnssFieldIsHidden}*/}
                                {/*/>*/}
                                {/*<BankAccountInformation*/}
                                {/*    register={register}*/}
                                {/*    errors={errors}*/}
                                {/*    control={control}*/}
                                {/*/>*/}
                                {/*<button className={"btn btn-dark btn-sm ms-auto"}>Save</button>*/}
                                {/*{serverErrorMessage && <p className="error-message">{serverErrorMessage}</p>}*/}
                                {/*{successMessage && <p className="success-message">{successMessage}</p>}*/}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default EditEmployee;