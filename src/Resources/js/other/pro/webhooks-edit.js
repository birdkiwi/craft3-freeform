"use strict";$(function(){$("#webhook-type").on({change:function(){var s=$(this).val().replace(/\\/g,"\\\\");$("div[data-class-settings]").addClass("hidden"),$('div[data-class-settings="'.concat(s,'"]')).removeClass("hidden")}})});