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
    item.addEventListener('mouseenter', function () {
        var imgs = this.querySelectorAll('.item-img img');
        Array.from(imgs).forEach(function (img) {
            img.style.display = 'none';
        });
        imgs[1].style.display = 'block'; // Показываем вторую картинку
        var currentImg = 1; // Устанавливаем индекс второй картинки
        function fadeInNextImage() {
            imgs[currentImg].style.display = 'none';
            currentImg = (currentImg + 1) % imgs.length;
            imgs[currentImg].style.display = 'block';
        }
        var interval = setInterval(fadeInNextImage, 500);
        this.setAttribute('data-interval', interval);
    });

    item.addEventListener('mouseleave', function () {
        clearInterval(this.getAttribute('data-interval'));
        var imgs = this.querySelectorAll('.item-img img');
        Array.from(imgs).forEach(function (img, index) {
            if (index !== 1) { // Скрываем все картинки, кроме второй
                img.style.display = 'none';
            }
        });
        imgs[1].style.display = 'block'; // Показываем вторую картинку
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#freeImg", {
    scrollTrigger: {
        trigger: ".free-wrap",
        start: "20% 10%",
        end: "bottom bottom",
        // markers: true,
        scrub: true
    },
    filter: "blur(0px)"
});