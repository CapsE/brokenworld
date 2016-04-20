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
    });

    var $counters = {};
    $(".counter").each(function(){
       $counters[$(this).data("for")] = $(this);
    });

    $("textarea").keyup(function(){
        var $c = $counters[$(this).attr("id")];
        var length = $(this).val().length;
        $c.html(length);

        if(length < 50 || length > 400){
            $c.css("color", "red");
        }else if(length < 140 || length > 250){
            $c.css("color", "orange");
        }else {
            $c.css("color", "green");
        }
    });

    console.log($counters);
});
