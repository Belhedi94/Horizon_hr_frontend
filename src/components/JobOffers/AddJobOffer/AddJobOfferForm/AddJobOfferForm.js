import React from "react";
import {faCircleLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddJobOfferForm = ({register, errors, description, setDescription, setValue}) => {
    return (
        <div className={"row"}>
            <div className="col-md-6">
                <Link to={"/jobs/offers"}>
                    <FontAwesomeIcon icon={faCircleLeft} size={"2x"} style={{marginBottom: '10px', cursor: 'pointer'}}/>
                </Link>
                <p className="text-uppercase text-sm">Job offer details</p>
                <div className="row">
                    <div className="col-md-12">
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
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor={"location"}>Location<span className={"red-star"}>*</span></label>
                            <select
                                id="location"
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
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor={"employmentType"}>Type<span className={"red-star"}>*</span></label>
                            <select
                                id="employmentType"
                                className={`form-control ${errors.employmentType ? 'is-invalid' : ''}`}
                                {...register('employmentType', {
                                    required: 'Job type is required',
                                    validate: (value) => value !== "" || 'Please select a job type'
                                })}
                            >
                                <option value="">Select a type</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                            </select>
                            {errors.employmentType && <span style={{ color: 'red', fontSize: '12px' }}>{errors.employmentType.message}</span>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={"col-md-12"}>
                        <div className="form-group">
                            <label htmlFor={"description"}>Description<span className={"red-star"}>*</span></label>
                            <ReactQuill
                                value={description}
                                onChange={(content) => {
                                    setDescription(content);
                                    setValue('description', content);
                                }}
                                style={{height: '300px'}}
                            />
                            {errors.description && <span style={{ color: 'red', fontSize: '12px' }}>{errors.description.message}</span>}
                        </div>
                    </div>
                </div>
                <hr className="horizontal dark" />
            </div>
            <div className="col-md-6">
                <h4>Preview:</h4>
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
};

export default AddJobOfferForm;