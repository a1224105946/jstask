let arr = JSON.parse(sessionStorage.getItem("wdnmd"));
console.log(arr);

// 
function action() {
    $('.wow').hide();
    $('.overturn').show();
    $('.circle').html(1)
    $('.base').html("点击查看1号身份")
    $('.id').hide();
}
action();

var circle = 1;
$('.base').click(function () {
    var allnum = arr.length;
    console.log('总人数' + allnum);
    circle++;
    console.log('circle' + circle);
    if (circle === 2 * allnum + 1) {
        window.open('js4-1.html', '_self')
    } else if (circle <= 2 * allnum) {
        var circlenum = Math.ceil(circle / 2);
        $('.circle').text(circlenum);

        if (circle % 2 === 1) {
            $('.base').text('查看'+circlenum+ '号身份');
        } else {
            $('.base').text('隐藏并传递给'+ (circlenum + 1) +'号');
        }
        $('.role').text(arr[circle / 2 - 1]);
        $('.id').toggle();
        $('.overturn').toggle();
        $('.wow').toggle();

    }
    if (circle === 2 * allnum) {
        $('.base').text('法官查看');
    }
});