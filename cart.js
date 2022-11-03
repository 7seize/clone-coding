
let secnum = sessionStorage.getItem('cashpro');

//수량 0일떄
const cartti = document.querySelector('.cart-ti')
const nocheckout = document.querySelector('.nocheckout')

//수량 1이상
const cartticon = document.querySelector('.cart-ti-con')
const cartpro = document.querySelector('.cart-pro')
const cartalltotal = document.querySelector('.cart-all-total')
const checkout = document.querySelector('.checkout')

//수량 확인
if(secnum == 0){
    cartticon.style = 'display: none;'
    cartpro.style = 'display: none;'
    cartalltotal.style = 'display: none;'
    checkout.style = 'display: none;'
}else{
    cartti.style = 'display: none;'
    nocheckout.style = 'display: none;'
}

//닫기버튼
const cartcloser = document.querySelector('.cart-closer')

cartcloser.addEventListener('click',()=>{
    sessionStorage.setItem('cashpro',0);

    cartti.style ='display: block;';
    nocheckout.style ='display: block;';

    cartticon.style = 'display: none;'
    cartpro.style = 'display: none;'
    cartalltotal.style = 'display: none;'
    checkout.style = 'display: none;'
})

//수량 * 제품 가격
const cartqty = document.querySelector('.cart-qty');
const carttotal = document.querySelector('.cart-total');
const fintotal = document.querySelector('.fin-total');

cartqty.innerHTML = `${secnum}`;
carttotal.innerHTML = `$${secnum*95}.00`;
fintotal.innerHTML = `$${secnum*95}.00`;
