// Define the base URL
const baseURL = "https://coreymos.github.io/wdd230/";

// Define the links JSON data file URL
const linksURL = `${baseURL}chamber/data/members.json`;

async function loadAndDisplayMembers() {
    try {
        // Load the members data
        const response = await fetch(linksURL);
        const data = await response.json();
        const members = data.members; // Access the members array from the JSON data

        // Filter for Silver and Gold members
        const qualifiedMembers = members.filter(member => 
            member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');

        // Randomly select 2 to 3 members
        const selectedMembers = [];
        for (let i = 0; i < Math.floor(Math.random() * 2) + 2 && i < qualifiedMembers.length; i++) {
            let index = Math.floor(Math.random() * qualifiedMembers.length);
            selectedMembers.push(qualifiedMembers[index]);
            qualifiedMembers.splice(index, 1); // To avoid duplicates
        }

        // Display these members in the spotlights
        const spotlights = document.querySelectorAll('.spotlight');
        selectedMembers.forEach((member, index) => {
            if (spotlights[index]) {
                spotlights[index].innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <p><a href="${member.website}">Visit Website</a></p>`;
            }
        });

    } catch (error) {
        console.error('Error loading or processing members:', error);
    }
}

window.onload = loadAndDisplayMembers;
