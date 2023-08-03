var items = ["https://v1.hitokoto.cn/?encode=text", "https://v1.hitokoto.cn/?encode=text&c=d&c=j&c=k&c=k&c=i&lang=cn"];
var colors = ['grey', '#ff7512', '#cb54ff', '#ff5358', '#ff9044', '#7678ff', '#34b1ff'];

function getOne(items) {
    return items[Math.floor(Math.random() * items.length)]
}

let word = "此情若是长久时,网络不好可不行";
var tips = '<small><font color="' + getOne(colors) + '">' + word + '</font></small>';
try {
    let word = request(getOne(items), {timeout: 500});
    if (word.length < 2) {
        tips
    } else {
        '<small><font color="' + getOne(colors) + '">' + word + '</font></small>'
    }
} catch (e) {
    tips
}
console.log(getOne(colors))