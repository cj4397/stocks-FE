'use client';
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDatabase } from '../api';
import { useAuth } from '../auth';

export default function Market_modal(props: any) {
    const { buy } = useDatabase()
    const { modal_open, setModal, item } = props
    const { traders } = useAuth()






    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await buy(item, e.target.trader.value, e.target.invest.value)


        console.log(response)

    }




    return (
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
                                        <option key={e}>{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="icon is-small is-left">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>

                        <div className="field">
                            <p className="control has-icons-left">
                                <input name='invest' className="input" type="number" placeholder="Amount to invest in stock" required />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faPesoSign} />
                                </span>
                            </p>
                        </div>

                    </section>
                    <footer className="modal-card-foot">
                        <button type='submit' className="button is-success">Finish</button>
                        <button onClick={() => setModal(false)} className="button">Cancel</button>
                    </footer>
                </form>
            </div>
        </div>
    )
}
