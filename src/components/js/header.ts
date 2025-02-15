document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header") as HTMLElement | null;
  const hamburger = document.querySelector(".hamburger") as HTMLButtonElement | null;
  const menu = document.querySelector(".menu") as HTMLElement | null;
  const overlay = document.querySelector(".overlay") as HTMLElement | null;

  if (!header || !hamburger || !menu || !overlay) return;

  const toggleMenu = () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
  };

  const updateHeader = () => {
    const scrollY = window.scrollY; // Ambil posisi scroll
    if (scrollY > 50) { // Jika scroll lebih dari 50px
      header.classList.add("white"); // Tambahkan kelas putih
      header.classList.remove("transparent");
    } else {
      header.classList.add("transparent");
      header.classList.remove("white");
    }
  };

  // Event Listener
  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", updateHeader);

  updateHeader(); // Pastikan header di-update saat halaman dimuat
});
