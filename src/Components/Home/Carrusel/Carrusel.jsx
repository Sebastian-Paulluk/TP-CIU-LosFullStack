import { Carousel, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function Carrusel() {

    return (
        <Carousel>
            <Carousel.Item>
                <OverlayTrigger
                placement="bottom-end"
                overlay={<Tooltip id="tooltip-hyperx">Visita Hyperx</Tooltip>}
                >
                    <a href="https://www.hyperxgaming.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="d-block w-100"
                            src="/banner-hyperx.jpeg"
                            alt="Banner de Hyperx"
                        />
                        <Carousel.Caption>
                            <h3>Hyperx</h3>
                            <p>High quality gaming gear.</p>
                        </Carousel.Caption>
                    </a>
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger
                placement="bottom-end"
                overlay={<Tooltip id="tooltip-corsair">Visita Corsair</Tooltip>}
                >
                    <a href="https://www.corsair.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="d-block w-100"
                            src="/banner-corsair.jpeg"
                            alt="Banner de Corsair"
                        />
                        <Carousel.Caption>
                            <h3>Corsair</h3>
                            <p>Play to your level.</p>
                        </Carousel.Caption>
                    </a>
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger
                placement="bottom-end"
                overlay={<Tooltip id="tooltip-razer">Visita Razer</Tooltip>}
                >
                    <a href="https://www.razer.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="d-block w-100"
                            src="/banner-razer.jpeg"
                            alt="Banner de Razer"
                        />
                        <Carousel.Caption>
                            <h3>Razer</h3>
                            <p>For gamers. By gamers.</p>
                        </Carousel.Caption>
                    </a>
                </OverlayTrigger>
            </Carousel.Item>

            <Carousel.Item>
                <OverlayTrigger
                placement="bottom-end"
                overlay={<Tooltip id="tooltip-logitech">Visita Logitech</Tooltip>}
                >
                    <a href="https://www.logitech.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="d-block w-100"
                            src="/banner-logitech.jpeg"
                            alt="Banner de Logitech"
                        />
                        <Carousel.Caption>
                            <h3>Logitech</h3>
                            <p>Work. Play. Communicate.</p>
                        </Carousel.Caption>
                    </a>
                </OverlayTrigger>
            </Carousel.Item>
        </Carousel>
    );
}