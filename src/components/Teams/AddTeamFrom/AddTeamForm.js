import React from "react";
import {options} from "axios";

const AddTeamForm = ({register, errors, departments}) => {
    return (
        <div>
            <p className="text-uppercase text-sm">Team Information</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"name"}>Name<span className={"red-star"}>*</span></label>
                        <input {...register('name', { required: 'Name is required' })}
                               className={"form-control"}
                               placeholder={"Please type the name"}
                               id={"name"}
                        />
                        {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"description"}>Description<span className={"red-star"}>*</span></label>
                        <input {...register('description', { required: 'Description is required' })}
                               className={"form-control"}
                               placeholder={"Please type the description"}
                               id={"description"}
                        />
                        {errors.description && <span style={{ color: 'red', fontSize: '12px' }}>{errors.description.message}</span>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"department"}>Department<span className={"red-star"}>*</span></label>
                        <select
                            id="department"
                            className={`form-control ${errors.contractType ? 'is-invalid' : ''}`}
                            {...register('department', {
                                required: 'Department is required',
                                validate: (value) => value !== "" || 'Please select a department'
                            })}
                        >
                            {departments.map(department => (
                                <option value={department.Id}>{department.Name}</option>
                            ))}
                        </select>
                        {errors.department && <span style={{ color: 'red', fontSize: '12px' }}>{errors.department.message}</span>}
                    </div>
                </div>
            </div>
            <hr className="horizontal dark" />
        </div>
    );
};

export default AddTeamForm;