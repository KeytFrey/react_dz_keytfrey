import './nav.css';

const menu = [{name: "punkt1"}, {name: "punkt2"}, {name: "punkt3"}, {name: "punkt4"}, {name: "punkt5"}]

function Nav() {
    return (
        <ul className='nav'>
            {menu.map(item => (
                <li className="navli"><a href="#">{item.name}</a></li>
            ))}
        </ul>
    )
}

export default Nav;