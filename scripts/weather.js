// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with query parameters for Longview, WA [46.1382, -122.9382]
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=46.1382&lon=-122.9382&units=imperial&appid=c3cad2aa355219e330e9cc6a9cc3077b';

// Asynchronous function to fetch API data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // Process and display the results
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to display the results
function displayResults(data) {
    const temperature = `${Math.round(data.main.temp)}&deg;F`; // Round the temperature to the nearest whole number
    let desc = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    currentTemp.innerHTML = `${temperature} - ${desc}`; // Concatenate temperature and description
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = ''; // Clear the figcaption if you're including the description with the temperature
}  

// Invoke the apiFetch function
apiFetch();
