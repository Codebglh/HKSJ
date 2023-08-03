const CryptoJS =require('crypto-js')

// function ja(linkid){
//     const j = CryptoJS.enc.Utf8.parse('bgcode');
//     const v= CryptoJS.enc.Utf8.parse('bgcode');
//     let j1 = CryptoJS.enc.Utf8.parse(linkid);
//
//     let jg = CryptoJS.AES.encrypt(j1, j, {
//         'vi':v,
//         'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
//     });
//     return jg.toString()
// }
// function jie(linkid){
//     const j = CryptoJS.enc.Utf8.parse('bgcode');
//     const v= CryptoJS.enc.Utf8.parse('bgcode');
//     const encryptedHexStr = CryptoJS.enc.Utf8.parse(linkid);
//     const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
//     const decrypt = CryptoJS.AES.decrypt(str, j, {
//         iv: v,
//         mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7
//
//     });
//     const decryptedStr = decrypt.toString(CryptoJS.AES.Utf8);
//     return decrypt.toString(CryptoJS.AES.Utf8);
//
// }
// for (let i = 0; i <3; i++) {
//     console.log( ja(1))
//     let a=ja(1)
//     console.log(jie(a))
// }

// 十六位十六进制数作为密钥

const SECRET_KEY = CryptoJS.enc.Utf8.parse("1234123412341234");

// 十六位十六进制数作为密钥偏移量

const SECRET_IV = CryptoJS.enc.Utf8.parse("1234123412341234");

// 四、封装加密方法

/**

 * 加密方法

 * @param data

 * @returns {string}

 */

 function encrypt(data) {

    if (typeof data === "object") {

        try {

            // eslint-disable-next-line no-param-reassign

            data = JSON.stringify(data);

        } catch (error) {

            console.log("encrypt error:", error);

        }

    }

    const dataHex = CryptoJS.enc.Utf8.parse(data);
      const key= CryptoJS.enc.Utf8.parse("bgcode");
    const encrypted = CryptoJS.AES.encrypt(dataHex,key ,{


        mode: CryptoJS.mode.ECB,

        padding: CryptoJS.pad.Pkcs7

    });

    return encrypted.ciphertext.toString();

}

// 五、封装解密方法

/**

 * 解密方法

 * @param data

 * @returns {string}

 */

 function decrypt(data) {

    const encryptedHexStr = CryptoJS.enc.Hex.parse(data);

    const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);

    const decrypt = CryptoJS.AES.decrypt(str, "bgcode", {


        mode: CryptoJS.mode.CBC,

        padding: CryptoJS.pad.Pkcs7

    });

    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);

    return decryptedStr.toString();

}


const data = "13172"



const encryptText = encrypt(data);

console.log("加密", encryptText);



const decryptText = decrypt(encryptText);

console.log("解密", decryptText);