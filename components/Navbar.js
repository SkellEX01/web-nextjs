import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href={'/'}>
                   Coder Wikipedia
                </Link>
            </div>
            <div>
                <Link href={'/about'}>
                    About
                </Link>
                <Link href={'/coders'}>
                    All Coders
                </Link>
            </div>
        </nav>
    )
}

export default Navbar