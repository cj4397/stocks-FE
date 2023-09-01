'use client';
import React, { useEffect, useState } from 'react'
import PieChart from '../chart/Chart';
import History from '../table/History';
import { Request } from '../login/login&signup';

export default function Tabs(props: any) {
    const { accounts } = props
    const [current, setCurrent] = useState(accounts[0].name)

    console.log(accounts)


    return (
        <div>

            <main className=''>
                <div className="tabs">
                    <ul>
                        {accounts.map((e: any) => (
                            <li key={e.id} onClick={() => setCurrent(e.name)} className={(current == e.name) ? "is-active" : ""}><a>{e.name}</a></li>
                        ))}
                        <li onClick={() => setCurrent('add user')} className={(current == 'add user') ? "is-active" : ""}><a>add Trader</a></li>
                    </ul>
                </div>

                {(current === 'add user') ? (<>
                    <Request></Request>
                </>) : (<>
                    {accounts.map((e: any) => (
                        <div key={e.name} className={`${(current == e.name) ? "" : "is-hidden"} tile is-ancestor`}>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <p className="is-size-4	">Assets</p>
                                    {(e.stock.length === 0) ? (<>
                                        <h1 className='has-text-centered is-size-2'>No Stock Own</h1>
                                    </>) : (<>
                                        <PieChart stocks={e.stock}></PieChart>
                                    </>)}


                                </div>
                            </div>
                            <div className="tile is-4 is-vertical is-parent">
                                <div className="tile is-child box">
                                    <p className="is-size-4	">Balance</p>
                                    Balance:infinite
                                </div>
                                <div className="tile is-child box">
                                    <p className="is-size-4	">Transaction History</p>

                                    {(e.transaction_history.length === 0) ? (<>
                                        <h1 className='has-text-centered is-size-2'>No Transaction Made</h1>
                                    </>) : (<>

                                        <History history={e.transaction_history}></History>

                                    </>)}



                                </div>
                            </div>

                        </div>
                    ))}
                </>)}



            </main>

        </div>
    )
}
