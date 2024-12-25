// De lijst met DJ's en hun schema in UTC-05:00 (EST)
const schedule = [
  { name: 'DJ Kaotic', genre: 'Open Genre', location: 'USA', time: '2024-12-31T11:00:00-05:00' },
  { name: 'JCK', genre: 'Raw Techno', location: 'Philadelphia, USA', time: '2024-12-31T12:00:00-05:00' },
  { name: 'M4tt', genre: 'Jersey Club', location: 'Japan', time: '2024-12-31T13:00:00-05:00' },
  { name: '505uke', genre: 'Techno', location: 'Japan', time: '2024-12-31T14:00:00-05:00' },
  { name: 'PARIS', genre: 'Techno', location: 'Germany', time: '2024-12-31T16:00:00-05:00' },
  { name: 'DJ Jigsaw', genre: 'DnB', location: 'UK', time: '2024-12-31T17:00:00-05:00' },
  { name: 'OneWay', genre: 'Hardstyle', location: 'Europe', time: '2024-12-31T18:00:00-05:00' },
  { name: 'NMA (Francisco)', genre: 'Dubstep', location: 'France', time: '2024-12-31T19:00:00-05:00' },
  // Voeg hier meer DJ's toe
];

// Selecteer de container waar de agenda komt
const scheduleContainer = document.getElementById('schedule');

// Doorloop alle items in de lijst
schedule.forEach(event => {
  // Interpreteer de tijd als UTC-05:00
  const eventTime = new Date(event.time);

  // Converteer naar de lokale tijd van de gebruiker
  const localTime = eventTime.toLocaleString(undefined, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Haal de lokale tijdzone van de gebruiker op
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Maak een HTML-blok voor dit schema-item
  const scheduleItem = document.createElement('div');
  scheduleItem.className = 'schedule-item';
  scheduleItem.innerHTML = `
    <h2>${event.name}</h2>
    <p><strong>Genre:</strong> ${event.genre}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Time:</strong> ${localTime}</p>
  `;

  // Voeg het item toe aan de container
  scheduleContainer.appendChild(scheduleItem);
});
