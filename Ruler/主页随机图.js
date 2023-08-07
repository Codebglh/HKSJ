longClick: [ {
    title: " 删除 ",
    js: $.toString(() => {
        deleteFile()
        refreshPage();
        toast("轮播已停止");
    }),
},]



function jixie() {
    let name=input.split("/").at(-1);

    require(config.依赖);
    let dir = "hiker://files/bgHouse/src/"+pathlist[getVar("icon")]+name;
    downloadFile(input, dir);
    if(fileExist(dir)){
        return "toast://复制成功";
    }else{
        return "toast://复制失败";
    }
}
$("","请输入地址").input(jixie)




