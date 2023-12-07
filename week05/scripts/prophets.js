// Declare constants for the URL and the HTML div element
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Async function to fetch data from the JSON source
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets); // temporary testing of data retrieval

  // Call the displayProphets function with the prophets array
  displayProphets(data.prophets);
}

// Function expression to process each prophet and build a card
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements for the card
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Build the h2 content with the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image portrait by setting all relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Add the card to the cards div
    cards.appendChild(card);
  });
}

// Call the getProphetData function to fetch and display the prophets data
getProphetData();
