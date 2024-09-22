function toggleMenu() {
    var menu = document.getElementById('menuDropdown');
    menu.classList.toggle('show');
  }

  // Optionally close the menu when clicking outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.navbar-toggler')) {
      var dropdowns = document.getElementsByClassName("custom-menu");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }