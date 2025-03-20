import {Outlet} from "react-router-dom";
import Box from '@mui/material/Box';

export function AuthLayout() {

    return (
        <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center" className="antialiased"
        sx={{
            backgroundColor: '#4caf50',
        }}
        >
            <Box display="flex"
                 flexDirection="column"
                 flex={1}
                 justifyContent="center"
                 alignItems="center">
                <Outlet/>
            </Box>
        </Box>
    )
}