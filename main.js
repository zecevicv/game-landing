window.addEventListener('load', (event) => {
  /* #Dropdown
  ======================================================= */
  // Timeline
  const dropdown = document.querySelector('.dropdown');
  const toggle = document.querySelector('.dropdown .toggle');
  const dropdownTl = gsap.timeline({paused: true})
  .set('.dropdown-menu', {display: 'block'})
  .to('.dropdown-menu', {duration: .2, opacity: 1, ease: 'back.out(2)'})
  .from('.dropdown-menu', {duration: .2, scale: .9, ease: 'back.out(2)', y: "80%"}, "<");
  // Event Listener on toggler
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
    // Play animation depending on class active being present
    if (dropdown.classList.contains('active')) {
      dropdownTl.play();
    } else {
      dropdownTl.reverse();
    }
  });
  // Event listener on window for clicking outside of dropdown
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown .toggle') && dropdown.classList.contains('active')) {
      dropdownTl.reverse();
      dropdown.classList.remove('active');
    }
  });

  /* #Collapse
  ======================================================= */
  const collapse = document.querySelector('.collapse');
  collapse.addEventListener('click', (e) => {
    if (e.target.closest('.item')) {
      const item = e.target.closest('.item');
      // Remove active class for all items
      collapse.querySelectorAll('.item').forEach((item) => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
      e.target.closest('.item').classList.add('active');
    }
  });

  /* #Header Scroll
  ======================================================= */
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-dark');
    } else {
      header.classList.remove('header-dark');
    }
  });
  if (window.scrollY > 0) {
    header.classList.add('header-dark');
  } else {
    header.classList.remove('header-dark');
  }

  /* #About Swiper Slider
  ======================================================= */
  new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }
  });

  /* #Hamburger Menu
  ======================================================= */
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', (e) => {
    // Animate Hamburger Icon
    hamburger.classList.toggle('is-active');
    // Remover scrolling from body
    document.body.classList.toggle('no-scroll');
    // Show Navigation Popup
    document.querySelector('.header-popup').classList.toggle('show');
  }); 
  // Listen for a click outside of header or popup and disable it
  document.addEventListener('click', (e) => {
    if (document.querySelector('.header-popup').classList.contains('show')) {
      console.log('1');
      if (!e.target.closest('.header') && !e.target.closest('.header-popup')) {
        // Animate Hamburger Icon
        hamburger.classList.remove('is-active');
        // Remover scrolling from body
        document.body.classList.remove('no-scroll');
        // Show Navigation Popup
        document.querySelector('.header-popup').classList.remove('show');
      }
    }
  });

  /*===============   Viewport Fix   ===============*/
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

});