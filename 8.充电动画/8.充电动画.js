const num =document.querySelector('.num');
let counter = 0 ;
// 设置定时器
setInterval(() => {
    if (counter == 100 ){
        clearInterval();
    }else{
        counter ++;
        num.textContent = counter + '%';
    }
},80)