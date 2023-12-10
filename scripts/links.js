// Define the base URL
const baseURL = "https://coreymos.github.io/wdd230/";

// Define the links JSON data file URL
const linksURL = `${baseURL}data/links.json`;

const learningActivitiesList = document.querySelector('#learning-activities');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
  weeks.forEach(week => {
    let listItem = document.createElement('li');
    listItem.textContent = `${week.week}: `;
    
    week.links.forEach((link, index, array) => {
      let anchor = document.createElement('a');
      anchor.href = link.url.startsWith('http') ? link.url : baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);

      if (index < array.length - 1) {
        listItem.appendChild(document.createTextNode(' | '));
      }
    });

    learningActivitiesList.appendChild(listItem);
  });
}

getLinks();
