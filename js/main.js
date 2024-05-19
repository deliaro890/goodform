function goToPage(id) {
  window.location.assign(id+'.html');
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.brand');
  if (window.scrollY > 0) {
      navbar.classList.add('transparent');
  } else {
      navbar.classList.remove('transparent');
  }
});