'use client'

import Link from "next/link";

function handleClick(e) {
    e.preventDefault();
    e.target.classList.add('on');
}

export default function Navigation(props) {
    return props.nav.map((navigationName, navigationIndex) => {
        return <li key={navigationIndex}>
            <Link onClick={handleClick} href={navigationName}>{navigationName}</Link>
        </li>
    })
}