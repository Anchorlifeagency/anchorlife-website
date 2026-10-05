// Bildergallerie Steuerung für die Apartments Top 1 und Top 2
const imagesTop1 = [
    "images/interior (1).jpg",
    "images/interior (2).jpg",
    "images/interior (3).jpg",
    "images/interior (4).jpg",
    "images/exterior (1).jpg"
];

const imagesTop2 = [
    "images/interior (5).jpg",
    "images/interior (6).jpg",
    "images/interior (7).jpg",
    "images/interior (8).jpg",
    "images/exterior (2).jpg"
];

let currentIndexTop1 = 0;
let currentIndexTop2 = 0;

function changeImage(apartment, direction) {
    if (apartment === 'top1') {
        currentIndexTop1 = (currentIndexTop1 + direction + imagesTop1.length) % imagesTop1.length;
        document.getElementById('img-top1').src = imagesTop1[currentIndexTop1];
    } else if (apartment === 'top2') {
        currentIndexTop2 = (currentIndexTop2 + direction + imagesTop2.length) % imagesTop2.length;
        document.getElementById('img-top2').src = imagesTop2[currentIndexTop2];
    }
}