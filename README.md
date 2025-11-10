# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#  Buscador de Personajes de Series

**Trabajo Práctico 4 – Diplomatura Full Stack**
Aplicación desarrollada en **React + Vite** que permite buscar personajes de tres universos diferentes — **Pokémon**, **Digimon** y **Rick & Morty** — consumiendo sus respectivas APIs públicas.
Los personajes pueden visualizarse, agregarse a favoritos y mantenerse persistentes en el navegador mediante `localStorage`.

---

##  Objetivo del Proyecto

Integrar React con APIs REST utilizando peticiones HTTP asincrónicas, manejo de estado con hooks, y persistencia de datos.
El objetivo principal fue desarrollar una SPA funcional, con diseño responsive, notificaciones y una experiencia fluida para el usuario.

---

##  Tecnologías Utilizadas

*  **React + Vite**
*  **TailwindCSS** (diseño responsive)
*  **React Toastify** (notificaciones visuales)
*  **Fetch** y **Axios** (según API)
*  **LocalStorage** (persistencia de favoritos)
*  **React Context API** (manejo global de favoritos)
*  **Loader visual** (feedback de carga)

---

##   Externas Consumidas

| Universo         | API Pública                                                     | Descripción                                         |
| ---------------- | --------------------------------------------------------------- | --------------------------------------------------- |
| **Pokémon**      | [PokeAPI](https://pokeapi.co/api/v2/pokemon)                    | Datos de Pokémon: tipo, habilidades, peso y altura. |
| **Digimon**      | [Digimon API](https://digimon-api.vercel.app/api/digimon)       | Información de Digimon: nombre, nivel e imagen.     |
| **Rick & Morty** | [Rick and Morty API](https://rickandmortyapi.com/api/character) | Personajes, especie, estado y ubicación.            |

---

## ⚙️ Funcionalidades Principales

✅ **Búsqueda por nombre** en tiempo real.
✅ **Visualización detallada** de cada personaje con imagen y descripción.
✅ **Agregar a favoritos** con persistencia local.
✅ **Eliminar favoritos individualmente o todos a la vez.**
✅ **Sugerencias automáticas** mientras se escribe en la barra de búsqueda.
✅ **Loader animado** durante la carga de datos.
✅ **Notificaciones** con `react-toastify` para éxitos, errores o advertencias.
✅ **Diseño responsive y moderno**.

---


```

---

## Decisiones Técnicas

* Se eligió **Fetch** para algunas APIs por su simpleza y compatibilidad nativa, y **Axios** para Digimon por su mejor manejo de errores y formato de respuesta más directo.
* Se implementó **Context API** para evitar prop drilling y mantener el estado global de favoritos accesible desde cualquier página.
* Se agregaron **toasts** para mejorar la interacción y comunicación con el usuario.
* Se incluyó un **Loader visual** (`useState + setTimeout`) para simular carga asincrónica y evitar pantallas en blanco.
* Todo el proyecto se diseñó con **TailwindCSS**, priorizando la adaptabilidad a distintos tamaños de pantalla.

---

## Ejecución del Proyecto

### Instalación

```bash
npm install
```

###  Ejecución local

```bash
npm run dev
```

### 🌎 Despliegue

El proyecto fue desplegado en **Netlify** (o Vercel).
👉 [Enlace de la app desplegada](https://tu-enlace-aqui.netlify.app)

---

## 📋 Cumplimiento de Consignas

| Requisito                         | Estado |
| --------------------------------- | ------ |
| Uso de Fetch / Axios              | ✅      |
| Manejo de APIs REST               | ✅      |
| useState / useEffect              | ✅      |
| Manejo de errores con try/catch   | ✅      |
| Notificaciones (react-toastify)   | ✅      |
| Loader visual                     | ✅      |
| Formulario controlado (SearchBar) | ✅      |
| Persistencia con localStorage     | ✅      |
| Diseño con TailwindCSS            | ✅      |
| Despliegue funcional              | ✅      |

---

## 💬 Autor

**Nombre:** [Rodrigo Romano]
**Diplomatura Full Stack - Trabajo Práctico 4**
**Año:** 2025

---



