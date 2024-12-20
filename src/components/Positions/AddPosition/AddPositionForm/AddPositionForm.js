import React from "react";
import {faCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
const AddPositionForm = ({register, errors}) => {
    return (
        <div>
            <Link to={"/positions"}>
                <FontAwesomeIcon icon={faCircleLeft} size={"2x"} style={{marginBottom: '10px', cursor: 'pointer'}}/>
            </Link>
            <p className="text-uppercase text-sm">Position Information</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={"title"}>Title<span className={"red-star"}>*</span></label>
                        <input {...register('title', { required: 'Title is required' })}
                               className={"form-control"}
                               placeholder={"Please type the title"}
                               id={"title"}
                        />
                        {errors.title && <span style={{ color: 'red', fontSize: '12px' }}>{errors.title.message}</span>}
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
            </div>
            <hr className="horizontal dark" />
        </div>
    );
};

export default AddPositionForm;