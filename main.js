// navbar animation
window.addEventListener('scroll', (event) => {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('nav-scrolling-bg', window.scrollY > 20);

    let logo = document.querySelector('a.navbar-brand');
    console.log(logo)
    let logoChild = logo.querySelectorAll('span');
    console.log(logoChild)
    //console.log(logoChild)
    for (let a = 0; a < logoChild.length; a++) {
        let spanEl = logoChild[a];
        console.log(spanEl)
        spanEl.classList.toggle('nav-scrolling-color', window.scrollY > 20)
    }

    let ulElement = document.getElementsByClassName('navbar-nav');
    //console.log(ulElement)
    for (let i = 0; i < ulElement.length; i++) {
        let parentEl = ulElement[i];
        let child = parentEl.getElementsByClassName('nav-item');
        //console.log(child)
        for (let j = 0; j < child.length; j++) {
            let liEl = child[j]
            //console.log(liEl)
            let child2 = liEl.getElementsByClassName('nav-link');
            //console.log(child2)
            for (let k = 0; k < child2.length; k++) {
                let aEl = child2[k];
                //console.log(aEl)
                aEl.classList.toggle('nav-scrolling-color', window.scrollY > 20);
            }
        }
    }
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