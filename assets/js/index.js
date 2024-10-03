let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// 自動輪播
setInterval(nextSlide, 5000);

// 拖曳功能
let startX, endX, isDragging = false;

const carouselInner = document.querySelector('.carousel-inner');

// 觸控設備
carouselInner.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
});

carouselInner.addEventListener('touchmove', (event) => {
    if (!isDragging) return;
    endX = event.touches[0].clientX;
});

carouselInner.addEventListener('touchend', () => {
    if (isDragging) {
        if (startX > endX + 50) {
            nextSlide();
        } else if (startX < endX - 50) {
            prevSlide();
        }
    }
    isDragging = false;
});

// 桌面拖曳功能
carouselInner.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    isDragging = true;
    event.preventDefault(); // 防止選取文本

    const mouseMoveHandler = (event) => {
        if (!isDragging) return;
        endX = event.clientX;
    };

    const mouseUpHandler = () => {
        if (isDragging) {
            if (startX > endX + 50) {
                nextSlide();
            } else if (startX < endX - 50) {
                prevSlide();
            }
        }
        isDragging = false;
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});



// 產品卡片

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    const productImg = card.querySelector('.product-img img'); // 每個卡片的圖片

    card.addEventListener('mouseenter', () => {
        productImg.src = './assets/images/products/bringing-wealth-and-blessings-2.webp'; // 更換為第二張圖片
        productImg.style.transform = 'scale(1.2)'; // 圖片放大效果
    });

    card.addEventListener('mouseleave', () => {
        productImg.src = './assets/images/products/bringing-wealth-and-blessings-1.webp'; // 恢復為第一張圖片
        productImg.style.transform = 'scale(1)'; // 圖片恢復原來大小
    });
});

