window.onload = function(){
    var tabItem = document.getElementsByClassName("tab-item");
    var item = tabItem[0].getElementsByTagName("div");

    var tabContent = document.getElementsByClassName("tab-content");
    var content = tabContent[0].getElementsByTagName("div");


    //给三个选项添加点击事件
    for(let i = 0; i < item.length; i++){

        //记录当前选项下标
        item[i].index = i;
        item[i].onclick = function(){
            // alert(this);

            //清除其他的样式
            for(let j = 0; j < item.length; j++){
                item[j].className = '';
                content[j].style.display = "none";
            }
            this.className = "active";
            content[item[i].index].style.display = "block";
        }
    }
}


function M1(){window.location.href = "UI 星期二 登录界面.html";}
		function M2(){alert("请先去登录")
			/*window.location.href = "C:\\Users\\86135\\Desktop\\新建文件夹\\ui arkpunk\\主页新闻 未登录.html"*/;}
		
		function M4(){alert("请先去登录")}function M3(){alert("请先去登录")}