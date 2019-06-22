$(".aaa").click(function () {
    let a = $("#user").val();
    let b = $("#pwd").val();
    console.log(a, b);
    if (a == "") {
        alert("请填写用户名")
    } else if (b == "") {
        alert("请填写密码")
    }

    $.ajax({
        type: "POST",
        url: "/carrots-admin-ajax/a/login",
        data: "name=" + a + "&pwd=" + b,
        success: function (res) {
            let resp = JSON.parse(res);
            console.log(resp)
            if (resp.code === 0) {
                location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
            } else {
                $(".div").text(resp.message)
            }
        }
    })
})

// function fuuk() {
//     let c = document.getElementById("user").value;
//     let d = document.getElementById("pwd").value;
//     if (c == "") {
//         alert("请填写用户名")
//     } else if (d == "") {
//         alert("请填写密码")
//     }
//     let x = new XMLHttpRequest();
//     x.onreadystatechange = function () {

//         if (x.readyState === 4) {
//             let resp = JSON.parse(x.response);

//             if (x.status === 200) {
//                 console.log(resp.message)
//                 if (resp.code == 0) {
//                     location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
//                 } else {
//                     let fuck = document.getElementsByClassName("div");
//                     fuck[0].innerText = resp.message
//                 }
//             }
//         }
//     }
//     // 发起pust请求
//     x.open('POST', '/carrots-admin-ajax/a/login');
//     // post 请求头部 格式
//     x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     x.send("name=" + c + "&pwd=" + d);
// }