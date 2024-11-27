import Carrusel from "./Carrusel/Carrusel"
import GaleriaDeFotos from "./GaleriaDeFotos/GaleriaDeFotos"
import Historia from "./Historia/Historia"
import MenuHome from "./MenuHome/MenuHome"
import Ubicacion from "./Ubicacion/Ubicacion"

export const Home = () => {
    return (
        <div className="home">
            <MenuHome />
            <Carrusel />
            <Historia />
            <GaleriaDeFotos />
            <Ubicacion />
        </div>
    )
}