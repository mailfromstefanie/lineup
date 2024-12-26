// URL naar je JSON-bestand
const jsonURL = 'https://mailfromstefanie.github.io/vrchat-lineup/lineup.json';

// Functie om de huidige tijd te krijgen in HH:MM formaat
function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().slice(0, 5);
}

// Functie om de lineup dynamisch te laden
function loadLineup() {
  fetch(jsonURL)
    .then((response) => response.json())
    .then((data) => {
      const lineupList = document.getElementById('lineup-list');
      const currentTime = getCurrentTime();
      let isActiveSet = false;

      data.lineup.forEach((slot) => {
        const { timeUTC, dj, genre } = slot;

        // Zet tijd in lokale tijdzone
        const time = new Date(`1970-01-01T${timeUTC}:00Z`).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });

        // Maak een lineup-item
        const item = document.createElement('div');
        item.className = 'lineup-item';

        // Highlight de huidige tijd
        if (currentTime >= time && !isActiveSet) {
          item.classList.add('active');
          isActiveSet = true;
        }

        item.innerHTML = `
          <div class="time">${time}</div>
          <div class="dj">${dj}</div>
          <div class="genre">${genre}</div>
        `;

        lineupList.appendChild(item);
      });
    })
    .catch((error) => {
      console.error('Error loading lineup:', error);
    });
}

// Functie om de huidige tijd in de header bij te werken
function updateCurrentTime() {
  document.getElementById('current-time').textContent = `Current Time: ${getCurrentTime()}`;
}

// Initialiseer de functies
loadLineup();
setInterval(updateCurrentTime, 1000);
