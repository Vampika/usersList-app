
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    SET_USERS_PAGE = "SET_USERS_PAGE",
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface SetUsersPage {
    type: UserActionTypes.SET_USERS_PAGE;
    payload: number;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | SetUsersPage;
