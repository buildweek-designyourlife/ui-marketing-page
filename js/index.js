// Resonsive Menu with mobile Hamburger

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links .link');
  console.log(navLinks);

  //init function
  function init() {
    burger.classList.remove('toggle');
    nav.classList.remove('nav-active');
    navLinks.forEach(link => {link.style.animation = ''});
  };

  // Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade .35s ease forwards ${index / 7 + .25}s`;
      }
    });

    // Burger animation
    burger.classList.toggle('toggle');

    // Slide nav off on link click
    navLinks.forEach(link => link.addEventListener('click', () => {
      // nav.classList.remove('nav-active');
      init();
    }))

    // Slide nav off when clicking outside of the nav
    window.addEventListener('mouseup', event => {
      if (event.target !== nav) {
        init();
      }
    })
  });
}

navSlide();