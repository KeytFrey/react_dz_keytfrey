const cars = [
    { name: 'BMW M2 Coupe', price: 20000, img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg' },
    { name: 'Audi TT', price: 15000, img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598' },
    { name: 'Rolls Royce', price: 50000, img: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg' },
    { name: 'Mercedes amg coupe', price: 18000, img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2' }
  ]

const menu = [{name: "punkt1"}, {name: "punkt2"}, {name: "punkt3"}, {name: "punkt4"}, {name: "punkt5"}]


function Nav({data1}) {
    return (
            <li className="navli"><a href="#">{data1.name}</a></li>
    )
}

function Card({data}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={data.img} alt={data.name}></img>
            </div>
            <h3>{data.name}</h3>
            <p>{data.price} $</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <header>
                <a className="logo" href="#">Auto</a>
                <ol className="nav">
                    {menu.map(car => <Nav data1 = {car} />)}
                </ol>
            </header>
            <div className="list">
                {cars.map(car => <Card data={car} />)}
            </div>
            <footer>
                <div className="copyright">&copy; Copyright - EsyUm &nbsp; <div className="year">{new Date().getFullYear()}</div> &nbsp; Stavtseva Ekaterina</div>
            </footer>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('.app'),
)