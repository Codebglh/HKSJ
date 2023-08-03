const CryptoJS =require('crypto-js')
function encrypt(data){
    var keyHex = CryptoJS.enc.Utf8.parse('bgcodeliuhong666');
    var plaintText = data;
    var encryptedData = CryptoJS.AES.encrypt(
        plaintText,
        keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
    return CryptoJS.enc.Hex.parse(encryptedData.ciphertext.toString())
}

function decrypt(data){
    var keyHex = CryptoJS.enc.Utf8.parse('bgcodeliuhong666');
    var plaintText = CryptoJS.enc.Base64.stringify(data);
    var decryptedData = CryptoJS.AES.decrypt(
        plaintText,
        keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
    return decryptedData.toString(CryptoJS.enc.Utf8)
}

//
// for (let i = 0; i < 1900; i++) {
//     let a=encrypt('bgcode'+i);
//     console.log('加密：'+a);
//     let b=decrypt(a)
//     console.log('解密：'+b)
//     let sad="45160f5615517c68a299b2d71466779d"
//     console.log(sad.length)
// }


function getnum(a) {
    return Math.floor(Math.random() * a)
}

var Number=10
@js:function getNum(){return Math.floor(Math.random()*10)+1}
'https://cdn.jsdelivr.net/gh/Codebglh/icon@0.0.1/BJ'+getNum()+'.png'
request("https://cdn.jsdelivr.net/gh/Codebglh/HKSJ@0.0.5/Ruler/items.json")
