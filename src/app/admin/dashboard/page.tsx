'use client';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function page() {
    const route = useRouter();
    route.push('/admin/dashboard/users')
    return (
        <div>page</div>
    )
}
