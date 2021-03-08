// Mobile viewport stuff
window.addEventListener('resize', () => {
    let vh = innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); //set property to root
});