import "../Card/card.css"

import {useEffect} from "react";

function Card({data: {name, price, img}}) {

    useEffect(() =>{

        console.log('Контент создан')

        return () => {
            console.log('Контент удален')
        }

    }, [])

    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={img}
                    alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{price} $</p>
        </div>
    )
}

export default Card;