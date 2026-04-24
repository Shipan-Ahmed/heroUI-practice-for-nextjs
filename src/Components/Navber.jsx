import Link from 'next/link';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const Navber = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background">
            <header className="flex h-16 items-center justify-between px-6">
                <div>Logo</div>
                <ul className="flex items-center gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tasks">Tasks</Link></li>
                    <li><Link href="/hero">Hero</Link></li>
                </ul>
                <div>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </header>
        </nav>
    );
};

export default Navber;