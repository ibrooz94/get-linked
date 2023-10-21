import gsap from 'gsap';

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
          start: 'top 80%',
          end: 'top 70%',
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
          start: 'top 80%',
          end: 'top 50%',
          markers: false,
        },
      }
    );
  }

  return {
    animateFadeRight,
    animateFadeLeft,
  };
}
