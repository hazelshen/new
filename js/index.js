//圖片輪播 
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            // items:3,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
            responsive: {
                0: {
                    items: 1 
                },
                768: {
                    items: 3 
                }
            }
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1500])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        });



        // 第二個輪播

        $(document).ready(function() {
          var owl = $('.news-box.owl-carousel');
          var isMobile = window.matchMedia("(max-width: 768px)").matches;
        
          if (isMobile) {
            owl.owlCarousel({
              items: 1,
              loop: true,
              margin: 10,
              autoplay: true,
              autoplayTimeout: 1000,
              autoplayHoverPause: true
            });
        
            owl.on('changed.owl.carousel', function(event) {
              var currentImage = $(event.target).find('.owl-item.active img');
              currentImage.css({
                'width': '316px',
                'height': '316px',
                'display': 'block',
                'margin-left': 'auto',
                'margin-right': 'auto'
              });
            });
          } else {
            owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.news-box').css({
              'display': 'flex',
              'justify-content': 'space-around'
            });
          }
        });
        
        
    



    
    
    //圖片由小到大
        document.addEventListener('DOMContentLoaded', function() {
          var isMobile = window.innerWidth < 768; 
      
          if (!isMobile) {
              var imageContainers = document.querySelectorAll('.image-container');
      
              function checkScroll() {
                  var windowHeight = window.innerHeight;
                  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
                  for (var i = 0; i < imageContainers.length; i++) {
                      var imageContainer = imageContainers[i];
                      var containerTop = imageContainer.offsetTop;
      
                      if (containerTop < windowHeight + scrollTop) {
                          var scrollPercentage = (windowHeight + scrollTop - containerTop) / windowHeight;
                          var scaleFactor = 0.1 + scrollPercentage * 0.18; 
      
                          imageContainer.style.transform = 'scale(' + scaleFactor + ')';
                          imageContainer.classList.add('show');
                      }
                  }
              }
      
              window.addEventListener('scroll', checkScroll);
              checkScroll();
          }
      });
      