import * as requester from "./api/rest.js";

const endpoints = {
    getComments: (petId) => `http://localhost:3030/data/comments?where=petId%3D%22${petId}%22`,
    postComment: 'http://localhost:3030/data/comments'
}


export function getComments(petId){
    return requester.get(endpoints.getComments(petId));
}

export function postComment(data){
    requester.post(endpoints.postComment, data);
}