'use client';
import React, { useState } from 'react'

import { useEffect } from 'react';


export default function Table() {
    const [stock_list, setList] = useState([])

    const [current_page, setCurrentPage] = useState(1)

    const per_page = 12
    const total_pages = Math.ceil(stock_list.length / per_page);

    const show = stock_list.slice((current_page - 1) * per_page, current_page * per_page)

    async function get_stock() {
        const response = await fetch("https://phisix-api4.appspot.com/stocks.json");
        const stocks = await response.json();
        setList(stocks.stock)
    }
    useEffect(() => {
        get_stock()

    }, [])


    console.log(stock_list);
    return (
        <div className='w-100 '>
            <table className='table w-100'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Currency</th>
                        <th>Amount</th>
                        <th>Percent_change</th>
                        <th>Volume</th>
                        <th>Symbol</th>
                    </tr>
                </thead>

                <tbody>
                    {show.map((e: any) => (
                        <tr key={e.name}>
                            <th >{e.name}</th>
                            <td>{e.price.currency}</td>
                            <td>{e.price.amount}</td>
                            <td>{e.percent_change}</td>
                            <td>{e.volume}</td>
                            <td>{e.symbol}</td>
                        </tr>
                    ))}

                </tbody>

            </table>

            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next">Next page</a>
                <ul className="pagination-list">
                    {(current_page - 1 !== 0) && <li>
                        <a className="pagination-link" onClick={() => setCurrentPage(current_page - 1)}>{current_page - 1}</a></li>}

                    <li><a className="pagination-link" >{current_page}</a></li>

                    {(current_page + 1 <= total_pages) && (
                        <>
                            <li><a className="pagination-link" onClick={() => setCurrentPage(current_page + 1)}>{current_page + 1}</a></li>
                            {(current_page + 1 !== total_pages) &&
                                <>
                                    <li><span className="pagination-ellipsis">&hellip;</span></li>

                                    <li><a className="pagination-link" onClick={() => setCurrentPage(total_pages)}>{total_pages}</a></li>
                                </>
                            }

                        </>)
                    }

                </ul>
            </nav>
        </div>
    )
}
