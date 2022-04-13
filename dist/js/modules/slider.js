function slider() {

    //Slider

    const sliderPrev = document.querySelector('.offer__slider-prev');
    const sliderNext = document.querySelector('.offer__slider-next');
    const slides = document.querySelectorAll('.offer__slide');
    const total = document.querySelector('#total');
    const currentNumb = document.querySelector('#current');
    const slidesWrapper = document.querySelector(".offer__slider-wrapper");
    const slidesField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;
    const slider = document.querySelector('.offer__slider')

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        currentNumb.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length;
        currentNumb.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    let dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
`;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
`;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function dotMoveIn() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function currentSlide() {
        if (slides.length < 10) {
            currentNumb.textContent = `0${slideIndex}`
        } else {
            currentNumb.textContent = slideIndex;
        }
    }

    function NotDigits(str) {
        return +str.replace(/\D/g, '');
    };

    sliderNext.addEventListener('click', () => {
        if (offset == NotDigits(width) * (slides.length - 1)) { // '500px'
            offset = 0;
        } else {
            offset += NotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        currentSlide();
        dotMoveIn();
    })

    sliderPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset = NotDigits(width) * (slides.length - 1); // '500px'
        } else {
            offset -= NotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        currentSlide();
        dotMoveIn();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = NotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            currentSlide();
            dotMoveIn();

        });
    });
};

module.exports = slider;