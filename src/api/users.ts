import { axiosCreater } from "../helpers/api";

const usersApi = axiosCreater;

export const usersUrlEndpoint = '/users'

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}


export const getUsers = async () => {
    const response = await usersApi.get<User[]>(usersUrlEndpoint)
    return response.data
}

export const getUserById = async (url: string, userId: string) => {
    const response = await usersApi.get<User>(`${url}/${userId}`)
    return response.data
}
