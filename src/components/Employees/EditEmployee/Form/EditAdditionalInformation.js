import React from "react";

const EditAdditionalInformation = ({register, errors}) => {
    return(
        <div>
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
                               id={"cin"}
                        />
                        {errors.cin && <span style={{ color: 'red', fontSize: '12px' }}>{errors.cin.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"date_of_birth"}>Date of birth<span className={"red-star"}>*</span></label>
                        <input type={"date"}{...register('dateOfBirth', {
                            required: 'Date of birth is required'
                        })}
                               className={"form-control"}
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
                            {...register('maritalStatus', {
                                required: 'Marital status is required',
                                validate: (value) => value !== "" || 'Please select a marital status'
                            })}
                        >
                            <option value="">Select marital status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                        </select>
                        {errors.marital_status && <span style={{ color: 'red', fontSize: '12px' }}>{errors.marital_status.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"profile_image"}>Profile image</label>
                        <input {...register('profileImage')}
                               className={"form-control"}
                               id={"profile_image"}
                               type={"file"}
                        />
                    </div>
                </div>
            </div>
            <hr className="horizontal dark" />
        </div>
    );
};

export default EditAdditionalInformation;