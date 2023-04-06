var pigeon = document.getElementsByClassName("pigeon")[0];
console.log(pigeon.innerHTML);
var thirteen = document.getElementsByClassName("z13")[0];
var eighteen = document.getElementsByClassName("z18")[0];
var pigeon2 = document.getElementsByClassName("pigeon2")[0];
var twenty = document.getElementsByClassName("z22")[0];
var pigeon3 = document.getElementsByClassName("pigeon3")[0];
var place = document.getElementsByClassName("z08")[0];
var i = 1;
var j = 11;
// 鸽子转向
var pigeon1 = document.getElementsByClassName('pigeon1')[0];
// var place = document.getElementsByClassName('z08')[0];
// 按钮开关
var flag = true;
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
console.log(ary);
var m = 2;
// 箭头移动
// setInterval(function () {
//     if (m < 0) {
//         m = 2
//     }
//     // console.log(ary[m]);
//     // ary[i].index = 1;
//     for (var j = 0; j < ary.length; j++) {
//         ary[j].style.visibility = "hidden";
//         ary[j].style.opacity = "0.2";
//     }
//     ary[m].style.visibility = "visible";
//     ary[m].style.opacity = "1";
//     m--;
// }, 500)
// setTimeout(function () {
//     min.style.opacity = "1";
// }, 1500)

// 上滑

