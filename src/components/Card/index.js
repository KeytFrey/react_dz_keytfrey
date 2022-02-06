import './card.css';

function Card({data: {name, price, img}}) {
    return (
        <div class="card">
            <div class="card-img">
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