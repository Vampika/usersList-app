import { loadavg } from "os";
import { ProfileAction, profileActionsTypes, profileState } from "../../types/profile";

const initialState:profileState = {
    profile: {},
    error: null,
    loading: false,
    name:''
}

export const profileReducer = (state= initialState, action: ProfileAction): any => {
    switch (action.type) {
        case profileActionsTypes.FETCH_PROFILE:
            return {...state, loading: true}
        case profileActionsTypes.FETCH_PROFILE_SUCCESS:
            return {...state, loading: false, profile: action.payload}
        case profileActionsTypes.FETCH_PROFILE_ERROR:
            return {...state, error: action.payload, loading:false}
        default:
            return state
    }
}