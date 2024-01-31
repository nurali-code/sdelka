document.querySelectorAll('.services-item').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        document.querySelectorAll('.services-item').forEach(function (item) {
            item.classList.remove('is_active');
        });
        this.classList.add('is_active');
    });
});

document.querySelectorAll('.modal_toggle').forEach(function (modalOpen) {
    modalOpen.addEventListener('click', function () {
        document.getElementById('modal').classList.toggle('is_active');
    });
});


// Для .capability .js
document.querySelectorAll('.capability .js .item-img').forEach(function (item) {
    var currentImg = 0;
    var interval;

    function startAnimation() {
        if (interval) return; // Предотвращаем повторное запускание анимации

        var imgs = item.querySelectorAll('img');
        Array.from(imgs).forEach(function (img) {
            img.style.display = 'none';
        });
        imgs[1].style.display = 'block';
        currentImg = 1;
        interval = setInterval(fadeInNextImage, 500);
        item.setAttribute('data-interval', interval);
    }

    function stopAnimation() {
        clearInterval(interval);
        interval = null; // Сбрасываем значение интервала
        var imgs = item.querySelectorAll('img');
        Array.from(imgs).forEach(function (img, index) {
            if (index !== 1) {
                img.style.display = 'none';
            }
        });
        imgs[0].style.display = 'block';
        currentImg = 0;
    }

    function fadeInNextImage() {
        var imgs = item.querySelectorAll('img');
        imgs[currentImg].style.display = 'none';
        currentImg = (currentImg + 1) % imgs.length;
        imgs[currentImg].style.display = 'block';
    }

    function handleClick(event) {
        event.preventDefault(); // Предотвращаем действие по умолчанию
        if (item.getAttribute('data-interval')) {
            stopAnimation();
            item.removeAttribute('data-interval'); // Удаляем атрибут после остановки анимации
        } else {
            // Останавливаем анимации на других элементах перед запуском текущей анимации
            document.querySelectorAll('.capability .js .item-img').forEach(function (otherItem) {
                if (otherItem !== item) {
                    stopAnimation.call(otherItem);
                }
            });
            startAnimation();
        }
    }

    // Обработчики событий
    item.addEventListener('click', handleClick);
    item.addEventListener('mouseenter', startAnimation);
    item.addEventListener('mouseleave', stopAnimation);
    item.addEventListener('touchstart', handleClick);
});



gsap.registerPlugin(ScrollTrigger);

gsap.to("#h1_shadow", {
    scrollTrigger: {
        trigger: "h1",
        start: "30% 0%",
        end: "170% 0%",
        // markers: true,
        scrub: true
    },
    y: -100
});

gsap.to("#freeImg", {
    scrollTrigger: {
        trigger: ".free-wrap",
        start: "80% 80%",
        end: "100% 80%",
        // markers: true,
        scrub: true
    },
    filter: "blur(0px)"
});

gsap.to("#free", {
    scrollTrigger: {
        trigger: ".free-wrap",
        start: "70% 70%",
        end: "bottom bottom",
        // markers: true,
        scrub: true
    },
    backgroundColor: "#1E1E1F",
    color: '#fff'
});

gsap.to("#shadown", {
    scrollTrigger: {
        trigger: ".free-wrap",
        start: "107% 80%",
        end: "112% 80%",
        // markers: true,
        scrub: true
    },
    opacity: '1'
});