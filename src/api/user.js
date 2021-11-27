const CREATE_USER_API = 'http://localhost:4000/users';

const user = {
    create: (params) => {
        return fetch(CREATE_USER_API, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        });
    },

    get: () => {

    },

    getList: () => {

    },
    
    delete: () => {

    },

    update: () => {

    }
};

export default user;