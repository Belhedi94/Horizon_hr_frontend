import React from "react";

const EditEmployeeInformation = ({register, errors}) => {
    return (
        <div>
            <p className="text-uppercase text-sm">Employee Information</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"first_name"}>First name<span className={"red-star"}>*</span></label>
                        <input {...register('firstName', { required: 'First name is required' })}
                               className={"form-control"}
                               placeholder={"Please type the first name"}
                               id={"first_name"}
                        />
                        {errors.firstName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.firstName.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"last_name"}>Last name<span className={"red-star"}>*</span></label>
                        <input {...register('lastName', { required: 'Last name is required' })}
                               className={"form-control"}
                               placeholder={"Please type the last name"}
                               id={"last_name"}
                        />
                        {errors.lastName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.lastName.message}</span>}
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
                        <input type={"password"}
                               {...register('password', {
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
        </div>
    );
};

export default EditEmployeeInformation;