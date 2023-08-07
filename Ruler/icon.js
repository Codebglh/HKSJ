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
    switch (getVar("icon")) {
        case 0:
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            d.push({
                col_type: "icon_2",
                title: "上传本地图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")];
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            }, {
                col_type: "icon_2",
                title: "上传网络图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/img/";
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            });
        case 1:
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            d.push({
                col_type: "icon_2",
                title: "上传本地图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")];
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            }, {
                col_type: "icon_2",
                title: "上传网络图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/img/";
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            });
        case 2:
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            d.push({
                col_type: "icon_2",
                title: "上传本地图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")];
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            }, {
                col_type: "icon_2",
                title: "上传网络图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/img/";
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            });
        case 3:
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "movie_2",
                    title: list[i],
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            d.push({
                col_type: "icon_2",
                title: "上传本地图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")];
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            }, {
                col_type: "icon_2",
                title: "上传网络图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/img/";
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            });
        case 4:
            var filePath="/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/"+pathlist[getVar("icon")]
            var list = getImg(filePath);
            for (var i in list) {
                let pic = "hiker://files/bgHouse/src/" +pathlist[getVar("icon")]+ list[i];
                d.push({
                    col_type: "icon_small_4",
                    title: list[i],
                    pic_url: pic,
                    url: $("#noLoading#").lazyRule((pic) => {
                        copy(pic);
                        return "hiker://empty";
                    }, pic),
                });
            };
            d.push({
                col_type: "icon_2",
                title: "上传本地图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")];
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            }, {
                col_type: "icon_2",
                title: "上传网络图片获取链接",
                pic_url:"https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.4/HKSJ/system/+19.svg",
                url: "fileSelect://" + $.toString(()=>{
                    let file = $.require("https://hikerfans.com/weisyr/js/file.js");
                    let dir = "hiker://files/bgHouse/img/";
                    let name = file.getName(input).replace("_fileSelect_", "");
                    let path = dir + name;
                    if(file.copyFile(input, getPath(path).slice(7), true)){
                        return "copy://"+path;
                    }else{
                        return "toast://复制失败";
                    }
                }),
            });
    }
    setResult(d);
}

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