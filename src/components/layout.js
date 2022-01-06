import { React } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavLinkTemplate from './nav-link-template';
import '../App.css';

function Layout() {
    return (
        <div className="App font-mono bg-gray-100 ">
            <nav>
                <ul className="flex flex-row justify-center ">
                    <li>
                        <NavLinkTemplate route="/" nav="Home"></NavLinkTemplate>
                    </li>
                    <li>
                        <NavLinkTemplate
                            route="/myoldneighbor"
                            nav="My Old Neighbor"
                        ></NavLinkTemplate>
                    </li>
                    <li>
                        <NavLinkTemplate
                            route="/lastsunday"
                            nav="Last Sunday"
                        ></NavLinkTemplate>
                    </li>
                    <li>
                        <NavLinkTemplate
                            route="/secrettoyshop"
                            nav="Secret Toy Shop"
                        ></NavLinkTemplate>
                    </li>
                </ul>
            </nav>
            <hr />
            <motion.button
                className="absolute right-0 mt-8 mr-8"
                whileHover={{ scale: 2, color: 'red' }}
                onClick={() => localStorage.clear()}
            >
                clear
            </motion.button>

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

export default Layout;
