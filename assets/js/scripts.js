// ============================
// COPY TO CLIPBOARD
// ============================
function copyText(text) {
  navigator.clipboard.writeText(text);

  const toast = document.getElementById("copyToast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ============================
// INIT APP
// ============================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initModal();
  initFilters();
  initSearch();
});

// ============================
// NAVBAR
// ============================
function initNavbar() {
  const nav = document.querySelector(".navbar-custom");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
  });
}

// ============================
// MODAL ACOMPAÑANTES
// ============================
function initModal() {
  const modalElement = document.getElementById("imgModal");
  if (!modalElement) return; // evita errores en otras páginas

  const modal = new bootstrap.Modal(modalElement);

  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalSkill = document.getElementById("modalSkill");
  const modalAffinity = document.getElementById("modalAffinity");
  const modalMission = document.getElementById("modalMission");
  const modalBadge = document.getElementById("modalDlcBadge");

  document.querySelectorAll(".clickable-img").forEach((img) => {
    img.addEventListener("click", () => {
      // contenido
      modalImage.src = img.src;
      modalName.textContent = "Nombre: " + img.dataset.name;
      modalSkill.textContent = "Habilidad: " + img.dataset.skill;
      modalAffinity.textContent = img.dataset.affinity;
      modalMission.textContent = img.dataset.mission;

      // DLC badge
      const dlc = img.dataset.dlc;

      if (dlc && modalBadge) {
        modalBadge.style.display = "block";

        const dlcImages = {
          nuka: "../assets/images/nuka_world.png",
          automatron: "../assets/images/automatron.png",
        };

        modalBadge.src = dlcImages[dlc] || "";
      } else if (modalBadge) {
        modalBadge.style.display = "none";
      }

      modal.show();
    });
  });
}

// ============================
// FILTROS
// ============================
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");

      updateView();
    });
  });
}

// ============================
// BUSCADOR
// ============================
function initSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  input.addEventListener("input", updateView);
}

// ============================
// CORE LOGIC (FILTRO + SEARCH)
// ============================
function updateView() {
  const searchInput = document.getElementById("searchInput");
  const searchValue = searchInput ? searchInput.value.toLowerCase() : "";

  const activeBtn = document.querySelector(".filter-btn.active");
  const activeFilter = activeBtn ? activeBtn.dataset.filter : "all";

  let anyVisible = false;

  // filtrar cards
  document.querySelectorAll(".command-card").forEach((card) => {
    const text = card.innerText.toLowerCase();

    const matchSearch = text.includes(searchValue);
    const matchFilter =
      activeFilter === "all" || card.dataset.category === activeFilter;

    const visible = matchSearch && matchFilter;

    card.style.display = visible ? "block" : "none";

    if (visible) anyVisible = true;
  });

  // ocultar secciones vacías
  document.querySelectorAll(".command-section").forEach((section) => {
    const visibleCards = section.querySelectorAll(
      '.command-card:not([style*="display: none"])'
    );

    section.style.display = visibleCards.length > 0 ? "block" : "none";
  });

  // estado vacío
  const noResults = document.getElementById("noResults");
  if (noResults) {
    noResults.style.display = anyVisible ? "none" : "block";

    const text = noResults.querySelector("p");
    if (text) {
      text.textContent = searchValue
        ? `No encontramos "${searchValue}"`
        : "Cambia el filtro para ver resultados";
    }
  }
}