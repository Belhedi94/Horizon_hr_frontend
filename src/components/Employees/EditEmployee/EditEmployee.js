import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {getEmployeeData, updateEmployee} from "../../../api";
import EditEmployeeInformation from "./Form/EditEmployeeInformation";
import Layout from "../../Layout/Layout";
import EditContactInformation from "./Form/EditContactInformation";
import EditAdditionalInformation from "./Form/EditAdditionalInformation";
import EditEmploymentInformation from "./Form/EditEmploymentInformation";
import {formatDateForInput} from "../../utils/dateUtils";
import EditBankAccountInformation from "./Form/EditBankAccountInformation";
import {buildFormatData} from "../../utils/formatDataHelper";
import BankAccountSwitcher from "./Form/BankAccountSwitcher";

const EditEmployee = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});
    const [cnssFieldIsHidden, setCnssFieldIsHidden] = useState(true);
    const [bankAccountSectionIsHidden, setBankAccountSectionIsHidden] = useState(false);
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const fetchEmployee = async () => {
        try {
            const employeeData = await getEmployeeData(id);
            setEmployee(employeeData);

            const bankAccount = employeeData.bankAccount;
            if (bankAccount)
                setBankAccountSectionIsHidden(true);
            else
                setBankAccountSectionIsHidden(false);
            const contractType = employeeData.employmentDetails.contractType;
            if (contractType === 'CDI' || contractType === 'CDD')
                setCnssFieldIsHidden(false);
        } catch(error) {
            console.log('Error fetching employee data: ', error);
        }
    }

    useEffect( () => {
        fetchEmployee();
    }, [id]);

    const handleSwitcherButton = (switchStatus) => {
        setBankAccountSectionIsHidden(switchStatus);
    }

    const handleCnssField = (e) => {
        const contractType = e.target.value;
        if (contractType === 'CDI' || contractType === 'CDD')
            setCnssFieldIsHidden(false);
        else {
            setCnssFieldIsHidden(true);
            unregister('cnssRegistrationNumber');
        }
    };
    const {register, unregister, handleSubmit, control, formState: {errors}} = useForm({
        values: {
            firstName:  employee.firstName,
            lastName: employee.lastName,
            username: employee.username,
            status: employee.status,
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
        const formData = buildFormatData(employeeData, cnssFieldIsHidden, bankAccountSectionIsHidden);
        try {
            await updateEmployee(id, formData);
            setServerErrorMessage('');
            setSuccessMessage("Employee updated successfully.");
            setTimeout(() => navigate('/employees'), 2000);
        } catch (error) {
            setServerErrorMessage('Failed to update the employee data');
        }
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
                                <BankAccountSwitcher
                                    bankAccountSectionIsHidden={bankAccountSectionIsHidden}
                                    handleSwitcherButton={handleSwitcherButton}
                                />
                                {bankAccountSectionIsHidden && (
                                    <EditBankAccountInformation
                                        register={register}
                                        errors={errors}
                                        control={control}
                                        bankAccountSectionIsHidden={bankAccountSectionIsHidden}
                                        setBankAccountSectionIsHidden={setBankAccountSectionIsHidden}
                                    />
                                )}

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