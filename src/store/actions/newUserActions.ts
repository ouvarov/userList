import { NEW_USER_TYPE } from '../reducers/consts';

export const setName = (value: string) => ({ type: NEW_USER_TYPE.SET_NAME_VALUE, value });
export const setSurname = (value: string) => ({ type: NEW_USER_TYPE.SET_SURNAME_VALUE, value });
export const setPhone = (value: string) => ({ type: NEW_USER_TYPE.SET_PHONE_VALUE, value });
export const clearValue = () => ({ type: NEW_USER_TYPE.CLEAR });
