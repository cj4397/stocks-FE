'use client';
import Sidenav from "../components/sidenav/sidenav"
import { useAuth } from "../components/auth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { logout, token } = useAuth()
    if (token === '') {
        logout()
    }
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