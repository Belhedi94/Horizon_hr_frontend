import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getPositionData, updatePosition} from "../../../api";
import SimpleForm from "../../Common/SimpleForm/SimpleForm";
import Layout from "../../Layout/Layout";


const EditPosition = () => {
    const {id} = useParams();
    const [position, setPosition] = useState({});
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const fetchPosition = async () => {
        try
        {
            const positionData = await getPositionData(id);
            setPosition(positionData);
        }
        catch(error)
        {
            console.log('Error fetching position data: ', error);
        }
    }

    useEffect( () => {
        fetchPosition();
    }, [id]);

    const {register, handleSubmit, formState: {errors}} = useForm({
        values: {
            title:  position.title,
            description: position.description,
        }
    });

    const onSubmit = async (positionData) => {
        try {
            await updatePosition(id, positionData);
            setServerErrorMessage('');
            setSuccessMessage("Position updated successfully.");
            setTimeout(() => navigate('/positions'), 2000);
        } catch (error) {
            setServerErrorMessage('Failed to update the position data');
        }
    }

    return (
        <Layout title={"Edit position"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <SimpleForm register={register} errors={errors}/>
                                <button className={"btn btn-dark btn-sm ms-auto"}>Save</button>
                                {serverErrorMessage && <p className="error-message">{serverErrorMessage}</p>}
                                {successMessage && <p className="success-message">{successMessage}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default EditPosition;