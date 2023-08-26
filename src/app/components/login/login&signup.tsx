'use client';
import React from 'react'
import { useState } from "react";
import { useDatabase } from '../api';
import { useAuth } from '../auth';
import { useRouter } from 'next/navigation';


import style from './login.module.css'


export function Sign_up() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { sign_up } = useDatabase()
    const { login } = useAuth()
    const route = useRouter();

    async function signup() {
        const result = await sign_up(name, email, password)

        if (result.admin) {
            login(
                result.user,
                result.token
            )
            route.push('/admin/dashboard')
        } else if (result.token) {
            login(
                result.user,
                result.token
            )
            route.push('/dashboard')
        } else {
            console.log("invalid email or password")
        }
    }

    const handleSubmit_sign_up = (e: any) => {
        e.preventDefault();
        signup()
    }

    return (
        <form className={style.form} onSubmit={handleSubmit_sign_up} autoComplete="on">
            <h1>Create Account</h1>

            <input className={style.input} id="new_name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className={style.input} id="new_email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className={style.input} id="new_password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type='submit' className={style.ghost}>Sign Up</button>
        </form>
    )
}

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { sign_in } = useDatabase()
    const { login } = useAuth()
    const route = useRouter();

    async function signin() {
        const result = await sign_in(email, password)

        if (result.admin) {
            login(
                result.user,
                result.token
            )
            route.push('/admin/dashboard')
        } else if (result.token) {
            login(
                result.user,
                result.token
            )
            route.push('/dashboard')
        } else {
            console.log("invalid email or password")
        }
    }

    const handleSubmit_sign_in = (e: any) => {
        e.preventDefault();
        signin()
    }

    return (
        <form className={style.form} onSubmit={handleSubmit_sign_in}>
            <h1>Sign in</h1>


            <input className={style.input} id="user_email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className={style.input} id="user_password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type='submit' className={style.ghost}>Sign In</button>
        </form>
    )
}


export function Request() {
    const { application } = useDatabase()
    const [nickname, setNickname] = useState('')

    async function request_application() {
        const result = await application(nickname)
        if (result.message) {
            console.log("invalid email or password")
        }
    }

    const handleSubmit_sign_in = (e: any) => {
        e.preventDefault();
        request_application()
    }

    return (
        <form className='has-text-centered' onSubmit={handleSubmit_sign_in}>
            <h1 className='is-size-2 has-text-weight-semibold'>Make a Request to create a Trader Entity</h1>



            <label className="label">Nickname</label>
            <input className={style.input} id="user_email" type="text" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required />


            <button type='submit' >Request</button>
            <br />
            <br />
            <h4 className='is-size-7 has-text-left'><p className='has-text-weight-bold'>Note:</p> Trader Entity will be made when the Admin approved your request</h4>
        </form>
    )
}
