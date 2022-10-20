const shophidden = document.querySelector('.shop-hidden');
const shop = document.querySelector('.shop');
shop.onclick = function(){
    shophidden.classList.toggle('active');

    if(
        collectionhidden.classList.contains('active') ||
        explorehidden.classList.contains('active')
    ){
        collectionhidden.classList.remove('active');
        explorehidden.classList.remove('active')
    }
}

const collection = document.querySelector('.collection');
const collectionhidden= document.querySelector('.collection-hidden');
collection.onclick = function(){
    collectionhidden.classList.toggle('active')

    if(
        shophidden.classList.contains('active') ||
        explorehidden.classList.contains('active')
    ){
        shophidden.classList.remove('active');
        explorehidden.classList.remove('active')
    }
    
}

const explorehidden = document.querySelector('.explore-hidden');
const explore = document.querySelector('.explore');
explore.onclick = function(){
    explorehidden.classList.toggle('active');

    if(
        collectionhidden.classList.contains('active') ||
        shophidden.classList.contains('active')
    ){
        collectionhidden.classList.remove('active');
        shophidden.classList.remove('active');
    }
}


const bug = document.querySelector('.bug');
const leftbug = document.querySelector('.left-bug');
bug.onclick = function(){
    leftbug.classList.toggle('active');
    
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

const subselect = document.querySelectorAll('.sub-select');
const pu = document.querySelectorAll('.pu');
const brand = document.querySelectorAll('.brand');

//mouseenter
//mouseleave

const proleftmove =document.querySelector('.product-left-move');
const prorightmove =document.querySelector('.product-right-move');
const prominiimg = document.querySelectorAll('.product-mini-img > a');
const probigmig =document.querySelector('.product-main-img > p');

let m = 2000;
let n = 2200;
prorightmove.addEventListener('click',function(){
    m++;
    n--;
    prominiimg[0].style=`order:${m%5}`;
    prominiimg[1].style=`order:${(m+1)%5}`;
    prominiimg[2].style=`order:${(m+2)%5}`;
    prominiimg[3].style=`order:${(m+3)%5}`;
    prominiimg[4].style=`order:${(m+4)%5}`;
    probigmig.innerHTML=`<img src="./img/product_page/big-${n%5+1}.jpg">`;
});

//append 로 사용해보기!
proleftmove.addEventListener('click',function(){
    m--;
    n++;
    prominiimg[0].style=`order:${m%5}`;
    prominiimg[1].style=`order:${(m+1)%5}`;
    prominiimg[2].style=`order:${(m+2)%5}`;
    prominiimg[3].style=`order:${(m+3)%5}`;
    prominiimg[4].style=`order:${(m+4)%5}`;
    probigmig.innerHTML=`<img src="./img/product_page/big-${n%5+1}.jpg">`;
});

const procolor =document.querySelector(`.product-color`)
const procolorim = document.querySelectorAll('.product-sm-img > a');

procolorim[1].addEventListener('mouseenter',function(){
    procolor.innerHTML = `COLOR: BLUE`;
})
procolorim[1].addEventListener('mouseleave',function(){
    procolor.innerHTML = `COLOR: BLACK`;
})
procolorim[2].addEventListener('mouseenter',function(){
    procolor.innerHTML = `COLOR: DESERT`;
})
procolorim[2].addEventListener('mouseleave',function(){
    procolor.innerHTML = `COLOR: BLACK`;
})
procolorim[3].addEventListener('mouseenter',function(){
    procolor.innerHTML = `COLOR: GREEN`;
})
procolorim[3].addEventListener('mouseleave',function(){
    procolor.innerHTML = `COLOR: BLACK`;
})
procolorim[4].addEventListener('mouseenter',function(){
    procolor.innerHTML = `COLOR: SIVER`;
})
procolorim[4].addEventListener('mouseleave',function(){
    procolor.innerHTML = `COLOR: BLACK`;
})

const procountmi =  document.querySelector(`.product-count-minus`);
const procountpu =  document.querySelector(`.product-count-plus`);
const proadd =  document.querySelector(`.product-add`);

// procountpu.addEventListener('click',function(){
//     proadd.value =?;
// });