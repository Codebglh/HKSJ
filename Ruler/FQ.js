function F() {
  var display = [];
  var data = JSON.parse(
    fetch("https://cdn.jsdelivr.net/gh/Codebglh/HKSJ@0.1.6/Ruler/FQ.json")
  );
  var app_list = data.list;
  for (let i in app_list) {
    display.push({
      title: app_list[i],
      col_type: "text_1",
      url: "hiker://empty",
    });
    let app_detail = JSON.parse(data.app_list[i]);
    let names = app_detail.name;
    for (let j in names) {
      display.push({
        title: names[j],
        col_type: "icon_4",
        url: app_detail.url[j],
        pic_url: app_detail.pic_url[j],
      });
    }
  }

  setResult(display);
}
