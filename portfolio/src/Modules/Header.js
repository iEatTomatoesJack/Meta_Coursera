import './CSS/Header.css';
import pic from "./Images/Jack.jpg"


function Header (){
    return (
        <div className="header">
            <header >
                <h1 className="name">Jack Anjel's</h1>
                <img className="photo" src={pic} alt="Jack's Photo"/>
                <h3 className="portfolio">PORTFOLIO</h3>
            </header>
            <hr/>
        </div>
    );
}

export default Header;