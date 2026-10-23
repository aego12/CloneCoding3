document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('#header');
    const menuButton = header.querySelector('.hamburger');
    function closeMenu() {
        header.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', '메뉴 열기');
    }
    menuButton.addEventListener('click', function () {
        const isOpen = header.classList.toggle('menu-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    });
    header.querySelectorAll('.gnb a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && header.classList.contains('menu-open')) {
            closeMenu();
            menuButton.focus();
        }
    });

    if (typeof Swiper === 'undefined') {
        return;
    }

    const sideItems = document.querySelectorAll('#hero .side-nav li');

    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '#hero .hero-arrow.prev',
            nextEl: '#hero .hero-arrow.next',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        on: {
            init: function () {
                setActiveSideNav(this.realIndex);
            },
            slideChange: function () {
                setActiveSideNav(this.realIndex);
            },
        },
    });

    sideItems.forEach(function (item, index) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            heroSwiper.slideToLoop(index);
        });
    });

    function setActiveSideNav(activeIndex) {
        sideItems.forEach(function (item, index) {
            item.classList.toggle('active', index === activeIndex);
        });
    }
});
