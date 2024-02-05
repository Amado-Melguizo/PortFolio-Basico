// translation.js

document.getElementById('translateButton').addEventListener('click', () => {
  const elementoTexto = document.getElementById('textoTraducir');
  const textoATraducir = elementoTexto.innerText;
  const rutaEnJson = 'config/en.json';
  const rutaEsJson = 'config/es.json';
  const botonTraduccion = document.getElementById('translateButton');

  const idiomaActual = botonTraduccion.getAttribute('data-lang');
  const rutaJson = idiomaActual === 'es' ? rutaEnJson : rutaEsJson;

  fetch(rutaJson)
    .then((response) => response.json())
    .then((translations) => {
      const textoTraducido = textoATraducir
        .split(' ')
        .map((word) => translations[word] || word)
        .join(' ');

      elementoTexto.innerText = textoTraducido;

      // Alterna el idioma del botón
      const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
      botonTraduccion.setAttribute('data-lang', nuevoIdioma);
      botonTraduccion.innerText = nuevoIdioma === 'es' ? 'Traducir a inglés' : 'Translate to Spanish';
    })
    .catch((error) => {
      console.error('Error al cargar traducciones:', error);
    });
});
