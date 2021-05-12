import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../helper/request';
import { setName, setSurname, setPhone, addUser, clearValue } from '../../../store/actions';
import { API } from '../../../consts';
import { StateTypes } from '../../../types';
import { Button } from '../../../common';

const Form: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: StateTypes) => state.newUser);

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value));
    };

    const handleOnChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSurname(e.target.value));
    };

    const handleOnChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPhone(e.target.value));
    };

    const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        request(API, 'POST', { name: data.nameValue, surname: data.surnameValue, phone: data.phoneValue }).then(data =>
            dispatch(addUser(data)),
        );
        dispatch(clearValue());
    };

    const isDisabled = [data.nameValue, data.surnameValue, data.phoneValue].every(elem => elem.length);

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                className="input"
                type="text"
                placeholder="enter name"
                onChange={handleOnChangeName}
                value={data.nameValue}
            />
            <input
                className="input"
                type="text"
                placeholder="enter surname"
                onChange={handleOnChangeSurname}
                value={data.surnameValue}
            />
            <input
                className="input"
                type="text"
                placeholder="enter phone"
                onChange={handleOnChangePhone}
                value={data.phoneValue}
            />
            <Button isDisabled={!isDisabled} type="submit">
                Create
            </Button>
        </form>
    );
};

export default Form;
