import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPesoSign } from '@fortawesome/free-solid-svg-icons';

export default function Market_modal(props: any) {
    const { modal_open, setModal, item } = props

    return (
        <div><div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{item.name}</p>
                    <button onClick={() => setModal(false)} className="delete" aria-label="close"></button>
                </header>
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

                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="number" placeholder="Amount to invest in stock" />
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faPesoSign} />
                            </span>
                        </p>
                    </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Finish</button>
                    <button onClick={() => setModal(false)} className="button">Cancel</button>
                </footer>
            </div>
        </div></div>
    )
}
