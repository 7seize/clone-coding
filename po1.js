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



//가운데 버튼=============================================================
const prebtn = document.querySelector('.mid-pre')
const nextbtn = document.querySelector('.mid-next')
const midimg = document.querySelector('.mid-top-img')
const midimga = document.querySelectorAll('.mid-top-img > a')

let midarrow = function(){
    let midimgcount = 5;

    midimg.style =`transform: translateX(-100%)`

    midimg.prepend(midimga[8].cloneNode(true));
    midimg.prepend(midimga[7].cloneNode(true));
    midimg.prepend(midimga[6].cloneNode(true));
    midimg.prepend(midimga[5].cloneNode(true));
    midimg.prepend(midimga[4].cloneNode(true));

    midimg.append(midimga[0].cloneNode(true));
    midimg.append(midimga[1].cloneNode(true));
    midimg.append(midimga[2].cloneNode(true));
    midimg.append(midimga[3].cloneNode(true));
    midimg.append(midimga[4].cloneNode(true));
    midimg.append(midimga[5].cloneNode(true));

    let inter;
    nextbtn.addEventListener('click',()=>{
            clearTimeout(inter)
            inter = setTimeout(()=>{            
                midimgcount++;   
                console.log(midimgcount)
                midimg.style =`transform: translateX(-${midimgcount*20}%);`
            },200)     
            
            setTimeout(()=>{
                if(midimgcount >= 14){
                    midimgcount =5;
                    midimg.style =`transition: 0s;transform: translateX(-${midimgcount*20}%);`
                }
            },600)
        
    })

    prebtn.addEventListener('click',()=>{
        midimgcount--;
        midimg.style =`transform: translateX(-${midimgcount*20}%);`
        console.log(midimgcount)
        setTimeout(()=>{
            if(midimgcount <= 0){
                midimgcount =10;
                midimg.style =`transition: 0s;transform: translateX(-${midimgcount*20}%);`
            }
        },600)
    })
}
midarrow();

let media = window.matchMedia('(min-width:768px)');
media.addListener(function(){
    if(media.matches){
        midarrow();
    }
})


