import {Service} from "../interfaces/service.ts";
import {PaginationSearchParams} from "../interfaces/pagination.ts";
import {SignUpForm} from "../types/authentication.ts";
import {api} from "../lib/axios.ts";

export class UserService implements Service {
    async create(payload: SignUpForm): Promise<any> {
        try {
            const response = await api.post('auth/sign-up/', {
                username: payload.username,
                email: payload.email,
                password: payload.password,
            })

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    deleteById(id: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    findAll(params: PaginationSearchParams): Promise<any> {
        return Promise.resolve(undefined);
    }

    findById(id: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    updateById(id: any, body: any): Promise<any> {
        return Promise.resolve(undefined);
    }

}