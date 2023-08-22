
import Sidenav from "../components/sidenav/sidenav"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <main className=" is-flex is-flex-direction-row ">
            <div className="">
                <Sidenav></Sidenav>
            </div>
            <div className="w-100 h-100 overflow">

                <div>
                    {children}
                </div>
            </div>


        </main>

    )
}