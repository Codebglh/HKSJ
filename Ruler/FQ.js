function getColor(){
  var colors = [
    "#83559e",
    "#ff7512",
    "#cb54ff",
    "#ff5358",
    "#ff9044",
    "#7678ff",
    "#34b1ff",
  ];//颜色可自行添加
  return colors[Math.floor(Math.random() * colors.length)]//返回随机颜色
}

function F() {
  var display = [];
  var data = JSON.parse(
    fetch("https://cdn.jsdelivr.net/gh/Codebglh/HKSJ@0.2.4/Ruler/FQ.json")
  );
  var app_list = data.list;
  for (let i in app_list) {
    display.push({
      title: ' ““””<font color="'+getColor()+'">'+app_list[i]+'</font>',
      col_type: "text_center_1",
      url: "hiker://empty",
    });
    let app_detail = eval("data."+app_list[i]);
    let names = app_detail.name;
    for (let j in names) {
      display.push({
        title: names[j],
        col_type: "icon_4",
        url: "download://"+app_detail.url[j],
        pic_url: app_detail.pic_url[j],
      });
    }
    display.push({
      col_type:"line",
    })
  }

  setResult(display);
}
