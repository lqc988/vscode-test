window.onload =
    function date() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var dd = date.getDay();
        if (month < 10) {
            month = "0" + month;

        }
        if (day < 10) {
            day = "0" + day;


        }
        var aaa = year + "年" + month + "月" + day + "日" + ' &nbsp&nbsp      ' + '星期' + dd;


        var x = document.getElementById('date')
        x.innerHTML = aaa;
    }