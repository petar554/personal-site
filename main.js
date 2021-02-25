// navbar animation
window.addEventListener('scroll', (event) => {
    let navbar = document.querySelector('nav');
    console.log(event)
    navbar.classList.toggle('scrolling-active', window.scrollY > 20);
});

// typewriting
const contnet = ['Student', 'Web Developer'];
let index = 0;
let count = 0;
let currentContnet = '';
let letter = '';

(function typing() {
    if (count === contnet.length) {
        count = 0;
    }

    currentContnet = contnet[count];
    letter = currentContnet.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (currentContnet.length === letter.length) {
        count++
        index = 0;
    }
    setTimeout(typing, 200);
}());