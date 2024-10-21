const pages = [
  '00______Template.html',      // Página 1
  '02______Splash_Screen.html', // Página 2
  '03______Under_Construction.html' // Página 3
];

let currentPage = 0;

function loadPage() {
  fetch(pages[currentPage])  // Cargar la página actual
    .then(response => response.text())
    .then(data => {
      const content = document.getElementById('content');
      content.innerHTML = data;  // Inserta la nueva página en el div

      content.classList.add('fade-in');  // Aplica fade-in al contenido

      setTimeout(() => {
        content.classList.remove('fade-in');  // Quita fade-in después de 2s
        currentPage++;  // Incrementa la página actual
        
        if (currentPage < pages.length) {
          setTimeout(loadPage, 1000);  // Espera 1 segundo antes de cargar la siguiente página
        } else {
          // Si ya no hay más páginas, cargar la página final (index)
          window.location.href = 'index.html';  // Redirige al index después
        }
      }, 3000);  // Muestra cada página por 3 segundos
    });
}

window.onload = loadPage;  // Ejecuta cuando la página cargue
