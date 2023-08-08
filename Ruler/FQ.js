function F(){
    var url_head="https://ghproxy.com/https://github.com/Kr328/ClashForAndroid/releases/download/v2.5.12/cfa-2.5.12-";
    var url_back=[
        "foss-universal-release.apk",
        "premium-universal-release.apk",
        ]
    var name=["foss-clash","premium-clash"]
    var  display=[];

    for(let i in url_back){
        display.push({
            title:name,
            col_type: "icon_4",
            url:url_head+url_back[i],
            pic_url:"hiker://files/bgHouse/src/system/clashLogo.png"
        })
    }
    setResult(display);
}

