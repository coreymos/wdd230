// Define the base URL
const baseURL = "https://coreymos.github.io/wdd230/chamber/";

// Define the members JSON data file URL
const membersURL = `${baseURL}data/members.json`;

const memberContainer = document.querySelector('#memberContainer');

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach(member => {
    let memberDiv = document.createElement('div');
    memberDiv.classList.add('member-card');

    let name = document.createElement('h2');
    name.textContent = member.name;
    
    let address = document.createElement('p');
    address.textContent = member.address;

    let phone = document.createElement('p');
    phone.textContent = member.phone;

    let website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Visit Website';
    
    let image = document.createElement('img');
    image.src = member.image;
    image.alt = `Image of ${member.name}`;

    memberDiv.appendChild(image);
    memberDiv.appendChild(name);
    memberDiv.appendChild(address);
    memberDiv.appendChild(phone);
    memberDiv.appendChild(website);

    memberContainer.appendChild(memberDiv);
  });
}

getMembers();
