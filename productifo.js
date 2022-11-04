fetch("./porduct.json")
.then(function(str){
    return str.json()
})
.then((data)=>{
    const productnum =(key)=>data.product[key].productNum;
    const img =(key)=>data.product[key].img;
    const imgnum =(key)=>data.product[key].imgNum;
    const thumb =(key)=>data.product[key].thumb;
    const name =(key)=>data.product[key].name;
    const stock =(key)=>data.product[key].stock;
})