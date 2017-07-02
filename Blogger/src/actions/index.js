import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=SUYASH'

export function fetchPosts(){
    const req = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    return{
        type: FETCH_POSTS,
        payload: req
    }
}

export function createPost(values, callback){
    const req = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback())
    return{
        type: CREATE_POST,
        payload: req
    }
}

export function fetchPost(id){
    const req = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`)
    return{
        type: FETCH_POST,
        payload: req
    }
}

export function deletePost(id, callback){
    const req = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
        .then(() => callback())
    return{
        type: DELETE_POST,
        payload: id
    }
}
