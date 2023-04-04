import * as requester from "./api/rest.js";

const baseUrl = " http://localhost:3030/";

export function getPet(id) {
    return requester.get(baseUrl + `data/pets/${id}`);
}

export function getAll() {
    return requester.get(baseUrl + "data/pets");
}

export function getMy(userId) {
    return requester.get(baseUrl + `data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function editStory(id, data) {
    requester.put(baseUrl + `data/pets/${id}`, data);
}

export function createStory(data) {
    requester.post(baseUrl + 'data/pets', data);
}

export function deleteStory(id) {
    requester.del(baseUrl + `data/pets/${id}`);
}











