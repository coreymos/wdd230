document.addEventListener('DOMContentLoaded', () => {
    const visitMessageElement = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();
    
    let message = "Welcome! Let us know if you have any questions.";

    if (lastVisit) {
        const timeDifference = currentVisit - lastVisit;
        const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`;
        }
    }

    visitMessageElement.textContent = message;
    localStorage.setItem('lastVisit', currentVisit);
});
