const swiper = new Swiper('.swiper-banner', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
});

const swiperServices = new Swiper('.swiper-services', {
    loop: true,

    slidesPerView: 4,
    spaceBetween: 30,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 2.3,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
});

const swiperPartners = new Swiper('.swiper-partners', {
    spaceBetween: 90,
    enabled: true,

    breakpoints: {
        320: {
            allowTouchMove: true,
            spaceBetween: 25,
            slidesPerView: 1,
            grid: {
                rows: 2,
                fill: "row",
            }
        },
        480: {
            allowTouchMove: true,
            spaceBetween: 40,
            slidesPerView: 2,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        768: {
            allowTouchMove: true,
            spaceBetween: 40,
            slidesPerView: 4,
            grid: {
                rows: 1,
                fill: "row",
            }
        },
        1024: {
            allowTouchMove: true,
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: "row",
            }
        },
        1280: {
            allowTouchMove: true,
            slidesPerView: 4,
            grid: {
                rows: 3,
                fill: "row",
            }
        },
        1921: {
            allowTouchMove: true,
            spaceBetween: 40,
            slidesPerView: 5,
            grid: {
                rows: 4,
                fill: "row",
            }
        },
    },

    pagination: {
        el: '.swiper-pagination',
    },
});
