'use client';
import React, { useEffect, useState } from 'react'
import PieChart from '../chart/Chart';
import History from '../table/History';

export default function Tabs(props: any) {
    const { accounts } = props
    const [current, setCurrent] = useState(accounts[0].name)


    return (
        <div>

            <main className=''>
                <div className="tabs">
                    <ul>
                        {accounts.map((e: any) => (
                            <li key={e.id} onClick={() => setCurrent(e.name)} className={(current == e.name) ? "is-active" : ""}><a>{e.name}</a></li>
                        ))}
                    </ul>
                </div>

                {accounts.map((e: any) => (
                    <div key={e.name} className={`${(current == e.name) ? "" : "is-hidden"} tile is-ancestor`}>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">Transaction History</p>

                                {/* <History></History> */}

                            </div>
                        </div>
                        <div className="tile is-6 is-vertical is-parent">
                            <div className="tile is-child box">
                                <p className="title">Balance</p>
                                Balance:infinite
                            </div>
                            <div className="tile is-child box">
                                <p className="title">Assets</p>
                                <PieChart></PieChart>
                            </div>
                        </div>

                    </div>
                ))}
            </main>

        </div>
    )
}
