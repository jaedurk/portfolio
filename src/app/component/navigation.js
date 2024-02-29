'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigation(props) {
    const pathName = usePathname();
    console.log('pathName : ', pathName);
    return props.nav.map((navigationName, navigationIndex) => {
        console.log('navigationName : ', navigationName);
        return <li key={navigationIndex} className={'/' + navigationName === pathName ? 'on' : ''}>
            <Link href={navigationName}>{navigationName}</Link>
        </li>
    })
}