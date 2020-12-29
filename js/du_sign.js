/*
*第二红色导航适应H5
*/
var whd = 0;$(".n_c_041 a").each(function(k,v){whd +=30;whd += $(this).width();});if($(window).width()<=767){$(".n_c_041").css("width",whd);}
/*
*轮播图相关手势适应H5
*/


//首次进入页面延迟轮播，幻灯优化第一条白屏2018-01-09
setTimeout(function(){
    $('#myCarousel').carousel({interval: 4000});
}, 100);
//js 判断当前页面是否被浏览，幻灯优化第一条白屏2018-01-09

var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {
        $('#myCarousel').carousel({interval: 4000});
    }else{
        $("#myCarousel").carousel('pause');
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);


//手机端触摸翻页

$('body').on('touchstart', '#myCarousel .item', function(e) {
    var touch = e.originalEvent,
    startX = touch.changedTouches[0].pageX;
    startY = touch.changedTouches[0].pageY;
    $(this).on('touchmove', function(e) {
        e.preventDefault();
        touch = e.originalEvent.touches[0] ||
            e.originalEvent.changedTouches[0];
        if (touch.pageX - startX > 10) {
            $("#myCarousel").carousel('prev');
            $(this).off('touchmove');
        } else if (touch.pageX - startX < -10) {
            $("#myCarousel").carousel('next');
            $(this).off('touchmove');
        };
      			 $(this).off('touchend');
    });
  		$(this).on('touchend', function() {
            $(this).off('touchmove');
            window.location.href = $('#myCarousel .item.active').attr("data-url");
        });         
}).on('touchend', function() {
    $(this).off('touchmove');
});