import axios from 'axios'

export const login = ({ commit }, form) => {

    axios.post(
        'http://127.0.0.1:8000/api/auth/login',
        {
            email: form.email,
            password: form.password,
        }
    ).then((response) => {

        console.log(response);

        commit('token', response.data.token)

        const user = {
            name: response.data.name,
            email: response.data.email,
            created_at: response.data.created_at
        };

        commit('data', user)

    }).catch((error) => {
        console.log(error)
    });
};

export const register = ({ commit }, form) => {
    axios.post(
        'http://127.0.0.1:8000/api/auth/register',
        {
            name: form.name,
            email: form.email,
            password: form.password,
        }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)

        const user = {
            name: response.data.name,
            email: response.data.email,
            created_at: response.data.created_at
        }

        commit('data', user)
    }).catch((error) => {
        console.log(error)
    });
};

export const logout = ({ commit, state }) => {
    const token = state.user.token;
    if (!token) {
        return;
    }

    axios.post(
        'http://127.0.0.1:8000/api/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error)
    });

    commit('token', null);
    commit('data', {});
};

export const me = ({ commit, state }) => {

    const token = state.user.token;

    console.log(token)

    if(!token){
        return;
    }

    axios.post('http://127.0.0.1:8000/api/auth/me', {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        console.log(response);
        return response.data
    }).catch((error) => {
        console.log(error);
    });

};

//Création task
export const createTask = ({ commit, state }, form) => {

    //Récup du token comme quoi l'user est bien connecté
    const token = state.user.token;

    if (!token) {
        return;
    }

    axios.post(
        'http://127.0.0.1:8000/api/tasks',
        {
            body: form.body
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    ).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error)
    });

}