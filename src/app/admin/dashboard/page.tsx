'use client';
import React from 'react'
import { redirect } from 'next/navigation';

export default function Page() {
    redirect('/admin/dashboard/users')

    return (
        <div>page</div>
    )
}
