// const CryptoJS =require('crypto-js')
// function encrypt(data){
//     var keyHex = CryptoJS.enc.Utf8.parse('bgcodeliuhong666');
//     var plaintText = data;
//     var encryptedData = CryptoJS.AES.encrypt(
//         plaintText,
//         keyHex, {
//             mode: CryptoJS.mode.ECB,
//             padding: CryptoJS.pad.Pkcs7
//         });
//     return CryptoJS.enc.Hex.parse(encryptedData.ciphertext.toString())
// }
//
// function decrypt(data){
//     var keyHex = CryptoJS.enc.Utf8.parse('bgcodeliuhong666');
//     var plaintText = CryptoJS.enc.Base64.stringify(data);
//     var decryptedData = CryptoJS.AES.decrypt(
//         plaintText,
//         keyHex, {
//             mode: CryptoJS.mode.ECB,
//             padding: CryptoJS.pad.Pkcs7
//         });
//     return decryptedData.toString(CryptoJS.enc.Utf8)
// }
//
// //
// // for (let i = 0; i < 1900; i++) {
// //     let a=encrypt('bgcode'+i);
// //     console.log('加密：'+a);
// //     let b=decrypt(a)
// //     console.log('解密：'+b)
// //     let sad="45160f5615517c68a299b2d71466779d"
// //     console.log(sad.length)
// // }
//
//
// function getnum(a) {
//     return Math.floor(Math.random() * a)
// }

// var Number=10
// @js:function getdata(items){return items[Math.floor(Math.random()*items.length)]}
// let data=request("https://cdn.jsdelivr.net/gh/Codebglh/HKSJ@0.0.6/Ruler/items.json")
// let url=JSON.parse(data).picurl
// 'https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.1/BJ'+getdata(url)
// function add(obj){
//     const filePath= "hiker://files/bgHouse/json/word.json";
//     let localmubans = JSON.parse(fetch(filePath));
//     let idex;
//     for (let i=0; i<localmubans.length;i++) {
//        if(localmubans.equals(obj)) {
//            idex=1;
//        }
//     }
//     if(idex!=1){
//         localmubans.push(obj);
//         writeFile(filePath, JSON.stringify(localmubans));
//     }
// }
// var items=["https://v1.hitokoto.cn/?encode=text","https://v1.hitokoto.cn/?encode=text&c=d&c=j&c=k&c=k&c=i&lang=cn"];var colors=['grey','#ff7512','#cb54ff','#ff5358','#ff9044','#7678ff','#34b1ff'];function getOne(items){return items[Math.floor(Math.random()*items.length)]}let word="此情若是长久时,网络不好可不行";var tips='<small><font color="'+getOne(colors)+'">'+word+'</font></small>';
// try{let word=request(getOne(items),{timeout:500});
//     add(word);
//     if(word.length<2){tips}
//     else{'<small><font color="'+getOne(colors)+'">'+word+'</font></small>'}}
// catch(e){tips}
var ss="此情若是长久时,网络不好可不行s";
var words="此情若是长久时,网络不好可不行";
if (ss==words){
    console.log("22")
}else {
    console.log("221")
}
// @js:function add(obj){
//     const filePath= "hiker://files/bgHouse/json/word.json";
//     let localmubans = JSON.parse(fetch(filePath));
//     let idex;
//     for (let i=0; i<localmubans.length;i++) {
//         if(localmubans==obj) {
//             idex=1;
//         }
//     }
//     if(idex!=1){
//         localmubans.push(obj);
//         writeFile(filePath, JSON.stringify(localmubans));
//     }
// }
// var items=["https://v1.hitokoto.cn/?encode=text","https://v1.hitokoto.cn/?encode=text&c=d&c=j&c=k&c=k&c=i&lang=cn"];var colors=['grey','#ff7512','#cb54ff','#ff5358','#ff9044','#7678ff','#34b1ff'];function getOne(items){return items[Math.floor(Math.random()*items.length)]}let word="此情若是长久时,网络不好可不行";var tips='<small><font color="'+getOne(colors)+'">'+word+'</font></small>';
// try{let word=request(getOne(items),{timeout:500});
//     add(word);
//     if(word.length<2){tips}
//     else{'<small><font color="'+getOne(colors)+'">'+word+'</font></small>'}}
// catch(e){tips}