import { React } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';

function Layout() {
    const pageMotion = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0, transition: { duration: 1 } },
        exit: { opacity: 0, x: 0, transition: { duration: 1 } }, //exit is not being used at the moment
    };

    return (
        <div className="App font-mono bg-gray-100 ">
            <nav>
                <ul className="flex flex-row justify-center ">
                    <li>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageMotion}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                className="px-4 py-4 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300"
                                to="/"
                            >
                                Home
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageMotion}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                className="px-4 py-4 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300"
                                to="/myoldneighbor"
                            >
                                My Old Neighbor
                            </Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageMotion}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                className="px-4 py-4 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300"
                                to="/lastsunday"
                            >
                                Last Sunday
                            </Link>{' '}
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={pageMotion}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                className="px-4 py-4 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300"
                                to="/secrettoyshop"
                            >
                                Secret Toy Shop
                            </Link>{' '}
                        </motion.div>
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
