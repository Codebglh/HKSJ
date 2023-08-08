js:
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




function download(obj) {
        const filePath = "hiker://files/bgHouse/json/http_url.json";
        if (fileExist(filePath)) {
            let localmubans = JSON.parse(fetch(filePath));
            let idex;
            for (let i = 0; i < localmubans.length; i++) {
                if (localmubans[i] == obj) {
                    idex = 1;
                }
            }
            if (idex != 1) {
                localmubans.push(obj);
                downloadFile(obj, "hiker://files/bgHouse/src/bj/"+obj.split("/").at(-1));
                writeFile(filePath, JSON.stringify(localmubans));
            }
        }else {
            saveFile("http_url.json", "hiker://files/bgHouse/json/");
            downloadFile(obj, "hiker://files/bgHouse/src/bj/"+obj.split("/").at(-1));
            var a = [];
            a.push(obj);
            writeFile(filePath, JSON.stringify(a));
        }
    }
    var d = [];
var data;
var num=10
for (var i = 0; i < num; i++) {
    try{
        data = JSON.parse(fetch(
            "https://www.dmoe.cc/random.php?return=json    "
        )).imgurl;
        download(data);
    }catch (e) {
        log(e)
    }


}
let list = getImg("/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/bj/")
d.push({
    title: "本地img_url生成",
    col_type: "text_1",
    url:$().rule(() =>{
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
            let list = getImg("/storage/emulated/0/Android/data/com.example.hikerview/files/Documents/bgHouse/src/bj/")
            for(var i in list) {
                const filePath1 = "hiker://files/bgHouse/json/img_url.json";
                let  pic= "hiker://files/bgHouse/src/bj/"+list[i];
                if (fileExist(filePath1)) {
                    let localmubans1 = JSON.parse(fetch(filePath1));
                    let idex1;
                    for (let i = 0; i < localmubans1.length; i++) {
                        if (localmubans1[i] == pic) {
                            idex1 = 1;
                        }
                    }
                    if (idex1 != 1) {
                        localmubans1.push(pic);
                        writeFile(filePath1, JSON.stringify(localmubans1));
                    }
                }else {
                    saveFile("img_url.json", "hiker://files/bgHouse/json/");
                    var b = [];
                    b.push(pic);
                    writeFile(filePath1, JSON.stringify(b));
                }
            }
            return "hiker://empty"

    }),
})
for(var i in list) {
    let pic="hiker://files/bgHouse/src/bj/"+list[i];
    d.push({
        title: list[i],
        col_type: "movie_2",
        url: "hiker://empty",
        extra:{longClick: [ {
                title: " 删除 ",
                js: $.toString((pic) => {
                    deleteFile(pic)
                    refreshPage(false);
                    toast("图片已删除");
                },pic),
            },]},
        pic_url:pic,
    });
}
setResult(d);