import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "../Layout/Layout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const LeaveRequestForm = () => {
    const [leaveDuration, setLeaveDurationOption] = useState('full-day');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleLeaveDuration = (e) => {
        const value = e.target.value;
        setLeaveDurationOption(value);
    }

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const {register, unregister, handleSubmit, control, formState: {errors}} = useForm();

    return (
        <div>
            <Layout title={"Submit leave request"}>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <p className="text-uppercase text-sm">Leave request details</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"leave_type"}>Leave type<span className={"red-star"}>*</span></label>
                                                <select
                                                    id="leave_type"
                                                    className={`form-control ${errors.leaveType ? 'is-invalid' : ''}`}
                                                    {...register('leaveType', {
                                                        required: 'Leave type is required',
                                                        validate: (value) => value !== "" || 'Please select a leave type'
                                                    })}
                                                >
                                                    <option value="">Select a leave type</option>
                                                    <option value="Annual">Annual leave</option>
                                                    <option value="Sick">Sick leave</option>
                                                </select>
                                                {errors.leaveType && <span style={{ color: 'red', fontSize: '12px' }}>{errors.leaveType.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"reason"}>Reason<span className={"red-star"}>*</span></label>
                                                <textarea {...register('reason', { required: 'Reason is required' })}
                                                       className={"form-control"}
                                                       id={"reason"}
                                                />
                                                {errors.reason && <span style={{ color: 'red', fontSize: '12px' }}>{errors.reason.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="leave-duration-radio-buttons d-flex justify-content-start">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="leave_duration"
                                                        id="full-day"
                                                        checked={leaveDuration === 'full-day'}
                                                        value={"full-day"}
                                                        onChange={handleLeaveDuration}
                                                    />
                                                    <label className="form-check-label" htmlFor="full-day">Full day</label>
                                                </div>
                                                <div className="form-check" style={{marginLeft: '25px'}}>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="leave_duration"
                                                        id="hourly"
                                                        value="hourly"
                                                        checked={leaveDuration === 'hourly'}
                                                        onChange={handleLeaveDuration}
                                                    />
                                                    <label className="form-check-label" htmlFor="hourly">Hourly</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        {leaveDuration === 'full-day' && (
                                            <DatePicker
                                                selected={startDate}
                                                startDate={startDate}
                                                endDate={endDate}
                                                onChange={handleDateChange}
                                                selectsRange
                                                inline
                                                minDate={new Date()}
                                                filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                                            />
                                        )}

                                        {leaveDuration === 'hourly' && (
                                            <div>
                                                {/* You can add your hourly picker component here */}
                                            </div>
                                        )}
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

export default LeaveRequestForm;