function first(){
    let d = [];
    let list ;
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
            search();
        }), pic_url: "hiker://files/bgHouse/src/system/22.svg", col_type: "icon_5"
    }, {
        col_type: "line"
    }]
    let headers = {
        'User-Agent': PC_UA
    }
    if (MY_PAGE == 1) {
        for (var i in yijimenu) {
            d.push(eval(yijimenu[i]))
        }
    }
    try {
        MY_URL = "https://waptv.sogou.com/napi/video/classlist?abtest=0&iploc=CN1304&spver=&listTab=teleplay&filter=&start="+ MY_PAGE-1 +"&len=15&fr=filter";
       let data  = JSON.parse(request(MY_URL,{headers: headers}));
       list=data.listData.results;
    }catch (e) {
        log(e.message)
    }
    for (var i in list) {
        d.push({
            title: list[i].name,
            img: list[i].img + '@Referer=',
            url: JYconfig['erjimode']!=2?"hiker://empty##" + list[i].url + "#immersiveTheme##autoCache#":list[i].name + seachurl,
            desc: list[i].desc,

        });
    }
    setResult(d);
}
function shezi(){

}

function search(){

}