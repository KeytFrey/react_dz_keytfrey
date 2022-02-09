import './catalog.css';
import Card from  '../Card';

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

    render() {
        let cars = this.state.cars
        let cars2 = this.state.cars2

        return (
            <div>
                <div className="Catalog">
                    {cars.map(car => (
                        <Card data={car} />
                ))}
                </div>
                <div className="Catalog">
                    {cars2.map(car => (
                        <Card data={car} />
                ))}
                </div>
            </div>
        )
    }
}

export default Catalog;