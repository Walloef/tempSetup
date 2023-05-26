import { axiosCreater } from "../helpers/api";
export const postsUrlEndpoint = '/posts';

const postsApi = axiosCreater
type TPost = { userId: string; id: string; title: string; body: string }

export const getPosts = async (url: string) => {
    const response = await postsApi.get<TPost[]>(url)
    return response.data
}

export const getPostsByUserId = async (url: string, userId: string | undefined) => {
    console.log('userId', userId)
    const response = await postsApi.get<TPost[]>(`${url}?userId=${userId}`)
    
    //Stupid way to redirect if user is not found
    if (response.data.length === 0) {
        window.location.href = '/404'
    }

    return response.data
}
