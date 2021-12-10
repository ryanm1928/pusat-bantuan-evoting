$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });

    $(window).scroll(function(event) {
        var roll = $(this).scrollTop();
        console.log(roll);
    });
    $("#sourcecut").css('opacity', '0');
    $(window).scroll(function(event) {
        var roll = $(this).scrollTop();
        if (roll >= 758) {
            $("#sourcecut").css('opacity', '1');
        } else {
            $("#sourcecut").css('opacity', '0');

        }
    });
});


window.addEventListener("keydown", tekan, false);

function tekan(key) {
    if (key.keyCode == 191) {
        window.scrollTo(0, 0);
    }

}