let pathlist = [
    "system/",
    "more/",
    "messy/",
    "tu/",
    "avatar/"
];
let namelist = [
    "系统",
    "更多",
    "其他",
    "图片",
    "头像",];
function getImg(filePath) {
    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
    var folder = file.getFolder(filePath);
    var list = [];
    for (var i in folder) {
        var path = folder[i].name;
        list.push(path);
    }
    return list;
}

function F(){
    var d = [];
    for (let i in namelist) {
        d.push({
            title:
                i === getVar("icon", "0") ? "““””<font color='#00bbf0'>" + namelist[i] + "</font>" : namelist[i],
            url: $().lazyRule((i) => {
                putVar("icon", i);
                refreshPage(true);
                return "hiker://empty";
            }, i),
            col_type: "scroll_button",
        });
    }
    d.push({
        col_type: "icon_2",
        title: "上传本地图片",
        pic_url:"hiker://files/bgHouse/src/system/19.svg",
        url: "fileSelect://" + $.toString(()=>{
            let file = $.require("https://hikerfans.com/weisyr/js/file.js");
            require(config.依赖);
            let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")];
            let name = file.getName(input).replace("_fileSelect_", "");
            let path = dir + name;
            if(file.copyFile(input, getPath(path).slice(7), true)){
                refreshPage(false);
                return "toast://添加成功";
            }else{
                refreshPage(false);
                return "toast://添加失败";
            }

        }),
    }, {
        col_type: "icon_2",
        title: "上传网络图片",
        pic_url:"hiker://files/bgHouse/src/system/19.svg",
        url: $("","请输入地址").input(function () {
            let name=input.split("/").at(-1);

            require(config.依赖);
            let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")]+name;
            downloadFile(input, dir);
            if(fileExist(dir)){
                refreshPage(false);
                return "toast://添加成功";
            }else{
                refreshPage(false);
                return "toast://添加失败";
            }
        })
        },)

    if (getVar("icon")==0) {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage();
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";

                    }, pic),
                });
            };
           }else if(getVar("icon")==1)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage();
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
           }else if(getVar("icon")==2)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage();
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            }else if(getVar("icon")==3)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "movie_2",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage();
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            }else if(getVar("icon")==4)
            {
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    extra:{longClick: [ {
                            title: " 删除 ",
                            js: $.toString((pic) => {
                                deleteFile(pic)
                                refreshPage();
                                toast("图片已删除");
                            },pic),
                        },]},
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            }

    setResult(d);
}

