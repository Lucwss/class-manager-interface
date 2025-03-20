import {z} from "zod"

export const signInForm = z.object({
    email: z.string().min(1, { message: "Insira um e-mail válido" }).email({ message: 'E-mail inválido' }),
    password: z.string().min(1, { message: "Insira um senha" })
})

export type SignInForm = z.infer<typeof signInForm>


export const signUpForm = z.object({
    email: z.string().min(1, { message: "Insira um e-mail válido" }).email({ message: 'E-mail inválido' }),
    username: z.string().min(1, { message: "Insira um username" }),
    password: z.string().min(1, { message: "Insira um senha" })
})

export type SignUpForm = z.infer<typeof signUpForm>