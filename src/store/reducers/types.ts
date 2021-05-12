import { UserTypes } from '../../types/';

export type UsersListActions = {
    type: string;
    data: UserTypes[];
    user: UserTypes;
    userId: string;
    value: string;
};

export type NewUserActions = {
    type: string;
    value: string;
};
