import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading, Button } from '../../../common';

import { request } from '../../../helper/request';

import {
    setUsersList,
    editUser,
    unEditUser,
    setNameValue,
    setSurnameValue,
    setPhoneValue,
} from '../../../store/actions';
import { API } from '../../../consts';
import { StateTypes } from '../../../types';

const Table: React.FC = () => {
    const users = useSelector((state: StateTypes) => state.usersList);
    const dispatch = useDispatch();

    const handleOnClickDelete = (id: string): void => {
        request(`${API}/${id}`, `DELETE`).then(() => {
            request().then(data => dispatch(setUsersList(data)));
        });
    };
    const handleOnClickSave = (id: string, obj: any): void => {
        request(`${API}/${id}`, `PUT`, obj).then(() => {
            request().then(data => dispatch(setUsersList(data)));
        });
    };
    const handleOnClickEdit = (id: string, edit: boolean): void => {
        if (edit) {
            dispatch(unEditUser(id));
        } else dispatch(editUser(id));
    };

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>, userId: string) => {
        dispatch(setNameValue(e.target.value, userId));
    };

    const handleOnChangeSurname = (e: React.ChangeEvent<HTMLInputElement>, userId: string) => {
        dispatch(setSurnameValue(e.target.value, userId));
    };

    const handleOnChangePhone = (e: React.ChangeEvent<HTMLInputElement>, userId: string) => {
        dispatch(setPhoneValue(e.target.value, userId));
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>surname</th>
                        <th>phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {users.data.length && (
                    <tbody>
                        {users.data.map(({ id, name, surname, phone, edit, nameValue, phoneValue, surnameValue }) => (
                            <tr key={id}>
                                <td>
                                    {edit ? (
                                        <input
                                            onChange={e => {
                                                handleOnChangeName(e, id);
                                            }}
                                            className="input"
                                            type="text"
                                            value={nameValue}
                                        />
                                    ) : (
                                        name
                                    )}
                                </td>
                                <td>
                                    {edit ? (
                                        <input
                                            onChange={e => {
                                                handleOnChangeSurname(e, id);
                                            }}
                                            className="input"
                                            type="text"
                                            value={surnameValue}
                                        />
                                    ) : (
                                        surname
                                    )}
                                </td>
                                <td>
                                    {edit ? (
                                        <input
                                            onChange={e => {
                                                handleOnChangePhone(e, id);
                                            }}
                                            className="input"
                                            type="text"
                                            value={phoneValue}
                                        />
                                    ) : (
                                        phone
                                    )}
                                </td>
                                <td>
                                    <Button onClick={() => handleOnClickEdit(id, edit)}>
                                        {edit ? 'UnEdit' : 'Edit'}
                                    </Button>
                                    <Button
                                        className="button--save"
                                        onClick={() => {
                                            handleOnClickSave(id, {
                                                name: nameValue,
                                                surname: surnameValue,
                                                phone: phoneValue,
                                            });
                                        }}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        className="button--remove"
                                        onClick={() => {
                                            handleOnClickDelete(id);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            {!users.data.length && <Loading />}
        </>
    );
};

export default Table;
