!function(a){"use strict";window.ParsleyConfig={errorClass:"has-error",successClass:"has-success",classHandler:function(a){return a.$element.parents(".form-group")},errorsContainer:function(a){return a.$element.parents(".form-group")},errorsWrapper:'<span class="help-block">',errorTemplate:"<div></div>"};var b={init:function(){a("li.active").parents("li").addClass("active"),a("img").unveil()}},c={init:function(){var b=a(window).width(),c=Math.ceil((b-2e3)/2)-2;a(".avatars").css("margin-right",c).css("margin-left",c),a(".avatars ul").css("opacity",1).css("visibility","visible")}},d={init:function(){b.init(),c.init()}},e={init:function(){}},f={init:function(){c.init()}},g={init:function(){}};a(document).ready(d.init),a(window).load(e.init),a(window).resize(f.init),a(window).scroll(g.init)}(jQuery);