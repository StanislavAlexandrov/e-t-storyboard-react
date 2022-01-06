import './App.css';
import { allTexts } from './data/data-texts';
import TabsNew from './components/tabsNew';

function App() {
    return (
        <div className="App font-mono bg-gray-100  ">
            <div className="container mx-auto px-16 ">
                <TabsNew items={allTexts} />
            </div>{' '}
        </div>
    );
}

export default App;
