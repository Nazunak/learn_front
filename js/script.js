// бургер меню 

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .header__burger-span').toggleClass('active');
        $('body').toggleClass('block');
    });
});

// кінець бургер меню 

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