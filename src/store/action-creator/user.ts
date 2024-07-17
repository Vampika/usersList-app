import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"
import axios from "axios"

export const fetchUsers = (page = 1, limit = 10):any => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const responce = await axios.get("https://swapi.dev/api/people/", {params: {page: page}});
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: responce.data.results})
        }
        catch (error){
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: "Ошибка при загрузке данных"})
        }
    }
}

export const setUsersPage = (page: number): any =>{
    return {type: UserActionTypes.SET_USERS_PAGE, payload: page}
}