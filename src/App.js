import React from 'react';

import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
// import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <MemeGenerator></MemeGenerator>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default App;
