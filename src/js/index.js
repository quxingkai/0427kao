var mySwiper = new Swiper('.pages',{
    onSlideChangeEnd:function(e){
        var ind = e.activeIndex;
        $('footer dl').eq(ind).addClass('bg').siblings().removeClass('bg');
    }
});
new IScroll('.banlist',{
    scrollX:true,
    scrollY:false
})
new Swiper('.banner',{
    autoplay:1000,
    loop:true
});
// 点击切换
$('.footer').on('click','dl',function(){
    var ind = $(this).index();
    $(this).addClass('bg').siblings().removeClass('bg');
    mySwiper.slideTo(ind);
});