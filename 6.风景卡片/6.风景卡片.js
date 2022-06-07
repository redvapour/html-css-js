// 获取所有图片元素
const panels = document.querySelectorAll('.panel');

/*foreach遍历所有图片，执行箭头函数
-->添加点击监听事件，执行removeActiveClasses函数，
追加active类名*/
panels.forEach ( panel =>{
    panel.addEventListener('click',() =>{
        removeActiveClasses();
        panel.classList.add('active')
    })
})

//遍历清除所有图片的 active
function removeActiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}