window.addEventListener('DOMContentLoaded', () => {
    let arrowTel = document.querySelector('.header__arrow');
    let arrowTelephone = document.querySelector('.header__arrow-one');
    let arrowTelephoneHidden = document.querySelector('.header__arrow-two');
    let telephoneHeader = document.querySelector('.header__number-two');

    arrowTel.addEventListener('click', (e) => {
        const target = e.target.closest('.header__arrow-one');
        const targetTwo = e.target.closest('.header__arrow-two');

        // Element.closest()
        // Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.

        if (target) {
            telephoneHeader.style.display = 'block';
            arrowTelephone.style.display = 'none';
            arrowTelephoneHidden.style.display = 'block';
        }
        if (targetTwo) {

            telephoneHeader.style.display = 'none';
            arrowTelephone.style.display = 'block';
            arrowTelephoneHidden.style.display = 'none';
        }
        // console.log(target);
    });


    // Слайдер
    const swiperHero = new Swiper('.hero__slider', {
        // direction: 'vertical',
        loop: true,
        spaceBetween: 30,

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: '.hero__pagination',
        },

        navigation: {
            nextEl: '.hero__arrow-next',
            prevEl: '.hero__arrow-prev',
        },

    });

    // Слайдер
    const swiperBrands = new Swiper('.brands__slider', {
        loop: true,
        spaceBetween: 30,
        breakpoints:{
            320:{
                slidesPerView: 2
            },
            768:{
                slidesPerView: 4
            }
        },
        navigation: {
            nextEl: '.brands__arrow-next',
            prevEl: '.brands__arrow-prev',
        },

    });

});