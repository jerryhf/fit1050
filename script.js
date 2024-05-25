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

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
        showBanner(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalBanners;
        showBanner(currentIndex);
    });

    // Initialize the first banner
    showBanner(currentIndex);
});
