import React from "react";
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import JobOfferForm from "./JobOfferForm/JobOfferForm";

const JobOfferDetails = () => {
    return (
        <div className={"container"}>
            <div className={"d-flex align-items-center my-4"}>
                <div>
                    <img className={"horizon_image"} src="/images/horizon_logo.jpeg" alt="horizon_logo"/>
                </div>
                <h4 className={"title"}>
                    <b>Horizon Ed.</b>
                </h4>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className={"job-header"}>
                                <Link to={"/careers"}>
                                    <p>
                                        <FontAwesomeIcon
                                            className={"chevron"}
                                            icon={faChevronLeft}
                                            size={"sm"}
                                        />
                                        <span className={"font_size"}>Job Openings</span>
                                    </p>
                                </Link>
                                <h4 className={"job-title"}>
                                    .Net Developer
                                </h4>
                                <p>
                                    Sousse, Tunisia (Hybride)
                                </p>
                            </div>
                            <hr className={"horizontal dark"}/>
                            {/*<JobOfferForm />*/}
                            <div className={"job-body"}>
                                We are looking for <b>a .Net developer to one of our Altenar Data Feed teams.</b><br />
                                <b>About the Project:</b><br />



                                <b>Multifeed</b><br /> (Altenar Data Feed) is a product that allows for near real-time calculation of the probabilities of events occurring in sports matches (bookmaker data).<br />



                                <b>About the team:</b> We are creating a new team that will be engaged in R&D to develop new directions for the project's growth. The goal of this team is to conduct initial prototyping of new product ideas, build MVPs, and, if necessary, deploy new product subsystems into operation.<br />
                                <b>Our main stack includes:</b>
                                <ul>
                                    <li>.NET 8 and C# 12</li>
                                    <li>PostgreSQL</li>
                                    <li>Apache Kafka</li>
                                    <li>Kubernetes</li>
                                </ul>


                                <b>You will find it interesting to work with us if you:</b>
                                <ul>
                                    <li>enjoy using modern technologies (development is done on C# 12 and .Net 8)</li>
                                    <li>are excited by terms such as high availability, reliability, scalability, durability, and maintainability</li>
                                    <li>enjoy using modern technologies (development is done on C# 12 and .Net 8)</li>
                                    <li>enjoy using modern technologies (development is done on C# 12 and .Net 8)</li>
                                    <li>are interested in exploring new technologies and solving challenging problems</li>
                                    <li>are interested in exploring new technologies and solving challenging problems</li>
                                </ul>


                                <b>Must-have skills:</b>
                                <ul>
                                    <li>knowledge of C# and modern versions of the .Net platform, ability to work with asynchronous code</li>
                                    <li>experience with message brokers</li>
                                    <li>ability to use version control systems like git, experience with CI/CD pipelines</li>
                                    <li>basic knowledge of frontend development frameworks for the ability to visualize results during the early prototyping stage</li>
                                </ul>


                                <b>Nice-to-have skills:</b>
                                <ul>
                                    <li>experience with Docker/Kubernetes</li>
                                    <li>experience with Kafka</li>
                                    <li>experience with PostgreSQL, Redis</li>
                                    <li>understanding of domain-driven design (DDD) and its core principles TDD</li>
                                    <li>experience with the Atlassian stack (Jira, Confluence)</li>
                                </ul>


                                <b>Benefits</b>

                                <ul>
                                    <li>Stable and flexible working environment</li>
                                    <li>Career growth opportunity</li>
                                    <li>Training and professional development events</li>
                                    <li>Health insurance for employees and close family members</li>
                                    <li>Teamwork and accountability</li>
                                    <li>Sense of community and defined company culture</li>
                                    <li>International work environment</li>
                                    <li>Diverse workplace</li>
                                    <li>Gym reimbursement after successfully passing probationary period</li>
                                    <li>Modern Pendergardens office in the centre of Sousse (possible to work in a hybrid mode)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <button className={"btn btn-info apply-button"}>
                                Apply for this position
                            </button>
                            <hr className={"horizontal dark"}/>
                            <p>
                                Link to this post
                            </p>
                            <input type="text" value ={"http://localhost:3000/careers/1"} className={"form-control post-link"}/>
                        </div>
                    </div>
                    <div className={"m-4"}>
                        <b>Location</b>
                        <div>Sousse, Tunisia (Hybride)</div>
                        <hr className={"horizontal dark"}/>
                        <b>Type</b>
                        <div>Full-Time</div>
                        <hr className={"horizontal dark"}/>
                        <b>Minimum Experience</b>
                        <div>Junior</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobOfferDetails;