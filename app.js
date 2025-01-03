console.log('app.ts ejecutando...');
function crearEquipo() {
  var _a;
  // Obtener los elementos del DOM
  var nombreInput = document.getElementById("id-equipo");
  var escudoInput = document.getElementById("id-escudo");
  // Validar que los elementos existen
  if (!nombreInput || !escudoInput) {
      console.error("No se encontraron los elementos en el DOM.");
      alert("Error al acceder a los campos. Por favor, revise el HTML.");
      return;
  }
  // Obtener los valores ingresados
  var nombreEquipo = nombreInput.value;
  var escudoFile = (_a = escudoInput.files) === null || _a === void 0 ? void 0 : _a[0];
  // Validar los datos
  if (!nombreEquipo) {
      console.error("Por favor, ingrese un nombre para el equipo.");
      alert("Por favor, ingrese un nombre para el equipo.");
      return;
  }
  if (!escudoFile) {
      console.error("Por favor, seleccione un archivo de escudo.");
      alert("Por favor, seleccione un archivo de escudo.");
      return;
  }
  // Leer el archivo como Base64
  var reader = new FileReader();
  reader.onload = function (e) {
      var _a;
      var escudoBase64 = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Validar que el evento tenga resultado
      if (escudoBase64) {
          // Crear un JSON con los datos ingresados
          var equipo = {
              nombre: nombreEquipo,
              escudo: escudoBase64.toString(), // Convertir a string
          };
          agregarEquipo(equipo);
          // Simulación de envío
          // fetch('/api/equipos', { method: 'POST', body: JSON.stringify(equipo) });
      }
      else {
          console.error("No se pudo leer el archivo.");
      }
  };
  reader.readAsDataURL(escudoFile); // Leer el archivo como URL Base64
  nombreInput.value = "";
  escudoInput.value = "";
}
function agregarEquipo(datos) {
  var nuevoEquipo = document.createElement("div");
  nuevoEquipo.setAttribute("class", "table-header");
  var celda_tabla;
  celda_tabla = document.createElement("div");
  celda_tabla.setAttribute("class", "table-cell");
  celda_tabla.textContent = "-";
  nuevoEquipo.appendChild(celda_tabla);
  celda_tabla = document.createElement("div");
  celda_tabla.setAttribute("class", "table-cell");
  celda_tabla.textContent = "img"; //escudo
  nuevoEquipo.appendChild(celda_tabla);
  celda_tabla = document.createElement("div");
  celda_tabla.setAttribute("class", "table-cell");
  celda_tabla.textContent = datos.nombre;
  nuevoEquipo.appendChild(celda_tabla);
  for (var i = 0; i < 8; i++) {
      celda_tabla = document.createElement("div");
      celda_tabla.setAttribute("class", "table-cell");
      celda_tabla.textContent = "0";
      nuevoEquipo.appendChild(celda_tabla);
  }
  var tabla = document.getElementsByClassName("table");
  if (tabla) {
      tabla[0].appendChild(nuevoEquipo);
      //Mostrar por consola
      console.log("Equipo Agregado: ", nuevoEquipo.textContent);
  }
  else {
      alert("error");
  }
}
function iniciarSesion() {
  var elem = document.getElementById("editar");
  if (elem) {
      elem.style.display = "block";
      var btnLI = document.getElementById("btn-login");
      if (btnLI) {
          btnLI.style.display = "none";
          var btnLO = document.getElementById("btn-logout");
          if (btnLO) {
              btnLO.style.display = "block";
          }
      }
  }
}
function cerrarSesion() {
  var elem = document.getElementById("editar");
  if (elem) {
      elem.style.display = "none";
      var btnLI = document.getElementById("btn-login");
      if (btnLI) {
          btnLI.style.display = "block";
          var btnLO = document.getElementById("btn-logout");
          if (btnLO) {
              btnLO.style.display = "none";
          }
      }
  }
}
