// List of DJs and times in EST (UTC-5)
const schedule = [
  { name: 'DJ Kaotic', genre: 'Open Genre', location: 'USA', time: '2024-12-31T11:00:00-05:00' },
  { name: 'JCK', genre: 'Raw Techno', location: 'Philadelphia, USA', time: '2024-12-31T12:00:00-05:00' },
  { name: 'M4tt', genre: 'Jersey Club', location: 'Japan', time: '2024-12-31T13:00:00-05:00' },
  { name: '505uke', genre: 'Techno', location: 'Japan', time: '2024-12-31T14:00:00-05:00' },
  { name: 'PARIS', genre: 'Techno', location: 'Germany', time: '2024-12-31T16:00:00-05:00' },
  { name: 'DJ Jigsaw', genre: 'DnB', location: 'UK', time: '2024-12-31T17:00:00-05:00' },
  { name: 'OneWay', genre: 'Hardstyle', location: 'Europe', time: '2024-12-31T18:00:00-05:00' },
  { name: 'NMA (Francisco)', genre: 'Dubstep', location: 'France', time: '2024-12-31T19:00:00-05:00' },
  // Voeg hier extra DJ's toe
];

const scheduleContainer = document.getElementById('schedule');

schedule.forEach(event => {
  // Zet EST tijd om naar de tijdzone van de gebruiker
  const estTime = new Date(event.time); // Interpreteer tijd in EST
  const localTime = estTime.toLocaleString(undefined, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Gebruiker's lokale tijdzone
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Voeg een event-item toe aan de lijst
  const scheduleItem = document.createElement('div');
  scheduleItem.className = 'schedule-item';
  scheduleItem.innerHTML = `
    <h2>${event.name}</h2>
    <p><strong>Genre:</strong> ${event.genre}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Time:</strong> ${localTime}</p>
  `;

  scheduleContainer.appendChild(scheduleItem);
});
