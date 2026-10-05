// Bilder-Arrays für Top 1 und Top 2 (jeweils 10 Interior + 2 Exterior Fotos)
const imagesTop1 = [
    "images/interior%20top1%20(1).jpg",
    "images/interior%20top1%20(2).jpg",
    "images/interior%20top1%20(3).jpg",
    "images/interior%20top1%20(4).jpg",
    "images/interior%20top1%20(5).jpg",
    "images/interior%20top1%20(6).jpg",
    "images/interior%20top1%20(7).jpg",
    "images/interior%20top1%20(8).jpg",
    "images/interior%20top1%20(9).jpg",
    "images/interior%20top1%20(10).jpg",
    "images/exterior%20top1%20(1).jpg",
    "images/exterior%20top1%20(2).jpg"
];

const imagesTop2 = [
    "images/interior%20top2%20(1).jpg",
    "images/interior%20top2%20(2).jpg",
    "images/interior%20top2%20(3).jpg",
    "images/interior%20top2%20(4).jpg",
    "images/interior%20top2%20(5).jpg",
    "images/interior%20top2%20(6).jpg",
    "images/interior%20top2%20(7).jpg",
    "images/interior%20top2%20(8).jpg",
    "images/interior%20top2%20(9).jpg",
    "images/interior%20top2%20(10).jpg",
    "images/exterior%20top2%20(1).jpg",
    "images/exterior%20top2%20(2).jpg"
];

let currentIndexTop1 = 0;
let currentIndexTop2 = 0;

// Slider Navigation
function changeImage(apartment, direction) {
    if (apartment === 'top1') {
        currentIndexTop1 = (currentIndexTop1 + direction + imagesTop1.length) % imagesTop1.length;
        document.getElementById('img-top1').src = imagesTop1[currentIndexTop1];
    } else if (apartment === 'top2') {
        currentIndexTop2 = (currentIndexTop2 + direction + imagesTop2.length) % imagesTop2.length;
        document.getElementById('img-top2').src = imagesTop2[currentIndexTop2];
    }
}

// Lightbox Funktionen für Bildvergrößerung beim Klick
function openLightbox(apartment) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    
    if (apartment === 'top1') {
        modalImg.src = imagesTop1[currentIndexTop1];
    } else if (apartment === 'top2') {
        modalImg.src = imagesTop2[currentIndexTop2];
    }
    
    modal.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('image-modal').style.display = 'none';
}

// Schließen der Großansicht mit ESC-Taste
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
