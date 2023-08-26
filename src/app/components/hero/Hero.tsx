'use client';
import React from 'react'
import { useAuth } from '../auth'

export default function Hero() {
    const { name } = useAuth()
    return (
        <section className="hero is-small">
            <div className="hero-body">
                <p className="title">
                    Welcome Back!
                </p>
                <p className="subtitle">
                    {name}
                </p>
            </div>
        </section>
    )
}
