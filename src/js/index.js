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
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 4
            }
        },
        navigation: {
            nextEl: '.brands__arrow-next',
            prevEl: '.brands__arrow-prev',
        },

    });


    // Так никогда не делай!!!
    if (document.querySelector('.preview__play')) {
        const playVideo = document.querySelector('.preview__play');
        const preview = document.querySelector('.preview__img');
        const videoText = document.querySelector('.video__text');
        const videoBg = document.querySelector('.video__bg');
        const videoWrap = document.querySelector('.video__player');
        const video = document.querySelector('.video__wrap iframe');

        playVideo.addEventListener('click', () => {
            playVideo.style.display = 'none';
            preview.style.display = 'none';
            videoText.style.display = 'none';
            video.style.display = 'block';
            video.style.marginTop = '-50rem';
            video.style.position = 'relative';
            video.style.zIndex = '100';
            videoBg.style.zIndex = '0';
            videoWrap.style.minHeight = '50rem';

        });
    }

    // Слайдер Reviews
    const swiperReviews = new Swiper('.reviews__slider', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3
            }
        },
        navigation: {
            nextEl: '.reviews__arrow-next',
            prevEl: '.reviews__arrow-prev',
        },
        pagination: {
            el: '.reviews__pagination',
            clickable: true,
        },

    });

    // Слайдер Example
    const swiperExample = new Swiper('.example__slider', {
        loop: true,
        spaceBetween: 30,
        // centeredSlides: true,
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 4
            }
        },
        navigation: {
            nextEl: '.example__arrow-next',
            prevEl: '.example__arrow-prev',
        },
        // pagination: {
        //     el: '.reviews__pagination',
        //     clickable: true,
        // },

    });

    

    if(document.querySelector('.question__item')){
        const accordion = document.querySelector('.question__accordion');
        const tab = accordion.querySelectorAll('.question__item');
        const answer = accordion.querySelectorAll('.question__answer');

        console.log('123');

        accordion.addEventListener('click', (e)=> {
            const target = e.target.closest('.question__item');

            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        answer[i].classList.add('active');
                        tab[i].classList.add('active-accordion');
                    } else {
                        answer[i].classList.remove('active');
                        tab[i].classList.remove('active-accordion');
                    }
                });
            }
        })
    }

});