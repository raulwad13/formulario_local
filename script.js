// Este ejercicio guarda los datos en este navegador, no en un servidor.
const formulario = document.getElementById("container-form");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!formulario.reportValidity()) return;

  const datos = {
    nombre: formulario.elements.nombre.value.trim(),
    email: formulario.elements.email.value.trim(),
    mensaje: formulario.elements.mensaje.value.trim()
  };

  if (!datos.nombre || !datos.mensaje) {
    resultado.textContent = "Completa todos los campos.";
    return;
  }

  localStorage.setItem("datosForm", JSON.stringify(datos));
  resultado.textContent = "Datos guardados en este navegador.";
});
