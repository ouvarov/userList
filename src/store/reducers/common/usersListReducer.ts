import { ACTIVE_TYPE } from '../consts';
import { UsersTypes, UserTypes } from '../../../types';
import { UsersListActions } from '../types';

const usersListReducer = (usersList: UsersTypes = { data: [] }, action: UsersListActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_USERS:
            return { ...usersList, data: [...action.data] };
        case ACTIVE_TYPE.ADD_USER:
            usersList.data.push(action.user);
            return { ...usersList };
        case ACTIVE_TYPE.SET_NAME:
            return {
                ...usersList,
                data: usersList.data.map((u: UserTypes) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            nameValue: action.value,
                        };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.SET_SURNAME:
            return {
                ...usersList,
                data: usersList.data.map((u: UserTypes) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            surnameValue: action.value,
                        };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.SET_PHONE:
            return {
                ...usersList,
                data: usersList.data.map((u: UserTypes) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            phoneValue: action.value,
                        };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.EDIT:
            return {
                ...usersList,
                data: usersList.data.map((u: UserTypes) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            edit: true,
                            surnameValue: u.surname,
                            nameValue: u.name,
                            phoneValue: u.phone,
                        };
                    }
                    return u;
                }),
            };
        case ACTIVE_TYPE.UN_EDIT:
            return {
                ...usersList,
                data: usersList.data.map((u: UserTypes) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            edit: false,
                        };
                    }
                    return u;
                }),
            };
        default:
            return usersList;
    }
};

export default usersListReducer;
