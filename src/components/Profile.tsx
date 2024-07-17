import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchProfile } from "../store/action-creator/profile";

const Profile: React.FC = () => {
    const {profile, error, loading} = useTypedSelector(state => state.profile);
    const dispatch = useDispatch();
    const params = useParams();
    
    useEffect(() => {
        dispatch(fetchProfile(params.id));
    }, [])

    if(loading) {
        return <h1>Загружаемся...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    console.log(profile);
    return(
        <div className="container profile profile-wrapper">
            <h1 className="profile__title">{profile.name}</h1>
            <hr></hr>
            <div className="profile__stat"><span>birth_year:</span> <p>{profile.birth_year}</p></div>
            <div className="profile__stat"><span>gender:</span> <p>{profile.gender}</p></div>
            <div className="profile__stat"><span>height:</span> <p>{profile.height}</p></div>
            <div className="profile__stat"><span>mass:</span> <p>{profile.mass}</p></div>
            <div className="profile__stat"><span>hair_color:</span> <p>{profile.hair_color}</p></div>
            <div className="profile__stat"><span>skin_color:</span> <p>{profile.skin_color}</p></div>
            <div className="profile__stat"><span>eye_color:</span> <p>{profile.eye_color}</p></div>
        </div>
    )
}

export default Profile;