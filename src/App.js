import './App.css';
import { useState } from 'react';
import Storyboard from './components/storyboard-main';
import Tabs from './components/tabs';
import { motion } from 'framer-motion';
import { SECRETTOYSHOP, LASTSUNDAY, MYOLDNEIGHBOR } from './data/data-texts';
import { allTexts } from './data/data-texts';
import TabsNew from './components/tabsNew';

function App() {
    const items = [
        { title: 'London', content: 'London is the capital city of England.' },
        { title: 'Paris', content: 'Paris is the capital of France.' },
        { title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
    ];

    const [selectText, setSelectText] = useState(MYOLDNEIGHBOR);

    const handleText = (choice) => {
        setSelectText(choice);
    };
    return (
        <div className="App font-mono bg-gray-100  ">
            <div className="container mx-auto px-16 ">
                <div flex flex-row>
                    {/* <motion.button
                        onClick={() => handleText(MYOLDNEIGHBOR)}
                        className="h-10 px-6 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300 "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        My Old Neighbor
                    </motion.button>
                    <motion.button
                        onClick={() => handleText(LASTSUNDAY)}
                        className="h-10 px-6 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300 "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Last Sunday
                    </motion.button>
                    <motion.button
                        onClick={() => handleText(SECRETTOYSHOP)}
                        className="h-10 px-6 m-6 font-semibold rounded-md bg-black text-white  focus:ring focus:ring-violet-300 "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        The Secret Toy Shop
                    </motion.button> */}
                </div>

                {/*    <Storyboard selectedText={selectText} /> */}

                <TabsNew items={allTexts} />
            </div>
        </div>
    );
}

export default App;
