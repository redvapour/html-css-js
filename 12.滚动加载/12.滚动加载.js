const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    // 返回窗口的文档显示区的高度，如果有垂直滚动条，也包括滚动条高度
    const trigger = window.innerHeight /5 * 4;
    
    boxes.forEach(box => {
        /* 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
        该函数返回一个Object对象，该对象有6个属性：top,lef,right,bottom,width,height
        rectObject.top：元素上边到视窗上边的距离 */
        const boxTop = box.getBoundingClientRect().top;

        // 如果盒子上边距小于屏幕4/5，则显示，否则隐藏
        if(boxTop < trigger){
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}