---

# Página Web - Portafolio

Este proyecto es una aplicación web construida con **Next.js** y **React**, que incluye una sección de portafolio y utiliza **Strapi** como backend para la gestión de contenidos. La aplicación permite la visualización dinámica de datos mediante el uso de **fetch** para obtener información de Strapi de manera asíncrona.

## Características

- **Next.js**: Utilizamos Next.js para la generación de páginas y componentes de React, lo que permite un rendimiento optimizado y una fácil configuración para el renderizado del lado del servidor (SSR).
- **React**: La estructura del proyecto se basa en componentes reutilizables, lo que facilita el desarrollo y mantenimiento de la interfaz de usuario.
- **Páginas asíncronas**: Las páginas que consumen datos del backend son renderizadas de forma asíncrona mediante `fetch`, asegurando una experiencia de usuario fluida y reactiva.
- **Strapi**: Integramos Strapi como CMS (Content Management System), permitiendo la creación, gestión y actualización de los datos que se muestran en la web, como imágenes, títulos y descripciones.
- **Portafolio**: La aplicación incluye una sección dedicada a proyectos del portafolio, donde se muestran trabajos previos, junto con imágenes, descripciones y enlaces a cada proyecto.

## Instalación y Uso

### Requisitos

- Node.js
- Yarn o npm
- Strapi como backend

### Instrucciones

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```

2. Ve al directorio del proyecto:

   ```bash
   cd nombre-del-repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

4. Inicia la aplicación en modo desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Para iniciar Strapi (si es parte del proyecto):

   ```bash
   cd backend
   npm run develop
   ```

### Configuración de Strapi

1. Asegúrate de tener Strapi configurado correctamente y con las colecciones de contenido necesarias, como por ejemplo:
   - Posts de blog
   - Proyectos del portafolio
   - Imágenes y otros recursos multimedia

2. Actualiza las variables de entorno del proyecto (`.env.local`) para conectar con la API de Strapi.

## Estructura del Proyecto

- **/pages**: Contiene las rutas y páginas de Next.js.
- **/components**: Componentes reutilizables de la interfaz de usuario.
- **/lib**: Lógica de conexión con el backend (fetch a la API de Strapi).
- **/styles**: Archivos CSS y estilos globales.
- **/backend**: Configuración del servidor de Strapi (opcional si está en el mismo repositorio).

## Tecnologías Utilizadas

- **Next.js** para el manejo de rutas y renderizado de las páginas.
- **React** para la construcción de la interfaz de usuario.
- **Strapi** como CMS para gestionar el contenido dinámico.
- **CSS Modules** o **styled-components** para los estilos de la página.

## Sección de Portafolio

La sección de portafolio muestra una serie de proyectos cargados desde Strapi. Cada proyecto incluye:

- Imagen destacada
- Título del proyecto
- Descripción breve
- Enlace al proyecto o repositorio
- Categorías y tecnologías utilizadas

Los datos se obtienen mediante solicitudes asíncronas a la API de Strapi y se renderizan en componentes React utilizando técnicas de renderizado eficiente como `getStaticProps` o `getServerSideProps` de Next.js.

## Contribuciones

Si deseas contribuir a este proyecto, puedes hacer un fork y enviar un pull request con tus cambios.

---



![Screenshot 2024-09-10 003709](https://github.com/user-attachments/assets/dc1395ad-05fa-4e30-9da1-72389c662788)
![Screenshot 2024-09-10 003716](https://github.com/user-attachments/assets/82451501-38c2-47cb-8535-2284430d8446)
![Screenshot 2024-09-10 003836](https://github.com/user-attachments/assets/dd6eb81b-3a1c-4a5e-9a48-9ae6c17db7a3)
