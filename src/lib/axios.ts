import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://0.0.0.0:8000/api/v1',
})

api.interceptors.request.use((config) => {
        const userInformation = localStorage.getItem('userInformation')

        if (userInformation) {
            const localStorageUserInfo = JSON.parse(userInformation);
            const accessToken: string = localStorageUserInfo.access_token
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config
    },
    error => {
        return Promise.reject(error)
    })