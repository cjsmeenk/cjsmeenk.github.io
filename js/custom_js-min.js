var offset=0,timeout=150;window.addEventListener("click",e=>{const a=Array.from(document.querySelectorAll('[data-toggle="collapse"]')),t=Array.from(document.querySelectorAll('[data-toggle="showall"], [data-toggle="hideall"]')),o=e.target;if(a.includes(o)){const e=o.getAttribute("data-target");collapse(e,"toggle"),o.classList.contains("minus")?setTimeout((function(){o.classList.remove("minus")}),timeout):o.classList.add("minus")}if(t.includes(o)){$(window).scrollTop(),$(window).height();if(offset=$(".hackmenu").offset().top-$(window).scrollTop(),"showall"==o.getAttribute("data-toggle"))collapse(".collapse.editedbooks, .collapse.articles, .collapse.shortarticles, .collapse.talks, .collapse.abstract, .collapse.fullentry, .collapse.project, .collapse.post, .collapse.item_details, .collapse.grad, .collapse.undergrad","show"),o.setAttribute("data-toggle","hideall");else{const e=o.getAttribute("data-target");collapse(e,"hide"),collapse(".collapse.project","hide"),o.setAttribute("data-toggle","showall"),o.set}setTimeout((function(){window.scrollTo(0,0);var e=$(".hackmenu").offset().top;window.scrollBy(0,e-offset)}),300)}},!1);const fnmap={toggle:"toggle",show:"add",hide:"remove"},collapse=(e,a)=>{Array.from(document.querySelectorAll(e)).forEach(e=>{e.classList[fnmap[a]]("show"),isinview()})};function checkforDoubleHeader(){$(".header-image--on").length>1&&$(".header-image").slice(1).removeClass("header-image--on"),$(".header-image:not(.header-image--on)").length>1&&$(".header-image").slice(1).addClass("header-image--on")}function switchHeader(e){if("default"==e)var a=$(".page__content").attr("data-image");else{var t=document.createElement("a");if(null!=$(".header-image.header-image--on").css("background-image")){t.href=$(".header-image.header-image--on").css("background-image").match(/url\([\'\"]*(.*?)[\'\"]*\)/)[1];var o=t.pathname}else o=$(".page__content").attr("data-image");if(e.hasAttribute("data-image"))a=e.getAttribute("data-image")}a!==o&&(o=a,$(window).width()<1024&&(o=o.replace(".","_wide.")),$(".header-image:not(.header-image--on)").css("background-image","url("+o+")"),$(".header-image:not(.header-image--on)").addClass("header-image--switch"),checkforDoubleHeader(),$(".header-image--switch").imagesLoaded({background:!0},(function(){$(".header-image--on").removeClass("header-image--on"),$(".header-image--switch").addClass("header-image--on"),$(".header-image--switch").removeClass("header-image--switch"),checkforDoubleHeader()})))}function isinview(){var e=$(window).height(),a=.2*e,t=.3*e;$(".header-switch-onscroll").each((function(){var e=$(this).offset().top-$(window).scrollTop();e>a&&e<t&&switchHeader(this)}))}$(document).ready((function(){isinview(),$(window).on("scroll",(function(){$.throttle(1e3,isinview())}))})),$("div").on("click",".showall",(function(){setTimeout((function(){window.scrollTo(0,0)}),400)})),$(window).load((function(){$(".trigger_popup_fricc").click((function(){$(".hover_bkgr_fricc").show()})),$(".hover_bkgr_fricc").click((function(){$(".hover_bkgr_fricc").hide()})),$(".popupCloseButton").click((function(){$(".hover_bkgr_fricc").hide()}))}));