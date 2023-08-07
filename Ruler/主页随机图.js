longClick: [ {
    title: " 删除 ",
    js: $.toString(() => {
        deleteFile()
        refreshPage();
        toast("轮播已停止");
    }),
},]