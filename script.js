const pages = [
    'main/00______Template.html',
    'main/02______Splash_Screen.html',
    'main/03______Under_Construction.html'
  ];
  
  let currentPage = 0;
  
  function loadPage() {
    fetch(pages[currentPage])
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
        document.getElementById('content').classList.add('fade-in');
        setTimeout(() => {
          document.getElementById('content').classList.remove('fade-in');
          currentPage++;
          if (currentPage < pages.length) {
            setTimeout(loadPage, 2000);  // 2000ms (2s) delay before next page
          }
        }, 3000);  // 3000ms (3s) duration for each page
      });
  }
  
  window.onload = loadPage;
  