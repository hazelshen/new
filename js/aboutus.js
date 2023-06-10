//動畫滑入滑出
    
    window.addEventListener('scroll', function() {
      var paragraphFirst = document.querySelector('.paragraph-first');
      var paragraphSecond = document.querySelector('.paragraph-second');
      var paragraphThird = document.querySelector('.paragraph-third');
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      var windowHeight = window.innerHeight;
      var triggerPosition = 30; // 觸發滑入效果的位置
    
      if (scrollPosition > triggerPosition) {
        paragraphFirst.classList.remove('reverse');
        paragraphFirst.style.opacity = '1';
        paragraphFirst.style.transform = 'translateX(0)';
      } else {
        paragraphFirst.classList.add('reverse');
        paragraphFirst.style.opacity = '0';
        paragraphFirst.style.transform = 'translateX(-100px)';
      }
    
      if (scrollPosition > triggerPosition + 400) {
        paragraphSecond.classList.remove('reverse');
        paragraphSecond.style.opacity = '1';
        paragraphSecond.style.transform = 'translateX(0)';
      } else {
        paragraphSecond.classList.add('reverse');
        paragraphSecond.style.opacity = '0';
        paragraphSecond.style.transform = 'translateX(-100px)';
      }
    
      if (scrollPosition > triggerPosition + 400) {
        paragraphThird.classList.remove('reverse');
        paragraphThird.style.opacity = '1';
        paragraphThird.style.transform = 'translateX(0)';
      } else {
        paragraphThird.classList.add('reverse');
        paragraphThird.style.opacity = '0';
        paragraphThird.style.transform = 'translateX(100px)';
      }
    });
    
     