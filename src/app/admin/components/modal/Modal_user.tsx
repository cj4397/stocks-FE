import React from 'react'

export default function Modal_user(props: any) {
    const { data, active, setActive } = props
    return (
        <div className={`${active && 'is-active'} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{data.name}</p>
                    <button onClick={() => setActive(false)} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">

                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Asset</p>
                                <p className="title">{data.asset}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Currency</p>
                                <p className="title">{data.currency}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Amount</p>
                                <p className="title">{data.amount}</p>
                            </div>
                        </div>


                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Symbol</p>
                                <p className="title">{data.symbol}</p>
                            </div>
                        </div>
                    </nav>

                </section>
                <footer className="modal-card-foot">
                    <button onClick={() => setActive(false)} className="button">Close</button>
                </footer>
            </div>
        </div>
    )

}
