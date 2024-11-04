import React from "react";

const JobOfferForm = () => {
    return (
        <div class={"row"}>
            <div className={"col-md-4"}>
                <label htmlFor="firstName">First name</label>
                <input className={"form-control"} type="text" />
            </div>
            <div className={"col-md-4"}>
                <label htmlFor="lastName">Last name</label>
                <input className={"form-control"} type="text" />
            </div>
            <div className="row">
                <div className={"col-md-6"}>
                    <label htmlFor="email">Email</label>
                    <input className={"form-control"} type="text" />
                </div>
            </div>
            <div className="row">
                <div className={"col-md-4"}>
                    <label htmlFor="mobile_phone">Mobile phone</label>
                    <input className={"form-control"} type="text" />
                </div>
            </div>
            <div className="row">
                <div className={"col-md-3"}>
                    <label htmlFor="city">City</label>
                    <input className={"form-control"} type="text" />
                </div>
                <div className={"col-md-6"}>
                    <label htmlFor="address">Address</label>
                    <input className={"form-control"} type="text" />
                </div>
            </div>
            <hr className={"mt-3 horizontal dark"}/>
            <div className="row">
                <div className="col-md-5">
                    <label htmlFor="">CV</label>
                    <input className={"form-control"} type="file"/>
                </div>
            </div>
            <div className={"row mt-3"}>
                <label htmlFor="">Availability date</label>
                <div className="col-md-4">
                    <input type="date" className={"form-control"}/>
                </div>
            </div>
            <hr className={"mt-3 horizontal dark"}/>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">Portfolio</label>
                    <input type="text" className={"form-control"}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">Linkedin profile</label>
                    <input type="text" className={"form-control"}/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <button className={"btn btn-dark"}>
                        Submit my application
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobOfferForm;