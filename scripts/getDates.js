document.addEventListener('DOMContentLoaded', (event) => {
    // Set the copyright year and name
    document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} Corey Moses, Idaho`;

    // Set the last modified date
    document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;
});
