import './catalog.css';
// import Card from  '../Card';

import CardHocks from "../CardHocks"

import React from 'react';

class Catalog extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            cars2: []
        }
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:3000/cars.json'
        fetch(apiUrl)
            .then((cars) => cars.json())
            .then((cars) =>
                this.setState({
                    cars: cars
                })
            )

            const apiUrl2 = 'http://localhost:3000/cars2.json'
            fetch(apiUrl2)
                .then((cars2) => cars2.json())
                .then((cars2) =>
                    this.setState({
                        cars2: cars2
                    })
                )
    }

    delete(index) {
        let cars = this.state.cars
        cars.splice(index, 1)
        this.setState({ cars })
    }

    deletetwo(index) {
        let cars2 = this.state.cars2
        cars2.splice(index, 1)
        this.setState({ cars2 })
    }

    render() {
        let cars = this.state.cars
        let cars2 = this.state.cars2

        return (
            <div>
                <div className="Catalog">
                    {cars.map((car, index) => (
                        <div key={car.id} >
                            <CardHocks data={car}/>
                            <button сlassName="btndel" onClick={() => this.delete(index)}>х</button>
                        </div>
                ))}
                </div>
                <div className="Catalog">
                    {cars2.map((car, index) => (
                        <div key={car.id} >
                            <CardHocks data={car}/>
                            <button сlassName="btndel" onClick={() => this.deletetwo(index)}>х</button>
                        </div>
                ))}
                </div>
            </div>
        )
    }
}

export default Catalog;