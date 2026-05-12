const reveals =
  document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach(section => {

    const top =
      section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      section.classList.add("active");

    }

  });

}

/* RUN ON LOAD */
revealSections();

/* RUN ON SCROLL */
window.addEventListener(
  "scroll",
  revealSections
);