document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header") as HTMLElement | null;
  const hamburger = document.querySelector(".hamburger") as HTMLButtonElement | null;
  const menu = document.querySelector(".menu") as HTMLElement | null;
  const overlay = document.querySelector(".overlay") as HTMLElement | null;
  const heroSection = document.querySelector(".hero") as HTMLElement | null;

  if (!header || !hamburger || !menu || !overlay) return;

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
  };

  // Fungsi untuk update header saat scroll
  const updateHeader = () => {
    if (!heroSection) return;

    // Menentukan posisi scroll
    const scrollY = window.scrollY;

    // Ganti header saat scroll Y melebihi tinggi heroSection
    if (scrollY > heroSection.offsetHeight / 5) { // Ganti batas ini sesuai kebutuhan
      header.classList.remove("transparent");
      header.classList.add("white");
    } else {
      header.classList.add("transparent");
      header.classList.remove("white");
    }
  };

  // Event listeners
  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", updateHeader);
  updateHeader(); // Set kondisi awal header
});
