import React from "react";

const ContactInformation = ({register, errors}) => {
    return (
        <div>
            <p className="text-uppercase text-sm">Contact Information</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"personal_email"}>Personal email<span className={"red-star"}>*</span></label>
                        <input type={"email"} {...register('personalEmail', {
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
                        {errors.personalEmail && <span style={{ color: 'red', fontSize: '12px' }}>{errors.personalEmail.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"professional_email"}>Professional email<span className={"red-star"}>*</span></label>
                        <input type={"email"} {...register('professionalEmail', {
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
                        {errors.professionalEmail && <span style={{ color: 'red', fontSize: '12px' }}>{errors.professionalEmail.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"personal_phone"}>Mobile phone<span className={"red-star"}>*</span></label>
                        <input {...register('personalPhone', {
                            required: 'Mobile phone is required',
                            pattern: {
                                value: /^[0-9]{8}$/,
                                message: 'Phone number must be exactly 8 digits and contain only numbers'
                            }
                        })}
                               className={"form-control"}
                               placeholder={"Please type the personal phone"}
                               id={"personal_phone"}
                        />
                        {errors.personalPhone && <span style={{ color: 'red', fontSize: '12px' }}>{errors.personalPhone.message}</span>}
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
        </div>
    );
};

export default ContactInformation;