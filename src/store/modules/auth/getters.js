import axios from "axios";

export const user = (state) => {
    return state.user
};

export const auth = (state) => {
    return state.user.auth
};

export const data = (state) => {
    return state.user.data
};

export const tasks = (state) => {

    //Récup du token comme quoi l'user est bien connecté
    const token = state.user.token;

    if (!token) {
        //return;
    }

    axios.get(
        'http://127.0.0.1:8000/api/tasks', {},
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

};