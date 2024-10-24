/* ----------------------------------------------------------- *\
 * NAVBAR
\* ----------------------------------------------------------- */

const navbar = document.querySelector("[data-navbar]");

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    };
});

/* ----------------------------------------------------------- *\
 * ASIDE
\* ----------------------------------------------------------- */

const aside_link = document.querySelectorAll("[data-aside-link]");
const aside = document.querySelector("[data-aside]");
const body = document.body;

aside_link.forEach((ele) => {
    ele.addEventListener("click", () => {
        aside.classList.remove("show");
        body.style.overflow = "visible";
        body.style.padding = "0px";
    });
});

/**
 * gsap open aside
 */
document.addEventListener("DOMContentLoaded", () => {
    const slow_loading_aside_link_up = document.querySelectorAll("[data-gsap-slow-loading-aside-link-up]");
    const gsap_close_aside = document.querySelector("[data-gsap-close-aside]");
    const gsap_open_aside = document.querySelector("[data-gsap-open-aside]");

    gsap.set(slow_loading_aside_link_up, {
        opacity: 0,
        y: 50
    });

    gsap_open_aside.addEventListener("click", () => {
        gsap.to(slow_loading_aside_link_up, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.2,
        });
    });

    gsap_close_aside.addEventListener("click", () => {
        gsap.set(slow_loading_aside_link_up, {
            opacity: 0,
            y: 50
        });    
    });
});

/* ----------------------------------------------------------- *\
 * HERO
\* ----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    // gsap up
    gsap.set("[data-gsap-up]", {
        y: -100,
        opacity: 0
    });

    gsap.to("[data-gsap-up]", {
        y: 0,
        opacity: 1,
        duration: 1.5,
    });

    // gsap down
    gsap.set("[data-gsap-down]", {
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-down]", {
        y: 0,
        opacity: 1,
        duration: 1.5,
    });

    // slow loading up
    gsap.set("[data-gsap-slow-loading-up]", {
        opacity: 0,
        y: 100
    });

    gsap.to("[data-gsap-slow-loading-up]", {
        opacity: 1,
        y: 0,
        stagger: 0.3
    });

    // slow loading down
    gsap.set("[data-gsap-slow-loading-down]", {
        opacity: 0,
        y: 100,
        duration: 0
    });

    gsap.to("[data-gsap-slow-loading-down]", {
        opacity: 1,
        y: 0,
        stagger: 0.4
    });
});

/* ----------------------------------------------------------- *\
 * DESTINATION
\* ----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // up
    gsap.set("[data-gsap-destination-up]", {
        y: -100,
        opacity: 0
    });

    gsap.to("[data-gsap-destination-up]", {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-destination-up]",
            start: "top 75%",
            end: "top 25%",
        }
    });

    // down
    gsap.set("[data-gsap-destination-down]", {
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-destination-down]", {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-destination-down]",
            start: "top 75%",
            end: "top 25%",
        }
    });

    // right
    gsap.set("[data-gsap-destination-right]", {
        x: -100,
        opacity: 0
    });

    gsap.to("[data-gsap-destination-right]", {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-destination-right]",
            start: "top 75%",
            end: "top 25%",
        }
    });

    // slow loading up
    gsap.set("[data-gsap-destination-slow-loading-up]", {
        opacity: 0,
        y: 100
    });

    gsap.to("[data-gsap-destination-slow-loading-up]", {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "[data-gsap-destination-slow-loading-up]",
            start: "top 75%",
            end: "top 25%"
        }
    });
});

/* ----------------------------------------------------------- *\
 * ABOUT US
\* ----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("[data-gsap-about-up]", {
        y: -100,
        opacity: 0
    });

    gsap.to("[data-gsap-about-up]", {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-about-up]",
            start: "top 60%",
            end: "top 25%",
        }
    });

    gsap.set("[data-gsap-about-down]", {
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-about-down]", {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-about-up]",
            start: "top 60%",
            end: "top 25%",
        }
    });
    
    gsap.set("[data-gsap-zoom-img]", { scale: 0, });

    gsap.to("[data-gsap-zoom-img]", {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-zoom-img]",
            start: "top 60%",
            end: "top 25%",
        }
    });

    gsap.set("[data-gsap-card-about]", { 
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-card-about]", {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "[data-gsap-card-about]",
            start: "top 60%",
            end: "top 25%",
        }
    });
});

/* ----------------------------------------------------------- *\
 * PACKAGE
\* ----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("[data-gsap-package-up]", { 
        y: -100,
        opacity: 0
    });

    gsap.to("[data-gsap-package-up]", {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-package-up]",
            start: "top 60%",
            end: "top 25%",
        }
    });

    gsap.set("[data-gsap-package-down]", { 
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-package-down]", {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "[data-gsap-package-down]",
            start: "top 60%",
            end: "top 25%",
        }
    });

    gsap.set("[data-gsap-card-package]", { 
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-card-package]", {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "[data-gsap-card-package]",
            start: "top 60%",
            end: "top 25%",
        }
    });
});

/* ----------------------------------------------------------- *\
 * TESTIMONIAL
\* ----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("[data-gsap-testimonial]", { 
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-testimonial]", {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "[data-gsap-testimonial]",
            start: "top 60%",
            end: "top 25%",
        }
    });
});

/* ----------------------------------------------------------- *\
 * FOOTER
\* ----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set("[data-gsap-footer-up]", { 
        y: 100,
        opacity: 0
    });

    gsap.to("[data-gsap-footer-up]", {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "[data-gsap-footer-up]",
            start: "top 60%",
            end: "top 25%",
        }
    });
});