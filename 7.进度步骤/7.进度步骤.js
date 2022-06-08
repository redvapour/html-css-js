// 获取元素
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// 初始值
let currentActive = 1;

// 下一步 按钮添加点击监听事件
// 点击后指针++，没越界，执行update函数
next.addEventListener( 'click', () =>{
    currentActive++;
    if( currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
});

// 上一步 按钮添加点击监听事件
// 点击后指针--，没越界，执行update函数
prev.addEventListener( 'click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
});

// 更新函数
function update(){
    /*遍历每个圈，
    如果圈的序号小于当前指针值，则增加'active'类名
    大于等于则移除'active'类名*/
    circles.forEach( (circle,idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }else {
            circle.classList.remove('active');
        }
   })

    //获取所有已激活的圈元素，数组形式
   const actives = document.querySelectorAll('.active');

   //修改进度条颜色
   progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%';

    //控制按钮是否可以点击    .disabled 表单元素属性，t/f 可否使用
   if(currentActive === 1){
       prev.disabled = true;
   }else if (currentActive == circles.length) {
       next.disabled = true;
   }else {
       prev.disabled = false;
       next.disabled = false;
    }
}