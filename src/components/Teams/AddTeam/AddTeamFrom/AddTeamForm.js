import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const AddTeamForm = ({register, errors, departments}) => {
    return (
        <div>
            <Link to={"/teams"}>
                <FontAwesomeIcon icon={faCircleLeft} size={"2x"} style={{marginBottom: '10px', cursor: 'pointer'}}/>
            </Link>
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
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"department"}>Department<span className={"red-star"}>*</span></label>
                        <select
                            id="departmentId"
                            className={`form-control ${errors.departmentId ? 'is-invalid' : ''}`}
                            {...register('departmentId', {
                                required: 'Department is required',
                                validate: (value) => value !== "" || 'Please select a department'
                            })}
                        >
                            <option value="">Select a department</option>
                            {departments.map(department => (
                                <option key={department.id} value={department.id}>{department.name}</option>
                            ))}
                        </select>
                        {errors.departmentId && <span style={{ color: 'red', fontSize: '12px' }}>{errors.departmentId.message}</span>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"description"}>Description<span className={"red-star"}>*</span></label>
                        <textarea
                            {...register('description', { required: 'Description is required' })}
                            className={"form-control"}
                            placeholder={"Please type the description"}
                            id={"description"}
                            rows={7}
                        />
                        {errors.description && <span style={{ color: 'red', fontSize: '12px' }}>{errors.description.message}</span>}
                    </div>
                </div>
            </div>
            <hr className="horizontal dark" />
        </div>
    );
};

export default AddTeamForm;