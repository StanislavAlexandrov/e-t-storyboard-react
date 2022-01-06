import React from 'react';
import { motion } from 'framer-motion';

function Tabs({ items }) {
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
            <div className="tab">
                {items.map((n, i) => (
                    <motion.button
                        className={`tablinks ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                        key={i}
                    >
                        {n.title}
                    </motion.button>
                ))}
            </div>
            {items[active] && <TabContent {...items[active]} />}
        </div>
    );
}

export default Tabs;
