document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const banners = document.querySelectorAll('.banner-container > .cs-background');
    const totalBanners = banners.length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function showBanner(index) {
        banners.forEach((banner, i) => {
            banner.classList.remove('active');
            if (i === index) {
                banner.classList.add('active');
            }
        });
    }

    function navigateBanner(direction) {
        if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
        } else if (direction === 'next') {
            currentIndex = (currentIndex + 1) % totalBanners;
        }
        showBanner(currentIndex);
    }

    function handleKeyboard(event) {
        const key = event.key;
        if (key === 'Enter' || key === ' ') {
            event.preventDefault();
            if (event.target.id === 'prev') {
                navigateBanner('prev');
            } else if (event.target.id === 'next') {
                navigateBanner('next');
            }
        }
    }

    prevButton.addEventListener('click', () => navigateBanner('prev'));
    nextButton.addEventListener('click', () => navigateBanner('next'));

    prevButton.addEventListener('keydown', handleKeyboard);
    nextButton.addEventListener('keydown', handleKeyboard);

    // Initialize the first banner
    showBanner(currentIndex);
});
