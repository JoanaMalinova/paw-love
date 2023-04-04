import * as requester from "./api/rest.js";

const endpoints = {
    like: 'http://localhost:3030/data/likes',
    getLikes: (petId) => `http://localhost:3030/data/likes?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    checkIfLiked: (petId, userId) => `http://localhost:3030/data/likes?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}


export async function likePet(data) {
    requester.post(endpoints.like, data);
}

export async  function getLikeCount(petId) {
    return requester.get(endpoints.getLikes(petId));
}

export async function checkIfLiked(petId, userId) {
    return requester.get(endpoints.checkIfLiked(petId, userId))
}