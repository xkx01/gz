var pigeon = document.getElementsByClassName("pigeon")[0];
var z13 = document.getElementsByClassName("z13")[0];
var z18 = document.getElementsByClassName("z18")[0];
var pigeon2 = document.getElementsByClassName("pigeon2")[0];
var z22 = document.getElementsByClassName("z22")[0];
var pigeon3 = document.getElementsByClassName("pigeon3")[0];
var place = document.getElementsByClassName("z08")[0];
var build = document.getElementsByClassName("build")[0];
var begin = document.getElementsByClassName("begin")[0];
var diff = document.getElementsByClassName("diff")[0];
var phone = document.getElementsByClassName("phone")[0];
var wift = document.getElementsByClassName("wift")[0];
var par = document.getElementsByClassName("par")[0];
var last = document.getElementsByClassName("last")[0];
var money = document.getElementsByClassName("money")[0];
var cont = document.getElementsByClassName("content")[0];
var z29 = document.getElementsByClassName("z29")[0];
var ary = document.getElementsByClassName("ary");
var min = document.getElementsByClassName("minecraft")[0];
var meg = document.getElementsByClassName("meg")[0];
var rise = document.getElementsByClassName("rise");
var iris1 = document.getElementsByClassName("iris1");
var pigeon1 = document.getElementsByClassName('pigeon1')[0];
var pos = document.getElementsByClassName("pos")[0]
var z30 = document.getElementsByClassName("z30")[0]
var z30a = document.getElementsByClassName("z30a")[0];
var pos1 = document.getElementsByClassName("pos1")[0]
var z31 = document.getElementsByClassName("z31")[0];
var pos3 = document.getElementsByClassName("pos3")[0]
var pos2 = document.getElementsByClassName("pos2")[0]
var z32 = document.getElementsByClassName("z32")[0]
var nav = document.getElementsByClassName("nav")[0]
var pig = document.getElementsByClassName("pig")[0]
var pige = document.getElementById('pige')
var ris = document.getElementsByClassName("ris");
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');
var celestial1 = document.getElementsByClassName("celestial1")[0];
var celestial2 = document.getElementsByClassName("celestial2")[0];
var celestial3 = document.getElementsByClassName("celestial3")[0];
var bill = document.getElementsByClassName("bill")[0];
var acq = document.getElementsByClassName("acq")[0];
var i = 1;
var flag = true;
var m = 2;
// 箭头移动
setInterval(function () {
    if (m < 0) {
        m = 2
    }
    // console.log(ary[m]);
    // ary[i].index = 1;
    for (var j = 0; j < ary.length; j++) {
        ary[j].style.visibility = "hidden";
        ary[j].style.opacity = "0.2";
    }
    ary[m].style.visibility = "visible";
    ary[m].style.opacity = "1";
    m--;
}, 500)
min.style.display = "block";
setTimeout(function () {
    min.style.opacity = "1";
}, 1500)
// 向上滑动
var f = 1;
// meg.style.animationName = 'me'
var startY = 0;
var y = 0;
meg.addEventListener('touchstart', function (e) {
    startY = e.targetTouches[0].pageY;
    y = this.offsetTop;
})
meg.addEventListener('touchmove', function (e) {
    //计算手指移动的距离   手指移动之后的坐标-手指初始坐标
    var moveY = e.targetTouches[0].pageY - startY;
    //移动盒子
    this.style.top = y + moveY + 'px';
    meg.style.display = "none"
    e.preventDefault();//阻止屏幕滚动的默认行为
    setTimeout(function () {
        // 建筑出现
        see(0);
        setTimeout(function () {
            riser(0);
        }, 2000)
        // 上方换字
        setTimeout(function () {
            cont.innerHTML = '<div class="become"><p class="time" > 1997年12月01</p><p>你成为[和我信]用户</p><p>点击光圈“信鸽”会走动</p></div>'
        }, 6000)
        // 第一个光圈
        aperture(6200, "pos");
        pigeon.classList.remove("ge");
        // 音乐消失
        // setTimeout(function(){
        //     // video1.pause();
        // },6500)
        // if()
        // setTimeout(function () {
        // video1.pause();
        // clearInterval(seti);
        // }, 3500)
    }, 500)

})
// 摩天轮转动
var ferris = setInterval(function () {
    if (f >= 3) {
        f = 1
    }
    z29.innerHTML = "<img src='./img/z18-" + f + ".png' alt=''>"
    f++
}, 300)
// 第一个终点
pos.onclick = function () {
    pos.style.display = "none";
    flag = false;
    pigeon.style.animationName = 'gz1'
    shift("", 0, 720);
    shift(1, 720, 1275)
    shift("", 1275, 2698.5)
    shift(1, 2698.5, 3500)
    setTimeout(function () {
        flag = true
        phone.style.display = "block";
        setTimeout(function () {
            if (phone.style.display == "block") {
                setTimeout(function () {
                    riser(7)
                    cont.innerHTML = '<div class="grade"><p class="time">2017年2月1日</p><p>"成长等级"为XX级，超过99%信粉</p><p>2017年获得了200000个流量金币，打开了11次金币宝箱</p></div>'
                }, 600)
                // setTimeout(function () {
                // }, 800)
                // setTimeout(function () {
                //     video1.pause();
                // }, 3800)
            }
        }, 1000)
        setTimeout(function () {
            z30.classList.add("a");
            z30.classList.remove("z30");
        }, 2000)
    }, 5000)
    setTimeout(function () {
        aperture(1000, "pos1")
        // video4.pause();
    }, 9500)
}
// 第二个终点按钮
pos1.onclick = function () {
    pos1.style.display = "none"
    flag = false;
    pigeon.style.animationName = "gz2"
    shift("", 0, 300)
    shift(1, 300, 3500)
    setTimeout(function () {
        flag = true;
        wift.style.display = "block";
        setTimeout(function () {
            if (wift.style.display == "block") {
                setTimeout(function () {
                    riser(12)
                    cont.innerHTML = "<div class='busin'><p>2017年</p><p>和我信累计交易金额41.73亿元</p><p>2018年开启更多生活消费优惠</p><p>和我信·生活·缴费送150M</p></div>"
                }, 600)
            }
        }, 1000)
        setTimeout(function () {
            z31.classList.add("b");
            z31.classList.remove("z31");
        }, 2000)
    }, 5000)
    setTimeout(function () {
        aperture(1000, "pos2")
    }, 9500)
}
// 第三个终点按钮
pos2.onclick = function () {
    pos2.style.display = "none";
    flag = false;
    pigeon.style.animationName = "gz3"
    shift(2, 0, 900)
    shift(3, 900, 1900)
    shift(2, 1900, 3500)
    setTimeout(function () {
        money.style.display = "block";
        setTimeout(function () {
            if (money.style.display == "block") {
                setTimeout(function () {
                    riser(17)
                    cont.innerHTML = " <div class='exchange'><p>2017年</p><p>通过“和我信”兑换了10000个积分，参与了X次积分夺宝</p><p>流量，话费，iPhoneX超级礼包9积分抢</p></div>"
                }, 600)
            }
        }, 1000)
        setTimeout(function () {
            z32.classList.add("c");
            z32.classList.remove("z32");
        }, 2000)
        flag = true
    }, 5000)
    setTimeout(function () {
        aperture(1000, "pos3")
    }, 9500)
}
// 点击柱子瞬移
var a1 = '<div class="grade"><p class="time">2017年2月1日</p><p>"成长等级"为XX级，超过99%信粉</p><p>2017年获得了200000个流量金币，打开了11次金币宝箱</p></div>'
var a2 = "<div class='busin'><p>2017年</p><p>和我信累计交易金额41.73亿元</p><p>2018年开启更多生活消费优惠</p><p>和我信·生活·缴费送150M</p></div>"
var a3 = "<div class='exchange'><p>2017年</p><p>通过“和我信”兑换了10000个积分，参与了X次积分夺宝</p><p>流量，话费，iPhoneX超级礼包9积分抢</p></div>"
teleporting(place, phone, 'gz11', a1)
teleporting(z13, wift, 'gz22', a2)
teleporting(z18, money, 'gz33', a3)
//终点按钮
pos3.onclick = function () {
    pos3.style.display = "none";
    flag = false
    // if (flag) {
    pigeon.style.animationName = "gz4"
    shift(3, 0, 2100)
    shift("", 2100, 3500)
    setTimeout(function () {
        flag = true
        // pigeon.deleteRule(0);
        // setTimeout(function () {
        pige.style.display = "none"
        // pige.classList.add("pig");
        pig.style.display = "block";
        // },600)
        // setTimeout(function () {
        z22.style.animationName = 'cl';
        setTimeout(function () {
            nav.style.animationName = 'bg';
        }, 300)
        setTimeout(function () {
            bill.style.animationName = 'z';
            acq.style.animationName = 'z';
        }, 2000)
        setTimeout(function () {
            celestial1.style.animationName = 'x';
            celestial2.style.animationName = 'z';
            celestial3.style.animationName = 'y';
        }, 2500)
        setTimeout(function () {
            celestial3.style.animation = "xyz 6000ms infinite"
            celestial3.style.right = "0.29rem"
            celestial1.style.animation = "xyz 6000ms infinite"
            celestial1.style.left = "0.44rem"
            celestial2.style.animation = "xyz 6000ms infinite"
        }, 5000)
        // },1000)
    }, 5000)

}
// 上方手机,山,云淡入效果
function fadeIn(element, speed) {
    var speed = speed || 30;
    var num = 0;
    var st = setInterval(function () {
        num++;
        document.getElementsByClassName(element)[0].style.opacity = num / 10;
        if (num >= 10) {
            clearInterval(st);
        }
    }, 100);
}
// 
fadeIn("content", 100);
fadeIn("z33", 100);
fadeIn("z34", 100);
fadeIn("z35", 100);
fadeIn("z36", 100);

