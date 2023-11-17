window.onload = function () {
    var canvas = document.getElementById("main")
    var ctx = canvas.getContext("2d")
    ctx.linewidth = 3
    ctx.rect(0, 0, 300, 150)
    ctx.fillStyle = "#ccc"
    ctx.fill()
    canvas.onmousedown = function (e) {
        canvas.onmousemove = function (e) {
            ctx.clearRect(e.clientX, e.clientY, 20, 20)
        }
    }
    canvas.onmouseup = function (e) {
        canvas.onmousemove = null
    }
    var arr = ['一等奖', '二等奖', "谢谢惠顾", '10G流量', '华莱士套餐', '再来一次']
    var price = document.querySelector(".price")
    var i = Math.floor(Math.random() * arr.length)
    price.innerHTML = arr[i]
}