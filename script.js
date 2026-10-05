// Bilder-Arrays für Top 1 und Top 2 (jeweils 10 Interior + 2 Exterior Fotos)
const imagesTop1 = [
    "images/interior top1 (1).jpg",
    "images/interior top1 (2).jpg",
    "images/interior top1 (3).jpg",
    "images/interior top1 (4).jpg",
    "images/interior top1 (5).jpg",
    "images/interior top1 (6).jpg",
    "images/interior top1 (7).jpg",
    "images/interior top1 (8).jpg",
    "images/interior top1 (9).jpg",
    "images/interior top1 (10).jpg",
    "images/exterior top1 (1).jpg",
    "images/exterior top1 (2).jpg"
];

const imagesTop2 = [
    "images/interior top2 (1).jpg",
    "images/interior top2 (2).jpg",
    "images/interior top2 (3).jpg",
    "images/interior top2 (4).jpg",
    "images/interior top2 (5).jpg",
    "images/interior top2 (6).jpg",
    "images/interior top2 (7).jpg",
    "images/interior top2 (8).jpg",
    "images/interior top2 (9).jpg",
    "images/interior top2 (10).jpg",
    "images/exterior top2 (1).jpg",
    "images/exterior top2 (2).jpg"
];

let currentIndexTop1 = 0;
let currentIndexTop2 = 0;

// Slider Navigation durch die Bilder
function changeImage(apartment, direction) {
    if (apartment === 'top1') {
        currentIndexTop1 = (currentIndexTop1 + direction + imagesTop1.length) % imagesTop1.length;
        document.getElementById('img-top1').src = encodeURI(imagesTop1[currentIndexTop1]);
    } else if (apartment === 'top2') {
        currentIndexTop2 = (currentIndexTop2 + direction + imagesTop2.length) % imagesTop2.length;
        document.getElementById('img-top2').src = encodeURI(imagesTop2[currentIndexTop2]);
    }
}

// Lightbox Funktionen für Bildvergrößerung beim Klick
function openLightbox(apartment) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    
    if (apartment === 'top1') {
        modalImg.src = encodeURI(imagesTop1[currentIndexTop1]);
    } else if (apartment === 'top2') {
        modalImg.src = encodeURI(imagesTop2[currentIndexTop2]);
    }
    
    modal.style.display = 'flex';
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
