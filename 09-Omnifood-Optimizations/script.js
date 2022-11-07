// console.log("Hello World")
// Set current Year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Set Navigation
const btnNavE1 = document.querySelector(".btn-mobile-nav");
const headerE1 = document.querySelector(".header");

btnNavE1.addEventListener("click", function () {
  headerE1.classList.toggle("nav-open");
})


// Scroll to the top
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionE1 = document.querySelector(href);
      sectionE1.scrollIntoView({ behavior: "smooth" })
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-list")) {
      headerE1.classList.toggle("nav-open");
    }
  })
})

// Sticky Naviagtion
const sectionHeroE1 = document.querySelector(".section-hero")
const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }
  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
})
obs.observe(sectionHeroE1);




///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
