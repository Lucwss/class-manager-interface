import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext.tsx";
import {SignInForm} from "../types/authentication.ts";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

export function useAuthentication() {
    const { authenticate, signOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const { mutateAsync: signIn } = useMutation({
        mutationFn: authenticate
    })

    const { mutateAsync: logOut } = useMutation({
        mutationFn: signOut
    })

    async function handleSignIn(data: SignInForm) {
        try {
            const response = await signIn(data)
            if (response !== undefined) {
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

    async function handleLogOut() {
        try {
            await logOut()
            navigate('/sign-in')
        } catch (err) {
            console.error(err)
        }
    }

    return {
        handleSignIn,
        handleLogOut
    }
}