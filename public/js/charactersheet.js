/**
 * Created by Lars on 11.03.2016.
 */

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $(".attribute-value.basic").change(function(){
        if($(this).val() > 4){
            $(this).val(4);
        }else if($(this).val() < 2){
            $(this).val(2);
        }
        var val = 0;
        $(".attribute-value.basic").each(function(){
            val += parseInt($(this).val());
        });
        if(val != 24){
            $(".attribute-value.basic").css("color","#f0ad4e" );
        }else{
            $(".attribute-value.basic").css("color","#2c3e50" );
        }
        calculateFinal();
    });

    var appliedBoni = {};
    var $race = $(".race");
    var $previewRace = $(".race-preview");
    $race.click(function(){
        $race.removeClass(".active");
        $previewRace.html("");
        $(this).addClass(".active");
        $previewRace.append($(this).find(".detail").clone(true, true).show());
        for(var k in appliedBoni){
            var field = $(".attribute-value.bonus-1." + k);
            field.val(parseInt(field.val()) + appliedBoni[k] * -1);
            field.css("color", "#2c3e50");
        }

        var newBoni = $(this).data("boni")[0];
        for(var k in newBoni){
            var field = $(".attribute-value.bonus-1." + k);
            field.val(parseInt(field.val()) + newBoni[k]);
            if(newBoni[k] < 0){
                field.css("color", "#d9534f");
            }else{
                field.css("color", "#5cb85c");
            }
        }
        appliedBoni = newBoni;
        calculateFinal();
    });

    function calculateFinal(){
        console.log("Calculating");
        $(".attribute-value.final").each(function(){
            var value = 0;
            $("." + $(this).data("attr")).each(function(){
                value += parseInt($(this).val());
            });
            $(this).val(value);
        });
    }

    $(".skill").each(function(){
       var attr = $(this).data("attr");
        $(".skills-" + attr).append($(this));
    });

    $(".attribute").mouseenter(function(){
        $(".skills-" + $(this).data("name")).show();
    });
    $(".attribute").mouseout(function(){
        $(".skill-wrapper").hide();
    });

});

