'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigation(props) {
    const pathName = usePathname();
    return props.nav.map((navigationName, navigationIndex) => {
        return <li key={navigationIndex} className={`/${navigationName.toLowerCase()}` === pathName ? 'on' : ''}>
            <Link href={navigationName.toLowerCase()}>{navigationName}</Link>
        </li>
    })
}