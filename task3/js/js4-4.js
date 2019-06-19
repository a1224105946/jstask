let player = JSON.parse(sessionStorage.getItem("player"));
let day = JSON.parse(sessionStorage.getItem("day"));
let alive = JSON.parse(sessionStorage.getItem("alive"));
let killer = JSON.parse(sessionStorage.getItem("killnumber"));
let win = sessionStorage.getItem("win");
let kkk = JSON.parse(sessionStorage.getItem("kkk"));
let die = JSON.parse(sessionStorage.getItem("die"));
console.log(day, alive, win, killer,die);


$(".topimg").text(win);

if (win == "杀手胜利"){
    $(".add").text(`太棒了!你知道吗,在杀人游戏当中只有20%的杀手取得游戏最终的胜利!`)
} else  {
    $(".add").text(`本轮游戏共抓出杀手` + kkk + `人,共经历了` + (day.length - 1) + `个白天,在杀人游戏中击败了67%的玩家!`)
}


$(".wdnmd").text(`杀手还有` + killer.length + `人 , 平民还有` + (alive.length - killer.length) + `人`);

for ( let i = 2; i < day.length;i++){
    $(".box").first().clone().prependTo($('.content'));
}
for ( let i = 1;i < day.length; i++){
    $(".boxtop1").eq(i- 1).html(`第` + i + `天`);
}

for (let i = 0; i < die.length;i++){
    let a = die[i];
    if((i + 1) % 2 === 0){
        // 某一轮    第四步 的投票
        $(".boxtext").eq(i).html(`白天:` + a + `号被大家投死,他的身份是` + player[a - 1].name );
    } else {
        // 某一轮  第一步的杀人
        $(".boxtext").eq(i).html(`晚上:` + a + `号被杀手杀死,他的身份是` + player[a - 1].name );
    }
}
function 再见了您嘞(){
    let yy = confirm("拜拜了您嘞~")
    if (yy == true) {
        sessionStorage.clear();
        location.href = "js2-1.html";
    }
}