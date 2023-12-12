const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.1382&lon=-122.9382&units=imperial&appid=c3cad2aa355219e330e9cc6a9cc3077b';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // Process and display the results
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  const forecastData = data.list.slice(0, 24); // Get the first 24 hours (3 days)
  const days = ['day1', 'day2', 'day3'];

  days.forEach((day, index) => {
    const timepoint = forecastData[index * 8];
    const dayTemperature = `${Math.round(timepoint.main.temp)}°F`;
    const desc = timepoint.weather[0].description.charAt(0).toUpperCase() + timepoint.weather[0].description.slice(1);
    const iconsrc = `https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`;

    document.querySelector(`#${day}`).innerHTML = `
      <img src="${iconsrc}" alt="${desc}">
      <span>${dayTemperature} - ${desc}</span>
    `;
  });
}

apiFetch();
