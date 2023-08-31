import React, { useState } from 'react';
import Storyboard from './storyboard-main';
import { motion } from 'framer-motion';

function TabsNew({ items }) {
    // state to keep track of the currently active tab
    const [active, setActive] = useState(null);

    // function to set the active tab
    const openTab = (index) => setActive(index);

    return (
        <div>
            {/* Button to clear local storage and reload the page */}
            <motion.button
                className="absolute right-0 mt-8 mr-8"
                whileHover={{ scale: 2, color: 'red' }}
                onClick={() => {
                    localStorage.clear();
                    window.location.reload(false);
                }}
            >
                clear
            </motion.button>
            {/* List of tabs */}
            <div className="tab">
                {items.map((item, index) => (
                    <motion.button
                        // apply 'active' class if this tab is active
                        className={`tablinks ${
                            index === active ? 'active' : ''
                        } h-10 px-6 m-1 md:m-6 font-semibold rounded-md bg-black text-white focus:ring focus:ring-violet-300`}
                        // set this tab as active when clicked
                        onClick={() => openTab(index)}
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item.title}
                    </motion.button>
                ))}
            </div>
            {/* Display message if no tab is active, otherwise display the content of the active tab */}
            {!items[active] ? (
                <motion.div
                    className="text-2xl text-violet-800 md:mt-64 mt-8"
                    animate={{
                        scale: [1, 2, 2, 1, 1.5, 1.2],
                        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                    }}
                >
                    👆 Choose a story to begin.
                </motion.div>
            ) : (
                <Storyboard
                    {...items[active]}
                    selectedText={items[active].content}
                    privateWord={items[active].title}
                />
            )}
        </div>
    );
}

export default TabsNew;
