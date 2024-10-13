import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getAllPositions, getAllTeams, getEmployeeData, updateEmployee} from "../../../api";
import EditEmployeeInformation from "./Form/EditEmployeeInformation";
import Layout from "../../Layout/Layout";
import EditContactInformation from "./Form/EditContactInformation";
import EditAdditionalInformation from "./Form/EditAdditionalInformation";
import EditEmploymentInformation from "./Form/EditEmploymentInformation";
import {formatDateForInput} from "../../utils/dateUtils";
import EditBankAccountInformation from "./Form/EditBankAccountInformation";
import {buildFormatData} from "../../utils/formatDataHelper";
import BankAccountSwitcher from "./Form/BankAccountSwitcher";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";

const EditEmployee = () => {
    const {id} = useParams();
    const [employee, setEmployee] = useState({});
    const [cnssFieldIsHidden, setCnssFieldIsHidden] = useState(true);
    const [bankAccountSectionIsHidden, setBankAccountSectionIsHidden] = useState(false);
    const [teams, setTeams] = useState([]);
    const [positions, setPositions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const navigate = useNavigate();

    const fetchEmployee = async () => {
        try {
            const employeeData = await getEmployeeData(id);
            setEmployee(employeeData);

            const bankAccount = employeeData.bankAccount;
            if (bankAccount)
                setBankAccountSectionIsHidden(true);
            else {
                setBankAccountSectionIsHidden(false);
                unregister('bankAccount');
            }

            const contractType = employeeData.employmentDetails.contractType;
            if (contractType === 'CDI' || contractType === 'CDD')
                setCnssFieldIsHidden(false);
            else
                unregister('cnssRegistrationNumber');
        } catch(error) {
            console.log('Error fetching employee data: ', error);
        }
    }

    const handleSwitcherButton = (bankAccountToggleActivated) => {
        if (!bankAccountToggleActivated)
            unregister('bankAccount');
        setBankAccountSectionIsHidden(bankAccountToggleActivated);
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
                positionId: employee.employmentDetails?.position?.id,
                teamId: employee.employmentDetails?.team.id,
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
        if (cnssFieldIsHidden)
            unregister('cnssRegistrationNumber');
        const formData = buildFormatData(employeeData);
        try {
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            await updateEmployee(id, formData);
            toast.success("Employee updated successfully.");
            setTimeout(() => navigate('/employees'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error("Failed to update an employee.");
        }
    }

    const fetchData = async () => {
        const pageNumber = 0;
        const pageSize = 10;
        const filter = '';
        await fetchEmployee();
        const positionsData = await getAllPositions(pageNumber, pageSize, filter, false);
        const teamsData = await getAllTeams(pageNumber, pageSize, filter, false);
        setTeams(teamsData.items);
        setPositions(positionsData.items);
    };

    useEffect( () => {
        fetchData();
    }, [id]);

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
                                    teams={teams}
                                    positions={positions}
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

export default EditEmployee;