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

//left bug===============================================================
$('.bug').on('click',function(){
    $('.left-nav-con li> nav> a').slideUp();
});
let num=0;

        $('.left-nav-con>li').on('click',function(){
            // $('.left-nav-con>li').slideup();

            let idx = $(this).index();
            if(num!=idx){
                $('.left-nav-con li> nav> a').slideUp();
            }
            $(this).find('a').slideToggle();
            num = idx;

        });

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


