import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getPositionData, updatePosition} from "../../../api";
import AddPositionForm from "../AddPosition/AddPositionForm/AddPositionForm";
import Layout from "../../Layout/Layout";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


const EditPosition = () => {
    const {id} = useParams();
    const [position, setPosition] = useState({});
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
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
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            toast.success('Position updated successfully.');
            setTimeout(() => navigate('/positions'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error('Failed to update the position data');
        }
    }

    return (
        <Layout title={"Edit position"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <AddPositionForm register={register} errors={errors}/>
                                <button disabled={loading} className={"btn btn-dark btn-sm ms-auto"}>{saveButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default EditPosition;