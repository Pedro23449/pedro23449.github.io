document.addEventListener("DOMContentLoaded", function() {
  var pagina2Link = document.querySelector('nav ul li:nth-child(2) a');

  pagina2Link.addEventListener('click', function(e) {
    e.preventDefault();
    var submenu = document.getElementById('submenu');
    submenu.classList.toggle('show');
  });
  
  // Agregamos la clase "show" al submenú de "Pueblo del Comienzo" si se accede a la página "Introducción.html" desde ese enlace en el índice
  var currentPathname = window.location.pathname;
  if (currentPathname.includes("Introducción.html") && pagina2Link.getAttribute("href").includes("Pueblo del Comienzo.html")) {
    var puebloSubmenu = document.querySelector("#pueblo-link + .dropdown-menu");
    puebloSubmenu.classList.add("show");
  }
  
  // Restauramos el estado del menú desplegable desde localStorage al cargar la página
  if (localStorage.getItem('menuState') === 'true') {
    $('.dropdown-menu').show();
    closeDropdownMenus();
    $('.dropdown-link').parent().addClass('active');
  }
});

// Obtenemos el enlace correspondiente al elemento activo en la página actual
var currentPageLink = document.querySelector('nav a[href="' + window.location.pathname + '"]');

// Agregamos la clase "active" al elemento correspondiente
if (currentPageLink) {
  currentPageLink.classList.add('active');
}

$(document).ready(function(){
  $('.dropdown-toggle').click(function(){
    $('.dropdown-menu').toggle();
    closeDropdownMenus();
    $(this).parent().toggleClass("active");
    
    // Almacenamos el estado del menú desplegable en localStorage
    localStorage.setItem('menuState', $('.dropdown-menu').is(':visible'));
  });
});

function closeDropdownMenus() {
  var dropdowns = document.getElementsByClassName("dropdown-menu");
  for (var i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].id === "pueblo-comienzo-dropdown") {
      dropdowns[i].style.display = "none";
    } else {
      dropdowns[i].parentNode.classList.remove("active");
      dropdowns[i].style.display = "";
    }
  }
}


  const zoomableImages = document.querySelectorAll('.zoomable');

  zoomableImages.forEach(function (img) {
    img.addEventListener('click', function () {
      this.classList.toggle('zoomed');
    });
  });

  $(document).ready(function() {
    // Ocultar todos los submenús al cargar la página
    $(".submenu").hide();

    // Mostrar el submenú correspondiente cuando se hace clic en un enlace
    $(".dropdown-link").click(function(e) {
      e.preventDefault();
      $(this).next(".submenu").slideToggle();
    });
  });


