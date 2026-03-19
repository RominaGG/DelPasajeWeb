## Del Pasaje - Sitio Web Oficial

Sitio web oficial de la banda de rock argentino **Del Pasaje**. Desarrollado para mostrar la historia de la banda, discografía, próximas fechas y galeria de fans, con una arquitectura moderna, rápida y un panel autogestionable para los músicos.

## Tecnologías Utilizadas

Este proyecto está construido con un stack moderno enfocado en la velocidad y el SEO:

* **[Astro](https://astro.build/):** Framework web pricipal. Ideal para sitios estáticos de carga ultra rápida.
* **[Contentful](https://www.contentful.com):** Headless CMS. Permite a la banda actualizar fotos, textos y fechas de shows sin necesidad de tocarr el código.
* **HTML / CSS / JavaScript (Vanilla):** Estilos personalizados, responsive design y lógica de carrouseles sin depender de librerias pesadas.

## Características Principales

* **Diseño Responsive:** Adaptado al 100% para dispositivos móviles (Hero dinámico, grillas adaptativas).
* **Gestión Dinámica:** Las imágenes, la sección Nosotros y el contenido se administran de forma remota.
* **Optimización de Imágenes:** Manejo de imágenes de fondo y logos dinámicos superpuestos.
* **Integración Multimedia:** Enlaces directos a plataformas de streaming (Spotify, YouTube, etc.).

## Instalación y Uso Local

Si querés clonar este proyecto y correrlo en tu computadora, abrí tu terminal y  seguí estos pasos:
```bash
# 1. Cloná el repositorio
git clone [https://github.com/RominaGG/DelPasajeWeb.git](https://github.com/RominaGG/DelPasajeWeb.git) 

# 2. Entra en la carpeta del proyecto
cd DelPasajeWeb

# 3. Instala las dependencias
npm install

# 4. Iniciar el servidor local
npm run dev 

```

Variables de entorno:
Para que la conexión con Contentful funcione, antes de correr el servidor necesitás crear un archivo llamado .env en la raiz del proyecto y agregar tus credenciales:

```bash

CONTENTFUL_SPACE_ID=tu_space_id
CONTENTFUL_ACCESS_TOKEN=tu_access_token

``` 

