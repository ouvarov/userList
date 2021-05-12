import { ACTIVE_TYPE } from '../reducers/consts';
import { UserTypes } from '../../types';

export const setUsersList = (data: UserTypes[]) => ({ type: ACTIVE_TYPE.ADD_USERS, data });
export const addUser = (user: UserTypes) => ({ type: ACTIVE_TYPE.ADD_USER, user });
export const editUser = (userId: string) => ({ type: ACTIVE_TYPE.EDIT, userId });
export const unEditUser = (userId: string) => ({ type: ACTIVE_TYPE.UN_EDIT, userId });
export const setNameValue = (value: string, userId: string) => ({ type: ACTIVE_TYPE.SET_NAME, value, userId });
export const setSurnameValue = (value: string, userId: string) => ({ type: ACTIVE_TYPE.SET_SURNAME, value, userId });
export const setPhoneValue = (value: string, userId: string) => ({ type: ACTIVE_TYPE.SET_PHONE, value, userId });
