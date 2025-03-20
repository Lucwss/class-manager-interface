import {Header} from "../../components/Header";
import {Navigate, Outlet} from "react-router-dom";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

function ProtectedRoute() {
    const isAuthenticated = !!localStorage.getItem("userInformation"); // Example check for authentication
    return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

export function AppLayout() {
    return (
        <Stack flexDirection="column" minHeight="100vh">
            <Header/>
            <Box display="flex"
                 sx={{
                     backgroundColor: '#f5f5f5',
                 }}
                 flexDirection="column"
                 flex={1}
                 mt="64px"
                 justifyContent="center"
                 alignItems="center">
                {ProtectedRoute()}
            </Box>
        </Stack>
    )
}