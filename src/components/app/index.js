import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import Catalog from '../Catalog';
import CatalogHocks from '../CatalogHocks';


import React from 'react';


class App extends React.Component {



    render() {
        return (
            <div>
                <Header />
                <div className="body">
                <h2>Компонент каталога на React Class</h2>
                    <Catalog />
                    <h2>Компонент каталога на React Hocks</h2>
                    <CatalogHocks />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;