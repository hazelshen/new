//大圖換小圖

    function showLarge(e){
    //let small = e.target;
    //document.getElementById("large").src = small.src;
    document.getElementById("large").src = e.target.src;
    }

    function init(){
        let imgs = document.getElementsByClassName("small");
        for(let i=0; i<imgs.length; i++){
            imgs[i].onclick = showLarge;
        }
    }
    window.addEventListener("load", init, false);

    //按鈕點擊效果
 
        let quantity = 1;
    
        
        function increaseQuantity() {
            if (quantity < 10) {
                quantity++;
                document.getElementById("quantity").innerText = quantity;
            }
        }
    
       
        function decreaseQuantity() {
            if (quantity > 1) {
                quantity--;
                document.getElementById("quantity").innerText = quantity;
            }
        }
    
        // 加入購物車
        function addToCart() {
            window.alert("已經加入購物車");
        }

    //圖片輪播
        var owl = $('.owl-carousel');
            owl.owlCarousel({
                items:1,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true
            });
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            })
            $('.stop').on('click',function(){
                owl.trigger('stop.owl.autoplay')
            })
    
    