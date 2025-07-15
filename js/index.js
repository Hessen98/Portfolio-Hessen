let nav =  document.getElementById('nav')
let anchor =  document.querySelectorAll('#nav .links a')
let responsiveIcon =  document.querySelector('#nav .responsive-links')
let responsiveLinks =  document.querySelector('#nav ul')


responsiveIcon.onclick = function(){
    responsiveLinks.classList.toggle('click')
}

anchor.forEach(function (ele) {
    ele.onclick = function () {
        responsiveLinks.classList.toggle('click')
    };
});

// change nav color
window.onscroll = function(){
    if (scrollY > window.innerHeight - 70) {
        nav.classList.add('change-color')
    } else {
        nav.classList.remove('change-color')
    }
}