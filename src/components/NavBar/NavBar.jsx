import React from 'react';
import Link from './Link';

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
    return (
        <nav>
            <ul className='flex'>
                {
                    navItemsData.map(route => <Link key={route.id} route={route}></Link>)
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


        </nav>
    );
};

export default NavBar;