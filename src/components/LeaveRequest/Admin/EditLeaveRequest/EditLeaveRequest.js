import React, {useState} from "react";
import Layout from "../../../Layout/Layout";
import {useParams} from "react-router-dom";
import {Controller} from "react-hook-form";
import DatePicker from "react-datepicker";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {createLeaveRequest} from "../../../../api";


const EditLeaveRequest = () => {
    const {id} = useParams();
    const [leaveRequest, setLeaveRequest] = useState({});
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isHalfDay, setIsHalfDay] = useState(false);
    const navigate = useNavigate();

    const {register, unregister, handleSubmit, control, formState: {errors}} = useForm();

    const handleSwitcherButton = (e) => {
        setIsHalfDay(e);
    };

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const onSubmit = async (data) => {
        const leaveRequestData = {
            ...data,
            startDate,
            endDate,
            userId: 'EABD8853-53E3-440F-88FD-AF7E121B61EB'
        };

        try {
            await createLeaveRequest(leaveRequestData);
            setServerErrorMessage('');
            setSuccessMessage("Leave request created successfully.");
            setTimeout(() => navigate('/requests/leaves'), 2000);
        } catch(error) {
            setSuccessMessage('');
            setServerErrorMessage('Failed to submit a leave request');
        }

    };

    return (
        <Layout title={"Edit leave request"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <p className="text-uppercase text-sm">Leave request details</p>
                                <div className="row">
                                    <div className="col-md-6">
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
                                    <div className="col-md-6">
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
                                    {/*{leaveDurationRadio === 'full-day' && (*/}
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
                                    <button className={"btn btn-dark btn-sm ms-auto"}>Submit</button>
                                    {serverErrorMessage && <p className="error-message">{serverErrorMessage}</p>}
                                    {successMessage && <p className="success-message">{successMessage}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default EditLeaveRequest;