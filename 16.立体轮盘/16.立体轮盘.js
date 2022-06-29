// 准备数据
const solarTerms = [
    "立春",
    "雨水",
    "惊蛰",
    "春分",
    "清明",
    "谷雨",
    "立夏",
    "小满",
    "芒种",
    "夏至",
    "小暑",
    "大暑",
    "立秋",
    "处暑",
    "白露",
    "秋分",
    "寒露",
    "霜降",
    "立冬",
    "小雪",
    "大雪",
    "冬至",
    "小寒",
    "大寒",
]
// 获取ul列表
const ulList = document.querySelector('ul');
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
// console.log(daynumber,d.getMonth(), d.getDate());
let activeIndex = daynumber; //0
// 旋转角度
const rotate = -360 / solarTerms.length;
init();

function init() {
	solarTerms.forEach((solarTerm, idx) => {
		const liEl = document.createElement("li");
		liEl.style.setProperty("--day_num", idx);
		liEl.innerHTML = 
        `<time>${idx + 1}</time>
        <span>${solarTerm}</span>`;
		// 方法在 Element的最后一个子节点之后插入一组 Node 对象
		ulList.append(liEl);
	});
	ulList.style.setProperty("--rotateDegrees", rotate);
	num(0);
}

function num(nr) {
	daynumber += nr;
	console.log(daynumber);
	ulList.style.setProperty("--current_day", daynumber);

	const activeEl = document.querySelector("li.active");
	if (activeEl) activeEl.classList.remove("active");

	activeIndex = (activeIndex + nr + solarTerms.length) % solarTerms.length;
	const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
	// getComputedStyle返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值。
	document.body.style.backgroundColor = window.getComputedStyle(newActiveEl).backgroundColor;

	newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowUp":
			num(-1);
			break;
		case "ArrowDown":
			num(1);
			break;
		default:
			return;
	}
});
