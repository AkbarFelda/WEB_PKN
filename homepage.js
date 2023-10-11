// Add JavaScript to handle swiper functionality

const boxes = document.querySelectorAll('.box');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

// Function to show the current box

function showBox(index) {
    boxes.forEach((box, i) => {
        if (i === index) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// Initial display
showBox(currentIndex);

// Event listener for next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length;
    showBox(currentIndex);
});

// Event listener for previous button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    showBox(currentIndex);
});
const mediaQuery = window.matchMedia('(max-width: 880px)');

function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        // Mobile view: Show only the first box
        boxes.forEach((box, i) => {
            box.style.display = i === 0 ? 'block' : 'none';
        });
    } else {
        // Desktop view: Show all boxes
        boxes.forEach((box) => {
            box.style.display = 'block';
        });
    }
}

// Initial check and add listener
handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQueryChange);
