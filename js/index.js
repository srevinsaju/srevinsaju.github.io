function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}

console.log(`%c
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
.                                                                                 .
.                      uuuuuuu                                                    .
.                  uu$$$$$$$$$$$uu                                                .
.               uu$$$$$$$$$$$$$$$$$uu                                             .
.              u$$$$$$$$$$$$$$$$$$$$$u                                            .
.             u$$$$$$$$$$$$$$$$$$$$$$$u                                           .
.            u$$$$$$$$$$$$$$$$$$$$$$$$$u                                          .
.            u$$$$$$$$$$$$$$$$$$$$$$$$$u                                          .
.            u$$$$$$"   "$$$"   "$$$$$$u                                          .
.            "$$$$"      u$u       $$$$"                                          .
.             $$$u       u$u       u$$$                                           .
.             $$$u      u$$$u      u$$$                                           .
.              "$$$$uu$$$   $$$uu$$$$"                                            .
.               "$$$$$$$"   "$$$$$$$"                                             .
.                 u$$$$$$$u$$$$$$$u                                               .
.                  u$"$"$"$"$"$"$u                                                .
.       uuu        $$u$ $ $ $ $u$$       uuu                                      .
.      u$$$$        $$$$$u$u$u$$$       u$$$$                                     .
.       $$$$$uu      "$$$$$$$$$"     uu$$$$$$                                     .
.     u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$                                   .
.     $$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"                                   .
.      """      ""$$$$$$$$$$$uu ""$"""                                            .
.                uuuu ""$$$$$$$$$$uuu                                             .
.       u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$                                    .
.       $$$$$$$$$$""""           ""$$$$$$$$$$$"                                   .
.        "$$$$$"                      ""$$$$""                                    .
.          $$$"                         $$$$"                                     .
.                                                                                 .
.    Why are you here when you are not supposed to be?????????????????????????    .
.    Inspired by hackthebox.eu                                                    .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .`, "color:#9acc14; background:black; font-family: monospace");




var hits = 0;

function developerMode() {
    if (hits < 7) {
        const s1 = 'WW91IGFyZSBub3c=';
        const s2 = 'c3RlcHMgYXdheSBmcm9tIGJlaW5nIGEgZGV2ZWxvcGVy';
        $('#ss-aee').html(`<button class="delete" onclick="$('#ss-aee').css('opacity', 0)"></button>${window.atob(s1)} <strong> ${7 - hits} </strong> ${window.atob(s2)}`)
        $('#ss-aee').show()
        hits += 1;
    } else {
        if (hits == 7) {
            const s3 = 'WW91IGFyZSBub3cgYSBkZXZlbG9wZXI=';
            $('#ss-aee').html(`<button class="delete" onclick="$('#ss-aee').css('opacity', 0)"></button>${window.atob(s3)}`);
            hits += 1;
            document.body.contentEditable = true
            
            $("#ss-aee").css("opacity", 0);
        } else {
            const s4 = 'Tm8gbmVlZCwgeW91IGFyZSBhbHJlYWR5IGEgZGV2ZWxvcGVy';
            $('#ss-aee').html(`<button class="delete" onclick="$('#ss-aee').css('opacity', 0)"></button>${window.atob(s4)}`);
        }
    }
}



