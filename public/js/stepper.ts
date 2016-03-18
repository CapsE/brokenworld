/**
 * Created by Lars on 18.03.2016.
 */

class Stepper{

    public $el;
    public current:number = 0;
    public $steps = [];
    public onFirstSelected;
    public onLastSelected;

    constructor($el){
        this.$el = $el;
        this.init();
    }

    init(){
        this.$steps = this.$el.find(".step");
        var height = 0;
        this.$steps.each(function(){
            height = Math.max($(this).height(), height);
           $(this).hide();
        });

        this.show(0);
    }

    next(){
        this.current++;
        this.show(this.current);
    }

    show(id:number){
        $(".prev").show();
        $(".next").show();
        if(id <= 0){
            this.current = 0;
            if(this.onFirstSelected)
                this.onFirstSelected();
            $(".prev").hide()
        }else if(id >= this.$steps.length -1){
            this.current = this.$steps.length -1;
            if(this.onLastSelected)
                this.onLastSelected();
            $(".next").hide();
        }
        this.current = id;
        this.$steps.hide();
        this.$steps.eq(id).show();
    }

    prev(){
        this.current--;
        this.show(this.current);
    }

}