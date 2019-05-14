// 定义全局变量
var div = document.getElementsByTagName("div");
var btn = document.getElementsByTagName("button");


// 定义主要使用的函数


// 随机颜色
function color() {
    // 局部变量
    var r, g, b;
    // 使用css标签 rgb来确定颜色
    // 使用随机数
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    // 将随机的颜色 返回给 函数
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function num() {
    var randomArray = [];
    for (var i = 0; i < div.length; i++) {
        div[i].style.background = "#ffa500";
    }
    // 没被选到的div 的颜色都是 ffa500 
    for (var i = 0; i < 3; i++) {
        var randomdiv = Math.floor(Math.random() * (div.length));
        if (randomArray.indexOf(randomdiv)<0){
            randomArray.push(randomdiv);
        }else {
            i -- ;
        }
    }

    div[randomArray[0]].style.background = color();
    // 调用上个函数的color结果
    div[randomArray[1]].style.background = color();
    div[randomArray[2]].style.background = color();
}


btn[0].onclick = function () {
    if (btn[0].className == "") {
        num();
        // 调用上面  num  函数的结果
        btn[0].className = "orange"
        // btn被点了之后替换类名 orange
        // 这里css设置了orange的颜色  等于用js写个checked效果
        clearInterval(dingshiqi);
        var dingshiqi;
        dingshiqi = setInterval("num()", 1000);
        // 设置定时器
    }
}

btn[1].onclick = function () {
    clearInterval(dingshiqi);
    btn[0].className = "";
    for (var i = 0; i < oli.length; i++) {
        div[i].style.background = "#ffa500";
    }
}