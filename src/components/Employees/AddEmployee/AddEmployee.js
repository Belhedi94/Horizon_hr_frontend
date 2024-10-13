import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {createEmployee, getAllPositions, getAllTeams} from "../../../api";
import {useNavigate} from "react-router-dom";
import ContactInformation from "./Form/ContactInformation";
import EmployeeInformation from "./Form/EmployeeInformation";
import AdditionalInformation from "./Form/AdditionalInformation";
import BankAccountInformation from "./Form/BankAccountInformation";
import EmploymentInformation from "./Form/EmploymentInformation";
import Layout from "../../Layout/Layout";
import {buildFormatData} from "../../utils/formatDataHelper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";
import "./add_employee.css";
import BankAccountSwitcher from "../EditEmployee/Form/BankAccountSwitcher";


const AddEmployee = () => {
    const [cnssFieldIsHidden, setCnssFieldIsHidden] = useState('none');
    const [bankAccountSectionIsHidden, setBankAccountSectionIsHidden] = useState(false);
    const [teams, setTeams] = useState([]);
    const [positions, setPositions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const navigate = useNavigate();
    const {register, unregister, handleSubmit, control, formState: {errors}} = useForm();

    const handleCnssField = (e) => {
        const contractType = e.target.value;
        if (contractType === 'CDI' || contractType === 'CDD')
            setCnssFieldIsHidden('block');
        else {
            setCnssFieldIsHidden('none');
            unregister('cnss');
        }
    };

    const handleSwitcherButton = (bankAccountToggleActivated) => {
        if (!bankAccountToggleActivated)
            unregister('bankAccount');
        setBankAccountSectionIsHidden(bankAccountToggleActivated);
    }

    const onSubmit = async (employeeData) => {
        const formData = buildFormatData(employeeData);
        try {
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            await createEmployee(formData);
            toast.success("Employee created successfully.");
            setTimeout(() => navigate('/employees'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error("Failed to create an employee.");
        }
    }

    const fetchData = async () => {
        const pageNumber = 0;
        const pageSize = 10;
        const filter = '';
        const positions = await getAllPositions(pageNumber, pageSize, filter, false);
        const teams = await getAllTeams(pageNumber, pageSize, filter, false);
        setTeams(teams.items);
        setPositions(positions.items);
    };

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <Layout title={"Add new employee"}>
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
                                    teams={teams}
                                    positions={positions}
                                />
                                <BankAccountSwitcher
                                    bankAccountSectionIsHidden={bankAccountSectionIsHidden}
                                    handleSwitcherButton={handleSwitcherButton}
                                />
                                {bankAccountSectionIsHidden && (
                                    <BankAccountInformation
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

    )};

export default AddEmployee;