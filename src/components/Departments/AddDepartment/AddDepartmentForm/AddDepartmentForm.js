import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft} from "@fortawesome/free-solid-svg-icons";

const AddDepartmentForm = ({register, errors}) => {
    return (
        <div>
            <Link to={"/departments"}>
                <FontAwesomeIcon icon={faCircleLeft} size={"2x"} style={{marginBottom: '10px', cursor: 'pointer'}}/>
            </Link>
            <p className="text-uppercase text-sm">Department Information</p>
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
            <hr className="horizontal dark" />
        </div>
    );
};

export default AddDepartmentForm;