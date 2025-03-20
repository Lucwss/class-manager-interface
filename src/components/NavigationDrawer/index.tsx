import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {useNavigate} from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useAuthentication} from "../../hooks/useAuthentication.tsx";

interface ToggleDrawerProps {
    toggleDrawer: (newOpen: boolean) => void
}

function navigationIconMapper(sectionName: string) {
    switch (sectionName) {
        case 'Schedules':
            return <CalendarMonthIcon />;
        case 'Students':
            return <SchoolIcon />;
        case 'Lectures':
            return <PersonOutlineIcon />
        default:
            return <InboxIcon />;
    }
}

export function NavigationDrawer({toggleDrawer}: ToggleDrawerProps) {

    const navigate = useNavigate()
    const {handleLogOut} = useAuthentication()

    return (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
            <List>
                {['Schedules', 'Students', 'Lecturers'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => navigate(`/${text.toLowerCase()}`)}>
                            <ListItemIcon>
                                {navigationIconMapper(text)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <ListItem key={'sign-out'} disablePadding>
                <ListItemButton onClick={async () => {
                    await handleLogOut()
                    navigate('/sign-in')
                }}>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Sign Out"} />
                </ListItemButton>
            </ListItem>
        </Box>
    )
}