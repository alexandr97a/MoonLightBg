const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_back = document.getElementById('mountains_back');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const btn = document.getElementById('btn');
const mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
     stars.style.left = value * 0.35 + 'px'; 
     moon.style.top = value * 1 + 'px'; 
     mountains_back.style.top = value * 0.05 + 'px'; 
     mountains_front.style.top = value * 0 + 'px'; 
     text1.style.marginRight = value * 4 + 'px'; 
     text1.style.marginTop = value * 1.2 + 'px'; 
     text2.style.marginLeft = value * 4 + 'px'; 
     text2.style.marginTop = value * 1.2 + 'px'; 
     btn.style.marginTop = value * 1.5 + 'px'; 
} )