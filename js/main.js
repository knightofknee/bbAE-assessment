
function navBarClick() {

  let navElement = document.getElementById('header-bot');
  if (navElement.className === 'header-bottom') {
      navElement.className += ' activated';
  } else {
      navElement.className = 'header-bottom';
  }
  return false
}

function accordionAbout(){
  let subsection = document.getElementById('about-us')
  if (subsection.className === 'expander__panel') {
    subsection.className += ' clicked';
} else {
    subsection.className = 'expander__panel';
}
return false
}

function accordionContact(){
  let subsection = document.getElementById('contact')
  if (subsection.className === 'expander__panel') {
    subsection.className += ' clicked';
} else {
    subsection.className = 'expander__panel';
}
return false
}

function accordionNav(){
  let subsection = document.getElementById('acc-nav')
  if (subsection.className === 'expander__panel') {
    subsection.className += ' clicked';
} else {
    subsection.className = 'expander__panel';
}
return false
}
