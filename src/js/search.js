$.ajax({
    url:'/search',
    success: function(res){
       var data = JSON.parse(res);
       console.log(data);
       var oLi = '';
       data.info.forEach(function(v,i){
           oLi += `<li>${v}</li>`;
       });
       $('.searchlist').html(oLi);
    }
});

$('.clear').on('click',function(){
    $('.searchHistoy').html('');
});
$('#inp').on('keyup',function(event){
     if(event.keyCode ==13){
         var txt = $(this).val();
         var oLi = `<li><i class="icon iconfont icon-05"></i><span>${txt}</span></li>`;
         $('.searchHistoy').append(oLi);
         $(this).val('');
     }
});
$('.del').on('click',function(){
    $('#inp').val('');
});

