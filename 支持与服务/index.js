/**
 * Created by libaoyi on 2018/8/12.
 */
//������֧�ֺͷ���Ķ�̬����



 $(function(){
     //1.banner��JQuery����
     $('.zixun').on('mouseenter',function() {
         $(this).css({
             class:'avtive'
         })
         $(this).children('.hover-logo').css({
                   display:'block'
               });
                 $(this).children('.logo').css({
                     display:'none'
                 });
     })
     $('.zixun').on('mouseleave',function() {
         $(this).css({
             class:'zixun'
         })
         $(this).children('.hover-logo').css({
             display:'none'
         });
         $(this).children('.logo').css({
             display:'block'
         });
     });



     //servicejQuery����
     $('.content>.out-content>.list-content').on('mouseenter',function(){
         $(this).addClass('boxShow1')
     });
     $('.content>.out-content>.list-content').on('mouseleave',function(){
         $(this).removeClass('boxShow1')
     });


     //case����
     $('.con-list').on('mouseenter',function(){
         $(this).children('.list').css({
             display:'none',
         });
         $(this).children('.list-hover').css({
             display:'block',
         })
     });

     $('.con-list').on('mouseleave',function(){
         $(this).children('.list').css({
             display:'block',
         });
         $(this).children('.list-hover').css({
             display:'none',
         });
     });

     //partner����
     $('.p-content>.p-list>li').on('mouseenter',function(){
         $(this).addClass('boxShow');
     });

     $('.p-content>.p-list>li').on('mouseleave',function(){
         $(this).removeClass('boxShow');
     });



     //-�̶����ұߴ���
     $('.right').on('mouseenter',function(){
         $(this).children('.right-img').css({
             display:'block'
         })
     });
     $('.right').on('mouseleave',function(){
         $(this).children('.right-img').css({
             display:'none'
         })
     })

     //b-return���뿪ʼ

     $(window).on('scroll',function(){
         var db=$(this).scrollTop();
         console.log(db);
         if(db>=1000){
             $('.b-return').show();
         }else{

             $('.b-return').hide();
         }

     });
 });




