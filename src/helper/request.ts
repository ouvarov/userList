import { API } from '../consts';

export const request = async (url = `${API}`, method = `GET`, obj?: any) => {
    const options = {
        method,
        headers: {
            'content-type': 'application/json; charset=utf-8',
        },
    };

    if (obj) {
        // @ts-ignore
        options.body = JSON.stringify(obj);
    }

    const request = await fetch(url, options);

    const response = await request.json();

    return response;
};
