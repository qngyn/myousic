import { LuSunset, LuSunrise } from 'react-icons/lu';
const Header = (props) => {
    const handleToggleLight = () => {
        props.toggleLight();
    }

    const headerClass = props.light? 'header-light' : 'header-dark';
    return (
        <header>
            <div>

            </div>
            <div>
                <div onClick={handleToggleLight}>
                    {props.light ? <LuSunset /> : <LuSunrise /> }
                </div>
            </div>
        </header>
    )
}

export default Header;