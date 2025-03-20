import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {OutlinedInput} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {signUpForm, SignUpForm} from "../../../types/authentication.ts";
import {useAuthentication} from "../../../hooks/useAuthentication.tsx";
import {UserService} from "../../../services/users.ts";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

export function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);
    const userService = new UserService()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SignUpForm>({
        resolver: zodResolver(signUpForm)
    })

    const { mutateAsync: signUp } = useMutation({
        mutationFn: userService.create,
        onSuccess: () => {
            navigate('/sign-in')
        }
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    return (
        <Box sx={{
            minWidth: 600
        }}>
            <Card sx={{
                padding: "70px 0"
            }}>
                <React.Fragment>
                    <CardContent>
                        <Stack direction="column" alignItems="center" gap={5}>
                            <Typography gutterBottom sx={{ color: '#4caf50', fontSize: 30 }}>
                                Register for Class Manager
                            </Typography>
                            <Box
                                width="100%"
                                component="form"
                                onSubmit={handleSubmit((data) => signUp(data))}
                                noValidate
                                autoComplete="off"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                gap={5}
                            >
                                <Box width="60%">
                                    <TextField
                                        id="email"
                                        label="E-mail"
                                        fullWidth
                                        {...register('email')}
                                    />
                                </Box>
                                <Box width="60%">
                                    <TextField
                                        id="user name"
                                        label="Username"
                                        fullWidth
                                        {...register('username')}
                                    />
                                </Box>
                                <Box width="60%">
                                    <OutlinedInput
                                        id="password"
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        {...register('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        fullWidth
                                    />
                                </Box>
                                <Box width="60%" display="flex" justifyContent="center" flexDirection="column" gap={2}>
                                    <Button type='submit' disabled={isSubmitting} variant="contained">Sign up</Button>
                                </Box>
                            </Box>
                        </Stack>

                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    )
}