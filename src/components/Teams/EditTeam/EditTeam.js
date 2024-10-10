import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getAllDepartments, getTeamData, updatePosition, updateTeam} from "../../../api";
import Layout from "../../Layout/Layout";
import AddTeamForm from "../AddTeam/AddTeamFrom/AddTeamForm";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const EditTeam = () => {
    const {id} = useParams();
    const [team, setTeam] = useState({});
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [saveButton, setSaveButton] = useState('Save');
    const navigate = useNavigate();

    const fetchTeam = async () => {
        try
        {
            const data = await getTeamData(id);
            setTeam(data);
        }
        catch(error)
        {
            console.log('Error fetching team data: ', error);
        }
    }

    const fetchDepartments = async () => {
        try
        {
            const pageNumber = 1;
            const pageSize = 10;
            const filter = '';

            const data = await getAllDepartments(pageNumber, pageSize, filter, false);
            setDepartments(data.items);
        }
        catch(error)
        {
            console.log('Error fetching team data: ', error);
        }
    }

    useEffect( () => {
        fetchTeam();
        fetchDepartments();
    }, [id]);

    const {register, handleSubmit, formState: {errors}} = useForm({
        values: {
            name:  team.name,
            description: team.description,
            departmentId: team.department?.id
        }
    });

    const onSubmit = async (positionData) => {
        try {
            await updateTeam(id, positionData);
            setLoading(true);
            setSaveButton(
                <>
                    <FontAwesomeIcon icon={faSpinner} spin size={"xl"} style={{marginRight: '10px'}}/>
                    Loading...
                </>
            );
            toast.success('Team updated successfully.');
            setTimeout(() => navigate('/teams'), 2000);
        } catch (error) {
            setLoading(false);
            setSaveButton('Save');
            toast.error('Failed to update the team data');
        }
    }

    return (
        <Layout title={"Edit team"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <AddTeamForm departments={departments} register={register} errors={errors}/>
                                <button className={"btn btn-dark btn-sm ms-auto"}>{saveButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default EditTeam;