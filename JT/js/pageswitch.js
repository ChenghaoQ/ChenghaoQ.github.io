(function($)
{
    var privateFun = function(){
        //
    }
    var PageSwitch = (function(){
        function PageSwitch(element,options){
            this.settins =$.extend(true,$.fn.PageSwitch.defualt,options||{});
            this.element = element;
        }
        PageSwitch.prototype ={
            init:function(){
                var me = this;
                setTimeout(function(){
                    console.log(this);
                },50)
            },
            pagesCount:function(){},
            switchLength:function(){},
            _initLayout : function(){},
            _initPaging : function(){},
            _initEvent : function(){}
        };
    })
    $.fn.PageSwitch = function(options)
    {
        return this.each(function(){
            var me = $(this)，
                instance = me.data("PageSwitch");
            if(!instance)
                {
                    instance = new PageSwitch(me,options);
                    me.data("PageSwitch",instance);
                }
            if($.type(options)==='string') return instance[options]();
            $("div").PageSwitch("init");
        });
    }
    $.fn.PageSwitch.default = {
        selectors:{
            sections:".sections",
            section:".section",
            page:".pages",
            active:".active"
        },
        index:0,
        easing : "ease",
        duration: 500,
        loop: false,
        pagination : true,
        keyboard:true,
        direction:"vertical",
        callback:""
    }
    $(function(){
        $("[data-PageSwitch]").PageSwitch();
    })
})
