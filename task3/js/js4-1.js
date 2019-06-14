let arr = JSON.parse(sessionStorage.getItem("wdnmd"));
console.log(arr);

function jump1() {
    window.location.href = "js2-1.html";
}

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

$(".footer").click(function () {
    let y = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] == "平民") {
            y.push({
                name: "平民",
                death: true
            })
        } else {
            y.push({
                name: "杀手",
                death: true
            })
        }
    }
    sessionStorage.setItem("player", JSON.stringify(y));
    location.href = "js4-2.html";
})


// 点击格子变色
// $(".div").click(function(){
//     let param = $(".div").index($(this));
//     $(".squaretop").css("background-color","#f5c97b");
//     $(".squaretop").css("color","black");
//     $(".hover").css("opacity","0");
//     $(".squaretop").eq(param).css("background-color","red");
//     $(".squaretop").eq(param).css("color","#fff");
//     $(".hover").eq(param).css("opacity","1");
//     console.log(param);
//     sessionStorage.getItem("param",param);
// })





