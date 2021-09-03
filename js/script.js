var dots = document.getElementById('dot');
var nav_list = document.getElementById('nav-list');
var modal = document.getElementById('modal');
var nav = document.querySelector('.navtoggle');
var ul = document.querySelector('.navtoggle nav ul');


function menuToggle() {
  if (dots.className === 'dot') {
    dots.className += ' clicked';
  } else {
    dots.className = 'dot';
  }

  if (nav_list.className === 'col-lg-4 col-md-12 nav-list') {
    nav_list.className += ' clicked';
  } else {
    nav_list.className = 'col-lg-4 col-md-12 nav-list';
  }

  if (modal.className === 'modal') {
    modal.className += ' clicked';
  } else {
    modal.className = 'modal';
  }
}


function menuToggleWork() {
  dots.className = 'dot';
  nav_list.className = 'col-lg-4 col-md-12 nav-list';
  modal.className = 'modal';
}


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  var screenWidth = window.width;

  if (screenWidth >= 1024) {
    screenWidth = "large";
  } else if (screenWidth < 640) {
    screenWidth = "small";
  } else {
    screenWidth = "medium";
  }

  if ((currentScroll > 130) && (screenWidth = "large")) {
    nav.classList.add('scrolled');
  }
  if ((currentScroll > 195) && (screenWidth = "large")) {
    nav.classList.add('complete');
  }
  if ((currentScroll < 195) && (screenWidth = "large")) {
    nav.className = 'navtoggle scrolled';
  }
  if ((currentScroll < 130) && (screenWidth = "large")) {
    nav.classList.remove('scrolled');
    nav.classList.remove('complete');
    modal.classList.remove('clicked');
    nav_list.classList.remove('clicked');
    dots.classList.remove('clicked');
  }

  if ((currentScroll > 150) && (screenWidth = "medium")) {
    nav.classList.add('scrolled');
  }
  if ((currentScroll > 195) && (screenWidth = "medium")) {
    nav.classList.add('complete');
  }
  if ((currentScroll < 195) && (screenWidth = "medium")) {
    nav.className = 'navtoggle scrolled';
  }
  if ((currentScroll < 150) && (screenWidth = "medium")) {
    nav.classList.remove('scrolled');
    nav.classList.remove('complete');
    modal.classList.remove('clicked');
    nav_list.classList.remove('clicked');
    dots.classList.remove('clicked');
  }

});
