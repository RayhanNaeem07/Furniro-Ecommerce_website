const hamburgerMenu = document.querySelector('.hamburger-menu');
  const headerNav = document.querySelector('.header-nav');
  const headerIcons = document.querySelector('.header-icons');

  hamburgerMenu.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    headerIcons.classList.toggle('active');
    if (headerIcons.classList.contains('active')) {
      const navHeight = headerNav.offsetHeight;
      headerIcons.style.top = `calc(100% + ${navHeight}px)`;
    }
    const icon = hamburgerMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });