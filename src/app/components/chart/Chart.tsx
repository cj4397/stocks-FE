'use client';
import React from 'react'

import ReactECharts from 'echarts-for-react';

export default function PieChart(props: any) {
    const { stocks } = props


    const option = {
        title: {
            text: 'Stocks',
            subtext: 'Assets',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问']
        },
        series: [
            {
                name: 'Stocks',
                type: 'pie',
                radius: '60%',
                center: ['50%', '60%'],
                data: [
                    { value: 335, name: '直接访问' },

                ],
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
        <div>

            <ReactECharts
                option={option}

            />



        </div>
    )
}
