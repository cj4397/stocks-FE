'use client';
import React, { useEffect, useState } from 'react'
import { useDatabase } from '@/app/components/api';
import Modal from '../../components/modal/Modal';


export default function page() {
    const [item_list, setlist] = useState([])
    const { history } = useDatabase()
    const [modal_open, setModal] = useState(false)
    const [data, setData] = useState({})

    const [current_page, setCurrentPage] = useState(1)

    async function get_data() {
        const response = await history()
        response.transaction.forEach((e: any) => {
            e.trader_info = (JSON.parse(e.trader_info))
            e.stock_info = (JSON.parse(e.stock_info))
        });
        setlist(response.transaction)
    }

    useEffect(() => {
        get_data()
    }, [])

    const per_page = 10
    const total_pages = Math.ceil(item_list.length / per_page);

    const show = item_list.slice((current_page - 1) * per_page, current_page * per_page)

    const item = (history: any) => {
        setData(history)
        setModal(true)
        console.log(history)
    }

    return (
        <div className='w-100 '>

            <table className='table w-100'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Money</th>
                        <th>Asset</th>
                        <th>created_at</th>
                    </tr>
                </thead>

                <tbody>


                    {show.map((e: any) => (

                        <tr onClick={() => item(e.stock_info)} key={e.id}>

                            <th>{e.trader_info.name}</th>
                            <td>{e.trader_info.invest}</td>
                            <td>{e.trader_info.bought}</td>
                            <td>{e.created_at}</td>
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
            <Modal data={data} active={modal_open} setActive={setModal}></Modal>
        </div>
    )
}
