import { axiosService } from './axios.service';
import { urls } from '../configs';

export const appService = {
    getUsers: (page=1) => axiosService.get(urls.users, {
        params: {
            page,
            count: 6
        }
    }).then(response => response.data),
    getPositions: () => axiosService.get(urls.positions).then(response => response.data),
    getAuthToken: () => axiosService.get(urls.token).then(response => response.data),
    createUser: (user, token) => axiosService.post(urls.users, user, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Token: token
        }
    }).then(response => response.data)
}