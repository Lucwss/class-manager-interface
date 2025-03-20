import {z} from 'zod'
import {useNavigate, useSearchParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {ScheduleService} from "../../../services/schedules.ts";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import {ResponseSchedule} from "../../../interfaces/schedule.ts";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

export function Schedules() {
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get('search')
    const scheduleService = new ScheduleService()
    const navigate = useNavigate()

    const page = z.coerce
        .number()
        .transform((page) => page)
        .parse(searchParams.get('page') ?? '1')

    const pageSize = z.coerce
        .number()
        .transform((page) => page)
        .parse(searchParams.get('page_size') ?? '10')

    const {data: result, isLoading: isLoadingSchedules, refetch: refetchSchedules} = useQuery({
        queryKey: ['schedules', page, pageSize, search],
        queryFn: () => scheduleService.findAll({page, pageSize, search}),
    })

    function handlePaginate(event: unknown, newPage: number) {

        console.log(newPage)
        setSearchParams((state) => {
            state.set('page', (newPage).toString())
            return state
        })
    }

    function handlePageSize(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchParams((state) => {
            state.set('page_size', (event.target.value).toString())
            return state
        })
    }

    return (
        <Paper sx={{ width: '80%', overflow: 'hidden', padding: "10px" }}>
            <Button onClick={() => navigate("/schedules/add")} startIcon={<AddIcon/>} size="large" color="primary" aria-label="create new schedule" variant="contained">
                Add new Schedule
            </Button>
            <TableContainer>
                <Table sx={{ minWidth: 600 }} aria-label="table of schedules">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">Lecturer</TableCell>
                            <TableCell align="right">Student</TableCell>
                            <TableCell align="right">Moment</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            result?.payload.data.map((item: ResponseSchedule) => (
                                <TableRow key={item.id}>
                                    <TableCell scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell scope="row" align="right">
                                        {item.description}
                                    </TableCell>
                                    <TableCell scope="row" align="right">
                                        {item.subject}
                                    </TableCell>
                                    <TableCell scope="row" align="right">
                                        {item.lecturer.username}
                                    </TableCell>
                                    <TableCell scope="row" align="right">
                                        {item.student.username}
                                    </TableCell>
                                    <TableCell scope="row" align="right">
                                        {item.created_at}
                                    </TableCell>
                                    <TableCell scope="row" align="right">
                                        actions
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={result?.payload.total}
                rowsPerPage={pageSize}
                page={page}
                onPageChange={handlePaginate}
                onRowsPerPageChange={handlePageSize}
            />
        </Paper>

    )
}