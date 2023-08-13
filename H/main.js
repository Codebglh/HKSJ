function Frist() {
    let d = [];
    let yijimenu = [{
        title: "收藏", url: "hiker://collection", pic_url: "hiker://files/bgHouse/src/system/1.svg", col_type: "icon_5"
    }, {
        title: "历史", url: "hiker://history", pic_url: "hiker://files/bgHouse/src/system/4.svg", col_type: "icon_5"
    }, {
        title: "分类", url: $("#noLoading#").lazyRule(() => {
            if (getItem("fenlei") == "off") {
                setItem("fenlei", "on");
                refreshPage(false);
                return "hiker://empty";
            } else {
                setItem("fenlei", "off");
                refreshPage(false);
                return "hiker://empty";
            }

        }), pic_url: "hiker://files/bgHouse/src/system/6.svg", col_type: "icon_5"
    }, {
        title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            shezi();
        }), pic_url: "hiker://files/bgHouse/src/system/3.svg", col_type: "icon_5"
    }, {
        title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            sousuo();
        }), pic_url: "hiker://files/bgHouse/src/system/22.svg", col_type: "icon_5"
    }, {
        col_type: "line"
    }]
    if (MY_PAGE == 1) {
        for (var i in yijimenu) {
            d.push(eval(yijimenu[i]))
        }
    }
    var local = 'https://www.mhorg.xyz'
    let HH = ["全部", "我的", "其他", "催眠", "调教", "强奸", "拐卖", "女奴", "奴隶", "其他", "监禁", "禁区", "折磨", "群殴", "机器", "束缚","改造"]
    let message
    if (MY_PAGE == 1 && getItem("fenlei", "off") == "on") {
        for (let i in HH) {
            d.push({
                title:
                    HH[i] === getVar("HH", "全部") ? "““””<font color='#00bbf0'>" + HH[i] + "</font>" : HH[i],
                url: $().lazyRule((i) => {
                    putVar("HH", i);
                    refreshPage(true);
                    return "hiker://empty";
                }, HH[i]),
                col_type: "scroll_button",
            });
        }
        d.push({
            col_type: "blank_block"
        });
        if (getVar("HH") == "全部") {
            message = "&orderType=3&subjectName=&filmName=";

        } else {
            message = "&orderType=3&subjectName=&filmName=" + getVar("HH");

        }
    } else {
        message = "&orderType=3&subjectName=&filmName=" + getVar("HH", "");
    }
    let header="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"

        var MY_URL = "https://www.mhorg.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=&filmName=" + message;
        var html = fetch(MY_URL,{headers:{"User-Agent":header
}});


    var tit = xpathArray(html, '//*[@id="app"]/div/div/div/div/div/div/a/img/@title');
    var url = xpathArray(html, '//*[@id="app"]/div/div/div/div/div/div/a/@onclick');
    var pic = xpathArray(html, '//*[@id="app"]/div/div/div/div/div/div/a/img/@src');
    log(url.length+""+tit.length+""+pic.length);
    for (var i = 0; i < url.length; i++) {
        d.push(
            {
                title: tit[i],
                url: "hiker://empty##immersiveTheme##autoCache#",
                col_type: "movie_3",
                pic_url: pic[i],
                extra: {
                    title: tit[i],
                    url: url[i],
                    pic_url: pic[i],
                    local: local,
                },
            }
        )
    }
    setResult(d);
}


