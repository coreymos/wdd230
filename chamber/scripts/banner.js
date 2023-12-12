document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();
    const banner = document.getElementById('eventBanner');
    const closeBannerButton = document.getElementById('closeBanner');

    // Show the banner on Mondays (1), Tuesdays (2), and Wednesdays (3)
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    }

    // Close the banner
    closeBannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
