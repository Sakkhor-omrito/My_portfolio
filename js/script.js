var typed = new Typed('.type', {
    strings: ['Front End Developer', 
    'Designer',
    'Freelancer'
],
    typeSpeed: 150,
    backSpeed:100,
    loop:true,
  });
$(function(){

    let menuTop =$('.custom_nav').offset().top;
    
    $(window).on('scroll',function(){
         
        let scrollToTop=$(window).scrollTop();

   if(scrollToTop>menuTop){
      $(".custom_nav").addClass("menufix");
   }else{
    $(".custom_nav").removeClass("menufix");
   }

//back to top
if(scrollToTop>500){
 $('.back_top').fadeIn(1000);
}else{
    $('.back_top').fadeOut(1000); 
}


// $('.back_top').on('click',function(){

//     $('html,body').animate({
//        scrollTop:0
       
//     });

// });


    });
    $('.back_top').click(function(){
        $('html,body').animate({
          scrollTop:0
        },800)
      });
      

      // wow js
      new WOW().init();
});

//email js
(function () {
  emailjs.init('QD0YLvJM53PQ2lW4R');
})();


//submit btn
function SendMail(){
  const params={
    from_name :document.getElementById("fullName").value,
    email_id :document.getElementById("email").value,
    project_type :document.getElementById("project").value,
    Message :document.getElementById("Message").value
  }
  emailjs.send("service_ty0nlvm","template_kvaxhub",params).then(function(res){
     alert("success!" + res.status);
  });
}
