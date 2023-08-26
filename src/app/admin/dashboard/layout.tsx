'use client';
import React from 'react'
import { useAuth } from '@/app/components/auth';
import Sidenav_admin from '../components/nav/Sidenav_admin';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { logout, token } = useAuth()

    if (token === null) {
        logout()
    }

    return (
        <main className=" is-flex is-flex-direction-row h-100">
            <div className="has-background-black">
                <Sidenav_admin></Sidenav_admin>
            </div>
            <div className="w-100 h-100 overflow">

                <div className="h-100">
                    {children}
                </div>
            </div>


        </main>

    )
}
