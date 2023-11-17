import gsap from "gsap";

export function setupGSAPAnimation() {
  const tl = gsap.timeline();

  function animateFadeRight(el) {
    tl.fromTo(
      el,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top 80%",
          end: "top 70%",
          markers: false,
        },
      }
    );
  }

  function animateFadeLeft(el) {
    tl.fromTo(
      el,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top 80%",
          end: "top 50%",
          markers: false,
        },
      }
    );
  }

  function updateNavbarActiveSection(activeSect) {
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      tl.to(section, {
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: "top center",
          end: "bottom center",
          markers: false,
          onEnter: () => {
            // Update the active section based on the section's id
            activeSect.value = section.id
          },
          onEnterBack: () => {
            activeSect.value = section.id
            
          },
          onLeaveBack: () => {
            activeSect.value = null
            
          },
          onLeave: () => {
            activeSect.value = null
          },
        },
      });
    });
  }

  return {
    animateFadeRight,
    animateFadeLeft,
    updateNavbarActiveSection,
  };
}
