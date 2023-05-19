function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    // Elegir elemento restante
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Cambiar el elemento.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Encender el sonido
  wheel.play();
  // Inicializar variables
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";


  let MagicRoaster = shuffle([1890, 2250, 2610]);
  let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let RiceCooker = shuffle([1810, 2170, 2530]);
  let LunchBox = shuffle([1770, 2130, 2490]);
  let Sanken = shuffle([1750, 2110, 2470]);
  let Electrolux = shuffle([1630, 1990, 2350]);
  let JblSpeaker = shuffle([1570, 1930, 2290]);
    

  // Lista
  let Hasil = shuffle([
    MagicRoaster[0],
    Sepeda[0],
    RiceCooker[0],
    LunchBox[0],
    Sanken[0],
    Electrolux[0],
    JblSpeaker[0],
  ]);
  // Log de la consola [0]);

  // Asignar el valor
  if (MagicRoaster.includes(Hasil[0])) SelectedItem = "Gráfica NVIDIA 4060 RTX";
  if (Sepeda.includes(Hasil[0])) SelectedItem = "1 Año de Gimnasio";
  if (RiceCooker.includes(Hasil[0])) SelectedItem = "Memoria Ram RGB 2x8GB";
  if (LunchBox.includes(Hasil[0])) SelectedItem = "Aire acondicionado";
  if (Sanken.includes(Hasil[0])) SelectedItem = "Monitor 2k 170Hz";               
  if (Electrolux.includes(Hasil[0])) SelectedItem = "Ropa (200€)";
  if (JblSpeaker.includes(Hasil[0])) SelectedItem = "GPS Coche";

  //
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Alerta
  setTimeout(function () {
    applause.play();
    swal(
      "¡Felicidades!",
      "Has ganado: " + SelectedItem + ".",  
    );
  }, 5500);

  // Delay al volver
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
