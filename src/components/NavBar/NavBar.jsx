import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navItemsData = [
    {
        id: 1,
        label: "Home",
        path: "/",
    },
    {
        id: 2,
        label: "About",
        path: "/about",
    },
    {
        id: 3,
        label: "Services",
        path: "/services",
        submenu: [
            { id: 31, label: "Web Development", path: "/services/web-development" },
            { id: 32, label: "UI/UX Design", path: "/services/ui-ux" },
            { id: 33, label: "SEO Optimization", path: "/services/seo" },
        ],
    },
    {
        id: 4,
        label: "Portfolio",
        path: "/portfolio",
    },
    {
        id: 5,
        label: "Contact",
        path: "/contact",
    },
];




const NavBar = () => {

    const [open, setOpen] = useState(false);
    const links = navItemsData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 my-4'>
            {/* mobile  */}
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }

                <ul className={`md:hidden absolute duration-1000
                    ${open ? 'top-8 ' : '-top-40'}
                    bg-red-200 text-black`}>
                    {links}
                </ul>

                <h3 className='ml-4'>My Nav Bar</h3>
            </span>
            <ul className='hidden md:flex'>
                {
                    links
                }
            </ul>
            {/* <ul className='flex'>
                {
                    navItemsData.map(route =>
                        <li className='mr-10'>
                            <a href={route.path}>{route.label}</a>
                        </li>
                    )
                }
            </ul> */}
            {/* <ul className='flex gap-2'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign in</button>
        </nav >
    );
};

export default NavBar;