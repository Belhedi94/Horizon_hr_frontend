import React, {useContext, useEffect, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import Layout from "../../../Layout/Layout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {createLeaveRequest, getLeaveBalanceData} from "../../../../api";
import {Link, useNavigate} from "react-router-dom";
import {faPersonWalkingLuggage, faHouseMedical, faCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {UserContext} from "../../../../contexts/UserContext";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";

const AddLeaveRequest = () => {
    const {user} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isHalfDay, setIsHalfDay] = useState(false);
    const [leaveBalance, setLeaveBalance] = useState({});

    const {register, handleSubmit, control, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const handleSwitcherButton = (e) => {
        setIsHalfDay(e);
    };

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const onSubmit = async (data) => {
        try {
            const leaveRequestData = {
                ...data,
                startDate,
                endDate,
                userId: user.id
            };
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            await createLeaveRequest(leaveRequestData);
            toast.success("Leave request submitted successfully.");
            setTimeout(() => navigate('/requests/leaves'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Submit');
            toast.error("Failed to submit a leave request.");
        }
    }

    const fetchLeaveBalance = async (userId) => {
        const data =  await getLeaveBalanceData(userId);
        setLeaveBalance(data);
    };

    useEffect(() => {
        if (user) {
            fetchLeaveBalance(user.id);
        }
    }, [user]);

    return (
        <div>
            <Layout title={"Submit leave request"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <Link to={"/requests/leaves"}>
                                        <FontAwesomeIcon icon={faCircleLeft} size={"2x"} style={{marginBottom: '10px', cursor: 'pointer'}}/>
                                    </Link>
                                    <p className="text-uppercase text-sm">Leave request details</p>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor={"type"}>Leave type <span className={"red-star"}>*</span></label>
                                                <select
                                                    id="type"
                                                    className={`form-control ${errors.leaveType ? 'is-invalid' : ''}`}
                                                    {...register('type', {
                                                        required: 'Leave type is required',
                                                        validate: (value) => value !== "" || 'Please select a leave type'
                                                    })}
                                                >
                                                    <option value="">Select a leave type</option>
                                                    <option value="Annual">Annual leave</option>
                                                    <option value="Sick">Sick leave</option>
                                                    <option value="Exceptional">Exceptional leave</option>
                                                </select>
                                                {errors.type && <span style={{ color: 'red', fontSize: '12px' }}>{errors.type.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor={"reason"}>Reason <span className={"red-star"}>*</span></label>
                                                <textarea
                                                    {...register('reason', { required: 'Reason is required' })}
                                                    className={"form-control"}
                                                    id={"reason"}
                                                />
                                                {errors.reason && <span style={{ color: 'red', fontSize: '12px' }}>{errors.reason.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={""}>Is half day ? <span className={"red-star"}>*</span></label>
                                                <div className="leave-duration-radio-buttons d-flex justify-content-start">
                                                    <div className="form-check form-switch ps-0 mb-4">
                                                        <input
                                                            {...register('isHalfDay', )}
                                                            className="form-check-input ms-auto"
                                                            type="checkbox"
                                                            id="is_half_day_switcher"
                                                            checked={isHalfDay}
                                                            onChange={(e) => handleSwitcherButton(e.target.checked)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"row"}>
                                            <div className="col-md-6">
                                                <Controller
                                                    name="leaveDuration"
                                                    control={control}
                                                    defaultValue={null}
                                                    render={({ field: { onChange, value } }) => (
                                                        <DatePicker
                                                            selectsRange
                                                            startDate={startDate}
                                                            endDate={endDate}
                                                            onChange={(update) => {
                                                                handleDateChange(update);
                                                                onChange(update);
                                                            }}
                                                            minDate={new Date()}
                                                            inline
                                                            className="form-control"
                                                            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                                                        />
                                                    )}
                                                />
                                                {errors.leaveDuration && <span style={{ color: 'red', fontSize: '12px' }}>{errors.leaveDuration.message}</span>}
                                            </div>
                                    </div>
                                    <div className={"mt-3"}>
                                        <button disabled={loading} className={"btn btn-dark btn-sm ms-auto"}>{saveButton}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-4"}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-5">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header mx-4 p-3 text-center">
                                                    <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                                                        <FontAwesomeIcon icon={faPersonWalkingLuggage} size={"2x"} style={{color: '#ffffff', padding: '12px'}}/>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 p-3 text-center">
                                                    <h6 className="text-center mb-0">Annual</h6>
                                                    <span className="text-xs">Remaining balance</span>
                                                    <hr className="horizontal dark my-3" />
                                                    <h5 className="mb-0">{leaveBalance.annual}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header mx-4 p-3 text-center">
                                                    <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                                                        <FontAwesomeIcon icon={faHouseMedical} size={"xl"} style={{color: '#ffffff', padding: '18px'}}/>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 p-3 text-center">
                                                    <h6 className="text-center mb-0">Sick</h6>
                                                    <span className="text-xs">Remaining balance</span>
                                                    <hr className="horizontal dark my-3" />
                                                    <h5 className="mb-0">{leaveBalance.sick}</h5>
                                                </div>
                                            </div>
                                        </div>
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

export default AddLeaveRequest;