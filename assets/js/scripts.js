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

  document.querySelectorAll(".clickable-img").forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalName.textContent = "Nombre: " + img.dataset.name;
      modalSkill.textContent = "Habilidad: " + img.dataset.skill;

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

    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
        }
    });
});