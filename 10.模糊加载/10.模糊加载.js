const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
// 按照指定的周期（以毫秒计）来调用函数或计算表达式
let int = setInterval(blurring,30);

function blurring() {
    load++;
    if(load > 99){
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    //文字透明度：自增数据*-0.01 + 1    =>0.99--0.01
    //图片模糊度：自增数据*-0.3 + 30    =>29.7--0
    return  ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min   
}