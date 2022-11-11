const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    "Oops, make sure the ${selector} exists or is typed correctly."
  );
};

const scrollHeader = () => {
  const headerEl = selectElement("#header");
  if (this.scrollY >= 15) {
    headerEl.classList.add("activated");
  } else {
    headerEl.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

const menuToggle = selectElement("#menu-toggle");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggle.classList.toggle("activated");
};

menuToggle.addEventListener("click", toggleMenu);

const searchOpenBtn = selectElement("#search-icon");
const searchCloseBtn = selectElement("#form-close-btn");
const searchContainer = selectElement("#search-form");

searchOpenBtn.addEventListener("click", () =>
  searchContainer.classList.add("activated")
);
searchCloseBtn.addEventListener("click", () =>
  searchContainer.classList.remove("activated")
);

window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") searchContainer.classList.remove("activated");
});

const bodyElement = document.body;
const themeToggle = selectElement("#theme-toggle");
const currenTheme = localStorage.getItem("currentTheme");

if (currenTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currenTheme");
  }
});
