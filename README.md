# 🎮 Vault Assistant — Fallout 4 Companion Web App

Aplicación web enfocada en mejorar la experiencia del jugador en Fallout 4 mediante acceso rápido a comandos, coleccionables, información estratégica y referencias útiles dentro del juego.

---

## 🌐 Demo en vivo

👉 https://luisemarc.github.io/fallout4-commands/

---

# 🧠 Problema

Durante una partida de Fallout 4 es común interrumpir constantemente el juego para buscar información en múltiples sitios:

- IDs de materiales y municiones
- Comandos de consola
- Misiones repetibles
- Perks de acompañantes
- Ubicación de Bobbleheads
- Requisitos de afinidad
- Beneficios útiles para builds

Esto rompe el flujo de exploración y hace lenta la toma de decisiones.

---

# 💡 Solución

Desarrollé una companion web app ligera y responsive que centraliza información importante del juego en una sola interfaz moderna y rápida de consultar.

La aplicación permite:

- 📋 Copiar comandos con un clic
- 🔁 Consultar misiones repetibles por facción
- 🧑‍🤝‍🧑 Revisar perks y afinidad de acompañantes
- 🎯 Ver ubicación y beneficios de Bobbleheads
- 🔎 Filtrar y buscar contenido dinámicamente
- 📱 Navegar cómodamente desde desktop o mobile

---

# 🚀 Funcionalidades destacadas

## 📋 Sistema de comandos
- Organización por categorías
- Copiado instantáneo al portapapeles
- Feedback visual mediante toast notifications
- Badges visuales por tipo de comando

## 🧑‍🤝‍🧑 Sistema de acompañantes
- Vista detallada mediante modales
- Información de perks únicas
- Requisitos de afinidad
- Misiones obligatorias para progreso
- Etiquetas visuales para DLCs

## 🔁 Misiones repetibles
- Organización por facciones:
  - Minutemen
  - Railroad
  - Brotherhood of Steel
  - Institute
- Filtros dinámicos
- Diseño modular por secciones

## 🎯 Bobbleheads
- Listado completo de los 20 Bobbleheads
- Diferenciación entre:
  - SPECIAL
  - Skills
- Ubicaciones detalladas
- Beneficios permanentes
- Sistema visual de badges personalizados

---

# 🎨 UI / UX

La aplicación utiliza un diseño moderno inspirado en:
- Glassmorphism
- Interfaces móviles estilo iOS
- Companion apps gaming

Características visuales:
- Navbar flotante responsive
- Blur dinámico
- Modales interactivos
- Cards translúcidas
- Navegación optimizada para mobile
- Microinteracciones y animaciones suaves

---

# 🛠️ Stack tecnológico

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Bootstrap Icons

---

# 🧩 Arquitectura

/
│
├─ index.html
│
├─ assets/
│   ├─ css/
│   ├─ js/
│   └─ images/
│       ├─ bobbleheads/
│       ├─ companions/
│
└─ pages/
    ├─ companions.html
    ├─ missions_info.html
    └─ bobbleheads.html

# ⚙️ Enfoque Técnico

Organización modular

Separación clara entre:

- estructura (HTML)
- estilos (CSS)
- lógica (JavaScript)
- Reutilización visual

Uso de componentes reutilizables:

- cards
- badges
- modales
- navbar
- filtros

UX dinámica

- Filtrado en tiempo real
- Ocultado automático de secciones vacías
- Sistema de búsqueda dinámica
- Navegación responsive optimizada

Contenido dinámico

Uso de atributos data-* para:

- modales
- información contextual
- contenido reutilizable

# 📈 Aprendizaje clave

- Diseño responsive mobile-first
- Glassmorphism moderno usando CSS puro
- Optimización UX para companion apps
- Manejo dinámico del DOM con Vanilla JS
- Arquitectura escalable sin frameworks
- Personalización avanzada de Bootstrap

# 🔮 Futuras mejoras

- ⭐ Sistema de favoritos
- ✅ Checklist de Bobbleheads encontrados
- 💾 Persistencia con LocalStorage
- 🔎 Buscador global avanzado
- 📬 Sistema de feedback
- 🎛️ Tema alternativo estilo Pip-Boy
- 📦 Expansión de contenido:
    - armaduras
    - armas legendarias
    - settlements
    - builds
- ⚛️ Migración futura a React o Vue

# 👤 Autor

LuisEMarc
Desarrollador de software apasionado por UI/UX, videojuegos y herramientas útiles enfocadas en experiencia de usuario.

# ⚠️ Notas

Proyecto desarrollado con fines educativos y personales.
Fallout 4 y sus recursos pertenecen a Bethesda Softworks.