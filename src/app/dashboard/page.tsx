'use client';
import React, { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero'
import Tabs from '../components/tabs/Tabs'
import { Request } from '../components/login/login&signup';
import { useDatabase } from '../components/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../components/auth';




export default function Dashboard() {
    const [accounts, setAccounts] = useState([])
    const { trader } = useDatabase()
    const [loader, setLoader] = useState(true)
    const { logout, get_traders } = useAuth()




    async function get_data() {
        const response = await trader()

        console.log(response.trader)
        if (response.trader) {
            let list: any[] = []
            response.trader.forEach((e: any) => {
                let stock: any[] = []
                e.stock.forEach((s: any) => {
                    stock.push({ name: s.name, asset: s.asset })
                })
                list.push({ trader: e.name, stock: stock })
            });
            get_traders(list)
            setAccounts(response.trader)
            setLoader(false)
        } else {
            logout()
        }

    }

    useEffect(() => {
        get_data()
    }, [])


    return (
        <main>

            <Hero ></Hero>
            {loader ? (
                <>
                    <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
                        <FontAwesomeIcon icon={faCog} spin />

                    </div>
                </>
            ) : (
                <>
                    {(accounts.length !== 0) ?
                        (<>
                            <Tabs accounts={accounts}></Tabs>

                        </>) : (
                            <Request />
                        )
                    }
                </>
            )}



        </main>
    )
}
