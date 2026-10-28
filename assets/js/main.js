(function () {
  // mobile nav
  var burger = document.getElementById("burger");
  var links = document.getElementById("nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
  }

  // login dropdown
  var loginBtn = document.getElementById("login-btn");
  var menu = document.getElementById("login-menu");
  if (loginBtn && menu) {
    loginBtn.addEventListener("click", function () {
      menu.classList.toggle("visible");
    });
    document.addEventListener("click", function (e) {
      if (!loginBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("visible");
      }
    });
  }

  // scroll reveal
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // contact form (static hosting: posts to the endpoint in the form's action)
  var form = document.getElementById("contact-form");
  if (form) {
    var msg = document.getElementById("form-msg");
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (action.indexOf("YOUR_FORM_ID") !== -1) {
        e.preventDefault();
        msg.textContent = "Demo mode: connect a form endpoint (see README) to receive messages.";
        msg.classList.add("show");
        return;
      }
      e.preventDefault();
      fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          msg.textContent = r.ok ? "Thanks! We'll be in touch within one business day." : "Something went wrong. Please email us instead.";
          msg.classList.add("show");
          if (r.ok) form.reset();
        })
        .catch(function () {
          msg.textContent = "Network error. Please try again.";
          msg.classList.add("show");
        });
    });
  }
})();
