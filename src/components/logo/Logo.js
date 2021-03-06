import react from "react";
import Tilt from "react-tilt";
import './Logo.css';
import logo from './logo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"><img src={logo} alt='logo'></img></div>
            </Tilt>
        </div>
        
    );
}

export default Logo;