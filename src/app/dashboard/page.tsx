'use client';
import React, { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero'
import Tabs from '../components/tabs/Tabs'
import PieChart from '../components/chart/Chart';
import { Request } from '../components/login/login&signup';
import { useDatabase } from '../components/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
    const [accounts, setAccounts] = useState([])
    const { trader } = useDatabase()

    async function get_data() {
        const response = await trader()
        console.log(response)
    }

    useEffect(() => {
        get_data()
    }, [])


    return (
        <main>

            <Hero name={'name'}></Hero>
            {(accounts.length !== 0) ?
                (<>
                    <Tabs accounts={'accounts'}></Tabs>

                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">Transaction History</p>

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
                </>) : (
                    <Request />
                )
            }


        </main>
    )
}
