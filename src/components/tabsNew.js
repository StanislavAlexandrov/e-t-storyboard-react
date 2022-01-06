import React from 'react';
import Storyboard from './storyboard-main';
import { motion } from 'framer-motion';

const pageMotion = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } }, //exit is not being used at the moment
};

function TabsNew({ items }) {
    const TabContent = ({ title, content }) => (
        <div className="tabcontent">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );

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
                        className="h-10 px-6 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300 "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {n.title}
                    </motion.button>
                ))}
            </div>
            {!items[active] && <h1>Choose a story to begin.</h1>}
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
