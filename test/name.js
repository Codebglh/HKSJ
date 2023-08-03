const fs = require('fs');
const CryptoJS =require('crypto-js')
const url = require("url");
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
fs.readdir('/Users/bgcode/Documents/icon/BJ', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    let newName
    let a=0
    var items={pic_url:[]}
    for (let i = 0; i < files.length; i++) {
        let data=  files[i].match(/.*.png/g)
        function getType(data,rule) {
           return  data.match(rule)
        }
        // console.log(getType(files[i],/.*.png/g));
        if(getType(files[i],/.*.png/g)) {
            a+=1
            // newName=encrypt('bgcode'+a)+".png";
            // fs.renameSync(`/Users/bgcode/Documents/icon/HKSJ/more/${files[i]}`,`/Users/bgcode/Documents/icon/HKSJ/more//${newName}`)

            items.pic_url.push(files[i])
        }else if (getType(files[i],/.*.jpg/g)){
            a+=1
            items.pic_url.push(files[i])

        }


    }
    console.log(items.pic_url);
});
