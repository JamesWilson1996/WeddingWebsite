function initMap() {
    var e = { lat: 53.980631837971, lng: -1.8907318539801654 },
        a = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 15, center: e, scrollwheel: !1 });
    new google.maps.Marker({ position: e, map: a });
}
function initBBSRMap() {
    var e = { lat: 53.980631837971, lng: -1.8907318539801654 },
        a = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 15, center: e, scrollwheel: !1 });
    new google.maps.Marker({ position: e, map: a });
}
function alert_markup(e, a) {
    return '<div class="alert alert-' + e + '" role="alert">' + a + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
$(document).ready(function () {
    $(".wp1").waypoint(
        function () {
            $(".wp1").addClass("animated fadeInLeft");
        },
        { offset: "75%" }
    ),
        $(".wp2").waypoint(
            function () {
                $(".wp2").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".wp3").waypoint(
            function () {
                $(".wp3").addClass("animated fadeInLeft");
            },
            { offset: "75%" }
        ),
        $(".wp4").waypoint(
            function () {
                $(".wp4").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".wp5").waypoint(
            function () {
                $(".wp5").addClass("animated fadeInLeft");
            },
            { offset: "75%" }
        ),
        $(".wp6").waypoint(
            function () {
                $(".wp6").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".wp7").waypoint(
            function () {
                $(".wp7").addClass("animated fadeInUp");
            },
            { offset: "75%" }
        ),
        $(".wp8").waypoint(
            function () {
                $(".wp8").addClass("animated fadeInLeft");
            },
            { offset: "75%" }
        ),
        $(".wp9").waypoint(
            function () {
                $(".wp9").addClass("animated fadeInRight");
            },
            { offset: "75%" }
        ),
        $(".flexslider").flexslider({ animation: "slide" }),
        $(".single_image").fancybox({ padding: 4 }),
        $(".fancybox").fancybox({ padding: 4, width: 1e3, height: 800 }),
        $('[data-toggle="tooltip"]').tooltip(),
        $(".nav-toggle").click(function () {
            $(this).toggleClass("active"), $(".header-nav").toggleClass("open"), event.preventDefault();
        }),
        $(".header-nav li a").click(function () {
            $(".nav-toggle").toggleClass("active"), $(".header-nav").toggleClass("open");
        }),
        $(function () {
            $(window).scroll(function () {
                20 <= $(window).scrollTop()
                    ? ($("section.navigation").addClass("fixed"), $("header").css({ "border-bottom": "none", padding: "35px 0" }), $("header .member-actions").css({ top: "26px" }), $("header .navicon").css({ top: "34px" }))
                    : ($("section.navigation").removeClass("fixed"),
                      $("header").css({ "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)", padding: "50px 0" }),
                      $("header .member-actions").css({ top: "41px" }),
                      $("header .navicon").css({ top: "48px" }));
            });
        }),
        $(function () {
            $("a[href*=#]:not([href=#])").click(function () {
                if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                    var e = $(this.hash);
                    if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({ scrollTop: e.offset().top - 90 }, 2e3), !1;
                }
            });
        });
    var e = document.getElementsByClassName("share-bar"),
        a = document.createElement("script");
    (a.type = "text/javascript"), (a.async = !0), (a.src = "https://apis.google.com/js/platform.js");
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(a, t);
    for (var n = 0; n < e.length; n++) {
        var o =
            '<iframe allowtransparency="true" frameborder="0" scrolling="no"src="https://platform.twitter.com/widgets/tweet_button.html?url=' +
            encodeURIComponent(window.location) +
            "&amp;text=" +
            encodeURIComponent(document.title) +
            '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"style="width:105px; height:21px;"></iframe><iframe src="//www.facebook.com/plugins/like.php?href=' +
            encodeURIComponent(window.location) +
            '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe><div class="g-plusone" data-size="medium"></div>';
        (e[n].innerHTML = o), (e[n].style.display = "inline-block");
    }
    $(".player").YTPlayer(),
        $("#btn-show-map").click(function () {
            $("#map-content").toggleClass("toggle-map-content"), $("#btn-show-content").toggleClass("toggle-map-content");
        }),
        $("#btn-show-content").click(function () {
            $("#map-content").toggleClass("toggle-map-content"), $("#btn-show-content").toggleClass("toggle-map-content");
        });
    $("#rsvp-form").on("submit", function (e) {
        e.preventDefault();
        var a = $(this).serialize();
        a = a.concat("&invoker=rsvp");
        $("#alert-wrapper").html(alert_markup("info", "<strong>Just a sec!</strong> We are saving your details."));
        if (MD5($('#invite_code').val()) !== 'cc485beea0bdcdb7ad2fa1e7213bd4eb' && MD5($('#invite_code').val()) !== '5f22e82f3d2c279d57c76a0513276abb') {
            $("#alert-wrapper").html(alert_markup("danger", "<strong>Sorry!</strong> Your invite code is incorrect."));
        } else {
            if (MD5($('#invite_code').val()) == 'cc485beea0bdcdb7ad2fa1e7213bd4eb') {
                var startDate = new Date("Nov 6, 2025 13:30");
            }
            else {
                var startDate = new Date("Nov 6, 2025 19:00");
            }

            var r = createCalendar({
                options: { class: "", id: "" },
                data: {
                    title: "Becky and James Wedding",
                    start: startDate,
                    end: new Date("Nov 7, 2025 00:00"),
                    address: "Tithe Barn, Bolton Abbey, Skipton, BD23 6EX",
                    description: "We can't wait to see you on our big day. For any queries or issues, please contact James on 07415 700445.",
                },
            });
            $("#add-to-cal").html(r)

            $.post("https://script.google.com/macros/s/AKfycbxcKzYIy_2ZHwdLnwj8I5QB6DzZHegEOpN4Q2BhVmRJTNr3gdhBJgOhXx-xdSjc_4sXdQ/exec", a)
                        .done(function (e) {
                            console.log(e),
                                "error" === e.result
                                    ? $("#alert-wrapper").html(alert_markup("danger", e.message))
                                    : ($("#alert-wrapper").html(""), "yes" === $("#rsvp_status").val().toLowerCase() ? $("#rsvp-modal").modal("show") : $("#rsvp-modal-no").modal("show"));
                        })
                        .fail(function (e) {
                            console.log(e), $("#alert-wrapper").html(alert_markup("danger", "<strong>Sorry!</strong> There is some issue with the server. "));
                        });
        }
    });
    $('#request-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        data = data.concat("&invoker=requests");
        $('#request-alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your request.'));
        if (!$("#song_url").val().includes("spotify") && !$("#song_url").val().includes("youtube") && !$("#song_url").val().includes("youtu.be")) {
            $("#request-alert-wrapper").html(alert_markup("danger", "<strong>Sorry!</strong> Only Spotify/YouTube links are supported. "));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbxcKzYIy_2ZHwdLnwj8I5QB6DzZHegEOpN4Q2BhVmRJTNr3gdhBJgOhXx-xdSjc_4sXdQ/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#request-alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#request-alert-wrapper').html(alert_markup('success', 'Thank you for submitting a song request!'));
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#request-alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
                });
        }
    });
});
var MD5 = function (e) {
    function a(e, a) {
        return (e << a) | (e >>> (32 - a));
    }
    function t(e, a) {
        var t, n, o, r, s;
        return (
            (o = 2147483648 & e),
            (r = 2147483648 & a),
            (s = (1073741823 & e) + (1073741823 & a)),
            (t = 1073741824 & e) & (n = 1073741824 & a) ? 2147483648 ^ s ^ o ^ r : t | n ? (1073741824 & s ? 3221225472 ^ s ^ o ^ r : 1073741824 ^ s ^ o ^ r) : s ^ o ^ r
        );
    }
    function n(e, n, o, r, s, _, i) {
        var l;
        return (e = t(e, t(t(((l = n) & o) | (~l & r), s), i))), t(a(e, _), n);
    }
    function o(e, n, o, r, s, _, i) {
        var l;
        return (e = t(e, t(t((n & (l = r)) | (o & ~l), s), i))), t(a(e, _), n);
    }
    function r(e, n, o, r, s, _, i) {
        return (e = t(e, t(t(n ^ o ^ r, s), i))), t(a(e, _), n);
    }
    function s(e, n, o, r, s, _, i) {
        return (e = t(e, t(t(o ^ (n | ~r), s), i))), t(a(e, _), n);
    }
    function _(e) {
        var a,
            t = "",
            n = "";
        for (a = 0; a <= 3; a++) t += (n = "0" + ((e >>> (8 * a)) & 255).toString(16)).substr(n.length - 2, 2);
        return t;
    }
    var i,
        l,
        p,
        c,
        d,
        f,
        m,
        g,
        h,
        u = [];
    for (
        u = (function (e) {
            for (var a, t = e.length, n = t + 8, o = 16 * (1 + (n - (n % 64)) / 64), r = Array(o - 1), s = 0, _ = 0; _ < t; ) (s = (_ % 4) * 8), (r[(a = (_ - (_ % 4)) / 4)] = r[a] | (e.charCodeAt(_) << s)), _++;
            return (s = (_ % 4) * 8), (r[(a = (_ - (_ % 4)) / 4)] = r[a] | (128 << s)), (r[o - 2] = t << 3), (r[o - 1] = t >>> 29), r;
        })(
            (e = (function (e) {
                e = e.replace(/\r\n/g, "\n");
                for (var a = "", t = 0; t < e.length; t++) {
                    var n = e.charCodeAt(t);
                    n < 128
                        ? (a += String.fromCharCode(n))
                        : (127 < n && n < 2048 ? (a += String.fromCharCode((n >> 6) | 192)) : ((a += String.fromCharCode((n >> 12) | 224)), (a += String.fromCharCode(((n >> 6) & 63) | 128))), (a += String.fromCharCode((63 & n) | 128)));
                }
                return a;
            })(e))
        ),
            f = 1732584193,
            m = 4023233417,
            g = 2562383102,
            h = 271733878,
            i = 0;
        i < u.length;
        i += 16
    )
        (f = n((l = f), (p = m), (c = g), (d = h), u[i + 0], 7, 3614090360)),
            (h = n(h, f, m, g, u[i + 1], 12, 3905402710)),
            (g = n(g, h, f, m, u[i + 2], 17, 606105819)),
            (m = n(m, g, h, f, u[i + 3], 22, 3250441966)),
            (f = n(f, m, g, h, u[i + 4], 7, 4118548399)),
            (h = n(h, f, m, g, u[i + 5], 12, 1200080426)),
            (g = n(g, h, f, m, u[i + 6], 17, 2821735955)),
            (m = n(m, g, h, f, u[i + 7], 22, 4249261313)),
            (f = n(f, m, g, h, u[i + 8], 7, 1770035416)),
            (h = n(h, f, m, g, u[i + 9], 12, 2336552879)),
            (g = n(g, h, f, m, u[i + 10], 17, 4294925233)),
            (m = n(m, g, h, f, u[i + 11], 22, 2304563134)),
            (f = n(f, m, g, h, u[i + 12], 7, 1804603682)),
            (h = n(h, f, m, g, u[i + 13], 12, 4254626195)),
            (g = n(g, h, f, m, u[i + 14], 17, 2792965006)),
            (f = o(f, (m = n(m, g, h, f, u[i + 15], 22, 1236535329)), g, h, u[i + 1], 5, 4129170786)),
            (h = o(h, f, m, g, u[i + 6], 9, 3225465664)),
            (g = o(g, h, f, m, u[i + 11], 14, 643717713)),
            (m = o(m, g, h, f, u[i + 0], 20, 3921069994)),
            (f = o(f, m, g, h, u[i + 5], 5, 3593408605)),
            (h = o(h, f, m, g, u[i + 10], 9, 38016083)),
            (g = o(g, h, f, m, u[i + 15], 14, 3634488961)),
            (m = o(m, g, h, f, u[i + 4], 20, 3889429448)),
            (f = o(f, m, g, h, u[i + 9], 5, 568446438)),
            (h = o(h, f, m, g, u[i + 14], 9, 3275163606)),
            (g = o(g, h, f, m, u[i + 3], 14, 4107603335)),
            (m = o(m, g, h, f, u[i + 8], 20, 1163531501)),
            (f = o(f, m, g, h, u[i + 13], 5, 2850285829)),
            (h = o(h, f, m, g, u[i + 2], 9, 4243563512)),
            (g = o(g, h, f, m, u[i + 7], 14, 1735328473)),
            (f = r(f, (m = o(m, g, h, f, u[i + 12], 20, 2368359562)), g, h, u[i + 5], 4, 4294588738)),
            (h = r(h, f, m, g, u[i + 8], 11, 2272392833)),
            (g = r(g, h, f, m, u[i + 11], 16, 1839030562)),
            (m = r(m, g, h, f, u[i + 14], 23, 4259657740)),
            (f = r(f, m, g, h, u[i + 1], 4, 2763975236)),
            (h = r(h, f, m, g, u[i + 4], 11, 1272893353)),
            (g = r(g, h, f, m, u[i + 7], 16, 4139469664)),
            (m = r(m, g, h, f, u[i + 10], 23, 3200236656)),
            (f = r(f, m, g, h, u[i + 13], 4, 681279174)),
            (h = r(h, f, m, g, u[i + 0], 11, 3936430074)),
            (g = r(g, h, f, m, u[i + 3], 16, 3572445317)),
            (m = r(m, g, h, f, u[i + 6], 23, 76029189)),
            (f = r(f, m, g, h, u[i + 9], 4, 3654602809)),
            (h = r(h, f, m, g, u[i + 12], 11, 3873151461)),
            (g = r(g, h, f, m, u[i + 15], 16, 530742520)),
            (f = s(f, (m = r(m, g, h, f, u[i + 2], 23, 3299628645)), g, h, u[i + 0], 6, 4096336452)),
            (h = s(h, f, m, g, u[i + 7], 10, 1126891415)),
            (g = s(g, h, f, m, u[i + 14], 15, 2878612391)),
            (m = s(m, g, h, f, u[i + 5], 21, 4237533241)),
            (f = s(f, m, g, h, u[i + 12], 6, 1700485571)),
            (h = s(h, f, m, g, u[i + 3], 10, 2399980690)),
            (g = s(g, h, f, m, u[i + 10], 15, 4293915773)),
            (m = s(m, g, h, f, u[i + 1], 21, 2240044497)),
            (f = s(f, m, g, h, u[i + 8], 6, 1873313359)),
            (h = s(h, f, m, g, u[i + 15], 10, 4264355552)),
            (g = s(g, h, f, m, u[i + 6], 15, 2734768916)),
            (m = s(m, g, h, f, u[i + 13], 21, 1309151649)),
            (f = s(f, m, g, h, u[i + 4], 6, 4149444226)),
            (h = s(h, f, m, g, u[i + 11], 10, 3174756917)),
            (g = s(g, h, f, m, u[i + 2], 15, 718787259)),
            (m = s(m, g, h, f, u[i + 9], 21, 3951481745)),
            (f = t(f, l)),
            (m = t(m, p)),
            (g = t(g, c)),
            (h = t(h, d));
    return (_(f) + _(m) + _(g) + _(h)).toLowerCase();
};