function riser(a) {
    var v = setInterval(function () {
        video1.play();
        rise[a].style.animationName = "tp";
        a++
        if (a == 7) {
            clearInterval(v)
        }
        if (a == 12) {
            // video1.pause();
            clearInterval(v)
        }
        if (a == 17) {
            // video1.pause();
            clearInterval(v)
        }
        if (a == 21) {
            // video1.pause();
            clearInterval(v)
        }
    }, 200)
}
function see(k) {
    var vk = setInterval(function () {
        ris[k].style.animationName = 'tp';
        k++
        if (k == 4) {
            clearInterval(vk)
        }
    }, 100)
}
function shift(b, c, d) {
    video4.play();
    setTimeout(function () {
        var y = 1;
        var nm = 0;
        var tim = setInterval(function () {
            if (y >= 5) {
                y = 1
            }
            pigeon.innerHTML = "<img src='./img/gz" + b + "" + y + ".png' alt=''>"
            y++;
            nm++
            if (nm == parseInt((d - c) / 150)) { clearInterval(tim) }
        }, 150)
    }, c)
}
// t是时间，s类名,控制光圈消失
function aperture(t, s) {
    setTimeout(function () {
        document.getElementsByClassName(s)[0].style.display = "block"
        // aper.display = "block";
        // console.log(s);
    }, t)
}
// riser(20)
// 点击柱子瞬移
function teleporting(aname, bname, cart, a) {
    aname.onclick = function () {
        if (flag == true && bname.style.display == "block") {
            pigeon.style.animationName = cart;
            cont.innerHTML = a;
            console.log(a1);
        }
    }
}