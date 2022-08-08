let placesToVisit = [
  "Eiffel Tower, Paris",
  "The Colosseum, Rome",
  "Statue of Liberty, New York City",
  "Machu Picchu, Peru",
  "The Taj Mahal, India",
];

let hamburgerMenuMobileView = [
  "flex",
  "flex-col",
  "w-full",
  "my-6",
  "justify-center",
  "text-center",
  "font-semibold",
];
let hamburgerMenuDesktopView = [];

const placesList = document.getElementById("placesList");
const navLinks = document.getElementById("navLinks");
const startForm = document.getElementById("startForm");
const navLinksIndividual = document.querySelectorAll("#navLinks li");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const hamburgerMenuIcon = document.getElementById("hamburgerMenuIcon");
const displayMobileNav = () => {
  hamburgerMenu.classList.remove("hidden");

  // document.body.classList.add("blur-lg");
  hamburgerMenuMobileView.forEach((element) => {
    hamburgerMenu.classList.add(element);
  });
};

const hideMobileNav = () => {
  hamburgerMenu.classList.add("hidden");
};

hamburgerMenuIcon.addEventListener("click", () => {
  if (
    window.screen.width <= 768 &&
    hamburgerMenu.classList.contains("hidden")
  ) {
    displayMobileNav();

    navLinksIndividual.forEach((element) => {
      element.addEventListener("click", () => {
        hideMobileNav();
      });
    });
  } else if (
    window.screen.width <= 768 &&
    !hamburgerMenu.classList.contains("hidden")
  ) {
    hideMobileNav();
  }
});

placesToVisit.forEach((element, index) => {
  let places = document.createElement("option");
  places.value = element;
  places.innerText = element;
  placesList.appendChild(places);
});