function kick() {
    var f = 1;
    // meg.onclick = function () {
        meg.style.animationName = 'me'
        // 摩天轮转动
        var ferris = setInterval(function () {
            if (f >= 3) {
                f = 1
            }
            z29.innerHTML = "<img src='./img/z18-" + f + ".png' alt=''>"
            f++
        }, 300)
        setTimeout(function () {
            // setInterval(function(){

            // })
            build.style.display = "block";
        }, 1000)
        setTimeout(function () {
            // begin.style.display = "block";
            setTimeout(function () {
                cont.innerHTML = '<div class="become"><p class="time" > 1997年12月01</p><p>你成为[和我信]用户</p><p>点击光圈“信鸽”会走动</p></div>'
            }, 1000)
        }, 2000)
        riser(0);

    // }

    // 第一个终点
    place.onclick = function () {
        // console.log(1);
        flag = false;
        if (phone.style.display == "block") {
            pigeon.style.animationName = 'gz11';
            cont.innerHTML = '<div class="grade"><p class="time">2017年2月1日</p><p>"成长等级"为XX级，超过99%信粉</p><p>2017年获得了200000个流量金币，打开了11次金币宝箱</p></div>'
        } else {
            pigeon.style.animationName = 'gz1'

            // 移动
            if (flag) {
                pigeon.classList.add("pigeon4");
                // 走动
                var time = setInterval(function () {
                    i++
                    pigeon.innerHTML = "<img src='./img/gz" + i + ".png' alt=''>"
                    if (i >= 5) {
                        i = 1
                    }
                }, 100)
                //shift("",0,800);
                setTimeout(function () {
                    var a = 11;
                    var numb = 0;
                    var two = setInterval(function () {
                        clearInterval(time);
                        if (a >= 15) {
                            a = 11;
                        }
                        pigeon.innerHTML = "<img src='./img/gz" + a + ".png' alt=''>"
                        a++
                        numb++
                        if (numb == 8) {
                            clearInterval(two)
                        }
                    }, 100)

                }, 800)
                setTimeout(function () {
                    var s = 1;
                    var num = 0;
                    var thre = setInterval(function () {
                        if (s >= 5) {
                            s = 1;
                        }
                        pigeon.innerHTML = "<img src='./img/gz" + s + ".png' alt=''>"
                        s++;
                        num++;
                        if (num == 15) {
                            clearInterval(thre)
                        }
                    }, 100)
                }, 1900)
                setTimeout(function () {
                    var b = 11;
                    var number = 0;
                    var fore = setInterval(function () {
                        if (b >= 15) {
                            b = 11;
                        }
                        pigeon.innerHTML = "<img src='./img/gz" + b + ".png' alt=''>"
                        b++;
                        number++;
                        if (number == 16) {
                            clearInterval(fore)
                        }
                    }, 100)
                }, 3500)
                // }
            }

            setTimeout(function () {
                flag = true
                phone.style.display = "block";
                setTimeout(function () {
                    if (phone.style.display == "block") {
                        // diff.style.display = "block";
                        riser(7)
                        cont.innerHTML = '<div class="grade"><p class="time">2017年2月1日</p><p>"成长等级"为XX级，超过99%信粉</p><p>2017年获得了200000个流量金币，打开了11次金币宝箱</p></div>'
                        // pigeon.style.animationName = 'gz11';
                    }
                }, 1000)
                // }
            }, 5000)

        }
        // 第二个终点按钮
        thirteen.onclick = function () {
            // console.log(place.disabled);
            flag = false;
            if (wift.style.display == "block") {
                pigeon.style.animationName = 'gz22';
                cont.innerHTML = "<div class='busin'><p>2017年</p><p>和我信累计交易金额41.73亿元</p><p>2018年开启更多生活消费优惠</p><p>和我信·生活·缴费送150M</p></div>"
            } else {
                // place.onclick = null;
                pigeon.style.animationName = "gz2"
                // if (flag) {
                // pigeon.style.display = 'none';
                // pigeon1.style.display = 'block';
                var z = 1
                var twoo = setInterval(function () {
                    z++
                    pigeon.innerHTML = "<img src='./img/gz" + z + ".png' alt=''>"
                    if (z >= 5) {
                        z = 1
                    }
                }, 100)
                setTimeout(function () {
                    var v = 11;
                    var nu = 0;
                    var five = setInterval(function () {
                        clearInterval(twoo)
                        if (v >= 15) {
                            v = 11
                        }
                        pigeon.innerHTML = "<img src='./img/gz" + v + ".png' alt=''>"
                        v++;
                        nu++;
                        if (nu == 45) {
                            clearInterval(five)
                        }
                    }, 100)
                }, 500)
                // }
            }

            setTimeout(function () {
                wift.style.display = "block";
                setTimeout(function () {
                    if (wift.style.display == "block") {
                        // par.style.display = "block";
                        riser(12)
                        cont.innerHTML = "<div class='busin'><p>2017年</p><p>和我信累计交易金额41.73亿元</p><p>2018年开启更多生活消费优惠</p><p>和我信·生活·缴费送150M</p></div>"
                        // pigeon.style.animationName = 'gz22';
                    }
                }, 1000)
                flag = true;
                // }
            }, 5000)

        }
        // if (wift.style.display == "block") {
        // place.onclick = function () {
        //     // if (phone.style.display == "block") {
        //     pigeon.style.animationName = 'gz11';
        //     cont.innerHTML = '<div class="grade"><p class="time">2017年2月1日</p><p>"成长等级"为XX级，超过99%信粉</p><p>2017年获得了200000个流量金币，打开了11次金币宝箱</p></div>'
        //     // }
        // }
        // }
        // 第三个终点按钮
        eighteen.onclick = function () {
            if (money.style.display == "block") {
                pigeon.style.animationName = 'gz33';
                cont.innerHTML = " <div class='exchange'><p>2017年</p><p>通过“和我信”兑换了10000个积分，参与了X次积分夺宝</p><p>流量，话费，iPhoneX超级礼包9积分抢</p></div>"
            } else {
                pigeon.style.animationName = "gz3"
                if (flag) {
                    flag = false;
                    // pigeon1.style.display = 'none';
                    // pigeon2.style.display = 'block';
                    var j = 21
                    var times = setInterval(function () {
                        j++
                        pigeon.innerHTML = "<img src='./img/gz" + j + ".png' alt=''>"
                        if (j >= 25) {
                            j = 21
                        }
                    }, 200)
                    setTimeout(function () {
                        clearInterval(times)
                        var c = 21;
                        var cv = 0;
                        var t = setInterval(function () {
                            if (c >= 25) {
                                c = 21
                            }
                            pigeon.innerHTML = "<img src='./img/gz" + c + ".png' alt=''>"
                            c++;
                            cv++;
                            if (cv == 3) {
                                clearInterval(t);
                            }
                        }, 100)
                    }, 1500)
                    setTimeout(function () {
                        var h = 31;
                        var hv = 0;
                        var ht = setInterval(function () {
                            if (h >= 35) {
                                h = 31
                            }
                            pigeon.innerHTML = "<img src='./img/gz" + h + ".png' alt=''>"
                            h++;
                            hv++;
                            if (hv == 13) {
                                clearInterval(ht);
                            }
                        }, 100)
                    }, 1500)
                    setTimeout(function () {
                        var u = 21;
                        var uv = 0;
                        var ut = setInterval(function () {
                            if (u >= 25) {
                                u = 21
                            }
                            pigeon.innerHTML = "<img src='./img/gz" + u + ".png' alt=''>"
                            u++;
                            uv++;
                            if (uv == 29) {
                                clearInterval(ut);
                            }
                        }, 100)
                    }, 2000)
                }
            }


            setTimeout(function () {
                money.style.display = "block";
                setTimeout(function () {
                    if (money.style.display == "block") {
                        // last.style.display = "block";
                        riser(17)
                        cont.innerHTML = " <div class='exchange'><p>2017年</p><p>通过“和我信”兑换了10000个积分，参与了X次积分夺宝</p><p>流量，话费，iPhoneX超级礼包9积分抢</p></div>"
                        // pigeon.style.animationName = 'gz33';
                    }
                }, 1000)
                flag = true
                // }
            }, 5000)

        }
        //终点按钮
        twenty.onclick = function () {
            pigeon.style.animationName = "gz4"
            if (flag) {
                flag = false
                // pigeon2.style.display = 'none';
                // pigeon3.style.display = 'block';
                var x = 31
                var lm = setInterval(function () {
                    x++
                    pigeon.innerHTML = "<img src='./img/gz" + x + ".png' alt=''>"
                    if (x >= 35) {
                        x = 31
                    }
                }, 200)
                setTimeout(function () {
                    clearInterval(lm);
                    var l = 1;
                    var lo = 0;
                    var lv = setInterval(function () {
                        if (l >= 5) {
                            l = 1
                        }
                        pigeon.innerHTML = "<img src='./img/gz" + l + ".png' alt=''>"
                        l++;
                        lo++;
                        if (lo == 20) {
                            clearInterval(lv)
                        }
                    }, 100)
                }, 3000)
            }
            setTimeout(function () {
                // if(pigeon.getBoundingClientRect().bottom == 452.5){
                // console.log(1);
                flag = true
                // }
            }, 5000)
        }
    }

    kick();
    // function shift() {

    // }
    // 上方手机淡入效果
    var z33 = document.getElementsByClassName("z33")[0];
    var z34 = document.getElementsByClassName("z34")[0];
    var z35 = document.getElementsByClassName("z35")[0];
    var z36 = document.getElementsByClassName("z36")[0];
    function fadeIn(element, speed) {
        var speed = speed || 30;
        var num = 0;
        var st = setInterval(function () {
            num++;
            element.style.opacity = num / 10;
            if (num >= 10) {
                clearInterval(st);
            }
        }, 100);
    }
    fadeIn(cont, 100);
    fadeIn(z33, 100);
    fadeIn(z34, 100);
    fadeIn(z35, 100);
    fadeIn(z36, 100);

    function riser(a) {
        var v = setInterval(function () {
            rise[a].style.animationName = "tp";
            a++
            if (a == 7) {
                clearInterval(v)
            }
            if (a == 12) {
                clearInterval(v)
            }
            if (a == 17) {
                clearInterval(v)
            }
            if (a == 21) {
                clearInterval(v)
            }
        }, 200)
    }
    function shift(b, c, d) {
        var y = 1;
        setTimeout(function () {
            var nm = 0;
            var tim = setInterval(function () {
                if (y > 5) {
                    y = 1
                }
                pigeon.innerHTML = "< img src='./img/gz" + b + "" + y + ".png' alt=''>"
                y++;
                nm++
                if (nm == parseInt((d - c) / 200)) { clearInterval(tim) }
            }, 200)
        }, c)
    }
}
