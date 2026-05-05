# 🎮 Fallout 4 Tools

Web app enfocada en mejorar la experiencia del jugador en Fallout 4 mediante acceso rápido a comandos, información clave y referencias útiles dentro del juego.

---

## 🌐 Demo en vivo

👉 https://LuisEMarc.github.io/fallout4-commands/

---

## 🧠 Problema

Durante el juego, es común tener que buscar constantemente:

- IDs de materiales o municiones
- Comandos de consola
- Información sobre acompañantes y perks
- Misiones repetibles

Esto interrumpe la experiencia y rompe el flujo de juego.

---

## 💡 Solución

Desarrollé una web app ligera que centraliza toda esta información en una sola interfaz:

- 📋 Copia rápida de comandos (1 clic)
- 🧱 Organización clara por categorías
- 🧑‍🤝‍🧑 Información de acompañantes y perks
- 🔁 Seguimiento de misiones repetibles
- 🖼 Interacciones visuales (modales, feedback UI)

---

## 🚀 Funcionalidades destacadas

- Sistema de copiado con feedback visual (toast)
- Modal interactivo para vista ampliada de acompañantes
- Interfaz moderna con efecto glassmorphism (estilo iOS)
- Navbar responsive con navegación entre secciones
- Estructura modular para fácil escalabilidad

---

## 🛠️ Stack tecnológico

- HTML5
- CSS3 (Glassmorphism + responsive design)
- JavaScript (Vanilla)
- Bootstrap
- Bootstrap Icons

---

## 🧩 Arquitectura
/ (root)
│ index.html
│
├─ assets/
│ ├─ css/
│ ├─ js/
│ └─ img/
│
└─ pages/
├─ missions_info.html
└─ companions.html

---

## 🎯 Enfoque técnico

- Uso de atributos `data-*` para manejar contenido dinámico sin duplicación de HTML
- Separación de lógica (JS), estilos (CSS) y estructura (HTML)
- Manejo de eventos para mejorar UX (copiado, modales, interacción)
- Diseño reutilizable entre páginas mediante estilos globales

---

## 📈 Aprendizajes clave

- Implementación de UI moderna sin frameworks pesados
- Mejora de experiencia de usuario con microinteracciones
- Organización de proyecto tipo “mini app” escalable
- Uso de Bootstrap de forma personalizada (no dependiente)

---

## 🔮 Futuras mejoras

- 🔎 Buscador en tiempo real
- ⭐ Sistema de favoritos
- 🎛️ Tema alternativo estilo Pip-Boy
- 📦 Expansión de contenido (armas, builds, armaduras)
- 🌐 Migración a framework (React o Vue)

---

## 👤 Autor

**LuisEMarc**

---

## ⚠️ Nota

Proyecto con fines educativos y de uso personal.
No afiliado con Bethesda.