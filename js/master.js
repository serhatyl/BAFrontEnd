//SearchBox
$(function(){
$("#addClass").click(function () {
      $('#qnimate').addClass('popup-box-on');
        });

        $("#removeClass").click(function () {
      $('#qnimate').removeClass('popup-box-on');
        });
})


/*Header shrink*/
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
            classie.add(header,"header-bg");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
                classie.remove(header,"header-bg");
            }
        }
    });
}
window.onload = init();
