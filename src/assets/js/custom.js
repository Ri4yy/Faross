let openMenu = document.querySelector('#openMenu'),
    overlay = document.querySelector('.overlay'),
    btnApplication = document.querySelector('.btn-application'),
    btnDropdown = document.querySelector('.btn-dropdown');

openMenu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
btnApplication.addEventListener('click', toggleMenu);

function toggleMenu() {
    openMenu.querySelectorAll('span')[0].classList.toggle('rotate-left');
    openMenu.querySelectorAll('span')[0].classList.toggle('top-0');
    openMenu.querySelectorAll('span')[2].classList.toggle('rotate-right');
    openMenu.querySelectorAll('span')[2].classList.toggle('bottom-0');

    document.querySelector('html').classList.toggle('overflow-hidden')
    overlay.classList.toggle('opacity-0')
    overlay.classList.toggle('pointer-events-none')

    openMenu.querySelectorAll('span')[1].classList.toggle('hidden')
    document.querySelector('#mobileMenu').classList.toggle('translate-x-[200%]')
}

btnDropdown.addEventListener('click', () => {
    btnDropdown.parentElement.querySelector('ul').classList.toggle('hidden')
    btnDropdown.parentElement.querySelector('ul').classList.toggle('flex')
});

const $leftLinks = document.querySelectorAll('.left-menu a'),
      $mapLinks = document.querySelectorAll('.map a');

$leftLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        let self = e.currentTarget;
        self.addEventListener('click', (e) => {e.preventDefault()})
        let selfClass = self.getAttribute('href');
        let color = self.dataset.color;
        let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
        let currentPath = currentElement.querySelectorAll('path');
        let currentPointColor = currentElement.querySelectorAll('g svg path');
        let currentPoint = currentElement.querySelectorAll('g');
        if(currentPath) currentPath.forEach(el => el.style.cssText=`fill: ${color}; stroke: ${color}`);
        if(currentPointColor) currentPointColor.forEach(el => el.style.cssText=`fill: #EF3900`);
        if(currentPoint) currentPoint.forEach(el => el.style.cssText=`display: block`);
        self.classList.add('text-main-orange')
    })
    el.addEventListener('mouseout', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
        let currentPath = currentElement.querySelectorAll('path');
        let currentPointColor = currentElement.querySelectorAll('g svg path');
        let currentPoint = currentElement.querySelectorAll('g');
        if(currentPath) currentPath.forEach(el => el.style.cssText=`fill: ; stroke: `);
        if(currentPointColor) currentPointColor.forEach(el => el.style.cssText=`fill: #EF3900`);
        if(currentPoint) currentPoint.forEach(el => el.style.cssText=`display: none`);
        self.classList.remove('text-main-orange')
    })
})  

$mapLinks.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let color = self.dataset.color;
        let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
        let currentPath = currentElement.querySelectorAll('path');
        if(currentPath) currentPath.forEach(el => el.style.cssText=`fill: ${color}`);
        currentElement.classList.add('text-main-orange')
    })
    el.addEventListener('mouseout', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.left-menu a[href="${selfClass}"]`);
        let currentPath = currentElement.querySelectorAll('path');
        if(currentPath) currentPath.forEach(el => el.style.cssText=`fill: `);
        currentElement.classList.remove('text-main-orange')
    })
})  
