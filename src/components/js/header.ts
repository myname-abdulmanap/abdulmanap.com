document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header") as HTMLElement | null;
  const hamburger = document.querySelector(".hamburger") as HTMLButtonElement | null;
  const menu = document.querySelector(".menu") as HTMLElement | null;
  const overlay = document.querySelector(".overlay") as HTMLElement | null;
  const heroSection = document.querySelector(".hero") as HTMLElement | null;

  if (!header || !hamburger || !menu || !overlay) return;

  const toggleMenu = () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
  };
  const updateHeader = () => {
    if (!heroSection) return;
    const scrollY = window.scrollY;

    if (scrollY > heroSection.offsetHeight / 5) { 
      header.classList.remove("transparent");
      header.classList.add("white");
    } else {
      header.classList.add("transparent");
      header.classList.remove("white");
    }
  };

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", updateHeader);
  updateHeader(); 
});
