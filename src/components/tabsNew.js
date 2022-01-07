import React from 'react';
import Storyboard from './storyboard-main';
import { motion } from 'framer-motion';

function TabsNew({ items }) {
    const [active, setActive] = React.useState(null);

    const openTab = (e) => setActive(+e.target.dataset.index);

    return (
        <div>
            <motion.button
                className="absolute right-0 mt-8 mr-8"
                whileHover={{ scale: 2, color: 'red' }}
                onClick={() =>
                    localStorage.clear() + window.location.reload(false)
                }
            >
                clear
            </motion.button>
            <div className="tab">
                {items.map((n, i) => (
                    <motion.button
                        className={`tablinks ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                        key={i}
                        className="h-10 px-6 m-1 md:m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300 "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {n.title}
                    </motion.button>
                ))}
            </div>
            {!items[active] && (
                <>
                    <motion.div
                        className="text-2xl text-violet-800 md:mt-64 mt-8"
                        animate={{
                            scale: [1, 2, 2, 1, 1.5, 1.2],

                            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                        }}
                    >
                        👆 Choose a story to begin.
                    </motion.div>
                </>
            )}

            {items[active] && (
                <Storyboard
                    {...items[active]}
                    selectedText={items[active].content}
                    privateWord={items[active].title}
                ></Storyboard>
            )}
        </div>
    );
}

export default TabsNew;
