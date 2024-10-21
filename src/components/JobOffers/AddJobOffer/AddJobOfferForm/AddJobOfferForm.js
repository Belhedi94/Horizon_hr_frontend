import React from "react";
import {faCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


const AddJobOfferForm = ({register, errors, description, setDescription, setValue}) => {
    return (
        <div>
            <Link to={"/jobs/offers"}>
                <FontAwesomeIcon icon={faCircleLeft} size={"2x"} style={{marginBottom: '10px', cursor: 'pointer'}}/>
            </Link>
            <p className="text-uppercase text-sm">Job offer details</p>
            <div className="row">
                <div className="col-md-8">
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
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="form-group">
                        <label htmlFor={"location"}>Location<span className={"red-star"}>*</span></label>
                        <select
                            id="team"
                            className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                            {...register('location', {
                                required: 'Location is required',
                                validate: (value) => value !== "" || 'Please select a location'
                            })}
                        >
                            <option value="">Select a location</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="On site">On site</option>
                            <option value="Remote">Remote</option>
                        </select>
                        {errors.location && <span style={{ color: 'red', fontSize: '12px' }}>{errors.location.message}</span>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={"col-md-8"}>
                    <div className="form-group">
                        <label htmlFor={"description"}>Description<span className={"red-star"}>*</span></label>

                    </div>
                </div>
                {errors.description && <span style={{ color: 'red', fontSize: '12px' }}>{errors.description.message}</span>}
            </div>
            <hr className="horizontal dark" />
        </div>
    );
};

export default AddJobOfferForm;