import React, { useState } from "react";
import { faUsers, faBuilding, faUserGroup, faBriefcase, faPersonWalkingLuggage, faFileCirclePlus, faUserTie, faHouse } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import {useForm} from "react-hook-form";
import "./add_employee.css";

const AddEmployee = () => {
    const [cnssFieldIsHidden, setCnssFieldIsHidden] = useState('none');
    const handleCnssField = (e) => {
        const contractType = e.target.value;
        if (contractType === 'CDI' || contractType === 'CDD')
            setCnssFieldIsHidden('block');
        else {
            setCnssFieldIsHidden('none');
            unregister('cnss');
        }
    };
    const {register, unregister, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Sidebar
                employeesIcon={faUsers}
                departmentIcon={faBuilding}
                teamsIcon={faUserGroup}
                positionsIcon={faBriefcase}
                leaveRequestsIcon={faPersonWalkingLuggage}
                documentRequest={faFileCirclePlus}
                jobOffersIcon={faUserTie}
                dashboardIcon={faHouse}

            />
            <div className={"main-content position-relative max-height-vh-100 h-500 border-radius-lg"}>
            <Header title={"Employees management"} />
            <div className={"container-fluid py-4"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <p className="text-uppercase text-sm">Employee Information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"first_name"}>First name<span className={"red-star"}>*</span></label>
                                                <input {...register('first_name', { required: 'First name is required' })}
                                                       className={"form-control"}
                                                       placeholder={"Please type the first name"}
                                                       id={"first_name"}
                                                />
                                                {errors.first_name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.first_name.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"last_name"}>Last name<span className={"red-star"}>*</span></label>
                                                <input {...register('last_name', { required: 'Last name is required' })}
                                                       className={"form-control"}
                                                       placeholder={"Please type the last name"}
                                                       id={"last_name"}
                                                />
                                                {errors.last_name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.last_name.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"username"}>Username<span className={"red-star"}>*</span></label>
                                                <input {...register('username', { required: 'Username is required' })}
                                                       className={"form-control"}
                                                       placeholder={"Please type a username"}
                                                       id={"username"}
                                                />
                                                {errors.username && <span style={{ color: 'red', fontSize: '12px' }}>{errors.username.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"password"}>Password<span className={"red-star"}>*</span></label>
                                                <input {...register('password', {
                                                    required: 'Password is required',
                                                    minLength: { value: 8, message: 'Password must be at least 8 characters'},
                                                    pattern: {
                                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                        message: 'Password must include uppercase, lowercase, number, and special character',
                                                    },
                                                })}
                                                       className={"form-control"}
                                                       placeholder={"Please type a password"}
                                                       id={"password"}
                                                />
                                                {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="horizontal dark" />
                                        <p className="text-uppercase text-sm">Contact Information</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor={"personal_email"}>Personal email<span className={"red-star"}>*</span></label>
                                                    <input type={"email"} {...register('personal_email', {
                                                        required: 'Personal email is required',
                                                        pattern: {
                                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                            message: 'Invalid email address'
                                                        }
                                                    })}
                                                           className={"form-control"}
                                                           placeholder={"Please type the personal email"}
                                                           id={"personal_email"}
                                                    />
                                                    {errors.personal_email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.personal_email.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor={"professional_email"}>Professional email<span className={"red-star"}>*</span></label>
                                                    <input type={"email"} {...register('professional_email', {
                                                        required: 'Professional email is required',
                                                        pattern: {
                                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                            message: 'Invalid email address'
                                                        }
                                                    })}
                                                           className={"form-control"}
                                                           placeholder={"Please type the professional email"}
                                                           id={"professional_email"}
                                                    />
                                                    {errors.professional_email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.professional_email.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor={"mobile_phone"}>Mobile phone<span className={"red-star"}>*</span></label>
                                                    <input {...register('mobile_phone', {
                                                        required: 'Mobile phone is required',
                                                        pattern: {
                                                            value: /^[0-9]{8}$/,
                                                            message: 'Phone number must be exactly 8 digits and contain only numbers'
                                                        }
                                                    })}
                                                           className={"form-control"}
                                                           placeholder={"Please type the mobile phone"}
                                                           id={"mobile_phone"}
                                                    />
                                                    {errors.mobile_phone && <span style={{ color: 'red', fontSize: '12px' }}>{errors.mobile_phone.message}</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor={"address"}>Address<span className={"red-star"}>*</span></label>
                                                    <input {...register('address', {
                                                        required: 'Address is required',
                                                    })}
                                                           className={"form-control"}
                                                           placeholder={"Please type the address"}
                                                           id={"address"}
                                                    />
                                                    {errors.address && <span style={{ color: 'red', fontSize: '12px' }}>{errors.address.message}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="horizontal dark" />
                                            <p className="text-uppercase text-sm">Additional information</p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor={"cin"}>Cin<span className={"red-star"}>*</span></label>
                                                        <input {...register('cin', {
                                                            required: 'Cin is required',
                                                            pattern: {
                                                                value: /^[0-9]{8}$/,
                                                                message: 'Phone number must be exactly 8 digits and contain only numbers'
                                                            }
                                                        })}
                                                               className={"form-control"}
                                                               placeholder={"Please type the cin"}
                                                               id={"cin"}
                                                        />
                                                        {errors.cin && <span style={{ color: 'red', fontSize: '12px' }}>{errors.cin.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor={"date_of_birth"}>Date of birth<span className={"red-star"}>*</span></label>
                                                        <input type={"date"}{...register('date_of_birth', {
                                                            required: 'Date of birth is required'
                                                        })}
                                                               className={"form-control"}
                                                               placeholder={"Please type the date of birth"}
                                                               id={"date_of_birth"}
                                                        />
                                                        {errors.date_of_birth && <span style={{ color: 'red', fontSize: '12px' }}>{errors.date_of_birth.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor={"gender"}>Gender<span className={"red-star"}>*</span></label>
                                                        <select
                                                            id="gender"
                                                            className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                                            {...register('gender', {
                                                                required: 'Gender is required',
                                                                validate: (value) => value !== "" || 'Please select a gender'
                                                            })}
                                                        >
                                                            <option value="">Select gender</option>
                                                            <option value="M">Male</option>
                                                            <option value="F">Female</option>
                                                        </select>
                                                        {errors.gender && <span style={{ color: 'red', fontSize: '12px' }}>{errors.gender.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor={"marital_status"}>Marital status<span className={"red-star"}>*</span></label>
                                                        <select
                                                            id="marital_status"
                                                            className={`form-control ${errors.marital_status ? 'is-invalid' : ''}`}
                                                            {...register('marital_status', {
                                                                required: 'Marital status is required',
                                                                validate: (value) => value !== "" || 'Please select a marital status'
                                                            })}
                                                        >
                                                            <option value="">Select marital status</option>
                                                            <option value="S">Single</option>
                                                            <option value="M">Married</option>
                                                        </select>
                                                        {errors.marital_status && <span style={{ color: 'red', fontSize: '12px' }}>{errors.marital_status.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="profile_image" className="form-control-label">Profile image</label>
                                                        <input id={"profile_image"} className="form-control" type={"file"} />
                                                    </div>
                                                </div>
                                            </div>
                                    <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Employment information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"contract_type"}>Contract type<span className={"red-star"}>*</span></label>
                                                <select
                                                    id="contract_type"
                                                    className={`form-control ${errors.contract_type ? 'is-invalid' : ''}`}
                                                    {...register('contract_type', {
                                                        required: 'Contract type is required',
                                                        validate: (value) => value !== "" || 'Please select a contract type'
                                                    })}
                                                    onChange={handleCnssField}
                                                >
                                                    <option value="">Select a contract type</option>
                                                    <option value="CDD">CDD</option>
                                                    <option value="CDI">CDI</option>
                                                    <option value="CIVP">CIVP</option>
                                                    <option value="INTERN">INTERN</option>
                                                    <option value="KARAMA">KARAMA</option>
                                                </select>
                                                {errors.contract_type && <span style={{ color: 'red', fontSize: '12px' }}>{errors.contract_type.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"employment_type"}>Employment type<span className={"red-star"}>*</span></label>
                                                <select
                                                    id="employment_type"
                                                    className={`form-control ${errors.employment_type ? 'is-invalid' : ''}`}
                                                    {...register('employment_type', {
                                                        required: 'Employment type is required',
                                                        validate: (value) => value !== "" || 'Please select the employment type'
                                                    })}
                                                >
                                                    <option value="">Select a type</option>
                                                    <option value="Full-Time">Full-Time</option>
                                                    <option value="Part-Time">Part-Time</option>
                                                </select>
                                                {errors.employment_type && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employment_type.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"joining_date"}>Joining date<span className={"red-star"}>*</span></label>
                                                <input type={"date"} {...register('joining_date', {
                                                    required: 'Joining date is required'
                                                })}
                                                       className={"form-control"}
                                                       placeholder={"Please select joining date"}
                                                       id={"joining_date"}
                                                />
                                                {errors.joining_date && <span style={{ color: 'red', fontSize: '12px' }}>{errors.joining_date.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"probation_period"}>Probation period<span className={"red-star"}>*</span></label>
                                                <input {...register('probation_period', {
                                                    required: 'Probation period is required',
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: 'Phone number must only contain numbers',
                                                    },
                                                })}
                                                       className={"form-control"}
                                                       placeholder={"Please type the probation period in days"}
                                                       id={"probation_period"}
                                                />
                                                {errors.probation_period && <span style={{ color: 'red', fontSize: '12px' }}>{errors.probation_period.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"salary"}>Salary (Net)<span className={"red-star"}>*</span></label>
                                                <input {...register('salary', {
                                                    required: 'Salary is required',
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: 'Salary must only contain numbers',
                                                    },
                                                })}
                                                       className={"form-control"}
                                                       placeholder={"Please type the salary"}
                                                       id={"salary"}
                                                />
                                                {errors.salary && <span style={{ color: 'red', fontSize: '12px' }}>{errors.salary.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"position"}>Position<span className={"red-star"}>*</span></label>
                                                <select
                                                    id="position"
                                                    className={`form-control ${errors.employment_type ? 'is-invalid' : ''}`}
                                                    {...register('position', {
                                                        required: 'Position type is required',
                                                        validate: (value) => value !== "" || 'Please select a position'
                                                    })}
                                                >
                                                    <option value="">Select a position</option>
                                                    <option value="Developer">Developer</option>
                                                    <option value="Designer">Designer</option>
                                                </select>
                                                {errors.position && <span style={{ color: 'red', fontSize: '12px' }}>{errors.position.message}</span>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor={"team"}>Team<span className={"red-star"}>*</span></label>
                                                <select
                                                    id="team"
                                                    className={`form-control ${errors.employment_type ? 'is-invalid' : ''}`}
                                                    {...register('team', {
                                                        required: 'Team is required',
                                                        validate: (value) => value !== "" || 'Please select a team'
                                                    })}
                                                >
                                                    <option value="">Select a team</option>
                                                    <option value="IT">IT</option>
                                                    <option value="HR">HR</option>
                                                </select>
                                                {errors.team && <span style={{ color: 'red', fontSize: '12px' }}>{errors.team.message}</span>}
                                            </div>
                                        </div>
                                        {cnssFieldIsHidden === 'block' && (
                                            <div className="col-md-6" style={{ display: cnssFieldIsHidden }}>
                                                <div className="form-group">
                                                    <label htmlFor="cnss">CNSS registration number<span className="red-star">*</span></label>
                                                    <input
                                                        {...register('cnss', {
                                                            required: 'CNSS is required'
                                                        })}
                                                        className="form-control"
                                                        placeholder="Please type CNSS number"
                                                        id="cnss"
                                                    />
                                                    {errors.cnss && <span style={{ color: 'red', fontSize: '12px' }}>{errors.cnss.message}</span>}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Bank account information</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="holder_name" className="form-control-label">Holder name</label>
                                                <input id={"holder_name"} className={"form-control"} type="text" placeholder={"Please type the holder name"}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="bank_name" className="form-control-label">Bank name</label>
                                                <input id={"bank_name"} className={"form-control"} type="text" placeholder={"Please type the bank name"}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="account_number" className="form-control-label">Account number</label>
                                                <input id={"account_number"} className={"form-control"} type="number" placeholder={"Please type the account number"}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="rib" className="form-control-label">RIB</label>
                                                <input id={"rib"} className={"form-control"} type="number" placeholder={"Please type the RIB"}/>
                                            </div>
                                        </div>
                                    </div>
                                        <button className={"btn btn-dark btn-sm ms-auto"}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            </div>
        </div>
    );
};

export default AddEmployee;