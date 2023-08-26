'use client';
import React, { useState } from 'react'
import { useDatabase } from '@/app/components/api';



export default function Table(props: any) {
    const { users, mode, setRefresh, refresh } = props
    const { admin_confirm } = useDatabase()
    const stock_list = users
    const [current_page, setCurrentPage] = useState(1)

    const per_page = 10
    const total_pages = Math.ceil(stock_list.length / per_page);

    const show = stock_list.slice((current_page - 1) * per_page, current_page * per_page)

    const get_user = (user: any) => {
        console.log(user)
    }

    const approve = (nickname: string, email: string) => {
        async function get_data(nickname: string, email: string) {
            const response = await admin_confirm(nickname, email);
            setRefresh(refresh ? false : true)
            console.log(response)
        }

        get_data(nickname, email)

    }

    const remove = (user: any) => {
        async function get_data(email: string) {
            // const response = await admin_confirm(email);
            // console.log(response)
        }
        get_data(user)
        console.log(user)
    }




    return (

        <div className='w-100 '>

            <table className='table w-100'>
                <thead>
                    <tr>
                        {(mode === 'request') ? (
                            <>
                                <th>Nickname</th>
                                <th>Email</th>
                                <th>created_at</th>
                                <th>Approve</th>
                            </>) : (
                            <>
                                <th>Trader</th>
                                <th>Stocks</th>
                                <th><abbr title="Transaction History">T.History</abbr></th>
                                <th>created_at</th>
                            </>)}


                    </tr>
                </thead>

                <tbody>
                    {show.map((e: any) => (
                        <tr key={e.id} onClick={() => get_user(e)}>
                            {(mode === 'request') ? (
                                <>
                                    <th >{e.nickname}</th>
                                    <td>{e.email}</td>
                                    <td>{e.created_at}</td>
                                    <td>
                                        <button onClick={() => approve(e.nickname, e.email)} className="button is-primary">Approve</button>
                                        <button onClick={() => remove(e.email)} className="button is-danger">Delete</button>
                                    </td>
                                </>) : (
                                <>
                                    <th >{e.name}</th>
                                    <td>{e.stock}</td>
                                    <td>{e.history}</td>
                                    <td>{e.created_at}</td>
                                </>)}


                        </tr>
                    ))}

                </tbody>

            </table>

            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button disabled={current_page == 1} className="pagination-previous" onClick={() => setCurrentPage(current_page - 1)}>Previous</button>
                <button disabled={current_page == total_pages} className="pagination-next" onClick={() => setCurrentPage(current_page + 1)}>Next page</button>
                <ul className="pagination-list">

                    {((current_page + 1) > 3) && <>
                        <li><a className="pagination-link" onClick={() => setCurrentPage(1)}>1</a></li>
                        {current_page != 3 &&
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                        }

                    </>}

                    {(current_page - 1 !== 0) && <li>
                        <a className="pagination-link" onClick={() => setCurrentPage(current_page - 1)}>{current_page - 1}</a></li>}



                    <li><a className="pagination-link active" >{current_page}</a></li>

                    {(current_page + 1 <= total_pages) && (
                        <>
                            <li><a className="pagination-link" onClick={() => setCurrentPage(current_page + 1)}>{current_page + 1}</a></li>

                            {(current_page + 1 !== total_pages) &&
                                <>
                                    {(current_page + 2 !== total_pages) &&
                                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                                    }


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
