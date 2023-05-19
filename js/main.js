// Ocultar todos los submenús al cargar la página
$(document).ready(function() {
  $(".submenu").hide();

  // Cargar el estado del submenú de "Guía zona por zona" y mantenerlo abierto si estás dentro de ese submenú
  var submenuGuia = $("#submenu-guia");
  if (submenuGuia.hasClass("active")) {
    submenuGuia.show();
  } else {
    submenuGuia.hide();
  }

  // Cargar el estado del submenú de "Guía de Objetos" y mantenerlo abierto si estás dentro de ese submenú
  var submenuObjetos = $("#submenu-objetos");
  if (submenuObjetos.hasClass("active")) {
    submenuObjetos.show();
  } else {
    submenuObjetos.hide();
  }

  // Cargar el estado del submenú de "Lista de Misiones" y mantenerlo abierto si estás dentro de ese submenú
  var submenuMisiones = $("#submenu-misiones");
  if (submenuMisiones.hasClass("active")) {
    submenuMisiones.show();
  } else {
    submenuMisiones.hide();
  }

  // Cargar el estado del submenú de "Otros" y mantenerlo abierto si estás dentro de ese submenú
  var submenuOtros = $("#submenu-otros");
  if (submenuOtros.hasClass("active")) {
    submenuOtros.show();
  } else {
    submenuOtros.hide();
  }

  // Mostrar u ocultar los submenús según el enlace clicado
  $(".dropdown-link").click(function(e) {
    e.preventDefault();
    var submenu = $(this).next(".submenu");
    var submenuId = submenu.attr("id");

    if (submenu.is(":visible")) {
      submenu.hide();
      saveSubmenuState(submenuId, false); // Guardar el estado del submenú como cerrado
    } else {
      submenu.show();
      saveSubmenuState(submenuId, true); // Guardar el estado del submenú como abierto
    }
  });
});
