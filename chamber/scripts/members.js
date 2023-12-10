document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleView");
  const directoryLayout = document.querySelector(".directory-layout");

  toggleButton.addEventListener("click", function () {
      directoryLayout.classList.toggle("list-view");
      directoryLayout.classList.toggle("grid-view");

      // Update the layout when the class is toggled
      if (directoryLayout.classList.contains("list-view")) {
          renderMembersList();
      } else {
          renderMembersGrid();
      }
  });
});

// Define the base URL
const baseURL = "https://coreymos.github.io/wdd230/chamber/";

// Define the members JSON data file URL
const membersURL = `${baseURL}data/members.json`;

const memberContainer = document.querySelector('#memberContainer');

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  return data.members;
}

const renderMembersList = async () => {
  memberContainer.innerHTML = ""; // Clear the container

  const members = await getMembers();
  const list = document.createElement('ul');
  list.classList.add('member-list'); // Add a class to the list for styling

  members.forEach(member => {
      const listItem = document.createElement('li');
      listItem.classList.add('member-card');

      // Set the width of member-card to 500px
      listItem.style.width = "500px";

      const name = document.createElement('h2');
      name.textContent = member.name;

      const address = document.createElement('p');
      address.textContent = member.address;

      const phone = document.createElement('p');
      phone.textContent = member.phone;

      const website = document.createElement('a');
      website.href = member.website;
      website.textContent = 'Visit Website';

      const image = document.createElement('img');
      image.src = member.image;
      image.alt = `Image of ${member.name}`;

      listItem.appendChild(image);
      listItem.appendChild(name);
      listItem.appendChild(address);
      listItem.appendChild(phone);
      listItem.appendChild(website);

      list.appendChild(listItem);
  });

  memberContainer.appendChild(list);

  // Set the width of the list view container to 75% of the screen's width
  memberContainer.style.width = "75%";
}

const renderMembersGrid = async () => {
  memberContainer.innerHTML = ""; // Clear the container

  const members = await getMembers();

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

  // Reset the width of the list view container to auto for grid view
  memberContainer.style.width = "auto";
}

// Initialize with grid view
renderMembersGrid();
