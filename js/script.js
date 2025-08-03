const pages = {
  home: `
    <h2>Witaj w Galerii Sztuki</h2>
    <p>Oferujemy przestrzeń dla artystów do prezentacji ich dzieł. Zapraszamy do zapoznania się z naszymi wystawami i projektami.</p>
    <img src="https://via.placeholder.com/800x400" alt="Galeria" style="width:100%; margin-top:1rem;">
  `,
  exhibitions: `
    <h2>Aktualne Wystawy</h2>
    <ul>
      <li>„Abstrakcja i Emocja” – do 30 kwietnia 2025</li>
      <li>„Nowoczesne Formy” – do 15 maja 2025</li>
    </ul>
  `,
  projects: `
    <h2>Nasze Projekty</h2>
    <p>Wspieramy lokalne inicjatywy artystyczne i międzynarodowe współprace kulturalne.</p>
    <ul>
      <li>Warsztaty malarskie dla dzieci</li>
      <li>Program stypendialny dla młodych twórców</li>
    </ul>
  `,
  artists: `
    <h2>Nasi Artyści</h2>
    <p>W galerii prezentujemy prace znanych i nadchodzących artystów:</p>
    <ul>
      <li>Anna Kowalska – malarstwo abstrakcyjne</li>
      <li>Jan Nowak – rzeźby z metalu</li>
      <li>Katarzyna Wiśniewska – fotografie dokumentalne</li>
    </ul>
  `,
  contact: `
    <h2>Kontakt</h2>
    <p>Adres: ul. Artystyczna 10, 00-001 Warszawa</p>
    <p>Telefon: +48 123 456 789</p>
    <p>Email: kontakt@galeriasztuki.pl</p>
    <p>Otwarte: Wt–Pt 10:00–18:00, Sobota 11:00–16:00</p>
  `
};

function loadPage(page) {
  const content = document.getElementById('content');
  content.innerHTML = pages[page] || '<h2>Strona nie została znaleziona</h2>';
}

// Załaduj stronę główną na starcie
window.onload = function() {
  loadPage('home');
};