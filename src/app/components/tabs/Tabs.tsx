'use client';
import React, { useEffect, useState } from 'react'

export default function Tabs(props: any) {
    const { accounts } = props
    const [current, setCurrent] = useState()

    return (
        <div className="tabs">
            <ul>
                {accounts.map((e: any) => (
                    <li key={e} className="is-active"><a>{e}</a></li>
                ))}
            </ul>
        </div>
    )
}
