// 当初始HTML文档已完全加载和解析时，将触发DOMContentLoaded事件，而不需要等待样式表
window.addEventListener("DOMContentLoaded",() => {
    new BouncyBlockClock(".clock");
});

// 创建类
class BouncyBlockClock {
    // 构造器
    constructor(qs) {
        this.el = document.querySelector(qs);   //整个时钟
        this.time = { a: [], b: []};            //自定义属性，a，b
        this.rollClass = 'clock_block_bounce';  //抖动类名
        this.digitsTimeout = null;              //数字超时
        this.rollTimeout = null;                //滚动超时      
        this.loop();    //循环方法
    }
    loop(){
        this.updateTime();      //更新时间
        this.displayTime();     //显示时间
        this.animateDigits();   //数字动画
        this.tick();            //对号
    }
    //更新时间
    updateTime() {
        // 原时间
        const rawDate = new Date();
            // ceil 上舍入  1.4-->2
            // getTime()返回 1970 年 1 月 1 日至今的毫秒数。
        //原时间 + 1s
		const date = new Date(Math.ceil(rawDate.getTime() / 1e3) * 1e3 );
        // 获取时分秒
		let h = date.getHours();
		const m = date.getMinutes();
		const s = date.getSeconds();
		const ap = h < 12 ? "AM" : "PM";

		if (h === 0) h = 12;
		if (h > 12) h -= 12;

        // a 和 b 是一样的数组
		this.time.a = [...this.time.b];
        // b 是个位数输出 0b  两位数就输出b
		this.time.b = [
			(h < 10 ? `0${h}` : `${h}`),
			(m < 10 ? `0${m}` : `${m}`),
			(s < 10 ? `0${s}` : `${s}`),
			ap
		];
        // a的值如果是0 将b的值赋给a  初始情况
		if (!this.time.a.length) this.time.a = [...this.time.b];
    }
    //显示时间
    displayTime(){
        const timeDigits = [...this.time.b];
        // pop() 方法用于删除数组的最后一个元素并返回删除的元素
        const ap = timeDigits.pop();    //删除AM 或PM 将值赋给ap
        // join(:) 把数组中的所有元素转换为一个字符串,以：分隔
        this.el.ariaLabel = `${timeDigits.join(":")}${ap}`;
        // 遍历所有键名 a，b
        Object.keys(this.time).forEach(letter => {
            // 选择所有a 或b
            const letterEls = this.el.querySelectorAll(`[data_time="${letter}"]`);
            //赋值
            Array.from(letterEls).forEach((el,i) => {
                el.textContent = this.time[letter][i];
            });
        });
    }
    //数字动画
    animateDigits() {
        // 获取所有组
        const groups = this.el.querySelectorAll('[data_time_group]');
        //querySelectorAll返回的是伪数组
        //array.from  转成真数组  并且forEach遍历
        Array.from(groups).forEach((group,i) => {
            // 解构赋值
			const { a, b } = this.time;
            //a 和 b 不相等时 添加动画
			if (a[i] !== b[i]) group.classList.add(this.rollClass);
		});

        clearTimeout(this.rollTimeout);
        //---------没懂----------this.rollTimeout 返回的是每秒+2的数
        this.rollTimeout = setTimeout(this.removeAnimations.bind(this),900);
    }
    removeAnimations(){
        const groups = this.el.querySelectorAll("[data_time_group]");
        Array.from(groups).forEach(group => {
            group.classList.remove(this.rollClass);
        });
    }
    tick() {
        clearTimeout(this.digitsTimeout);
        this.digitsTimeout = setTimeout(this.loop.bind(this),1e3);
    } 

    
}