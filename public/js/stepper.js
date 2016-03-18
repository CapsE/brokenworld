/**
 * Created by Lars on 18.03.2016.
 */
var Stepper = (function () {
    function Stepper($el) {
        this.current = 0;
        this.$steps = [];
        this.$el = $el;
        this.init();
    }
    Stepper.prototype.init = function () {
        this.$steps = this.$el.find(".step");
        var height = 0;
        this.$steps.each(function () {
            height = Math.max($(this).height(), height);
            $(this).hide();
        });
        this.show(0);
    };
    Stepper.prototype.next = function () {
        this.current++;
        this.show(this.current);
    };
    Stepper.prototype.show = function (id) {
        $(".prev").show();
        $(".next").show();
        if (id <= 0) {
            this.current = 0;
            if (this.onFirstSelected)
                this.onFirstSelected();
            $(".prev").hide();
        }
        else if (id >= this.$steps.length - 1) {
            this.current = this.$steps.length - 1;
            if (this.onLastSelected)
                this.onLastSelected();
            $(".next").hide();
        }
        this.current = id;
        this.$steps.hide();
        this.$steps.eq(id).show();
    };
    Stepper.prototype.prev = function () {
        this.current--;
        this.show(this.current);
    };
    return Stepper;
})();
//# sourceMappingURL=stepper.js.map