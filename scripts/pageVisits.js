    // Check if 'visits' is stored in localStorage
    let visits = localStorage.getItem('visits');

    // If not, initialize to 0
    if (!visits) {
        visits = 0;
    }

    // Increment the visits count
    visits++;

    // Update localStorage with the new count
    localStorage.setItem('visits', visits);

    // Update the counter display on the page
    document.getElementById('visitCounter').innerText = 'Visits: ' + visits;