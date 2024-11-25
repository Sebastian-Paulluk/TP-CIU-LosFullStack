import Carrusel from "./Carrusel/Carrusel"
import Historia from "./Historia/Historia"
import MenuHome from "./MenuHome/MenuHome"

export const Home = () => {
    return (
        <div className="home">
            <MenuHome />
            <Carrusel />
            <Historia />
        </div>
    )
}