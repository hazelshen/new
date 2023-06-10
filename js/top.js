//top鍵
        window.onscroll = scrollFunction; //每當畫面捲動觸發一次

        function scrollFunction() { 
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
        }//網頁捲動超過200pixel就會跑出來 display設定成block 跑回上面就隱藏。

        // 重置scrollTop這個變數的值
        function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
   