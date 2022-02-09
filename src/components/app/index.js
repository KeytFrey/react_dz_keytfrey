import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import Catalog from '../Catalog';


import React from 'react';


class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <h1>Привет мир!</h1>
                    <Catalog />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;