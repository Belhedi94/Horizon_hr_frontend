import React from "react";

const EditEmploymentInformation = ({register, errors, handleCnssField, cnssFieldIsHidden, teams, positions}) => {
    return(
        <div>
            <p className="text-uppercase text-sm">Employment information</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"contract_type"}>Contract type<span className={"red-star"}>*</span></label>
                        <select
                            id="contract_type"
                            className={`form-control ${errors.contractType ? 'is-invalid' : ''}`}
                            {...register('employmentDetails.contractType', {
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
                        {errors.employmentDetails?.contractType && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentDetails.contractType.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"employment_type"}>Employment type<span className={"red-star"}>*</span></label>
                        <select
                            id="employment_type"
                            className={`form-control ${errors.employment_type ? 'is-invalid' : ''}`}
                            {...register('employmentDetails.employmentType', {
                                required: 'Employment type is required',
                                validate: (value) => value !== "" || 'Please select the employment type'
                            })}
                        >
                            <option value="">Select a type</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                        {errors.employmentDetails?.employmentType && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentDetails.employmentType.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"joining_date"}>Joining date<span className={"red-star"}>*</span></label>
                        <input type={"date"} {...register('employmentDetails.joiningDate', {
                            required: 'Joining date is required'
                        })}
                               className={"form-control"}
                               placeholder={"Please select joining date"}
                               id={"joining_date"}
                        />
                        {errors.employmentDetails?.joiningDate && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentDetails.joiningDate.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"probation_period"}>Probation period<span className={"red-star"}>*</span></label>
                        <input {...register('employmentDetails.probationPeriod', {
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
                        {errors.employmentDetails?.probationPeriod && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentDetails.probationPeriod.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"salary"}>Salary (Net)<span className={"red-star"}>*</span></label>
                        <input {...register('employmentDetails.salary', {
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
                        {errors.employmentDetails?.salary && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentDetails.salary.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"position"}>Position<span className={"red-star"}>*</span></label>
                        <select
                            id="position"
                            className={`form-control ${errors.employment_type ? 'is-invalid' : ''}`}
                            {...register('employmentDetails.positionId', {
                                required: 'Position type is required',
                                validate: (value) => value !== "" || 'Please select a position'
                            })}
                        >
                            <option value="">Select a position</option>
                            {positions.map((position, index) => (
                                <option key={`${position}-key-${index}`} value={position.id}>{position.title}</option>
                            ))}
                        </select>
                        {errors.employmentDetails?.positionId && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentDetails.positionId.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"team"}>Team<span className={"red-star"}>*</span></label>
                        <select
                            id="team"
                            className={`form-control ${errors.employment_type ? 'is-invalid' : ''}`}
                            {...register('employmentDetails.teamId', {
                                required: 'Team is required',
                                validate: (value) => value !== "" || 'Please select a team'
                            })}
                        >
                            <option value="">Select a team</option>
                            {teams.map(team => (
                                <option key={team.id} value={team.id}>{team.name}</option>
                            ))}
                        </select>
                        {errors.employmentDetails?.teamId && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentDetails.teamId.message}</span>}
                    </div>
                </div>
                {!cnssFieldIsHidden && (
                    <div className="col-md-6" style={{ display: cnssFieldIsHidden }}>
                        <div className="form-group">
                            <label htmlFor="cnss">CNSS registration number<span className="red-star">*</span></label>
                            <input
                                {...register('cnssRegistrationNumber', {
                                    required: 'CNSS is required'
                                })}
                                className="form-control"
                                id="cnss"
                            />
                            {errors.cnssRegistrationNumber && <span style={{ color: 'red', fontSize: '12px' }}>{errors.cnssRegistrationNumber.message}</span>}
                        </div>
                    </div>
                )}
            </div>
            <hr className="horizontal dark" />
        </div>
    );
};

export default EditEmploymentInformation;