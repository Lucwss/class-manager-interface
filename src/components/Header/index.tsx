import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {stringToColor} from "../utils/stringHandlers.ts";
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import Drawer from '@mui/material/Drawer';
import {NavigationDrawer} from "../NavigationDrawer";

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}


export function Header() {

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Box sx={{
            minWidth: '100vw',
            backgroundColor: '#4caf50',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
        }}>
            <Stack direction="row" spacing={2} sx={{
                width: '100%',
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 30px"
            }}>
                <Stack direction="row" spacing={2} sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <IconButton onClick={toggleDrawer(true)} size="large" aria-label="navigation menu">
                        <ListIcon sx={{ color: "#fff" }} fontSize="large"/>
                    </IconButton>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {NavigationDrawer({toggleDrawer: toggleDrawer})}
                    </Drawer>
                    <Box component="h1" sx={{
                        color: 'white',
                        fontSize: '30px'
                    }}>
                        Class Manager
                    </Box>
                </Stack>
                <Avatar {...stringAvatar('Lucas Emanoel')} />
            </Stack>
        </Box>
    )
}