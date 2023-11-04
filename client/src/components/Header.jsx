import { LuSunset, LuSunrise } from 'react-icons/lu';
import './Header.css';
const Header = (props) => {
    const handleToggleLight = () => {
        props.toggleLight();
    }

    const headerClass = props.light? 'header-light' : 'header-dark';

    return (
        <header className={headerClass}>
            <div className="header-left">
                <p> App Name</p>
            </div>
            <div className="header-right">
                <div onClick={handleToggleLight}>
                    {props.light ? <LuSunset /> : <LuSunrise /> }
                </div>
            </div>
        </header>
    )
}

export default Header;