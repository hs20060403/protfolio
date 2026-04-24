const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    const isOpen = siteNav.classList.contains("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "메시지가 전송되었습니다. 빠르게 답변드릴게요.";
    contactForm.reset();
  });
}
