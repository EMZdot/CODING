
$(document).on("click",function(){
    $(".female").throwable({
        containment: "window",
        drag:true,
        gravity:{x:0,y:1},
        autostart:true,
        damping:-100,
        bounce:0.5,
        collisionDetection: true
    });
});

$(".tog1").hover(function(){
  $('img',this).toggle();
});
