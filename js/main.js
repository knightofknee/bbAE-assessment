
function navBarClick() {
  console.log('hello!!!')
  let navElement = document.getElementById('header-bot');
  if (navElement.className === 'header-bottom') {
      navElement.className += ' activated';
  } else {
      navElement.className = 'header-bottom';
  }
  return false
}
