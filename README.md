# myFirstApp - Aplicación React de Aprendizaje

## Descripción

Esta es una aplicación web desarrollada con **React** y **Vite** como proyecto de aprendizaje. La aplicación demuestra conceptos fundamentales de React incluyendo el uso de componentes, props y enrutamiento.

## Características

### 🏠 Página Principal - Catálogo de Productos
- Muestra un catálogo de productos con tema oscuro
- Tarjetas compactas con imagen, nombre, precio y estado de disponibilidad
- Formulario de filtrado por categorías
- Diseño responsivo con Bootstrap 5

### 📚 Página de Props - Demostración
- Ejemplo práctico del uso de **Props** en React
- Muestra la comunicación entre componente padre e hijo
- Visualización clara del flujo de datos

## Tecnologías Utilizadas

- **React 19** - Biblioteca para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Bootstrap 5** - Framework CSS para estilos
- **Bootstrap Icons** - Iconos
- **React Router DOM** - Enrutamiento de la aplicación

## Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal con rutas
├── main.jsx             # Punto de entrada
├── features/
│   └── layout/
│       └── components/
│           ├── Header.jsx    # Encabezado con navegación
│           ├── Content.jsx   # Catálogo de productos
│           ├── Footer.jsx    # Pie de página
│           └── Props.jsx     # Demostración de Props
└── shared/
    └── styles/
        ├── App.css      # Estilos del componente App
        └── index.css    # Estilos globales
```

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Para construir para producción:
```bash
npm run build
```

## Rutas

- `/` - Página principal con el catálogo de productos
- `/props` - Demostración del uso de Props en React

---

Proyecto creado con fines educativos para aprender React.
