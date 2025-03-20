import {Service} from "../interfaces/service.ts";
import {PaginationSearchParams} from "../interfaces/pagination.ts";
import {api} from "../lib/axios.ts";

export class ScheduleService implements Service {
    async create(): Promise<any> {
        return Promise.resolve(undefined);
    }

    deleteById(id: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    async findAll({page, pageSize, search}: PaginationSearchParams): Promise<any> {
        try {
            const response = await api.get('schedules/summary', {
                params: {
                    page: page,
                    page_size: pageSize,
                    search
                }
            })

            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    findById(id: any): Promise<any> {
        return Promise.resolve(undefined);
    }

    updateById(id: any, body: any): Promise<any> {
        return Promise.resolve(undefined);
    }

}