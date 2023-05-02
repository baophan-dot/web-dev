window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})
var noidungs = document.getElementsByClassName("noidungs");
var buttons = document.getElementsByClassName("buttons");
var viss = document.getElementsByClassName("viss");

function changevideo(tabname){
    for(vis of viss){
        vis.classList.remove('active-video');
    }
    document.getElementById(tabname).classList.add("active-video");
}
function changenoidung(tabname){
    for(noidung of noidungs){
        noidung.classList.remove("active-noidung");
    }
    for(button of buttons){
        button.classList.remove("active-button");
    }
    event.currentTarget.classList.add("active-button");
    document.getElementById(tabname).classList.add("active-noidung");
}
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var vids = document.getElementsByClassName('vids');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

function changevid(tabname){
    for(vid of vids){
        vid.classList.remove("active-vid");
    }
    document.getElementById(tabname).classList.add("active-vid");
}

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev'); 
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length-1;

next.onclick = function(){
    if (active + 1 > lengthItems){
        active = 0;
    }else{
        active +=1;
    }
    reloadSilder();
}
prev.onclick = function(){
    if (active - 1 < 0){
        active = lengthItems;
    }else{
        active -= 1;
    }
    reloadSilder();
}
function reloadSilder(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px'; 

    let lastActiveDot = document.querySelector('.slider .dots li.active-dot');
    lastActiveDot.classList.remove('active-dot'); 
    dots[active].classList.add('active-dot');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()},5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSilder();
    })
})

let refreshSlider = setInterval(() => {next.click()},5000);

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}