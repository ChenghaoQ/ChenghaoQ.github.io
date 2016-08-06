;$(function()
{
    'use strict';/*严格模式*/
    
    
    
    var backbutton=$('.logo'),
        navbar=$('#navbar');

    function backback()
    {
        $('html,body').animate({
            scrollTop:0
        },800)
    }
    function hidebutton()
    {
        if($(window).scrollTop() > $(window).height())
            navbar.fadeIn();
        else
            navbar.fadeOut();
    }

    backbutton.on('click',backback)
    $(window).on('scroll',hidebutton)
    $(window).trigger('scroll');            
                
                
}) /*自动加载*/