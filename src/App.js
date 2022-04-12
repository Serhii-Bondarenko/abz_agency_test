import { Route, Routes } from 'react-router-dom';

import './style/index.css';
import { Layout } from './components';

function App() {
    return (
        <Routes>
            <Route path={ '/' } element={ <Layout/> } />
        </Routes>
    );
}

export default App;
