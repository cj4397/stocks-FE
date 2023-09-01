'use client';
import React, { useState } from 'react'
import History_modal from '../modal/History_modal';


export default function History(props: any) {
    const [modal_open, setModal] = useState(false)
    const [user, setUser] = useState({})
    const [stock, setStock] = useState({})
    const [date, setDate] = useState('')
    const { history } = props



    const stock_list = history
    const [current_page, setCurrentPage] = useState(1)

    const per_page = 3
    const total_pages = Math.ceil(stock_list.length / per_page);

    const show = stock_list.slice((current_page - 1) * per_page, current_page * per_page)

    const getdata = (trader: any, stock: any, date: string) => {
        setUser(JSON.parse(trader))
        setStock(JSON.parse(stock))
        setDate(date)

        setModal(true)
    }

    const re_date = (date: any) => {

        const original = new Date(date)
        const result = `${original.getMonth().toString().padStart(2, '0')}  -  ${original.getDay().toString().padStart(2, '0')}  -  ${original.getFullYear()}`
        return result
    }

    return (

        <div className='w-100 '>

            <table className='table w-100'>
                <thead>
                    <tr>

                        <th>Date</th>

                    </tr>
                </thead>

                <tbody>
                    {show.map((e: any) => (
                        <tr onClick={() => getdata(e.trader_info, e.stock_info, re_date(e.updated_at))} key={e.id}>

                            <td>{re_date(e.updated_at)}</td>
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
            {modal_open && <History_modal setModal={setModal} modal_open={modal_open} date={date} user={user} stock={stock} />}

        </div>
    )
}

