document.querySelectorAll('.services-item').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        document.querySelectorAll('.services-item').forEach(function (item) {
            item.classList.remove('is_active');
        });
        this.classList.add('is_active');
    });
});

// Для .capability .js
document.querySelectorAll('.capability .js').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        var imgs = this.querySelectorAll('.item-img img');
        Array.from(imgs).forEach(function (img) {
            img.style.display = 'none';
        });
        imgs[0].style.display = 'block';
        var currentImg = 0;
        function fadeInNextImage() {
            imgs[currentImg].style.display = 'none';
            currentImg = (currentImg + 1) % imgs.length;
            imgs[currentImg].style.display = 'block';
        }
        var interval = setInterval(fadeInNextImage, 1200);
        this.setAttribute('data-interval', interval);
    });

    item.addEventListener('mouseleave', function () {
        clearInterval(this.getAttribute('data-interval'));
        var imgs = this.querySelectorAll('.item-img img');
        Array.from(imgs).forEach(function (img, index) {
            if (index !== 0) {
                img.style.display = 'none';
            }
        });
        imgs[0].style.display = 'block';
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#freeImg", {
    scrollTrigger: {
        trigger: ".free-wrap",
        start: "20% 10%",
        // pin: true,
        end: "bottom bottom",
        markers: true,
        scrub: true
    },
    filter: "blur(0px)"
});