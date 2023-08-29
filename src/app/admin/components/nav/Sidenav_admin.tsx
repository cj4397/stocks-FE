'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '@/app/components/auth';
import style from './sidenav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from "next/navigation";

export default function Sidenav_admin() {
    const { logout } = useAuth()
    const [show, setShow] = useState(true)
    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faAnglesLeft} />)
    const pathname = usePathname()





    const change = () => {
        setShow(show ? false : true)
        setIcon(show ? <FontAwesomeIcon icon={faAnglesRight} /> : <FontAwesomeIcon icon={faAnglesLeft} />)
    }

    return (
        <div className={`${style.container} is-flex is-flex-direction-row h-100 `}>
            <aside className={`${style.sidenav} ${show ? style.show : ''}`}>

                <p className="menu-label">
                    Users
                </p>
                <ul className="menu-list">
                    <li className={(pathname == "/admin/dashboard/request") ? "active" : ""} >
                        <Link href={{
                            pathname: '/admin/dashboard/request'
                        }}
                            as='/admin/dashboard/request'
                        >User Requests</Link></li>

                    <li className={(pathname == "/admin/dashboard/users") ? "active" : ""}><Link href={{
                        pathname: '/admin/dashboard/users'
                    }}
                        as='/admin/dashboard/users'>Traders</Link></li>


                </ul>

                <p className="menu-label">
                    Transactions
                </p>
                <ul className='menu-list'>
                    <li className={(pathname == "/admin/dashboard/transactions") ? "active" : ""} >
                        <Link href={{
                            pathname: '/admin/dashboard/transactions'
                        }}
                        >History</Link></li>

                </ul>


                <ul className={`menu-list ${style.logout} ${show ? style.show : ''}`}>
                    <li ><a onClick={() => logout()}>Log Out</a></li>
                </ul>

            </aside>
            <button onClick={change}>{icon}</button>
        </div>
    )
}
