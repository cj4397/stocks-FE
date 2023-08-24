'use client';
import Link from 'next/link'
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

    const [market, setMarket] = useState('')



    const change = () => {
        setShow(show ? false : true)
        setIcon(show ? <FontAwesomeIcon icon={faAnglesRight} /> : <FontAwesomeIcon icon={faAnglesLeft} />)
    }

    return (

        <div className={`${style.container} is-flex is-flex-direction-row h-100 `}>
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
                    <li onClick={() => setMarket('low')} className={(pathname == "/dashboard/low") ? "active" : ""} >
                        <Link href={{
                            pathname: '/dashboard/low',
                            query: { market: 'low' },
                        }}
                            as='/dashboard/low'
                        >Low Tier Market</Link></li>
                    <li onClick={() => setMarket('mid')} className={(pathname == "/dashboard/mid") ? "active" : ""}><Link href={{
                        pathname: '/dashboard/mid',
                        query: { market: 'mid' },
                    }}
                        as='/dashboard/mid'>Mid Tier Market</Link></li>
                    <li onClick={() => setMarket('high')} className={(pathname == "/dashboard/high") ? "active" : ""}><Link href={{
                        pathname: '/dashboard/high',
                        query: { market: 'high' },
                    }}
                        as='/dashboard/high'>High Tier Market</Link></li>
                </ul>


                <ul className={`menu-list ${style.logout} ${show ? style.show : ''}`}>
                    <li ><a onClick={() => logout()}>Log Out</a></li>
                </ul>

            </aside>
            <button onClick={change}>{icon}</button>
        </div>

    )
}
