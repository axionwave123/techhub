// ===============================
// JUMIA AFFILIATE LINKS
// Replace these placeholder URLs
// with your real affiliate links.
// ===============================
const AFFILIATE_LINKS = {
  itel_s24: "https://www.jumia.com.ng/catalog/?q=itel+s24",
  tecno_spark_20_pro: "https://www.jumia.com.ng/catalog/?q=tecno+spark+20+pro",
  infinix_hot_30: "https://www.jumia.com.ng/catalog/?q=infinix+hot+30",
  redmi_13c: "https://www.jumia.com.ng/catalog/?q=redmi+13c",
  nokia_g42: "https://www.jumia.com.ng/catalog/?q=nokia+g42",
  // Add more products here later:
  // my_new_product: "https://www.jumia.com.ng/your-affiliate-link",
};

// Apply affiliate links to all buttons that have data-affiliate attribute
document.addEventListener("DOMContentLoaded", function () {
  // Affiliate buttons
  document.querySelectorAll("[data-affiliate]").forEach(function (btn) {
    const key = btn.getAttribute("data-affiliate");
    if (AFFILIATE_LINKS[key]) {
      btn.href = AFFILIATE_LINKS[key];
      btn.target = "_blank";
      btn.rel = "noopener noreferrer sponsored";
    }
  });

  // Mobile hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navOverlay = document.querySelector(".nav-overlay");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      if (navOverlay) navOverlay.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        if (navOverlay) navOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });

    // Close when clicking overlay
    if (navOverlay) {
      navOverlay.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    }
  }

  // Search overlay
  const searchToggle = document.querySelector(".search-toggle");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchClose = document.querySelector(".search-close");
  const searchInput = document.querySelector(".search-input");

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener("click", function () {
      searchOverlay.classList.add("active");
      if (searchInput) setTimeout(function () { searchInput.focus(); }, 100);
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener("click", function () {
      searchOverlay.classList.remove("active");
    });
  }

  // Close search with Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && searchOverlay) {
      searchOverlay.classList.remove("active");
    }
  });

  // Simple search form (demo only)
  const searchForm = document.querySelector(".search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const q = searchInput ? searchInput.value.trim() : "";
      if (q) {
        // For demo: redirect to phones page with query (you can improve later)
        window.location.href = "phones.html?search=" + encodeURIComponent(q);
      }
    });
  }

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Newsletter form (demo only – no real backend)
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]');
      if (email && email.value) {
        alert("Thank you! This is a demo. In a real site this would subscribe: " + email.value);
        email.value = "";
      }
    });
  }

  // Filter buttons on category pages (simple client-side demo)
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      this.classList.add("active");
      // In a real site you would filter cards here.
      // For now it just updates the active state.
    });
  });
});
