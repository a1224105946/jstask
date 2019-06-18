// 获取储存数据
let player = JSON.parse(sessionStorage.getItem("player"));
let click = JSON.parse(sessionStorage.getItem("clickdata"));
let color = JSON.parse(sessionStorage.getItem("color"));
let daycolor = JSON.parse(sessionStorage.getItem("daycolor"));
let day = JSON.parse(sessionStorage.getItem("day"));
let journal = JSON.parse(sessionStorage.getItem("journal"));
let die = JSON.parse(sessionStorage.getItem("die"));
// let param = JSON.parse(sessionStorage.getItem("param"));

console.log(player);
let arr = JSON.parse(sessionStorage.getItem("wdnmd"));

for (let i = 0; i < arr.length; i++) {
    $('main').append(`
<div class="div" data-name="${arr[i]}">
 <div class="square" ">
  <div class="squaretop"> ${arr[i]} </div>
  <div class="squarebtm">
    <div class="number">
     <div class="id"> ${i+1}</div>号</div>
 </div> 
 </div> 
 <div class="hover"></div> 
</div> 
`);
}


// 根据跳转次数 修改样式 
if (journal.length !== 1) {
    if (click == 0) {
        $(".headertop span").html("杀手杀人")
        $(".headermid span").html("天黑请闭眼,杀手请睁眼");
        $(".wenzi").html("点击下方玩家头像,标记后杀死");
    } else {
        $(".headertop span").html("投票!!")
        $(".headermid span").html("发言讨论结束,大家请投票");
        $(".wenzi").html("点击得票数最多人的头像");
    }
} else {
    $(".headertop span").html("战况表");
    $(".headermid span").html("死的都在这里了");
    $(".wenzi").html("");
    $(".footer").html("返回")
    for (let l = 0; l < player.length; l++) {
        $(".div").eq(l).addClass("disable");
    }
}


// 给亡者上色
function diecolor() {
    for (let i = 0; i < player.length; i++) {
        if (player[i].death == false) {
            $(".squaretop").eq(i).css("background-color", "red");
            $(".squaretop").eq(i).css("color", "#fff");
        }
    }
}

diecolor();
// 储存数据声名
var clicknum;

// 点击判断
$(".div").click(function () {
    // 获取索引
    let param = $(".div").index($(this));
    //  .....?
    clicknum = param;

    // 重置样式
    $(".squaretop").css("background-color", "#f5c97b");
    $(".squaretop").css("color", "black");
    $(".hover").css("opacity", "0");

    console.log(clicknum)
    diecolor();
    // 点击判断开始
    if (journal.length !== 1) {

        // 先判断这是杀人界面还是投票界面
        if ((click.length - 1) == 0) {
            // 判断是否是平民,是否存活
            if (player[param].name == "平民" && player[param].death == true) {
                // 是平民,而且没死
                // 点击变色 出现hover图标
                $(".squaretop").eq(param).css("background-color", "red");
                $(".squaretop").eq(param).css("color", "#fff");
                $(".hover").eq(param).css("opacity", "1");

            } else if (player[param].death !== true) {
                // 是平民 死了
                alert("不能鞭尸");
            } else {
                // 不是平民 不管死没死 都不能点
                alert("杀手8能自杀");
            }
        } else {
            // 投票页面没有限制都可以杀 
            if (player[param].death == true) {
                $(".squaretop").eq(param).css("background-color", "red");
                $(".squaretop").eq(param).css("color", "#fff");
                $(".hover").eq(param).css("opacity", "1");
            } else {
                alert("不能鞭尸")
            }
        }
    } else {
        // 
        for (let l = 0; l < player.length; l++) {
            $(".squaretop").eq(param).css("background-color", "red");
            $(".squaretop").eq(param).css("color", "#fff");
            $(".hover").eq(param).css("opacity", "1");
        }
    }
})

// 胜利及跳转
function winjump() {

    // 提取 存活的人 
    let surnumber = player.filter(function (item, index, array) {
        return (item.death == true)

    })
    console.log(surnumber)
    // 提取  存活组的杀手
    let killnumber = surnumber.filter(function (item, index, array) {
        return (item.name == "杀手")
    })

     // 胜利条件
    if (killnumber.length == 0) {
        jumpstorage();
        let win = "平民胜利";
        sessionStorage.setItem("win", win);
        sessionStorage.setItem("alive", JSON.stringify(surnumber));
        sessionStorage.setItem("killnumber", JSON.stringify(killnumber));
        location.href = "js4-4.html"
    } else if (killnumber.length >= (surnumber.length - killnumber.length)) {
        jumpstorage();
        let win = "杀手胜利";
        // 杀人页面胜利的话  增加一天
        if ((click.length - 1) == 0) {
            day.push(0); 
            sessionStorage.setItem("day", JSON.stringify(day))
        } 
            sessionStorage.setItem("win", win);
            sessionStorage.setItem("alive", JSON.stringify(surnumber));
            sessionStorage.setItem("killnumber", JSON.stringify(killnumber));
            location.href = "js4-4.html"       
    } else {
        location.href = "js4-2.html"
    }
}

// 修改存活状态
function jumpoperate() {
    player[clicknum].death = false;
    // 添加到死亡组
    die.push(clicknum + 1);
    console.log(player, die);
}

// 底部各种操作
function jumpstorage() {
    // 存储数据
    sessionStorage.setItem("die", JSON.stringify(die));
    sessionStorage.setItem("player", JSON.stringify(player));
    sessionStorage.setItem("clickdata", JSON.stringify(click));
    sessionStorage.setItem("color", JSON.stringify(color));
    sessionStorage.setItem("daycolor", JSON.stringify(daycolor));
    sessionStorage.setItem("day", JSON.stringify(day));
}

// 杀人或投票点击之后的跳转
$(".footer").click(function () {
    if (journal.length !== 1) {
        // 判断第几次点击,第一次点击必须选中平民才能跳转
        if (clicknum !== undefined && (click.length - 1) == 0 && player[clicknum].name == "平民" && player[clicknum].death == true) {
            jumpoperate();
            jumpstorage();
            winjump();
        } else if (clicknum !== undefined && (click.length - 1) == 3 && player[clicknum].death == true) {
            // 第四次点击
            // 增加天数
            day.push(0);
            // 清除点击次数
            click.splice(0, click.length);
            jumpoperate();
            jumpstorage();
            winjump();
        } else {
            alert("选人才能点嗷");
        }
    } else {
        if (journal.length == 1) {
            jumpstorage();
            // 清除
            journal.splice(0, journal.length);
            sessionStorage.setItem("journal", JSON.stringify(journal));
            location.href = "js4-2.html";
        }
    }
})


function jump1(){
    let yy = confirm("拜拜了您嘞~")
    if (yy == true) {
        sessionStorage.clear();
        location.href = "js2-1.html";
    }
}