/*
* 需求: 动态根据屏幕的大小, 加载不同的图片
*   (1) <= 640, 加载小图片
*   (2) > 640,  加载大图片
*   考虑在 自定义属性中 存储需要获取的 图片地址



* 思路:
*   1. 监听屏幕的变化  resize 事件
*   2. 获取屏幕宽度, 判断大屏还是小屏
*   3. 遍历获取需要加载的图片地址
*   4. 设置给 img src
* */

// bootstrp  基于bootstrp 所以，可以用jQuery
$(function () {
  var $imgs = $(".wjs_banner .item img");

  $(window).on("resize", function () {
    var width = $(window).width();
    var isMobile = width <= 640 ? true : false;
    // 循环遍历每张图片，如果 true  加载小图，否则加载大图
    $imgs.each(function (idx, ele) {
      //  console.log(ele);
      //   var src=isMobile?$(this).attr("data-msrc"):$(this).attr("data-psrc");
      // $(this).attr("src",src);

      // jQuery 提供了 data  方法，可以专门获取自定义属性，获取自定义属性不用 data-
      var src = isMobile ? $(this).data("msrc") : $(this).data("psrc");
      $(this).attr("src", src);
    });

  })

  // 首屏的时候如果屏幕尺寸不改变就不会触发 resize 事件，所以可以用trigger触发
  $(window).trigger("resize");
});


// 轮播图移动端，手指滑动翻页效果
$(function () {
  var $carousel = $(".carousel");

  //  记录手指开始的位置
  var startX = 0;
  var distanceX;
  $carousel.on("touchstart", function (e) {
    //  jQuery 中的触屏事件被包装了
    console.log(e);
    startX = e.originalEvent.touches[0].clientX;
  })
  $carousel.on("touchend", function (e) {
    // 手指触摸结束的时候是  changedTouches 事件触发。
    distanceX = e.originalEvent.changedTouches[0].clientX - startX;
    if (distanceX > 50) {
      $carousel.carousel("prev");
    }
    if (distanceX < -50) {
      $carousel.carousel("next");
    }
  })

})


// 微金所tab栏
    // 动态计算tab栏导航部分的宽度 
 $(function(){
    var  $tabsUl=$(".wjs_product .nav-tabs");    
    var $lis=$tabsUl.children();   
    var width=0;
    $lis.each(function(idx,ele){
       width+=$(this).width();
    }) 
    $tabsUl.width("554px");    
 })

//  tab栏导航部分标签页 区域滚动
$(function(){
   new IScroll(".ul_wrapper",{
     scrollX:true,
     scrollY:false
   })
})