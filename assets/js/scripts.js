// ============================
// CONSTANTS
// ============================

const STORAGE_KEY = "vault_bobbleheads";

const DLC_IMAGES = {
  nuka: "../assets/images/nuka_world.png",
  automatron: "../assets/images/automatron.png",
};

// ============================
// HELPERS
// ============================

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

// ============================
// COPY TO CLIPBOARD
// ============================

function copyText(text) {
  navigator.clipboard.writeText(text);

  const toast = $("#copyToast");

  if (!toast) return;

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
  initBobbleheads();
  initBobbleLocationModal();
  initFloatingUI();
  initBobbleHint();
});

// ============================
// NAVBAR
// ============================

function initNavbar() {
  const nav = $(".navbar-custom");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  $$(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");

    const isHome =
      currentPage === "index.html" && (href === "#" || href === "./");

    const isCurrentPage =
      currentPage !== "index.html" && href.includes(currentPage);

    if (isHome || isCurrentPage) {
      link.classList.add("active");
    }
  });
}

// ============================
// MODAL ACOMPAÑANTES
// ============================

function initModal() {
  const modalElement = $("#imgModal");

  if (!modalElement) return;

  const modal = new bootstrap.Modal(modalElement);

  const modalImage = $("#modalImage");
  const modalName = $("#modalName");
  const modalSkill = $("#modalSkill");
  const modalAffinity = $("#modalAffinity");
  const modalMission = $("#modalMission");
  const modalBadge = $("#modalDlcBadge");
  const modalDescription = $("#modalDescription");
  const modalSubtitle = $("#modalSubtitle");

  $$(".clickable-img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalName.textContent = img.dataset.name;
      modalSkill.textContent = img.dataset.skill;
      modalSubtitle.textContent = img.dataset.type;
      modalDescription.textContent = img.dataset.description;
      modalAffinity.textContent = img.dataset.affinity;
      modalMission.textContent = img.dataset.mission;

      const dlc = img.dataset.dlc;

      if (dlc && modalBadge) {
        modalBadge.style.display = "block";
        modalBadge.src = DLC_IMAGES[dlc] || "";
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
  const buttons = $$(".filter-btn");

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");

      updateView();
    });
  });
}

// ============================
// BUSCADOR
// ============================

function initSearch() {
  const input = $("#searchInput");

  if (!input) return;

  input.addEventListener("input", updateView);
}

// ============================
// CORE LOGIC
// ============================

function updateView() {
  const searchValue = $("#searchInput")?.value.toLowerCase() || "";

  const activeFilter = $(".filter-btn.active")?.dataset.filter || "all";

  let anyVisible = false;

  // ============================
  // FILTRAR CARDS
  // ============================

  $$(".command-card").forEach((card) => {
    const text = card.innerText.toLowerCase();

    const matchSearch = text.includes(searchValue);

    const matchFilter =
      activeFilter === "all" || card.dataset.category === activeFilter;

    const visible = matchSearch && matchFilter;

    card.style.display = visible ? "block" : "none";

    if (visible) anyVisible = true;
  });

  // ============================
  // OCULTAR SECCIONES VACÍAS
  // ============================

  $$(".command-section").forEach((section) => {
    const visibleCards = section.querySelectorAll(
      '.command-card:not([style*="display: none"])',
    );

    section.style.display = visibleCards.length > 0 ? "block" : "none";
  });

  // ============================
  // EMPTY STATE
  // ============================

  updateNoResults(anyVisible, searchValue);
}

// ============================
// EMPTY STATE
// ============================

function updateNoResults(anyVisible, searchValue) {
  const noResults = $("#noResults");

  if (!noResults) return;

  noResults.style.display = anyVisible ? "none" : "block";

  const text = noResults.querySelector("p");

  if (!text) return;

  text.textContent = searchValue
    ? `No encontramos "${searchValue}"`
    : "Cambia el filtro para ver resultados";
}

// ============================
// BOBBLEHEADS
// ============================

function initBobbleheads() {
  loadBobbleProgress();
  initResetProgress();
}

// ============================
// LOAD PROGRESS
// ============================

function loadBobbleProgress() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  $$(".bobble-card").forEach((card) => {
    const id = card.dataset.bobble?.trim().toLowerCase();

    const checkbox = card.querySelector(".bobble-toggle");

    // protección
    if (!id || !checkbox) return;

    // cargar estado guardado
    const checked = saved[id] === true;

    checkbox.checked = checked;

    card.classList.toggle("completed", checked);

    // escuchar cambios
    checkbox.addEventListener("change", () => {
      const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

      currentData[id] = checkbox.checked;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));

      card.classList.toggle("completed", checkbox.checked);

      updateProgress();
    });
  });

  updateProgress();
}

// ============================
// UPDATE PROGRESS
// ============================

function updateProgress() {
  const progressCount = $("#progressCount");

  const progressBar = $("#progressBar");

  if (!progressCount || !progressBar) return;

  const total = $$(".bobble-card").length;

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  const completed = Object.values(saved).filter(Boolean).length;

  progressCount.textContent = `${completed} / ${total} encontrados`;

  const percentage = total ? (completed / total) * 100 : 0;

  progressBar.style.width = `${percentage}%`;
}

// ============================
// RESET PROGRESS
// ============================

function initResetProgress() {
  const resetBtn = $("#resetProgress");

  if (!resetBtn) return;

  resetBtn.addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({}));

    $$(".bobble-toggle").forEach((checkbox) => {
      checkbox.checked = false;
    });

    $$(".bobble-card").forEach((card) => {
      card.classList.remove("completed");
    });

    updateProgress();
  });
}

// ============================
// MODAL LOCATIONS
// ============================
function initBobbleLocationModal() {
  const modalElement = $("#locationModal");

  if (!modalElement) return;

  const modal = new bootstrap.Modal(modalElement);

  const locationImage = $("#locationImage");

  $$(".bobblehead-img").forEach((img) => {
    img.addEventListener("click", () => {
      const location = img.dataset.location;

      if (!location) return;

      locationImage.src = `../assets/images/bobbleheads/locations/${location}`;

      modal.show();
    });
  });
}

// ============================
// FLOATING BAR BEHAVIOR
// ============================
function initFloatingUI() {
  const floatingProgress = $(".floating-progress");

  if (!floatingProgress) return;

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("show.bs.modal", () => {
      floatingProgress.classList.add("hidden-ui");
    });

    modal.addEventListener("hidden.bs.modal", () => {
      floatingProgress.classList.remove("hidden-ui");
    });
  });
}

// ============================
// HINT TOAST
// ============================
function initBobbleHint() {
  const hint = $("#bobbleHint");
  if (!hint) return;
  hint.classList.add("show");
  setTimeout(() => {
    hint.classList.remove("show");
  }, 10000);
}