const shophidden = document.querySelector('.shop-hidden');
const shop = document.querySelector('.shop');
shop.onclick = function(){
    shophidden.classList.toggle('active')
}

const collection = document.querySelector('.collection');
const collectionhidden= document.querySelector('.collection-hidden');
collection.onclick = function(){
    collectionhidden.classList.toggle('active')
}

const explorehidden = document.querySelector('.explore-hidden');
const explore = document.querySelector('.explore');
explore.onclick = function(){
    explorehidden.classList.toggle('active')
}


const bug = document.querySelector('.bug');
const leftbug = document.querySelector('.left-bug');
bug.onclick = function(){
    leftbug.classList.toggle('active')
}

const leftshop = document.querySelector('.left-shop');
const leftshopnav= document.querySelector('.left-shop-nav');
leftshop.onclick = function(){
    leftshopnav.classList.toggle('active')
}

const leftcollection = document.querySelector('.left-collection');
const leftcollectionnav= document.querySelector('.left-collection-nav');
leftcollection.onclick = function(){
    leftcollectionnav.classList.toggle('active')
}

const leftexplore = document.querySelector('.left-explore');
const leftexplorenav= document.querySelector('.left-explore-nav');
leftexplore.onclick = function(){
    leftexplorenav.classList.toggle('active')
}

const topsidebar = document.querySelector('.top-sidebar')
$(window).on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;
    if(wheel>0){
    //올릴때
        topsidebar.style.display = 'block';
    } else {
    //내릴때
        topsidebar.style.display = 'none';
    }
});