



export default function Modal_TH(props: any) {
    const { data, active, setActive, mode } = props


    const stock = JSON.parse(data.stock_info)
    const user = JSON.parse(data.trader_info)




    return (
        <div className={`${active && 'is-active'} modal`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">
                        {(mode === 'history') ? (<>
                            {data.created_at}
                        </>
                        ) : (
                            <>
                                {data.name}
                            </>
                        )}

                    </p>
                    <button onClick={() => setActive(false)} className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">

                    {(mode === 'history') ? (<>
                        <nav className="level">
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
                                    <p className="heading"><abbr title="Percent Change">%. C</abbr></p>
                                    <p className="title">{data.percent_change}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Volume</p>
                                    <p className="title">{data.volume}</p>
                                </div>
                            </div>
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Symbol</p>
                                    <p className="title">{data.symbol}</p>
                                </div>
                            </div>
                        </nav>
                    </>) : (<>
                        <nav className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">Name</p>
                                    <p className="title">{user.name}</p>
                                </div>
                            </div>
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

                        <div>
                            <p className="has-text-centered title">{stock.name}</p>
                            <nav className="level">
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
                                        <p className="heading"><abbr title="Percent Change">%. C</abbr></p>
                                        <p className="title">{stock.percent_change}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Volume</p>
                                        <p className="title">{stock.volume}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading">Symbol</p>
                                        <p className="title">{stock.symbol}</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </>)}




                </section>
                <footer className="modal-card-foot">
                    <button onClick={() => setActive(false)} className="button">Close</button>
                </footer>
            </div>
        </div>
    )
}
