
const subselect = document.querySelectorAll('.sub-select');
const pu = document.querySelectorAll('.pu');
const brand = document.querySelectorAll('.brand');

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
    let Lclone =profigure[prominiimg.length-1].cloneNode(true);
    probigmig.prepend(Lclone);

    //끝까지 가면 처음으로 돌아오게 하기
    FLclone = function(){
        setTimeout(()=>{
            if(evnetnum >= prominiimg.length+1){
                evnetnum = 1;
                    probigmig.style =`transition:0s;transform: translateX(-${100*evnetnum}%);`
            }else if(evnetnum <= 0){
                evnetnum = prominiimg.length;
                probigmig.style =`transition:0s;transform: translateX(-${100*evnetnum}%);`
            };
        },550)
    
    }

    //앞으로 클릭
    prorightmove.addEventListener('click',function(){
        setTimeout(()=>{
            evnetnum++
            probigmig.style =`transform: translateX(-${100*evnetnum}%);`
            FLclone();
        },300)
    });

    //뒤로 클릭
    proleftmove.addEventListener('click',function(){
        setTimeout(()=>{
            evnetnum--
            probigmig.style =`transform: translateX(-${100*evnetnum}%);`
            FLclone();
        },300)
    });

//제품 아래 작은 이미지 클릭시 큰화면 
    prominiimg.forEach((ele,key)=>{
        ele.addEventListener('click',function(){
                event.preventDefault();
                evnetnum = key + 1;
                probigmig.style =`transform: translateX(-${100*evnetnum}%);`
            });
    })
}

//제품과 제품 미니 화면 움직이는 명령어
movearr();

const procolor =document.querySelector(`.product-color`);
const procolorim = document.querySelectorAll('.product-sm-img > a');
const innercolor =[`COLOR: BLACK`,`COLOR: BLUE`,`COLOR: DESERT`,`COLOR: GREEN`,`COLOR: SIVER`];

procolorim.forEach((ele,key)=>{
    ele.addEventListener('mouseenter',function(){
    procolor.innerHTML = innercolor[key];
    })
    ele.addEventListener('mouseleave',function(){
        procolor.innerHTML = innercolor[0];
    })
})


//제품 add the cart
const procountmi =  document.querySelector(`.product-count-minus`);
const procountpu =  document.querySelector(`.product-count-plus`);
const proadd =  document.querySelector(`.product-add`);
let procount = 1;
let innerWidth = window.innerWidth;

function addcart(){
    procount = 1;
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
        alert("최소 수량 입니다.")
        procount = 1;
    }
    proadd.innerHTML=`<input class="product-add" type="text" value="${procount}">`
    });
};

/*cart count*/ 
addcart();

//캐쉬저장

const probtn =  document.querySelector('.product-btn');
const bag = document.querySelector('.bag > span');

probtn.addEventListener('click',()=>{
    event.preventDefault();
    sessionStorage.setItem('cashpro',procount)
});

