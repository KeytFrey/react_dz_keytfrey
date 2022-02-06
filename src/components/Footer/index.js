import './footer.css';
import './copyright.css';

import Logo from '../Logo'

function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <Logo />
            <div className="copyright">&copy; Copyright - EsyUm &nbsp; <span className="year">{year}</span> &nbsp; Stavtseva Ekaterina</div>
        </footer>
    )
}

export default Footer;