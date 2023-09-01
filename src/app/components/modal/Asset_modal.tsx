import React from 'react'

export default function Asset_modal(props: any) {
    const { modal_open, setModal, item } = props

    return (
        <div className={`${modal_open ? 'is-active' : ''} modal`}>
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
                                <p className="heading">Currency</p>
                                <p className="title">{item.currency}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Cost</p>
                                <p className="title">{item.amount}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Asset</p>
                                <p className="title">{item.asset}</p>
                            </div>
                        </div>



                    </nav>



                </section>
                <footer className="modal-card-foot">

                    <button onClick={() => setModal(false)} className="button">Cancel</button>
                </footer>

            </div>
        </div>
    )
}
