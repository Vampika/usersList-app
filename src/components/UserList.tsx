import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchUsers, setUsersPage } from "../store/action-creator/user";
import Card from "./Card";

const UserList: React.FC = () => {
    const {users, error, loading, page} = useTypedSelector(state => state.user)
    const dispatch = useDispatch();
    const pages = [1, 2, 3, 4, 5, 6, 7, 8];
    useEffect(() => {
        dispatch(fetchUsers(page));
    }, [page])

    if(loading) {
        return <h1>Загружаемся...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div className="cards-wrapper container">
            <div className="cardsList">
            {
                users.map(user => {
                    return <Card name={user.name} gender={user.gender} height={user.height} mass={user.mass} id={user.name}/>
                })}
            </div>

                <div className="cards__pages">
                {pages.map(p => 
                    <div
                    onClick={() => dispatch(setUsersPage(p))}
                     style={{color: p === page ? '#F20587' : 'inherit'}}>{p}</div>
                )}
                </div>
            
        </div>
    )
}

export default UserList;