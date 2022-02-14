import './nav.css';

import React, {useState, useEffect} from 'react';

function Nav() {
    let [menu, setMenu] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/menu.json')
        .then((menu) => menu.json())
        .then((menu) =>
            setMenu(menu)
        )
    }, [])

    return (
        <div>
            <ul className='nav'>
                {menu.map(item => (
                    <li className='navli' key={item.name}><a href={item.name}>{item.name}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Nav;