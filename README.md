# TecnoMax - Tienda de Hardware 🖥️

## Descripción
TecnoMax es un e-commerce de componentes y hardware para PC. Desarrollado como trabajo práctico para la materia Construcción de Interfaces de Usuario.

## Características principales
- 🛍️ Catálogo de productos
- 🛒 Carrito de compras
- 📱 Diseño responsive
- 🎯 Secciones informativas (Historia, Galería, Contacto, Ubicación)
- 🔍 Detalles de productos y fabricantes
- 🖱️ Detalles de los componentes de cada producto

## Tecnologías utilizadas
- React.js
- SASS
- React Bootstrap
- React Router DOM
- React Grid Gallery
- React Scroll

## Uso | Ejecución

### Sin instalaciones

1. Ingresá al link de [TecnoMax](https://tecno-max.vercel.app/)

Y ¡Listo! Ya está alojada y desplegada la app web en [Vercel](https://vercel.com/), en el caso del front-end, y en [Railway](https://railway.app/), en el caso del back-end.

### El back-end con instalaciones

1. Clonar el repositorio

    ```git clone https://github.com/Sebastian-Paulluk/TecnoMax-Api.git```

2. Teniendo [Docker desktop](https://www.docker.com/products/docker-desktop/) instalado, ejecutalo.

3. Para crear una imagen de la aplicación y versionarla con Docker, debés ubicarte en la raíz del proyecto y ejecutar el siguiente comando:

    ```docker build -t tecnomax-image:1.0.0 .```

4. Ahora, para poder correr la apliación en un contendor de Docker, ejecutá el siguiente comando:

    ```docker-compose up -d```

### El front-end con instalaciones

1. Clonar el repositorio

    ```git clone https://github.com/Sebastian-Paulluk/TP-CIU-LosFullStack.git```

2. Instalar dependencias

    ```npm install```

3. Iniciar servidor de desarrollo

    ```npm run dev```