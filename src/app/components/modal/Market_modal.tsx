'use client';
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

import { useDatabase } from '../api';
import { useAuth } from '../auth';

export default function Market_modal(props: any) {
    const { buy, sell } = useDatabase()
    const { modal_open, setModal, item } = props
    const { traders } = useAuth()
    const [asset, setAsset]: any = useState()
    const [sells, setSell] = useState(false)
    const [purchase, setBuy] = useState(false)
    const [amount, setAmount]: any = useState()
    const [max, setMax] = useState(0)
    const [loader, setLoader] = useState(false)



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoader(true)
        if (purchase) {
            const response = await buy(item, e.target.trader.value, e.target.invest.value)
            if (response) {
                setModal(false)
                setLoader(false)
            } else {
                alert("error")
                setLoader(false)
            }

        } else {
            const response = await sell(item, e.target.trader.value, e.target.sell.value)
            if (response) {
                setModal(false)
                setLoader(false)
            } else {
                alert("error")
                setLoader(false)
            }
        }


    }

    const mode = (mode: any, asset?: any) => {
        if (mode == 'buy') {
            setBuy(true)
            setSell(false)
        } else {
            setBuy(false)
            setSell(true)
            setMax(asset)
        }
    }


    return (
        <>
            {loader ? (<>
                <div className='h-100 is-flex is-justify-content-center is-align-items-center'>
                    <FontAwesomeIcon icon={faCog} spin />

                </div>
            </>) : (<>
                <div className={`${modal_open ? 'is-active' : ''} modal`}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">{item.name}</p>
                            <button onClick={() => setModal(false)} className="delete" aria-label="close"></button>
                        </header>
                        <form onSubmit={handleSubmit}>
                            <section className="modal-card-body">

                                <nav className="level is-mobile">
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading"><abbr title='Percent Change'>%.C.</abbr></p>
                                            <p className="title">{item.percent_change}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Currency</p>
                                            <p className="title">{item.price.currency}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Amount</p>
                                            <p className="title">{item.price.amount}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Symbol</p>
                                            <p className="title">{item.symbol}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered">
                                        <div>
                                            <p className="heading">Volume</p>
                                            <p className="title">{item.volume}</p>
                                        </div>
                                    </div>
                                </nav>

                                <div className="control has-icons-left">

                                    <div className="select">
                                        <select name='trader' placeholder='User' required>
                                            <option value="" disabled>Select Trader</option>
                                            {traders.map((e: any) => (
                                                <option key={e.trader}>{e.trader}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                </div>

                                <div className="buttons">
                                    <button onClick={() => mode('buy')} className='button'>Buy</button>
                                    {traders.map((e: any) => (
                                        <div key={e.trader}>
                                            {e.stock.map((s: any) => (
                                                <div key={s.name}>
                                                    {(s.name == item.name) &&
                                                        <>
                                                            <button onClick={() => mode('sells', s.asset)} className='button'>Sell</button>
                                                        </>
                                                    }
                                                </div>
                                            ))}

                                        </div>
                                    ))}
                                </div>

                                {purchase && <div className="field">
                                    <label>Invest</label>
                                    <p className="control has-icons-left">
                                        <input name='invest' onChange={(e: any) => setAsset(e.target.value / item.price.amount)} className="input" type="number" placeholder="Amount to invest in stock" required />
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon={faPesoSign} />
                                        </span>
                                    </p>
                                    <div className="control">
                                        <label >Asset</label>
                                        <input className="input" value={asset} type="number" placeholder="Asset" disabled />
                                    </div>
                                </div>}

                                {sells && <div className="field">
                                    <label>Sell</label>
                                    <p className="control ">
                                        <input name='sell' onChange={(e: any) => setAmount(item.price.amount * e.target.value)} className="input" type="number" placeholder="Asset to sell" max={max} required />
                                    </p>
                                    <div className='field'>
                                        <label >Amount</label>
                                        <p className="control has-icons-left">
                                            <input className="input" value={amount} type="number" placeholder="Asset" disabled />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faPesoSign} />
                                            </span></p>
                                    </div>
                                </div>}



                            </section>
                            <footer className="modal-card-foot">
                                <button type='submit' className="button is-success">Finish</button>
                                <button onClick={() => setModal(false)} className="button">Cancel</button>
                            </footer>
                        </form>
                    </div>
                </div>
            </>)}

        </>)
}
