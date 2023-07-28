let rulerurl = "https://cdn.jsdelivr.net/gh/Codebglh/HKSJ@0.0.1/Ruler/main.js";
let relyruler = "";
if(fileExist('hiker://files/libs/' + md5(rulerurl) + '.js')){
    relyruler = rulerurl;
}
if(relyfile==""){
    let cjFile = request(rulerurl,{timeout:3000});

    relyruler = rulerurl;

}
