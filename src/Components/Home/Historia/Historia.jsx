import React from 'react'
import './Historia.scss'

export default function Historia() {
  return (
    <div className='historia' id='historia'>
        <h2>Quiénes Somos</h2>
        <h3>Nuestra Historia</h3>
        <p>
          En el año 2018, en Buenos Aires, nació TecnoMax, una empresa familiar con la pasión por la tecnología y un sueño claro: ofrecer a los entusiastas 
          de la informática los mejores componentes de PC y hardware del mercado. Nuestros fundadores, Ana y Martín González, vieron una oportunidad para crear un negocio que no solo vendiera 
          productos, sino que también compartiera conocimiento y soluciones tecnológicas innovadoras.
        </p>

        <p>
          Todo esto surgió a raíz de que, ambos, solíamos ver distintos youtubers del mundo gaming, como "AuronPlay", "TheGrefg", "Vegeta777", "WillyRex", "El Rubius", entre otros. Pero un día nos 
          topamos con un video de una empresa de hardware española que le había armado un PC <b>bestial</b> al Rubius. Acá el video:
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DnnzFUTYXIw?si=pGRuFxg8DLXIyrep"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className='video-historia'
        >
        </iframe>
        
        <p>  
          Cuando vimos el video, no entendimos mucho de lo que hablaban, pero nos fascinó 
          y empezamos a investigar sobre el tema. A partir de ahí, empezamos a ver videos de "Benchmarking", "Reviews", "Unboxings", "Tutoriales", "Overclocking", "Watercooling", "Custom Loops", y 
          aprendimos mucho del tema. Entonces, decidimos que queríamos armar nuestra propia PC, y así lo hicimos. Luego, empezamos a armar PCs para amigos y familiares, y nos dimos cuenta de que 
          podíamos hacer de esto un negocio. Y así fue como nació TecnoMax.  
        </p>

        <p>
          Empezamos con una modesta tienda física donde atendíamos a la comunidad local, brindando asesoramiento personalizado y soluciones a medida. Gracias a la dedicación, la calidad de nuestros 
          productos y el boca a boca de nuestros satisfechos clientes, rápidamente crecimos y nos expandimos. En 2020, dimos el gran paso al mundo digital, lanzando nuestra tienda en línea para llegar 
          a todo el país y más allá.
        </p>

        <h3>Nuestra Filosofía</h3>
        <p>
          En TecnoMax, creemos que la tecnología puede transformar vidas. Por ello, nos guiamos por tres pilares fundamentales: <strong>Calidad</strong>, <strong>Innovación</strong> y <strong>Servicio al Cliente</strong>.</p>

        <h3>Calidad</h3>
        <p>Cada componente y producto que ofrecemos ha sido cuidadosamente seleccionado por su rendimiento, durabilidad y reputación en el mercado. Trabajamos con las marcas más prestigiosas para asegurarnos de que nuestros clientes reciban solo lo mejor.</p>

        <h3>Innovación</h3>
        <p>Nos mantenemos siempre a la vanguardia de las últimas tendencias y avances tecnológicos. Desde los procesadores más rápidos hasta las tarjetas gráficas más potentes, nuestro catálogo está constantemente actualizado para incluir las novedades que los entusiastas de la tecnología desean.</p>

        <h3>Servicio al Cliente</h3>
        <p>Nuestro compromiso es con cada uno de nuestros clientes. Ofrecemos asesoramiento personalizado, soporte técnico de primera calidad y un servicio posventa que garantiza la satisfacción total. Estamos aquí para ayudar desde la elección del componente perfecto hasta la resolución de cualquier problema que pueda surgir.</p>

        <h3>Nuestro Compromiso</h3>
        <p>Más allá de vender productos, en TecnoMax nos comprometemos a crear una comunidad de amantes de la tecnología. Organizamos talleres, seminarios y eventos para compartir conocimiento y fomentar la pasión por el hardware y la informática. Queremos que cada cliente se sienta parte de esta gran familia tecnológica.</p>

        <h3>Visión a Futuro</h3>
        <p>Nuestra visión es clara: seguir creciendo y mejorando para ser la empresa líder en venta de componentes de PC y hardware general en América Latina. Continuaremos innovando, ofreciendo productos de calidad y brindando un servicio excepcional que nos distinga en el mercado.</p>
    </div>
  )
}
