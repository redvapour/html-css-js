const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// 展示菜单     top从-100%---->0
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

// 此处功能是出现下来菜单后点击 首页 等标签时会关闭下拉菜单
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// 延迟加载界面
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})
sr.reveal(`.home_data`, {origin: 'top', delay: 400})
sr.reveal(`.home_img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home_footer`, {origin: 'bottom', delay: 800})
// 一些配置
// ScrollReveal().reveal('.item', {
//     reset: true, // 滚动鼠标时，动画开关
//     origin: 'right', // 动画开始的方向
//     duration: 1000, // 动画持续时间
//     delay: 0, // 延迟
//     rotate: {x:0, y:0, z:0}, // 过度到0的初始角度
//     opacity: 0.3, // 初始透明度
//     scale: 0.4, //缩放
//     easing: 'ease', // 缓动'ease', 'ease-in-out'，'linear'...
// });