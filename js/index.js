const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.link');
  console.log(navLinks);

  // Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    console.log('event registered')
  });

  //Animate links
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 1.5}s`;
    console.log(index);
  });
}

navSlide();