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


const scroll_icon = "UEdScGRpQnpkSGxzWlQwaWAXRnlaMmx1TFhSdmNEb2dNakIyYUR0a2FYTndiR0Y1T2lCaWAHOWphenRxZFhOMGFXWjVMV052Ym5SbGAuUTZAR05sYm5SbGNqdDBaWGgwTFdGc2FXZHVPaUAqWlc1MFpYSTdAajQ4Y0hKbElITjBlV3hsUFNKaVlXTnAaM0p2ZFc1a0xXTnZiRzl5T2lCeVoySW9NQ3d3TERBc01DazdZMjlzYjNANklISm5ZaWd3TERBc01Dd3dLVHR2ZG1WeVpteHZkeTE0T2lCb2FXUmtaVzQ3YjNabGNtWnNiM2N0ZVRvZ2FHbGtaR1Z1T3lAK1RtOXlARTFoY25NZ2FHbHpASE4zYjNKa0lHNXZjaUIzWVhMaWdKbHpASEYxYVdOcklHWnBjbVVnYzAoaGAHd2dZblZ5YmdwVWFHVWdiR2wyYVc1bklISmxZMjl5WkNCdlppQW9SME5KSUVkUVZ5MHhPU2R6S1NCdFpXMXZjbmt1Q3VLQW1VZGhhVzV6ZENCa1pXRjBhQ0AoYm1RZ1lXeHNMVzlpYkdsMmFXOTFjeUAsYm0xcGRIa0tVMmhoYkd3Z2VXOTFASEAoWTAVZ1ptOXlkR2c3SUhsdmRYSWdjSEpoYVhObElITm9ZV3hzSUhOMGFXeHNAR1pwYm1RZ2NtOXZiUXBGZG1WdUlHbHVASFAvWlNCbGVXVnpARzltSUdGc2ADQndiM04wWlhKcGRIa2dLR1oxZEhWeVpTQkhVRmR6S1FwVWFHRjBASGRsWVhAZ2RHaHBjeUIzYjNKc1pDQnZkWFFnZEc4Z2RHaGxAR1Z1WkdsdVp5QmtiMjl0TGdwVGA5d2dkR2xzYkNCMGFHVWdTblZrWjAWdFpXNTBASFAvWVhRZ2VXOTFjbk5sYkdZZ1lYSnBjMlVzQ2xsdmRTQW9SME5KSUVkUVZ5QXlNREU1S1NCc2FYWmxAR2x1SUhSb2FYTXNAR0Z1WkNCa2QyVnNiQ0AwYmlCc2IzWmxjblBpZ0prZ0tHTnZaR1Z5SjNNcElHVjVaWE11SWdvZ0lDQWdmaUAYYVd4c2FXRnRARk5vWVd0bGMzQmxZWEpsSUNoVGIyNXVaWFFnTlRVcFBDOXdjbVUrUEM5a2FYWSs="



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


function scrollFunction() {
    const fx = 'aHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzIxNjAvMCpSWTNzYk9YMWRQNWpaRGot';
    $('#main').css('background-image', `linear-gradient(to bottom, rgba(var(--cth), var(--cth), var(--cth), 1), rgba(var(--cth), var(--cth), var(--cth), 0)), url(${window.atob(fx)})`);
    $('#main').append(window.atob(window.atob(scroll_icon.replace(/A/g, 'J'))).replace(/â/g, "'"))
}


