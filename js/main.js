(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (!navToggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  navToggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      navToggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!nav.classList.contains("is-open")) return;
    var target = event.target;
    if (nav.contains(target) || navToggle.contains(target)) return;
    setOpen(false);
  });

  nav.addEventListener("focusout", function (event) {
    if (!nav.classList.contains("is-open")) return;
    var next = event.relatedTarget;
    if (next && (nav.contains(next) || next === navToggle)) return;
    setOpen(false);
  });
})();
