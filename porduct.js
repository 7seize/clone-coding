
const subselect = document.querySelectorAll('.sub-select');
const pu = document.querySelectorAll('.pu');
const brand = document.querySelectorAll('.brand');

//mouseenter
//mouseleave

const proleftmove =document.querySelector('.product-left-move');
const prorightmove =document.querySelector('.product-right-move');
const prominiimg = document.querySelectorAll('.product-mini-img > a');
const probigmig =document.querySelector('.product-main-img-contain');
const profigure =document.querySelectorAll('.product-main-img-contain > figure');





//제품 버튼누르면 움직임
let movearr = function(){

    //버튼 누르기전 초기 화면
    let evnetnum = 1;
    probigmig.style =`transform: translateX(-${100*evnetnum}%);`
    

    //제품 무한으로 돌리기,cloneNode(true)는 자식요소도 추가

    //제품 마지막에 첫번쨰 그림 추가
    let Fclone =profigure[0].cloneNode(true);
    probigmig.append(Fclone);

    //제품 처음에 마지막 그림 추가
    let Lclone =profigure[4].cloneNode(true);
    probigmig.prepend(Lclone);

    //끝까지 가면 처음으로 돌아오게 하기
    FLclone = function(){
        setTimeout(()=>{
            if(evnetnum >= 6){
                evnetnum = 1;
                    probigmig.style =`transition:0s;transform: translateX(-${100*evnetnum}%);`
            }else if(evnetnum <= 0){
                evnetnum = 5;
                probigmig.style =`transition:0s;transform: translateX(-${100*evnetnum}%);`
            };
        },550)
    
    }


    //앞으로 
    prorightmove.addEventListener('click',function(){
        setTimeout(()=>{
            evnetnum++
            probigmig.style =`transform: translateX(-${100*evnetnum}%);`
            FLclone();
        },300)
    });

    //뒤로
    proleftmove.addEventListener('click',function(){
        setTimeout(()=>{
            evnetnum--
            probigmig.style =`transform: translateX(-${100*evnetnum}%);`
            FLclone();
        },300)
    });

    

    //제품 아래 작은 이미지 클릭시 큰화면 
    prominiimg[0].addEventListener('click',function(){
        event.preventDefault();
        //화면 리로드되는 것을 막는다.
        evnetnum = 1;
        probigmig.style =`transform: translateX(-${100*evnetnum}%);`
    });
    prominiimg[1].addEventListener('click',function(){
        event.preventDefault();
        evnetnum = 2;
        probigmig.style =`transform: translateX(-${100*evnetnum}%);`
    });
    prominiimg[2].addEventListener('click',function(){
        event.preventDefault();
        evnetnum = 3;
        probigmig.style =`transform: translateX(-${100*evnetnum}%);`
    });prominiimg[3].addEventListener('click',function(){
        event.preventDefault();
        evnetnum = 4;
        probigmig.style =`transform: translateX(-${100*evnetnum}%);`
    });prominiimg[4].addEventListener('click',function(){
        event.preventDefault();
        evnetnum = 5;
        probigmig.style =`transform: translateX(-${100*evnetnum}%);`
    });


}

movearr();
//제품과 제품 미니 화면 움직이는 명령어

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


//제품 add the cart
const procountmi =  document.querySelector(`.product-count-minus`);
const procountpu =  document.querySelector(`.product-count-plus`);
const proadd =  document.querySelector(`.product-add`);

function addcart(){
    let procount = 1;
    let productMax = 4;

    procountpu.addEventListener('click',()=>{
        procount++;
    if(procount > productMax){
        procount = productMax;
        alert("최대 수량을 초과 했습니다.")
    }
    proadd.innerHTML=`<input class="product-add" type="text" value="${procount}">`
    });
    procountmi.addEventListener('click',()=>{
        procount--;
    if(procount < 1){
        alert("최소 수량 입니다")
        procount = 1;
    }
    proadd.innerHTML=`<input class="product-add" type="text" value="${procount}">`
    });

    
};
addcart();

