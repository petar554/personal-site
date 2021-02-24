window.addEventListener('scroll', (event) => {
    let navbar = document.querySelector('nav');
    console.log(event)
    navbar.classList.toggle('scrolling-active', window.scrollY > 20);
});