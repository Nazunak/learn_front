// бургер меню 

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .header__burger-span').toggleClass('active');
        $('body').toggleClass('block');
    });
});

// кінець бургер меню 

// ініціалізація слайдера 

new Swiper('.image-slider', {
    // arrows 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // навігація
    pagination: {
        el: '.swiper-pagination',
        // буллети
        clickable: true,
        // буллети динамічні
        dynamicBullets: true,
        // буллети кастомні
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        // // фракція
        // type: 'fraction',
        // // фракція кастомна
        // renderFraction: function(currentClass, totalClass) {
        // return ' Фото <span class="' + currentClass + '"></span>' +
        //     ' з ' +
        //     '<span class="' + totalClass + '"></span>';
        // // прогресбар
        // type: 'progresbar', 
        },
    // кількість відображення картинок на одному слайді
    slidesPerView: 1,
    // // скролбар
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true
    // },
    // курсор перетаскування
     grabCursor: true,
    // слайд мишкою
    mousewheel: {
        sensitivity: 1,
    },
    // // відступ між слайдами
    // spaceBetween: 30,
    // // кількість пролистуюмих слайдів
    // slidePerGroup: 1,
    // // активний слайд по центру
    // centeredSlides: true,
});


// ініціалізація слайдера 



// // скролл
// scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true
// },
// // курсор перетаскування
// grabCursor: true,
// // слайд мишкою
// mousewheel: {
//     sensitivity: 1,
// },
// // кількість видимих слайдів




// початок спойлера 
// $(document).ready(function() {
//     $('.spoiler__title').click(function(event) {
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });
// кінець спойлера 

// $(document).ready(function() {
//     $('.spoiler__title').click(function(event) {
//         $(this).toggleClass('active');
//     });
// });

// const button = document.querySelector('.block__contact-text');
// const container = document.querySelector('.block__contact-info');

// button.addEventListener('click', () => {
//   if (container.classList.contains('active')) {
//     container.classList.remove('active');
//     container.style.maxHeight = 0;
//   } else {
//     container.classList.add('active');
//     container.style.maxHeight = container.scrollHeight + 'px';
//   }
// });