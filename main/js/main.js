// on/off menu shadow if somebody scroll site to down


const header = document.querySelector('header');

const stickHeader = () => {
  const scroll = window.scrollY;

  // jezeli ktos zacznie skrolowac strone header dostanie klase active

  if (scroll > 0 ){
    header.classList.add('active');
  } else {
    header.classList.remove('active')
  } 
  
};

window.addEventListener('scroll', stickHeader);

// on/fo for hamburger if somebody click on him

// const - pobieranie class z html-u, nasluchiwanie na click myszka...

const menu = document.querySelector('.menu');
const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
});


// scrolowanie automatyczne do wybranych sekcji plus autozamykanie hamburgera/menu

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      110;

    menu.classList.remove('active');
    hamburgerBtn.classList.remove('active');

    window.scrollTo({ top: section, behavior: 'smooth' });
  })
);

// multitext

/* var typingEffect = new Typed(".multiText",{
  Strings : ["Web developer", "Coder", "Designer", "Graphic"],
  loop : true,
  typeSpeed : 100,
  backSpeed : 70,
  backDelay : 1400,
});

*/
