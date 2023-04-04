import * as requester from "./api/rest.js";

const endpoits = {
    login: 'http://localhost:3030/users/login',
    register: 'http://localhost:3030/users/register',
    logout: 'http://localhost:3030/users/logout'
}

export async function login(data) {
    return requester.post(endpoits.login, data);
}

export async function register(data) {
    return requester.post(endpoits.register, data);
}

export async function logout() {
    requester.get(endpoits.logout);
}


