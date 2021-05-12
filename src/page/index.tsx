import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table, Form } from './common';

import { setUsersList } from '../store/actions';

import { request } from '../helper/request';

const UsersPage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        request().then(data => dispatch(setUsersList(data)));
    }, []);

    return (
        <>
            <Table />
            <Form />
        </>
    );
};

export default UsersPage;
