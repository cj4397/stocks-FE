'use client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown(props: any) {
    const { data, get_data, date, setModal } = props
    const [active, setActive] = useState(false)

    const show = (data: any) => {

        get_data(data)
        if (date === true) {
            setModal('history')
        } else {
            setModal('stock')
        }


    }


    return (
        <div onClick={() => setActive(active ? false : true)} className={`${active && 'is-active'} dropdown`}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>
                        {date ? (<>
                            History
                        </>) : (<>
                            Stocks
                        </>)}
                    </span>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">

                    {data.map((item: any) => (
                        <button onClick={() => show(item)} key={item.id} className="dropdown-item">
                            {date ? (<>
                                {item.created_at}
                            </>) : (<>
                                {item.name}
                            </>)}


                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
