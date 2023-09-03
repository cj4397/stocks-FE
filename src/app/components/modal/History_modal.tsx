import React from 'react'

export default function History_modal(props: any) {
    const { modal_open, setModal, user, stock, date } = props
    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{date}</p>
                    <button onClick={() => setModal(false)} className="delete" aria-label="close"></button>
                </header>

                <section className="modal-card-body">
                    <div>
                        <h4 className='has-text-centered is-size-4 mb-3'>{user.name}</h4>
                        <nav className="level is-mobile">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Money</p>
                                    <p className="title">{user.invest}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Asset</p>
                                    <p className="title">{user.bought}</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <br />
                    <div>
                        <h4 className='has-text-centered is-size-4 mb-3'>{stock.name}</h4>
                        <nav className="level is-mobile">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading"><abbr title='Percent Change'>%.C.</abbr></p>
                                    <p className="title">{stock.percent_change}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Currency</p>
                                    <p className="title">{stock.currency}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Amount</p>
                                    <p className="title">{stock.amount}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Symbol</p>
                                    <p className="title">{stock.symbol}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Volume</p>
                                    <p className="title">{stock.volume}</p>
                                </div>
                            </div>
                        </nav>
                    </div>




                </section>
                <footer className="modal-card-foot">

                    <button onClick={() => setModal(false)} className="button">Cancel</button>
                </footer>

            </div>
        </div>
    )
}
