//top-contain border
const topcontain = document.querySelector('.top-contain');

let topcontog = ()=>{
    topcontain.classList.contains('active')?
    topcontain.classList.remove('active'):null;
    topcontain.classList.toggle('active');
}

//scroll-event
$(window).scroll(()=>{
    topcontain.classList.remove('active')
    $(window).scrollTop();
    });

//top-nav-hidden
const hiddentop = (ac1,ac2,ac3,ac4)=>{
    ac1.onclick = ()=>{
        ac2.classList.toggle('active');

        topcontog();
        if(
            ac3.classList.contains('active') ||
            ac4.classList.contains('active')
        ){
            ac3.classList.remove('active');
            ac4.classList.remove('active')
        }
    }
}

const shop = document.querySelector('.shop');
const shophidden = document.querySelector('.shop-hidden');

const collection = document.querySelector('.collection');
const collectionhidden= document.querySelector('.collection-hidden');

const explore = document.querySelector('.explore');
const explorehidden = document.querySelector('.explore-hidden');

hiddentop(shop,shophidden,collectionhidden,explorehidden);
hiddentop(collection,collectionhidden,shophidden,explorehidden);
hiddentop(explore,explorehidden,shophidden,collectionhidden);


//left-bug
const bug = document.querySelector('.bug');
const leftbug = document.querySelector('.left-bug');

bug.onclick = ()=>{
    leftbug.classList.toggle('active');
}

//left-bug-nav
$('.bug').on('click',()=>{
    $('.left-nav-con li> nav> a').slideUp();
});
let num=0;

        $('.left-nav-con>li').on('click',()=>{

            let idx = $(this).index();

            if(num!=idx){
                $('.left-nav-con li> nav> a').slideUp();
            }
            $(this).find('a').slideToggle();

            num = idx;

        });

//top-sidebar
const topsidebar = document.querySelector('.top-sidebar')
$(window).on('mousewheel',function(e){

    let wheel = e.originalEvent.wheelDelta;

    if(wheel>0){
    //올릴때
        topsidebar.style.display = 'block';
    } else {
    //내릴때
        topsidebar.style.display = 'none';

    }
});

//mid-img
const prebtn = document.querySelector('.mid-pre')
const nextbtn = document.querySelector('.mid-next')
const midimg = document.querySelector('.mid-top-img')
const midimga = document.querySelectorAll('.mid-top-img > a')

let midarrow = function(){
    let midimgcount = 0;

    nextbtn.addEventListener('click',()=>{
        if (midimgcount < 4){
            midimgcount++;  
            midimg.style =`transform: translateX(${40-midimgcount*20}%);`
        }    
    })

    prebtn.addEventListener('click',()=>{
        if (midimgcount >0){
            midimgcount--;
            midimg.style =`transform: translateX(${40-midimgcount*20}%);`
        }
    })
}
midarrow();


