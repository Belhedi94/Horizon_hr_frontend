import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import Layout from "../../../Layout/Layout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import {createLeaveRequest} from "../../../../api";
import {useNavigate} from "react-router-dom";

const LeaveRequestForm = () => {
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    // const [leaveDurationRadio, setLeaveDurationOptionRadio] = useState('full-day');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    // const [startTime, setStartTime] = useState(null);
    // const [endTime, setEndTime] = useState(null);
    const [isHalfDay, setIsHalfDay] = useState(false);
    const {register, unregister, handleSubmit, control, formState: {errors}, getValues} = useForm();
    const navigate = useNavigate();
    const handleSwitcherButton = (e) => {
        setIsHalfDay(e);
    };
    const handleLeaveDurationRadio = (e) => {
        const value = e.target.value;
        // setLeaveDurationOptionRadio(value);
        if (value === 'hourly')
            unregister('leaveDuration');
        else {
            unregister('startTime');
            unregister('endTime');
        }
    }

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
        <div>
            <Layout title={"Submit leave request"}>
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
                                                    {/*<div className="form-check">*/}
                                                    {/*    <input*/}
                                                    {/*        className="form-check-input"*/}
                                                    {/*        type="radio"*/}
                                                    {/*        name="isHalfDay"*/}
                                                    {/*        id="isHalfDay"*/}
                                                    {/*        checked={leaveDurationRadio === 'isHalfDay'}*/}
                                                    {/*        value={"isHalfDay"}*/}
                                                    {/*        onChange={handleLeaveDurationRadio}*/}
                                                    {/*    />*/}
                                                    {/*    <label className="form-check-label" htmlFor="isHalfDay">Half day</label>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="form-check" style={{marginLeft: '25px'}}>*/}
                                                    {/*    <input*/}
                                                    {/*        className="form-check-input"*/}
                                                    {/*        type="radio"*/}
                                                    {/*        name="isHalfDay"*/}
                                                    {/*        id="hourly"*/}
                                                    {/*        value="hourly"*/}
                                                    {/*        checked={leaveDurationRadio === 'hourly'}*/}
                                                    {/*        onChange={handleLeaveDurationRadio}*/}
                                                    {/*    />*/}
                                                    {/*    <label className="form-check-label" htmlFor="hourly">Hourly</label>*/}
                                                    {/*</div>*/}
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
                                        {/*)}*/}

                                        {/*{leaveDurationRadio === 'hourly' && (*/}
                                        {/*    <div className={"col-md-6"}>*/}
                                        {/*        <div className="form-group">*/}
                                        {/*            <label htmlFor="startTime">Start Time</label>*/}
                                        {/*            <input*/}
                                        {/*                type="time"*/}
                                        {/*                className={"form-control"}*/}
                                        {/*                name={"startTime"}*/}
                                        {/*                onChange={(e) => setStartTime(e.target.value)}*/}
                                        {/*                {...register('startTime', {*/}
                                        {/*                    required: 'Start time is required',*/}
                                        {/*                    validate: (value) => {*/}
                                        {/*                        const endTime = getValues("endTime");*/}
                                        {/*                        return endTime ? value <= endTime || 'Start time must be earlier than end time' : true;*/}
                                        {/*                    }*/}
                                        {/*                })}*/}
                                        {/*            />*/}
                                        {/*            {errors.startTime && <span style={{ color: 'red', fontSize: '12px' }}>{errors.startTime.message}</span>}*/}
                                        {/*        </div>*/}
                                        {/*        <div className="form-group">*/}
                                        {/*            <label htmlFor="endTime">End Time</label>*/}
                                        {/*            <input*/}
                                        {/*                type="time"*/}
                                        {/*                className={"form-control"}*/}
                                        {/*                name={"endTime"}*/}
                                        {/*                onChange={(e) => setEndTime(e.target.value)}*/}
                                        {/*                {...register('endTime', {*/}
                                        {/*                    required: 'End time is required',*/}
                                        {/*                })}*/}
                                        {/*            />*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}
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
        </div>
    );
};

export default LeaveRequestForm;