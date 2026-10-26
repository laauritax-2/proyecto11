// Busca el fondo que contiene la ventana emergente.
const fondoPopup = document.getElementById("fondo-popup");

// Busca el botón que acepta el consentimiento.
const botonAceptar = document.getElementById("aceptar-cookies");

// Escucha el clic que hace la persona en el botón.
botonAceptar.addEventListener("click", () => {
    // Agrega la clase "oculto" para esconder el aviso.
    fondoPopup.classList.add("oculto");
});
