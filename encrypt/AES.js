// var crypto = require('crypto');
const CryptoJS =require('crypto-js')

/**
 * AES 的CBC编码解密data数据
 */
 function getDecodeDESpass(x) {
    // 这里是密钥
    var keyHex = CryptoJS.enc.Utf8.parse('bgcodeesffssasaa');
    var plaintText = '1';

    //用CBC进行加密
    var encryptedData = CryptoJS.AES.encrypt(
        plaintText,
        keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
    // 打印出加密后的
    console.log('加密：',encryptedData.toString());
    // 再进行一些加工加密
   let encryptedBase64Str=encryptedData.toString()
    // encryptedData = encryptedData.ciphertext.toString();
    // // 转出Hex的
    // var encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedData);
    // console.log('解密前hex:' + encryptedHexStr);
    // 转成Base64
    // var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    // console.log('解密前Base64：'+ encryptedBase64Str);
    // 接下来就是解密了，讲最后Base64形式的进行解密
    var decryptedData = CryptoJS.AES.decrypt(
        encryptedBase64Str,
        keyHex, {
            // iv: CryptoJS.enc.Utf8.parse('0000000000000000'),
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
    let decryptedData1=decryptedData.toString(CryptoJS.enc.Utf8)
    console.log('解密：'+decryptedData1)
}


getDecodeDESpass()