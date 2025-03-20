import {PaginationSearchParams} from "./pagination.ts";

export interface Service {

    findAll(params: PaginationSearchParams): Promise<any>
    findById(id: any): Promise<any>
    create(payload: any): Promise<any>
    deleteById(id: any): Promise<any>
    updateById(id: any, body: any): Promise<any>
}