function Secend() {
    let ssds = MY_PARAMS.url;
    let url_1 = MY_PARAMS.local + ssds.replace(/window\.open\(\'|\'\)/g, "");
    var html = fetch(url_1);
    let title = MY_PARAMS.title;
    let pic = MY_PARAMS.pic_url;
    var bb = {
        线路一: "//*[@class=\"cell-type xl1\"]/@onclick",
        线路二: "//*[@class=\"cell-type xl2\"]/@onclick",
        线路三: "//*[@class=\"cell-type xl3\"]/@onclick",
        线路四: "//*[@class=\"cell-type xl4\"]/@onclick",
        线路五: "//*[@class=\"cell-type xl5\"]/@onclick"
    };
    let xl = xianlu();
    var url = xpathArray(html, eval("bb." + getItem("pathH", "线路一")));
    let xiazai = [];
    for (let i = 0; i < url.length; i++) {
        xiazai.push({
            title: "第" + (i + 1) + "话",
            url: url[i]
        });
    }
    let a = [];
    a.push({
        title: "‘‘’’<b><small><font color=\"#b0e0e6\">片名:" + "\n" + "\n" + title + "</font></small></b>",
        desc: "‘‘’’<b><small><b><font color=\"#708090\">" + title + "</font></b></small></b>",
        url: "pic",
        pic_url: pic,
        col_type: "movie_1_vertical_pic_blur"
    })
    a.push({
        title: "线路",
        url: $("#noLoading#").lazyRule(() => {
            if (getItem("xl", "gua") == "ka") {
                clearItem("xl");
            } else {
                setItem("xl", "ka");
            }
            refreshPage(false);
            return "#noHistory#hiker://empty"
        }),
        pic_url: "hiker://files/bgHouse/src/" + "more/7.png",
        col_type: "icon_2",
    })
    a.push({
        title: "下载",
        desc: "",
        url: "hiker://page/download.view#noRecordHistory##noRefresh##noHistory#?rule=本地资源管理",
        pic_url: "hiker://files/bgHouse/src/" + "system/2.svg",
        col_type: "icon_2",
        extra: {
            chapterList: xiazai,
            info: {
                bookName: title,
                bookTopPic: pic,
                parseCode: $.toString(() => {
                    function openMH(bookid, linkid, path) {
                        var localhost = 'https://www.mhww.xyz'
                        eval(getCryptoJS());
                        const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
                        let j1 = CryptoJS.enc.Utf8.parse(linkid);
                        let jg = CryptoJS.AES.encrypt(j1, j, {
                            'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
                        });
                        let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + jg.toString()
                        var html = fetch(url)
                        var xx = xpathArray(html, "//*[@id=\"imgList\"]/img/@src");
                        var BT = xpathArray(html, "//*[@id=\"imgList\"]/img/@data-original");
                        var ll = "pics://"
                        for (var i = 0; i < 3; i++) {
                            ll = ll + xx[i] + '&&'
                        }
                        for (var i = 0; i < BT.length; i++) {
                            if (i == BT.length - 1) {
                                ll = ll + BT[i]
                            } else {
                                ll = ll + BT[i] + '&&'
                            }
                        }
                        return ll
                    }

                    return eval(input)

                }),
                ruleName: "BGcode2"
            }
        }
    })

    var ds = '<span style="color:#19B89D">选集排序<small><font color=\'grey\'>	共' + url.length + '条</font></small></span>'
    a.push({
        title: getItem("zf", "f") == "z" ? ds + '<span style="color: #33cccc">▴</span>' : ds + '<span style="color: #ff7f50">▾</span>',
        col_type: "text_icon",
        url: $("#noLoading#").lazyRule(() => {
            if (getItem("zf", "f") == "z") {
                clearItem("zf");
            } else {
                setItem("zf", "z");
            }
            refreshPage(false);
            return "#noHistory#hiker://empty"
        }),
        pic_url: getItem("zf", "f") == "z" ? "hiker://files/bgHouse/src/" + "messy/3.svg" : "hiker://files/bgHouse/src/" + "messy/4.svg",
    })
    for (let i in xl) {
        a.push(xl[i])
    }
    if (getItem("zf", "f") == "z") {
        for (let i = 0; i < url.length; i++) {
            a.push({
                title: "第" + (i + 1) + "话",
                url: $().lazyRule((url) => {
                    require("https://gitea.com/bgcode/hikerrule/raw/branch/main/bg/main.js");
                    return eval(url)
                }, (url[i])), col_type: 'text_4',
            })
        }
    } else {
        for (let i = url.length - 1; i >= 0; i--) {
            a.push({
                title: "第" + (i + 1) + "话",
                url: $().lazyRule((url) => {
                    require("https://gitea.com/bgcode/hikerrule/raw/branch/main/bg/main.js");
                    return eval(url)
                }, (url[i])), col_type: 'text_4',
            })
        }
    }
    a.push({
        col_type: 'line'
    })
    a.push({
        desc: "‘‘’’<small><font color=#f20c00>此规则仅限学习交流使用，请于导入后24小时内删除，任何团体或个人不得以任何方式方法传播此规则的整体或部分！</font></small>",
        url: "toast://温馨提示：且用且珍惜！",
        col_type: 'text_center_1',
    })
    a.push({
        col_type: 'line'
    })
    a.push({
        col_type: "big_blank_block"
    })

    a.push({
        col_type: "big_blank_block"
    })
    setResult(a);
}


function openMH(bookid, linkid, path) {
    var localhost = 'https://www.mhdnf.xyz'
    eval(getCryptoJS());
    const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
    let j1 = CryptoJS.enc.Utf8.parse(linkid);
    let jg = CryptoJS.AES.encrypt(j1, j, {
        'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
    });
    let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + jg.toString()
    var html = fetch(url)
    var xx = xpathArray(html, "//*[@id=\"imgList\"]/img/@src");
    var BT = xpathArray(html, "//*[@id=\"imgList\"]/img/@data-original");
    var ll = "pics://"
    for (var i = 0; i < 3; i++) {
        ll = ll + xx[i] + '&&'
    }
    for (var i = 0; i < BT.length; i++) {
        if (i == BT.length - 1) {
            ll = ll + BT[i]
        } else {
            ll = ll + BT[i] + '&&'
        }
    }
    return ll
}


function xianlu() {
    var d = [];
    if (getItem("xl") == "ka") {
        d.push({
            col_type: 'line'
        })
        d.push({
            col_type: "big_blank_block"
        })

        d.push({
            col_type: "big_blank_block"
        })
        d.push({
            title: '‘‘’’<small><b><font color="#33cccc">线路 : </font></b></small>',
            url: "hiker://empty",
            col_type: "scroll_button"
        })
        var aa = ["线路一", "线路二", "线路三", "线路四", "线路五"];
        for (var i in aa) {
            d.push({
                title: getItem('pathH', "线路一") == aa[i] ? '““””<b><span style="color: #33cccc">' + aa[i] + '↓</span></b>' : '““””<b><span >' + aa[i] + '</span></b>',
                url: $("#noLoading#").lazyRule((aa) => {
                    if (getItem('pathH') != aa) {
                        setItem('pathH', aa);
                    }
                    refreshPage(false);
                    return 'toast://切换路线成功'
                }, (aa[i])),
                col_type: "scroll_button"
            });
        }
    }
    d.push({
        col_type: 'line'
    })

    return d;

}