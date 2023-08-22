'use client';
import Link from "next/link"
import React, { useState } from 'react'
import { useAuth } from "../auth"
import style from './sidenav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

import { usePathname } from "next/navigation";

export default function Sidenav() {
    const { logout } = useAuth()
    const [show, setShow] = useState(true)
    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faAnglesLeft} />)

    const pathname = usePathname()

    const change = () => {
        setShow(show ? false : true)
        setIcon(show ? <FontAwesomeIcon icon={faAnglesRight} /> : <FontAwesomeIcon icon={faAnglesLeft} />)
    }

    return (
        // <div id="link-container">
        //     <h1>Side Navigation</h1>
        //     <Link href='/dashboard/task' classNameName="links">Create</Link>
        //     <Link href='/dashboard' classNameName="links">Task</Link>
        //     <div classNameName="links" onClick={() => logout()}>Log Out</div>
        // </div>
        <div className={`${style.container} is-flex is-flex-direction-row has-background-black `}>
            <aside className={`${style.sidenav} ${show ? style.show : ''}`}>
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li className={pathname == "/dashboard" ? "active" : ""}><Link href='/dashboard'>Dashboard</Link></li>
                    <li className={pathname == "/dashboard/history" ? "active" : ""}><Link href='/dashboard/history'>History</Link></li>
                </ul>
                <p className="menu-label">
                    Market
                </p>
                <ul className="menu-list">
                    <li className={pathname == "/dashboard/low_market" ? "active" : ""}><Link href='/dashboard/low_market'>Low Tier Market</Link></li>
                    <li className={pathname == "/dashboard/mid_market" ? "active" : ""}><Link href='/dashboard/mid_market'>Mid Tier Market</Link></li>
                    <li className={pathname == "/dashboard/high_market" ? "active" : ""}><Link href='/dashboard/high_market'>High Tier Market</Link></li>
                </ul>


                <ul className={`menu-list ${style.logout} ${show ? style.show : ''}`}>
                    <li ><a onClick={() => logout()}>Log Out</a></li>
                </ul>

            </aside>
            <button onClick={change}>{icon}</button>
        </div>

    )
}
