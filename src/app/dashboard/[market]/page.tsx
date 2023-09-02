'use client';
import React, { useEffect, useState } from 'react'
import Table from '@/app/components/table/Table'
import { useDatabase } from '@/app/components/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default function Page({ params }: any) {
    const { market } = useDatabase()
    const [data, setData]: any = useState()
    const [loader, setLoader] = useState(true)


    async function get_data(market: any) {
        const response = await market();
        console.log(response)
        switch (params.market) {
            case 'low':
                setData(response.low)
                break;
            case 'mid':
                setData(response.mid)
                break;
            case 'high':
                setData(response.high)
                break;
        }

        setLoader(false)
    }

    useEffect(() => {
        get_data(market)

    }, [])





    return (
        <div className='w-100 h-100'>
            {loader ? (
                <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
                    <FontAwesomeIcon icon={faCog} spin />

                </div>
            ) : (<>
                <h1 className='has-text-centered is-size-2'>{data.name}</h1>
                <h3 className='has-text-centered is-size-4'>{data.details}</h3>
                <Table stocks={data.stock}></Table>
            </>)}


        </div>
    )
}
