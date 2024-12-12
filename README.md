# 🛠️ Aplicación de Organización de Equipos

Esta es una aplicación interactiva desarrollada con React que permite gestionar equipos de trabajo. Puedes agregar colaboradores, eliminarlos, marcar favoritos, cambiar los colores de los equipos e incluso crear nuevos equipos. Es ideal para mantener organizados tus proyectos colaborativos y para facilitar la visualización de tus equipos.

---

## 🚀 Características

### 🔹 **Agregar colaboradores**
- Completa un formulario con los datos básicos del colaborador: nombre, puesto, enlace de imagen y el equipo al que pertenece.
- Los colaboradores se añaden automáticamente al equipo seleccionado y se muestran en la sección correspondiente.

### 🔹 **Eliminar colaboradores**
- Cada colaborador tiene un icono de eliminación en forma de cruz (**X**).
- Al hacer clic, se elimina al colaborador del equipo sin necesidad de recargar la página.

### 🔹 **Marcar favoritos**
- Puedes marcar a un colaborador como favorito haciendo clic en el icono de un corazón.
- El corazón cambia de color para indicar el estado de favorito.

### 🔹 **Cambiar colores de equipos**
- Cada equipo tiene un selector de color dinámico.
- Puedes personalizar el color de cada equipo y los cambios se aplican en tiempo real.

### 🔹 **Crear nuevos equipos**
- Completa un formulario con el nombre y el color principal del equipo.
- Los nuevos equipos se añaden a la lista con todas las funcionalidades habilitadas.

---

## 🖥️ Instalación y Configuración

### 📋 Requisitos
- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 📦 Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/tu-repositorio.git
Navega al directorio del proyecto:
bash
Copiar código
cd tu-repositorio
Instala las dependencias necesarias:
bash
Copiar código
npm install
Inicia la aplicación:
bash
Copiar código
npm start
Abre tu navegador en: http://localhost:3000.
📂 Estructura del Proyecto
El proyecto está organizado en diferentes componentes reutilizables que simplifican la estructura y facilitan su mantenimiento:

📁 Componentes principales
App.jsx

Controla el estado global de la aplicación.
Contiene las funciones principales como agregar, eliminar y cambiar colores de equipos.
Header

Muestra un encabezado visual al inicio de la página.
Form

Formulario dividido en dos secciones:
Crear colaboradores.
Crear equipos.
MyOrg

Incluye un botón interactivo que alterna la visibilidad del formulario.
Team

Renderiza la información de cada equipo, incluyendo los colaboradores y las opciones de personalización.
Collaborator

Componente individual para cada colaborador con opciones de:
Eliminar.
Marcar como favorito.
Field

Componente reutilizable para los campos de entrada del formulario.
Footer

Pie de página para complementar la experiencia visual.
🧑‍💻 Funcionalidades Técnicas
🔧 Estado Global
Usa el hook useState para manejar el estado de los colaboradores y equipos de forma dinámica.
🆔 Identificadores únicos
Implementa la librería uuid para generar identificadores únicos para cada colaborador y equipo.
🎨 Colores dinámicos
Utiliza la librería hex-to-rgba para convertir colores HEX a RGBA, permitiendo personalizar fondos con opacidad.
🗂️ Filtrado de datos
Los colaboradores se agrupan dinámicamente en función del equipo seleccionado.
⚡ React Icons
Usa la librería react-icons para los botones de interacción, como eliminar y marcar favoritos.
📋 Uso de la Aplicación
1️⃣ Agregar un colaborador
Haz clic en el botón + para mostrar el formulario.
Completa los campos:
Nombre.
Puesto.
Enlace a la imagen.
Selecciona el equipo.
Haz clic en Crear para añadir al colaborador al equipo correspondiente.
2️⃣ Crear un equipo
Completa el formulario con:
Nombre del equipo.
Color principal en formato hexadecimal (o selecciona uno desde el selector de color).
Haz clic en Registrar equipo para añadirlo.
3️⃣ Personalizar colores
Usa el selector de color disponible en cada equipo.
Selecciona un nuevo color para actualizar la apariencia del equipo en tiempo real.
4️⃣ Eliminar un colaborador
Haz clic en el icono de X en la tarjeta del colaborador.
El colaborador se eliminará inmediatamente.
5️⃣ Marcar o desmarcar como favorito
Haz clic en el icono de corazón en la tarjeta del colaborador.
Cambiará su estado entre favorito (corazón lleno) y no favorito (corazón vacío).
🛠️ Tecnologías Utilizadas
📚 Frontend
React: Biblioteca principal para crear la interfaz de usuario.
CSS: Estilos personalizados para un diseño atractivo y funcional.
📦 Librerías Adicionales
uuid: Para generar identificadores únicos.
hex-to-rgba: Conversión de colores HEX a RGBA para fondos dinámicos.
react-icons: Iconos interactivos.
🤝 Contribuciones
Las contribuciones son bienvenidas. Si encuentras algún error o deseas mejorar el proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu característica o corrección:
bash
Copiar código
git checkout -b nombre-de-la-rama
Haz tus cambios y confirma los commits.
Envía un pull request explicando tus cambios.
📄 Licencia
Este proyecto está licenciado bajo la Licencia MIT. Puedes usar, modificar y distribuir este código libremente.

🌟 ¡Gracias por usar esta aplicación!
