import { Link } from "react-scroll"

export const MenuHomeLink =({target, name, offset, onClick})=>{

    const handleClick =()=> {
        onClick();
    }

    return (
        <Link
            to={target}
            smooth={true}
            duration={100}
            offset={offset}
            className='opcion-menu-home'
            onClick={handleClick}
        >
            {name}
        </Link>
    )
}