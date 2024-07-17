import { Dispatch } from "redux"
import axios from "axios"
import { ProfileAction, profileActionsTypes } from "../../types/profile"

export const fetchProfile = (name = ''):any => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: profileActionsTypes.FETCH_PROFILE});
            const responce = await axios.get("https://swapi.dev/api/people/", {params: {search: name}});
            dispatch({type: profileActionsTypes.FETCH_PROFILE_SUCCESS, payload: responce.data.results[0]})
        }
        catch (error){
            dispatch({type: profileActionsTypes.FETCH_PROFILE_ERROR, payload: "Ошибка при загрузке данных"})
        }
    }
}
