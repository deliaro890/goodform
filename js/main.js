function goToPage(id) {
    localStorage.setItem('section-template',id)
    window.location.assign('section-template.html');
  }