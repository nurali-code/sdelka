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
document.querySelectorAll('.capability .js').forEach(function (item) {
    var interval, currentImg = 0;

    function startAnimation() {
        var imgs = item.querySelectorAll('.item-img img');
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
        var imgs = item.querySelectorAll('.item-img img');
        Array.from(imgs).forEach(function (img, index) {
            if (index !== 1) {
                img.style.display = 'none';
            }
        });
        imgs[0].style.display = 'block';
        currentImg = 0;
    }

    function fadeInNextImage() {
        var imgs = item.querySelectorAll('.item-img img');
        imgs[currentImg].style.display = 'none';
        currentImg = (currentImg + 1) % imgs.length;
        imgs[currentImg].style.display = 'block';
    }

    // Добавляем обработчик клика и touchstart
    item.addEventListener('click', function () {
        if (item.getAttribute('data-interval')) {
            stopAnimation();
        } else {
            startAnimation();
        }
    });

    item.addEventListener('touchstart', function () {
        if (item.getAttribute('data-interval')) {
            stopAnimation();
        } else {
            startAnimation();
        }
    });

    item.addEventListener('mouseenter', startAnimation);
    item.addEventListener('mouseleave', stopAnimation);
});


gsap.registerPlugin(ScrollTrigger);

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