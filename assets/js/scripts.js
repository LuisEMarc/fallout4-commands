function copyText(text) {
  navigator.clipboard.writeText(text);

  const toast = document.getElementById("copyToast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = new bootstrap.Modal(document.getElementById("imgModal"));

  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalSkill = document.getElementById("modalSkill");
  const modalAffinity = document.getElementById("modalAffinity");
  const modalMission = document.getElementById("modalMission");

  document.querySelectorAll(".clickable-img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalName.textContent = "Nombre: " + img.dataset.name;
      modalSkill.textContent = "Habilidad: " + img.dataset.skill;
      modalAffinity.textContent = img.dataset.affinity;
      modalMission.textContent = img.dataset.mission;

      modal.show();
    });
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar-custom");
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
  });
});

const modalBadge = document.getElementById("modalDlcBadge");

document.querySelectorAll(".clickable-img").forEach((img) => {
  img.addEventListener("click", () => {

    const dlc = img.dataset.dlc;

    if (dlc) {
      modalBadge.style.display = "block";

      if (dlc === "nuka") {
        modalBadge.src = "../assets/images/nuka_world.png";
      } else if (dlc === "automatron") {
        modalBadge.src = "../assets/images/automatron.png";
      }
    } else {
      modalBadge.style.display = "none";
    }
  });
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // activar botón
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    // mostrar/ocultar cards
    document.querySelectorAll(".mission-card").forEach((card) => {
      if (filter === "all" || card.dataset.faction === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    // manejar secciones SIN cambiar clases
    document.querySelectorAll(".mission-section").forEach((section) => {
      const visibleCards = section.querySelectorAll(
        '.mission-card:not([style*="display: none"])',
      );

      section.style.display = visibleCards.length > 0 ? "block" : "none";
    });
  });
});
