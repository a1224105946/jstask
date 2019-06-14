let player = JSON.parse(sessionStorage.getItem("player"));
// console.log(die);

function back() {
    location.href = "js4-1.html";
}

function cacaca() {
    let yy = confirm("关闭游戏并回到主页?")
    if (yy == true) {
        sessionStorage.clear();
        location.href = "js2-1.html";
    }
}

// 判断点击的数组
if (JSON.parse(sessionStorage.getItem("clickdata"))) {
    x = JSON.parse(sessionStorage.getItem("clickdata"));
} else {
    // 创建空数组
    x = new Array();
}

//判断是第几天
if (JSON.parse(sessionStorage.getItem("day"))) {
    day = JSON.parse(sessionStorage.getItem("day"));
} else {
    // 创建数组,长度为1
    day = [0];
}


// clone 第几天 的主div
for (let i = 1; i < day.length; i++) {
    if (i > 0) {
        $(".box").first().clone().prependTo($('main'))
        $(".daymain").eq(i - 1).hide()
    }
}
// 修改天数
for (let d = 1; d <= day.length; d++) {
    $(".daynum").eq(d - 1).html("第" + d + "天");
}
// 第二天开始隐藏前一天操作
$(".daymain").eq(day.length - 1).show();
$(".daynum").click(function () {
    $(this).siblings().toggle();
})


// 背景色
if (JSON.parse(sessionStorage.getItem("color"))) {
    color = JSON.parse(sessionStorage.getItem("color"));
} else {
    // 创建
    color = new Array();
}

// 控制背景色的参数
if (JSON.parse(sessionStorage.getItem("daycolor"))) {
    daycolor = JSON.parse(sessionStorage.getItem("daycolor"));
} else {
    daycolor = 0;
}
// 设置for循环的条件
if (daycolor == 1) {
    // 每次跳转之后都能保持颜色
    for (let i = 0; i < color.length; i++) {
        $(".daybox").eq(i).css("background-color", "#333");
        $(".triangle").eq(i).css("border-right-color", "#333");
    }
}


// 死亡组
if (JSON.parse(sessionStorage.getItem("die"))) {
    die = JSON.parse(sessionStorage.getItem("die"));
} else {
    //创建一个空数组
    die = new Array();
}

if (die.length !== 0) {
    for (let i = 0; i < die.length; i++) {
        let a = die[i]
        if ((i + 1) % 2 === 0) {
            // % 运算符是 取余数 的意思 比如3%2 = 1  5 % 2 =1 5 % 3 =2 余数余数余数
            // 死了两个人(偶数人)的情况
            // 结合html设置的 class="add" 这是给第二个add添加新的 <p>
            $(".add").eq(i).after(`<p class="addpart">` + a + "号被大家投死，他的身份是" + player[a - 1].name + '</p>');
        } else {
            // 死了一个人(奇数人)的情况
            // 结合html设置的 class="add" 这是给第一个add添加新的 <p>
            $(".add").eq(i).after(`<p class="addpart">` + a + "号被大家投死，他的身份是" + player[a - 1].name + '</p>')
        }
    }
}
// 点击之后背景色变化
function clickcolor() {
    // x 判断点击的数组  即点击次数
    x.push(0);
    // 背景色变化
    color.push(0);
}

// 点击之后各个数组 发生变化
function clickarr() {
    // 判断点击次数数组
    sessionStorage.setItem("clickdata", JSON.stringify(x));
    // 改变总体的身份数组
    sessionStorage.setItem("player", JSON.stringify(player));
    // 背景色变化
    sessionStorage.setItem("color", JSON.stringify(color));
    // 切换回来保持背景色不变
    sessionStorage.setItem("daycolor", JSON.stringify(daycolor));
    // 死亡组
    sessionStorage.setItem("die", JSON.stringify(die));
    // 

}

// 四个步骤 开始
// 第一步 点击杀人
$(".day").eq(day.length * 4 - 4).click(function () {
    // 判断是不是第一次点击
    if (x.length == 0) {
        $(".daybox").eq(day.length * 4 - 4).addClass("color");
        $(".triangle").eq(day.length * 4 - 4).addClass("bordercolor");
        //    背景色参数变化,变色
        alert("天黑请闭眼");
        daycolor = 1;
        clickcolor();
        //    储存变化数据
        clickarr();
        location.href = "js4-3.html";
    } else {
        alert("不要乱点嗷");
    }
})
console.log(x.length)
// 第二步 亡者遗言
$(".day").eq(day.length * 4 - 3).click(function () {
    //  判断是不是第二次点击
    if (x.length == 1) {
        $(".daybox").eq(day.length * 4 - 3).addClass("color");
        $(".triangle").eq(day.length * 4 - 3).addClass("bordercolor");
        alert("死者说遗言8");
        clickcolor();
        clickarr();
    } else {
        alert("不要乱点嗷")
    }
})

// 第三步 依次发言
$(".day").eq(day.length * 4 - 2).click(function () {
    // 判断是不是第三次点击
    if (x.length == 2) {
        $(".daybox").eq(day.length * 4 - 2).addClass("color");
        $(".triangle").eq(day.length * 4 - 2).addClass("bordercolor");
        alert("所有玩家依次发言");
        clickcolor();
        clickarr();
    } else {
        alert("不要乱点嗷")
    }
})

// 第四步 投票
$(".day").eq(day.length * 4 - 1).click(function () {
    // 第四次点击
    if (x.length == 3) {
        $(".daybox").eq(day.length * 4 - 3).addClass("color");
        $(".triangle").eq(day.length * 4 - 3).addClass("bordercolor");
        alert("投他!投他!投他!")
        clickcolor();
        clickarr();
        sessionStorage.setItem("day", JSON.stringify(day));
        location.href = "js4-3.html";
    } else {
        alert("不要乱点嗷")
    }
})


// 用来控制  日志??
if (JSON.parse(sessionStorage.getItem("journal"))) {
    journal = JSON.parse(sessionStorage.getItem("journal"));
} else {
    //创建一个空数组
    journal = new Array();
    sessionStorage.setItem("journal", JSON.stringify(journal));
}
// 查看日志
$(".footerlog").click(function () {
    clickarr();
    journal.push(0);
    sessionStorage.setItem("journal", JSON.stringify(journal));
    window.location.href = "js4-3.html";
})