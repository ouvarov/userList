import { NEW_USER_TYPE } from '../consts';
import { NewUserTypes } from '../../../types';
import { NewUserActions } from '../types';

const newUserReducer = (
    newUser: NewUserTypes = { nameValue: '', surnameValue: '', phoneValue: '' },
    action: NewUserActions,
) => {
    switch (action.type) {
        case NEW_USER_TYPE.SET_NAME_VALUE:
            return { ...newUser, nameValue: action.value };
        case NEW_USER_TYPE.SET_SURNAME_VALUE:
            return { ...newUser, surnameValue: action.value };
        case NEW_USER_TYPE.SET_PHONE_VALUE:
            return { ...newUser, phoneValue: action.value };
        case NEW_USER_TYPE.CLEAR:
            return { ...newUser, nameValue: '', surnameValue: '', phoneValue: '' };
        default:
            return newUser;
    }
};

export default newUserReducer;
