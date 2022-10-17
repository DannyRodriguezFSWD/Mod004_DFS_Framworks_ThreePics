import data from "../data/posts.json"
import userData from "../data/users.json"

export function getPosts(){
    return new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve(data.posts);
        }, 3000);
    })
}

export function getUsers(){
    return new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve(userData.users);
        }, 1000);
    })
}