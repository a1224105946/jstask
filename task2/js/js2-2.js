var kkk = document.getElementById("KILLER");
var ppp = document.getElementById("PEOPLE");
var slider = document.getElementsByName("slider")[0];
var input = document.getElementsByName("INPUT")[0];

// 输入框数值大小判定
function numbeicalvalue() {
    // 获取input 的值
    if (input.value < 4 || input.value > 18) {
        kkk.innerHTML = ""
        ppp.innerHTML = "";
    } else
        // 当输入值大于14  不大于18
        if (input.value > 14) {
            kkk.innerHTML = Math.floor(input.value / 3 - 1);
            ppp.innerHTML = input.value - kkk.innerHTML;
        }
    // 输入值不小于4 不大于14
    else {
        kkk.innerHTML = Math.floor(input.value / 3);
        ppp.innerHTML = input.value - kkk.innerHTML;
    }
}
// 滑动条监听
slider.oninput = function () {
    input.value = slider.value;
    numbeicalvalue();
}

// 正则表达式 replace 语法
input.oninput = function () {
    // 
    var tihuan = /[^0-9]/g;
    // 确认你输入的是数字而不是字母汉字或者别的什么语言
    // ^ 开始
    // 　[0-9] 0至9数字
    if (tihuan.test(input.value)) 
    // 正则表达 test验证
    {
        input.value = input.value.replace(tihuan, "");
    }
    slider.value = input.value;
    // 这个赋值很关键 很关键 很关键 重要的说三遍
    numbeicalvalue();
}



// input输入框  数值大小 检测
input.onchange = function () {
    if (input.value < 4 || input.value > 18) {
        alert("请输入正确的玩家数量")
        input.value = "";
    }
}


document.getElementsByClassName("subtract")[0].onclick = function () {
    slider.value--;
    // 点击减少  --
    input.value = slider.value;
    // 数值返回给 函数 numbeicalvalue
    numbeicalvalue();
}

document.getElementsByClassName("add")[0].onclick = function () {
    slider.value++;
    // 点击增加 ++
    input.value = slider.value;
    numbeicalvalue();
}
