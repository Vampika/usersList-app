export interface profileState {
    profile: {},
    loading: boolean,
    error: null | string,
    name: string,
}

export enum profileActionsTypes {
    FETCH_PROFILE = 'FETCHP_ROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCHP_ROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCHP_ROFILE_ERROR',
}

interface FetchProfileAction {
    type: profileActionsTypes.FETCH_PROFILE
}

interface FetchProfileSuccessAction {
    type: profileActionsTypes.FETCH_PROFILE_SUCCESS;
    payload: {};
}

interface FetchProfileErrorAction {
    type: profileActionsTypes.FETCH_PROFILE_ERROR;
    payload: string;
}

export type ProfileAction = FetchProfileAction | FetchProfileSuccessAction | FetchProfileErrorAction;