import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Video from './pages/video/video';

import { useState } from 'react';
import SearchResults from './components/feed/searchresult';

function App() {
    const [sidebar, setSidebar] = useState(true);
    return (
        <>
            <Navbar setSidebar={setSidebar} />
            <Routes>
                <Route path='/' element={<Home sidebar={sidebar} />} />
                <Route path='/video/:categoryId/:videoId' element={<Video />} />
                <Route path='/search/:query' element={< SearchResults/>} /> {/* Add the search route */}
            </Routes>
        </>
    );
}

export default App;
