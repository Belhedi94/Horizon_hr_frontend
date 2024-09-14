import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {getEmployeeData} from "../../../api";
import EditEmployeeInformation from "./Form/EditEmployeeInformation";
import Layout from "../../Layout/Layout";
import EditContactInformation from "./Form/EditContactInformation";
import EditAdditionalInformation from "./Form/EditAdditionalInformation";
import EditEmploymentInformation from "./Form/EditEmploymentInformation";
import {formatDateForInput} from "../../utils/dateUtils";
import EditBankAccountInformation from "./Form/EditBankAccountInformation";

const EditEmployee = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});
    const [cnssFieldIsHidden, setCnssFieldIsHidden] = useState('none');
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const fetchEmployee = async () => {
        try {
            const employeeData = await getEmployeeData(id);
            setEmployee(employeeData);

            const contractType = employeeData.employmentDetails.contractType;
            if (contractType === 'CDI' || contractType === 'CDD')
                setCnssFieldIsHidden('block');
        } catch(error) {
            console.log('Error fetching employee data: ', error);
        }
    }

    useEffect( () => {
        fetchEmployee();
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
    const {register, unregister, handleSubmit, control, formState: {errors}} = useForm({
        values: {
            firstName:  employee.firstName,
            lastName: employee.lastName,
            username: employee.username,
            personalEmail: employee.personalEmail,
            professionalEmail: employee.professionalEmail,
            personalPhone: employee.personalPhone,
            address: employee.address,
            cin: employee.cin,
            dateOfBirth: formatDateForInput(employee.dateOfBirth),
            gender: employee.gender,
            maritalStatus: employee.maritalStatus,
            cnssRegistrationNumber: employee.cnssRegistrationNumber,
            employmentDetails: {
                contractType: employee.employmentDetails?.contractType,
                employmentType: employee.employmentDetails?.employmentType,
                joiningDate: formatDateForInput(employee.employmentDetails?.joiningDate),
                probationPeriod: employee.employmentDetails?.probationPeriod,
                salary: employee.employmentDetails?.salary,
                positionId: employee.employmentDetails?.positionId,
                teamId: employee.employmentDetails?.teamId,
            },
            bankAccount: {
                holderName: employee.bankAccount?.holderName,
                bankName: employee.bankAccount?.bankName,
                rib: employee.bankAccount?.rib,
                accountNumber: employee.bankAccount?.accountNumber,
            }
        }
    });

    const onSubmit = async (employeeData) => {
        console.log(employeeData);
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
                                <EditEmployeeInformation
                                    register={register}
                                    errors={errors}
                                />
                                <EditContactInformation
                                    register={register}
                                    errors={errors}
                                />
                                <EditAdditionalInformation
                                    register={register}
                                    errors={errors}
                                />
                                <EditEmploymentInformation
                                    register={register}
                                    errors={errors}
                                    handleCnssField={handleCnssField}
                                    cnssFieldIsHidden={cnssFieldIsHidden}
                                />
                                <EditBankAccountInformation
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                                <button className={"btn btn-dark btn-sm ms-auto"}>Update</button>
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

export default EditEmployee;