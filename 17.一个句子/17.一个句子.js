const sentence = document.getElementById("sentence");
const sentenceBtn = document.getElementById("sentenceBtn");
const btnList = document.querySelector("#btnList");
const nameList = document.querySelectorAll("li");

let c = "a";
sentenceBtn.onclick = () => {
  getSentence();
};
getSentence();
async function getSentence() {
  const result = await axios.get(`https://v1.hitokoto.cn?c=${c}`);
  sentence.innerHTML = result.data.hitokoto + "---" + result.data.from;
}
btnList.onclick = (event) => {
  c = event.target.parentNode.innerHTML[0];
  getSentence();
};
