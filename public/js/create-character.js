/**
 * Created by Lars on 18.03.2016.
 */


$(window).load(function(){
    var stepper = new Stepper($(".stepper"));


    $(".next").click(function(){
        stepper.next();
    });
    $(".prev").click(function(){
        stepper.prev();
    });

    $(".stepper .content").height(window.innerHeight - $(".navbar").height() - $(".controls").height() - 100);

    $("#img-url").change(function(){
        if($(this).val() != ""){
            var $img = $("#character-img")
            $img.attr("src", $(this).val());
        }else{
            $img.hide();
        }
    });

    $("#character-img").load(function(){
        $(this).show();
    })
});
