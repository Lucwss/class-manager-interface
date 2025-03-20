import {ResponseStudent} from "./student.ts";
import {ResponseLecturer} from "./lecturer.ts";


export interface ResponseSchedule {
    id: string
    title: string
    description: string
    subject: string
    student: ResponseStudent
    lecturer: ResponseLecturer
    created_at: string
    updated_at: string
}