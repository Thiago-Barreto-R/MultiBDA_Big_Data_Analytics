class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "show";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
    }
    
    removeClass() {
      for(const link of this.navLinks) {
        link.addEventListener('click', () => {
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
        })
      }
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
        this.removeClass();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  const navLink = document.querySelectorAll('.nav-link') 

  function linkAction() {
    navLink.forEach(n=> n.classList.remove('active-link'))
    this.classList.add('active-link')
  }

  navLink.forEach(n=> n.addEventListener('click', linkAction))

  const sections = document.querySelectorAll("section[id]")

  window.addEventListener("scroll", navHighlighter)
  
  function navHighlighter() {
      let scrollY = window.pageYOffset
      sections.forEach(current => {
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 10,
          sectionId = current.getAttribute("id")

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
          } else {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
          }
      })
  }
  
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  
  window.addEventListener('scroll', () => {
      if(window.scrollY >= navHeight) {
          header.classList.add('scroll')
      } else {
          header.classList.remove('scroll')
      }
  } )

  const scrollReveal = ScrollReveal({
    opacity: '0',
    distance: '1px',
    duration: 800,
    reset: true
});

scrollReveal.reveal(`#home h1, #home p, 
                     #production h2, #production p, 
                     #quality h2, #quality p, 
                     #repair h2, #repair p, 
                     #smt h2, #smt p`, 
                     { interval: 200})

const scrollReveal2 = ScrollReveal({
  origin: 'left',
  distance: '2rem',
  duration: 800,
  reset: true
});

scrollReveal.reveal(`#production img, #quality img, #repair img, #smt img`)