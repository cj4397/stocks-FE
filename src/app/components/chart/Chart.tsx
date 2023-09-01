'use client';
import React, { useState } from 'react'

import ReactECharts from 'echarts-for-react';
import Asset_modal from '../modal/Asset_modal';

export default function PieChart(props: any) {
    const [modal_open, setModal] = useState(false)
    const [item, setItem] = useState({})

    const { stocks } = props
    let stock_names: any[] = []
    let stock_value: any[] = []

    stocks.forEach((e: any) => {
        stock_names.push(e.name)
        stock_value.push({ value: e.asset, name: e.name })
    });

    const get_item = (item: any) => {
        setItem(item)
        setModal(true)
    }

    const option = {
        title: {
            text: 'Stocks',
            subtext: 'Assets',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
        },

        series: [
            {
                name: 'Stocks',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                label: {
                    formatter: '{b} ({c}) ',
                    // show: true
                },
                data: stock_value,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <div className="tile is-ancestor">
            <div className="tile is-3 is-vertical is-parent">
                <div className="tile is-child box">
                    <ul >
                        {stocks.map((e: any) => (
                            <li onClick={() => get_item(e)} key={e.id}><a>{e.symbol}</a></li>
                        ))}

                    </ul>

                </div>
            </div>
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <ReactECharts
                        option={option}
                    />

                </div>
            </div>

            {modal_open && <Asset_modal modal_open={modal_open} setModal={setModal} item={item} />}

        </div>

    )
}
