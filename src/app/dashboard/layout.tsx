'use client';

import { useEffect } from "react";
import { useAuth } from "../components/auth";
import Sidenav from "../components/sidenav/sidenav"

import { useRouter } from "next/navigation";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { token } = useAuth()
    const router = useRouter()
    const check = () => {
        if (token === '') {
            return router.push('/login')
        }
    }

    useEffect(() => {
        check()
    })






    return (
        <main className=" is-flex is-flex-direction-row h-100">
            <div className="has-background-black">
                <Sidenav></Sidenav>
            </div>
            <div className="w-100 h-100 overflow">

                <div className="h-100">
                    {children}
                </div>
            </div>


        </main>

    )
}