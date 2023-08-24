'use client';
import React, { useState } from 'react'
import Hero from '../components/hero/Hero'
import Tabs from '../components/tabs/Tabs'
import PieChart from '../components/chart/Chart';

export default function Dashboard() {
    const [accounts, setAccounts] = useState([])
    return (
        <main>

            <Hero name={'name'}></Hero>
            {(accounts.length !== 0) && <Tabs accounts={'accounts'}></Tabs>}

            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="title">Three</p>

                    </div>
                </div>
                <div className="tile is-6 is-vertical is-parent">
                    <div className="tile is-child box">
                        <p className="title">One</p>

                    </div>
                    <div className="tile is-child box">
                        <p className="title">Two</p>
                        <PieChart></PieChart>
                    </div>
                </div>

            </div>
        </main>
    )
}
