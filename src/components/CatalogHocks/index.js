import './catalog.css';

import CardHocks from "../CardHocks";
import {useState, useEffect} from 'react';


function CatalogHocks (props) {

    const [cars, setCars] = useState([])

    useEffect(() =>{

        fetch('http://localhost:3000/cars.json')
            .then((cars) => cars.json())
            .then((cars) =>
                setCars(cars)
            )
    }, [])


   function deleteCars (index) {
    cars.splice(index, 1)
    setCars([...cars])
}

    return (
        <div>
            <div className='Catalog'>
                {cars.map((car, index) => (
                    <div key={car.id}>
                        <CardHocks data={car}/>
                        <button className='btndel' onClick={() => deleteCars(index)}>х</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CatalogHocks;