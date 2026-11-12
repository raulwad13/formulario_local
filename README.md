# Formulario con localStorage

Ejercicio sencillo de HTML, CSS y JavaScript para practicar formularios y almacenamiento en el navegador.

## Cómo probarlo

1. Abre `index.html` en el navegador.
2. Escribe un nombre, un correo y un mensaje.
3. Pulsa **Guardar en este navegador**.
4. En las herramientas de desarrollo puedes consultar la clave `datosForm` en **Application > Local Storage**.

## Cómo funciona

`script.js` escucha el evento `submit`, evita que la página se recargue y guarda los valores con `localStorage.setItem()`.

**Privacidad:** los datos permanecen en el navegador utilizado. No hay backend, no se envían correos y no se recomienda introducir información personal real en esta demostración.
