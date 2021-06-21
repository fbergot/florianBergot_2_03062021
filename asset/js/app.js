const links = Array.from(document.querySelectorAll(".navbarHeader a"));

// add listener for header links
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    active(e);
  });
}

function active(e) {
  // test if already 'active'
  if (e.target.dataset.active === "true") {
    return;
  }

  for (let i = 0; i < links.length; i++) {
    links[i].dataset.active = "false";
  }
  e.target.dataset.active = "true";
}
