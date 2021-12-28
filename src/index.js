import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Storyboard from './components/storyboard-main';
import { LASTSUNDAY, MYOLDNEIGHBOR, SECRETTOYSHOP } from './data/data-texts';
import { AnimatePresence } from 'framer-motion';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route
                            path="myoldneighbor"
                            element={
                                <Storyboard
                                    selectedText={MYOLDNEIGHBOR}
                                    privateWord="MYOLDNEIGHBOR"
                                />
                            }
                        />
                        <Route
                            path="lastsunday"
                            element={
                                <Storyboard
                                    selectedText={LASTSUNDAY}
                                    privateWord="LASTSUNDAY"
                                />
                            }
                        />
                        <Route
                            path="secrettoyshop"
                            element={
                                <Storyboard
                                    selectedText={SECRETTOYSHOP}
                                    privateWord="SECRETTOYSHOP"
                                />
                            }
                        />
                    </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
