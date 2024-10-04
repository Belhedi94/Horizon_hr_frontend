import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const AddButton = ({link, buttonName}) => {
    return (
        <div className={"text-end"}>
            <Link to={link}>
                <button className={"btn btn-dark"}>
                    <FontAwesomeIcon icon={faPlus} size={"lg"} style={{marginRight: '5px'}}/>
                    {buttonName}
                </button>
            </Link>
        </div>
    );
};

export default AddButton;