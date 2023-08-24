'use client';
import React from 'react'

export default function Hero(props: any) {
    return (
        <section className="hero is-small">
            <div className="hero-body">
                <p className="title">
                    Welcome Back!
                </p>
                <p className="subtitle">
                    {props.name}
                </p>
            </div>
        </section>
    )
}
